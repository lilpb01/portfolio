"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import Image from "next/image"

const edaShots = [
    { src: "/screenshots/exo1.png", alt: "EDA Overview" },
    { src: "/screenshots/exo2.png", alt: "Feature Engineering" },
    { src: "/screenshots/exo3.png", alt: "Model Metrics" },
    { src: "/screenshots/exo4.png", alt: "Model Metrics" },
    { src: "/screenshots/exo5.png", alt: "Model Metrics" },
    { src: "/screenshots/exo6.png", alt: "Model Metrics" },
    { src: "/screenshots/exo7.png", alt: "Model Metrics" },
];

export default function ExoplanetClassifierPage() {
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
                        Exoplanet Classifier
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        End-to-end ML project to classify candidate exoplanet.
                        Includes EDA, feature engineering, model training, and evaluation with clean,
                        reproducible notebooks and reports.
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
                                <h2 className="text-lg font-semibold text-zinc-100">Goal</h2>
                                <p className="mt-2 text-zinc-400">
                                    Predict whether an exoplanet is in the habitable zone using a supervised classification model.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h2 className="text-lg font-semibold text-zinc-100">Data Source</h2>
                                <p className="mt-2 text-zinc-400">
                                    <a
                                        href="https://exoplanet.eu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-zinc-300 transition"
                                    >
                                        exoplanet.eu
                                    </a>{" "}
                                    (curated catalog of exoplanet parameters)
                                </p>
                            </div>
                        </div>

                        {/* Tech + ML + Viz quick chips */}
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Python", "Jupyter", "pandas", "scikit-learn", "Tableau",
                                "Random Forest (binary)", "Feature Plots", "Tableau Dashboard",
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
                                            <th className="w-48 py-2 pr-4 font-medium text-zinc-400">Model Type</th>
                                            <td className="py-2">Random Forest Classifier</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Accuracy</th>
                                            <td className="py-2">98.7%</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Input Features</th>
                                            <td className="py-2">Radius, Star Teff, Semi-Major Axis, etc.</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Target</th>
                                            <td className="py-2">habitability_label (0 = not habitable, 1 = potentially habitable)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* EDA */}
                        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                            <h2 className="text-lg font-semibold text-zinc-100">🔍 Exploratory Data Analysis</h2>
                            <ul className="mt-3 list-disc list-inside space-y-1 text-zinc-400">
                                <li>Feature distributions segmented by habitability</li>
                                <li>Handling of missing values and normalization</li>
                                <li>Outlier detection (e.g., extreme radius/mass)</li>
                                <li>Correlation analysis between stellar and planetary properties</li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Features + EDA carousel (two columns) */}
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
                                <li>Data sourced from <code>exoplanet.eu</code> catalog</li>
                                <li>Exploratory Data Analysis with distribution & correlation plots</li>
                                <li>Preprocessing: missing values, normalization, outlier handling</li>
                                <li>Supervised classification using Random Forest</li>
                                <li>Interactive Tableau dashboard for results exploration</li>
                            </ul>
                        </div>

                        {/* Right: EDA screenshots carousel */}
                        <div className="md:pl-4">
                            <h3 className="mb-3 text-lg font-semibold text-zinc-100">EDA Previews</h3>
                            <ScreenshotCarousel shots={edaShots} />
                        </div>
                    </motion.section>



                    {/* Tableau Dashboard Screenshot */}
                    <div className="mt-12">
                        <h2 className="mb-4 text-lg font-semibold text-zinc-100">Tableau Dashboard</h2>
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30">
                            <Image
                                src="/screenshots/exo_dashboard.png"
                                alt="Exoplanet Tableau Dashboard"
                                fill
                                className="object-contain"
                                sizes="(min-width: 768px) 70vw, 100vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="https://github.com/lilpb01/Exoplanet-Habitability"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition"
                        >
                            GitHub
                        </a>



                    </motion.div>


                    {/* Back to Home Button */}
                    <div className="mt-12 text-center">
                        <a
                            href="/"
                            className="inline-block px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition text-zinc-200"
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            </div>
        </Background>
    );
}
