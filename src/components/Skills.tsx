import React, { useState } from "react";
import { skillsData, SkillCategory } from "../data/skills";
import { FadeInUp } from "./FadeInUp";
import { Terminal, Cpu, Clock, Code, Wrench, Binary, Layers } from "lucide-react";

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string>("ALL");

  const categoryIcons: Record<string, React.ReactNode> = {
    "vlsi-pd": <Cpu className="w-4 h-4 text-[#B5E66B]" />,
    "timing-constraints": <Clock className="w-4 h-4 text-[#B5E66B]" />,
    "eda-tools": <Wrench className="w-4 h-4 text-[#B5E66B]" />,
    "hdl": <Binary className="w-4 h-4 text-[#B5E66B]" />,
    "programming": <Terminal className="w-4 h-4 text-[#B5E66B]" />,
    "additional": <Code className="w-4 h-4 text-[#B5E66B]" />
  };

  const filteredCategories = filter === "ALL"
    ? skillsData
    : skillsData.filter((cat) => cat.id === filter);

  return (
    <section id="skills" className="py-16 border-b border-[#272B26] bg-[#101110]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp duration={0.4} yOffset={16}>
          <div className="flex flex-wrap items-center justify-between border-b border-[#272B26] pb-4 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#B5E66B] font-semibold tracking-wider">
                  [SECTION 02]
                </span>
                <span className="text-[#A2A59D] font-mono text-xs">
                  // TECHNICAL SKILLS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#F2F1EA] uppercase tracking-tight mt-1">
                Technical Skills
              </h2>
            </div>

            {/* Domain Filter Bar */}
            <div className="flex flex-wrap items-center gap-1">
              <button
                onClick={() => setFilter("ALL")}
                className={`px-2.5 py-1 text-[11px] font-mono uppercase cursor-pointer border ${
                  filter === "ALL"
                    ? "bg-[#B5E66B] text-[#101110] border-[#B5E66B] font-medium"
                    : "border-[#272B26] bg-[#191B19] text-[#A2A59D] hover:text-[#F2F1EA]"
                }`}
              >
                All Skills
              </button>
              <button
                onClick={() => setFilter("vlsi-pd")}
                className={`px-2.5 py-1 text-[11px] font-mono uppercase cursor-pointer border ${
                  filter === "vlsi-pd"
                    ? "bg-[#B5E66B] text-[#101110] border-[#B5E66B] font-medium"
                    : "border-[#272B26] bg-[#191B19] text-[#A2A59D] hover:text-[#F2F1EA]"
                }`}
              >
                VLSI Physical Design
              </button>
              <button
                onClick={() => setFilter("eda-tools")}
                className={`px-2.5 py-1 text-[11px] font-mono uppercase cursor-pointer border ${
                  filter === "eda-tools"
                    ? "bg-[#B5E66B] text-[#101110] border-[#B5E66B] font-medium"
                    : "border-[#272B26] bg-[#191B19] text-[#A2A59D] hover:text-[#F2F1EA]"
                }`}
              >
                EDA Tools
              </button>
              <button
                onClick={() => setFilter("timing-constraints")}
                className={`px-2.5 py-1 text-[11px] font-mono uppercase cursor-pointer border ${
                  filter === "timing-constraints"
                    ? "bg-[#B5E66B] text-[#101110] border-[#B5E66B] font-medium"
                    : "border-[#272B26] bg-[#191B19] text-[#A2A59D] hover:text-[#F2F1EA]"
                }`}
              >
                Timing & Constraints
              </button>
            </div>
          </div>
        </FadeInUp>

        {/* Modular Partition Grid */}
        <FadeInUp delay={0.15} duration={0.5} yOffset={24}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#272B26] bg-[#272B26]">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-[#191B19] p-6 flex flex-col justify-between border-b md:border-b-0 border-[#272B26] hover:bg-[#202420] transition-colors group"
              >
                <div>
                  {/* Header Sub-bar */}
                  <div className="flex items-center justify-between border-b border-[#272B26] pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      {categoryIcons[category.id] || <Layers className="w-4 h-4 text-[#B5E66B]" />}
                      <span className="font-mono text-xs font-bold text-[#F2F1EA] tracking-wide uppercase">
                        {category.category}
                      </span>
                    </div>
                    <span className="w-1.5 h-1.5 bg-[#B5E66B]"></span>
                  </div>

                  {/* Skills Chips / Telemetry Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {category.skills.map((skillName, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-[#272B26] bg-[#101110] font-mono text-[11px] text-[#F2F1EA] uppercase"
                      >
                        {/* 4x4 Square Glyph per Stitch spec */}
                        <span className="w-1 h-1 shrink-0 bg-[#B5E66B]" />
                        <span>{skillName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#272B26] flex items-center justify-between font-mono text-[10px] text-[#A2A59D]">
                  <span>{category.skills.length} confirmed areas</span>
                  <span className="text-[#B5E66B]">CONFIRMED</span>
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
