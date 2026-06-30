"use client";

import { Container } from "@/components/layout/container";

export function TrustedCompanies() {
  return (
    <section className="py-6 bg-transparent relative z-20">
      <Container>
        {/* White Rounded Container Matching Reference */}
        <div className="bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Label */}
          <div className="text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest whitespace-nowrap lg:border-r lg:border-slate-150 lg:dark:border-slate-800 lg:pr-8">
            TRUSTED BY INDUSTRY LEADERS
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 md:gap-12 flex-1 lg:pl-4">
            {/* Siemens */}
            <svg width="90" height="24" viewBox="0 0 90 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#007982] hover:opacity-80 transition-opacity">
              <text x="0" y="18" fill="currentColor" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 900, fontSize: "16px", letterSpacing: "-0.05em" }}>SIEMENS</text>
            </svg>

            {/* Schneider Electric */}
            <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3dcd58] hover:opacity-80 transition-opacity">
              {/* Green leaf/flower symbol */}
              <path d="M6 4 C10 4, 12 8, 12 12 C8 12, 4 10, 4 6 Z" fill="currentColor" />
              <path d="M12 12 C12 8, 16 6, 20 6 C20 10, 18 12, 14 12 Z" fill="currentColor" />
              <path d="M12 12 C8 12, 6 16, 6 20 C10 20, 12 18, 12 14 Z" fill="currentColor" />
              <path d="M14 12 C14 16, 18 18, 18 14 C14 14, 14 12, 14 12 Z" fill="currentColor" />
              <text x="24" y="17" fill="currentColor" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 800, fontSize: "11px" }}>Schneider</text>
              <text x="76" y="17" fill="#555" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 400, fontSize: "11px" }}>Electric</text>
            </svg>

            {/* Honeywell */}
            <svg width="90" height="24" viewBox="0 0 90 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#de1f26] hover:opacity-80 transition-opacity">
              <text x="0" y="18" fill="currentColor" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 900, fontSize: "15px", letterSpacing: "-0.02em" }}>Honeywell</text>
            </svg>

            {/* ABB */}
            <svg width="50" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ff0000] hover:opacity-80 transition-opacity">
              <text x="0" y="18" fill="currentColor" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 950, fontSize: "20px", letterSpacing: "-0.05em" }}>ABB</text>
            </svg>

            {/* Veolia */}
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#e2001a] hover:opacity-80 transition-opacity">
              <path d="M4 6 L12 18 L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <text x="24" y="17" fill="currentColor" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 900, fontSize: "13px", letterSpacing: "0.05em" }}>VEOLIA</text>
            </svg>

            {/* DuPont */}
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#da291c] hover:opacity-80 transition-opacity">
              <ellipse cx="40" cy="12" rx="38" ry="10" stroke="currentColor" strokeWidth="2.5" />
              <text x="14" y="16" fill="currentColor" style={{ fontFamily: "var(--font-sans), sans-serif", fontWeight: 900, fontSize: "11px", letterSpacing: "0.02em" }}>DUPONT</text>
            </svg>
          </div>

        </div>
      </Container>
    </section>
  );
}
