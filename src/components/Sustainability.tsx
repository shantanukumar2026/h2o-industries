"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplet, Recycle, Wind, TreePine } from "lucide-react";

export default function Sustainability() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const initiatives = [
    { icon: Droplet, title: "Water Conservation", value: "100%", desc: "Closed-loop water cooling systems in our manufacturing facilities." },
    { icon: Recycle, title: "Material Recovery", value: "85%", desc: "Of all manufacturing polymer by-products are reclaimed and re-processed." },
    { icon: Wind, title: "Emission Reduction", value: "Zero", desc: "VOC emissions across all our primary injection moulding lines." },
    { icon: TreePine, title: "Green Packaging", value: "100%", desc: "Biodegradable or fully recyclable transport packaging." },
  ];

  return (
    <section 
      id="sustainability" 
      style={{ 
        background: "#020B14", 
        padding: "120px 0",
        position: "relative"
      }}
    >
      <div style={{ maxWidth: 1720, margin: "0 auto", padding: "0 60px" }}>
        
        <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 80 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(33, 150, 243, 0.15)", border: "1px solid rgba(33, 150, 243, 0.3)", padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ color: "#42A5F5", fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Environmental Responsibility
              </span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase" }}>
              MANUFACTURING <span style={{ color: "#2196F3" }}>TOMORROW</span>
            </h2>
            <p style={{ color: "#90CAF9", fontSize: 16, maxWidth: 680, margin: "0 auto", lineHeight: 1.6 }}>
              We build infrastructure to manage the world&apos;s most vital resource. That responsibility extends to how we manufacture our products — prioritizing energy efficiency, waste reduction, and sustainable polymers.
            </p>
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderTop: "4px solid #2196F3",
                padding: "40px 32px",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <div style={{ width: 56, height: 56, background: "rgba(33, 150, 243, 0.1)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <item.icon size={28} color="#42A5F5" />
                </div>
                <div style={{ color: "#fff", fontSize: 48, fontWeight: 900, fontStyle: "italic", lineHeight: 1, opacity: 0.2 }}>
                  {item.value}
                </div>
              </div>
              
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 12, textTransform: "uppercase" }}>{item.title}</h3>
              <p style={{ color: "#90CAF9", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
