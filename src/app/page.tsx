"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import TechnologyInnovation from "@/components/TechnologyInnovation";
import ResearchDevelopment from "@/components/ResearchDevelopment";
import ManufacturingCapabilities from "@/components/ManufacturingCapabilities";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import InfrastructureFacilities from "@/components/InfrastructureFacilities";
import CurbBoxFeature from "@/components/CurbBoxFeature";
import Products from "@/components/Products";
import QualityCompliance from "@/components/QualityCompliance";
import TechnicalStandards from "@/components/TechnicalStandards";
import Industries from "@/components/Industries";
import GlobalSupplyNetwork from "@/components/GlobalSupplyNetwork";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* 1. Introduction: Who we are */}
      <Hero />
      <About />
      
      {/* 2. Innovation: The problems we solve and how we approach them */}
      <Solutions />
      <TechnologyInnovation />
      <ResearchDevelopment />
      
      {/* 3. The Engine: Our facilities and how we build */}
      <InfrastructureFacilities />
      <ManufacturingCapabilities />
      <ManufacturingProcess />
      
      {/* 4. The Output: What we actually produce */}
      <CurbBoxFeature />
      <Products />
      
      {/* 5. The Proof: Quality standards and real-world usage */}
      <QualityCompliance />
      <TechnicalStandards />
      <Industries />
      
      {/* 6. The Scale & Future: Global reach and commitment */}
      <GlobalSupplyNetwork />
      <Sustainability />
      
      <Footer />
    </main>
  );
}
