export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "vlsi-pd",
    category: "VLSI PHYSICAL DESIGN",
    skills: [
      "RTL-to-GDSII Flow",
      "Synthesis",
      "Floorplanning",
      "Placement",
      "CTS",
      "Routing",
      "STA",
      "Timing Closure",
      "PPA",
      "Crosstalk"
    ]
  },
  {
    id: "timing-constraints",
    category: "TIMING AND CONSTRAINTS",
    skills: [
      "SDC",
      "Clock Constraints",
      "Setup/Hold",
      "Clock Skew",
      "Clock Uncertainty",
      "Derates",
      "Path Groups",
      "I/O Delays"
    ]
  },
  {
    id: "eda-tools",
    category: "EDA TOOLS",
    skills: [
      "Cadence Genus",
      "Cadence Innovus"
    ]
  },
  {
    id: "hdl",
    category: "HDL",
    skills: [
      "Verilog"
    ]
  },
  {
    id: "programming",
    category: "PROGRAMMING",
    skills: [
      "Linux",
      "Tcl/Tclsh",
      "Shell Scripting",
      "Python"
    ]
  },
  {
    id: "additional",
    category: "ADDITIONAL",
    skills: [
      "MATLAB",
      "Simulink",
      "Stateflow",
      "Embedded C"
    ]
  }
];
