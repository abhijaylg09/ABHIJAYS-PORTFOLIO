"use client";

import { GraduationCap, Award, Trophy, Languages, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Education() {
  const { education, certifications, achievements, spokenLanguages } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            Verified formal computer science foundations, industry-recognized AI and cloud credentials, and competitive technical honors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Education & Achievements */}
          <div className="lg:col-span-6 space-y-8">
            {/* Academic Background */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2.5 mb-6 text-white font-bold text-lg">
                <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span>Academic Degrees</span>
              </div>

              <div className="space-y-6">
                {education.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="text-base font-bold text-white">
                        {item.degree}
                      </h4>
                      <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-300 mb-2">
                      {item.institution}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                      {item.score && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 font-semibold">
                            {item.score}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Achievements */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950/20 via-slate-900/80 to-slate-900/80 border border-amber-900/30">
              <div className="flex items-center gap-2.5 mb-4 text-white font-bold text-lg">
                <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400 border border-amber-800/40">
                  <Trophy className="w-5 h-5" />
                </div>
                <span>Honors & Hackathon Awards</span>
              </div>

              {achievements.map((ach, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-amber-900/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm sm:text-base font-bold text-amber-300">
                      {ach.title}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      {ach.event}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Spoken Languages */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2.5 mb-4 text-white font-bold text-base">
                <Languages className="w-4 h-4 text-cyan-400" />
                <span>Languages</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {spokenLanguages.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center"
                  >
                    <div className="text-sm font-semibold text-white">
                      {lang.language}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {lang.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6 text-white font-bold text-lg">
                  <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-800/40">
                    <Award className="w-5 h-5" />
                  </div>
                  <span>Verified Certifications</span>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-indigo-500/40 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {cert.title}
                        </h4>
                        <span className="shrink-0 text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                          {cert.date}
                        </span>
                      </div>

                      <div className="text-xs text-slate-400 mb-2">
                        {cert.issuer}
                      </div>

                      {cert.score && (
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-800/40">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>{cert.score}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recruiter Callout */}
              <div className="mt-8 p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/30 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <p className="text-xs text-cyan-200 leading-relaxed">
                  All certificates, academic records, and project repositories are verified and available upon request during technical interview evaluations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

