"use client";

import { Container } from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Globe, Users, Cpu } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Hero() {
  return (
    <section className="relative min-h-[82vh] flex items-center pt-8 pb-12 overflow-hidden bg-transparent">
      {/* Blueprint Grid Layout & Soft Backlight Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[0%] right-[-10%] w-[65%] h-[75%] bg-gradient-to-br from-[#00BBFF]/10 via-[#1B79EE]/5 to-transparent rounded-full blur-3xl opacity-90" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[45%] h-[55%] bg-gradient-to-tr from-[#004aeb]/5 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (60%) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Square Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#1B79EE]/10 border border-[#1B79EE]/20 w-fit text-[#004aeb] dark:text-[#00BBFF]">
              <span className="w-1.5 h-1.5 bg-[#1B79EE]" />
              <span className="text-[10px] font-black tracking-wider uppercase">
                INNOVATION IN EVERY DROP
              </span>
            </div>

            {/* Headline */}
            <Typography variant="h1" className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white">
              Engineering Tomorrow’s <br />
              Water <span className="text-[#1B79EE]">Solutions</span>
            </Typography>

            {/* Paragraph Description */}
            <Typography variant="p" className="max-w-xl font-sans text-slate-600 dark:text-slate-350 text-[14.5px] md:text-[15.5px] font-medium leading-relaxed mt-1">
              H2O Industries delivers intelligent engineering, automation, and <br className="hidden md:block" />
              digital solutions that empower industries with smarter, <br className="hidden md:block" />
              more sustainable technologies.
            </Typography>

            {/* Buttons Row (Accenture Style: Link + Solid Square Box Arrow) */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-3.5 group cursor-pointer"
              >
                <span className="text-[12.5px] font-black uppercase tracking-widest text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  Explore Solutions
                </span>
                <div className="w-8 h-8 bg-[#1B79EE] group-hover:bg-[#004aeb] text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 stroke-[2.5px] transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3.5 group cursor-pointer"
              >
                <span className="text-[12.5px] font-black uppercase tracking-widest text-slate-900 dark:text-white group-hover:text-[#00BBFF] transition-colors">
                  Contact Us
                </span>
                <div className="w-8 h-8 bg-slate-900 group-hover:bg-slate-800 text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 stroke-[2.5px] transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-100 dark:border-slate-900 mt-6">
              {/* Stat 1 */}
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-none bg-transparent text-[#1B79EE] border border-slate-200/50 dark:border-slate-800/50">
                  <Factory className="w-5 h-5 stroke-[1.8px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-slate-900 dark:text-slate-150 leading-tight">25+</span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wide">Years Experience</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-none bg-transparent text-[#1B79EE] border border-slate-200/50 dark:border-slate-800/50">
                  <Cpu className="w-5 h-5 stroke-[1.8px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-slate-900 dark:text-slate-150 leading-tight">120+</span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wide">Projects Delivered</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-none bg-transparent text-[#1B79EE] border border-slate-200/50 dark:border-slate-800/50">
                  <Globe className="w-5 h-5 stroke-[1.8px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-slate-900 dark:text-slate-150 leading-tight">30+</span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wide">Countries Served</span>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-none bg-transparent text-[#1B79EE] border border-slate-200/50 dark:border-slate-800/50">
                  <Users className="w-5 h-5 stroke-[1.8px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-slate-900 dark:text-slate-150 leading-tight">98%</span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wide">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (40%) - Vector Graphics, Glass Cube & Isometric Plinth */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center h-[320px] sm:h-[400px] lg:h-[460px] select-none w-full mt-10 lg:mt-0">
            {/* Blueprint Background with Technical Labels */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.06] dark:opacity-[0.1] pointer-events-none">
              <svg width="420" height="380" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal Blueprint Lines */}
                <line x1="0" y1="50" x2="420" y2="50" stroke="#1B79EE" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="0" y1="120" x2="420" y2="120" stroke="#1B79EE" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="0" y1="200" x2="420" y2="200" stroke="#1B79EE" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="0" y1="280" x2="420" y2="280" stroke="#1B79EE" strokeWidth="0.5" strokeDasharray="3 3" />
                
                {/* Vertical Blueprint Lines */}
                <line x1="60" y1="0" x2="60" y2="380" stroke="#1B79EE" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="140" y1="0" x2="140" y2="380" stroke="#1B79EE" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="220" y1="0" x2="220" y2="380" stroke="#1B79EE" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="300" y1="0" x2="300" y2="380" stroke="#1B79EE" strokeWidth="0.5" strokeDasharray="3 3" />
                
                {/* Industrial Vessel Outlines */}
                <rect x="70" y="100" width="30" height="220" stroke="#1B79EE" strokeWidth="1.2" />
                <rect x="150" y="50" width="45" height="270" stroke="#1B79EE" strokeWidth="1.2" />
                <path d="M 150 50 C 150 20, 195 20, 195 50 Z" stroke="#1B79EE" strokeWidth="1.2" fill="none" />
                
                {/* Pipeline connection paths */}
                <path d="M 100 150 L 150 150 M 195 120 L 270 120 L 270 250 L 320 250" stroke="#1B79EE" strokeWidth="1.2" />
                <circle cx="270" cy="180" r="3" fill="#1B79EE" />

                {/* Technical Dimension Callouts / Labels */}
                <text x="72" y="90" fill="#1B79EE" fontSize="7" fontWeight="bold">TOWER T-09</text>
                <text x="145" y="42" fill="#1B79EE" fontSize="7" fontWeight="bold">REACT V-02</text>
                <text x="280" y="112" fill="#1B79EE" fontSize="7" fontWeight="bold">FLOW: 82.5 L/S</text>
                <text x="280" y="240" fill="#1B79EE" fontSize="7" fontWeight="bold">SYS-PRESSURE: OK</text>
                <line x1="280" y1="120" x2="250" y2="120" stroke="#1B79EE" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Floating Blueprint Square Nodes */}
            <div className="absolute top-[25%] left-[20%] w-1.5 h-1.5 bg-[#1B79EE]" />
            <div className="absolute bottom-[28%] right-[12%] w-1.5 h-1.5 bg-[#00BBFF]" />

            {/* Isometric 3D Square Plinth Pedestal Base */}
            <div className="absolute bottom-[10px] z-10 flex flex-col items-center transform scale-[0.75] sm:scale-100">
              <svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="plinthBaseGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1B79EE" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00BBFF" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Drop shadow polygon */}
                <polygon points="10,30 150,10 290,30 150,50" fill="black" fillOpacity="0.05" />

                {/* Lower Plinth Block */}
                <polygon points="15,25 150,8 285,25 150,42" fill="url(#plinthBaseGlow)" stroke="#e2e8f0" strokeWidth="1" />
                <polygon points="15,25 150,42 150,50 15,33" fill="#cbd5e1" className="dark:fill-[#1e293b]" stroke="#94a3b8" strokeWidth="0.5" />
                <polygon points="150,42 285,25 285,33 150,50" fill="#94a3b8" className="dark:fill-[#0f172a]" stroke="#64748b" strokeWidth="0.5" />

                {/* Upper Plinth Block (Smaller, with glowing Cyan border) */}
                <polygon points="45,21 150,8 255,21 150,34" fill="white" className="dark:fill-slate-900" stroke="#00BBFF" strokeWidth="1.5" />
                <polygon points="45,21 150,34 150,39 45,26" fill="#cbd5e1" className="dark:fill-[#1e293b]" stroke="#00BBFF" strokeWidth="0.5" />
                <polygon points="150,34 255,21 255,26 150,39" fill="#94a3b8" className="dark:fill-[#0f172a]" stroke="#00BBFF" strokeWidth="0.5" />
              </svg>
            </div>

            {/* The Glass Technology Cube (Directly playing looping corporate video) */}
            <div className="relative w-[190px] h-[190px] sm:w-[270px] sm:h-[270px] rounded-none border border-white/50 dark:border-slate-850/50 bg-gradient-to-tr from-white/12 via-white/4 to-white/22 backdrop-blur-md shadow-2xl z-20 -translate-y-6 rotate-[6deg] overflow-hidden group transform scale-[0.8] sm:scale-100">
              
              {/* HTML5 Looping Corporate Industrial Video */}
              <video 
                src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c02fba1d26d7c9a629b3c1b2c453303d&profile_id=139&oauth2_token_id=57447761"
                className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-40 mix-blend-overlay group-hover:opacity-65 transition-opacity duration-300 pointer-events-none"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Glass reflection overlays on top of video */}
              <div className="absolute top-[3%] left-[3%] right-[3%] h-[30%] bg-gradient-to-b from-white/20 to-transparent rounded-none pointer-events-none z-10" />
              <div className="absolute bottom-[3%] left-[3%] right-[3%] h-[20%] bg-gradient-to-t from-white/6 to-transparent rounded-none pointer-events-none z-10" />
              
              {/* Internal nested square borders */}
              <div className="absolute inset-[8px] rounded-none border border-white/6 dark:border-slate-800/10 bg-transparent pointer-events-none z-10" />
              <div className="absolute inset-[20px] rounded-none border border-[#004aeb]/5 dark:border-[#00BBFF]/5 bg-transparent pointer-events-none z-10" />

              {/* Centered Logo Card floating on top of the playing video, ensuring readability */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-white/85 dark:bg-slate-900/85 p-3.5 border border-white/50 dark:border-slate-800/50 shadow-md backdrop-blur-sm transform rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500 rounded-none">
                  <Logo size="sm" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
