"use client";

import { Code2, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060910] border-t border-slate-800/80 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#"
              className="flex items-center gap-2.5 text-white font-mono font-bold text-lg tracking-tight mb-2"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span>
                Abhijay<span className="text-cyan-400">.dev</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Engineering high-performance real-time systems, multimodal AI, and scalable full-stack web applications.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 hover:bg-cyan-900/60 transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div>
            Built with Next.js 14, TypeScript & Tailwind CSS • Deployed on Vercel
          </div>
        </div>
      </div>
    </footer>
  );
}

