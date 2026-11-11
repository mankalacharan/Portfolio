import React from "react";
import { trainingData } from "../data/training";
import { FadeInUp } from "./FadeInUp";
import { Award, BookOpen, MapPin } from "lucide-react";

export const Training: React.FC = () => {
  return (
    <section id="training" className="py-16 border-b border-[#272B26] bg-[#101110]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp duration={0.4} yOffset={16}>
          <div className="flex flex-wrap items-center justify-between border-b border-[#272B26] pb-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#B5E66B] font-semibold tracking-wider">
                  [SECTION 05]
                </span>
                <span className="text-[#A2A59D] font-mono text-xs">// TRAINING EXPERIENCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#F2F1EA] uppercase tracking-tight mt-1">
                Training Experience
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#A2A59D] mt-2 sm:mt-0">
              <span className="w-2 h-2 bg-[#B5E66B]"></span>
              <span>SUMEDHA INSTITUTE OF TECHNOLOGY // HYDERABAD</span>
            </div>
          </div>
        </FadeInUp>

        {/* Institution & Role Header Bar */}
        <FadeInUp delay={0.1} duration={0.5} yOffset={20}>
          <div className="border border-[#272B26] bg-[#191B19] p-6 sm:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#272B26] pb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#101110] border border-[#272B26] text-[#B5E66B] font-mono text-[10px] uppercase font-semibold">
                    CURRENT TRAINING
                  </span>
                  <span className="font-mono text-xs text-[#A2A59D]">
                    {trainingData.duration}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#F2F1EA] uppercase tracking-tight mt-2">
                  {trainingData.role}
                </h3>
                <div className="font-mono text-sm text-[#B5E66B] mt-1 font-medium">
                  {trainingData.institution} • {trainingData.location}
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <div className="border border-[#272B26] px-3 py-1.5 bg-[#101110] text-[#A2A59D]">
                  TOPICS: <strong className="text-[#F2F1EA]">{trainingData.topics.length} AREAS</strong>
                </div>
              </div>
            </div>

            <p className="mt-5 font-sans text-sm sm:text-base text-[#F2F1EA]/90 leading-relaxed max-w-4xl">
              "{trainingData.description}"
            </p>
          </div>
        </FadeInUp>

        {/* 12 Topics Grid */}
        <FadeInUp delay={0.2} duration={0.5} yOffset={24}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-mono text-xs font-semibold text-[#F2F1EA] uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#B5E66B]" />
                TRAINING TOPICS ({trainingData.topics.length})
              </h4>
              <span className="font-mono text-[10px] text-[#A2A59D]">
                SUMEDHA INSTITUTE CURRICULUM
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border border-[#272B26] bg-[#272B26]">
              {trainingData.topics.map((topic, idx) => (
                <div
                  key={topic}
                  className="p-4 bg-[#191B19] border-b sm:border-b-0 border-[#272B26] flex flex-col justify-between hover:bg-[#202420] transition-colors"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] mb-2">
                    <span className="text-[#B5E66B] font-bold">
                      TOPIC [0{idx + 1}]
                    </span>
                    <span className="w-1.5 h-1.5 bg-[#B5E66B]"></span>
                  </div>

                  <h5 className="font-mono text-xs font-semibold text-[#F2F1EA]">
                    {topic}
                  </h5>

                  <div className="mt-4 pt-2 border-t border-[#272B26] text-[10px] font-mono text-[#A2A59D]">
                    Training Module
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
