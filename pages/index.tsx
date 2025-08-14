
import { motion } from "framer-motion";
import Link from "next/link";
import Background from "@/components/Background";

// Reusable, minimal scroll-reveal wrapper
function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Thin line that grows under headings
function RevealLine() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "100%", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
      className="mt-2 h-px bg-zinc-800"
    />
  );
}

export default function Home() {


  return (
    <Background>


      <div className="relative z-10">
        {/* Top nav */}
        <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="#home" className="font-semibold tracking-tight text-zinc-100">PB</Link>
            <nav className="hidden gap-6 text-sm md:flex">
              <Link href="#about" className="text-zinc-400 transition hover:text-zinc-100">About</Link>
              <Link href="#education" className="text-zinc-400 transition hover:text-zinc-100">Education</Link>
              <Link href="#projects" className="text-zinc-400 transition hover:text-zinc-100">Projects</Link>
              <Link href="#contact" className="text-zinc-400 transition hover:text-zinc-100">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 md:pt-28">
          <FadeInSection>
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-12 shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)]">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center text-4xl font-bold leading-tight tracking-tight text-zinc-100 md:text-6xl"
              >
                Prateek Bhandari
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                className="mt-3 text-center text-lg text-zinc-400 md:text-xl"
              >
                CS + Stats @ The Ohio State University
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="mt-6 flex items-center justify-center gap-4"
              >
                <Link
                  href="mailto:bhandari.122@osu.edu"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-zinc-400/30"
                >
                  Get in touch
                </Link>
                <Link
                  href="#projects"
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-zinc-400/30"
                >
                  View projects
                </Link>
              </motion.div>
              {/* Socials */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="mt-6 flex justify-center gap-5 text-zinc-400"
              >
                <IconLink href="https://github.com/lilpb01" label="GitHub">
                  <GitHubIcon />
                </IconLink>
                <IconLink href="https://www.linkedin.com/in/prateek-bhandari-550b49326/" label="LinkedIn">
                  <LinkedInIcon />
                </IconLink>

              </motion.div>
            </div>
          </FadeInSection>
        </section>

        {/* About */}
        <section id="about" className="mx-auto mt-24 max-w-5xl px-6">
          <FadeInSection>
            <h2 className="text-xl font-semibold text-zinc-100 md:text-2xl">About</h2>
            <RevealLine />
            <p className="mt-3 max-w-3xl text-zinc-400">
              I’m studying computer science and statistics at The Ohio State University, and I love working where math, programming, and data meet. I’m especially interested in AI, machine learning, and data analysis—anything that lets me dig into patterns, solve problems, and build something useful.
            </p>
          </FadeInSection>
        </section>

        {/* Education */}
        <section id="education" className="mx-auto mt-16 max-w-5xl px-6">
          <FadeInSection>
            <h2 className="text-xl font-semibold text-zinc-100 md:text-2xl">Education</h2>
            <RevealLine />
            <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm text-zinc-400">
              <ul className="list-disc list-inside space-y-1">
                <li>CSE 2221 – Software I: Software Components</li>
                <li>CSE 2231 – Software II: Software Development & Design</li>
                <li>CSE 2321 – Foundations I: Discrete Structures</li>
                <li>CSE 2331 – Foundations II: Data Structures & Algorithms</li>
                <li>CSE 2421 – Systems I: Introduction to Low-Level Programming</li>
                <li>STAT 3470 – Introduction to Probability & Statistics for Engineers</li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
                <li>STAT 3201 – Introduction to Probability for Data Analytics</li>
                <li>STAT 3202 – Introduction to Statistical Inference for Data Analytics</li>
                <li>STAT 3301 – Statistical Modeling for Discovery I</li>
                <li>MATH 2153 – Calculus III</li>
                <li>MATH 2568 – Linear Algebra</li>
                <li>MATH 3345 – Foundations of Higher Mathematics</li>
              </ul>
            </div>
          </FadeInSection>
        </section>



        {/* Projects */}
        <section id="projects" className="mx-auto mt-16 max-w-5xl px-6">
          <FadeInSection>
            <h2 className="text-xl font-semibold text-zinc-100 md:text-2xl">Projects</h2>
            <RevealLine />
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <FadeInSection>
                <ProjectCard
                  title="Job Tracker"
                  desc="Full-stack app with FastAPI + React + SQLite/JWT auth."
                  href="/projects/job-tracker"
                />
              </FadeInSection>
              <FadeInSection>
                <ProjectCard
                  title="Exoplanet Classifier"
                  desc="End-to-end ML for exoplanet habitability with EDA, feature engineering, and model eval."
                  href="/projects/exoplanet"
                />
              </FadeInSection>
              <FadeInSection>
                <ProjectCard
                  title="Brain Tumor Classifier"
                  desc="Deep learning model using ResNet18 for brain tumor MRI classification with Grad-CAM insights."
                  href="/projects/braintumor"
                />
              </FadeInSection>
              <FadeInSection>
                <ProjectCard
                  title="ASL Sign Detector"
                  desc="Computer vision project with real-time ASL alphabet detection with MediaPipe and Random Forest."
                  href="/projects/signdetector"
                />
              </FadeInSection>
              <FadeInSection>
                <ProjectCard
                  title="Fourier Series Visualizer"
                  desc="Interactive Fourier series shape reconstruction with epicycles with Python."
                  href="/projects/fourier "
                />
              </FadeInSection>
              <FadeInSection>
                <ProjectCard
                  title="Music Scale Evenness Analyzer"
                  desc="Python audio analysis tool for measuring musical scale timing and evenness."
                  href="/projects/music "
                />
              </FadeInSection>
            </div>
          </FadeInSection>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto my-24 max-w-5xl px-6">
          <FadeInSection>
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-8">
              <h3 className="text-lg font-semibold text-zinc-100 md:text-xl">Contact</h3>
              <RevealLine />
              <p className="mt-2 max-w-3xl text-zinc-400">
                Email me at
                <Link
                  className="ml-2 underline decoration-zinc-600 underline-offset-4 hover:text-zinc-200"
                  href="mailto:bhandari.122@osu.edu"
                >
                  bhandari.122@osu.edu
                </Link>.
              </p>
            </div>
          </FadeInSection>
        </section>

        <footer className="border-t border-white/5 py-8">
          <div className="mx-auto max-w-5xl px-6 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Prateek Bhandari. Built with React & Tailwind.
          </div>
        </footer>
      </div>

    </Background>
  );
}

// ————— Reusable components —————
function ProjectCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} passHref>
      <div className="group cursor-pointer rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition 
             hover:border-white/20 hover:bg-white/[0.06] hover:scale-[1.02] hover:shadow-lg 
             focus:outline-none focus:ring-2 focus:ring-zinc-400/30">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-medium text-zinc-100">{title}</h3>
          <span className="text-xs text-zinc-500 transition group-hover:text-zinc-300">↗</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
      </div>
    </Link>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-xl border border-white/5 bg-white/[0.02] p-2 transition hover:border-white/10 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-zinc-400/30"
    >
      <div className="h-5 w-5 text-zinc-300">{children}</div>
    </Link>
  );
}

// Minimal inline icons to avoid extra dependencies
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.19-3.37-1.19-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .85-.27 2.79 1.02a9.7 9.7 0 0 1 5.08 0c1.93-1.29 2.78-1.02 2.78-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M20.45 20.45h-3.56v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.46V9h3.42v1.56h.05c.48-.9 1.66-1.84 3.42-1.84 3.66 0 4.34 2.41 4.34 5.54v6.19zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

