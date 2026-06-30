export interface MegaColumn {
  category: string;
  links: string[];
}

export const navigation = {
  topbarLeft: [
    { title: "OUR VALUES", href: "#" },
    { title: "HISTORY", href: "#" },
    { title: "TRANSFORMATION", href: "#" },
    { title: "INNOVATIONS", href: "#" },
    { title: "MAKING HISTORY", href: "#" },
    { title: "ALWAYS FIRST", href: "#" },
    { title: "GOVERNMENT AFFAIRS", href: "#" },
  ],
  topbarRight: [
    { title: "VENTURES", href: "#" },
    { title: "HR", href: "#" },
    { title: "MEGA FOUNDATION", href: "#" },
    { title: "METAL PRICE INDEX", href: "#" },
  ],
  navbarLeft: [
    { title: "SOLUTIONS", href: "#" },
    { title: "INFRASTRUCTURE", href: "#" },
    { title: "MARINE", href: "#" },
    { title: "RESOURCES", href: "#" },
  ],
  navbarRight: [
    { title: "PORTAL LOGIN", href: "#" },
  ],
  megaMenu: {
    SOLUTIONS: [
      {
        category: "INDUSTRIAL WATER TREATMENT",
        links: ["Process Water Systems", "Boiler Feedwater Treatment", "Cooling Tower Filtration", "Condensate Polishing Units"]
      },
      {
        category: "MUNICIPAL PURIFICATION",
        links: ["Membrane Bioreactors (MBR)", "Reverse Osmosis (RO) Plants", "Ultrafiltration Systems", "Disinfection Skids"]
      },
      {
        category: "DESALINATION & RECOVERY",
        links: ["Seawater Desalination", "Zero Liquid Discharge (ZLD)", "Wastewater Recycling", "Brackish Water Systems"]
      },
      {
        category: "DIGITAL WATER & IOT",
        links: ["SCADA & Automation", "Smart Flow Controls", "Predictive Maintenance Systems", "Water Quality Analytics"]
      }
    ] as MegaColumn[],
    INFRASTRUCTURE: [
      {
        category: "TREATMENT PLANTS",
        links: ["Modular Water Plants", "Packaged RO Skids", "Containerized Units", "High-Capacity Stations"]
      },
      {
        category: "DISTRIBUTION SYSTEMS",
        links: ["Smart Flow Nodes", "High-Pressure Pumping", "Storage Reservoirs", "Hydraulic Networks"]
      },
      {
        category: "FILTRATION MEDIA",
        links: ["Activated Carbon Beds", "Sand & Gravel Filters", "Ion Exchange Skids", "Cartridge Housing Racks"]
      },
      {
        category: "CONTROL & MONITORING",
        links: ["Chemical Dosing Skids", "Water Quality Sensors", "Remote Control Panels", "Intelligent Valves"]
      }
    ] as MegaColumn[],
    MARINE: [
      {
        category: "OFFSHORE SYSTEMS",
        links: ["Platform Water Makers", "Deepsea Intake Nodes", "Brine Discharge Ports", "Heavy Marine Desalination"]
      },
      {
        category: "VESSEL HYDRATION",
        links: ["Cruise Ship Purification", "Cargo Tank Disinfection", "Ballast Water Treatment", "Marine Outfalls"]
      },
      {
        category: "COASTAL PROTECTION",
        links: ["Tidal Sluice Gates", "Silt Barrier Curtains", "Marine Intake Screens", "Corrosion-Resistant Piping"]
      },
      {
        category: "ENERGY RECOVERY",
        links: ["Pressure Exchangers", "Solar Desalination Skids", "Energy Recovery Devices (ERD)", "Low-Energy Pumps"]
      }
    ] as MegaColumn[],
    RESOURCES: [
      {
        category: "GROUNDWATER",
        links: ["Groundwater Well Extraction", "Managed Aquifer Recharge", "Silt Separators", "Iron & Manganese Filters"]
      },
      {
        category: "SURFACE WATER",
        links: ["River Intake Screens", "Reservoir Aeration Systems", "Algae Filtration Skids", "Sediment Settlers"]
      },
      {
        category: "REUSE & HARVESTING",
        links: ["Stormwater Harvesting", "Graywater Reclamation", "Rainwater Clarifiers", "Condensate Reclaim Units"]
      },
      {
        category: "SUSTAINABILITY SOLUTIONS",
        links: ["Carbon-Neutral Plants", "Solar-Powered Skids", "Chemical-Free Treatment", "Eco Scale Control"]
      }
    ] as MegaColumn[]
  },
  footer: {
    solutions: [
      { title: "Water Treatment", href: "#" },
      { title: "Desalination", href: "#" },
      { title: "Industrial Filtration", href: "#" },
      { title: "Smart Water Grids", href: "#" },
    ],
    company: [
      { title: "About Us", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Investors", href: "#" },
      { title: "News & Media", href: "#" },
    ],
    legal: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Cookie Policy", href: "#" },
    ],
  },
};
export type Navigation = typeof navigation;
