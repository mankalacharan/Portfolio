/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Workflow } from "./components/Workflow";
import { Training } from "./components/Training";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#101110] text-[#F2F1EA] flex flex-col font-sans selection:bg-[#B5E66B] selection:text-[#101110]">
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <Training />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Resume Download / Interactive Spec Sheet Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
