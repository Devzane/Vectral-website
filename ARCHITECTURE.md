# Next.js Architecture Explained: HTML, CSS, and JS Modernized

If you are used to building websites by dropping `index.html`, `style.css`, and `script.js` into a folder, the structure of this project probably looks alien. 

You requested a **Next.js + Tailwind CSS** landing page, which is the current state-of-the-art enterprise standard for building web applications. 

Next.js doesn't use raw HTML/CSS/JS files directly. Instead, it uses **React** and **TypeScript** (represented by `.tsx` files) to generate the HTML, CSS, and JS automatically.

This document bridges the gap between what you know (HTML/CSS/JS) and what we built.

---

## 1. Where is the HTML?

**Answer: It is inside the `.tsx` files.**

In traditional web development, you write HTML tags. In Next.js, we write **JSX/TSX**, which is literally just HTML embedded directly inside JavaScript/TypeScript functions.

* **Look at `src/app/page.tsx`:** This file is the equivalent of your `index.html`. It contains the `<header>`, `<h1>`, and `<section>` tags for the main landing page.
* **Look at `src/app/layout.tsx`:** This file contains the foundational `<html>` and `<body>` tags that wrap every page on your site. It also contains the `<head>` metadata (Title, SEO tags).

Next.js takes these `.tsx` files, runs them through a server, and spits out perfectly optimized `.html` files for the browser to read.

---

## 2. Where is the CSS?

**Answer: It is written directly into the HTML tags using Tailwind CSS.**

If you open `src/app/page.tsx`, you won't see `class="my-container"`. Instead, you will see `className="w-full max-w-5xl mx-auto px-4 text-center"`.

This is **Tailwind CSS**. Instead of writing separate CSS files, we apply tiny, pre-made CSS utility classes directly to the elements:
* `text-white` = sets the text color to white.
* `text-center` = aligns text to the center.
* `bg-slate-900` = sets a dark blue/gray background.

There is *one* actual CSS file: `src/app/globals.css`. We use this only to define the foundational background colors and the custom styling for the range sliders. Everything else is handled by Tailwind.

---

## 3. Where is the JavaScript?

**Answer: It is built right into the components.**

In classic web dev, you write a `<button>` in HTML, give it an `id="my-btn"`, and then write `document.getElementById('my-btn').addEventListener('click', ...)` in a separate `script.js` file.

In Next.js, the HTML and the JavaScript logic live in the exact same file.

* **Look at `src/components/ROICalculator.tsx`:**
  This file contains both the visual UI (the HTML sliders) and the math logic (the JavaScript).
  
  At the top of the file, you see `const [weeklyCallVolume, setWeeklyCallVolume] = useState(50);`. This is React predicting and managing state. When you move the slider, this JavaScript updates the math immediately, forcing the HTML to instantly redraw with the new `$10,183,680` number.

* **Notice the `"use client";` tag at the top of some files?**
  Next.js runs most of your code on the backend server to make the website load instantly. However, if a component needs interactive JavaScript (like a slider you can drag, or an FAQ accordion you can click), we must add `"use client";` to the top of the file to tell Next.js: *"Send this specific JavaScript to the user's browser."*

---

## 4. Why did we build it this way?

You are building Vectra Automation—an AI Automation Agency. If you want to impress HVAC and Real Estate owners, your website cannot just look okay; it has to feel premium, instantaneous, and highly engineered.

1. **Component Reusability:** Instead of copying and pasting the FAQ HTML 5 times, we write the `<FAQItem>` logic once and feed it data.
2. **Performance (Speed):** Next.js pre-compiles the code. When a user visits Vectra Automation, the page loads instantly because the server has already calculated the HTML.
3. **State Management:** The ROI Calculator requires dynamic math that updates the final Call-to-Action button instantly. Syncing complex logic like this with plain `script.js` quickly becomes a tangled mess. React handles it elegantly.

## Summary Mapping

| Old Way | Modern Way (Next.js) | Where is it in this project? |
| :--- | :--- | :--- |
| `index.html` | `page.tsx` | `src/app/page.tsx` |
| `style.css` | Tailwind Classes | Scattered across all `.tsx` files (`className=""`) |
| `script.js` | React State / Hooks | Inside `ROISection.tsx` and `ROICalculator.tsx` |
| `<head>` tags | Next.js Metadata API | Top of `src/app/layout.tsx` |

Run the server using `npm run dev` and explore `src/app/page.tsx` while looking at the browser. Any changes you make to the HTML in that file will instantly update the browser.
