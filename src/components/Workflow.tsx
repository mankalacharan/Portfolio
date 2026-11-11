import React, { useState } from "react";
import { workflowStages } from "../data/workflow";
import { FadeInUp } from "./FadeInUp";
import { ArrowRight } from "lucide-react";

export const Workflow: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const activeStage = workflowStages[selectedStageIndex];

  return (
    <section id="workflow" className="py-16 border-b border-[#272B26] bg-[#101110]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp duration={0.4} yOffset={16}>
          <div className="flex flex-wrap items-center justify-between border-b border-[#272B26] pb-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#B5E66B] font-semibold tracking-wider">
                  [SECTION 04]
                </span>
                <span className="text-[#A2A59D] font-mono text-xs">// IMPLEMENTATION FLOW</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#F2F1EA] uppercase tracking-tight mt-1">
                RTL-to-GDSII Workflow
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#A2A59D] mt-2 sm:mt-0">
              <span className="w-2 h-2 bg-[#B5E66B]"></span>
              <span>7 WORKFLOW STAGES</span>
            </div>
          </div>
        </FadeInUp>

        {/* Workflow Visualization: RTL -> Synthesis -> Floorplanning -> Placement -> CTS -> Routing -> Signoff */}
        <FadeInUp delay={0.1} duration={0.4} yOffset={20}>
          <div className="border border-[#272B26] bg-[#191B19] mb-6 overflow-x-auto">
            <div className="flex min-w-[700px] divide-x divide-[#272B26]">
              {workflowStages.map((stage, idx) => {
                const isSelected = selectedStageIndex === idx;
                return (
                  <button
                    key={stage.step}
                    onClick={() => setSelectedStageIndex(idx)}
                    className={`flex-1 p-3 text-left transition-colors cursor-pointer group ${
                      isSelected
                        ? "bg-[#202420] text-[#B5E66B]"
                        : "bg-[#191B19] hover:bg-[#131413] text-[#A2A59D]"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                      <span className={isSelected ? "text-[#B5E66B] font-bold" : "text-[#A2A59D]"}>
                        STAGE {stage.step}
                      </span>
                      {idx < workflowStages.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-[#272B26] group-hover:text-[#A2A59D]" />
                      )}
                    </div>
                    <div
                      className={`font-mono text-xs font-semibold truncate ${
                        isSelected ? "text-[#F2F1EA]" : "text-[#F2F1EA]/80 group-hover:text-[#F2F1EA]"
                      }`}
                    >
                      {stage.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeInUp>

        {/* Selected Stage Detail Card */}
        <FadeInUp delay={0.2} duration={0.5} yOffset={24}>
          <div className="border border-[#272B26] bg-[#191B19] p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#272B26] pb-3 mb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#B5E66B]"></span>
                <span className="text-[#B5E66B] font-bold">
                  STAGE {activeStage.step}: {activeStage.name}
                </span>
              </div>
              <span className="text-[10px] text-[#A2A59D]">
                CLICK STAGES ABOVE TO INSPECT
              </span>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#F2F1EA] leading-relaxed max-w-3xl">
              {activeStage.explanation}
            </p>

            <div className="mt-6 pt-4 border-t border-[#272B26] flex items-center justify-between text-xs font-mono">
              <button
                disabled={selectedStageIndex === 0}
                onClick={() => setSelectedStageIndex((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 border border-[#272B26] bg-[#101110] text-[#A2A59D] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#F2F1EA] hover:border-[#A2A59D] transition-colors cursor-pointer"
              >
                ← Prev Stage
              </button>

              <span className="text-[#A2A59D]">
                Step {selectedStageIndex + 1} of {workflowStages.length}
              </span>

              <button
                disabled={selectedStageIndex === workflowStages.length - 1}
                onClick={() => setSelectedStageIndex((prev) => Math.min(workflowStages.length - 1, prev + 1))}
                className="px-3 py-1.5 bg-[#B5E66B] text-[#101110] font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#C8F57E] transition-colors cursor-pointer"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
