# Lumina Sites Co. - Complete Site Specification

> **Version**: 1.0  
> **Last Updated**: January 2026  
> **Tech Stack**: React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Business Offering](#business-offering)
3. [Technical Architecture](#technical-architecture)
4. [Component Breakdown](#component-breakdown)
5. [Design System](#design-system)
6. [Animation System](#animation-system)
7. [User Journey](#user-journey)
8. [Dependencies](#dependencies)

---

## Executive Summary

**Lumina Sites Co.** is a boutique web design agency specializing in luxury salon websites. This landing page serves as both a portfolio piece and lead generation tool, featuring a cinematic scroll-driven experience that demonstrates the agency's design capabilities.

### Core Value Proposition
- Custom-designed websites for nail salons, hair salons, and beauty businesses
- Mobile-first, SEO-optimized builds
- Transparent pricing with no hidden fees
- Ongoing maintenance and support

---

## Business Offering

### Services Included

| Feature | Description |
|---------|-------------|
| **Custom Design** | Bespoke layouts tailored to each salon's brand |
| **Mobile Optimization** | Responsive design that works on all devices |
| **SEO Setup** | Search engine optimization for local visibility |
| **Domain & Hosting** | Full management of technical infrastructure |
| **Booking Integration** | Connect with Calendly, Acuity, or similar |
| **Gallery System** | Showcase nail art and salon work |
| **Contact Forms** | Lead capture with email notifications |

### Pricing Model

```
┌─────────────────────────────────────────────────────────┐
│                    BUILD & CARE                          │
├─────────────────────────────────────────────────────────┤
│  One-Time Build Fee:     $699                           │
│  Monthly Care Fee:       $99/month                      │
│                                                         │
│  Includes:                                              │
│  • Custom 4-5 page website                              │
│  • Mobile-responsive design                             │
│  • Domain registration & hosting                        │
│  • SSL certificate                                      │
│  • Monthly updates (up to 2 hours)                      │
│  • Technical support                                    │
│  • Performance monitoring                               │
│  • Security updates                                     │
└─────────────────────────────────────────────────────────┘
```

### Website Pages Delivered

1. **Home** - Hero section, services overview, testimonials
2. **Services** - Detailed service menu with pricing
3. **Gallery** - Portfolio of nail art and salon work
4. **About** - Salon story, team bios
5. **Contact** - Form, map, hours, booking link

---

## Technical Architecture

### Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── CinematicHeroV4.tsx    # Main scroll experience (800vh)
│   │   ├── PricingSection.tsx     # Pricing display
│   │   ├── CTASection.tsx         # Call-to-action
│   │   ├── Footer.tsx             # Site footer
│   │   └── [legacy sections...]   # Previous iterations
│   ├── ui/                        # shadcn/ui components
│   ├── AnimatedBrandMark.tsx      # SVG logo animation
│   ├── BookingModal.tsx           # Calendly integration
│   ├── LoadingIntro.tsx           # Initial loading animation
│   └── Navbar.tsx                 # Navigation header
├── pages/
│   ├── Index.tsx                  # Main landing page
│   └── NotFound.tsx               # 404 page
├── assets/                        # Static images
├── hooks/                         # Custom React hooks
├── lib/                           # Utilities
└── index.css                      # Global styles & design tokens
```

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI framework |
| Vite | Latest | Build tool & dev server |
| TypeScript | Latest | Type safety |
| Tailwind CSS | Latest | Utility-first styling |
| Framer Motion | 12.29.0 | Animations |
| Lenis | 1.3.17 | Smooth scrolling |
| shadcn/ui | Latest | Component library |
| React Router | 6.30.1 | Client-side routing |

---

## Component Breakdown

### CinematicHeroV4.tsx - The Main Experience

This is the heart of the site - an 800vh scroll-driven cinematic journey.

#### Scene Architecture

```
┌────────────────────────────────────────────────────────────────┐
│  SCENE 0: Brand Reveal (0% - 10% scroll)                       │
│  ├── AnimatedBrandMark SVG draw-in animation                   │
│  ├── "LUMINA" typewriter text reveal                           │
│  ├── "SITES CO." staggered letter animation                    │
│  └── Tagline fade-in: "Websites that shine"                    │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│  SCENE 1: Empty Browser (10% - 25% scroll)                     │
│  ├── Browser chrome mockup (address bar, buttons)              │
│  ├── Empty gray placeholder screen                             │
│  ├── "Your salon deserves better" headline                     │
│  └── Cursor blink animation                                    │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│  SCENE 2: Wireframe Phase (25% - 45% scroll)                   │
│  ├── Browser with wireframe sketch inside                      │
│  ├── Hand-drawn style boxes and lines                          │
│  ├── "We start with your vision" headline                      │
│  └── Sketch overlay effect                                     │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│  SCENE 3: Design Polish (45% - 65% scroll)                     │
│  ├── Wireframe transforms to polished design                   │
│  ├── Color fills in, typography refines                        │
│  ├── "Then bring it to life" headline                          │
│  └── Shimmer/glow effects                                      │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│  SCENE 4: Live Demo (65% - 85% scroll)                         │
│  ├── Full browser mockup with live iframe                      │
│  ├── Loads: https://sunsetnails.lovable.app                    │
│  ├── Interactive - users can scroll within iframe              │
│  ├── "See it in action" headline                               │
│  └── Annotation labels pointing to features                    │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│  SCENE 5: Call-to-Action (85% - 100% scroll)                   │
│  ├── Dark gradient background                                  │
│  ├── "Ready to stand out?" headline                            │
│  ├── "Book a free consultation" CTA button                     │
│  ├── Opens BookingModal with Calendly                          │
│  └── Floating particle effects                                 │
└────────────────────────────────────────────────────────────────┘
```

#### Key Technical Features

```typescript
// Scroll-driven animations using Framer Motion
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ['start start', 'end end']
});

// Scene visibility transforms
const scene0Opacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);
const scene1Opacity = useTransform(scrollYProgress, [0.10, 0.15, 0.23, 0.28], [0, 1, 1, 0]);
const scene2Opacity = useTransform(scrollYProgress, [0.25, 0.30, 0.43, 0.48], [0, 1, 1, 0]);
const scene3Opacity = useTransform(scrollYProgress, [0.45, 0.50, 0.63, 0.68], [0, 1, 1, 0]);
const scene4Opacity = useTransform(scrollYProgress, [0.65, 0.70, 0.83, 0.88], [0, 1, 1, 0]);
const scene5Opacity = useTransform(scrollYProgress, [0.85, 0.92], [0, 1]);
```

### AnimatedBrandMark.tsx

SVG logo with draw-in animation:

```typescript
// Path drawing animation
const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 }
    }
  }
};
```

### BookingModal.tsx

Calendly integration modal:

```typescript
// Modal with Calendly embed
<Dialog>
  <DialogContent>
    <iframe 
      src="https://calendly.com/your-link"
      className="w-full h-[600px]"
    />
  </DialogContent>
