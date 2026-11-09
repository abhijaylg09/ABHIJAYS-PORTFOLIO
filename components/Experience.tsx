"use client";

import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 bg-slate-950/50 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            Practical development experience delivering production features, conducting structured peer reviews, and shipping client web applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {experience.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 transition-transform shadow-md shadow-cyan-400/20" />

              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Achievements list */}
                <div className="space-y-2.5 my-5">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">
                    Key Stack:
                  </span>
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 text-xs font-mono border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
