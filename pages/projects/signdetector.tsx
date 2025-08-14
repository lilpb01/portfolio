"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import Image from "next/image";
import Link from "next/link"
export default function ASLSignDetectorPage() {
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
                        ASL Sign Language Alphabet Detector
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        Real-time computer vision project that detects and classifies American Sign Language
                        (ASL) alphabet signs using MediaPipe hand landmarks,
                        OpenCV, and a scikit-learn Random Forest classifier.
                    </motion.p>

                    {/* Overview */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-8 space-y-6"
                    >
                        {/* Quick tags */}
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Python",
                                "MediaPipe Hands",
                                "OpenCV",
                                "scikit-learn",
                                "Random Forest",
                                "Jupyter",
                                "Real-time Inference",
                                "Data Collection Scripts",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Model Summary */}
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <h2 className="mb-3 text-lg font-semibold text-zinc-100">🧠 Model Summary</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-zinc-300">
                                    <tbody className="[&>tr+tr]:border-t [&>tr+tr]:border-white/10">
                                        <tr>
                                            <th className="w-56 py-2 pr-4 font-medium text-zinc-400">Algorithm</th>
                                            <td className="py-2">Random Forest Classifier</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Input Features</th>
                                            <td className="py-2">
                                                3D (x, y, z) coordinates of 21 MediaPipe hand landmarks per frame
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Training Data</th>
                                            <td className="py-2">Collected ASL alphabet gestures</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Output</th>
                                            <td className="py-2">Predicted ASL alphabet letter (A–Z, excluding J & Z)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </motion.section>

                    {/* Features */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-10 grid gap-6 md:grid-cols-2"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold text-zinc-100">Features</h2>
                            <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-400">
                                <li>Real-time hand tracking with <span className="text-zinc-300">MediaPipe Hands</span></li>
                                <li>Landmark-based feature extraction from hand positions (21 points × 3D)</li>
                                <li>Classification of ASL alphabet letters (A–Z, excluding J & Z)</li>
                                <li>Scripts for data collection, dataset creation, training, and inference</li>
                            </ul>
                        </div>

                        {/* Right: Grad-CAM image */}
                        <div>
                            <h3 className="mb-3 text-lg font-semibold text-zinc-100">Media-Pipe Hands</h3>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                <Image
                                    src="/screenshots/signlanguage.png"
                                    alt="Media-pipe Hands"
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                />
                            </div>
                            <p className="mt-2 text-sm text-zinc-400">
                                MediaPipe hand landmark detection for ASL gestures.
                            </p>
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
                            href="https://github.com/lilpb01/SignLanguage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition"
                        >
                            GitHub
                        </Link>

                        <Link
                            href="https://youtu.be/e3mMbhMogH8?si=s8nAUx16jKAnBF2U"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
                        >
                            Demo
                        </Link>
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