</Dialog>
```

### LoadingIntro.tsx

Initial page load animation:
- Lumina logo fade-in
- Progress bar animation
- Smooth transition to main content

---

## Design System

### Color Palette

```css
/* Primary Brand Colors */
--lumina-gold: 43 74% 49%;      /* #D4A853 - Primary accent */
--lumina-gold-light: 43 74% 65%; /* Lighter gold for hovers */
--lumina-gold-dark: 43 74% 35%;  /* Darker gold for depth */

/* Neutral Palette */
--lumina-cream: 40 33% 96%;      /* #F7F4EF - Light backgrounds */
--lumina-cream-dark: 40 20% 90%; /* Slightly darker cream */
--lumina-ink: 220 20% 10%;       /* #161821 - Primary text */
--lumina-ink-light: 220 15% 25%; /* Secondary text */

/* UI Colors */
--background: 40 33% 96%;        /* Page background */
--foreground: 220 20% 10%;       /* Default text */
--primary: 43 74% 49%;           /* Primary buttons */
--primary-foreground: 40 33% 96%;/* Text on primary */
--muted: 40 20% 90%;             /* Muted backgrounds */
--muted-foreground: 220 15% 40%; /* Muted text */
--accent: 43 74% 49%;            /* Accent elements */
--border: 40 20% 85%;            /* Border color */
```

### Typography Scale

```css
/* Fluid Typography */
--text-fluid-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-fluid-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-fluid-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-fluid-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--text-fluid-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-fluid-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
--text-fluid-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
--text-fluid-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3rem);
--text-fluid-5xl: clamp(3rem, 2rem + 5vw, 4.5rem);
```

### Spacing System

Uses Tailwind's default spacing scale with custom extensions:
- `p-section`: Section padding (responsive)
- `gap-card`: Card gap spacing
- `mt-hero`: Hero section top margin

---

## Animation System

### Framer Motion Configurations

```typescript
// Stagger container for child animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Fade up animation for elements
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Scale animation for emphasis
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
```

### CSS Animations

```css
/* Shimmer effect for gold elements */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Float animation for decorative elements */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Pulse glow for CTAs */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px hsl(var(--lumina-gold) / 0.3); }
  50% { box-shadow: 0 0 40px hsl(var(--lumina-gold) / 0.5); }
}
```

### Lenis Smooth Scroll

```typescript
// Smooth scroll configuration
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true
});
```

---

## User Journey

### Flow Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   ARRIVE    │ ──▶ │   LOADING   │ ──▶ │   SCROLL    │
│  (URL hit)  │     │   INTRO     │     │  EXPERIENCE │
└─────────────┘     └─────────────┘     └─────────────┘
                                               │
                    ┌──────────────────────────┴──────────────────────────┐
                    ▼                          ▼                          ▼
             ┌─────────────┐           ┌─────────────┐           ┌─────────────┐
             │   SCENE 0   │           │ SCENE 1-3   │           │   SCENE 4   │
             │ Brand Intro │           │ Story/Build │           │  Live Demo  │
             └─────────────┘           └─────────────┘           └─────────────┘
                                                                        │
                    ┌───────────────────────────────────────────────────┘
                    ▼
             ┌─────────────┐           ┌─────────────┐           ┌─────────────┐
             │   SCENE 5   │ ──────▶   │   BOOKING   │ ──────▶   │  CALENDLY   │
             │     CTA     │           │    MODAL    │           │   MEETING   │
             └─────────────┘           └─────────────┘           └─────────────┘
```

