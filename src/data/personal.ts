export interface PersonalInfo {
  name: string;
  title: string;
  candidateLevel: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumePath: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    duration: string;
    cgpa: string;
  };
  currentTraining: {
    role: string;
    institution: string;
    location: string;
    duration: string;
    description: string;
  };
  technicalKeywords: string[];
}

export const personalData: PersonalInfo = {
  name: "MANKALA CHARAN",
  title: "VLSI PHYSICAL DESIGN ENGINEER",
  candidateLevel: "Entry-Level Physical Design Candidate",
  tagline: "From RTL to Physical Implementation.",
  description:
    "Electronics and Communication Engineering graduate focused on VLSI Physical Design, timing analysis and physical implementation. Currently undergoing specialized training at Sumedha Institute of Technology.",
  location: "Hyderabad, Telangana, India",
  email: "mankala31072004@gmail.com",
  phone: "+91 9989944711",
  linkedin: "https://linkedin.com/in/Mankalacharan/",
  github: "https://github.com/mankalacharan",
  resumePath: "/assets/Mankala_Charan_VLSI_Physical_Design_Resume.pdf",
  education: {
    degree: "B.Tech",
    field: "Electronics and Communication Engineering",
    institution: "Chandigarh University",
    duration: "2022–2026",
    cgpa: "7.0/10"
  },
  currentTraining: {
    role: "VLSI Physical Design Trainee",
    institution: "Sumedha Institute of Technology",
    location: "Hyderabad",
    duration: "2026–Present",
    description:
      "Currently undergoing structured training in VLSI Physical Design with a focus on the complete RTL-to-GDSII flow, timing analysis, physical implementation and optimization."
  },
  technicalKeywords: [
    "RTL",
    "SYNTHESIS",
    "STA",
    "PLACEMENT",
    "CTS",
    "ROUTING"
  ]
};

export const aboutContent = {
  bioParagraphs: [
    "I am Mankala Charan, a B.Tech graduate in Electronics and Communication Engineering from Chandigarh University.",
    "My current focus is VLSI Physical Design, where I am developing practical knowledge of the RTL-to-GDSII implementation flow.",
    "Through structured training and project work, I have explored synthesis, timing constraints, Static Timing Analysis, floorplanning, placement, Clock Tree Synthesis and physical design optimization.",
    "I enjoy understanding how RTL designs are transformed into physical implementations and analyzing the trade-offs between timing, area and congestion."
  ]
};
