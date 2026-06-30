"use client";

import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { Factory, Droplet, Cpu, ShieldAlert, ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Industrial Treatment",
    icon: Factory,
    description: "Highly automated purification skids delivering continuous uptime and ultra-pure water chemistry for advanced industrial operations.",
    features: [
      "High-purity process water skids",
      "High-pressure boiler feedwater",
      "Industrial cooling tower filtration",
      "Condensate polishing systems"
    ]
  },
  {
    title: "Municipal Purification",
    icon: Droplet,
    description: "Reliable, high-throughput water filtration and sewage processing infrastructure for municipalities and growing urban centers.",
    features: [
      "Membrane Bioreactors (MBR)",
      "High-output Reverse Osmosis",
      "Municipal Ultrafiltration units",
      "Chlorine-free disinfection skids"
    ]
  },
  {
    title: "Desalination & Zero-Waste",
    icon: ShieldAlert,
    description: "Turning sea and brackish sources into sustainable fresh water while utilizing Zero Liquid Discharge (ZLD) to reclaim all resources.",
    features: [
      "Seawater desalination plants",
      "Zero Liquid Discharge (ZLD)",
      "Industrial wastewater recycling",
      "Brackish water RO skids"
    ]
  },
  {
    title: "Digital Water & Automation",
    icon: Cpu,
    description: "Next-generation SCADA integration and IoT monitoring arrays that ensure predictive plant maintenance and absolute compliance.",
    features: [
      "Custom PLC / SCADA automation",
      "Smart pneumatic flow control",
      "Predictive membrane diagnostics",
      "Real-time water quality dashboards"
    ]
  }
];

export function SolutionsPreview() {
  return (
    <section className="py-20 bg-transparent relative z-20 border-t border-slate-100 dark:border-slate-900">
      <Container>
        {/* Psychological Context Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black text-[#1B79EE] tracking-widest uppercase">
              Core Capabilities
            </span>
            <Typography 
              variant="h2" 
              className="text-2xl sm:text-3xl md:text-[38px] font-black text-slate-900 dark:text-white tracking-tight border-none pb-0 leading-tight"
            >
              Engineered for Absolute Reliability
            </Typography>
          </div>
          <Typography 
            variant="p" 
            className="max-w-md font-sans text-slate-500 dark:text-slate-400 text-[13.5px] leading-relaxed mt-0 md:mb-1"
          >
            H2O Industries provides tailored, automated water technologies that guarantee compliance, optimize chemistry, and protect high-value infrastructure.
          </Typography>
        </div>

        {/* 4-Column Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <div 
                key={sol.title}
                className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-6 flex flex-col justify-between group hover:border-[#1B79EE] transition-all duration-300 rounded-none shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon Block */}
                  <div className="w-10 h-10 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-[#1B79EE] flex items-center justify-center rounded-none group-hover:bg-[#1B79EE] group-hover:text-white group-hover:border-[#1B79EE] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <Typography variant="h3" className="text-base font-black text-slate-900 dark:text-slate-150 tracking-tight">
                    {sol.title}
                  </Typography>

                  {/* Description */}
                  <Typography variant="p" className="text-slate-500 dark:text-slate-450 text-[12.5px] leading-relaxed">
                    {sol.description}
                  </Typography>

                  {/* Bullet Sub-features */}
                  <ul className="flex flex-col gap-2 mt-2 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    {sol.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-[11px] font-bold text-slate-650 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 bg-[#1B79EE]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Trigger */}
                <div className="flex items-center gap-1.5 text-[#004aeb] dark:text-[#00BBFF] text-[11px] font-black uppercase tracking-wider mt-6 pt-4 border-t border-slate-50 dark:border-slate-850 cursor-pointer group-hover:text-[#1B79EE]">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
