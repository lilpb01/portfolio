"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { hierarchy, cluster, HierarchyPointNode, HierarchyPointLink } from "d3-hierarchy";
import { linkRadial } from "d3-shape";
import { motion } from "framer-motion";

// ------------------------------------------------------------
// SkillTree.tsx — Radial Skill "Tree Graph" (React + Tailwind)
// ------------------------------------------------------------
// Features
// - Radial, branching tree that spreads in all directions (no radar chart).
// - Smooth entrance animations (framer-motion).
// - Hover tooltips and focus/highlight by category.
// - Responsive SVG that adapts to its container size.
// - Dark, minimal aesthetic to fit a modern portfolio.
//
// How to use
// 1) Install deps (if not already):
//    npm i d3 framer-motion
// 2) Drop this file into your project (e.g., components/SkillTree.tsx)
// 3) Use it anywhere: <SkillTree />
// 4) Edit the DATA object below to customize skills & proficiency.
// ------------------------------------------------------------

// Types
export type SkillNode = {
    name: string;
    level?: 1 | 2 | 3 | 4 | 5; // optional proficiency for leaf nodes (1–5)
    note?: string; // optional tooltip detail
    children?: SkillNode[];
};

// Processed node shape (after we stamp namePath)
export type SkillNodeWithPath = SkillNode & { namePath: string };

// --- Customize your skill hierarchy here ---
const DATA: SkillNode = {
    name: "Skills",
    children: [
        {
            name: "AI / ML",
            children: [
                { name: "Python", level: 5, note: "Primary ML language" },
                { name: "PyTorch", level: 4, note: "DL, research prototypes" },
                { name: "TensorFlow", level: 3, note: "Keras, model serving" },
                { name: "scikit-learn", level: 5, note: "Classical ML toolkit" },
                { name: "NumPy", level: 5 },
                { name: "Pandas", level: 5 },
                { name: "OpenCV", level: 4, note: "Computer Vision" },
                { name: "MediaPipe", level: 3, note: "Hand & pose tracking" },
                { name: "Matplotlib", level: 4 },
                { name: "Jupyter", level: 4 },
                { name: "Transformers", level: 3, note: "NLP/vision foundation models" },
                { name: "Diffusion Models", level: 3 }
            ]
        },
        {
            name: "Data & Infra",
            children: [
                { name: "SQL", level: 5, note: "Queries, analytics" },
                { name: "PostgreSQL", level: 4 },
                { name: "SQLite", level: 4 },
                { name: "SQLAlchemy", level: 4 },
                { name: "FastAPI", level: 4, note: "APIs & auth (JWT)" },
                { name: "Docker", level: 3 },
                { name: "Linux", level: 4 },
                { name: "Git", level: 5 }
            ]
        },
        {
            name: "Web",
            children: [
                { name: "TypeScript", level: 4 },
                { name: "JavaScript", level: 4 },
                { name: "React", level: 5 },
                { name: "Next.js", level: 4 },
                { name: "Tailwind CSS", level: 5 },
                { name: "Vercel", level: 4 },
                { name: "shadcn/ui", level: 3 }
            ]
        },
        {
            name: "Math / Stats",
            children: [
                { name: "Linear Algebra", level: 4 },
                { name: "Probability", level: 4 },
                { name: "Hypothesis Testing", level: 4 },
                { name: "Regression", level: 4 },
                { name: "R", level: 3 },
                { name: "MATLAB", level: 3 }
            ]
        },
        {
            name: "Creative / Misc",
            children: [
                { name: "Manim", level: 4, note: "STEM animations" },
                { name: "Pygame", level: 3 },
                { name: "Tableau", level: 3 },
                { name: "Signal Processing", level: 3, note: "Librosa, audio" }
            ]
        }
    ]
};

// Utility: map proficiency (1–5) to circle radius
function levelToRadius(level?: number) {
    if (!level) return 4;
    return 3 + level * 2; // 1→5px to 5→13px
}

// Polar → Cartesian helper (rotated so 0 rad points up)
function polarToCartesian(angle: number, radius: number) {
    const a = angle - Math.PI / 2; // rotate so 0 is at 12 o'clock
    return [Math.cos(a) * radius, Math.sin(a) * radius];
}

// Collect a set of node ids (by name path) under a focused subtree
function collectSubtree(node: HierarchyPointNode<SkillNodeWithPath>, set = new Set<string>()) {
    set.add(node.data.namePath);
    for (const c of node.children ?? []) collectSubtree(c as HierarchyPointNode<SkillNodeWithPath>, set);
    return set;
}

