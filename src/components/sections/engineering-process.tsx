"use client";

import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const steps = [
  {
    num: "01",
    phase: "AUDIT",
    title: "Water Chemistry Profiling",
    description: "We audit your influent chemistry, analyze site parameters, and verify local regulatory compliance limits."
  },
  {
    num: "02",
    phase: "ENGINEER",
    title: "Process & Skid Design",
    description: "Our engineers build 3D layouts, perform fluid dynamics modeling, and customize piping skids for your site footprint."
  },
  {
    num: "03",
    phase: "FABRICATE",
    title: "Precision Skid Assembly",
    description: "We assemble the filtration skids, wire the electronic enclosures, and build containerized modules in our shops."
  },
  {
    num: "04",
    phase: "AUTOMATE",
    title: "SCADA PLC Integration",
    description: "We integrate smart sensors, program PLC logic controllers, and configure remote water monitoring dashboards."
  },
  {
    num: "05",
    phase: "SUPPORT",
    title: "Lifecycle Maintenance",
    description: "H2O specialists deploy for commissioning, provide membrane tuning, and offer 24/7 predictive dispatch."
  }
];

export function EngineeringProcess() {
  return (
    <section className="py-20 bg-transparent relative z-20 border-t border-slate-100 dark:border-slate-900">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 max-w-2xl">
          <span className="text-[10px] font-black text-[#1B79EE] tracking-widest uppercase">
            Operational Blueprint
          </span>
          <Typography 
            variant="h2" 
            className="text-2xl sm:text-3xl md:text-[38px] font-black text-slate-900 dark:text-white tracking-tight border-none pb-0 leading-tight"
          >
            The Lifecycle of Water Reliability
          </Typography>
          <Typography 
            variant="p" 
            className="text-slate-500 dark:text-slate-400 text-[13.5px] leading-relaxed mt-2"
          >
            We eliminate B2B execution risks by guiding you through a transparent, audited engineering methodology from initial testing to lifetime maintenance.
          </Typography>
        </div>

        {/* Horizontal Timeline Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 border-t border-slate-150 dark:border-slate-800 pt-8 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div 
              key={step.num}
              className={cn(
                "flex flex-col gap-4 relative",
                index !== 4 ? "md:border-r md:border-slate-200/50 md:dark:border-slate-800/50 md:pr-4" : ""
              )}
            >
              {/* Step number and phase label */}
              <div className="flex items-center justify-between">
                <span className="text-[34px] font-black text-slate-150 dark:text-slate-850 leading-none">
                  {step.num}
                </span>
                <span className="text-[9px] font-black tracking-widest text-[#1B79EE] bg-[#1B79EE]/5 px-2 py-0.5 border border-[#1B79EE]/10 uppercase">
                  {step.phase}
                </span>
              </div>

              {/* Title */}
              <Typography variant="h3" className="text-[13.5px] font-black text-slate-900 dark:text-slate-150 tracking-tight leading-snug mt-1">
                {step.title}
              </Typography>

              {/* Description */}
              <Typography variant="p" className="text-slate-500 dark:text-slate-450 text-[12px] leading-relaxed">
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
