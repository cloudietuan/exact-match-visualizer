import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import sketchWireframe from '@/assets/sketch-phone-wireframe.png';
import sunsetNailsHero from '@/assets/sunset-nails-hero.jpg';
import nailGallery from '@/assets/nail-gallery.jpg';
import { 
  NailPolishIcon, 
  SparkleIcon, 
  DiamondIcon 
} from '@/components/icons/CustomIcons';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-based animations (performant - no continuous state updates)
  const sketchOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const websiteOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const websiteScale = useTransform(scrollYProgress, [0.15, 0.5], [0.92, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const badgeY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);
  const badgeOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[220vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-lumina-cream">
        {/* Subtle grid - static, no animation */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--lumina-ink)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--lumina-ink)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Main content container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
          {/* Intro text - Jesko style minimal */}
          <motion.div 
            className="text-center mb-6 md:mb-8"
            style={{ y: textY, opacity: textOpacity }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lumina-ink-subtle text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]"
            >
              Case Study
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 text-lumina-ink leading-tight"
            >
              From <span className="text-brush text-lumina-terracotta">Sketch</span>
              <span className="block mt-0.5">to Reality</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-lumina-ink-muted mt-3 sm:mt-4 max-w-md mx-auto text-sm"
            >
              Watch your vision transform as you scroll
            </motion.p>
          </motion.div>

          {/* The transformation container */}
          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center min-h-[380px] sm:min-h-[420px]">
            {/* SKETCH VERSION */}
            <motion.div
              className="relative mx-auto"
              style={{ opacity: sketchOpacity }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative"
              >
                <img 
                  src={sketchWireframe} 
                  alt="Website wireframe sketch"
                  className="w-[240px] sm:w-[280px] md:w-[320px] h-auto drop-shadow-lg"
                />
                
                {/* Annotation labels */}
                <motion.div
                  className="absolute -right-4 md:-right-20 top-1/4 text-lumina-ink-muted text-xs hidden sm:flex items-center gap-2"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.4 }}
                >
                  <svg className="w-10 h-5" viewBox="0 0 48 24">
                    <path 
                      d="M0,12 Q24,0 45,12" 
                      stroke="currentColor" 
                      fill="none" 
                      strokeWidth="1"
                      strokeDasharray="3,3"
                    />
                  </svg>
                  <span className="italic font-display text-sm">hero</span>
                </motion.div>

                <motion.div
                  className="absolute -left-4 md:-left-20 bottom-1/3 text-lumina-ink-muted text-xs hidden sm:flex items-center gap-2"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                >
                  <span className="italic font-display text-sm">pricing</span>
                  <svg className="w-10 h-5" viewBox="0 0 48 24">
                    <path 
                      d="M48,12 Q24,24 3,12" 
                      stroke="currentColor" 
                      fill="none" 
                      strokeWidth="1"
                      strokeDasharray="3,3"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* REAL WEBSITE VERSION */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: websiteOpacity, scale: websiteScale }}
            >
              <div className="relative">
                {/* Phone mockup */}
                <div
                  className="relative bg-[#1a1a1a] rounded-[40px] sm:rounded-[44px] p-2 sm:p-2.5 shadow-2xl shadow-black/25"
                  style={{ width: 'clamp(280px, 40vw, 320px)' }}
                >
                  <div className="bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE6] rounded-[34px] sm:rounded-[38px] overflow-hidden">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-4 sm:px-5 py-2 text-[9px] sm:text-[10px] text-[#C17F59]">
                      <span className="font-medium">9:41</span>
                      <div className="w-16 sm:w-20 h-5 sm:h-6 bg-[#1a1a1a] rounded-full" />
                      <span>100%</span>
                    </div>

                    {/* Content */}
                    <div className="px-3 sm:px-4 pb-5 sm:pb-6">
                      <div className="text-center py-1.5 sm:py-2">
                        <p className="text-[#C17F59] text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold">Sunset Nails</p>
                        <p className="text-[#B8A89A] text-[9px] sm:text-[10px] mt-0.5">Mesa, Arizona · Est. 2018</p>
                      </div>

                      <div className="rounded-lg overflow-hidden mb-2.5 sm:mb-3 shadow-sm">
                        <img 
                          src={sunsetNailsHero} 
                          alt="Beautiful nail art"
                          className="w-full h-24 sm:h-28 object-cover"
                        />
                      </div>

                      <div className="text-center py-1">
                        <p className="font-display text-[#8B7355] text-xs sm:text-sm italic">"Where every visit feels like golden hour"</p>
                      </div>

                      {/* Services icons */}
                      <div className="bg-white/50 rounded-lg p-2.5 sm:p-3 mb-2.5 sm:mb-3 backdrop-blur-sm">
                        <div className="flex justify-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#C17F59]/10 flex items-center justify-center">
                            <NailPolishIcon size={18} />
                          </div>
                          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#C17F59]/10 flex items-center justify-center">
                            <SparkleIcon size={18} />
                          </div>
                          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#C17F59]/10 flex items-center justify-center">
                            <DiamondIcon size={16} />
                          </div>
                        </div>
                        <p className="text-center text-[#8B7355] text-[9px] sm:text-[10px]">Manicures • Pedicures • Nail Art</p>
                      </div>

                      {/* Pricing - 4 packages matching real site */}
                      <div className="grid grid-cols-4 gap-1 mb-2.5 sm:mb-3">
                        <div className="bg-white/50 rounded-md p-1.5 text-center">
                          <p className="text-[#C17F59] text-[10px] sm:text-xs font-semibold">$55</p>
                          <p className="text-[#8B7355] text-[7px] sm:text-[8px]">Basic</p>
                        </div>
                        <div className="bg-white/50 rounded-md p-1.5 text-center">
                          <p className="text-[#C17F59] text-[10px] sm:text-xs font-semibold">$60</p>
                          <p className="text-[#8B7355] text-[7px] sm:text-[8px]">Sea Breeze</p>
                        </div>
                        <div className="bg-[#C17F59] rounded-md p-1.5 text-center shadow-sm">
                          <p className="text-white text-[10px] sm:text-xs font-semibold">$70</p>
                          <p className="text-white/80 text-[7px] sm:text-[8px]">Premium</p>
                        </div>
                        <div className="bg-white/50 rounded-md p-1.5 text-center">
                          <p className="text-[#C17F59] text-[10px] sm:text-xs font-semibold">$100</p>
                          <p className="text-[#8B7355] text-[7px] sm:text-[8px]">Deluxe</p>
                        </div>
                      </div>

                      {/* Gallery */}
                      <div className="rounded-lg overflow-hidden mb-2.5 sm:mb-3">
                        <img 
                          src={nailGallery} 
                          alt="Nail art gallery"
                          className="w-full h-14 sm:h-16 object-cover"
                        />
                      </div>

                      {/* CTA */}
                      <button className="w-full py-2.5 sm:py-3 rounded-lg bg-[#C17F59] text-white font-semibold text-[10px] sm:text-xs shadow-md">
                        Book Your Appointment
                      </button>
                    </div>
                  </div>
                </div>

                {/* Result badges - scroll triggered */}
                <motion.div
                  className="absolute -right-2 sm:-right-4 md:-right-16 top-10 sm:top-12 bg-white rounded-xl p-2.5 sm:p-3 shadow-lg border border-lumina-cream-warm"
                  style={{ y: badgeY, opacity: badgeOpacity }}
                >
                  <p className="text-lumina-terracotta font-display text-lg sm:text-xl md:text-2xl">+47%</p>
                  <p className="text-lumina-ink-muted text-[8px] sm:text-[10px]">More Bookings</p>
                </motion.div>

                <motion.div
                  className="absolute -left-2 sm:-left-4 md:-left-16 top-24 sm:top-28 bg-lumina-dark text-white rounded-xl p-2.5 sm:p-3 shadow-lg"
                  style={{ 
                    y: useTransform(badgeY, v => v * 1.1),
                    opacity: badgeOpacity
                  }}
                >
                  <p className="text-lumina-gold font-display text-lg sm:text-xl md:text-2xl">7 Days</p>
                  <p className="text-white/50 text-[8px] sm:text-[10px]">To Launch</p>
                </motion.div>

                <motion.div
                  className="absolute -right-1 sm:-right-2 md:-right-12 bottom-16 sm:bottom-20 bg-gradient-to-br from-lumina-coral to-lumina-terracotta text-white rounded-xl p-2 sm:p-2.5 shadow-lg"
                  style={{ 
                    y: useTransform(badgeY, v => v * 0.9),
                    opacity: badgeOpacity
                  }}
                >
                  <p className="font-display text-base sm:text-lg">5.0★</p>
                  <p className="text-white/70 text-[8px] sm:text-[9px]">Client Rating</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
            style={{ opacity: sketchOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-lumina-ink-subtle">
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">Scroll</span>
              <motion.div
                className="w-px h-6 sm:h-8 bg-gradient-to-b from-lumina-ink/30 to-transparent"
                animate={{ scaleY: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
