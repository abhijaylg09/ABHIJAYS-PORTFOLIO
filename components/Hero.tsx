"use client";

import { ArrowRight, Github, Linkedin, Mail, Terminal, Sparkles, MapPin, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide mb-6 shadow-sm shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>{personal.status}</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-teal-300 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-slate-300 font-medium mb-5">
              {personal.role}
            </h2>

            {/* One-Line Strong Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              {personal.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Line</span>
              </a>

              <a
                href={personal.resumeUrl || "#contact"}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume PDF</span>
              </a>

              <div className="flex items-center gap-2 ml-0 sm:ml-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Contact Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personal.location}
              </span>
              <span className="text-slate-600">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {personal.email}
              </a>
              <span className="text-slate-600">•</span>
              <span>{personal.phone}</span>
            </div>
          </div>

          {/* Right Column: Code Terminal / Architecture Highlights Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-5 shadow-2xl shadow-black/40">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    abhijay-core-system.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                  Ready
                </span>
              </div>

              {/* Code Snippet Highlight */}
              <div className="font-mono text-xs leading-relaxed space-y-2 text-slate-300">
                <div className="text-slate-500">// Engineering Profile & Specialization</div>
                <div>
                  <span className="text-cyan-400">const</span>{" "}
                  <span className="text-indigo-300">candidate</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-300">&quot;Abhijay L G&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">focus:</span>{" "}
                  <span className="text-emerald-300">&quot;Real-Time Systems & AI&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">concurrency:</span>{" "}
                  <span className="text-amber-300">&quot;Java 21 LTS (Thread-safe Bus)&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">perception:</span>{" "}
                  <span className="text-amber-300">&quot;ONNX Runtime + OpenCV (60 FPS)&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">fullstack:</span>{" "}
                  <span className="text-cyan-300">[&quot;Next.js&quot;, &quot;React&quot;, &quot;Node.js&quot;, &quot;Python&quot;]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">productionScore:</span>{" "}
                  <span className="text-emerald-400">0.95</span>{" "}
                  <span className="text-slate-500">// Avodha/NSDC 380/400</span>
                </div>
                <div>{"};"}</div>
                <div className="pt-2 text-slate-500">
                  // Mission: High-throughput, low-latency engineering
                </div>
                <div>
                  <span className="text-cyan-400">await</span>{" "}
                  <span className="text-indigo-300">candidate</span>.
                  <span className="text-yellow-300">deployImpact</span>();
                </div>
              </div>

              {/* Quick Tech Pills */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {[
                  "Java 21 LTS",
                  "Python",
                  "Next.js",
                  "OpenCV",
                  "ONNX Runtime",
                  "LangChain",
                  "FastAPI",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
