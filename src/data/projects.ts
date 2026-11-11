export interface ProjectTimingRow {
  pathGroup: string;
  slack: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  unit?: string;
}

export interface ProjectData {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  tools: string[];
  technology: string;
  clockPeriod: string;
  description: string;
  metrics: ProjectMetric[];
  placementQoR?: {
    wns: string;
    tns: string;
    overflowEdges: string;
    horizontalOverflow: string;
    verticalOverflow: string;
    hotspot: string;
  };
  timingSlackTable?: ProjectTimingRow[];
  clockConfiguration?: {
    clock: string;
    period: string;
  }[];
  implementationDetails: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "cva6-riscv",
    projectNumber: "PROJECT 01",
    title: "CVA6 RISC-V PROCESSOR",
    category: "Synthesis | Placement | CTS",
    tools: ["Cadence Genus", "Cadence Innovus"],
    technology: "28 nm",
    clockPeriod: "1.6 ns",
    description:
      "Synthesized and implemented CVA6 through placement and CTS, analyzing timing, congestion and physical design quality.",
    metrics: [
      { label: "Total leaf instances", value: "178,799" },
      { label: "Sequential instances", value: "23,675" },
      { label: "Combinational instances", value: "155,124" },
      { label: "Target utilization", value: "70%" },
      { label: "Macro channels", value: "15", unit: "µm" }
    ],
    placementQoR: {
      wns: "-0.485 ns",
      tns: "-2035.472 ns",
      overflowEdges: "1,529",
      horizontalOverflow: "76",
      verticalOverflow: "1,456",
      hotspot: "ex_stage_i"
    },
    implementationDetails: [
      "Floorplanning and macro placement.",
      "Placement implementation.",
      "CTS using Innovus CCOpt.",
      "Post-CTS setup and hold analysis.",
      "Design-rule report analysis.",
      "Investigated macro-channel adjustments, placement effort and module padding to understand congestion mitigation and timing-versus-density trade-offs."
    ]
  },
  {
    id: "aes-core",
    projectNumber: "PROJECT 02",
    title: "AES CORE",
    category: "RTL Synthesis & Timing Analysis",
    tools: ["Cadence Genus"],
    technology: "28 nm",
    clockPeriod: "1.2 ns (approximately 1.1 GHz)",
    description:
      "RTL Synthesis & Timing Analysis of AES Core.",
    metrics: [
      { label: "Zero violating paths", value: "Reported" },
      { label: "Total Negative Slack (TNS)", value: "0.0 ns" },
      { label: "Sequential instances", value: "532" },
      { label: "Combinational instances", value: "8,942" },
      { label: "Total leaf instances", value: "9,474" },
      { label: "Cell area", value: "5,774" },
      { label: "Maximum fanout", value: "401" }
    ],
    timingSlackTable: [
      { pathGroup: "r2r", slack: "+0.1 ps" },
      { pathGroup: "i2r", slack: "+1.6 ps" },
      { pathGroup: "Clock-gating enable", slack: "+66.8 ps" },
      { pathGroup: "r2o", slack: "+93.2 ps" }
    ],
    implementationDetails: [
      "Zero violating paths in the reported timing analysis.",
      "TNS: 0.0 ns.",
      "Cell area: 5,774 with maximum fanout of 401.",
      "Timing slack results verified across r2r, i2r, Clock-gating enable, and r2o path groups."
    ]
  },
  {
    id: "half-cycle-timing",
    projectNumber: "PROJECT 03",
    title: "HALF-CYCLE TIMING CONSTRAINT TEST CASE",
    category: "Multi-Clock Synthesis Test Case",
    tools: ["Cadence Genus"],
    technology: "28 nm",
    clockPeriod: "1 ns, 2.2 ns and 4.4 ns",
    description:
      "Built a multi-clock synthesis test case to understand half-cycle setup and hold timing behaviour.",
    metrics: [
      { label: "Tool", value: "Cadence Genus" },
      { label: "Technology", value: "28 nm" },
      { label: "Clock 1 Period", value: "1 ns" },
      { label: "Clock 2 Period", value: "2.2 ns" },
      { label: "Clock 3 Period", value: "4.4 ns" }
    ],
    clockConfiguration: [
      { clock: "Clock 1", period: "1 ns" },
      { clock: "Clock 2", period: "2.2 ns" },
      { clock: "Clock 3", period: "4.4 ns" }
    ],
    implementationDetails: [
      "Studied half-cycle setup and hold paths.",
      "Compared timing reports across multiple I/O delay budgets.",
      "Evaluated the effect of I/O constraints on timing violations."
    ]
  }
];
