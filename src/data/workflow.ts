export interface WorkflowStage {
  step: string;
  name: string;
  explanation: string;
}

export const workflowStages: WorkflowStage[] = [
  {
    step: "01",
    name: "RTL",
    explanation: "Register-Transfer Level hardware description modeled in Verilog, defining synchronous digital functionality."
  },
  {
    step: "02",
    name: "Synthesis",
    explanation: "Translation and mapping of Verilog RTL logic into technology-specific gate-level cells under timing and design constraints using Cadence Genus."
  },
  {
    step: "03",
    name: "Floorplanning",
    explanation: "Establishing core boundary dimensions, target utilization, I/O pin placements, and macro channel allocations using Cadence Innovus."
  },
  {
    step: "04",
    name: "Placement",
    explanation: "Standard cell placement and legalization, optimizing cell density and analyzing horizontal and vertical routing congestion hotspots in Cadence Innovus."
  },
  {
    step: "05",
    name: "CTS",
    explanation: "Clock Tree Synthesis using Cadence Innovus CCOpt to distribute clock networks, balance skew, and prepare for post-CTS timing evaluation."
  },
  {
    step: "06",
    name: "Routing",
    explanation: "Interconnecting standard cell pins and macros across metal layers according to design rules in Cadence Innovus."
  },
  {
    step: "07",
    name: "Signoff",
    explanation: "Final verification stage covering design-rule report analysis, timing verification, and physical inspection."
  }
];
