"use client";

import { useState, useEffect, useRef } from "react";
import { navigation, MegaColumn } from "@/config/navigation";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Inline SVG components for social media to avoid version compatibility issues
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

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeParent, setActiveParent] = useState<string | null>(null);

  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body Scroll Lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // ESC key listener to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Accessible Focus Trap inside Mobile Drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const focusableElements = drawerRef.current?.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusableElements || focusableElements.length === 0) return;
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };
    window.addEventListener('keydown', handleTab);
    return () => window.removeEventListener('keydown', handleTab);
  }, [mobileMenuOpen]);

  // Reset secondary active parent state on close
  const handleCloseDrawer = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      setActiveParent(null);
    }, 250); // reset after animation finishes
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full bg-white border-b border-slate-100 dark:bg-slate-950 dark:border-slate-900",
        isScrolled ? "backdrop-blur-md bg-white/90 dark:bg-slate-950/90 shadow-sm" : ""
      )}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <Container>
        <div className="flex h-20 items-center justify-between relative">
          {/* Logo at the start (left) - Hidden on Mobile */}
          <Logo size="sm" className="hidden xl:flex !items-start" />

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden xl:flex items-center gap-2 h-full">
            {navigation.navbarLeft.map((item) => {
              const hasDropdown = ["SOLUTIONS", "INFRASTRUCTURE", "MARINE", "RESOURCES"].includes(item.title);
              const isOpen = activeDropdown === item.title;
              
              return (
                <div
                  key={item.title}
                  className={cn(
                    "flex items-center gap-1 group cursor-pointer h-full px-4 transition-colors",
                    isOpen ? "bg-slate-50 dark:bg-slate-900" : "hover:bg-slate-50/50 dark:hover:bg-slate-900/50"
                  )}
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.title)}
                >
                  <a
                    href={item.href}
                    className="text-[13px] font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors py-8 tracking-wider font-sans"
                  >
                    {item.title}
                  </a>
                  {hasDropdown && (
                    isOpen ? (
                      <ChevronUp className="w-3.5 h-3.5 text-primary" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-transform duration-200" />
                    )
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Side Links & CTA Actions */}
          <div className="hidden xl:flex items-center gap-6 xl:gap-8 h-full">
            {navigation.navbarRight.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-[13px] font-extrabold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors tracking-wider font-sans"
              >
                {item.title}
              </a>
            ))}

            <Button
              variant="default"
              className="bg-[#004aeb] hover:bg-[#0038cb] text-white font-bold text-xs py-3 px-7 rounded-none shadow-sm transition-all duration-200 uppercase tracking-wider h-11"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle & Single Header Logo */}
          <div className="xl:hidden flex items-center justify-between w-full">
            <Logo size="sm" className="!items-start" />
            <button
              className="p-2 text-slate-800 dark:text-slate-200 cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Full-Width Mega Menu Dropdown Panel (Polished Glassmorphism) */}
      <AnimatePresence>
        {activeDropdown && (
          <>
            {/* Darkened backdrop overlay behind mega menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveDropdown(null)}
              className="fixed inset-x-0 bottom-0 top-[116px] bg-slate-950/25 backdrop-blur-[2px] z-40 cursor-pointer hidden lg:block"
            />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 w-full bg-white/98 dark:bg-slate-900/98 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xl z-50"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
            >
              <div className="max-w-7xl mx-auto px-6 py-12 relative">
                {/* Circled X Close Button */}
                <button 
                  onClick={() => setActiveDropdown(null)} 
                  className="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors cursor-pointer"
                >
                  <XCircle className="w-6 h-6 stroke-[1.8px]" />
                </button>

                {/* 4-Column Grid Layout with Divider Borders */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {(navigation.megaMenu as Record<string, MegaColumn[]>)[activeDropdown]?.map((column: MegaColumn, colIndex: number) => (
                    <div 
                      key={colIndex} 
                      className={cn(
                        "flex flex-col gap-4 pr-4",
                        colIndex !== 3 ? "border-r border-slate-200/40 dark:border-slate-800/40" : ""
                      )}
                    >
                      {/* Category Title Header */}
                      <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-widest block mb-1 uppercase font-sans">
                        {column.category}
                      </span>
                      
                      {/* Column Links with Hover translation shifts */}
                      <div className="flex flex-col gap-3 font-sans">
                        {column.links.map((linkText: string) => (
                          <a
                            key={linkText}
                            href="#"
                            className="text-[13px] font-bold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-white hover:translate-x-1 transition-all duration-200 w-fit"
                          >
                            {linkText}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Redesigned Full-Screen Mobile Navigation Slide-In Drawer with High Contrast Borders */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimmer Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDrawer}
              className="fixed inset-0 bg-slate-950/30 backdrop-blur-[2px] z-55 xl:hidden"
            />

            {/* Slide-In Drawer Panel */}
            <motion.div
              ref={drawerRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
              className="fixed inset-y-0 left-0 w-full sm:max-w-md bg-white dark:bg-slate-950 z-60 xl:hidden flex flex-col shadow-2xl overflow-hidden"
              role="dialog"
              aria-modal="true"
            >
              {/* Drawer Header (Separated by a dark border) */}
              <div className="flex h-20 items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
                <Logo size="sm" className="!items-start" />
                <button
                  onClick={handleCloseDrawer}
                  className="p-2 text-slate-800 dark:text-slate-200 hover:text-primary transition-colors cursor-pointer"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6 stroke-[2px]" />
                </button>
              </div>

              {/* Sliding Content Container */}
              <div className="flex-1 overflow-hidden relative">
                <div 
                  className="flex w-[200%] h-full transition-transform duration-300 ease-in-out"
                  style={{ transform: activeParent ? 'translateX(-50%)' : 'translateX(0%)' }}
                >
                  
                  {/* Panel 1: Main Menu Options */}
                  <div className="w-[50%] h-full overflow-hidden flex flex-col justify-between bg-white dark:bg-slate-950">
                    <nav className="flex flex-col px-6 py-4 overflow-y-auto">
                      {navigation.navbarLeft.map((item) => {
                        const children = (navigation.megaMenu as Record<string, MegaColumn[]>)[item.title];
                        const hasChildren = !!children && children.length > 0;

                        return (
                          <div
                            key={item.title}
                            onClick={() => hasChildren ? setActiveParent(item.title) : handleCloseDrawer()}
                            className="h-[60px] min-h-[60px] flex items-center justify-between cursor-pointer border-b border-slate-200 dark:border-slate-800 group"
                          >
                            <span className="font-sans text-[20px] font-semibold text-slate-800 dark:text-slate-150 tracking-tight transition-colors group-hover:text-primary">
                              {item.title}
                            </span>
                            {hasChildren && (
                              <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 group-hover:text-primary transition-colors" />
                            )}
                          </div>
                        );
                      })}
                    </nav>

                    {/* Bottom Area (High-contrast Slate background, separated by dark border) */}
                    <div className="flex flex-col gap-5 p-6 mt-auto shrink-0 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
                      {/* Portal Login Link */}
                      {navigation.navbarRight.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={handleCloseDrawer}
                          className="text-[14px] font-extrabold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors tracking-widest uppercase font-sans py-1 block w-fit"
                        >
                          {item.title}
                        </a>
                      ))}

                      {/* Get Started Button */}
                      <Button 
                        className="w-full bg-[#1B79EE] hover:bg-[#004aeb] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-none shadow-sm h-12 flex items-center justify-center shrink-0"
                        onClick={handleCloseDrawer}
                      >
                        Get Started
                      </Button>

                      {/* Social icons row */}
                      <div className="flex items-center gap-3 justify-center sm:justify-start">
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
                            className="w-8.5 h-8.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-[#1B79EE] hover:border-[#1B79EE] transition-colors"
                          >
                            <item.icon className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Panel 2: Submenu Links Drill-Down (Reverted back to White Background with High Contrast Borders) */}
                  <div className="w-[50%] h-full flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 border-l border-slate-200 dark:border-slate-800">
                    
                    {/* Back Button */}
                    <button
                      onClick={() => setActiveParent(null)}
                      className="h-[60px] min-h-[60px] px-6 flex items-center justify-between text-slate-800 dark:text-slate-200 hover:text-primary transition-colors border-b border-slate-200 dark:border-slate-800 font-extrabold text-[13px] uppercase tracking-widest shrink-0 cursor-pointer bg-white dark:bg-slate-950 w-full"
                    >
                      {activeParent && (
                        <span className="text-[14px] font-black text-slate-800 dark:text-slate-150 tracking-wider uppercase font-sans">
                          {activeParent}
                        </span>
                      )}
                      <div className="flex items-center gap-1 text-[#1B79EE]">
                        <ChevronLeft className="w-5 h-5 shrink-0" />
                        <span className="text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors font-bold uppercase text-[12px] tracking-wider pr-1">
                          Back
                        </span>
                      </div>
                    </button>

                    {/* Submenu Links List */}
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                      {activeParent && (
                        <div className="py-2 flex flex-col gap-6">
                          {(navigation.megaMenu as Record<string, MegaColumn[]>)[activeParent]?.map((column: MegaColumn) => (
                            <div key={column.category} className="flex flex-col gap-2">
                              {/* Subcategory Label */}
                              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-widest uppercase font-sans">
                                {column.category}
                              </span>
                              {/* Subcategory links (16px font, 44px row height) */}
                              <div className="flex flex-col pl-0.5 border-t border-slate-100 dark:border-slate-900/60 mt-1 pt-1.5">
                                {column.links.map((link) => (
                                  <a
                                    key={link}
                                    href="#"
                                    onClick={handleCloseDrawer}
                                    className="h-[44px] flex items-center text-[16px] font-medium text-slate-650 dark:text-slate-400 hover:text-primary transition-colors font-sans"
                                  >
                                    {link}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
