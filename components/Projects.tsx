"use client";

import { useState } from "react";
import { ExternalLink, Github, CheckCircle2, Layers, Cpu, Code } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { projects } = PORTFOLIO_DATA;

  const categories = ["All", "AI & Systems", "Algorithms", "Web & Full Stack"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Production Architecture & Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Case Studies
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            Real-world systems engineered to solve tangible bottlenecks—from thread concurrency and machine learning vision inference to sandboxed browser execution.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 p-6 sm:p-8 transition-all hover:shadow-xl hover:shadow-cyan-950/20 group"
            >
              <div>
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono font-medium">
                    {project.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">
                  {project.title}
                </h3>

                {/* Problem & Solution Accordion-like Layout */}
                <div className="space-y-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-semibold mb-1">
                      The Challenge / Bottleneck
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                      Engineered Solution & Architecture
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Architectural Outcomes */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                    Engineering Highlights & Metrics
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors shadow-sm shadow-cyan-500/20"
                    >
                      <span>Live Interactive Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
