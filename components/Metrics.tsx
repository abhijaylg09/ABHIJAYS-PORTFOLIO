"use client";

import { Activity, Gauge, Cpu, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Metrics() {
  const { metrics } = PORTFOLIO_DATA;

  const icons = [
    <Activity key="activity" className="w-5 h-5 text-cyan-400" />,
    <Gauge key="gauge" className="w-5 h-5 text-indigo-400" />,
    <Cpu key="cpu" className="w-5 h-5 text-teal-400" />,
    <Award key="award" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section className="py-12 border-y border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => (
            <div
              key={item.label}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold font-mono tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {item.value}
                </span>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                  {icons[index]}
                </div>
              </div>
              <h3 className="text-sm font-semibold text-slate-200 mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
