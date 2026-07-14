import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QualityCompliance from "@/components/QualityCompliance";
import TechnicalStandards from "@/components/TechnicalStandards";
import Sustainability from "@/components/Sustainability";

export default function QualityPage() {
  return (
    <main style={{ paddingTop: 64, background: "#062347" }}>
      <Navbar />
      
      {/* Page Header */}
      <div style={{ padding: "120px 60px 80px", maxWidth: 1720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(21, 101, 192, 0.3)", padding: "6px 16px", marginBottom: 24 }}>
          <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Zero Compromise
          </span>
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
          QUALITY & <span style={{ color: "#2196F3" }}>COMPLIANCE</span>
        </h1>
      </div>

      <QualityCompliance />
      <TechnicalStandards />
      <Sustainability />
      <Footer />
    </main>
  );
}
