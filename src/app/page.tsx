"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurbBoxFeature from "@/components/CurbBoxFeature";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import Projects from "@/components/Projects";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CurbBoxFeature />
      <About />
      <Solutions />
      <Products />
      <ManufacturingProcess />
      <Projects />
      <Industries />
      <Footer />
    </main>
  );
}

