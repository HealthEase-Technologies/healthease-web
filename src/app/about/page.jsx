import MarketingNav from "@/components/MarketingNav";
import Link from "next/link";

export const metadata = {
  title: "About · HealthEase Technologies",
  description: "Meet the team building intelligent health products at HealthEase Technologies LLC, headquartered in Dubai, UAE.",
};

const TEAM = [
  { name: "Rhea Menezes",    role: "CEO & Founding Member",                    bio: "Drives the vision and strategy behind HealthEase Technologies. A relentless builder who believes proactive healthcare should be accessible to everyone — not just those who can afford a concierge physician.", initials: "RM" },
  { name: "Huzaifa Mohammed",role: "CTO & Founding Member",                    bio: "Architects the entire HealthEase technology stack — from real-time biomarker pipelines to the AI health scoring engine. Obsessed with systems that are fast, private, and clinically honest.",             initials: "HM" },
  { name: "Tehan Miskin",    role: "Founding Member · Frontend & Research",    bio: "Shapes how our products look and feel, and grounds decisions in user research. Believes a health platform is only as good as the experience it delivers under stress.",                                      initials: "TM" },
  { name: "Zeeshan Khan",    role: "Founding Member · Backend & Cybersecurity",bio: "Keeps HealthEase infrastructure bulletproof. Every HIPAA control, every encryption layer, every penetration test — Zeeshan owns it. Health data security isn't a feature; it's the foundation.",           initials: "ZK" },
  { name: "Simon Girma",     role: "Founding Member · Frontend & Research",    bio: "Builds the interfaces patients and HCPs actually use. Combines deep frontend craft with a researcher's instinct for what real users need — not just what they say they need.",                              initials: "SG" },
  { name: "Patrick Abella",  role: "Founding Member · UI/UX & Research",       bio: "Designs the systems and flows that make complex health data feel intuitive. Patrick's work is the reason our products don't feel like medical software — they feel like something you want to use.",         initials: "PA" },
  { name: "Krisha Bhandari", role: "Founding Member · UI/UX & Research",       bio: "Brings precision and warmth to every screen. Ensures our products communicate clearly at the most important moments — when someone's health data is telling them something serious.",                        initials: "KB" },
  { name: "Kamo Peacock",    role: "Founding Member · Backend",                bio: "The quiet engine behind HealthEase's reliability. Builds the services and data flows that run 24/7 — the systems that have to work when a patient's health alert fires at 2 AM.",                           initials: "KP" },
];

const VALUES = [
  { icon: "🔬", title: "Clinically honest",    body: "We won't tell you you're fine if you're not. Our health scoring is based on peer-reviewed ranges, not optimistic defaults designed to retain users." },
  { icon: "🔒", title: "Privacy by design",    body: "Your health data belongs to you. We don't sell it, don't aggregate it for advertising, and our architecture ensures your data stays yours." },
  { icon: "🌍", title: "Access, not exclusivity", body: "Proactive healthcare shouldn't cost a premium. We build free tiers that are genuinely useful, priced for the real world — not just Silicon Valley." },
  { icon: "⚡", title: "Speed over perfection", body: "A health alert that arrives two minutes late is a useless alert. We prioritise real-time reliability above all else." },
];

