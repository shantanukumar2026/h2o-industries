"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Activity, ShieldCheck } from "lucide-react";

const technologies = [
  { icon: Cpu, title: "Automation Core", desc: "Robotics-assisted fabrication lines minimizing human error and maximizing output consistency." },
  { icon: Zap, title: "Precision Engineering", desc: "Tolerance controls down to the micron ensuring seamless assembly of multi-part drainage structures." },
  { icon: Activity, title: "Smart Diagnostics", desc: "Integrated telemetry options for real-time flow rate monitoring and leak detection." },
  { icon: ShieldCheck, title: "Resilience Testing", desc: "Automated hydrostatic pressure testing applied to every batch before dispatch." }
];

export default function TechnologyInnovation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      id="technology" 
      style={{ 
        background: "linear-gradient(135deg, #050d1c 0%, #0a192f 100%)",
        padding: "120px 0",
        position: "relative"
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        
        <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 80 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(33, 150, 243, 0.1)", border: "1px solid rgba(33, 150, 243, 0.3)", padding: "6px 16px", marginBottom: 24 }}>
              <Zap size={14} color="#42A5F5" />
              <span style={{ color: "#90CAF9", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Next-Gen Manufacturing
              </span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase", fontStyle: "italic" }}>
              TECHNOLOGY & <span style={{ color: "#1E88E5" }}>INNOVATION</span>
            </h2>
            <p style={{ color: "#90CAF9", fontSize: 16, maxWidth: 680, margin: "0 auto", lineHeight: 1.6 }}>
              Pushing the boundaries of industrial production. We leverage advanced automation, AI-driven quality control, and precision tooling to deliver unmatched reliability at scale.
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                padding: "40px",
                borderRadius: "16px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(33, 150, 243, 0.1)";
                e.currentTarget.style.borderColor = "rgba(33, 150, 243, 0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Decorative top-right accent */}
              <div style={{ position: "absolute", top: 0, right: 0, width: 60, height: 60, background: "linear-gradient(135deg, transparent 50%, rgba(33, 150, 243, 0.2) 50%)" }} />
              
              <div style={{ width: 64, height: 64, background: "#0D274D", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, border: "1px solid rgba(33, 150, 243, 0.3)" }}>
                <tech.icon size={28} color="#42A5F5" />
              </div>
              
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 12, textTransform: "uppercase" }}>{tech.title}</h3>
              <p style={{ color: "#90CAF9", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
