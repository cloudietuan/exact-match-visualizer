import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseItems = [
  {
    name: 'Sunset Nails',
    sketch: '💅',
    result: '+47% bookings',
  },
  {
    name: 'Luxe Lounge',
    sketch: '✨',
    result: '+38% new clients',
  },
  {
    name: 'Polished Studio',
    sketch: '💎',
    result: '+67% visibility',
  },
  {
    name: 'Nail Bar',
    sketch: '🌸',
    result: '+52% revenue',
  },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 100, damping: 20 };
  const textX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const textY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--lumina-ink)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--lumina-ink)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content - Centered layout */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
        {/* Massive centered typography */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="text-center relative"
        >
          {/* Main headline with brush typography */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight"
          >
            <span className="text-brush text-lumina-accent">Make it</span>
            <span className="block font-sans font-bold text-foreground uppercase">Beautiful</span>
          </motion.h1>
        </motion.div>

        {/* Carousel of showcase items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative mt-8 w-full max-w-4xl"
        >
          {/* Carousel container */}
          <div className="relative h-64 flex items-center justify-center">
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 z-20 w-10 h-10 rounded-full border border-lumina-ink/20 flex items-center justify-center hover:bg-lumina-bg-warm transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-lumina-ink" />
            </button>
            
            {/* Slides */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {showcaseItems.map((item, index) => {
                const offset = index - currentIndex;
                const isActive = index === currentIndex;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute flex flex-col items-center"
                    animate={{
                      x: offset * 300,
                      scale: isActive ? 1 : 0.8,
                      opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Sketch-style icon */}
                    <div className="text-8xl mb-4 filter grayscale opacity-80">
                      {item.sketch}
                    </div>
                    <p className="text-lumina-ink font-display text-xl">{item.name}</p>
                    <p className="text-lumina-ink-muted text-sm">{item.result}</p>
                  </motion.div>
                );
              })}
            </div>

            <button 
              onClick={nextSlide}
              className="absolute right-4 z-20 w-10 h-10 rounded-full border border-lumina-ink/20 flex items-center justify-center hover:bg-lumina-bg-warm transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-lumina-ink" />
            </button>
          </div>
        </motion.div>

        {/* Tagline and CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-lumina-ink-muted text-lg mb-8 max-w-md mx-auto">
            A new way to design websites for nail salons
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              className="px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-lumina-ink/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
            <motion.button 
              className="px-8 py-4 border border-foreground/20 rounded-full text-sm font-medium hover:bg-lumina-bg-warm transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-lumina-ink-subtle"
          >
            <span className="text-xs tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-lumina-ink/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
