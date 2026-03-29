module.exports = [
"[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ROICalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Vectra-Automation/Vectral_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Vectra-Automation/Vectral_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// --- Constants (industry-standard benchmarks, NOT user-adjustable) ---
const MISSED_CALL_RATE = 0.30; // 30% of inbound calls go unanswered
const VOICEMAIL_DROPOFF_RATE = 0.85; // 85% of people who hit voicemail never call back
function ROICalculator({ onCalcChange }) {
    // --- State: the three user-controlled inputs ---
    const [weeklyCallVolume, setWeeklyCallVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(50);
    const [averageJobValue, setAverageJobValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(8000);
    const [closeRate, setCloseRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(30);
    /**
   * FORMULA (runs on every state change):
   *
   * Step 1: Total annual calls = weeklyCallVolume * 52 weeks
   * Step 2: Missed calls      = Total * MISSED_CALL_RATE (30%)
   * Step 3: Lost leads        = Missed * VOICEMAIL_DROPOFF_RATE (85%)
   * Step 4: Lost deals        = Lost leads * (closeRate / 100)
   * Step 5: Revenue lost      = Lost deals * averageJobValue
   */ const annualRevenueLost = Math.round(weeklyCallVolume * 52 * MISSED_CALL_RATE * VOICEMAIL_DROPOFF_RATE * (closeRate / 100) * averageJobValue);
    // Notify the parent component whenever the calculated value changes.
    // useEffect prevents calling the parent during render (React best practice).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onCalcChange(annualRevenueLost);
    }, [
        annualRevenueLost,
        onCalcChange
    ]);
    // Helper: format a number as USD currency string (e.g., 158040 => "$158,040")
    const formatCurrency = (value)=>new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        }).format(value);
    return(// Outer card: slate-900 background with a subtle red border glow
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-3xl mx-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-red-900/20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-slate-700 px-6 py-5 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-3 w-3 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex rounded-full h-3 w-3 bg-red-600"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white font-bold text-lg tracking-wide uppercase",
                        children: "Missed Revenue Calculator"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto text-xs text-slate-500 font-mono tracking-widest",
                        children: "VECTRA // DIAGNOSTIC"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-8 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SliderInput, {
                        id: "weekly-calls",
                        label: "Weekly Call Volume",
                        value: weeklyCallVolume,
                        min: 10,
                        max: 500,
                        step: 5,
                        displayValue: `${weeklyCallVolume} calls/wk`,
                        onChange: setWeeklyCallVolume
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SliderInput, {
                        id: "avg-job-value",
                        label: "Average Job Value",
                        value: averageJobValue,
                        min: 500,
                        max: 50000,
                        step: 500,
                        displayValue: formatCurrency(averageJobValue),
                        onChange: setAverageJobValue
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SliderInput, {
                        id: "close-rate",
                        label: "Your Close Rate",
                        value: closeRate,
                        min: 5,
                        max: 80,
                        step: 1,
                        displayValue: `${closeRate}%`,
                        onChange: setCloseRate
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConstantBadge, {
                                label: "Industry Missed Call Rate",
                                value: "30%"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConstantBadge, {
                                label: "Voicemail Drop-off Rate",
                                value: "85%"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-700 bg-slate-950 px-6 py-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm uppercase tracking-widest font-semibold mb-2",
                        children: "Estimated Annual Revenue Lost"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "annual-revenue-lost",
                        className: "text-red-500 font-black text-6xl md:text-7xl leading-none tracking-tight tabular-nums",
                        "aria-live": "polite",
                        "aria-label": `Annual revenue lost: ${formatCurrency(annualRevenueLost)}`,
                        children: formatCurrency(annualRevenueLost)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 text-xs mt-3 max-w-sm mx-auto",
                        children: "Based on 30% missed call rate × 85% voicemail drop-off × your inputs. Industry benchmarks sourced from Harvard Business Review & CallRail."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this));
}
/**
 * SliderInput: A labeled range slider.
 * The `displayValue` prop lets the parent format the output (currency, %, etc.)
 * without this atom needing to know about formatting logic.
 */ function SliderInput({ id, label, value, min, max, step, displayValue, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: id,
                        className: "text-slate-300 text-sm font-medium uppercase tracking-wider",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-base tabular-nums bg-slate-800 px-3 py-1 rounded-md border border-slate-600",
                        children: displayValue
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                type: "range",
                min: min,
                max: max,
                step: step,
                value: value,
                onChange: (e)=>onChange(Number(e.target.value)),
                className: "w-full h-2 rounded-lg"
            }, void 0, false, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between text-xs text-slate-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: min
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: max
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
/**
 * ConstantBadge: Displays a hardcoded industry benchmark.
 * Using a distinct badge style signals to the user these are NOT their inputs
 * — they are external, credible facts.
 */ function ConstantBadge({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-400 text-xs uppercase tracking-widest",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-400 font-bold text-lg mt-1",
                children: value
            }, void 0, false, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ROISection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Vectra-Automation/Vectral_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Vectra-Automation/Vectral_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$src$2f$components$2f$ROICalculator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROICalculator.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ROISection() {
    // This is the single source of truth for the calculated annual revenue lost.
    // It lives here so both the calculator and the CTA button can access it.
    const [calculatedLoss, setCalculatedLoss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(158040); // Default at initial slider values
    /**
   * useCallback memoizes this function so it has a stable reference.
   * Without this, the ROICalculator's useEffect (which depends on onCalcChange)
   * would fire on every render, causing an infinite loop.
   */ const handleCalcChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((loss)=>{
        setCalculatedLoss(loss);
    }, []);
    // Helper: format a number as USD (e.g. 158040 => "$158,040")
    const formatCurrency = (value)=>new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        }).format(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "calculator",
        className: "w-full max-w-4xl mx-auto px-4 sm:px-6 py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-sm font-semibold uppercase tracking-widest mb-2",
                        children: "The Revenue Leak Diagnostic"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white text-3xl md:text-4xl font-black leading-tight",
                        children: [
                            "See Exactly What Missed Calls",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-500",
                                children: "Cost You This Year"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 mt-3 max-w-xl mx-auto text-base",
                        children: "Adjust the sliders to match your business. The math is industry-standard. The result will be uncomfortable. That's intentional."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$src$2f$components$2f$ROICalculator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onCalcChange: handleCalcChange
            }, void 0, false, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        id: "cta-stop-losing",
                        href: "sms:+1?body=DEMO",
                        className: " group relative inline-flex items-center gap-3  bg-red-600 hover:bg-red-500  text-white font-black text-lg md:text-xl  px-8 py-5 rounded-xl  shadow-lg shadow-red-900/50 hover:shadow-red-600/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 border border-red-500 ",
                        "aria-label": `Stop losing ${formatCurrency(calculatedLoss)} — Text DEMO`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-2.5 w-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-white opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            "Stop Losing",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "underline underline-offset-4 decoration-dotted",
                                children: formatCurrency(calculatedLoss)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            " ",
                            "— Text 'DEMO' Now",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5 group-hover:translate-x-1 transition-transform",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2.5,
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 text-xs mt-3",
                        children: "No commitment. 30-second setup. We reply instantly."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/ROISection.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Vectra-Automation/Vectral_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Vectra-Automation/Vectral_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function FAQSection() {
    const faqs = [
        {
            question: "How long does it take to set up?",
            answer: "Less than 48 hours. We handle everything from configuring the AI with your business knowledge to setting up the call forwarding and testing the SMS routing."
        },
        {
            question: "Will it sound like a generic robot?",
            answer: "No. The AI uses advanced, conversational voice models. It speaks naturally, pauses appropriately, and can handle complex, multi-turn conversations without frustrating your callers."
        },
        {
            question: "How do I get notified about a lead?",
            answer: "The moment a call ends, the AI instantly sends you a text message and an email with a summary of the call, including their name, phone number, and exactly what they need."
        },
        {
            question: "Do I have to change my phone number?",
            answer: "No. You keep your existing business number. We provide you with a dedicated AI line, and you simply set up 'Conditional Call Forwarding' (when busy or unanswered) to route missed calls to the AI."
        },
        {
            question: "What if the caller asks a question the AI doesn't know?",
            answer: "The AI is programmed to handle uncertainty gracefully. If it doesn't know the answer, it will politely inform the caller that it doesn't have that specific information, take down their details, and assure them a human will follow up shortly."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full max-w-4xl mx-auto px-4 sm:px-6 py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-white text-3xl md:text-5xl font-black leading-tight",
                    children: "Frequently Asked Questions"
                }, void 0, false, {
                    fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQItem, {
                        question: faq.question,
                        answer: faq.answer
                    }, index, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-slate-800 bg-slate-900 rounded-xl overflow-hidden transition-all duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full flex items-center justify-between p-6 text-left focus:outline-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold sm:text-lg",
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-red-500 transform transition-transform duration-300 ml-4 flex-shrink-0 ${isOpen ? "rotate-45" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M12 4v16m8-8H4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Vectra$2d$Automation$2f$Vectral_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-400 text-sm leading-relaxed",
                    children: answer
                }, void 0, false, {
                    fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Vectra-Automation/Vectral_website/src/components/FAQSection.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Vectra-Automation/Vectral_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/Vectra-Automation/Vectral_website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=Documents_Vectra-Automation_Vectral_website_0tw8t77._.js.map