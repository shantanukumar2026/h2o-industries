"use client";

import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, FileEdit } from "lucide-react";

export function CTAStory() {
  return (
    <section className="py-20 bg-transparent relative z-20 border-t border-slate-100 dark:border-slate-900">
      <Container>
        {/* Callout container card */}
        <div className="relative bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-8 md:p-12 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.02)] rounded-none bg-blueprint">
          {/* Blueprint glow detail */}
          <div className="absolute top-[0%] right-[-10%] w-[50%] h-[100%] bg-gradient-to-br from-[#00BBFF]/5 via-[#1B79EE]/2 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-[10px] font-black text-[#1B79EE] tracking-widest uppercase">
                Operational Security
              </span>
              <Typography 
                variant="h2" 
                className="text-2xl sm:text-3xl md:text-[34px] font-black text-slate-900 dark:text-white tracking-tight border-none pb-0 leading-tight"
              >
                Secure Your Plant’s Water Continuity
              </Typography>
              <Typography 
                variant="p" 
                className="max-w-2xl font-sans text-slate-500 dark:text-slate-400 text-[13.5px] leading-relaxed mt-1"
              >
                In industrial operations, water quality failures and scarcity threaten continuous productivity. Partner with H2O Industries for future-proof engineering and SCADA automation skids that guarantee absolute reliability.
              </Typography>
            </div>

            {/* Right Buttons Column */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full">
              <Button
                size="lg"
                className="bg-[#004aeb] hover:bg-[#0038cb] text-white font-bold text-[11px] uppercase tracking-wider h-12 shadow-sm flex items-center justify-center gap-2 rounded-none w-full"
              >
                <FileEdit className="w-4 h-4 stroke-[1.8px]" />
                Request Engineering Audit
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-200 text-slate-800 dark:border-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850 font-bold text-[11px] uppercase tracking-wider h-12 flex items-center justify-center gap-2 bg-transparent rounded-none w-full"
              >
                <PhoneCall className="w-4 h-4 stroke-[1.8px]" />
                Talk to a Specialist
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
