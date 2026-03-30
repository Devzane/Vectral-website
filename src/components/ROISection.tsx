"use client";

/**
 * ROISection.tsx
 *
 * PURPOSE: This is a "client shell" — a thin wrapper that exists solely to
 * share reactive state between two sibling client components: ROICalculator
 * and the CTA button below it.
 *
 * WHY THIS PATTERN?
 * In Next.js 14's App Router, page.tsx is a Server Component by default,
 * which means it cannot hold React state or use hooks. However, both
 * ROICalculator and the CTA button need to share the same calculated dollar
 * figure. The idiomatic solution is to "lift state up" into this client
 * wrapper, which sits between the Server Component (page.tsx) and the
 * interactive child components.
 *
 * DATA FLOW:
 * page.tsx (Server) → <ROISection> (Client, holds state)
 *                         ├── <ROICalculator onCalcChange={...} />   (updates state)
 *                         └── <CTAButton annualLoss={calculatedLoss} />  (reads state)
 */

import { useState, useCallback } from "react";
import ROICalculator from "./ROICalculator";

export default function ROISection() {
  // This is the single source of truth for the calculated annual revenue lost.
  // It lives here so both the calculator and the CTA button can access it.
  const [calculatedLoss, setCalculatedLoss] = useState<number>(130000); // Default at initial slider values

  /**
   * useCallback memoizes this function so it has a stable reference.
   * Without this, the ROICalculator's useEffect (which depends on onCalcChange)
   * would fire on every render, causing an infinite loop.
   */
  const handleCalcChange = useCallback((loss: number) => {
    setCalculatedLoss(loss);
  }, []);

  // Helper: format a number as USD (e.g. 158040 => "$158,040")
  const formatCurrency = (value: number): string =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section
      id="calculator"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16"
    >
      {/* Section heading — frames the calculator as a diagnostic tool */}
      <div className="text-center mb-10">
        <p className="text-red-500 text-sm font-semibold uppercase tracking-widest mb-2">
          The Revenue Leak Diagnostic
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-black leading-tight">
          See Exactly What Missed Calls{" "}
          <span className="text-red-500">Cost You This Year</span>
        </h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto text-base">
          Adjust the sliders to match your business. The math is industry-standard.
          The result will be uncomfortable. That&apos;s intentional.
        </p>
      </div>

      {/* The interactive calculator card */}
      <ROICalculator onCalcChange={handleCalcChange} />

      {/* 
        CTA Button — directly below the calculator.
        The dollar amount is dynamically derived from the calculator output,
        making this button feel personalised and urgent.
      */}
      <div className="mt-8 text-center">
        <a
          id="cta-stop-losing"
          href="#audit"
          className="
            group relative inline-flex items-center gap-3 
            bg-red-600 hover:bg-red-500 
            text-white font-black text-lg md:text-xl 
            px-8 py-5 rounded-xl 
            shadow-lg shadow-red-900/50 hover:shadow-red-600/40
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:scale-105
            border border-red-500
          "
          aria-label={`Stop leaving ${formatCurrency(calculatedLoss)} on the table — Book an Audit`}
        >
          {/* Animated pulse dot for urgency */}
          <span className="flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-white opacity-50"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>

          {/* Dynamic loss amount updates live with the sliders */}
          Stop Leaving{" "}
          <span className="underline underline-offset-4 decoration-dotted">
            {formatCurrency(calculatedLoss)}
          </span>{" "}
          on the Table — Book an Audit

          {/* Arrow — subtle directional cue */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Micro-copy below CTA — removes friction / objections */}
        <p className="text-slate-500 text-xs mt-3">
          No commitment. 30-second setup. We reply instantly.
        </p>
      </div>
    </section>
  );
}
