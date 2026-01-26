import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 100, damping: 20 };
  const textX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const textY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, -10]), springConfig);
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);

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

  // Stacked accent panels for depth
  const accentPanels = [
    { offset: 0, opacity: 0.03 },
    { offset: 60, opacity: 0.05 },
    { offset: 120, opacity: 0.07 },
    { offset: 180, opacity: 0.1 },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-lumina-bg-deep"
    >
      {/* Full-bleed background image with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ x: bgX, y: bgY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-lumina-bg-deep via-lumina-bg-deep/95 to-lumina-bg-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-lumina-bg-deep via-transparent to-lumina-bg-deep/50" />
      </motion.div>

      {/* Stacked accent panels - subtle layering effect */}
      <div className="absolute inset-0 pointer-events-none">
        {accentPanels.map((panel, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: panel.opacity }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
            className="absolute top-0 bottom-0 left-0 bg-lumina-gold"
            style={{ width: `${panel.offset + 4}px` }}
          />
        ))}
      </div>

      {/* Gold accent lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-lumina-gold/40 to-transparent origin-top"
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 md:px-16">
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <span className="text-lumina-gold text-xs uppercase tracking-[0.5em] font-sans">
              Lumina Sites Co.
            </span>
          </motion.div>

          {/* Massive full-bleed typography */}
          <motion.div
            style={{ x: textX, y: textY }}
            className="relative"
          >
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="font-sans font-bold text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tight text-lumina-cream uppercase"
            >
              <span className="block">Premium</span>
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85 }}
              className="font-display italic text-[14vw] md:text-[12vw] lg:text-[9vw] leading-[0.85] tracking-tight text-lumina-gold"
            >
              <span className="block">Websites</span>
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-sans font-bold text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.85] tracking-tight text-lumina-cream uppercase"
            >
              <span className="block">For Nail Salons</span>
            </motion.h1>
          </motion.div>

          {/* Subtext and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12 max-w-md"
          >
            <p className="text-lumina-cream-muted text-lg mb-8 font-sans">
              Made for beauty, bookings, and everything in between.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button 
                className="group relative px-8 py-4 bg-lumina-gold text-background text-xs uppercase tracking-[0.2em] font-sans overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View Work</span>
                <motion.div 
                  className="absolute inset-0 bg-lumina-cream"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button 
                className="px-8 py-4 border border-lumina-gold/40 text-lumina-gold text-xs uppercase tracking-[0.2em] font-sans hover:bg-lumina-gold/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Stats row - floating on right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute right-8 md:right-16 bottom-1/4 hidden lg:flex flex-col gap-8"
          >
            {[
              { value: '+47%', label: 'More Bookings' },
              { value: '24/7', label: 'Online Presence' },
              { value: '100+', label: 'Salons Served' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                <span className="block text-lumina-gold text-2xl font-display">{stat.value}</span>
                <span className="text-lumina-cream-subtle text-xs uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-lumina-cream-subtle"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-sans">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-lumina-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
