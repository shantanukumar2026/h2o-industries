"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurbBoxFeature from "@/components/CurbBoxFeature";
import About from "@/components/About";
import ResearchDevelopment from "@/components/ResearchDevelopment";
import Solutions from "@/components/Solutions";
import TechnologyInnovation from "@/components/TechnologyInnovation";
import Products from "@/components/Products";
import ManufacturingCapabilities from "@/components/ManufacturingCapabilities";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import QualityCompliance from "@/components/QualityCompliance";
import TechnicalStandards from "@/components/TechnicalStandards";
import Projects from "@/components/Projects";
import InfrastructureFacilities from "@/components/InfrastructureFacilities";
import Industries from "@/components/Industries";
import GlobalSupplyNetwork from "@/components/GlobalSupplyNetwork";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CurbBoxFeature />
      <About />
      <ResearchDevelopment />
      <Solutions />
      <TechnologyInnovation />
      <Products />
      <ManufacturingCapabilities />
      <ManufacturingProcess />
      <QualityCompliance />
      <TechnicalStandards />
      <Projects />
      <InfrastructureFacilities />
      <Industries />
      <GlobalSupplyNetwork />
      <Sustainability />
      <Footer />
    </main>
  );
}