export default function AboutPage() {
  return (
    <div className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen overflow-x-hidden">
      <MarketingNav />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden bg-gray-50 dark:bg-gray-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.08] dark:opacity-10"
            style={{ background: "radial-gradient(ellipse, rgba(26,171,82,0.8) 0%, transparent 70%)", filter: "blur(70px)" }} />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] rounded-full px-4 py-1.5 text-xs text-gray-500 dark:text-white/50 font-medium tracking-wide mb-6 shadow-sm">
            HealthEase Technologies LLC · Dubai, UAE
          </div>
          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] text-gray-900 dark:text-white leading-tight mb-6">
            We exist because health<br />
            <span className="font-serif-italic text-gray-400 dark:text-white/75">shouldn&apos;t wait.</span>
          </h1>
          <p className="text-gray-500 dark:text-white/50 text-base leading-relaxed max-w-2xl mx-auto">
            HealthEase Technologies LLC is a health technology company headquartered in Dubai, building a suite of intelligent products that make it effortless to understand, manage, and improve your wellbeing — whether you&apos;re an individual, a family, or a healthcare provider.
          </p>
        </div>
      </section>

      {/* ── Stats + Story ── */}
      <section className="py-16 px-4 border-t border-gray-100 dark:border-white/[0.06] bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { stat: "2025",         label: "Founded in Dubai"       },
              { stat: "4 products",   label: "In our health suite"    },
              { stat: "HIPAA + GDPR", label: "Compliant from day one" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-3xl text-gray-900 dark:text-white mb-1">{s.stat}</p>
                <p className="text-gray-400 dark:text-white/40 text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5 text-gray-500 dark:text-white/55 text-sm leading-relaxed">
            <p>
              HealthEase Technologies was founded on a frustration shared across the founding team: health data existed everywhere — wearables, labs, devices — and yet it was completely siloed. You&apos;d get a heart rate notification from your watch with no context. You&apos;d visit a doctor and spend the first ten minutes answering questions that your phone already knew the answers to.
            </p>
            <p>
              Eight people came together to fix this. Starting with Pulse — our flagship real-time health monitoring platform — we&apos;re now building a suite of four connected health products: Pulse for vitals monitoring, NutriEase for nutrition intelligence, CareCircle for family health, and MindEase for mental wellness. Products designed to work independently and together.
            </p>
            <p>
              We&apos;re based in JLT Towers, Dubai — and we&apos;re building for patients, families, and HCPs across the Middle East, South Asia, and beyond. Markets where access to proactive healthcare is still a privilege, not a right. That&apos;s the problem we&apos;re here to fix.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-950 dark:to-[#060e09]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-100 dark:via-white/[0.06] to-transparent" />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-gray-900 dark:text-white mb-3">What we believe</h2>
            <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto">These aren&apos;t values we wrote for an about page. They&apos;re the arguments we have in product reviews.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] rounded-2xl p-6 hover:border-gray-200 dark:hover:bg-white/[0.06] transition-all duration-300 shadow-sm">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 dark:text-white/45 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-gray-900 dark:text-white mb-3">The team</h2>
            <p className="text-gray-400 dark:text-white/40 text-sm">Engineers, designers, and researchers who care about building something that actually matters.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {TEAM.map((p) => (
              <div key={p.name} className="bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] rounded-2xl p-6 flex gap-4 hover:bg-gray-50 dark:hover:bg-white/[0.06] hover:border-gray-200 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 dark:from-green-500/30 dark:to-emerald-600/30 border border-green-200 dark:border-green-500/20 flex items-center justify-center text-green-700 dark:text-white text-sm font-bold flex-shrink-0">
                  {p.initials}
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold text-sm">{p.name}</p>
                  <p className="text-green-600 dark:text-green-400/80 text-[11px] font-medium mb-2">{p.role}</p>
                  <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advisor ── */}
      <section className="py-16 px-4 border-t border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] text-gray-900 dark:text-white mb-2">Academic Advisory</h2>
            <p className="text-gray-400 dark:text-white/35 text-sm">Grounding our work in rigorous research and institutional expertise.</p>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.08] rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-gradient-to-br dark:from-amber-500/30 dark:to-orange-500/20 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-300 text-sm font-bold flex-shrink-0">
                PT
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold text-sm">Prof. Talal</p>
                <p className="text-amber-600 dark:text-amber-400/80 text-[11px] font-medium mb-2">Academic Advisor · Heriot-Watt University Dubai</p>
                <p className="text-gray-400 dark:text-white/40 text-xs leading-relaxed">
                  Provides academic rigour and research guidance to ensure HealthEase&apos;s health scoring methodology and clinical logic are grounded in peer-reviewed science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 border-t border-gray-100 dark:border-white/[0.06] text-center bg-white dark:bg-gray-950">
        <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-gray-900 dark:text-white mb-4">
          Want to work with us?
        </h2>
        <p className="text-gray-400 dark:text-white/40 text-sm max-w-md mx-auto mb-7 leading-relaxed">
          We&apos;re always looking for people who care about health, hate unnecessary complexity, and want to build something real.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact"
            className="bg-[#1aab52] hover:bg-[#17994a] text-white font-bold text-sm px-7 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-green-500/20">
            Get in Touch
          </Link>
          <Link href="https://pulse-so.vercel.app" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 dark:text-white/60 font-medium text-sm px-7 py-2.5 rounded-full border border-gray-300 dark:border-white/15 hover:border-gray-400 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-white transition-all duration-200">
            Try Pulse Free
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <div className="border-t border-gray-100 dark:border-white/[0.06] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-5xl mx-auto">
        <p className="text-gray-300 dark:text-white/20 text-[11px]">© {new Date().getFullYear()} HealthEase Technologies LLC. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {[{ l: "Privacy", h: "#" }, { l: "Terms", h: "#" }, { l: "Contact", h: "/contact" }].map((i) => (
            <Link key={i.l} href={i.h} className="text-gray-300 dark:text-white/25 text-[11px] hover:text-gray-600 dark:hover:text-white/60 transition-colors">{i.l}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
