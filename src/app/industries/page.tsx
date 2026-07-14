import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import GlobalSupplyNetwork from "@/components/GlobalSupplyNetwork";

export default function IndustriesPage() {
  return (
    <main style={{ paddingTop: 64, background: "#062347" }}>
      <Navbar />
      
      {/* Page Header */}
      <div style={{ padding: "120px 60px 80px", maxWidth: 1720, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(21, 101, 192, 0.3)", padding: "6px 16px", marginBottom: 24 }}>
          <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Sectors We Serve
          </span>
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", fontStyle: "italic", margin: 0 }}>
          GLOBAL <span style={{ color: "#2196F3" }}>INDUSTRIES</span>
        </h1>
      </div>

      <Industries />
      <GlobalSupplyNetwork />
      <Footer />
    </main>
  );
}
