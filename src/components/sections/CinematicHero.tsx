import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * CinematicHero - A Jesko Jets-inspired scroll journey for Lumina Sites
 * 
 * Scene Structure:
 * 0-15%:   Scene 1 - Salon Exterior (looking through window)
 * 15-30%:  Scene 2 - Enter Transition (zoom through door)
 * 30-50%:  Scene 3 - Inside Stats (results showcase)
 * 50-65%:  Scene 4 - Light Burst (transition to creation)
 * 65-80%:  Scene 5 - Sketch Reveal (wireframe appears)
 * 80-100%: Scene 6 - Final Website (Sunset Nails showcase)
 */

const CinematicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Scene 1: Salon Exterior (0-15%)
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.15], [1, 1, 0]);
  const scene1Scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);
  
  // Scene 2: Enter Transition (15-30%)
  const scene2Opacity = useTransform(scrollYProgress, [0.13, 0.16, 0.28, 0.30], [0, 1, 1, 0]);
  const doorScale = useTransform(scrollYProgress, [0.15, 0.30], [1, 3]);
  const doorBrightness = useTransform(scrollYProgress, [0.22, 0.30], [1, 2]);
  
  // Scene 3: Inside Stats (30-50%)
  const scene3Opacity = useTransform(scrollYProgress, [0.28, 0.32, 0.48, 0.50], [0, 1, 1, 0]);
  const statsY = useTransform(scrollYProgress, [0.30, 0.38], [60, 0]);
  
  // Scene 4: Light Burst (50-65%)
  const scene4Opacity = useTransform(scrollYProgress, [0.48, 0.52, 0.63, 0.65], [0, 1, 1, 0]);
  const lightScale = useTransform(scrollYProgress, [0.50, 0.65], [0.5, 4]);
  
  // Scene 5: Sketch Reveal (65-80%)
  const scene5Opacity = useTransform(scrollYProgress, [0.63, 0.67, 0.78, 0.80], [0, 1, 1, 0]);
  const sketchDraw = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  
  // Scene 6: Final Website (80-100%)
  const scene6Opacity = useTransform(scrollYProgress, [0.78, 0.82, 1], [0, 1, 1]);
  const websiteScale = useTransform(scrollYProgress, [0.80, 0.90], [0.8, 1]);
  const websiteRotateX = useTransform(scrollYProgress, [0.80, 0.95], [15, 0]);

  // Persistent CTA button opacity
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[600vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* ============ SCENE 1: Salon Exterior ============ */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: scene1Opacity, scale: scene1Scale }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1614] via-[#2d2420] to-[#1a1614]" />
          
          {/* Stars/particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-200/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Salon Window/Door Frame */}
          <div className="relative">
            {/* Outer frame */}
            <div className="relative w-[320px] h-[420px] md:w-[400px] md:h-[520px] rounded-t-[200px] border-[12px] border-[#8b7355] bg-gradient-to-b from-[#3d3225] to-[#2a2318] shadow-2xl overflow-hidden">
              {/* Window glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-amber-700/10" />
              
              {/* Interior glow visible through window */}
              <div className="absolute inset-4 rounded-t-[180px] bg-gradient-to-b from-amber-100/90 via-amber-50/80 to-orange-100/70 overflow-hidden">
                {/* Salon interior silhouettes */}
                <div className="absolute bottom-0 left-0 right-0 h-32">
                  {/* Nail stations silhouette */}
                  <div className="absolute bottom-0 left-4 w-16 h-12 bg-amber-800/30 rounded-t-lg" />
                  <div className="absolute bottom-0 left-24 w-16 h-12 bg-amber-800/30 rounded-t-lg" />
                  <div className="absolute bottom-0 right-4 w-16 h-14 bg-amber-800/30 rounded-t-lg" />
                  {/* Pendant lights */}
                  <div className="absolute top-0 left-1/4 w-3 h-8 bg-amber-600/40" />
                  <div className="absolute top-0 left-1/2 w-3 h-8 bg-amber-600/40" />
                  <div className="absolute top-0 right-1/4 w-3 h-8 bg-amber-600/40" />
                </div>
                
                {/* Warm interior light */}
                <div className="absolute inset-0 bg-gradient-radial from-amber-200/60 via-transparent to-transparent" />
              </div>
              
              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              
              {/* Door handle */}
              <div className="absolute right-6 top-1/2 w-2 h-12 bg-[#b8956e] rounded-full shadow-lg" />
            </div>
            
            {/* "OPEN" sign */}
            <motion.div 
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-[#1a1614] text-xs font-bold tracking-widest rounded"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              OPEN
            </motion.div>
          </div>

          {/* Text overlay */}
          <motion.div 
            className="absolute bottom-24 left-0 right-0 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-amber-200/60 text-sm tracking-[0.3em] uppercase mb-2">Step inside</p>
            <p className="text-amber-100/40 text-xs">Scroll to enter</p>
          </motion.div>
        </motion.div>

        {/* ============ SCENE 2: Enter Transition ============ */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: scene2Opacity }}
        >
          <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ scale: doorScale }}
          >
            {/* Door frame expanding */}
            <motion.div 
              className="w-[320px] h-[420px] md:w-[400px] md:h-[520px] rounded-t-[200px] overflow-hidden"
              style={{ filter: `brightness(${doorBrightness})` }}
            >
              {/* Interior becoming full screen */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-100 via-amber-50 to-orange-50" />
              
              {/* Light rays */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-[200%] h-1 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent origin-left"
                    style={{
                      rotate: `${i * 45}deg`,
                      translateX: '-50%',
                      translateY: '-50%',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ============ SCENE 3: Inside Stats ============ */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: scene3Opacity }}
        >
          {/* Interior background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f1a16] via-[#2a2320] to-[#1a1614]" />
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />

          <motion.div 
            className="relative z-10 text-center px-6 max-w-4xl"
            style={{ y: statsY }}
          >
            <motion.p 
              className="text-amber-400/80 text-sm tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Results for Sunset Nails
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
              {[
                { value: '+47%', label: 'More Bookings', delay: 0.3 },
                { value: '5.0', label: 'Star Rating', delay: 0.5 },
                { value: '7', label: 'Days to Launch', delay: 0.7 },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay, duration: 0.6 }}
                >
                  <div className="text-5xl md:text-7xl font-display text-amber-100 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-amber-400/60 text-sm tracking-wider uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {['Online Booking', 'Mobile-First', 'SEO Optimized', 'Fast Loading'].map((feature, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 border border-amber-700/30 text-amber-300/70 text-sm rounded-full"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ============ SCENE 4: Light Burst ============ */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: scene4Opacity }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100" />
          
          {/* Central light burst */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ scale: lightScale }}
          >
            <div className="w-64 h-64 rounded-full bg-gradient-radial from-amber-300 via-amber-200 to-transparent blur-3xl" />
          </motion.div>

          {/* Light rays */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-[150%] h-0.5 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent origin-center"
                style={{
                  rotate: `${i * 30}deg`,
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Text */}
          <motion.div 
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-800/60 text-sm tracking-[0.3em] uppercase mb-4">The Creative Process</p>
            <h2 className="text-4xl md:text-6xl font-display text-amber-900/80">
              From vision<br />to reality
            </h2>
          </motion.div>
        </motion.div>

        {/* ============ SCENE 5: Sketch Reveal ============ */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: scene5Opacity }}
        >
          {/* Light cream background */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-stone-50 to-amber-50" />
          
          {/* Grid paper pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(#1a1614 1px, transparent 1px), linear-gradient(90deg, #1a1614 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} />

          {/* Sketch Phone Wireframe */}
          <motion.div className="relative">
            {/* Phone outline - sketch style */}
            <motion.svg 
              width="280" 
              height="560" 
              viewBox="0 0 280 560" 
              className="stroke-stone-400"
              style={{ strokeDasharray: 1000, strokeDashoffset: useTransform(sketchDraw, [0, 1], [1000, 0]) }}
            >
              {/* Phone body */}
              <rect 
                x="10" y="10" 
                width="260" height="540" 
                rx="36" 
                fill="none" 
                strokeWidth="2"
                strokeDasharray="8 4"
              />
              
              {/* Screen */}
              <rect 
                x="20" y="60" 
                width="240" height="440" 
                rx="4" 
                fill="none" 
                strokeWidth="1.5"
                strokeDasharray="6 3"
              />
              
              {/* Header area */}
              <rect x="30" y="70" width="120" height="12" rx="2" fill="none" strokeWidth="1" strokeDasharray="4 2" />
              <circle cx="240" cy="76" r="8" fill="none" strokeWidth="1" strokeDasharray="4 2" />
              
              {/* Hero section */}
              <rect x="30" y="100" width="220" height="120" rx="4" fill="none" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="60" y1="140" x2="200" y2="140" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="80" y1="160" x2="180" y2="160" strokeWidth="1" strokeDasharray="4 2" />
              <rect x="100" y="180" width="80" height="24" rx="12" fill="none" strokeWidth="1" strokeDasharray="4 2" />
              
              {/* Content blocks */}
              <rect x="30" y="240" width="100" height="80" rx="4" fill="none" strokeWidth="1" strokeDasharray="4 2" />
              <rect x="150" y="240" width="100" height="80" rx="4" fill="none" strokeWidth="1" strokeDasharray="4 2" />
              
              {/* Services section */}
              <line x1="30" y1="350" x2="250" y2="350" strokeWidth="1" strokeDasharray="4 2" />
              <rect x="30" y="370" width="220" height="40" rx="4" fill="none" strokeWidth="1" strokeDasharray="4 2" />
              <rect x="30" y="420" width="220" height="40" rx="4" fill="none" strokeWidth="1" strokeDasharray="4 2" />
              
              {/* Notch */}
              <rect x="100" y="20" width="80" height="24" rx="12" fill="none" strokeWidth="1.5" strokeDasharray="6 3" />
            </motion.svg>

            {/* Annotation labels */}
            <motion.div 
              className="absolute -right-32 top-16 text-xs text-stone-400 flex items-center gap-2 hidden md:flex"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-8 h-px bg-stone-300" />
              Navigation
            </motion.div>
            
            <motion.div 
              className="absolute -right-24 top-36 text-xs text-stone-400 flex items-center gap-2 hidden md:flex"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-8 h-px bg-stone-300" />
              Hero
            </motion.div>
            
            <motion.div 
              className="absolute -left-28 top-64 text-xs text-stone-400 flex items-center gap-2 hidden md:flex"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              Gallery
              <span className="w-8 h-px bg-stone-300" />
            </motion.div>
            
            <motion.div 
              className="absolute -right-28 bottom-32 text-xs text-stone-400 flex items-center gap-2 hidden md:flex"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <span className="w-8 h-px bg-stone-300" />
              Services
            </motion.div>
          </motion.div>

          {/* Pencil icon */}
          <motion.div 
            className="absolute bottom-24 right-24 text-stone-300 hidden md:block"
            animate={{ rotate: [0, -5, 0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* ============ SCENE 6: Final Website ============ */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: scene6Opacity }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f1a16] via-[#2a2320] to-[#1a1614]" />
          
          {/* Subtle glow behind phone */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center">
            <motion.p 
              className="text-amber-400/80 text-sm tracking-[0.3em] uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              The Final Result
            </motion.p>

            {/* Phone mockup with website */}
            <motion.div 
              className="relative mx-auto perspective-1000"
              style={{ 
                scale: websiteScale,
                rotateX: websiteRotateX,
              }}
            >
              {/* Phone frame */}
              <div className="relative w-[300px] h-[620px] bg-[#1a1614] rounded-[48px] p-3 shadow-2xl shadow-black/50 border border-stone-800">
                {/* Screen */}
                <div className="w-full h-full rounded-[36px] overflow-hidden bg-stone-900">
                  {/* Website preview iframe or image */}
                  <iframe 
                    src="https://sunsetnails.lovable.app" 
                    className="w-full h-full border-0 scale-[0.99] origin-top"
                    title="Sunset Nails Website Preview"
                  />
                </div>
                
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#1a1614] rounded-full" />
              </div>

              {/* Floating feature badges */}
              <motion.div 
                className="absolute -left-20 top-24 px-3 py-1.5 bg-amber-500/20 backdrop-blur border border-amber-500/30 rounded-full text-amber-300 text-xs hidden md:block"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✓ Mobile-First
              </motion.div>
              
              <motion.div 
                className="absolute -right-16 top-48 px-3 py-1.5 bg-amber-500/20 backdrop-blur border border-amber-500/30 rounded-full text-amber-300 text-xs hidden md:block"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                ✓ Fast Loading
              </motion.div>
              
              <motion.div 
                className="absolute -left-24 bottom-48 px-3 py-1.5 bg-amber-500/20 backdrop-blur border border-amber-500/30 rounded-full text-amber-300 text-xs hidden md:block"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ✓ SEO Ready
              </motion.div>
            </motion.div>

            <motion.h3 
              className="mt-8 text-2xl md:text-3xl font-display text-amber-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              This is what we built
            </motion.h3>
            
            <motion.p 
              className="mt-2 text-amber-400/60 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              In just 7 days, from concept to launch
            </motion.p>
          </div>
        </motion.div>

        {/* ============ Persistent CTA Button ============ */}
        <motion.div 
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          style={{ opacity: ctaOpacity }}
        >
          <motion.button
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium">Book a Consultation</span>
            <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              →
            </span>
          </motion.button>
        </motion.div>

        {/* ============ Scroll Progress Indicator ============ */}
        <motion.div 
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
          style={{ opacity: ctaOpacity }}
        >
          <div className="flex flex-col items-center gap-2">
            {['Exterior', 'Enter', 'Results', 'Vision', 'Sketch', 'Website'].map((label, i) => (
              <motion.div
                key={label}
                className="group flex items-center gap-3"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-amber-400/30"
                  style={{
                    backgroundColor: useTransform(
                      scrollYProgress,
                      [i * 0.166, (i + 1) * 0.166],
                      ['rgba(251, 191, 36, 0.3)', 'rgba(251, 191, 36, 1)']
                    )
                  }}
                />
                <span className="text-xs text-amber-400/0 group-hover:text-amber-400/60 transition-colors whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CinematicHero;
