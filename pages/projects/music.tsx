"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import Image from "next/image";
import Link from "next/link"
export default function MusicScaleEvennessPage() {
    return (
        <Background>
            <div className="relative min-h-screen">
                <div className="relative z-10 max-w-5xl mx-auto p-6 text-zinc-200">
                    {/* Title & Intro */}
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-zinc-100"
                    >
                        Music Scale Evenness Analyzer
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        Analyzes the timing consistency of a recorded musical scale using onset detection and
                        inter-onset interval (IOI) analysis, producing an evenness score from 0–100.
                    </motion.p>

                    {/* Quick tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-6 flex flex-wrap gap-2"
                    >
                        {[
                            "Python",
                            "Librosa",
                            "NumPy",
                            "SciPy",
                            "Matplotlib",
                            "Onset Detection",
                            "IOI Analysis",
                            "Spectrograms",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* Overview cards */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-8 grid gap-4 md:grid-cols-2"
                    >
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <h2 className="text-lg font-semibold text-zinc-100">Motivation</h2>
                            <p className="mt-2 text-zinc-400">
                                Give musicians real-time feedback on rhythmic consistency when practicing scales by
                                measuring note-to-note timing and visualizing onsets.
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <h2 className="text-lg font-semibold text-zinc-100">Dataset</h2>
                            <p className="mt-2 text-zinc-400">
                                Local <code>.wav</code> file of a single scale (e.g., <code>scales4.wav</code>).
                                Sample rate/format handled automatically by <span className="text-zinc-300">librosa</span>.
                            </p>
                        </div>
                    </motion.section>

                    {/* Features */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mt-10"
                    >
                        <h2 className="text-2xl font-semibold text-zinc-100">Features</h2>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-400">
                            <li>Onset detection using energy envelope</li>
                            <li>Spectrogram with vertical onset markers</li>
                            <li>Inter-onset interval (IOI) analysis and histogram</li>
                            <li>Evenness Score (0 = irregular, 100 = perfectly even)</li>
                            <li>Focused frequency range (C2–A5) for clarity</li>
                            <li>Visual and quantitative feedback for practice</li>
                        </ul>
                    </motion.section>

                    {/* Spectrogram + Write-up (side-by-side, image takes more space) */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 grid gap-6 md:grid-cols-3 items-start"
                    >
                        {/* Left: Spectrogram image */}
                        <div className="md:col-span-2">
                            <h3 className="mb-3 text-lg font-semibold text-zinc-100">Spectrogram</h3>
                            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                <Image
                                    src="/screenshots/music_spectrogram.png"
                                    alt="Scale spectrogram with onset markers"
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 768px) 66vw, 100vw"
                                    priority
                                />
                            </div>
                            <p className="mt-2 text-sm text-zinc-500">
                                Spectrogram of the scale with vertical lines marking detected note onsets.
                            </p>
                        </div>

                        {/* Right: Explanation panel */}
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <h3 className="text-lg font-semibold text-zinc-100">What the Plot Shows</h3>
                            <p className="mt-2 text-zinc-400">
                                The spectrogram is like a heatmap of sound over time.
                                The horizontal axis shows time (when each note is played), and the vertical axis shows pitch from low (bass) to high (treble).
                                Each bright horizontal band is a note — the lowest, boldest band is the base pitch you played, while the fainter lines above it are overtones, natural harmonics that give the note its unique tone color.
                            </p>
                        </div>
                    </motion.section>

                    {/* Tech Stack (compact) */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-6"
                    >
                        <h2 className="mb-3 text-lg font-semibold text-zinc-100">Tech Stack</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-400 text-sm">
                            <div>
                                <h4 className="text-zinc-200 font-medium mb-2">Core</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Python</li>
                                    <li>Librosa</li>
                                    <li>NumPy &amp; SciPy</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-zinc-200 font-medium mb-2">Visualization</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Matplotlib</li>
                                    <li>Spectrogram</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-zinc-200 font-medium mb-2">Input</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Local .wav file (single scale)</li>
                                    <li>Auto sample-rate handling</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <Link
                            href="https://github.com/lilpb01/Music-Scale-Evenness-Analyzer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition"
                        >
                            GitHub
                        </Link>
                        {/* Optional: demo audio or video */}
                        {/* <a href="/audio/scales4.wav" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">Sample Audio</a> */}
                    </motion.div>

                    {/* Back to Home Button */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/"
                            className="inline-block px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition text-zinc-200"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </Background>
    );
}
