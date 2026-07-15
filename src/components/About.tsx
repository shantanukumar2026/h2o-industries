"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const portfolioItems = [
  {
    title: "DEDICATED TO SAVING OUR OCEANS",
    subtitle: "THROUGH ENGINEERING",
    desc: "H2 Industries was founded with a single unwavering mission: to develop industrial water management products that actively reduce environmental harm.",
    points: ["Actively reduces environmental harm", "Industrial-grade water management"],
    video: "/portfolio/1.mp4",
    theme: "dark"
  },
  {
    title: "PRECISION ENGINEERING",
    subtitle: "FOR THE TOUGHEST ENVIRONMENTS",
    desc: "Every product is precision-engineered to meet the most demanding industrial and environmental standards.",
    points: ["Engineered for absolute reliability", "Meets demanding environmental standards"],
    video: "/portfolio/2.mp4",
    theme: "light"
  },
  {
    title: "MODULAR ENCLOSURES",
    subtitle: "BUILT TO LAST",
    desc: "We design for compatibility with emerging hydrogen and clean-energy projects, and for long-term protection of waterways.",
    points: ["Long-term waterway protection", "Compatible with clean-energy projects"],
    video: "/portfolio/3.mp4",
    theme: "dark"
  },
  {
    title: "SUSTAINABLE IMPACT",
    subtitle: "GLOBAL REACH",
    desc: "We engineer products that reduce pollutant entry into stormwater systems, contributing to a cleaner, healthier planet.",
    points: ["Reduces pollutant entry into stormwater", "Contributes to a cleaner, healthier planet"],
    video: "/portfolio/4.mp4",
    theme: "light"
  }
];

export default function About() {
  return (
    <div id="about" style={{ width: "100%" }}>
      {portfolioItems.map((item, index) => (
        <PortfolioSection key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function PortfolioSection({ item, index }: { item: any; index: number }) {
  const ref = useRef(null);
  const isDark = item.theme === "dark";
  const bgColor = isDark ? "#062347" : "#ffffff";
  const textColor = isDark ? "#FFFFFF" : "#0D3A73";
  const accentColor = isDark ? "#2196F3" : "#1565C0";
  const descColor = isDark ? "#90CAF9" : "#1976D2";

  return (
    <section 
      ref={ref}
      style={{ 
        height: "100vh", 
        width: "100%", 
        background: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div 
        style={{ 
          maxWidth: 1720, 
          width: "100%", 
          margin: "0 auto", 
          padding: "0 60px",
          display: "grid",
          gridTemplateColumns: index % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
          gap: 60,
          alignItems: "center",
          height: "100%"
        }}
        className="portfolio-grid"
      >
        {/* Content Side */}
        <div style={{ order: index % 2 === 0 ? 1 : 2 }} className="portfolio-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: isDark ? "rgba(33, 150, 243, 0.1)" : "rgba(21, 101, 192, 0.1)", padding: "6px 16px", marginBottom: 24 }}>
              <div style={{ width: 12, height: 2, background: accentColor }} />
              <span style={{ color: accentColor, fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {item.subtitle}
              </span>
            </div>

            <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900, color: textColor, lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase", fontStyle: "italic", letterSpacing: "0.02em" }}>
              {item.title}
            </h2>

            <div style={{ width: 80, height: 4, background: accentColor, marginBottom: 32 }} />

            <p style={{ color: descColor, fontSize: 18, lineHeight: 1.8, fontWeight: 500, maxWidth: 600 }}>
              {item.desc}
            </p>

            {item.points && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
                {item.points.map((point: string, i: number) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <CheckCircle2 size={20} color={accentColor} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: descColor, fontSize: 16, lineHeight: 1.6, fontWeight: 600 }}>{point}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Media Side */}
        <div style={{ order: index % 2 === 0 ? 2 : 1, position: "relative", height: "70vh", width: "100%" }} className="portfolio-media">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              width: "100%", 
              height: "100%", 
              position: "relative",
              background: isDark ? "#062347" : "#ffffff",
              border: `8px solid ${isDark ? "rgba(255,255,255,0.02)" : "#062347"}`,
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              overflow: "hidden"
            }}
          >
            <video 
              src={item.video} 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "contain", mixBlendMode: isDark ? "lighten" : "multiply", filter: isDark ? "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" : "none" }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            padding: 80px 30px 60px 30px !important;
            gap: 40px !important;
          }
          .portfolio-content { order: 1 !important; }
          .portfolio-media { order: 2 !important; height: 40vh !important; }
        }
      `}</style>
    </section>
  );
}
