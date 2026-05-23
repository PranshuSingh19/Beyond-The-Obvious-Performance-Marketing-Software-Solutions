# Beyond The Obvious — Performance Marketing & Technology Agency

A modern, high-performance agency website for **Beyond The Obvious** — a full-service agency offering Performance Marketing, Software & Technology Solutions, Growth Marketing, Branding & Creative, and Workforce Staffing.

Built with **React 19**, **Vite 8**, **Tailwind CSS**, **GSAP**, and **Lenis** smooth scroll.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| GSAP + ScrollTrigger | 3.15 | Scroll animations & pinning |
| Lenis | 1.3 | Smooth scroll engine |
| PostCSS + Autoprefixer | 8 / 10 | CSS processing |

---

## 📁 Project Structure

```
performance-agency/
├── public/
│   ├── fab-icon.png               # Browser favicon
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── main-logo.png          # Brand logo (full)
│   │   ├── logo-s.png             # Brand logo (compact, used in Navbar)
│   │   ├── hero.png               # Hero section image
│   │   ├── about.png              # About section image
│   │   ├── IT-about.jpg           # Software & Tech section image
│   │   ├── PM-images.webp         # Performance marketing image
│   │   └── fab-icon.png           # Favicon source
│   ├── components/
│   │   ├── Navbar.jsx             # Fixed nav with active section tracking & smooth scroll
│   │   ├── Hero.jsx               # Full-screen hero with particle canvas & GSAP scroll-out
│   │   ├── About.jsx              # Agency story, stats, and why-us section
│   │   ├── Services.jsx           # Expandable service cards overview
│   │   ├── SoftwareTech.jsx       # Software & Technology Solutions section
│   │   ├── GrowthMarketing.jsx    # Growth Marketing — sticky left panel + scrolling items
│   │   ├── BrandingCreative.jsx   # Branding & Creative Solutions section
│   │   ├── WorkforceStaffing.jsx  # Workforce & Staffing Solutions section
│   │   ├── Clients.jsx            # Client logos, results, and testimonials
│   │   ├── Contact.jsx            # Contact form with validation & success state
│   │   └── Footer.jsx             # Footer with links and social icons
│   ├── App.jsx                    # Root component — Lenis + GSAP setup
│   ├── index.css                  # Tailwind directives + all custom CSS
│   └── main.jsx                   # React entry point
├── index.html                     # SEO meta tags, OG tags, Twitter card
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## ✨ Features

- **Smooth Scroll** — Lenis smooth scroll engine bridged with GSAP ScrollTrigger
- **Particle Canvas Hero** — animated particle network on full-screen hero
- **GSAP Scroll Animations** — pinned hero, scroll-triggered reveals, stagger effects
- **Sticky Left Panel** — Growth Marketing section with sticky left panel tracking active item
- **Fully Responsive** — mobile (320px+), tablet, and desktop layouts
- **Contact Form** — field validation, loading state, and success confirmation
- **Active Nav Tracking** — navbar highlights current section on scroll
- **SEO Optimized** — title, meta description, Open Graph, and Twitter Card tags
- **Favicon** — custom brand favicon (`/fab-icon.png`)
- **Gradient & Glow UI** — premium purple brand theme with glassmorphism effects

---

## 📄 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Full-screen intro with particle animation and scroll-out effect |
| 2 | **About** | Agency story, core values, and key stats |
| 3 | **Services** | Overview of all service offerings with expandable cards |
| 4 | **Software & Technology** | Custom software, web & app development solutions |
| 5 | **Growth Marketing** | Performance campaigns, Google/Meta Ads, lead generation |
| 6 | **Branding & Creative** | Brand identity, design, and creative strategy |
| 7 | **Workforce Staffing** | Talent acquisition and staffing solutions |
| 8 | **Clients** | Client logos, case study results, and testimonials |
| 9 | **Contact** | Strategy call booking form |
| 10 | **Footer** | Links, social icons, and brand info |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Navigate to the project folder
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

## � Scripts

```bash
npm run dev       # Start dev server → localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## 🎨 Brand Design Tokens

| Token | Value | Usage |
|---|---|---|
| Primary Purple | `#53105B` | Buttons, accents, borders |
| Secondary Purple | `#8B1A9A` | Gradients, highlights |
| Background | `#F8F7FF` | Page background |
| Text Dark | `#1A1A2E` | Headings |
| Text Silver | `#6B6B7A` | Body / subtext |
| Font | System / Display | `font-display` class |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Behaviour |
|---|---|---|
| Mobile | < 768px | Single-column, stacked layout, sticky disabled |
| Tablet | 768px – 1024px | 2-column grids, reduced spacing |
| Desktop | > 1024px | Full multi-column layout, sticky panels active |

---

## � SEO

The `index.html` includes:

- **Title** — `Beyond The Obvious | Performance Marketing, Software & Technology Solutions`
- **Meta Description** — Service-focused, under 160 characters
- **Meta Keywords** — Performance marketing, growth, software, IT, branding
- **Open Graph** — For Facebook and LinkedIn share previews
- **Twitter Card** — `summary_large_image` format
- **Robots** — `index, follow`

Update `og:url` in `index.html` with your live domain before deploying.

---

## 📝 Notes

- All GSAP animations use `gsap.context()` for proper cleanup on unmount.
- Lenis scroll is bridged to GSAP ticker via `lenis.on('scroll', ScrollTrigger.update)` — required for pinned sections to work correctly.
- Favicon must be placed in `public/` folder (not `src/assets/`) for Vite to serve it at the root path.
- Custom CSS classes (`.gm-*`, `.st-*`, `.bc-*`) are defined in `src/index.css` alongside Tailwind directives.

---

## 📬 Contact

**Beyond The Obvious**
- 🌐 Website: [beyondtheobvious.in](https://beyondtheobvious.in)
- 📧 Email: info@beyondtheobvious.in
- 📍 Location: India
