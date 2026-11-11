import React from "react";
import { personalData } from "../data/personal";
import { FadeInUp } from "./FadeInUp";
import { ArrowDownRight, Download, Mail, Terminal, Cpu } from "lucide-react";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-12 border-b border-[#272B26]">
      {/* Background Silicon Grid */}
      <div className="absolute inset-0 silicon-grid opacity-25 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Telemetry Station Bar */}
        <FadeInUp duration={0.4} yOffset={12}>
          <div className="border border-[#272B26] bg-[#191B19] px-3 sm:px-4 py-2 mb-6 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[#B5E66B]">
                <span className="w-2 h-2 bg-[#B5E66B]"></span>
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  CANDIDATE PROFILE // VERIFIED INFORMATION
                </span>
              </span>
              <span className="text-[#A2A59D] hidden sm:inline">|</span>
              <span className="text-[#A2A59D] text-[11px] uppercase hidden sm:inline">
                SUMEDHA INSTITUTE OF TECHNOLOGY
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-[#A2A59D]">
              <span className="hidden md:inline">TOOLS: CADENCE GENUS & INNOVUS</span>
              <span className="text-[#A2A59D] hidden md:inline">|</span>
              <span className="text-[#F2F1EA] flex items-center gap-1">
                <Terminal className="w-3 h-3 text-[#B5E66B]" />
                {personalData.location}
              </span>
            </div>
          </div>
        </FadeInUp>

        {/* Main 12-Column Hero Grid */}
        <FadeInUp delay={0.1} duration={0.5} yOffset={20}>
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#272B26] bg-[#191B19]">
            {/* Left Column: Personal Identity & Engineering Overview (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#272B26]">
              <div>
                {/* Index & Title Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-0.5 border border-[#272B26] bg-[#101110] text-[#B5E66B] font-mono text-[10px] tracking-widest uppercase">
                    ENTRY-LEVEL PHYSICAL DESIGN CANDIDATE
                  </span>
                  <span className="text-[#A2A59D] font-mono text-xs">
                    • VLSI PHYSICAL DESIGN TRAINEE
                  </span>
                </div>

                {/* Main Identity */}
                <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#F2F1EA] uppercase leading-none">
                  {personalData.name}
                </h1>

                {/* Professional Title */}
                <div className="mt-3 flex items-center gap-2 font-mono text-sm sm:text-base text-[#B5E66B] font-medium tracking-wide">
                  <Cpu className="w-4 h-4 text-[#B5E66B]" />
                  <span>{personalData.title}</span>
                </div>

                {/* Headline */}
                <blockquote className="mt-6 border-l-2 border-[#B5E66B] pl-4 py-1 text-lg sm:text-xl font-sans font-medium text-[#F2F1EA] italic">
                  "{personalData.tagline}"
                </blockquote>

                {/* Description */}
                <p className="mt-5 font-sans text-sm sm:text-base text-[#A2A59D] leading-relaxed max-w-2xl">
                  {personalData.description}
                </p>

                {/* Technical Keywords strip */}
                <div className="mt-6 pt-6 border-t border-[#272B26]">
                  <div className="text-[10px] font-mono text-[#A2A59D] tracking-widest uppercase mb-2.5">
                    TECHNICAL SCOPE:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {personalData.technicalKeywords.map((kw, i) => (
                      <span
                        key={kw}
                        className="inline-flex items-center px-2.5 py-1 bg-[#101110] border border-[#272B26] font-mono text-xs text-[#F2F1EA]"
                      >
                        <span className="w-1.5 h-1.5 bg-[#B5E66B] mr-2"></span>
                        {kw}
                        {i < personalData.technicalKeywords.length - 1 && (
                          <span className="text-[#272B26] ml-2">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buttons (Explore Projects, Download Resume, Contact Me) */}
              <div className="mt-8 pt-6 border-t border-[#272B26] flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B5E66B] text-[#101110] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#C8F57E] transition-colors cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <a
                  href={personalData.resumePath}
                  download="Mankala_Charan_VLSI_Physical_Design_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#272B26] bg-[#101110] text-[#F2F1EA] font-mono text-xs uppercase tracking-wider hover:border-[#A2A59D] hover:text-[#B5E66B] transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#272B26] bg-transparent text-[#A2A59D] font-mono text-xs uppercase tracking-wider hover:border-[#B5E66B] hover:text-[#F2F1EA] transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Typographic Technical Overview (5 cols) */}
            <div className="lg:col-span-5 bg-[#101110] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#272B26] text-[11px] font-mono text-[#A2A59D] mb-4">
                  <span className="uppercase text-[#F2F1EA] font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#B5E66B]"></span>
                    TECHNICAL FOCUS & PROFILE
                  </span>
                  <span>ENTRY-LEVEL</span>
                </div>

                {/* Typographic Technical Spec Sheet */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="border border-[#272B26] bg-[#191B19] p-4">
                    <div className="text-[10px] text-[#A2A59D] uppercase tracking-wider mb-1">
                      CURRENT STATUS
                    </div>
                    <div className="text-sm font-semibold text-[#F2F1EA]">
                      VLSI Physical Design Trainee
                    </div>
                    <div className="text-[11px] text-[#B5E66B] mt-0.5">
                      Sumedha Institute of Technology, Hyderabad (2026–Present)
                    </div>
                  </div>

                  <div className="border border-[#272B26] bg-[#191B19] p-4">
                    <div className="text-[10px] text-[#A2A59D] uppercase tracking-wider mb-1">
                      ACADEMIC BACKGROUND
                    </div>
                    <div className="text-sm font-semibold text-[#F2F1EA]">
                      B.Tech Electronics & Communication Engineering
                    </div>
                    <div className="text-[11px] text-[#A2A59D] mt-0.5 flex justify-between">
                      <span>Chandigarh University (2022–2026)</span>
                      <span className="text-[#B5E66B] font-semibold">CGPA: 7.0/10</span>
                    </div>
                  </div>

                  <div className="border border-[#272B26] bg-[#191B19] p-4">
                    <div className="text-[10px] text-[#A2A59D] uppercase tracking-wider mb-1">
                      CONFIRMED EDA TOOLS
                    </div>
                    <div className="text-xs font-semibold text-[#F2F1EA] flex flex-wrap gap-2 mt-1">
                      <span className="px-2 py-1 bg-[#101110] border border-[#272B26] text-[#B5E66B]">
                        Cadence Genus
                      </span>
                      <span className="px-2 py-1 bg-[#101110] border border-[#272B26] text-[#B5E66B]">
                        Cadence Innovus
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Verified Projects Summary */}
              <div className="mt-6 pt-4 border-t border-[#272B26]">
                <div className="text-[10px] font-mono text-[#A2A59D] uppercase tracking-widest mb-2">
                  AUTHORIZED PROJECTS:
                </div>
                <div className="space-y-1.5 font-mono text-xs text-[#A2A59D]">
                  <div className="flex items-center justify-between border border-[#272B26] bg-[#191B19] px-2.5 py-1.5">
                    <span className="text-[#F2F1EA]">01. CVA6 RISC-V Processor</span>
                    <span className="text-[10px] text-[#A2A59D]">Synthesis, Placement, CTS</span>
                  </div>
                  <div className="flex items-center justify-between border border-[#272B26] bg-[#191B19] px-2.5 py-1.5">
                    <span className="text-[#F2F1EA]">02. AES Core</span>
                    <span className="text-[10px] text-[#B5E66B]">TNS: 0.0 ns</span>
                  </div>
                  <div className="flex items-center justify-between border border-[#272B26] bg-[#191B19] px-2.5 py-1.5">
                    <span className="text-[#F2F1EA]">03. Half-Cycle Timing Test Case</span>
                    <span className="text-[10px] text-[#A2A59D]">Multi-Clock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
