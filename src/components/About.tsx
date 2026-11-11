import React from "react";
import { personalData, aboutContent } from "../data/personal";
import { FadeInUp } from "./FadeInUp";
import { GraduationCap, Award, MapPin } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 border-b border-[#272B26] bg-[#101110] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp duration={0.4} yOffset={16}>
          <div className="flex flex-wrap items-center justify-between border-b border-[#272B26] pb-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#B5E66B] font-semibold tracking-wider">
                  [SECTION 01]
                </span>
                <span className="text-[#A2A59D] font-mono text-xs">// PROFILE & BACKGROUND</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#F2F1EA] uppercase tracking-tight mt-1">
                About the Engineer
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#A2A59D] mt-2 sm:mt-0">
              <MapPin className="w-3.5 h-3.5 text-[#B5E66B]" />
              <span>{personalData.location}</span>
            </div>
          </div>
        </FadeInUp>

        {/* 12-Column Grid */}
        <FadeInUp delay={0.15} duration={0.5} yOffset={24}>
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#272B26] bg-[#191B19]">
            {/* Left Column: Exact Bio Narrative (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#272B26] flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-[#A2A59D] uppercase tracking-widest mb-4">
                  BIOGRAPHY & BACKGROUND
                </div>

                {/* Exact Bio Paragraphs */}
                <div className="space-y-4 font-sans text-sm sm:text-base text-[#F2F1EA]/90 leading-relaxed">
                  <p className="font-medium text-[#F2F1EA]">
                    {aboutContent.bioParagraphs[0]}
                  </p>
                  <p className="text-[#A2A59D]">
                    {aboutContent.bioParagraphs[1]}
                  </p>
                  <p className="text-[#A2A59D]">
                    {aboutContent.bioParagraphs[2]}
                  </p>
                  <p className="border-l-2 border-[#B5E66B] pl-4 py-2 text-[#F2F1EA] italic font-normal bg-[#101110]">
                    "{aboutContent.bioParagraphs[3]}"
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#272B26] font-mono text-xs text-[#A2A59D] flex items-center justify-between">
                <span>CANDIDATE LEVEL:</span>
                <span className="text-[#B5E66B]">{personalData.candidateLevel}</span>
              </div>
            </div>

            {/* Right Column: Verified Credentials (5 cols) */}
            <div className="lg:col-span-5 bg-[#131413] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              {/* Current Training Card */}
              <div className="border border-[#272B26] bg-[#191B19] p-5">
                <div className="flex items-center justify-between border-b border-[#272B26] pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#B5E66B]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B5E66B] font-semibold">
                      CURRENT TRAINING
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A2A59D]">
                    {personalData.currentTraining.duration}
                  </span>
                </div>

                <h3 className="font-sans text-base font-bold text-[#F2F1EA]">
                  {personalData.currentTraining.role}
                </h3>
                <div className="font-mono text-xs text-[#B5E66B] mt-0.5">
                  {personalData.currentTraining.institution}
                </div>
                <div className="font-mono text-[11px] text-[#A2A59D] mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#A2A59D]" />
                  {personalData.currentTraining.location}
                </div>

                <p className="mt-3 text-xs font-sans text-[#A2A59D] leading-relaxed border-t border-[#272B26] pt-2.5">
                  {personalData.currentTraining.description}
                </p>
              </div>

              {/* Academic Education Card */}
              <div className="border border-[#272B26] bg-[#191B19] p-5">
                <div className="flex items-center justify-between border-b border-[#272B26] pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#B5E66B]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A2A59D] font-semibold">
                      EDUCATION
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A2A59D]">
                    {personalData.education.duration}
                  </span>
                </div>

                <h3 className="font-sans text-base font-bold text-[#F2F1EA]">
                  {personalData.education.degree} {personalData.education.field}
                </h3>
                <div className="font-mono text-xs text-[#A2A59D] mt-0.5">
                  {personalData.education.institution}
                </div>

                <div className="mt-3 flex items-center justify-between border border-[#272B26] bg-[#101110] px-3 py-2">
                  <span className="font-mono text-[11px] text-[#A2A59D] uppercase">
                    Grade
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#B5E66B]">
                    CGPA: {personalData.education.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
