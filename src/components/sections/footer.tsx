"use client";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/ui/logo";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { 
  Building2, 
  Shield, 
  LineChart, 
  Package, 
  Wrench, 
  Headphones, 
  Send, 
  Check, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

// Inline SVG components for social media to avoid lucide-react version compatibility issues
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const partners = [
    { name: "PEGI", src: "/partner-1.png", title: "PEGI", desc: "Engineered Solutions" },
    { name: "Precast Engineering", src: "/partner-2.png", title: "Precast Engineering", desc: "Precast Excellence" },
    { name: "Precast Xchange", src: "/partner-3.png", title: "Precast Xchange", desc: "Global Marketplace" },
    { name: "Total Tech Engineering", src: "/partner-4.png", title: "Total Tech Engineering", desc: "Tech-Driven Solutions" },
    { name: "Trident Inlets", src: "/partner-5.png", title: "Trident Inlets", desc: "Precision & Performance" }
  ];

  const columns = [
    {
      title: "CORPORATE",
      icon: Building2,
      links: [
        "About Us",
        "Our Foundation",
        "Mission & Vision",
        "Leadership",
        "Awards & Achievements",
        "News & Media",
        "Careers",
        "Investor Relations",
        "Corporate Social Responsibility"
      ]
    },
    {
      title: "POLICIES",
      icon: Shield,
      links: [
        "Warranties",
        "Return Policy",
        "Product Liability",
        "Promotions",
        "Confidentiality",
        "Sustainability",
        "Terms & Conditions",
        "Privacy Policy",
        "Patents"
      ]
    },
    {
      title: "SALES",
      icon: LineChart,
      links: [
        "Pricing",
        "Exports",
        "Videos",
        "Trade Shows",
        "Sales Team",
        "Library",
        "Locations",
        "Ongoing Projects",
        "Request a Quote"
      ]
    },
    {
      title: "PRODUCTS",
      icon: Package,
      links: [
        "Behiye Grates",
        "Catch Basin Traps",
        "Cleanouts",
        "Curb Boxes",
        "Curb Inlets",
        "Frames & Covers",
        "Manhole Covers",
        "Trench Grates",
        "Valve Boxes",
        "Water Works Products"
      ]
    },
    {
      title: "ENGINEERING",
      icon: Wrench,
      links: [
        "Submittals",
        "Data Sheets",
        "Engineers & Architects",
        "Customization",
        "Design Team",
        "Certificates",
        "Specifications",
        "Standards",
        "Design & Innovations"
      ]
    },
    {
      title: "SUPPORT & SERVICES",
      icon: Headphones,
      links: [
        "Technical Support",
        "Customer Support",
        "Engineering Consultancy",
        "After Sales Services",
        "Installation Support",
        "Custom Support",
        "Live Solution",
        "Quality Control Process",
        "Approval & Certification"
      ]
    }
  ];

  return (
    <footer className="bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200/60 dark:border-slate-900 pt-16 pb-8 relative z-20">
      <Container>
        
        {/* Row 1: Brand Info & Partner Cards & Follow Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200/60 dark:border-slate-800/60">
          
          {/* Brand info (3 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Logo size="sm" />
              <span className="text-[10px] font-black text-[#1B79EE] tracking-widest uppercase pl-0.5">
                INNOVATION IN EVERY DROP
              </span>
            </div>
            <Typography variant="p" className="text-slate-500 dark:text-slate-400 text-[12px] leading-relaxed max-w-sm mt-1 font-sans">
              H2O Industries delivers intelligent engineering, automation, and digital solutions with smarter, more sustainable technologies.
            </Typography>
            <a
              href="#"
              className="inline-flex items-center justify-between border border-blue-600 hover:bg-blue-600/5 text-blue-600 dark:text-blue-400 dark:border-blue-400 text-[11px] font-black uppercase tracking-wider py-2.5 px-5 transition-all w-fit rounded-none mt-2"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2.5" />
            </a>
          </div>

          {/* Partner Cards Grid (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Header with dots */}
            <div className="relative flex items-center justify-center mb-2">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200/80 dark:border-slate-800/80"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest bg-slate-50 dark:bg-slate-950 px-4 text-slate-400 dark:text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] inline-block mr-2 align-middle self-center"></span>
                Our Group Dedicated to H2O Industries
                <span className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] inline-block ml-2 align-middle self-center"></span>
              </div>
            </div>

            {/* 5 Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {partners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-3 flex flex-col items-center justify-between text-center min-h-[140px] rounded-none hover:shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                >
                  <div className="relative w-full h-[32px] flex items-center justify-center mt-1">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 mt-3 w-full">
                    <span className="text-[10px] font-black text-slate-800 dark:text-slate-200 uppercase truncate">
                      {partner.title}
                    </span>
                    <span className="text-[8px] font-semibold text-slate-400 dark:text-slate-500 tracking-tight leading-tight block">
                      {partner.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us & Wave Background (2 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-4 items-center lg:items-start relative min-h-[120px] justify-center lg:justify-start">
            {/* Soft ripple graphic bg simulation */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-40 dark:opacity-20 w-32 h-32 bg-[radial-gradient(circle,rgba(27,121,238,0.15)_0%,transparent_70%)] rounded-full" />
            
            <span className="text-[11px] font-black text-[#1B79EE] tracking-widest uppercase">
              FOLLOW US
            </span>
            <div className="flex items-center gap-2.5 relative z-10">
              {[
                { icon: FacebookIcon, href: "#" },
                { icon: TwitterIcon, href: "#" },
                { icon: YoutubeIcon, href: "#" },
                { icon: InstagramIcon, href: "#" },
                { icon: LinkedinIcon, href: "#" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-[#1B79EE] hover:border-[#1B79EE] transition-colors shadow-sm"
                >
                  <item.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Row 2: 6-Column Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12 border-b border-slate-200/60 dark:border-slate-800/60">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                <column.icon className="w-4 h-4 text-[#1B79EE] stroke-[1.8px]" />
                <span className="text-[11px] font-black tracking-wider uppercase">
                  {column.title}
                </span>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group flex items-start text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-[#1B79EE] transition-colors leading-tight"
                    >
                      <ChevronRight className="w-3 h-3 text-[#1B79EE] shrink-0 mr-1.5 opacity-60 group-hover:opacity-100 transition-opacity self-center" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Row 3: Bottom Bar with Stats and Newsletter */}
        <div className="py-8 border-b border-slate-200/60 dark:border-slate-800/60 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Trust callout */}
          <div className="flex items-center gap-3.5 max-w-sm">
            <div className="w-9 h-9 rounded-full bg-[#1B79EE] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Check className="w-5 h-5 stroke-[2.8px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-black text-slate-800 dark:text-slate-200 uppercase leading-none">
                TRUSTED. CERTIFIED. COMMITTED.
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold leading-normal mt-0.5">
                Delivering excellence with quality you can rely on.
              </span>
            </div>
          </div>

          {/* Horizontal Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 flex-1 max-w-2xl px-4">
            {[
              { num: "25+", label: "Years of Excellence" },
              { num: "30+", label: "Countries Served" },
              { num: "120+", label: "Projects Delivered" },
              { num: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex flex-col text-center lg:text-left">
                  <span className="text-sm font-black text-slate-800 dark:text-slate-200 leading-none">
                    {stat.num}
                  </span>
                  <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 tracking-wide mt-0.5 whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
                {index !== 3 && (
                  <div className="hidden sm:block h-6 w-px bg-slate-200 dark:bg-slate-800 ml-4 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Newsletter Input */}
          <div className="flex flex-col gap-2 w-full lg:w-fit shrink-0">
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-[#1B79EE] tracking-widest uppercase">
                STAY UPDATED
              </span>
              <span className="text-[11px] font-black text-slate-800 dark:text-slate-200">
                Subscribe to our newsletter
              </span>
            </div>
            <form 
              className="flex items-center w-full sm:max-w-xs border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-none overflow-hidden" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-[11px] font-semibold bg-transparent placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-slate-200 focus:outline-none"
              />
              <button 
                type="submit" 
                className="w-9 h-9 bg-[#1B79EE] hover:bg-[#004aeb] text-white flex items-center justify-center transition-colors shrink-0 rounded-none"
              >
                <Send className="w-3.5 h-3.5 stroke-[2px]" />
              </button>
            </form>
          </div>

        </div>

        {/* Row 4: Copyright & Legal */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">
            &copy; {currentYear} H2O Industries. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((item, index) => (
              <div key={item} className="flex items-center">
                <a
                  href="#"
                  className="text-[10px] font-bold text-slate-400 dark:text-slate-500 hover:text-[#1B79EE] transition-colors"
                >
                  {item}
                </a>
                {index !== 2 && (
                  <span className="text-slate-200 dark:text-slate-800 mx-3 text-[10px] select-none">|</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </Container>
    </footer>
  );
}
