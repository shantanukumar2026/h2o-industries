import { TopBar } from "@/components/sections/topbar";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustedCompanies } from "@/components/sections/trusted-companies";
import { SolutionsPreview } from "@/components/sections/solutions-preview";
import { EngineeringProcess } from "@/components/sections/engineering-process";
import { CTAStory } from "@/components/sections/cta-story";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 bg-blueprint bg-white dark:bg-slate-950">
        <Hero />
        <TrustedCompanies />
        <SolutionsPreview />
        {/* <EngineeringProcess /> */}
        {/* <CTAStory /> */}
      </main>
      <Footer />
    </>
  );
}
