export interface TrainingData {
  role: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  topics: string[];
}

export const trainingData: TrainingData = {
  role: "VLSI Physical Design Trainee",
  institution: "Sumedha Institute of Technology",
  location: "Hyderabad",
  duration: "2026–Present",
  description:
    "Currently undergoing structured training in VLSI Physical Design with a focus on the complete RTL-to-GDSII flow, timing analysis, physical implementation and optimization.",
  topics: [
    "CMOS and MOSFET Fundamentals",
    "Digital Electronics",
    "Verilog RTL",
    "Linux and Tcl",
    "Synthesis",
    "SDC Constraints",
    "Static Timing Analysis",
    "Floorplanning",
    "Placement",
    "CTS",
    "Routing",
    "PPA Analysis"
  ]
};
