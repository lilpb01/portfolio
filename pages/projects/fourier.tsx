"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import Link from "next/link";

export default function FourierPage() {
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
                        Fourier Series Visualizer
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        Demonstrates how any hand-drawn shape can be reconstructed using Fourier series
                        and animated with rotating vectors (epicycles). Built with Python and Pygame.
                    </motion.p>

                    {/* Overview */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-8 space-y-6"
                    >
                        {/* Top facts */}
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h2 className="text-lg font-semibold text-zinc-100">Concept</h2>
                                <p className="mt-2 text-zinc-400">
                                    Draw any shape with your mouse, perform a Discrete Fourier Transform (DFT) on the coordinates,
                                    and watch it be reconstructed by rotating circles — a visual representation of the Fourier series.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h2 className="text-lg font-semibold text-zinc-100">Tech Stack</h2>
                                <p className="mt-2 text-zinc-400">
                                    Python, Pygame, Discrete Fourier Transform
                                </p>
                            </div>
                        </div>

                        {/* Features */}
                        <motion.section
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-10 grid gap-6 md:grid-cols-2"
                        >
                            {/* Left: Features list */}
                            <div>
                                <h2 className="text-2xl font-semibold text-zinc-100">Features</h2>
                                <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-400">
                                    <li>Mouse-drawing interface to create custom shapes</li>
                                    <li>Computes Fourier coefficients from drawn path</li>
                                    <li>Animates reconstruction using rotating vectors (epicycles)</li>
                                    <li>Smooth trailing effect for visualization</li>
                                </ul>
                            </div>

                            {/* Right: Video with title */}
                            <div>
                                <h3 className="mb-3 text-lg font-semibold text-zinc-100">Fourier Series Animation</h3>
                                <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                    <video
                                        src="/screenshots/fourier.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        controls
                                        className="absolute inset-0 h-full w-full object-contain"
                                        preload="metadata"
                                    />
                                </div>
                            </div>

                        </motion.section>

                        {/* Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10 flex flex-wrap items-center gap-4"
                        >
                            <Link
                                href="https://github.com/lilpb01/Fourier-Visualizer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition"
                            >
                                GitHub
                            </Link>

                        </motion.div>
                    </motion.section>

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
