"use client";

/**
 * ROICalculator.tsx
 *
 * PURPOSE: A self-contained, interactive client-side calculator that surfaces
 * the annual revenue a business owner is losing from missed calls.
 *
 * DESIGN PHILOSOPHY:
 * This component is intentionally "painful" to look at — the large red number
 * is a psychological trigger (loss aversion) designed to compel the user toward
 * the CTA. This is the "Agitation" step of the PAS (Problem-Agitate-Solution)
 * copywriting framework.
 *
 * PROPS:
 * - onCalcChange: A callback that fires whenever the calculated loss changes.
 *   The parent (ROISection) uses this to sync the CTA button text.
 */

import { useState, useEffect } from "react";

// --- Constants (industry-standard benchmarks, NOT user-adjustable) ---
const MISSED_CALL_RATE = 0.30;       // 30% of inbound calls go unanswered
const VOICEMAIL_DROPOFF_RATE = 0.85; // 85% of people who hit voicemail never call back

// --- Types ---
interface ROICalculatorProps {
  onCalcChange: (annualLoss: number) => void;
}

export default function ROICalculator({ onCalcChange }: ROICalculatorProps) {
  // --- State: the three user-controlled inputs ---
  const [weeklyCallVolume, setWeeklyCallVolume] = useState<number>(50);
  const [averageJobValue, setAverageJobValue] = useState<number>(8000);
  const [closeRate, setCloseRate] = useState<number>(30);

  /**
   * FORMULA (runs on every state change):
   *
   * Step 1: Total annual calls = weeklyCallVolume * 52 weeks
   * Step 2: Missed calls      = Total * MISSED_CALL_RATE (30%)
   * Step 3: Lost leads        = Missed * VOICEMAIL_DROPOFF_RATE (85%)
   * Step 4: Lost deals        = Lost leads * (closeRate / 100)
   * Step 5: Revenue lost      = Lost deals * averageJobValue
   */
  const annualRevenueLost = Math.round(
    weeklyCallVolume * 52
    * MISSED_CALL_RATE
    * VOICEMAIL_DROPOFF_RATE
    * (closeRate / 100)
    * averageJobValue
  );

  // Notify the parent component whenever the calculated value changes.
  // useEffect prevents calling the parent during render (React best practice).
  useEffect(() => {
    onCalcChange(annualRevenueLost);
  }, [annualRevenueLost, onCalcChange]);

  // Helper: format a number as USD currency string (e.g., 158040 => "$158,040")
  const formatCurrency = (value: number): string =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    // Outer card: slate-900 background with a subtle red border glow
    <div className="w-full max-w-3xl mx-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-red-900/20 overflow-hidden">

      {/* Card Header */}
      <div className="border-b border-slate-700 px-6 py-5 flex items-center gap-3">
        {/* Red "recording" indicator dot — reinforces urgency / industrial feel */}
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
        <h2 className="text-white font-bold text-lg tracking-wide uppercase">
          Missed Revenue Calculator
        </h2>
        <span className="ml-auto text-xs text-slate-500 font-mono tracking-widest">
          VECTRA // DIAGNOSTIC
        </span>
      </div>

      {/* Sliders Section */}
      <div className="px-6 py-8 space-y-8">

        {/* --- Slider 1: Weekly Call Volume --- */}
        <SliderInput
          id="weekly-calls"
          label="Weekly Call Volume"
          value={weeklyCallVolume}
          min={10}
          max={500}
          step={5}
          displayValue={`${weeklyCallVolume} calls/wk`}
          onChange={setWeeklyCallVolume}
        />

        {/* --- Slider 2: Average Job Value --- */}
        <SliderInput
          id="avg-job-value"
          label="Average Job Value"
          value={averageJobValue}
          min={500}
          max={50000}
          step={500}
          displayValue={formatCurrency(averageJobValue)}
          onChange={setAverageJobValue}
        />

        {/* --- Slider 3: Close Rate --- */}
        <SliderInput
          id="close-rate"
          label="Your Close Rate"
          value={closeRate}
          min={5}
          max={80}
          step={1}
          displayValue={`${closeRate}%`}
          onChange={setCloseRate}
        />

        {/* Hardcoded constants display — builds credibility with sourced benchmarks */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <ConstantBadge label="Industry Missed Call Rate" value="30%" />
          <ConstantBadge label="Voicemail Drop-off Rate" value="85%" />
        </div>
      </div>

      {/* --- Output Section: The "pain number" --- */}
      <div className="border-t border-slate-700 bg-slate-950 px-6 py-8 text-center">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-2">
          Estimated Annual Revenue Lost
        </p>

        {/*
          The red number is the psychological payload of this entire component.
          It should feel alarming — large, red, impossible to ignore.
        */}
        <p
          id="annual-revenue-lost"
          className="text-red-500 font-black text-6xl md:text-7xl leading-none tracking-tight tabular-nums"
          aria-live="polite"
          aria-label={`Annual revenue lost: ${formatCurrency(annualRevenueLost)}`}
        >
          {formatCurrency(annualRevenueLost)}
        </p>

        <p className="text-slate-500 text-xs mt-3 max-w-sm mx-auto">
          Based on 30% missed call rate × 85% voicemail drop-off × your inputs.
          Industry benchmarks sourced from Harvard Business Review & CallRail.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// These are small, self-contained UI atoms defined in the same file for
// simplicity. If the component file grows to 300+ lines, extract them.
// ─────────────────────────────────────────────────────────────────────────────

interface SliderInputProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  onChange: (value: number) => void;
}

/**
 * SliderInput: A labeled range slider.
 * The `displayValue` prop lets the parent format the output (currency, %, etc.)
 * without this atom needing to know about formatting logic.
 */
function SliderInput({
  id,
  label,
  value,
  min,
  max,
  step,
  displayValue,
  onChange,
}: SliderInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-slate-300 text-sm font-medium uppercase tracking-wider"
        >
          {label}
        </label>
        {/* Live value readout — updates on every slider tick */}
        <span className="text-white font-bold text-base tabular-nums bg-slate-800 px-3 py-1 rounded-md border border-slate-600">
          {displayValue}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-lg"
      />
      {/* Min/max labels for range context */}
      <div className="flex justify-between text-xs text-slate-600">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

interface ConstantBadgeProps {
  label: string;
  value: string;
}

/**
 * ConstantBadge: Displays a hardcoded industry benchmark.
 * Using a distinct badge style signals to the user these are NOT their inputs
 * — they are external, credible facts.
 */
function ConstantBadge({ label, value }: ConstantBadgeProps) {
  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-center">
      <p className="text-slate-400 text-xs uppercase tracking-widest">{label}</p>
      <p className="text-red-400 font-bold text-lg mt-1">{value}</p>
    </div>
  );
}
