"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const partnersList = [
  { file: "APWA.JPG", name: "APWA" },
  { file: "AWWA.JPG", name: "AWWA" },
  { file: "CMHA copy.JPG", name: "CMHA" },
  { file: "MassDOt.JPG", name: "MassDOT" },
  { file: "NEPCA.JPG", name: "NEPCA" },
  { file: "NHDOTlogo.JPG", name: "NHDOT" },
  { file: "NHE.jpg", name: "NHE" },
  { file: "NPCA-Logo.JPG", name: "NPCA" },
  { file: "NY-CMA.jpg", name: "NY-CMA" },
  { file: "Nassau+Logo copy.JPG", name: "Nassau" },
  { file: "PEI.JPG", name: "PEI" },
  { file: "PennDOT-Logo.png", name: "PennDOT" },
  { file: "RIDOT.jpg", name: "RIDOT" },
  { file: "aia copy.jpg", name: "AIA" },
  { file: "canada-ccppa.JPG", name: "Canada CCPPA" },
  { file: "ccmpa copy.jpg", name: "CCMPA" },
  { file: "conn copy.JPG", name: "Conn" },
  { file: "maine.JPG", name: "Maine" },
  { file: "nj copy.JPG", name: "NJ" },
  { file: "ny state copy.JPG", name: "NY State" },
  { file: "ny.JPG", name: "NY" },
  { file: "pcany.jpg", name: "PCANY" },
  { file: "penn copy.JPG", name: "Penn" },
  { file: "ppa.JPG", name: "PPA" },
  { file: "suffolk copy.JPG", name: "Suffolk" },
  { file: "vt copy.JPG", name: "VT" }
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate the list so the marquee scrolls seamlessly
  const marqueeItems = [...partnersList, ...partnersList];

  return (
    <section ref={ref} style={{ padding: "100px 0", background: "#050D1C", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(33,150,243,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span style={{ color: "#2196F3", fontSize: 14, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
              Global Network
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", fontStyle: "italic", lineHeight: 1.1 }}>
              Trusted <span style={{ color: "transparent", WebkitTextStroke: "2px #2196F3" }}>By</span><br/>
              Industry Leaders
            </h2>
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="marquee-container" style={{ position: "relative", width: "100%", overflow: "hidden", padding: "20px 0" }}>
          
          {/* Gradient Masks for smooth fade on edges */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "100px", background: "linear-gradient(to right, #050D1C, transparent)", zIndex: 10, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "100px", background: "linear-gradient(to left, #050D1C, transparent)", zIndex: 10, pointerEvents: "none" }} />

          <motion.div 
            className="marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40 // Adjust speed here
            }}
            style={{ display: "flex", gap: "60px", width: "max-content", alignItems: "center" }}
          >
            {marqueeItems.map((p, i) => (
              <div 
                key={i} 
                className="marquee-item"
                style={{ 
                  width: "160px", 
                  height: "100px", 
                  position: "relative", 
                  filter: "grayscale(100%) brightness(0.8)",
                  transition: "filter 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image 
                  src={`/partners/${p.file}`} 
                  alt={p.name} 
                  fill 
                  style={{ objectFit: "contain" }} 
                  unoptimized={true}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`
        .marquee-item:hover {
          filter: grayscale(0%) brightness(1) !important;
        }
      `}</style>
    </section>
  );
}
