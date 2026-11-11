import React from "react";
import { projectsData } from "../data/projects";
import { FadeInUp } from "./FadeInUp";
import { Table, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 border-b border-[#272B26] bg-[#101110]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp duration={0.4} yOffset={16}>
          <div className="flex flex-wrap items-center justify-between border-b border-[#272B26] pb-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#B5E66B] font-semibold tracking-wider">
                  [SECTION 03]
                </span>
                <span className="text-[#A2A59D] font-mono text-xs">
                  // FEATURED PROJECTS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#F2F1EA] uppercase tracking-tight mt-1">
                Featured Projects
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#A2A59D] mt-2 sm:mt-0">
              <span className="w-2 h-2 bg-[#B5E66B]"></span>
              <span>3 AUTHORIZED PROJECTS // EXACT TECHNICAL RESULTS</span>
            </div>
          </div>
        </FadeInUp>

        {/* Projects List */}
        <div className="space-y-8">
          {projectsData.map((project, pIdx) => {
            return (
              <FadeInUp key={project.id} delay={pIdx * 0.12} duration={0.5} yOffset={24}>
                <div className="border border-[#272B26] bg-[#191B19] transition-colors duration-150 hover:border-[#B5E66B]/60">
                  {/* Top Sub-Bar Header Strip per Stitch spec */}
                  <div className="border-b border-[#272B26] px-4 sm:px-6 py-2.5 bg-[#101110] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <span className="text-[#B5E66B] font-semibold tracking-wider">
                        {project.projectNumber}
                      </span>
                      <span className="text-[#A2A59D]">|</span>
                      <span className="text-[#F2F1EA] font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] text-[#A2A59D]">
                      <span>
                        TOOLS: <strong className="text-[#F2F1EA] font-normal">{project.tools.join(", ")}</strong>
                      </span>
                      <span className="hidden sm:inline">|</span>
                      <span>
                        NODE: <strong className="text-[#F2F1EA] font-normal">{project.technology}</strong>
                      </span>
                      <span className="hidden sm:inline">|</span>
                      <span>
                        CLOCK PERIOD: <strong className="text-[#B5E66B] font-normal">{project.clockPeriod}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Main Card Content */}
                  <div className="p-6 sm:p-8">
                    <div>
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#F2F1EA] tracking-tight">
                        {project.title}
                      </h3>

                      <p className="mt-2 font-sans text-sm sm:text-base text-[#A2A59D] leading-relaxed max-w-3xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Numerical Metrics Grid */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 font-mono">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="border border-[#272B26] p-3 bg-[#101110]">
                          <div className="text-[10px] text-[#A2A59D] uppercase tracking-wider">
                            {metric.label}
                          </div>
                          <div className="text-sm sm:text-base font-semibold text-[#F2F1EA] mt-1 tabular-nums">
                            {metric.value}
                            {metric.unit && (
                              <span className="text-[10px] text-[#A2A59D] ml-1 font-normal">
                                {metric.unit}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* PROJECT 01 SPECIFIC: PLACEMENT QoR RESULTS */}
                    {project.placementQoR && (
                      <div className="mt-6 border border-[#272B26] bg-[#101110] p-4 sm:p-5 font-mono text-xs">
                        <div className="flex flex-wrap items-center justify-between border-b border-[#272B26] pb-2.5 mb-3 gap-2">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-[#ffb4ab]" />
                            <span className="text-xs font-semibold text-[#F2F1EA] uppercase">
                              PLACEMENT QoR REPORT (NOT PRESENTED AS TIMING CLOSURE)
                            </span>
                          </div>
                          <span className="text-[10px] text-[#ffb4ab] border border-[#93000a] px-2 py-0.5 bg-[#93000a]/20">
                            WNS: {project.placementQoR.wns} | TNS: {project.placementQoR.tns}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          <div className="border border-[#272B26] p-3 bg-[#191B19]">
                            <div className="text-[10px] text-[#A2A59D] uppercase">Worst Negative Slack (WNS)</div>
                            <div className="text-base font-semibold text-[#ffb4ab] mt-1">{project.placementQoR.wns}</div>
                          </div>
                          <div className="border border-[#272B26] p-3 bg-[#191B19]">
                            <div className="text-[10px] text-[#A2A59D] uppercase">Total Negative Slack (TNS)</div>
                            <div className="text-base font-semibold text-[#ffb4ab] mt-1">{project.placementQoR.tns}</div>
                          </div>
                          <div className="border border-[#272B26] p-3 bg-[#191B19]">
                            <div className="text-[10px] text-[#A2A59D] uppercase">Overflow Edges (Total)</div>
                            <div className="text-base font-semibold text-[#F2F1EA] mt-1">{project.placementQoR.overflowEdges}</div>
                            <div className="text-[10px] text-[#A2A59D] mt-0.5">
                              Horizontal: {project.placementQoR.horizontalOverflow} | Vertical: <span className="text-[#ffb4ab]">{project.placementQoR.verticalOverflow}</span>
                            </div>
                          </div>
                          <div className="border border-[#272B26] p-3 bg-[#191B19]">
                            <div className="text-[10px] text-[#A2A59D] uppercase">Major Congestion Hotspot</div>
                            <div className="text-base font-semibold text-[#B5E66B] mt-1">{project.placementQoR.hotspot}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PROJECT 02 SPECIFIC: TIMING RESULTS CLEAN TABLE */}
                    {project.timingSlackTable && (
                      <div className="mt-6 border border-[#272B26] bg-[#101110] overflow-x-auto">
                        <div className="p-3 border-b border-[#272B26] flex items-center justify-between text-xs font-mono">
                          <span className="font-semibold text-[#F2F1EA] uppercase flex items-center gap-1.5">
                            <Table className="w-3.5 h-3.5 text-[#B5E66B]" />
                            TIMING RESULTS TABLE (ZERO VIOLATING PATHS, TNS: 0.0 ns)
                          </span>
                          <span className="text-[10px] text-[#B5E66B] flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B5E66B]" />
                            REPORTED TIMING MET
                          </span>
                        </div>

                        <table className="w-full text-left font-mono text-xs tabular-nums">
                          <thead>
                            <tr className="border-b border-[#272B26] bg-[#191B19] text-[#A2A59D] text-[10px] uppercase">
                              <th className="py-2.5 px-4 font-medium">Path Group / Parameter</th>
                              <th className="py-2.5 px-4 font-medium text-right">Timing Slack</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.timingSlackTable.map((row, idx) => (
                              <tr key={idx} className="border-b border-[#272B26] hover:bg-[#191B19]/50 transition-colors">
                                <td className="py-2.5 px-4 font-semibold text-[#F2F1EA]">{row.pathGroup}</td>
                                <td className="py-2.5 px-4 font-bold text-[#B5E66B] text-right">{row.slack}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* PROJECT 03 SPECIFIC: CLOCK CONFIGURATION TABLE */}
                    {project.clockConfiguration && (
                      <div className="mt-6 border border-[#272B26] bg-[#101110] p-4 font-mono text-xs">
                        <div className="flex items-center gap-2 border-b border-[#272B26] pb-2 mb-3">
                          <Clock className="w-4 h-4 text-[#B5E66B]" />
                          <span className="font-semibold text-[#F2F1EA] uppercase">
                            CLOCK CONFIGURATION
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {project.clockConfiguration.map((cfg, cIdx) => (
                            <div key={cIdx} className="border border-[#272B26] p-3 bg-[#191B19]">
                              <div className="text-[10px] text-[#A2A59D] uppercase">{cfg.clock}</div>
                              <div className="text-base font-semibold text-[#B5E66B] mt-0.5">{cfg.period}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Implementation Details */}
                    <div className="mt-6 pt-5 border-t border-[#272B26]">
                      <div className="text-[10px] font-mono text-[#A2A59D] uppercase tracking-wider mb-2.5">
                        IMPLEMENTATION DETAILS:
                      </div>
                      <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-[#A2A59D]">
                        {project.implementationDetails.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-[#B5E66B] font-mono text-[11px] mt-0.5">•</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};
