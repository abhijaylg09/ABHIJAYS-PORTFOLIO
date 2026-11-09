"use client";

import { Code, Terminal, Brain, Server, Database, Cloud } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      description: "Core languages used for systems, scripting, and web development",
      items: skills.languages,
      accent: "border-cyan-500/20 group-hover:border-cyan-500/40",
      pillClass: "bg-cyan-950/40 text-cyan-200 border-cyan-800/40",
    },
    {
      name: "AI & Computer Vision",
      icon: <Brain className="w-4 h-4 text-purple-400" />,
      description: "Deep learning runtime inference, agentic pipelines, and speech synthesis",
      items: skills.ai_vision,
      accent: "border-purple-500/20 group-hover:border-purple-500/40",
      pillClass: "bg-purple-950/40 text-purple-200 border-purple-800/40",
    },
    {
      name: "Backend & Systems Concurrency",
      icon: <Server className="w-4 h-4 text-emerald-400" />,
      description: "Low-latency event loops, RESTful microservices, and thread management",
      items: skills.backend,
      accent: "border-emerald-500/20 group-hover:border-emerald-500/40",
      pillClass: "bg-emerald-950/40 text-emerald-200 border-emerald-800/40",
    },
    {
      name: "Frontend & UI Engineering",
      icon: <Code className="w-4 h-4 text-indigo-400" />,
      description: "Reactive component architectures, SSR frameworks, and rich desktop HUDs",
      items: skills.frontend,
      accent: "border-indigo-500/20 group-hover:border-indigo-500/40",
      pillClass: "bg-indigo-950/40 text-indigo-200 border-indigo-800/40",
    },
    {
      name: "Databases & Storage",
      icon: <Database className="w-4 h-4 text-amber-400" />,
      description: "Document stores, relational databases, and embedded local engines",
      items: skills.databases,
      accent: "border-amber-500/20 group-hover:border-amber-500/40",
      pillClass: "bg-amber-950/40 text-amber-200 border-amber-800/40",
    },
    {
      name: "Cloud, DevOps & Tools",
      icon: <Cloud className="w-4 h-4 text-sky-400" />,
      description: "Infrastructure provisioning, CI/CD, version control, and API diagnostics",
      items: skills.cloud_tools,
      accent: "border-sky-500/20 group-hover:border-sky-500/40",
      pillClass: "bg-sky-950/40 text-sky-200 border-sky-800/40",
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Core Arsenal
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            A comprehensive, structured breakdown of programming languages, machine learning frameworks, systems concurrency tooling, and modern web technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className={`p-6 rounded-2xl bg-slate-900/80 border ${category.accent} transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-xl bg-slate-800 border border-slate-700/60">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {category.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border ${category.pillClass} transition-all duration-200 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

