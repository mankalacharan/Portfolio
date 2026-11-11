import React, { useState } from "react";
import { personalData } from "../data/personal";
import { FadeInUp } from "./FadeInUp";
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, MapPin, ExternalLink } from "lucide-react";

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const finalSubject = encodeURIComponent(
      subject ? `[VLSI PD] ${subject}` : "Inquiry for Mankala Charan - VLSI Physical Design"
    );
    const finalBody = encodeURIComponent(
      message || "Hello Mankala,\n\nI would like to connect regarding an opportunity."
    );
    window.location.href = `mailto:${personalData.email}?subject=${finalSubject}&body=${finalBody}`;
  };

  return (
    <section id="contact" className="py-16 border-b border-[#272B26] bg-[#101110]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp duration={0.4} yOffset={16}>
          <div className="flex flex-wrap items-center justify-between border-b border-[#272B26] pb-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#B5E66B] font-semibold tracking-wider">
                  [SECTION 06]
                </span>
                <span className="text-[#A2A59D] font-mono text-xs">// CONTACT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#F2F1EA] uppercase tracking-tight mt-1">
                Contact Information
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#A2A59D] mt-2 sm:mt-0">
              <span className="w-2 h-2 bg-[#B5E66B]"></span>
              <span>DIRECT CHANNELS</span>
            </div>
          </div>
        </FadeInUp>

        {/* 12-Column Grid */}
        <FadeInUp delay={0.15} duration={0.5} yOffset={24}>
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#272B26] bg-[#191B19]">
            {/* Left Column: Direct Communication Channels (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#272B26] flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-[#A2A59D] uppercase tracking-widest mb-3">
                  DIRECT CONTACT CHANNELS
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#F2F1EA] uppercase tracking-tight">
                  Get in Touch
                </h3>

                <p className="mt-3 font-sans text-xs sm:text-sm text-[#A2A59D] leading-relaxed">
                  Feel free to contact me via email, phone, LinkedIn, or GitHub for entry-level VLSI Physical Design positions.
                </p>

                {/* Direct Channels Cards */}
                <div className="mt-6 space-y-3 font-mono text-xs">
                  {/* Email Channel */}
                  <div className="border border-[#272B26] bg-[#101110] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#B5E66B]/60 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border border-[#272B26] bg-[#191B19] flex items-center justify-center text-[#B5E66B]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#A2A59D] uppercase">Email</div>
                        <a
                          href={`mailto:${personalData.email}`}
                          className="text-xs font-semibold text-[#F2F1EA] hover:text-[#B5E66B] transition-colors"
                        >
                          {personalData.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(personalData.email, "email")}
                        className="px-2.5 py-1 border border-[#272B26] text-[#A2A59D] hover:text-[#F2F1EA] hover:border-[#A2A59D] transition-colors cursor-pointer text-[10px]"
                        title="Copy email"
                      >
                        {copiedType === "email" ? (
                          <span className="text-[#B5E66B] flex items-center gap-1">
                            <Check className="w-3 h-3" /> Copied
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Copy className="w-3 h-3" /> Copy
                          </span>
                        )}
                      </button>
                      <a
                        href={`mailto:${personalData.email}`}
                        className="px-2.5 py-1 bg-[#B5E66B] text-[#101110] font-semibold text-[10px] uppercase hover:bg-[#C8F57E] transition-colors"
                      >
                        Open Mailto
                      </a>
                    </div>
                  </div>

                  {/* Phone Channel */}
                  <div className="border border-[#272B26] bg-[#101110] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#B5E66B]/60 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border border-[#272B26] bg-[#191B19] flex items-center justify-center text-[#B5E66B]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#A2A59D] uppercase">Phone</div>
                        <a
                          href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                          className="text-xs font-semibold text-[#F2F1EA] hover:text-[#B5E66B] transition-colors"
                        >
                          {personalData.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(personalData.phone, "phone")}
                        className="px-2.5 py-1 border border-[#272B26] text-[#A2A59D] hover:text-[#F2F1EA] hover:border-[#A2A59D] transition-colors cursor-pointer text-[10px]"
                        title="Copy phone"
                      >
                        {copiedType === "phone" ? (
                          <span className="text-[#B5E66B] flex items-center gap-1">
                            <Check className="w-3 h-3" /> Copied
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Copy className="w-3 h-3" /> Copy
                          </span>
                        )}
                      </button>
                      <a
                        href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                        className="px-2.5 py-1 border border-[#272B26] bg-[#191B19] text-[#F2F1EA] text-[10px] uppercase hover:border-[#B5E66B] hover:text-[#B5E66B] transition-colors"
                      >
                        Call
                      </a>
                    </div>
                  </div>

                  {/* Social / Profiles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <a
                      href={personalData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#272B26] bg-[#101110] p-3 flex items-center justify-between hover:border-[#B5E66B] group transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Linkedin className="w-4 h-4 text-[#B5E66B]" />
                        <div>
                          <div className="text-[10px] text-[#A2A59D] uppercase">LinkedIn</div>
                          <div className="text-xs font-semibold text-[#F2F1EA] group-hover:text-[#B5E66B]">
                            Mankalacharan
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#A2A59D] group-hover:text-[#B5E66B]" />
                    </a>

                    <a
                      href={personalData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#272B26] bg-[#101110] p-3 flex items-center justify-between hover:border-[#B5E66B] group transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Github className="w-4 h-4 text-[#B5E66B]" />
                        <div>
                          <div className="text-[10px] text-[#A2A59D] uppercase">GitHub</div>
                          <div className="text-xs font-semibold text-[#F2F1EA] group-hover:text-[#B5E66B]">
                            mankalacharan
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#A2A59D] group-hover:text-[#B5E66B]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mt-8 pt-6 border-t border-[#272B26] flex items-center justify-between font-mono text-xs text-[#A2A59D]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B5E66B]" />
                  <span>{personalData.location}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Functional Mailto Email Composer (6 cols) */}
            <div className="lg:col-span-6 bg-[#131413] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#272B26] pb-3 mb-4 font-mono text-xs">
                  <span className="font-semibold uppercase text-[#F2F1EA]">
                    Send Email Message
                  </span>
                  <span className="text-[10px] text-[#A2A59D]">
                    Functional mailto link
                  </span>
                </div>

                <form onSubmit={handleSendEmail} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-[10px] text-[#A2A59D] uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Entry-Level VLSI Physical Design Opportunity"
                      className="w-full bg-[#101110] border border-[#272B26] p-2.5 text-[#F2F1EA] font-mono text-xs focus:border-[#B5E66B] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#A2A59D] uppercase tracking-wider mb-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full bg-[#101110] border border-[#272B26] p-2.5 text-[#F2F1EA] font-mono text-xs focus:border-[#B5E66B] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#B5E66B] text-[#101110] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#C8F57E] transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open Email Client</span>
                  </button>
                </form>
              </div>

              <div className="mt-6 pt-4 border-t border-[#272B26] font-mono text-[10px] text-[#A2A59D] flex items-center justify-between">
                <span>Direct client-side mailto</span>
                <span className="text-[#B5E66B]">mankala31072004@gmail.com</span>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
