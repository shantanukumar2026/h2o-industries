"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Info, Mail, MapPin, User, FileText, ChevronDown, Search, ArrowRight } from "lucide-react";

const topLinks = [
  { label: "About", href: "#about", icon: Info },
  { label: "Contact", href: "#contact", icon: Mail },
  { label: "Locations", href: "#contact", icon: MapPin },
  { label: "Account", href: "#", icon: User },
  { label: "Quote", href: "#contact", icon: FileText },
];

const mainLinks = [
  {
    label: "Products",
    href: "#products",
    mega: {
      image: "/images/2.jpeg",
      title: "INDUSTRIAL MANUFACTURING",
      desc: "Precision-engineered solutions for high-performance water management.",
      link: "View All Products",
      columns: [
        {
          title: "CORE SYSTEMS",
          items: ["Stormwater Stations", "Modular Enclosures", "Drainage Infrastructure", "Filtration Systems"],
        },
        {
          title: "ACCESSORIES & PARTS",
          items: ["Monitoring Probes", "Valve Connectors", "Heavy-Duty Grates", "Access Covers"],
        },
      ],
    },
  },
  {
    label: "Industries",
    href: "#industries",
    mega: {
      image: "/images/7.jpeg",
      title: "GLOBAL DEPLOYMENT",
      desc: "Protecting marine ecosystems across every major industrial sector.",
      link: "Explore Industries",
      columns: [
        {
          title: "PUBLIC & CIVIL",
          items: ["Municipal Water", "Civil Infrastructure", "Urban Development"],
        },
        {
          title: "SPECIALIZED SECTORS",
          items: ["Marine & Coastal", "Environmental Facilities", "Heavy Industry", "Agricultural"],
        },
      ],
    },
  },
  {
    label: "Solutions",
    href: "#solutions",
    mega: {
      image: "/images/5.jpeg",
      title: "END-TO-END ENGINEERING",
      desc: "From concept to deployment, we engineer success.",
      link: "Our Solutions",
      columns: [
        {
          title: "SERVICES",
          items: ["Turnkey Installations", "Custom Engineering", "Site Assessments", "Maintenance Programs"],
        },
      ],
    },
  },
  {
    label: "Projects",
    href: "#projects",
    mega: {
      image: "/images/3.jpeg",
      title: "PROVEN IMPACT",
      desc: "See how our infrastructure performs in the real world.",
      link: "View Case Studies",
      columns: [
        {
          title: "INSIGHTS",
          items: ["Recent Deployments", "Case Studies", "Global Impact Reports", "Technical Whitepapers"],
        },
      ],
    },
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (href: string) => {
    setMobileOpen(false);
    setActiveSubmenu(null);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#fff",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "0 2px 10px rgba(0,0,0,0.05)",
          transition: "box-shadow 0.3s ease",
        }}
        onMouseLeave={() => setActiveSubmenu(null)}
      >
        {/* Top Bar (Brand Color) */}
        <div style={{ background: "#1565C0" }}>
          <div
            style={{
              maxWidth: 1600,
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 64,
            }}
          >
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: 200,
                  height: 64,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="H2 Industries"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center", padding: "8px 20px" }}
                  priority
                  sizes="200px"
                />
              </div>
            </button>

            {/* Top Links (Desktop) */}
            <div className="top-links" style={{ display: "none", alignItems: "center", gap: 32 }}>
              {topLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.label}
                    onClick={() => nav(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 800,
                      fontFamily: "inherit",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  >
                    <Icon size={16} />
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                color: "#fff",
                display: "none",
              }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Bottom Bar (White) */}
        <div className="bottom-bar" style={{ display: "none", borderBottom: "1px solid #E2E8F0", position: "relative" }}>
          <div
            style={{
              maxWidth: 1600,
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 56,
            }}
          >
            {/* Main Links */}
            <nav style={{ display: "flex", alignItems: "center", gap: 40, height: "100%" }}>
              {mainLinks.map((link) => (
                <div
                  key={link.label}
                  style={{ height: "100%", display: "flex", alignItems: "center" }}
                  onMouseEnter={() => setActiveSubmenu(link.label)}
                >
                  <button
                    onClick={() => nav(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      color: activeSubmenu === link.label ? "#1565C0" : "#0B1929",
                      fontSize: 15,
                      fontWeight: 800,
                      fontFamily: "inherit",
                      textTransform: "uppercase",
                      transition: "color 0.2s",
                      height: "100%",
                      borderBottom: activeSubmenu === link.label ? "3px solid #1565C0" : "3px solid transparent",
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      color={activeSubmenu === link.label ? "#1565C0" : "#8898AA"}
                      style={{
                        transform: activeSubmenu === link.label ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    />
                  </button>
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div
              style={{
                position: "relative",
                width: 320,
              }}
            >
              <Search
                size={18}
                color="#8898AA"
                style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}
              />
              <input
                type="text"
                placeholder="Search resources..."
                style={{
                  width: "100%",
                  padding: "10px 16px 10px 44px",
                  background: "#F8FAFC",
                  border: "1px solid #CBD5E1",
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#0B1929",
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1565C0";
                  e.target.style.background = "#fff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#CBD5E1";
                  e.target.style.background = "#F8FAFC";
                }}
              />
            </div>
          </div>

          {/* MEGAMENU DROPDOWN */}
          <AnimatePresence>
            {activeSubmenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#fff",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  borderBottom: "1px solid #E2E8F0",
                  zIndex: 40,
                  overflow: "hidden",
                }}
              >
                {mainLinks.map(
                  (link) =>
                    activeSubmenu === link.label && (
                      <div key={link.label} style={{ maxWidth: 1600, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                        
                        {/* Megamenu Left: Featured Image Block */}
                        <div style={{ position: "relative", padding: "48px 60px", background: "#050B14", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                            <Image src={link.mega.image} alt={link.mega.title} fill style={{ objectFit: "cover", opacity: 0.3 }} />
                          </div>
                          <div style={{ position: "relative", zIndex: 1 }}>
                            <h3 style={{ fontSize: 24, fontWeight: 900, fontStyle: "italic", textTransform: "uppercase", marginBottom: 12 }}>
                              {link.mega.title}
                            </h3>
                            <p style={{ fontSize: 15, color: "#94A3B8", lineHeight: 1.6, marginBottom: 24, fontWeight: 500, maxWidth: 320 }}>
                              {link.mega.desc}
                            </p>
                            <button
                              onClick={() => nav(link.href)}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "#1565C0",
                                color: "#fff",
                                border: "none",
                                padding: "12px 24px",
                                fontSize: 13,
                                fontWeight: 800,
                                textTransform: "uppercase",
                                cursor: "pointer",
                                transition: "background 0.2s",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.background = "#0D47A1")}
                              onMouseLeave={(e) => (e.currentTarget.style.background = "#1565C0")}
                            >
                              {link.mega.link} <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Megamenu Right: Link Columns */}
                        <div style={{ padding: "48px 60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, background: "#F8FAFC" }}>
                          {link.mega.columns.map((col) => (
                            <div key={col.title}>
                              <h4 style={{ fontSize: 14, fontWeight: 900, fontStyle: "italic", color: "#0B1929", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid #E2E8F0" }}>
                                {col.title}
                              </h4>
                              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                                {col.items.map((item) => (
                                  <li key={item}>
                                    <button
                                      onClick={() => nav(link.href)}
                                      style={{
                                        background: "none",
                                        border: "none",
                                        padding: 0,
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: "#475569",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        transition: "color 0.2s",
                                      }}
                                      onMouseEnter={(e) => (e.currentTarget.style.color = "#1565C0")}
                                      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                                    >
                                      {item}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                      </div>
                    )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 64, // below top bar
              left: 0,
              right: 0,
              background: "#fff",
              zIndex: 49,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              borderBottom: "1px solid #E2E8F0",
              maxHeight: "calc(100vh - 64px)",
              overflowY: "auto",
            }}
          >
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
              {/* Mobile Search */}
              <div style={{ position: "relative", marginBottom: 16 }}>
                <Search
                  size={18}
                  color="#8898AA"
                  style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    width: "100%",
                    padding: "12px 12px 12px 40px",
                    background: "#F1F5F9",
                    border: "1px solid #CBD5E1",
                    borderRadius: 4,
                    fontSize: 15,
                    fontFamily: "inherit",
                    outline: "none",
                  }}
                />
              </div>

              {/* Mobile Main Links */}
              <div style={{ borderBottom: "1px solid #E2E8F0", paddingBottom: 16, marginBottom: 16 }}>
                {mainLinks.map((link) => (
                  <div key={link.label} style={{ marginBottom: 12 }}>
                    <button
                      onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "none",
                        border: "none",
                        padding: "8px 0",
                        fontSize: 16,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        color: "#0B1929",
                        fontFamily: "inherit",
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        style={{
                          transform: activeSubmenu === link.label ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s",
                        }}
                      />
                    </button>
                    <AnimatePresence>
                      {activeSubmenu === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: 16, marginTop: 12 }}
                        >
                          {link.mega.columns.map((col) => (
                            <div key={col.title}>
                              <h5 style={{ fontSize: 12, fontWeight: 800, color: "#94A3B8", marginBottom: 8, letterSpacing: "0.05em" }}>
                                {col.title}
                              </h5>
                              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                {col.items.map((item) => (
                                  <button
                                    key={item}
                                    onClick={() => nav(link.href)}
                                    style={{
                                      textAlign: "left",
                                      background: "none",
                                      border: "none",
                                      padding: "8px 16px",
                                      fontSize: 14,
                                      fontWeight: 600,
                                      color: "#475569",
                                      fontFamily: "inherit",
                                    }}
                                  >
                                    {item}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Top Links */}
              <div>
                {topLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.label}
                      onClick={() => nav(link.href)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        padding: "10px 0",
                        fontSize: 14,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "#475569",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        fontFamily: "inherit",
                      }}
                    >
                      <Icon size={18} />
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .top-links { display: flex !important; }
          .bottom-bar { display: block !important; }
        }
        @media (max-width: 1023px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
