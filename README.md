# Vectral Automation — Landing Page

> **AI-Powered Receptionist for HVAC & Real Estate Professionals.**
> A high-conversion, single-page landing site built with Next.js 16, React 18, Tailwind CSS 3, and TypeScript.

---

## Purpose

This is the public-facing marketing website for **Vectral Automation**. It is designed around the **PAS (Problem-Agitate-Solution)** direct-response copywriting framework to convert HVAC and Real Estate business owners into warm leads.

The centerpiece of the page is an interactive **Missed Revenue Calculator** that forces the visitor to confront the dollar amount they are losing annually from missed calls — and then presents Vectral's AI receptionist as the solution.

---

## Tech Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| Framework | Next.js 16 (App Router) | Server-side rendering, routing, SEO |
| UI Library | React 18 | Component-based UI |
| Language | TypeScript 5 | Static type safety |
| Styling | Tailwind CSS 3.4 | Utility-first CSS classes |
| Build Tool | Turbopack | Fast local dev compilation |

---

## Project Structure

```
Vectral_website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global CSS, custom slider styles, Inter font import
│   │   ├── layout.tsx           # Root <html>/<body>, SEO metadata, Open Graph tags
│   │   └── page.tsx             # Main landing page (Server Component) — assembles all sections
│   │
│   └── components/
│       ├── ROICalculator.tsx     # Interactive missed-revenue calculator (client component)
│       ├── ROISection.tsx        # Client wrapper — shares calculator state with CTA button
│       ├── OvernightAdvantageSection.tsx  # "Overnight Advantage" value prop section
│       ├── FeaturesSection.tsx   # 3-column feature grid (24/7, Qualification, CRM)
│       ├── HowItWorksSection.tsx # 3-step process timeline
│       ├── TestimonialsSection.tsx # ICP use-case cards (HVAC, Contractor, Agent)
│       ├── FAQSection.tsx        # Interactive accordion FAQ (client component)
│       └── FinalCTASection.tsx   # Full-width red CTA banner
│
├── ARCHITECTURE.md              # Explanation of Next.js concepts for HTML/CSS/JS developers
├── tailwind.config.ts           # Tailwind content paths, Inter font, gradient utilities
├── postcss.config.js            # PostCSS plugin config for Tailwind
├── tsconfig.json                # TypeScript compiler options, path aliases (@/*)
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies and scripts
```

---

## Page Sections (Top to Bottom)

| # | Section | Component | Type | Description |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Navbar** | Inline in `page.tsx` | Server | Sticky header with logo and "Book a Free System Audit" CTA |
| 2 | **Hero** | Inline in `page.tsx` | Server | Problem headline, sub-copy with industry stats, capability metrics |
| 3 | **ROI Calculator** | `ROISection.tsx` → `ROICalculator.tsx` | Client | 3 interactive sliders, hardcoded industry constants, dynamic loss output |
| 4 | **Overnight Advantage** | `OvernightAdvantageSection.tsx` | Server | Value proposition section |
| 5 | **Features** | `FeaturesSection.tsx` | Server | 3-card grid: 24/7 Availability, Instant Qualification, CRM Integration |
| 6 | **How It Works** | `HowItWorksSection.tsx` | Server | 3-step numbered timeline |
| 7 | **Use Cases** | `TestimonialsSection.tsx` | Server | 3 ICP scenario cards (HVAC Owner, Contractor, Real Estate Agent) |
| 8 | **FAQ** | `FAQSection.tsx` | Client | 5-item interactive accordion |
| 9 | **Final CTA** | `FinalCTASection.tsx` | Server | Full-width red banner with SMS deep-link |
| 10 | **Footer** | Inline in `page.tsx` | Server | Contact email + copyright |
| 11 | **Chat Widget** | Inline in `page.tsx` | Server | Floating bottom-right chat bubble |

---

## ROI Calculator Formula

The calculator is the core conversion mechanism. It computes the annual revenue a business owner is losing from unanswered calls.

### User Inputs (Adjustable via Sliders)

| Input | Default | Range |
| :--- | :--- | :--- |
| Weekly Call Volume | 50 | 10 – 500 |
| Average Job Value | $8,000 | $500 – $50,000 |
| Close Rate | 30% | 5% – 80% |

### Hardcoded Industry Constants

| Constant | Value | Source |
| :--- | :--- | :--- |
| Missed Call Rate | 30% | Industry standard for unanswered inbound calls |
| Voicemail Drop-off Rate | 85% | Percentage of callers who hang up on voicemail |

### Formula

```
Annual Revenue Lost = (Weekly Calls * 52) * 0.30 * 0.85 * (Close Rate / 100) * Avg Job Value
```

**Default output:** `(50 * 52) * 0.30 * 0.85 * 0.30 * 8000` = **$158,040**

---

## Local Development

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Setup

```bash
# Navigate to the project directory
cd "C:\Users\Zeetha Robotics\Documents\Vectra-Automation\Vectral_website"

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`. Changes to `.tsx` files are reflected instantly via Next.js hot-reload.

### Production Build

```bash
# Compile an optimized production bundle
npm run build

# Serve the production build locally
npm start
```

---

## Architecture Notes

This project uses the **Next.js App Router** pattern. There are two important concepts:

1.  **Server Components** (default): Files like `page.tsx` and `FeaturesSection.tsx` render on the server. They produce static HTML that loads instantly — great for SEO and performance.

2.  **Client Components** (`"use client"`): Files like `ROICalculator.tsx` and `FAQSection.tsx` declare `"use client"` at the top. This tells Next.js to ship the JavaScript for these components to the user's browser so interactive features (sliders, accordions) work.

The `ROISection.tsx` component acts as a **client wrapper** that holds the shared state between the ROI Calculator and the CTA button below it. This is the standard pattern for lifting state up in the App Router without marking the entire page as a client component.

For a full explanation of how Next.js maps to traditional HTML/CSS/JS concepts, see [ARCHITECTURE.md](./ARCHITECTURE.md).

---

## Contact

**Vectral Automation**
Email: abdulmuiz@vectralautomation.tech
