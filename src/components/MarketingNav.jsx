"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

/* ─── HealthEase Logo ─── */
function HELogo() {
  return (
    <svg viewBox="0 0 38 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-3 block">
      <polygon points="4,0 4,18 17,9"      fill="#149140" />
      <polygon points="4,0 17,9 10.5,9"    fill="#2fd878" />
      <polygon points="4,0 10.5,9 4,18"    fill="#1db358" />
      <polygon points="21,0 21,18 34,9"    fill="#1faa64" />
      <polygon points="21,0 34,9 27.5,9"   fill="#6dedb4" />
      <polygon points="21,0 27.5,9 21,18"  fill="#3dd68c" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "About",   href: "/about"   },
  { label: "Contact", href: "/contact" },
];

const PRODUCTS = [
  { label: "Pulse",      href: "https://pulse-so.vercel.app", tag: "Live"        },
  { label: "NutriEase",  href: "/products/nutriease",          tag: "Coming Soon" },
  { label: "CareCircle", href: "/products/carecircle",         tag: "Coming Soon" },
  { label: "MindEase",   href: "/products/mindease",           tag: "Coming Soon" },
];

export default function MarketingNav() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── theme-aware class helpers ── */
  const navBg = scrolled
    ? dark ? "bg-white/12 backdrop-blur-2xl border border-white/20 shadow-xl shadow-black/30"
           : "bg-white/95 backdrop-blur-2xl border border-gray-300 shadow-xl shadow-black/8"
    : dark ? "bg-white/8 backdrop-blur-xl border border-white/15"
           : "bg-white/80 backdrop-blur-xl border border-gray-200";

  const textPrimary   = dark ? "text-white"         : "text-gray-900";
  const textSecondary = dark ? "text-white/60"       : "text-gray-600";
  const iconBg        = dark ? "bg-white/10 border-white/20 hover:bg-white/15" : "bg-gray-100 border-gray-200 hover:bg-gray-200";
  const linkHover     = dark ? "hover:text-white hover:bg-white/8" : "hover:text-gray-900 hover:bg-gray-100";
  const linkActive    = dark ? "text-white bg-white/10"             : "text-gray-900 bg-gray-100";
  const toggleBtn     = dark ? "text-white/50 hover:text-white hover:bg-white/10" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100";
  const dropdownBg    = dark ? "bg-[#0d1117]/98 border-white/[0.12] shadow-black/50" : "bg-white border-gray-200 shadow-black/10";
  const dropdownHover = dark ? "hover:bg-white/[0.07]"              : "hover:bg-gray-50";
  const mobileBg      = dark ? "bg-[#0d1117]/98 border-white/15 shadow-black/30"    : "bg-white border-gray-200 shadow-black/10";
  const mobileDivider = dark ? "border-white/10"                    : "border-gray-100";
  const mobileLabel   = dark ? "text-white/25"                      : "text-gray-400";
  const mobileLink    = dark ? "text-white/70 hover:bg-white/10 hover:text-white"   : "text-gray-600 hover:bg-gray-50 hover:text-gray-900";
  const mobileBtnBg   = dark ? "bg-white/[0.06] text-white/50 hover:text-white"     : "bg-gray-50 text-gray-500 hover:text-gray-900";

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50" style={{ width: "min(900px, calc(100vw - 24px))" }}>
      <nav className={`flex items-center justify-between px-3 py-1.5 rounded-full transition-all duration-300 ${navBg}`}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-colors ${iconBg}`}>
            <HELogo />
          </div>
          <span className={`font-bold text-[15px] tracking-tight hidden sm:block ${textPrimary}`}>
            HealthEase
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {/* Products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen((o) => !o)}
              className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150
                ${productsOpen ? linkActive : `${textSecondary} ${linkHover}`}`}
            >
              Products
              <svg viewBox="0 0 20 20" fill="currentColor"
                className={`w-3 h-3 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}>
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd"/>
              </svg>
            </button>

            {productsOpen && (
              <div className={`absolute top-full left-0 mt-2 w-52 backdrop-blur-2xl border rounded-2xl p-2 shadow-xl ${dropdownBg}`}>
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.label}
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={() => setProductsOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-150 group ${dropdownHover}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.tag === "Live" ? "bg-green-400" : dark ? "bg-white/20" : "bg-gray-300"}`} />
                      <span className={`text-sm font-medium transition-colors ${p.tag === "Live" ? textPrimary : dark ? "text-white/50 group-hover:text-white/70" : "text-gray-400 group-hover:text-gray-600"}`}>
                        {p.label}
                      </span>
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-wide ${p.tag === "Live" ? "text-green-500" : dark ? "text-white/20" : "text-gray-300"}`}>{p.tag}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap
                ${pathname === item.href ? linkActive : `${textSecondary} ${linkHover}`}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(dark ? "light" : "dark")}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 ${toggleBtn}`}
            aria-label="Toggle theme"
          >
            {dark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>

          <Link
            href="https://pulse-so.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-[#1aab52] hover:bg-[#17994a] text-white text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-150 shadow-md shadow-black/10 whitespace-nowrap"
          >
            Try Pulse
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
            </svg>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className={`md:hidden w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 ${toggleBtn}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`md:hidden mt-2 rounded-2xl backdrop-blur-2xl border shadow-xl overflow-hidden ${mobileBg}`}>
          <div className="px-4 py-3 space-y-0.5">
            <p className={`text-[10px] uppercase tracking-widest font-semibold px-3 pb-2 pt-1 ${mobileLabel}`}>Products</p>
            {PRODUCTS.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between text-sm font-medium py-2.5 px-3 rounded-xl transition-all duration-150 ${dropdownHover}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${p.tag === "Live" ? "bg-green-400" : dark ? "bg-white/20" : "bg-gray-300"}`} />
                  <span className={p.tag === "Live" ? textPrimary : dark ? "text-white/50" : "text-gray-400"}>{p.label}</span>
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wide ${p.tag === "Live" ? "text-green-500" : dark ? "text-white/20" : "text-gray-300"}`}>{p.tag}</span>
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <p className={`text-[10px] uppercase tracking-widest font-semibold px-3 pb-2 ${mobileLabel}`}>Company</p>
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm font-medium py-2.5 px-3 rounded-xl transition-all duration-150 ${mobileLink}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={`border-t px-4 py-3 flex items-center gap-2 ${mobileDivider}`}>
            <Link
              href="https://pulse-so.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1aab52] text-white text-xs font-bold py-2.5 px-3 rounded-xl hover:bg-[#17994a] transition-all"
            >
              Try Pulse — it&apos;s free
            </Link>
            <button
              onClick={() => { setTheme(dark ? "light" : "dark"); setMobileOpen(false); }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${mobileBtnBg}`}
            >
              {dark ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
