import React from "react";
import { personalData, aboutContent } from "../data/personal";
import { skillsData } from "../data/skills";
import { projectsData } from "../data/projects";
import { X, Download, Printer } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="relative w-full max-w-4xl bg-[#191B19] border border-[#272B26] shadow-2xl text-[#F2F1EA] max-h-[92vh] flex flex-col">
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#272B26] bg-[#101110]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#B5E66B]"></span>
            <span className="font-mono text-xs font-semibold text-[#F2F1EA] uppercase tracking-wider">
              RESUME // CANDIDATE SPECIFICATION
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalData.resumePath}
              download="Mankala_Charan_VLSI_Physical_Design_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B5E66B] text-[#101110] font-mono text-xs font-semibold uppercase hover:bg-[#C8F57E] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#272B26] text-[#A2A59D] font-mono text-xs hover:text-[#F2F1EA] hover:border-[#A2A59D] transition-colors"
              title="Print Spec Sheet"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 border border-[#272B26] text-[#A2A59D] hover:text-[#B5E66B] hover:border-[#B5E66B] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 font-mono text-xs">
          {/* Resume Header */}
          <div className="border-b border-[#272B26] pb-4">
            <h1 className="text-2xl sm:text-3xl font-sans font-bold text-[#F2F1EA] tracking-tight">
              {personalData.name}
            </h1>
            <p className="text-sm font-mono text-[#B5E66B] mt-1 font-medium">
              {personalData.title}
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-[11px] text-[#A2A59D] mt-2">
              <span>{personalData.location}</span>
              <span>•</span>
              <a href={`mailto:${personalData.email}`} className="hover:text-[#B5E66B] underline">
                {personalData.email}
              </a>
              <span>•</span>
              <a href={`tel:${personalData.phone.replace(/\s+/g, "")}`} className="hover:text-[#B5E66B]">
                {personalData.phone}
              </a>
              <span>•</span>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#B5E66B]">
                LinkedIn
              </a>
              <span>•</span>
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#B5E66B]">
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold text-[#B5E66B] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>[01]</span>
              <span>ABOUT</span>
            </h2>
            <div className="space-y-2 font-sans text-xs sm:text-sm text-[#F2F1EA]/90 leading-relaxed">
              {aboutContent.bioParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Education & Current Training */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[#272B26] p-3.5 bg-[#101110]">
              <h3 className="text-[10px] text-[#B5E66B] uppercase font-bold tracking-wider mb-1">
                CURRENT TRAINING
              </h3>
              <div className="text-xs font-semibold text-[#F2F1EA]">
                {personalData.currentTraining.role}
              </div>
              <div className="text-[11px] text-[#A2A59D] mt-0.5">
                {personalData.currentTraining.institution} • {personalData.currentTraining.location}
              </div>
              <div className="text-[10px] text-[#B5E66B] mt-0.5">
                {personalData.currentTraining.duration}
              </div>
              <p className="font-sans text-[11px] text-[#A2A59D] mt-2 leading-relaxed">
                {personalData.currentTraining.description}
              </p>
            </div>

            <div className="border border-[#272B26] p-3.5 bg-[#101110]">
              <h3 className="text-[10px] text-[#B5E66B] uppercase font-bold tracking-wider mb-1">
                EDUCATION
              </h3>
              <div className="text-xs font-semibold text-[#F2F1EA]">
                {personalData.education.degree} in {personalData.education.field}
              </div>
              <div className="text-[11px] text-[#A2A59D] mt-0.5">
                {personalData.education.institution}
              </div>
              <div className="flex justify-between text-[11px] mt-2 text-[#A2A59D] border-t border-[#272B26] pt-2">
                <span>Duration: {personalData.education.duration}</span>
                <span className="text-[#B5E66B] font-semibold">CGPA: {personalData.education.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold text-[#B5E66B] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>[02]</span>
              <span>TECHNICAL SKILLS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {skillsData.map((cat) => (
                <div key={cat.id} className="border border-[#272B26] p-2.5 bg-[#101110]">
                  <div className="text-[10px] text-[#A2A59D] uppercase tracking-wider font-semibold">
                    {cat.category}
                  </div>
                  <div className="mt-1 text-[11px] text-[#F2F1EA] flex flex-wrap gap-1">
                    {cat.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-1.5 py-0.5 text-[10px] border border-[#272B26] bg-[#191B19] text-[#F2F1EA]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          <div>
            <h2 className="text-xs font-mono font-bold text-[#B5E66B] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>[03]</span>
              <span>PROJECTS</span>
            </h2>

            <div className="space-y-3">
              {projectsData.map((project) => (
                <div key={project.id} className="border border-[#272B26] p-3 bg-[#101110]">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#272B26] pb-1.5 mb-2">
                    <span className="font-semibold text-xs text-[#F2F1EA]">
                      {project.title}
                    </span>
                    <span className="text-[10px] text-[#B5E66B]">
                      {project.tools.join(", ")} | {project.technology} | Period: {project.clockPeriod}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A2A59D] mb-2 font-sans leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="text-[10px] text-[#A2A59D] list-disc list-inside space-y-1">
                    {project.implementationDetails.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-[#272B26] px-4 py-3 bg-[#101110] flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#A2A59D]">
            HYDERABAD, TELANGANA, INDIA
          </span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1 border border-[#272B26] text-[#A2A59D] font-mono text-xs hover:text-[#F2F1EA]"
            >
              Close
            </button>
            <a
              href={personalData.resumePath}
              download="Mankala_Charan_VLSI_Physical_Design_Resume.pdf"
              className="px-3 py-1 bg-[#B5E66B] text-[#101110] font-mono text-xs font-medium uppercase"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
