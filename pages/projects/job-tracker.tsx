import { motion } from "framer-motion";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import Background from "@/components/Background";
import Link from "next/link"
const shots = [
  { src: "/screenshots/job-tracker_signup.png", alt: "Signup" },
  { src: "/screenshots/job-tracker_dashboard.png", alt: "Dashboard" },
  { src: "/screenshots/job-tracker_resume.png", alt: "Resume Analyzer" },
];

export default function JobTrackerPage() {
  return (
    <Background>
      <div className="relative min-h-screen">
        {/* Background Gradient + Particles */}

        {/* Page Content */}
        <div className="relative z-10 max-w-5xl mx-auto p-6 text-zinc-200">
          {/* Title & Intro */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-zinc-100"
          >
            Job Tracker
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-zinc-400"
          >
            A full-stack web app to track job applications, visualize progress, and analyze resume fit.
            Built with FastAPI, React, and SQLite with JWT authentication.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <h2 className="text-2xl font-semibold text-zinc-100">Features</h2>
            <ul className="mt-4 list-disc list-inside space-y-2 text-zinc-400">
              <li>User authentication with JWT</li>
              <li>Resume analyzer with AI keyword matching</li>
              <li>Dashboard with application status charts</li>
              <li>Secure backend API built in FastAPI</li>
              <li>Responsive, mobile-friendly UI</li>
            </ul>
          </motion.div>



          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 rounded-lg border border-white/10 bg-white/[0.02] p-6"
          >
            <h2 className="mb-3 text-lg font-semibold text-zinc-100">Tech Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-400 text-sm">
              {/* Frontend */}
              <div>
                <h3 className="text-zinc-200 font-medium mb-2">Frontend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>React – UI framework</li>
                  <li>Vite – Build tool with hot reload</li>
                  <li>Tailwind CSS – Utility-first styling</li>
                  <li>Axios – API requests</li>
                  <li>React Hooks – State & lifecycle</li>
                </ul>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-zinc-200 font-medium mb-2">Backend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>FastAPI – Python API framework</li>
                  <li>Uvicorn – ASGI server</li>
                  <li>SQLAlchemy – ORM</li>
                  <li>Pydantic – Data validation</li>
                  <li>SQLite – Local database</li>
                </ul>
              </div>

              {/* Auth & Security */}
              <div>
                <h3 className="text-zinc-200 font-medium mb-2">Auth & Security</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>JWT – Authentication tokens</li>
                  <li>HTTPBearer – Token-based auth</li>
                  <li>Passlib – Password hashing</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Screenshots Section */}
          <div className="mt-12">
            <h2 className="mb-4 text-lg font-semibold text-zinc-100">Project Screenshots</h2>
            <ScreenshotCarousel shots={shots} />
          </div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex gap-4"
          >
            <Link
              href="https://github.com/lilpb01/jobtracker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 transition"
            >
              GitHub
            </Link>
            <Link
              href="https://jobtracker-pvdw.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
            >
              Live Demo
            </Link>
            <p className="mt-8 text-sm text-zinc-500 italic">
              Note: Sign up may take a moment the first time because the database needs to spin back up.
            </p>
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