### Key Interaction Points

1. **Scroll Progress Indicator** - Dot navigation showing current scene
2. **CTA Button** - Persistent floating button (appears after Scene 0)
3. **Live Demo Iframe** - Interactive website preview
4. **Booking Modal** - Calendly embed for scheduling

---

## Dependencies

### Production Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.30.1",
  "framer-motion": "^12.29.0",
  "lenis": "^1.3.17",
  "lucide-react": "^0.462.0",
  "tailwind-merge": "^2.6.0",
  "tailwindcss-animate": "^1.0.7",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "@radix-ui/react-dialog": "^1.1.14",
  "@radix-ui/react-tooltip": "^1.2.7",
  "@tanstack/react-query": "^5.83.0",
  "sonner": "^1.7.4",
  "zod": "^3.25.76"
}
```

### Development Dependencies

```json
{
  "vite": "latest",
  "typescript": "latest",
  "tailwindcss": "latest",
  "postcss": "latest",
  "autoprefixer": "latest",
  "vitest": "latest"
}
```

---

## File Manifest

### Active Components

| File | Lines | Description |
|------|-------|-------------|
| `CinematicHeroV4.tsx` | ~500 | Main scroll experience |
| `AnimatedBrandMark.tsx` | ~100 | SVG logo animation |
| `BookingModal.tsx` | ~80 | Calendly integration |
| `LoadingIntro.tsx` | ~60 | Initial loading screen |
| `Navbar.tsx` | ~150 | Navigation header |
| `Footer.tsx` | ~100 | Site footer |

### Design Tokens

| File | Purpose |
|------|---------|
| `index.css` | CSS variables, animations, utilities |
| `tailwind.config.ts` | Tailwind theme extensions |

### Legacy Components (Preserved)

These files exist but are not currently used in the main experience:

- `CinematicHero.tsx`, `CinematicHeroV2.tsx` - Previous iterations
- `HeroSection.tsx`, `AboutSection.tsx` - Original sections
- `ProcessSection.tsx`, `FAQSection.tsx` - Removed from flow
- Various UI components from shadcn/ui

---

## Deployment Notes

### Build Command
```bash
npm run build
# or
bun run build
```

### Preview Command
```bash
npm run preview
# or
bun run preview
```

### Environment Variables
Currently none required. Calendly URL is hardcoded in `BookingModal.tsx`.

### Performance Considerations

1. **Iframe Loading** - Live demo iframe loads external site
2. **Animation Performance** - Uses CSS transforms for GPU acceleration
3. **Image Optimization** - Assets in `src/assets/` are processed by Vite
4. **Bundle Size** - Tree-shaking removes unused shadcn/ui components

---

## Future Enhancements

- [ ] Add Calendly URL configuration via environment variable
- [ ] Implement contact form with backend integration
- [ ] Add more demo sites to showcase
- [ ] Create admin panel for content management
- [ ] Add analytics tracking (Plausible/Fathom)
- [ ] Implement dark/light mode toggle
- [ ] Add testimonials section with real client quotes
- [ ] Create case study pages for each demo site

---

*Generated for Lumina Sites Co. - January 2026*
