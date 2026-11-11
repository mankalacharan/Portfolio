import React, { useState, useEffect } from "react";
import { personalData } from "../data/personal";
import { Menu, X, Download, Cpu, FileText } from "lucide-react";

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "projects", "workflow", "training", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "RTL-to-GDSII", href: "#workflow", id: "workflow" },
    { name: "Training", href: "#training", id: "training" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
        isScrolled
          ? "bg-[#101110]/95 backdrop-blur-sm border-b border-[#272B26]"
          : "bg-[#101110] border-b border-[#272B26]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Terminal Identifier */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#B5E66B]"
          >
            <div className="w-8 h-8 border border-[#272B26] bg-[#191B19] flex items-center justify-center text-[#B5E66B] group-hover:border-[#B5E66B] transition-colors">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-medium text-xs tracking-wider text-[#F2F1EA] group-hover:text-[#B5E66B] transition-colors">
                {personalData.name}
              </span>
              <span className="font-mono text-[10px] text-[#A2A59D] tracking-widest uppercase">
                VLSI PHYSICAL DESIGN
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`font-mono text-xs px-3 py-1.5 transition-colors border ${
                    isActive
                      ? "text-[#B5E66B] border-[#272B26] bg-[#191B19]"
                      : "text-[#A2A59D] border-transparent hover:text-[#F2F1EA] hover:border-[#272B26]"
                  }`}
                >
                  <span className="text-[#A2A59D]/60 mr-1.5 text-[10px]">/</span>
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions & Resume Download */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 border border-[#272B26] px-2.5 py-1 bg-[#191B19]">
              <span className="w-1.5 h-1.5 bg-[#B5E66B]"></span>
              <span className="font-mono text-[10px] tracking-wider text-[#A2A59D] uppercase">
                HYDERABAD, IN // VLSI TRAINEE
              </span>
            </div>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#B5E66B] text-[#101110] font-mono text-xs font-medium uppercase tracking-wider hover:bg-[#C8F57E] transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResumeModal}
              className="px-2 py-1 bg-[#B5E66B] text-[#101110] font-mono text-[11px] font-medium uppercase"
              title="Resume"
            >
              <FileText className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 border border-[#272B26] bg-[#191B19] text-[#A2A59D] hover:text-[#B5E66B] hover:border-[#B5E66B] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#272B26] bg-[#101110] px-4 py-3 space-y-1">
          <div className="text-[10px] font-mono text-[#A2A59D] uppercase px-3 py-1 border-b border-[#272B26] mb-2 flex justify-between">
            <span>NAV_SELECT</span>
            <span className="text-[#B5E66B]">SYSTEM: ONLINE</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs px-3 py-2 text-[#A2A59D] hover:text-[#B5E66B] hover:bg-[#191B19] border border-transparent hover:border-[#272B26] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 pb-1 border-t border-[#272B26] mt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-[#B5E66B] text-[#101110] font-mono text-xs font-medium uppercase tracking-wider"
            >
              <Download className="w-4 h-4" />
              Download Resume Spec
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
