

# Integration Plan: Cinematic Dark Theme Redesign

## Overview

This plan integrates your uploaded files into the existing project, transforming it from a cream/terracotta light theme into a dark amber/gold cinematic experience inspired by jeskojets.com.

---

## What Changes

### Visual Transformation

```text
┌─────────────────────────────────────────────────────────────────────┐
│                          BEFORE                                     │
│  Light cream/terracotta palette · Multiple fragmented sections     │
│  IntroAnimation · Marquee · FAQ · ProcessSection · etc.            │
└─────────────────────────────────────────────────────────────────────┘
                                 ↓
┌─────────────────────────────────────────────────────────────────────┐
│                           AFTER                                     │
│  Dark amber/gold palette · Unified cinematic scroll journey        │
│  6-scene CinematicHero · PricingSection · CTASection · Footer      │
└─────────────────────────────────────────────────────────────────────┘
```

### Page Flow Comparison

| Current Structure                    | New Structure              |
|--------------------------------------|----------------------------|
| IntroAnimation (loading)             | Direct entry               |
| HeroSection                          | **CinematicHero Scene 1-2** |
| Marquee                              | (Integrated in scenes)     |
| DrawPathOnScroll + ScrollGlobe       | (Removed)                  |
| WebsiteShowcase                      | **CinematicHero Scene 6**  |
| VideoShowcaseSection                 | (Removed)                  |
| Marquee                              | (Removed)                  |
| ProcessSection                       | **CinematicHero Scene 3-5** |
| FAQ (AnimatedAccordion)              | (Removed)                  |
| PricingSection                       | **New PricingSection**     |
| Contact Form                         | **CTASection**             |
| CTASection                           | (Merged above)             |
| Footer                               | **New Footer**             |

---

## Technical Implementation

### Step 1: Add CinematicHero Component

Create `src/components/sections/CinematicHero.tsx` with the full 564-line component featuring:

- **Scene 1 (0-15%)**: Salon exterior with window, "OPEN" sign, ambient particles
- **Scene 2 (15-30%)**: Door transition with scale zoom and brightness increase
- **Scene 3 (30-50%)**: Stats reveal (+47% bookings, 5.0 rating, 7 days)
- **Scene 4 (50-65%)**: Light burst transition with radial gradients
- **Scene 5 (65-80%)**: Sketch wireframe with SVG path drawing animation
- **Scene 6 (80-100%)**: Final website in phone mockup with iframe to sunsetnails.lovable.app
- **Persistent elements**: Floating CTA button, scroll progress dots

Key technical features:
- Uses Framer Motion `useScroll` and `useTransform` for scroll-driven animations
- 600vh container height with sticky viewport
- Smooth opacity/scale transitions between scenes

### Step 2: Update Navbar Component

Replace `src/components/Navbar.tsx` with dark theme version:

- Dark transparent header → `bg-lumina-dark/90` on scroll
- Amber gradient logo with "L" badge
- Amber-tinted navigation links with underline animation
- "Get in Touch" CTA button with amber gradient
- Mobile hamburger menu with full-screen overlay

### Step 3: Update PricingSection

Replace `src/components/sections/PricingSection.tsx`:

- Dark background with amber gradients
- Three tiers: Starter ($149/mo), Growth ($249/mo), Premium ($399/mo)
- All plans: $0 upfront pricing model
- Glassmorphism cards with amber accents
- "Most Popular" badge on Growth tier

### Step 4: Update CTASection

Replace `src/components/sections/CTASection.tsx`:

- Dark gradient background
- Floating amber particles
- "Limited Availability" badge
- Dual CTA: Calendar booking and phone icons
- Social proof elements

### Step 5: Update Footer

Replace `src/components/sections/Footer.tsx`:

- Dark theme with amber accents
- Four-column layout (Brand, Services, Company, Legal)
- Amber gradient logo
- Social media icons
- Newsletter signup form

### Step 6: Update Index Page

Simplify `src/pages/Index.tsx`:

```tsx
import Navbar from '@/components/Navbar';
import CinematicHero from '@/components/sections/CinematicHero';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  // Lenis smooth scroll setup
  
  return (
    <div className="relative bg-lumina-dark min-h-screen">
      <Navbar />
      <CinematicHero />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};
```

### Step 7: Update CSS Variables

Update `src/index.css` with:

- Enhanced lumina color palette (gold, coral, pink, yellow, slate)
- Fluid typography scale (`text-fluid-xs` through `text-fluid-5xl`)
- Perspective utilities (`.perspective-500`, `.perspective-1000`, `.perspective-2000`)
- Radial/conic gradient utilities
- Lenis smooth scroll styles
- Custom animations (float, pulse-glow, shimmer)

### Step 8: Update main.tsx

Simplify to remove QueryClient/TooltipProvider (add back if needed later):

```tsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### Step 9: Simplify App.tsx

```tsx
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}

export default App;
```

---

## Components Removed

These components will no longer be imported (files can remain for future use):

- `IntroAnimation` - Direct entry instead
- `Marquee` - Replaced by cinematic transitions
- `DrawPathOnScroll` - Replaced by Scene 5 sketch
- `ScrollGlobe` - Not needed
- `WebsiteShowcase` - Replaced by Scene 6
- `VideoShowcaseSection` - Removed
- `ProcessSection` - Content moved to Scene 3
- `AnimatedAccordion` (FAQ) - Removed for streamlined flow
- `LiveContactForm` - Replaced by CTASection
- `SmoothScroll` - Lenis now in Index.tsx directly

---

## Files Modified

| File | Action |
|------|--------|
| `src/components/sections/CinematicHero.tsx` | **Create** (564 lines) |
| `src/components/Navbar.tsx` | **Replace** (dark theme) |
| `src/components/sections/PricingSection.tsx` | **Replace** (dark theme) |
| `src/components/sections/CTASection.tsx` | **Replace** (dark theme) |
| `src/components/sections/Footer.tsx` | **Replace** (dark theme) |
| `src/pages/Index.tsx` | **Replace** (simplified) |
| `src/index.css` | **Replace** (enhanced utilities) |
| `src/main.tsx` | **Replace** (simplified) |
| `src/App.tsx` | **Replace** (simplified) |

---

## Technical Notes

### Scroll Behavior

The CinematicHero uses a 600vh container with sticky positioning:
- Each scene occupies roughly 100vh of scroll
- Framer Motion `useTransform` maps scroll progress to opacity/scale
- Smooth transitions via `useScroll({ offset: ['start start', 'end end'] })`

### Performance Considerations

- Iframe in Scene 6 loads sunsetnails.lovable.app
- Particle animations use CSS transforms for GPU acceleration
- SVG path drawing uses `strokeDasharray` / `strokeDashoffset`

### Mobile Responsiveness

- Phone mockups scale for mobile viewports
- Stats grid switches from 3-column to single column
- Pricing cards stack vertically
- Annotation labels hide on mobile

---

## Result

A cohesive, story-driven scroll experience that:

1. **Hooks visitors** with the salon exterior scene
2. **Builds intrigue** through the door transition
3. **Delivers proof** with stats and features
4. **Inspires creativity** through the sketch reveal
5. **Showcases results** with the live website mockup
6. **Converts visitors** with clear pricing and CTAs

