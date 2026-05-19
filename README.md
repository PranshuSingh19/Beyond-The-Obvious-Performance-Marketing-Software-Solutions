# Performance-Marketing-Agency
# GrowthAgency — Performance Marketing Landing Page

A modern, high-converting landing page for a **360° Performance Marketing Agency**, built with React, Vite, and Tailwind CSS. Inspired by [techeasify.com](https://techeasify.com/).

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| PostCSS | 8 | CSS processing |
| Autoprefixer | 10 | CSS vendor prefixes |

---

## 📁 Project Structure

```
performance-agency/
├── public/
├── src/
│   ├── assets/
│   │   └── PM-images.png          # Hero section image
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky nav with active section tracking
│   │   ├── Hero.jsx               # Hero with animated counters & stats
│   │   ├── Ticker.jsx             # Scrolling marquee ticker strip
│   │   ├── About.jsx              # About us, why us cards, timeline
│   │   ├── Services.jsx           # 8-service grid + 4-step process
│   │   ├── Clients.jsx            # Logo marquee, case studies, testimonials
│   │   ├── FAQ.jsx                # Accordion FAQ section
│   │   ├── Partners.jsx           # Technology & media partner badges
│   │   ├── Contact.jsx            # Contact form with validation
│   │   └── Footer.jsx             # CTA banner + 4-column footer
│   ├── App.jsx                    # Root component
│   ├── index.css                  # Tailwind directives + custom utilities
│   └── main.jsx                   # React entry point
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## ✨ Features

- **Fully Responsive** — mobile (≥320px), tablet, and desktop layouts
- **Scroll Animations** — `IntersectionObserver`-based reveal on every section
- **Animated Counters** — numbers count up when scrolled into view
- **Infinite Marquee** — dual-direction scrolling client logo strip (40+ brands)
- **Testimonial Carousel** — auto-rotating with manual dot navigation
- **Contact Form** — full validation, budget selector chips, success state
- **Sticky Navbar** — active section highlighting + smooth scroll
- **Glassmorphism & Glow Effects** — premium UI shadows and blur effects
- **Gradient Borders & Buttons** — animated hover transitions

---

## 📄 Sections

1. **Home** — Hero with image, stats, progress bars, CTA buttons
2. **About Us** — Agency story, why-us cards, milestone timeline
3. **Services** — Meta Ads, Google Ads, Amazon, SEO, Email, Social, Web Dev, Branding
4. **Clients** — 40+ brand logos, case studies, testimonials
5. **Contact Us** — Strategy call booking form
6. **FAQ** — 8 common questions with accordion
7. **Partners** — Technology & media partner badges
8. **Footer** — CTA banner, links, social icons

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone or navigate to the project folder
cd performance-agency

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Behaviour |
|---|---|---|
| Mobile | < 485px | Single-column form fields, stacked layout |
| Tablet | ≥ 640px | 2-column grids |
| Desktop | ≥ 1024px | Full multi-column layout |

---

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Primary Blue | `#2563eb` |
| Primary Purple | `#7c3aed` |
| Accent Cyan | `#06b6d4` |
| Font | Inter (Google Fonts) |
| Border Radius | `0.75rem` – `1.5rem` |

---

## 📦 Scripts

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 📝 Notes

- All dynamic gradient classes use **inline styles** to ensure Tailwind's JIT scanner picks them up correctly.
- The `min-[485px]:` breakpoint is used for the contact form to stack fields on screens ≤ 484px.
- Images should be placed in `src/assets/` and imported directly in components for Vite to bundle and hash them.

---

## 📬 Contact Info (Demo)
Author: Pranshu Singh Baghel
