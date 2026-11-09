"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Code2, Sparkles, Mail, Github, Linkedin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white font-mono font-bold text-lg tracking-tight hover:text-cyan-400 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-4 h-4" />
            </div>
            <span>
              Abhijay<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/60 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Status & Contact */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Hire</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Available for Software Engineering & AI roles</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
