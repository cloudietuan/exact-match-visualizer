import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import sketchWireframe from '@/assets/sketch-phone-wireframe.png';
import sunsetNailsHero from '@/assets/sunset-nails-hero.jpg';
import nailGallery from '@/assets/nail-gallery.jpg';
import { 
  NailPolishIcon, 
  SparkleIcon, 
  PaletteIcon, 
  PencilIcon,
  DiamondIcon,
  ManicureHandIcon 
} from '@/components/icons/CustomIcons';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Mouse tracking for interactive elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  // Bouncing ball state
  const [ballPosition, setBallPosition] = useState({ x: 100, y: 100 });
  const [ballVelocity, setBallVelocity] = useState({ x: 2.5, y: 1.8 });

  useEffect(() => {
    const interval = setInterval(() => {
      setBallPosition(prev => {
        let newX = prev.x + ballVelocity.x;
        let newY = prev.y + ballVelocity.y;
        let newVelX = ballVelocity.x;
        let newVelY = ballVelocity.y;

        if (newX <= 0 || newX >= 200) {
          newVelX = -newVelX * 0.95;
          newX = Math.max(0, Math.min(200, newX));
        }
        if (newY <= 0 || newY >= 150) {
          newVelY = -newVelY * 0.95;
          newY = Math.max(0, Math.min(150, newY));
        }

        setBallVelocity({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });
    }, 30);

    return () => clearInterval(interval);
  }, [ballVelocity]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Animation values based on scroll
  const sketchOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const websiteOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const websiteScale = useTransform(scrollYProgress, [0.2, 0.6], [0.85, 1]);
  const pencilX = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const pencilRotate = useTransform(scrollYProgress, [0, 0.3], [-15, 60]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const badgeY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);
  const badgeOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[280vh]"
      onMouseMove={handleMouseMove}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-lumina-cream">
        {/* Paper texture */}
        <div className="absolute inset-0 paper-texture pointer-events-none" />

        {/* Animated grid lines */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: sketchOpacity }}
        >
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--lumina-ink)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--lumina-ink)) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </motion.div>

        {/* Playful bouncing accent ball */}
        <motion.div
          className="absolute z-30 pointer-events-none"
          style={{ 
            left: ballPosition.x + 50, 
            top: ballPosition.y + 50,
            opacity: sketchOpacity 
          }}
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-lumina-coral to-lumina-terracotta shadow-lg" />
        </motion.div>

        {/* Floating custom icons - replacing emojis */}
        <motion.div
          className="absolute top-20 right-20 pointer-events-none"
          style={{ 
            x: floatX,
            y: floatY,
            opacity: sketchOpacity 
          }}
        >
          <NailPolishIcon animate size={52} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-16 pointer-events-none"
          style={{ 
            x: useSpring(useTransform(mouseX, v => -v * 0.5), springConfig),
            y: useSpring(useTransform(mouseY, v => -v * 0.5), springConfig),
            opacity: sketchOpacity 
          }}
        >
          <SparkleIcon animate size={44} />
        </motion.div>

        <motion.div
          className="absolute top-40 left-24 pointer-events-none"
          style={{ opacity: sketchOpacity }}
        >
          <PaletteIcon animate size={40} />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-32 pointer-events-none hidden md:block"
          style={{ opacity: sketchOpacity }}
        >
          <DiamondIcon animate size={36} />
        </motion.div>

        {/* Main content container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">
          {/* Intro text */}
          <motion.div 
            className="text-center mb-8 md:mb-12"
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
              className="font-display text-4xl md:text-7xl mt-4 text-lumina-ink"
            >
              From <span className="text-brush text-lumina-terracotta">Sketch</span>
              <span className="block">to Reality</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lumina-ink-muted mt-4 max-w-md mx-auto"
            >
              Watch your vision transform from concept to stunning website
            </motion.p>
          </motion.div>

          {/* The transformation container */}
          <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
            {/* Floating pencil with drawing animation - custom icon */}
            <motion.div
              className="absolute -left-8 md:-left-24 top-1/2 -translate-y-1/2 z-20"
              style={{ x: pencilX, rotate: pencilRotate, opacity: sketchOpacity }}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <PencilIcon animate size={72} />
              {/* Drawing trail */}
              <motion.div
                className="absolute -right-6 top-1/2 w-12 h-0.5 bg-gradient-to-r from-lumina-ink/40 to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* SKETCH VERSION */}
            <motion.div
              className="relative mx-auto"
              style={{ opacity: sketchOpacity }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative"
              >
                {/* Custom sketch wireframe image */}
                <img 
                  src={sketchWireframe} 
                  alt="Website wireframe sketch"
                  className="w-[280px] md:w-[340px] h-auto drop-shadow-xl"
                />
                
                {/* Animated annotation arrows */}
                <motion.div
                  className="absolute -right-4 top-1/4 text-lumina-ink-muted text-xs hidden md:block"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <svg className="w-20 h-12" viewBox="0 0 80 48">
                    <motion.path 
                      d="M0,24 Q40,0 75,24" 
                      stroke="currentColor" 
                      fill="none" 
                      strokeWidth="1.5"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.8, duration: 0.8 }}
                    />
                  </svg>
                  <span className="block -mt-1 ml-12 italic font-display">hero</span>
                </motion.div>

                <motion.div
                  className="absolute -left-8 bottom-1/3 text-lumina-ink-muted text-xs hidden md:block"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 }}
                >
                  <span className="block italic mb-1 font-display">pricing</span>
                  <svg className="w-16 h-8" viewBox="0 0 64 32">
                    <motion.path 
                      d="M64,16 Q30,32 5,16" 
                      stroke="currentColor" 
                      fill="none" 
                      strokeWidth="1.5"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 2, duration: 0.8 }}
                    />
                  </svg>
                </motion.div>

                {/* Sparkle decorations */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-lumina-terracotta/40"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 3) * 30}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* REAL WEBSITE VERSION */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: websiteOpacity, scale: websiteScale }}
            >
              {/* Real phone mockup with Sunset Nails */}
              <div className="relative">
                <motion.div
                  className="relative bg-[#1a1a1a] rounded-[50px] p-3 shadow-2xl shadow-black/40"
                  style={{ width: '340px' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
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
                      <div className="text-center py-3">
                        <p className="text-[#C17F59] text-sm uppercase tracking-[0.25em] font-semibold">Sunset Nails</p>
                        <p className="text-[#B8A89A] text-xs mt-1">Mesa, Arizona · Est. 2018</p>
                      </div>

                      {/* Hero image */}
                      <div className="rounded-xl overflow-hidden mb-4 shadow-md">
                        <img 
                          src={sunsetNailsHero} 
                          alt="Beautiful nail art"
                          className="w-full h-32 object-cover"
                        />
                      </div>

                      {/* Hero tagline */}
                      <div className="text-center py-2">
                        <p className="font-display text-[#8B7355] text-base italic leading-tight">"Where every visit feels like golden hour"</p>
                      </div>

                      {/* Services preview - using custom icons */}
                      <div className="bg-white/60 rounded-xl p-4 mb-4 backdrop-blur-sm">
                        <div className="flex justify-center gap-4 mb-3">
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-[#C17F59]/10 flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <NailPolishIcon size={28} />
                          </motion.div>
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-[#C17F59]/10 flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <SparkleIcon size={28} />
                          </motion.div>
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-[#C17F59]/10 flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <DiamondIcon size={26} />
                          </motion.div>
                        </div>
                        <p className="text-center text-[#8B7355] text-xs">Manicures • Pedicures • Nail Art</p>
                      </div>

                      {/* Pricing preview - matching real site */}
                      <div className="flex gap-2 mb-4">
                        <div className="flex-1 bg-white/50 rounded-lg p-2.5 text-center backdrop-blur-sm">
                          <p className="text-[#C17F59] text-base font-semibold">$55</p>
                          <p className="text-[#8B7355] text-[10px]">Basic Bliss</p>
                        </div>
                        <div className="flex-1 bg-[#C17F59] rounded-lg p-2.5 text-center shadow-lg">
                          <p className="text-white text-base font-semibold">$70</p>
                          <p className="text-white/80 text-[10px]">Premium</p>
                        </div>
                        <div className="flex-1 bg-white/50 rounded-lg p-2.5 text-center backdrop-blur-sm">
                          <p className="text-[#C17F59] text-base font-semibold">$100</p>
                          <p className="text-[#8B7355] text-[10px]">Deluxe</p>
                        </div>
                      </div>

                      {/* Gallery preview */}
                      <div className="rounded-xl overflow-hidden mb-4">
                        <img 
                          src={nailGallery} 
                          alt="Nail art gallery"
                          className="w-full h-20 object-cover"
                        />
                      </div>

                      {/* CTA button */}
                      <motion.button 
                        className="w-full py-3.5 rounded-xl bg-[#C17F59] text-white font-semibold text-sm shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Book Your Appointment
                      </motion.button>

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
                        <div className="text-center">
                          <p className="text-[#C17F59] font-semibold">7 Days</p>
                          <p className="text-[#8B7355] text-[10px]">Delivery</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating result badges */}
                <motion.div
                  className="absolute -right-4 md:-right-20 top-16 bg-white rounded-2xl p-4 shadow-xl border border-lumina-cream-warm"
                  style={{ y: badgeY, opacity: badgeOpacity }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <p className="text-lumina-terracotta font-display text-2xl md:text-3xl">+47%</p>
                  <p className="text-lumina-ink-muted text-xs">More Bookings</p>
                </motion.div>

                <motion.div
                  className="absolute -left-4 md:-left-20 top-32 bg-lumina-dark text-white rounded-2xl p-4 shadow-xl"
                  style={{ 
                    y: useTransform(badgeY, v => v * 1.2),
                    opacity: useTransform(badgeOpacity, [0, 1], [0, 1])
                  }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <p className="text-lumina-gold font-display text-2xl md:text-3xl">7 Days</p>
                  <p className="text-white/60 text-xs">To Launch</p>
                </motion.div>

                <motion.div
                  className="absolute -right-2 md:-right-16 bottom-24 bg-gradient-to-br from-lumina-coral to-lumina-terracotta text-white rounded-2xl p-3 shadow-xl"
                  style={{ 
                    y: useTransform(badgeY, v => v * 0.8),
                    opacity: useTransform(badgeOpacity, [0, 1], [0, 1])
                  }}
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="font-display text-xl">5.0★</p>
                  <p className="text-white/80 text-[10px]">Client Rating</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll prompt */}
          <motion.div
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
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
