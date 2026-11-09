"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Copy, Check, Send, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate direct contact action
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Recruiter & Engineering Connection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            Actively seeking Software Engineer and AI Developer opportunities. Reach out directly for interview inquiries, technical architecture discussions, or role openings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Info Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available Immediately</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Abhijay L G
              </h3>
              <p className="text-xs text-cyan-400 font-mono mb-6">
                Software Developer | AI Systems | Full-Stack Web
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-cyan-950/60 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                        Primary Email
                      </div>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email Address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-950/60 text-indigo-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                      Direct Mobile
                    </div>
                    <a
                      href={`tel:${personal.phone.replace(/[^+\d]/g, "")}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-teal-950/60 text-teal-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                      Current Location
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      {personal.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-[#0077B5]/20 hover:border-[#0077B5]/50 border border-slate-700/60 text-slate-200 hover:text-white text-xs font-semibold transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 hover:border-slate-600 border border-slate-700/60 text-slate-200 hover:text-white text-xs font-semibold transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Recruiter Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-white font-bold text-lg mb-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Have an open position or want to review full source code for systems projects? Leave your message below.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/60 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-emerald-300">
                    Thank you for reaching out. You can also contact directly via{" "}
                    <a href={`mailto:${personal.email}`} className="underline font-semibold">
                      {personal.email}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe, Tech Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineer / AI Developer Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, technical scope, or questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

