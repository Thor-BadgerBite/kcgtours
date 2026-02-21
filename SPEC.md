# Avalon Kefalonia – Project Specification

## Primary Goal: REPLICA FIRST
**Your job is to build a pixel-perfect functional replica of the Avalon Travel Kefalonia website (`avalontravel-kefalonia.gr`) using modern React/TypeScript/Tailwind.** Study ALL reference files thoroughly before writing a single line of code. Every visual detail, every animation timing, every interaction behavior must match the original exactly. Hero, footer, navbar, cards, sliders — everything is a replica of the original. Customization comes LATER — first build it identical.

## Overview
A single-page React application for a private tour operator in Kefalonia, Greece. The site showcases tour categories with booking integration via Bokun widgets. No backend, no database — pure static frontend deployed on Vercel.

## Tech Stack
- **React 19** + **Vite** + **TypeScript**
- **Tailwind CSS v4** (utility-first, no custom CSS files)
- **Framer Motion** (all animations and transitions)
- **Embla Carousel** (replicate Owl Carousel + SP Slider behavior)
- **Lucide React** (icons)
- **pnpm** as package manager

## Reference Files
The `/reference/` folder contains the original static HTML site and ALL its libraries. These are **behavioral reference ONLY** — do NOT use jQuery, do NOT import any of these files into the React project. They are study material. Read every single one before writing code.

**Files to study:**
- `original.html` — full page structure, layout, content, all tour data, hero, navbar, footer
- `js_slider.js` — SP Page Builder slider engine: every behavior, timing, easing, progress bar logic
- `js_slider.css` — slider styles: dots, arrows, progress bar, captions
- `owl.carousel.js` — Owl Carousel engine: transition logic, touch handling, responsive breakpoints
- `owl_carousel.css` — carousel styles
- `sppagebuilder.css` — grid system and layout

**What to replicate exactly:**
- Slide transition: `fade` crossfade, `700ms`, same easing as original
- Progress bar: `4px` thin bar at bottom of slide, fills `0→100%` over `5000ms`, pauses on hover, resets on manual navigation
- Dot indicators: circular `12px×12px`, `border: 2px solid rgba(255,255,255,0.6)`, active fills white, `border-radius: 18px`
- Arrow controls: `40px×40px` circular, `border: 1px solid rgba(255,255,255,0.7)`, `background: rgba(0,0,0,0.15)`, hover → `rgba(0,0,0,0.4)`, angle-left/right icons
- Slide captions: white text + shadow, bottom-left of image, `fadeInDown` animation on slide enter, title first then subtitle with `200ms` stagger
- Autoplay: OFF (`data-autoplay="false"`), user-controlled
- Slider height: `550px` desktop, `600px` tablet, `350px` mobile
- All Owl Carousel responsive breakpoints and behavior

## Page Structure (Single Page, scroll-based)

### 1. Navbar
- Replica of original navbar from `original.html`
- Logo, navigation links, same styling

### 2. Hero Section
- Full viewport height (`100vh`)
- Replica of original hero from `original.html`
- Same background, same text, same animations

### 3. Tour Category Sections (repeat for each category)
Each category section with:

**Section Header:**
- Large `title` (e.g. "Bus Tours")
- `subtitle` below
- Same styling as original

**Tour Cards Grid:**
- 3 cards per row, full viewport height (`100vh`) cards
- CSS Grid: `grid-cols-3`, gap between cards
- Each card is a `TourCard` component
- Responsive: 2 cols tablet, 1 col mobile

**Tour Categories:**
1. **Bus Tours** — title: "Kefalonia Bus Tours", subtitle: "Discover the island's highlights in comfort"
2. **Cruises** — title: "Island Cruises", subtitle: "Sail the Ionian Sea in style"
3. **Shore Excursions** — title: "Shore Excursions", subtitle: "Perfect for cruise ship passengers"
4. **Activities** — title: "Activities & Experiences", subtitle: "Unforgettable moments on the island"

### 4. Contact Form Section
- Replica of original contact section
- Fields: Name, Email, Phone, Message, tour dropdown
- Submit via Formspree (add placeholder)
- Same styling as original

### 5. Footer
- Replica of original footer from `original.html`
- Same layout, same links, same styling

---

## TourCard Component (`/src/components/TourCard.tsx`)

This is the core reusable component. Build it carefully — it must be pixel-perfect.

### Props Interface:
```typescript
interface TourCardProps {
  slides: {
    image: string;
    title: string;
    subtitle?: string;
  }[];
  tourTitle: string;
  duration: string;
  bokunProductId: string;
}
```

### Visual Structure:
```
┌─────────────────────────┐
│                         │  ← Embla Carousel (full card height)
│     [slide image]       │
│                         │
│  ← prev    next →       │  ← arrows (appear on hover)
│                         │
│  Title                  │  ← caption bottom-left, fadeInDown
│  Subtitle               │
│ ●●○○  ████░░░░░░░░░░░  │  ← dots left, progress bar right
└─────────────────────────┘
│  Tour Title             │
│  Duration               │
│  [Book Now]             │  ← opens Bokun widget
└─────────────────────────┘
```

### Bokun Integration:
```typescript
// Book Now button triggers:
window.BokunWidget?.open(bokunProductId)
// Bokun script loaded in index.html <head>
```

---

## Animation Guidelines (Framer Motion)
- Replicate ALL animations from original exactly
- **Slide captions:** `fadeInDown` when slide becomes active, staggered
- **Progress bar:** `scaleX` 0→1 over 5s, pause on hover, reset on nav
- **Cards on scroll:** fade up, staggered per card (same as original)
- **Section headers:** fade in on scroll
- **Hero:** same entrance as original
- **Card hover:** subtle scale `1.02`

---

## File Structure
```
/src
  /components
    TourCard.tsx
    TourSection.tsx
    Hero.tsx
    Navbar.tsx
    ContactForm.tsx
    Footer.tsx
  /data
    tours.ts             ← all tour data from original.html
  /types
    index.ts
  App.tsx
  main.tsx
  index.css              ← Tailwind imports only

/reference               ← study material, DO NOT IMPORT
  original.html
  js_slider.js
  js_slider.css
  owl.carousel.js
  owl_carousel.css
  sppagebuilder.css

SPEC.md
```

---

## Data (`/src/data/tours.ts`)
Extract ALL tour data (titles, images, durations, slide content) directly from `reference/original.html`. Use the exact same images (they are hosted on `avalontravel-kefalonia.gr` — use the full URLs).

```typescript
export const tourCategories = [
  {
    id: "bus-tours",
    title: "Kefalonia Bus Tours",
    subtitle: "Discover the island's highlights in comfort",
    tours: [
      {
        tourTitle: "Full Island Discovery",
        duration: "Full Day · 8 Hours",
        bokunProductId: "REPLACE_WITH_BOKUN_ID",
        slides: [
          { image: "https://avalontravel-kefalonia.gr/...", title: "Enchanting Blue", subtitle: "Melissani Lake" },
          // extract all slides from original.html
        ]
      },
    ]
  },
  // all categories
]
```

---

## Key Requirements
1. **REPLICA FIRST** — match the original visually and functionally before any customization
2. **No jQuery** — zero jQuery in the React project
3. **No external CSS libraries** — Tailwind only
4. **TypeScript strict** — no `any` types
5. **TourCard pixel-accurate** to reference slider behavior
6. **All content from original.html** — same images, same text, same tours
7. **Mobile-first** responsive
8. **Bokun script** placeholder in `index.html`
9. The goal is: someone looking at both sites side by side cannot tell the difference
