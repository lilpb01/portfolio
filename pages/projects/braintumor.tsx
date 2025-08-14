"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import Image from "next/image";

export default function BrainTumorClassifierPage() {
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
                        Brain Tumor Classifier
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400"
                    >
                        Deep learning project to classify brain tumors from MRI images into four classes —
                        Glioma, Meningioma, Pituitary, and No Tumor — using a ResNet18 CNN trained on a
                        Kaggle dataset. Results are visualized with an interactive Tableau dashboard.
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
                                    Classify MRI images into <span className="text-zinc-300">Glioma</span>,{" "}
                                    <span className="text-zinc-300">Meningioma</span>,{" "}
                                    <span className="text-zinc-300">Pituitary</span>, or{" "}
                                    <span className="text-zinc-300">No Tumor</span> to support screening workflows.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                                <h2 className="text-lg font-semibold text-zinc-100">Dataset</h2>
                                <p className="mt-2 text-zinc-400">
                                    Source:{" "}
                                    <a
                                        href="https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline underline-offset-4 decoration-zinc-600 hover:text-zinc-300 transition"
                                    >
                                        Kaggle Brain Tumor Dataset
                                    </a>
                                    . 7,023 MRI images across four classes.
                                </p>
                            </div>
                        </div>

                        {/* Quick tags */}
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Python",
                                "PyTorch",
                                "ResNet18",
                                "torchvision",
                                "Jupyter",
                                "pandas",
                                "Data Augmentation",
                                "Cross-Entropy Loss",
                                "Tableau",
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
                                            <th className="w-48 py-2 pr-4 font-medium text-zinc-400">Architecture</th>
                                            <td className="py-2">ResNet18 (transfer learning)</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Final Accuracy</th>
                                            <td className="py-2">99.72%</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Classes</th>
                                            <td className="py-2">Glioma · Meningioma · Pituitary · No Tumor</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Training</th>
                                            <td className="py-2">10 epochs · Cross-Entropy loss · Adam optimizer</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 pr-4 font-medium text-zinc-400">Augmentations</th>
                                            <td className="py-2">Random flips, rotations, normalization (torchvision)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.section>

                    {/* Features (left) + Grad-CAM image (right) */}
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-10 grid gap-6 md:grid-cols-2 items-start"
                    >
                        {/* Left: Features */}
                        <div>
                            <h2 className="text-2xl font-semibold text-zinc-100">Features</h2>
                            <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-400">
                                <li>ResNet18-based CNN with transfer learning for multi-class classification</li>
                                <li>Training pipeline with augmentation, validation split, and early evaluation</li>
                                <li>Clear reporting: accuracy and per-class metrics (confusion matrix optional)</li>
                                <li>Exportable model weights for inference</li>
                                <li>Interactive Tableau dashboard to explore predictions and counts</li>
                                <li>Model interpretability using Grad-CAM visualizations to highlight MRI regions influencing predictions</li>
                            </ul>
                        </div>

                        {/* Right: Grad-CAM image */}
                        <div>
                            <h3 className="mb-3 text-lg font-semibold text-zinc-100">Grad-CAM Visualization</h3>
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30">
                                <Image
                                    src="/screenshots/braintumor_gradcam.jpg"
                                    alt="Grad-CAM Visualization"
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                />
                            </div>
                            <p className="mt-2 text-sm text-zinc-400">
                                Highlights MRI regions most influential in the model’s prediction.
                            </p>
                        </div>
                    </motion.section>


                    {/* Tableau Dashboard Screenshot (single image, no carousel) */}
                    <div className="mt-12">
                        <h2 className="mb-4 text-lg font-semibold text-zinc-100">Tableau Dashboard</h2>
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/30">
                            <Image
                                src="/screenshots/braintumor_dashboard.png"
                                alt="Brain Tumor Classification — Tableau Dashboard"
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
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="https://github.com/yourusername/brain-tumor-classifier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition"
                        >
                            GitHub
                        </a>
                        {/* Optional: link to a model card / weights / notebook */}
                        {/* <a href="#" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition" target="_blank" rel="noopener noreferrer">Notebook</a> */}
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
