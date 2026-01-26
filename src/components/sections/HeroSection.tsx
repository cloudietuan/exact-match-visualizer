import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Sketch-to-Website Hero: Drawing transforms into real website on scroll

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Animation values based on scroll
  const sketchOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const websiteOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const websiteScale = useTransform(scrollYProgress, [0.2, 0.6], [0.8, 1]);
  const pencilX = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const pencilRotate = useTransform(scrollYProgress, [0, 0.3], [0, 45]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-lumina-cream">
        {/* Paper texture */}
        <div className="absolute inset-0 paper-texture pointer-events-none" />

        {/* Grid lines (sketch paper feel) */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: sketchOpacity }}
        >
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--lumina-ink)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--lumina-ink)) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </motion.div>

        {/* Main content container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">
          {/* Intro text */}
          <motion.div 
            className="text-center mb-12"
            style={{ y: textY, opacity: textOpacity }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lumina-ink-subtle text-xs uppercase tracking-[0.4em]"
            >
              Lumina Sites Co. presents
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-display text-5xl md:text-7xl mt-4 text-lumina-ink"
            >
              From <span className="text-brush text-lumina-terracotta">Sketch</span>
              <span className="block">to Reality</span>
            </motion.h1>
          </motion.div>

          {/* The transformation container */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Floating pencil */}
            <motion.div
              className="absolute -left-20 top-1/2 -translate-y-1/2 text-6xl z-20"
              style={{ x: pencilX, rotate: pencilRotate, opacity: sketchOpacity }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              ✏️
            </motion.div>

            {/* SKETCH VERSION */}
            <motion.div
              className="relative mx-auto w-full max-w-md"
              style={{ opacity: sketchOpacity }}
            >
              {/* Sketch phone frame */}
              <div className="relative bg-transparent border-4 border-dashed border-lumina-ink/30 rounded-[40px] p-4 mx-auto w-[300px] h-[550px]">
                {/* Hand-drawn style elements */}
                <div className="h-full border-2 border-lumina-ink/20 rounded-[32px] p-4 relative">
                  {/* Sketch header */}
                  <div className="border-b-2 border-dashed border-lumina-ink/20 pb-4 mb-4">
                    <div className="w-24 h-3 bg-lumina-ink/10 rounded mb-2 mx-auto" />
                    <div className="w-16 h-2 bg-lumina-ink/10 rounded mx-auto" />
                  </div>
                  
                  {/* Sketch hero area */}
                  <div className="h-24 border-2 border-dashed border-lumina-ink/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-lumina-ink/30 text-xs">Hero Image</span>
                  </div>
                  
                  {/* Sketch content blocks */}
                  <div className="space-y-3">
                    <div className="h-3 bg-lumina-ink/10 rounded w-3/4" />
                    <div className="h-3 bg-lumina-ink/10 rounded w-1/2" />
                    <div className="h-3 bg-lumina-ink/10 rounded w-2/3" />
                  </div>
                  
                  {/* Sketch button */}
                  <div className="mt-6 h-10 border-2 border-dashed border-lumina-ink/20 rounded-lg flex items-center justify-center">
                    <span className="text-lumina-ink/30 text-xs">Book Now</span>
                  </div>
                  
                  {/* Sketch pricing cards */}
                  <div className="mt-6 flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex-1 h-16 border-2 border-dashed border-lumina-ink/20 rounded" />
                    ))}
                  </div>

                  {/* Scribble annotations */}
                  <svg className="absolute -right-16 top-10 w-32 h-20 opacity-40" viewBox="0 0 100 60">
                    <path d="M10,30 Q30,10 50,30 T90,30" stroke="currentColor" fill="none" strokeWidth="1" className="text-lumina-ink/30" strokeDasharray="4,4"/>
                    <text x="50" y="55" fontSize="8" fill="currentColor" className="text-lumina-ink/40" textAnchor="middle">hero section</text>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* REAL WEBSITE VERSION */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: websiteOpacity, scale: websiteScale }}
            >
              {/* Real phone mockup with Sunset Nails */}
              <div className="relative bg-[#1a1a1a] rounded-[50px] p-3 shadow-2xl shadow-black/30 w-[320px]">
                <div className="bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE6] rounded-[42px] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-xs text-[#C17F59]">
                    <span className="font-medium">9:41</span>
                    <div className="w-24 h-7 bg-[#1a1a1a] rounded-full" />
                    <span>100%</span>
                  </div>

                  {/* Sunset Nails content */}
                  <div className="px-5 pb-8">
                    {/* Logo */}
                    <div className="text-center py-4">
                      <p className="text-[#C17F59] text-sm uppercase tracking-[0.25em] font-medium">Sunset Nails</p>
                      <p className="text-[#B8A89A] text-xs mt-1">Gilbert, Arizona</p>
                    </div>

                    {/* Hero tagline */}
                    <div className="text-center py-3">
                      <p className="font-display text-[#8B7355] text-xl italic">"Where beauty meets artistry"</p>
                    </div>

                    {/* Services preview */}
                    <div className="bg-white/60 rounded-xl p-4 mb-4">
                      <div className="flex justify-center gap-3 mb-3">
                        {['💅', '✨', '💎'].map((emoji, i) => (
                          <div key={i} className="w-12 h-12 rounded-full bg-[#C17F59]/10 flex items-center justify-center text-xl">
                            {emoji}
                          </div>
                        ))}
                      </div>
                      <p className="text-center text-[#8B7355] text-xs">Manicures • Pedicures • Nail Art</p>
                    </div>

                    {/* Pricing preview */}
                    <div className="flex gap-2 mb-4">
                      <div className="flex-1 bg-white/50 rounded-lg p-3 text-center">
                        <p className="text-[#C17F59] text-lg font-semibold">$35</p>
                        <p className="text-[#8B7355] text-[10px]">Basic</p>
                      </div>
                      <div className="flex-1 bg-[#C17F59] rounded-lg p-3 text-center">
                        <p className="text-white text-lg font-semibold">$55</p>
                        <p className="text-white/80 text-[10px]">Premium</p>
                      </div>
                      <div className="flex-1 bg-white/50 rounded-lg p-3 text-center">
                        <p className="text-[#C17F59] text-lg font-semibold">$75</p>
                        <p className="text-[#8B7355] text-[10px]">Deluxe</p>
                      </div>
                    </div>

                    {/* CTA button */}
                    <button className="w-full py-4 rounded-xl bg-[#C17F59] text-white font-semibold text-sm shadow-lg">
                      Book Your Appointment
                    </button>

                    {/* Stats */}
                    <div className="flex justify-center gap-8 mt-4 pt-4 border-t border-[#C17F59]/10">
                      <div className="text-center">
                        <p className="text-[#C17F59] font-semibold">+47%</p>
                        <p className="text-[#8B7355] text-[10px]">Bookings</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#C17F59] font-semibold">5.0★</p>
                        <p className="text-[#8B7355] text-[10px]">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating result badges */}
              <motion.div
                className="absolute -right-8 top-20 bg-white rounded-xl p-4 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-lumina-terracotta font-display text-2xl">+47%</p>
                <p className="text-lumina-ink-muted text-xs">More Bookings</p>
              </motion.div>

              <motion.div
                className="absolute -left-8 bottom-20 bg-lumina-dark text-white rounded-xl p-4 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-lumina-gold font-display text-2xl">7 Days</p>
                <p className="text-white/60 text-xs">To Launch</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll prompt */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            style={{ opacity: sketchOpacity }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-lumina-ink-subtle"
            >
              <span className="text-xs tracking-widest uppercase">Scroll to reveal</span>
              <div className="w-px h-10 bg-gradient-to-b from-lumina-ink/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