// Build a stable namePath for each node (root→leaf path)
// Build a stable namePath for each node (root→leaf path)
function stampNamePaths(
    node: HierarchyPointNode<SkillNode>,
    parentPath = ""
) {
    (node.data as SkillNodeWithPath).namePath =
        parentPath ? `${parentPath} / ${node.data.name}` : node.data.name;

    for (const c of node.children ?? []) {
        stampNamePaths(c, (node.data as SkillNodeWithPath).namePath);
    }
}



export default function SkillTree() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [dims, setDims] = useState({ width: 640, height: 640 });
    const [hovered, setHovered] = useState<string | null>(null);
    const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);
    const [focusSet, setFocusSet] = useState<Set<string> | null>(null);
    const [activeCats, setActiveCats] = useState<Record<string, boolean>>({});

    // Resize observer for responsive SVG
    useEffect(() => {
        if (!containerRef.current) return;
        const ro = new ResizeObserver((entries) => {
            for (const e of entries) {
                const { width, height } = e.contentRect;
                setDims({ width: Math.max(320, width), height: Math.max(320, height) });
            }
        });
        ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, []);

    // Layout computation
    const { nodes, links, root, radius } = useMemo(() => {
        const size = Math.min(dims.width, dims.height);
        const margin = 28;
        const r = size / 2 - margin;

        const root = hierarchy<SkillNode>(DATA)
            .sort((a, b) => (a.children && !b.children ? -1 : !a.children && b.children ? 1 : a.data.name.localeCompare(b.data.name)));

        const cl = cluster<SkillNode>().size([2 * Math.PI, r]);

        const laidRaw = cl(root);          // type: HierarchyPointNode<SkillNode>
        stampNamePaths(laidRaw);           // OK now (takes SkillNode)

        const laid = laidRaw as unknown as HierarchyPointNode<SkillNodeWithPath>;

        type PointNode = HierarchyPointNode<SkillNodeWithPath> & { cx: number; cy: number };

        const nodes: PointNode[] = laid.descendants().map((n) => {
            const [x, y] = polarToCartesian(n.x, n.y);
            return { ...(n as HierarchyPointNode<SkillNodeWithPath>), cx: x, cy: y } as PointNode;
        });
        type PointLink = HierarchyPointLink<SkillNodeWithPath>;

        // ✔ Link first, Node second
        const radial = linkRadial<PointLink, PointNode>()
            .angle((d) => d.x)
            .radius((d) => d.y);

        const links = (laid.links() as PointLink[]).map((lnk) => ({ d: radial(lnk as unknown as any) ?? "" }));
        return { nodes, links, root: laid, radius: r };
        ;
    }, [dims.width, dims.height]);

    // Initialize category toggles (top-level children)
    useEffect(() => {
        if (!root) return;
        if (Object.keys(activeCats).length) return; // already set
        const toggles: Record<string, boolean> = {};
        for (const c of root.children ?? []) toggles[c.data.name] = true;
        setActiveCats(toggles);
    }, [root]);

    // Compute visibility by active categories
    const visibleSet = useMemo(() => {
        if (!root) return new Set<string>();

        const enabled = new Set<string>(
            Object.entries(activeCats).filter(([, on]) => on).map(([k]) => k)
        );

        const s = new Set<string>();
        for (const c of root.children ?? []) {
            if (!enabled.has(c.data.name)) continue;
            // ✅ pass the WithPath node type
            collectSubtree(c as HierarchyPointNode<SkillNodeWithPath>, s);
        }

        // ✅ include the root's namePath so focus/dimming works consistently
        s.add((root.data as SkillNodeWithPath).namePath ?? root.data.name);
        return s;
    }, [activeCats, root]);

    // Click focus: restrict highlight to a subtree (click again to reset)
    type PointNode = HierarchyPointNode<SkillNodeWithPath> & { cx: number; cy: number };

    function handleNodeClick(node: PointNode) {
        const sub = collectSubtree(node); // expects HierarchyPointNode<SkillNodeWithPath>
        const same = focusSet && sub.size === focusSet.size && [...sub].every((k) => focusSet.has(k));
        setFocusSet(same ? null : sub);
    }

    // Tooltip helpers
    function showTooltip(evt: React.MouseEvent, text: string) {
        const rect = (evt.currentTarget as SVGElement).getBoundingClientRect();
        setTooltip({ x: evt.clientX - rect.left, y: evt.clientY - rect.top, text });
    }

    function hideTooltip() {
        setTooltip(null);
    }

    // Center & scale
    const size = Math.min(dims.width, dims.height);
    const viewBox = [-radius, -radius, radius * 2, radius * 2].join(" ");

    // Dim logic
    function isDimmed(namePath: string) {
        const outOfCategory = !visibleSet.has(namePath);
        const outOfFocus = focusSet ? !focusSet.has(namePath) : false;
        return outOfCategory || outOfFocus;
    }

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[700px] rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black overflow-hidden"
        >
            {/* Subtle glow backdrop */}
            <div className="pointer-events-none absolute inset-0 opacity-50">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-zinc-800/20" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl bg-zinc-700/20" />
            </div>

            {/* Controls */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                {(root?.children ?? []).map((c) => (
                    <button
                        key={c.data.name}
                        onClick={() => setActiveCats((m) => ({ ...m, [c.data.name]: !m[c.data.name] }))}
                        className={`text-xs rounded-full border px-3 py-1 transition ${activeCats[c.data.name]
                            ? "bg-zinc-800/70 border-zinc-700 text-zinc-100 hover:bg-zinc-800"
                            : "bg-transparent border-zinc-800 text-zinc-500 hover:text-zinc-300"
                            }`}
                        title={activeCats[c.data.name] ? "Hide category" : "Show category"}
                    >
                        {c.data.name}
                    </button>
                ))}
                <button
                    onClick={() => setFocusSet(null)}
                    className="text-xs rounded-full border border-zinc-800 text-zinc-400 px-3 py-1 hover:text-zinc-100"
                    title="Reset focus"
                >
                    Reset focus
                </button>
            </div>

            {/* Legend */}
            <div className="absolute top-4 right-4 z-10 text-xs text-zinc-400">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 backdrop-blur-sm">
                    <div className="mb-2 text-zinc-300">Proficiency</div>
                    <div className="flex items-center gap-2">
                        {[1, 3, 5].map((lvl) => (
                            <div key={lvl} className="flex items-center gap-1">
                                <svg width="18" height="18">
                                    <circle cx="9" cy="9" r={levelToRadius(lvl)} className="fill-zinc-300" />
                                </svg>
                                <span>{lvl}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SVG Graph */}
            <svg viewBox={viewBox} className="absolute inset-0 h-full w-full">
                <defs>
                    {/* Node halo */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Links */}
                <g>
                    {links.map((l, i) => (
                        <path
                            key={i}
                            d={l.d}
                            className="stroke-zinc-800/80"
                            strokeWidth={1}
                            fill="none"
                        />
                    ))}
                </g>

                {/* Nodes */}
                <g>
                    {nodes.map((n, i) => {
                        const namePath = (n.data as any).namePath as string;
                        const isLeaf = !n.children?.length;
                        const r = isLeaf ? levelToRadius(n.data.level) : 3;
                        const dimmed = isDimmed(namePath);
                        const fill = isLeaf ? (dimmed ? "#52525b" : "#e4e4e7") : dimmed ? "#3f3f46" : "#9ca3af";
                        const stroke = dimmed ? "#2a2a2e" : "#52525b";

                        return (
                            <motion.g
                                key={namePath}
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.0025 }}
                                transform={`translate(${n.cx}, ${n.cy})`}
                            >
                                <circle
                                    r={r}
                                    fill={fill}
                                    stroke={stroke}
                                    strokeWidth={1}
                                    filter={dimmed ? undefined : "url(#glow)"}
                                    onMouseEnter={(e) => {
                                        setHovered(namePath);
                                        const note = n.data.note ? ` — ${n.data.note}` : "";
                                        showTooltip(e as unknown as React.MouseEvent<SVGElement>, `${n.data.name}${note}`);
                                    }}
                                    onMouseMove={(e) => showTooltip(e as unknown as React.MouseEvent<SVGElement>, tooltip?.text ?? "")}
                                    onMouseLeave={() => {
                                        setHovered(null);
                                        hideTooltip();
                                    }}
                                    onClick={() => handleNodeClick(n)}
                                    style={{ cursor: "pointer" }}
                                />

                                {/* Labels for leaves */}
                                {isLeaf && !dimmed && (
                                    <text
                                        x={n.cx > 0 ? 10 : -10}
                                        y={4}
                                        textAnchor={n.cx > 0 ? "start" : "end"}
                                        className="select-none text-[10px] font-medium fill-zinc-300"
                                        transform={`translate(${-n.cx}, ${-n.cy})`}
                                    >
                                        {n.data.name}
                                    </text>
                                )}
                            </motion.g>
                        );
                    })}
                </g>

                {/* Center label */}
                <g>
                    <text
                        x={0}
                        y={0}
                        textAnchor="middle"
                        className="fill-zinc-500 text-sm tracking-widest"
                        style={{ letterSpacing: 2 }}
                    >
                        SKILLS
                    </text>
                </g>
            </svg>

            {/* Tooltip */}
            {tooltip && (
                <div
                    className="pointer-events-none absolute z-20 rounded-lg border border-zinc-800 bg-zinc-900/90 px-2 py-1 text-xs text-zinc-200 shadow-lg"
                    style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
                >
                    {tooltip.text}
                </div>
            )}

            {/* Footer hint */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-zinc-500">
                Tip: Click a node to focus that branch. Toggle categories at the top-left.
            </div>
        </div>
    );
}
