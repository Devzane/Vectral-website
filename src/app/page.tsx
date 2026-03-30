/**
 * page.tsx — Root Landing Page
 *
 * This is intentionally a SERVER COMPONENT (no "use client" directive).
 * All client-side interactivity is isolated inside ROISection.tsx and
 * ROICalculator.tsx, which declare their own "use client" boundaries.
 * This is the recommended Next.js 14 App Router pattern.
 *
 * PAGE STRUCTURE (PAS Framework):
 *   1. PROBLEM  — Navbar + Hero: "You're losing jobs every single day"
 *   2. AGITATE  — ROISection: Show them the exact dollar amount
 *   3. SOLUTION — (Future sections: Features, Testimonials, Final CTA)
 */

import ROISection from "@/components/ROISection";
import OvernightAdvantageSection from "@/components/OvernightAdvantageSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">

      {/* ── NAVBAR ──────────────────────────────────────────────────────── */}
      <header className="w-full border-b border-slate-800/60 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-red-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">V</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Vectral<span className="text-red-500"> Automation</span>
            </span>
          </div>

          {/* Nav CTA */}
          <a
            href="#calculator"
            className="text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-red-600 hover:text-red-400 px-4 py-2 rounded-lg transition-all duration-200"
          >
            Book a Free System Audit
          </a>
        </div>
      </header>

      {/* ── HERO SECTION (PROBLEM) ──────────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-10 text-center">

        {/* Eyebrow tag — context setting */}
        <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-900/60 text-red-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
          For HVAC & Real Estate Professionals
        </div>

        {/* Primary Headline — direct, confrontational, problem-first */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          Every Missed Call Is A{" "}
          <span className="relative inline-block">
            <span className="text-red-500">Client You Lost</span>
            {/* Underline accent */}
            <svg
              aria-hidden="true"
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9 C50 3, 150 3, 298 9"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </span>
        </h1>

        {/* Sub-headline — deepens the problem */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          30% of your inbound calls go unanswered. 85% of those people never call back.
          Your competitors&apos; AI picks up in 2 seconds — 24 hours a day, 7 days a week.{" "}
          <strong className="text-slate-200">How much is that silence costing you?</strong>
        </p>

        {/* Social proof strip (static for now) */}
        <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold">127+</span>
            <span>Businesses Automated</span>
          </div>
          <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold">$2.4M+</span>
            <span>Revenue Recovered</span>
          </div>
          <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-bold"> &lt; 2s</span>
            <span>Average Response Time</span>
          </div>
        </div>
      </section>

      {/* 
        ── ROI SECTION (AGITATE) ──────────────────────────────────────────
        ROISection is a "use client" wrapper containing:
          - ROICalculator (interactive sliders)
          - Dynamic CTA button (shows the calculated loss amount)

        It is imported as a Server Component but renders client components
        internally — this is the correct Next.js 14 boundary pattern.
      */}
      <ROISection />

      {/* ── OVERNIGHT ADVANTAGE SECTION ─────────────────────────────────── */}
      <OvernightAdvantageSection />

      {/* ── FEATURES SECTION (SOLUTION) ─────────────────────────────────── */}
      <FeaturesSection />

      {/* ── HOW IT WORKS SECTION (PROCESS) ──────────────────────────────── */}
      <HowItWorksSection />

      {/* ── TESTIMONIALS SECTION (SOCIAL PROOF) ─────────────────────────── */}
      <TestimonialsSection />

      {/* ── FAQ SECTION (OBJECTIONS) ────────────────────────────────────── */}
      <FAQSection />

      {/* ── FINAL CTA SECTION (ACTION) ──────────────────────────────────── */}
      <FinalCTASection />

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="mt-auto border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <a href="mailto:hello@vectralautomation.com" className="text-slate-500 hover:text-slate-300 text-sm mb-4 transition-colors">
            hello@vectralautomation.com
          </a>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Vectral Automation. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs mt-1">
            Built to convert — not to impress.
          </p>
        </div>
      </footer>

    
      {/* ── FLOATING AI CHAT WIDGET ────────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="group flex items-center justify-center w-14 h-14 bg-red-600 rounded-full shadow-lg shadow-red-900/50 hover:shadow-red-600/40 hover:-translate-y-1 transition-all duration-300 border border-red-500"
          aria-label="Live AI Chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

    </main>
  );
}
