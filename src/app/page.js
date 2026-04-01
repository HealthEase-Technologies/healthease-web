"use client";

import Link from "next/link";
import { useRef } from "react";
import MarketingNav from "@/components/MarketingNav";

/* ─── Products ─── */
const PRODUCTS = [
  {
    name: "Pulse",
    tagline: "Real-Time Health Monitoring",
    description: "Stream your vitals from any wearable. AI coaching, HCP connectivity, and a health pet that reflects your actual wellbeing — all in one place.",
    href: "https://pulse-so.vercel.app",
    status: "live",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: "bg-green-50 border-green-200 text-green-600 dark:bg-green-500/10 dark:border-green-500/20 dark:text-green-400",
    features: ["Live vitals from any wearable", "AI health coach + chat", "Connect with your HCP", "Health pet gamification", "Threshold alerts & PDF reports"],
  },
  {
    name: "NutriEase",
    tagline: "Intelligent Nutrition Tracking",
    description: "AI-powered nutrition analysis that understands your health goals. Log meals with a photo, get personalised macro targets, and see how food connects to how you feel.",
    href: "/products/nutriease",
    status: "soon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9S3 15.97 3 11a9 9 0 0 1 9-9z" strokeLinecap="round"/>
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconBg: "bg-orange-50 border-orange-200 text-orange-500 dark:bg-orange-500/10 dark:border-orange-500/15 dark:text-orange-400",
    accentText: "text-orange-500 dark:text-orange-400",
    features: ["Photo-based meal logging", "AI macro analysis", "Personalised meal plans", "Biomarker correlation"],
    mock: (
      <div className="w-full rounded-xl bg-gray-50 border border-gray-100 dark:bg-white/[0.04] dark:border-white/[0.08] p-4 overflow-hidden">
        <p className="text-gray-400 dark:text-white/25 text-[10px] uppercase tracking-widest font-semibold mb-3">Today&apos;s Nutrition</p>
        <div className="flex gap-3 mb-3">
          {[
            { label: "Calories", val: "1,840", pct: 88, color: "bg-orange-400" },
            { label: "Protein",  val: "94g",   pct: 78, color: "bg-blue-400"   },
            { label: "Carbs",    val: "210g",  pct: 81, color: "bg-amber-400"  },
          ].map((m) => (
            <div key={m.label} className="flex-1">
              <p className="text-gray-400 dark:text-white/30 text-[9px] mb-1">{m.label}</p>
              <p className="text-gray-800 dark:text-white text-xs font-bold mb-1">{m.val}</p>
              <div className="h-1.5 rounded-full bg-gray-200 dark:bg-white/[0.08]">
                <div className={`h-full rounded-full ${m.color} opacity-60`} style={{ width: `${m.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 dark:bg-orange-500/10 dark:border-orange-500/15 rounded-lg px-3 py-2">
          <span className="text-sm">✨</span>
          <p className="text-gray-500 dark:text-white/50 text-[11px]">26g short on protein today. Consider Greek yogurt.</p>
        </div>
      </div>
    ),
  },
  {
    name: "CareCircle",
    tagline: "Family Health, Together",
    description: "Monitor the health of everyone you love — parents, kids, grandparents — from one screen. Get alerts when a family member needs attention.",
    href: "/products/carecircle",
    status: "soon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <circle cx="9" cy="7" r="3"/><circle cx="15" cy="7" r="3"/>
        <path d="M3 20c0-3.87 2.69-7 6-7h6c3.31 0 6 3.13 6 7" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "bg-violet-50 border-violet-200 text-violet-500 dark:bg-violet-500/10 dark:border-violet-500/15 dark:text-violet-400",
    accentText: "text-violet-500 dark:text-violet-400",
    features: ["Multi-member monitoring", "Caregiver alerts", "Shared HCP access", "Family health reports"],
    mock: (
      <div className="w-full rounded-xl bg-gray-50 border border-gray-100 dark:bg-white/[0.04] dark:border-white/[0.08] p-4 overflow-hidden">
        <p className="text-gray-400 dark:text-white/25 text-[10px] uppercase tracking-widest font-semibold mb-3">Family Overview</p>
        {[
          { name: "Mum",   vital: "BP 128/82",  status: "Normal", stColor: "text-green-600 dark:text-green-400",  dot: "bg-green-400"  },
          { name: "Dad",   vital: "HR 88 bpm",  status: "Watch",  stColor: "text-amber-600 dark:text-yellow-400", dot: "bg-yellow-400" },
          { name: "Layla", vital: "Sleep 9.2h", status: "Great",  stColor: "text-green-600 dark:text-green-400",  dot: "bg-green-400"  },
        ].map((m) => (
          <div key={m.name} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/[0.05] last:border-0">
            <div className="flex items-center gap-2.5">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${m.dot}`} />
              <div>
                <p className="text-gray-800 dark:text-white text-xs font-medium">{m.name}</p>
                <p className="text-gray-400 dark:text-white/30 text-[10px]">{m.vital}</p>
              </div>
            </div>
            <span className={`text-[11px] font-semibold ${m.stColor}`}>{m.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "MindEase",
    tagline: "Mental Wellness, Measured",
    description: "Track your mental health the same way you track your physical health. Mood journaling, stress patterns from HRV, and AI-guided mindfulness — all evidence-based.",
    href: "/products/mindease",
    status: "soon",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: "bg-sky-50 border-sky-200 text-sky-500 dark:bg-sky-500/10 dark:border-sky-500/15 dark:text-sky-400",
    accentText: "text-sky-500 dark:text-sky-400",
    features: ["Daily mood journaling", "HRV stress tracking", "Guided mindfulness", "AI pattern insights"],
    mock: (
      <div className="w-full rounded-xl bg-gray-50 border border-gray-100 dark:bg-white/[0.04] dark:border-white/[0.08] p-4 overflow-hidden">
        <p className="text-gray-400 dark:text-white/25 text-[10px] uppercase tracking-widest font-semibold mb-3">This Week</p>
        <div className="flex items-end gap-1.5 h-12 mb-3">
          {[7,5,8,6,9,7,8].map((mood, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-sm bg-sky-400 opacity-50" style={{ height: `${mood * 10}%` }} />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-sky-50 border border-sky-100 dark:bg-sky-500/10 dark:border-sky-500/15 rounded-lg px-3 py-2">
          <span className="text-sm">🧘</span>
          <p className="text-gray-500 dark:text-white/50 text-[11px]">Stress peaks Tuesday mornings. A 5-min breath session helps.</p>
        </div>
      </div>
    ),
  },
];

/* ─── Values ─── */
const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Privacy First",
    body: "Your health data belongs to you — always. We are HIPAA-compliant, use end-to-end encryption, and will never sell your data.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Evidence-Based",
    body: "Every insight we surface is backed by clinical research. We work with physicians to keep our AI grounded in science, not hype.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round"/>
      </svg>
    ),
    title: "Built for Everyone",
    body: "Health technology has historically been for the privileged few. We build products that are accessible, affordable, and available wherever you are.",
  },
];

/* ─── HE Logo SVG ─── */
function HELogo({ className = "w-[34px] h-4" }) {
  return (
    <svg viewBox="0 0 38 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <polygon points="4,0 4,18 17,9"      fill="#149140" />
      <polygon points="4,0 17,9 10.5,9"    fill="#2fd878" />
      <polygon points="4,0 10.5,9 4,18"    fill="#1db358" />
      <polygon points="21,0 21,18 34,9"    fill="#1faa64" />
      <polygon points="21,0 34,9 27.5,9"   fill="#6dedb4" />
      <polygon points="21,0 27.5,9 21,18"  fill="#3dd68c" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef(null);

  return (
    <div className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-x-hidden">

      <MarketingNav />

      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 flex flex-col">
        {/* Ambient glows */}
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(26,171,82,0.10) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 75% 80%, rgba(26,171,82,0.06) 0%, transparent 50%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] rounded-full px-4 py-1.5 text-xs text-gray-500 dark:text-white/50 font-medium tracking-wide mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            HealthEase Technologies LLC
          </div>

          <h1 className="font-serif text-[clamp(2.6rem,6vw,5.2rem)] text-gray-900 dark:text-white leading-[1.04] mb-6 max-w-4xl">
            Building the Future<br className="hidden sm:block" />
            <span className="font-serif-italic text-gray-500 dark:text-white/65"> of Health.</span>
          </h1>

          <p className="text-gray-500 dark:text-white/45 text-[clamp(0.9rem,1.7vw,1.1rem)] max-w-xl leading-relaxed mb-10">
            We build intelligent health products that make it effortless to understand, manage, and improve your wellbeing — whether you&apos;re an individual, a family, or a healthcare provider.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="https://pulse-so.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#1aab52] hover:bg-[#17994a] text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-green-500/20 hover:-translate-y-0.5"
            >
              Try Pulse — our flagship product
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
              </svg>
            </Link>
            <a
              href="#products"
              className="text-gray-600 dark:text-white/60 font-semibold text-sm px-7 py-3 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/8 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/35 transition-all duration-200"
            >
              See all products
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-14 inline-flex items-center bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.07] rounded-full px-1 py-1 shadow-sm">
            {[
              { value: "4 products", label: "in our suite" },
              { value: "Dubai HQ",   label: "UAE-founded"  },
              { value: "HIPAA",      label: "compliant"    },
            ].map((s, i) => (
              <div key={s.value} className="flex items-center">
                {i > 0 && <div className="w-px h-3 bg-gray-200 dark:bg-white/10 mx-0.5" />}
                <div className="flex items-center gap-1.5 px-4 py-1.5">
                  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 flex-shrink-0">
                    <circle cx="6" cy="6" r="5.5" stroke="rgba(0,0,0,0.15)" className="dark:stroke-white/20" strokeWidth="1"/>
                    <path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="#1aab52" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-500 dark:text-white/35 text-[11px] font-medium tracking-wide whitespace-nowrap">
                    <span className="text-gray-700 dark:text-white/55 font-semibold">{s.value}</span> {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══ */}
      <section id="products" className="relative py-28 px-4 bg-white dark:bg-gray-950">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/[0.08] to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] rounded-full px-4 py-1.5 text-xs text-gray-500 dark:text-white/50 font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Our Product Suite
              </span>
            </div>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3.4rem)] text-gray-900 dark:text-white leading-tight mb-4 max-w-2xl mx-auto">
              One company.<br />
              <span className="font-serif-italic text-gray-400 dark:text-white/65">Four ways to be healthier.</span>
            </h2>
            <p className="text-gray-400 dark:text-white/35 text-sm max-w-md mx-auto leading-relaxed">
              Each product solves a distinct problem in the health journey — and they&apos;re designed to work together.
            </p>
          </div>

          {/* Featured: Pulse */}
          <div className="group relative bg-white dark:bg-white/[0.03] hover:bg-gray-50 dark:hover:bg-white/[0.05] border border-gray-100 dark:border-white/[0.09] hover:border-green-200 dark:hover:border-green-500/20 rounded-3xl p-7 md:p-10 transition-all duration-500 mb-5 overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: "radial-gradient(ellipse at 15% 50%, rgba(26,171,82,0.04) 0%, transparent 60%)" }} />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

              {/* Text side */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center text-green-600 dark:bg-green-500/10 dark:border-green-500/20 dark:text-green-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-2xl text-gray-900 dark:text-white">Pulse</h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full px-2.5 py-0.5">Live</span>
                    </div>
                    <p className="text-gray-400 dark:text-white/35 text-xs">Real-Time Health Monitoring</p>
                  </div>
                </div>

                <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                  Stream your vitals from any wearable. Heart rate, blood pressure, glucose, sleep, and more — unified in one intelligent dashboard with AI coaching and HCP connectivity.
                </p>

                <ul className="space-y-2 mb-8">
                  {PRODUCTS[0].features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-white/55">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://pulse-so.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1aab52] hover:bg-[#17994a] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-150 shadow-md shadow-green-500/20"
                >
                  Open Pulse
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
                  </svg>
                </Link>
              </div>

              {/* Mock dashboard — adapts to theme */}
              <div className="bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-white/[0.1] rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/40">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-white/[0.03] border-b border-gray-100 dark:border-white/[0.07]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-100 dark:bg-white/[0.06] rounded-md px-3 py-1 text-center text-[11px] text-gray-400 dark:text-white/25 flex items-center justify-center gap-1.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round"/>
                      </svg>
                      getpulse.app
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-gray-900 dark:text-white text-sm font-semibold">Good morning, Alex</p>
                      <p className="text-gray-400 dark:text-white/30 text-[11px]">Health Score · 82 / 100</p>
                    </div>
                    <div className="text-3xl">🐼</div>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 dark:bg-white/[0.08] mb-5 overflow-hidden">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-green-500 to-emerald-400" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: "Heart Rate", value: "72 bpm",  color: "text-red-500 dark:text-red-400"       },
                      { label: "BP",         value: "118/78",  color: "text-blue-500 dark:text-blue-400"     },
                      { label: "Glucose",    value: "94 mg",   color: "text-amber-500 dark:text-amber-400"   },
                      { label: "Sleep",      value: "7.2 hrs", color: "text-indigo-500 dark:text-indigo-400" },
                      { label: "Steps",      value: "6,412",   color: "text-green-600 dark:text-green-400"   },
                      { label: "HRV",        value: "54 ms",   color: "text-gray-700 dark:text-white"        },
                    ].map((v) => (
                      <div key={v.label} className="bg-gray-50 dark:bg-white/[0.04] rounded-xl p-2.5">
                        <p className="text-gray-400 dark:text-white/25 text-[9px] mb-0.5">{v.label}</p>
                        <p className={`text-xs font-bold ${v.color}`}>{v.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-end gap-0.5 h-8">
                    {[40,55,50,68,62,78,72,84,76,88,82,90].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-green-500/20 dark:bg-green-500/25" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Coming soon: 3-col grid */}
          <div className="grid sm:grid-cols-3 gap-4">
            {PRODUCTS.slice(1).map((p) => (
              <div key={p.name}
                className="group relative bg-white dark:bg-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.04] border border-gray-100 dark:border-white/[0.07] hover:border-gray-200 dark:hover:border-white/[0.12] rounded-2xl p-6 transition-all duration-300 overflow-hidden shadow-sm">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${p.iconBg}`}>
                      {p.icon}
                    </div>
                    <span className="text-[10px] font-semibold text-gray-300 dark:text-white/20 uppercase tracking-widest border border-gray-100 dark:border-white/[0.07] rounded px-2 py-0.5">
                      Soon
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-gray-900 dark:text-white mb-1">{p.name}</h3>
                  <p className={`text-[11px] font-medium mb-3 ${p.accentText}`}>{p.tagline}</p>
                  <p className="text-gray-500 dark:text-white/35 text-sm leading-relaxed mb-4">{p.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-400 dark:text-white/30">
                        <span className="w-1 h-1 rounded-full flex-shrink-0 bg-gray-300 dark:bg-white/20" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {p.mock}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section className="relative py-28 px-4 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-950 dark:via-[#060e09] dark:to-gray-950 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/[0.06] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] opacity-[0.06] dark:opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(26,171,82,1) 0%, transparent 70%)", filter: "blur(90px)" }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] rounded-full px-4 py-1.5 text-xs text-gray-500 dark:text-white/50 font-medium tracking-wide shadow-sm">
                Why we exist
              </span>
            </div>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3.4rem)] text-gray-900 dark:text-white leading-tight mb-5 max-w-3xl mx-auto">
              Health shouldn&apos;t be something<br />
              <span className="font-serif-italic text-gray-400 dark:text-white/65">you figure out alone.</span>
            </h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
              Most people only interact with healthcare when something goes wrong. We think that&apos;s backwards. HealthEase Technologies builds tools that put you in the driver&apos;s seat — proactively, continuously, intelligently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title}
                className="group bg-white dark:bg-white/[0.03] hover:bg-gray-50 dark:hover:bg-white/[0.06] border border-gray-100 dark:border-white/[0.08] hover:border-green-200 dark:hover:border-white/[0.14] rounded-2xl p-6 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 dark:bg-green-500/10 dark:border-green-500/15 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                  {v.icon}
                </div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 dark:text-white/40 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT CARD ══ */}
      <section className="relative py-20 px-4 bg-white dark:bg-gray-950">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/[0.07] to-transparent" />
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-white/[0.03] hover:bg-white dark:hover:bg-white/[0.05] border border-gray-100 dark:border-white/[0.08] rounded-3xl p-8 md:p-12 transition-all duration-300 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] flex items-center justify-center p-2.5 shadow-sm">
                    <HELogo className="w-full h-full" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-bold text-base">HealthEase Technologies</p>
                    <p className="text-gray-400 dark:text-white/35 text-xs">Dubai, United Arab Emirates</p>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed mb-4">
                  Founded by a team of engineers, physicians, and product designers who believe technology should make healthcare proactive, not reactive.
                </p>
                <p className="text-gray-400 dark:text-white/30 text-sm leading-relaxed">
                  Our flagship product, Pulse, launched in 2025 and is actively used by patients, athletes, and healthcare providers across the UAE and beyond.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "2025",  label: "Founded"          },
                  { value: "Dubai", label: "Headquartered"    },
                  { value: "8+",    label: "Team members"     },
                  { value: "HIPAA", label: "& GDPR compliant" },
                ].map((s) => (
                  <div key={s.label} className="bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.07] rounded-2xl p-4 text-center shadow-sm">
                    <p className="text-gray-900 dark:text-white font-bold text-xl mb-1">{s.value}</p>
                    <p className="text-gray-400 dark:text-white/30 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative py-28 px-4 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/[0.07] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] opacity-[0.07] dark:opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(26,171,82,1) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-green-600 dark:text-green-400">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="font-serif text-[clamp(1.9rem,4vw,3.2rem)] text-gray-900 dark:text-white leading-tight mb-5">
            Your health is happening<br />
            <span className="font-serif-italic text-gray-400 dark:text-white/65">right now.</span>
          </h2>
          <p className="text-gray-500 dark:text-white/40 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Start with Pulse — free, no credit card required. Connect your wearable in minutes and see your health in a whole new light.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://pulse-so.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#1aab52] hover:bg-[#17994a] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-green-500/20 hover:-translate-y-0.5"
            >
              Get started with Pulse — free
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/>
              </svg>
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-white/55 font-semibold text-sm px-6 py-3.5 rounded-full border border-gray-300 dark:border-white/15 hover:bg-gray-100 dark:hover:bg-white/8 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-white/30 transition-all duration-200"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="relative border-t border-gray-100 dark:border-white/[0.07] py-12 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] flex items-center justify-center p-2">
                  <HELogo className="w-full h-full" />
                </div>
                <span className="text-gray-900 dark:text-white font-bold text-[15px]">HealthEase</span>
              </div>
              <p className="text-gray-400 dark:text-white/30 text-xs leading-relaxed">
                Building intelligent health products for everyone. Headquartered in Dubai, UAE.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-sm">
              <div className="space-y-2.5">
                <p className="text-gray-300 dark:text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-3">Products</p>
                <Link href="https://pulse-so.vercel.app" target="_blank" rel="noopener noreferrer"
                  className="block text-gray-500 dark:text-white/45 hover:text-gray-900 dark:hover:text-white transition-colors">Pulse</Link>
                <span className="block text-gray-300 dark:text-white/20">NutriEase</span>
                <span className="block text-gray-300 dark:text-white/20">CareCircle</span>
                <span className="block text-gray-300 dark:text-white/20">MindEase</span>
              </div>
              <div className="space-y-2.5">
                <p className="text-gray-300 dark:text-white/20 text-[10px] uppercase tracking-widest font-semibold mb-3">Company</p>
                <Link href="/about"   className="block text-gray-500 dark:text-white/45 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="block text-gray-500 dark:text-white/45 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-300 dark:text-white/20 text-xs">
              © {new Date().getFullYear()} HealthEase Technologies LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {["HIPAA", "GDPR", "SOC 2"].map((badge, i) => (
                <span key={badge} className="flex items-center gap-2 text-gray-300 dark:text-white/15 text-[10px] font-medium uppercase tracking-wide">
                  {i > 0 && <span className="text-gray-200 dark:text-white/[0.08]">·</span>}
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
