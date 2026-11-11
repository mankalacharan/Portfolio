import React from "react";
import { personalData } from "../data/personal";
import { Cpu, Download, ArrowUp, Linkedin, Github, Mail } from "lucide-react";

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#272B26] bg-[#101110] py-12 relative font-mono text-xs text-[#A2A59D]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#272B26] pb-8">
          {/* Identity & Scope (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5 text-[#F2F1EA]">
              <div className="w-6 h-6 border border-[#272B26] bg-[#191B19] flex items-center justify-center text-[#B5E66B]">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <span className="font-sans font-bold text-sm tracking-wider uppercase">
                {personalData.name}
              </span>
            </div>

            <p className="text-xs text-[#B5E66B] font-mono">
              {personalData.title}
            </p>

            <p className="font-sans text-xs text-[#A2A59D] leading-relaxed max-w-sm">
              VLSI Physical Design trainee focusing on RTL-to-GDSII flow, timing constraints, Static Timing Analysis, and physical implementation.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#272B26] bg-[#191B19] text-[#A2A59D] hover:text-[#B5E66B] hover:border-[#B5E66B] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#272B26] bg-[#191B19] text-[#A2A59D] hover:text-[#B5E66B] hover:border-[#B5E66B] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2 border border-[#272B26] bg-[#191B19] text-[#A2A59D] hover:text-[#B5E66B] hover:border-[#B5E66B] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Index Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] uppercase text-[#F2F1EA] font-semibold tracking-wider mb-2">
              SECTIONS NAVIGATION
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" className="hover:text-[#B5E66B] transition-colors">
                  // About & Education
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#B5E66B] transition-colors">
                  // Technical Matrix
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#B5E66B] transition-colors">
                  // Featured Projects (CVA6, AES)
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-[#B5E66B] transition-colors">
                  // RTL-to-GDSII Flow
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-[#B5E66B] transition-colors">
                  // Sumedha Training
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B5E66B] transition-colors">
                  // Contact Channels
                </a>
              </li>
            </ul>
          </div>

          {/* Verification & Resume Download (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] uppercase text-[#F2F1EA] font-semibold tracking-wider mb-2">
              CURRICULUM VITAE & SPEC SHEET
            </div>
            <p className="text-xs text-[#A2A59D] leading-relaxed font-sans">
              Download the candidate specification sheet containing comprehensive project QoR, training details, and academic transcripts.
            </p>

            <button
              onClick={onOpenResumeModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#B5E66B] text-[#101110] font-semibold uppercase tracking-wider hover:bg-[#C8F57E] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px]">
          <div className="text-[#A2A59D]">
            © {new Date().getFullYear()} Mankala Charan. Built for VLSI Physical Design Engineering recruitment.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#A2A59D]">HYDERABAD, TELANGANA</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#F2F1EA] hover:text-[#B5E66B] transition-colors cursor-pointer border border-[#272B26] px-2 py-1 bg-[#191B19]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-[#B5E66B]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
