"use client";

import { useState, useEffect } from "react";
import { navigation, MegaColumn } from "@/config/navigation";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {/* Logo at the start (left) */}
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
                    className="text-[13px] font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors py-8 tracking-wider"
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
                className="text-[13px] font-extrabold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors tracking-wider"
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

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center justify-between w-full">
            <Logo size="sm" className="!items-start" />
            <button
              className="p-2 text-slate-800 dark:text-slate-200 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  {(navigation.megaMenu as any)[activeDropdown]?.map((column: MegaColumn, colIndex: number) => (
                    <div 
                      key={colIndex} 
                      className={cn(
                        "flex flex-col gap-4 pr-4",
                        colIndex !== 3 ? "border-r border-slate-200/40 dark:border-slate-800/40" : ""
                      )}
                    >
                      {/* Category Title Header */}
                      <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-widest block mb-1 uppercase">
                        {column.category}
                      </span>
                      
                      {/* Column Links with Hover translation shifts */}
                      <div className="flex flex-col gap-3">
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

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 overflow-hidden absolute w-full shadow-lg"
          >
            <Container className="py-6 flex flex-col gap-4">
              {[...navigation.navbarLeft, ...navigation.navbarRight].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-[15px] font-extrabold text-slate-800 dark:text-slate-200 hover:text-[#004aeb] border-b border-slate-100 dark:border-slate-900 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-4">
                <Button className="w-full bg-[#004aeb] hover:bg-[#0038cb] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-none">
                  Get Started
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
