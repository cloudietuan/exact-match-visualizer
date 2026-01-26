import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 100, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

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

  // Stacked panels data
  const panels = [
    { offset: 0, color: 'bg-lumina-bg-deep', zIndex: 10 },
    { offset: 80, color: 'bg-[#1a1915]', zIndex: 9 },
    { offset: 160, color: 'bg-[#1f1e19]', zIndex: 8 },
    { offset: 240, color: 'bg-[#24231d]', zIndex: 7 },
    { offset: 320, color: 'bg-[#292821]', zIndex: 6 },
    { offset: 400, color: 'bg-[#2e2d25]', zIndex: 5 },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-[#e8e4dc]"
    >
      {/* Stacked panels - Midlife Engineering style */}
      <div className="absolute inset-0">
        {panels.map((panel, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`absolute top-0 bottom-0 ${panel.color}`}
            style={{
              left: 0,
              width: `calc(100% - ${panel.offset}px)`,
              zIndex: panel.zIndex,
            }}
          >
            {/* Gold accent line on each panel */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-1 bg-lumina-gold origin-left"
              style={{ top: `${35 + index * 8}%` }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main content - on top panel */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.span 
              className="inline-block text-lumina-gold text-xs uppercase tracking-[0.4em] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Lumina Sites Co.
            </motion.span>

            <motion.h1 
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8"
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
              <span className="block">Premium</span>
              <span className="block text-lumina-gold">websites</span>
              <span className="block">for nail salons</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-lumina-cream-muted text-lg max-w-md mb-10"
            >
              Made for beauty, bookings, and everything in between.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex gap-4"
            >
              <button className="group relative px-8 py-4 bg-lumina-gold text-background text-xs uppercase tracking-[0.2em] overflow-hidden">
                <span className="relative z-10">View Work</span>
                <motion.div 
                  className="absolute inset-0 bg-foreground"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              <button className="px-8 py-4 border border-lumina-gold/30 text-lumina-gold text-xs uppercase tracking-[0.2em] hover:bg-lumina-gold/10 transition-colors">
                Get Started
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Interactive floating card */}
          <motion.div
            className="relative hidden lg:block"
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative w-80 h-[500px] mx-auto"
              style={{ perspective: 1000 }}
            >
              {/* Stacked preview cards */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-2xl border border-lumina-gold/20 overflow-hidden"
                  style={{
                    transform: `translateZ(${-i * 30}px) translateX(${i * 20}px) translateY(${i * 20}px)`,
                    background: `linear-gradient(135deg, hsl(var(--lumina-bg-elevated)) 0%, hsl(var(--lumina-bg-deep)) 100%)`,
                    opacity: 1 - i * 0.2,
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {i === 0 && (
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-lumina-gold" />
                        <span className="text-xs text-lumina-cream-muted">Live Preview</span>
                      </div>
                      <div className="flex-1 rounded-lg bg-[#FAF7F2] p-4">
                        <p className="text-[#C17F59] text-[10px] uppercase tracking-widest text-center mb-2">
                          Sunset Nails
                        </p>
                        <div className="h-16 rounded bg-gradient-to-br from-[#C17F59]/20 to-[#C17F59]/5 mb-3" />
                        <div className="flex gap-2 justify-center mb-3">
                          <div className="w-8 h-8 rounded-full bg-[#C17F59]/20" />
                          <div className="w-8 h-8 rounded-full bg-[#C17F59]/15" />
                          <div className="w-8 h-8 rounded-full bg-[#C17F59]/10" />
                        </div>
                        <div className="h-6 rounded bg-[#C17F59]" />
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-lumina-gold text-sm">+47%</span>
                        <span className="text-lumina-cream-subtle text-xs">bookings</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
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
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-lumina-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
