import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * CinematicHero V2 - Jesko Jets Inspired
 * 
 * Design Philosophy:
 * - Abstract visuals, no photography
 * - Cream/white backgrounds
 * - Massive typography
 * - Clean luxury minimalism
 */

const CinematicHeroV2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Scene 1: Hero with abstract frame (0-20%)
  const heroShapeScale = useTransform(scrollYProgress, [0, 0.2], [1, 2.5]);
  const heroFrameOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const heroTextOpacity = useTransform(scrollYProgress, [0.1, 0.18], [1, 0]);
  
  // Scene 2: Big text appears (20-40%)
  const scene2Opacity = useTransform(scrollYProgress, [0.18, 0.22, 0.38, 0.42], [0, 1, 1, 0]);
  const bigTextScale = useTransform(scrollYProgress, [0.2, 0.35], [0.8, 1]);
  
  // Scene 3: Stats on cream (40-60%)
  const scene3Opacity = useTransform(scrollYProgress, [0.38, 0.42, 0.58, 0.62], [0, 1, 1, 0]);
  const statsStagger = useTransform(scrollYProgress, [0.42, 0.55], [50, 0]);
  
  // Scene 4: Transformation (60-80%)
  const scene4Opacity = useTransform(scrollYProgress, [0.58, 0.62, 0.78, 0.82], [0, 1, 1, 0]);
  const phoneEnter = useTransform(scrollYProgress, [0.62, 0.75], [200, 0]);
  
  // Scene 5: Final showcase (80-100%)
  const scene5Opacity = useTransform(scrollYProgress, [0.78, 0.82, 1], [0, 1, 1]);
  const finalScale = useTransform(scrollYProgress, [0.82, 0.95], [0.9, 1]);

  // Stats stagger transforms
  const stat1Y = useTransform(scrollYProgress, [0.42, 0.52], [40, 0]);
  const stat2Y = useTransform(scrollYProgress, [0.44, 0.54], [40, 0]);
  const stat3Y = useTransform(scrollYProgress, [0.46, 0.56], [40, 0]);
  const featuresY = useTransform(scrollYProgress, [0.48, 0.56], [30, 0]);

  // Scroll progress indicator colors
  const dot1Color = useTransform(scrollYProgress, [0, 0.1], ['#E8E4DF', '#1A1A1A']);
  const dot2Color = useTransform(scrollYProgress, [0.2, 0.3], ['#E8E4DF', '#1A1A1A']);
  const dot3Color = useTransform(scrollYProgress, [0.4, 0.5], ['#E8E4DF', '#1A1A1A']);
  const dot4Color = useTransform(scrollYProgress, [0.6, 0.7], ['#E8E4DF', '#1A1A1A']);
  const dot5Color = useTransform(scrollYProgress, [0.8, 0.9], ['#E8E4DF', '#1A1A1A']);

  const stats = [
    { value: '+47%', label: 'More Bookings', sublabel: 'in first month', y: stat1Y },
    { value: '5.0', label: 'Star Rating', sublabel: 'on Google', y: stat2Y },
    { value: '7', label: 'Days', sublabel: 'to launch', y: stat3Y },
  ];

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* ============ SCENE 1: Clean Hero ============ */}
        <div className="absolute inset-0 bg-[#FAF8F5] flex items-center justify-center">
          {/* Subtle ambient gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#F5F2EE] to-[#FAF8F5]" />
          
          {/* Floating decorative particles */}
          <motion.div 
            className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-lumina-gold/30"
            animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-[35%] right-[20%] w-1.5 h-1.5 rounded-full bg-lumina-gold/25"
            animate={{ y: [0, -20, 0], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-[25%] left-[25%] w-1 h-1 rounded-full bg-lumina-coral/30"
            animate={{ y: [0, -10, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-[40%] right-[18%] w-2.5 h-2.5 rounded-full bg-lumina-gold/15"
            animate={{ y: [0, -12, 0], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Hero Typography - centered */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20"
            style={{ y: heroTextY, opacity: heroTextOpacity }}
          >
            {/* Top eyebrow */}
            <motion.p 
              className="text-[#9A8B7A] text-xs md:text-sm tracking-[0.5em] uppercase font-medium mb-6 md:mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lumina Sites
            </motion.p>
            
            {/* Main headline - stacked */}
            <h1 
              className="text-lumina-ink text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[0.95] tracking-[-0.02em] text-center"
            >
              We build<br />
              <span className="italic">stunning</span>
            </h1>
            
            {/* Bottom tagline */}
            <motion.p 
              className="text-[#6B645C] text-base md:text-lg lg:text-xl font-light tracking-wide mt-6 md:mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              websites for nail salons
            </motion.p>
            
            <motion.p 
              className="text-[#A39E96] text-xs md:text-sm mt-12 md:mt-16 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="w-6 h-px bg-[#C4B8A8]" />
              Scroll to explore
              <span className="w-6 h-px bg-[#C4B8A8]" />
            </motion.p>
          </motion.div>
        </div>

        {/* ============ SCENE 2: Big Typography ============ */}
        <motion.div 
          className="absolute inset-0 bg-[#FAF8F5]"
          style={{ opacity: scene2Opacity }}
        >
          {/* Abstract background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0EA] via-[#FAF8F5] to-[#EFE9E1]" />
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-lumina-gold/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-lumina-coral/10 blur-3xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>
          
          {/* Massive text */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ scale: bigTextScale }}
          >
            <div className="text-center px-6">
              <h2 className="text-[#1C1917] text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[0.9] tracking-[-0.03em]">
                More<br />
                <span className="text-lumina-gold italic">Bookings</span>
              </h2>
              <p className="mt-8 md:mt-10 text-[#5C564F] text-lg md:text-xl lg:text-2xl font-light max-w-lg mx-auto">
                Beautiful websites that turn visitors into clients
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ============ SCENE 3: Results/Stats ============ */}
        <motion.div 
          className="absolute inset-0 bg-[#FAF8F5] flex items-center justify-center"
          style={{ opacity: scene3Opacity }}
        >
          {/* Subtle texture */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }} />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            {/* Section label */}
            <motion.p 
              className="text-lumina-gold text-xs md:text-sm tracking-[0.4em] uppercase font-medium mb-10 md:mb-14"
              style={{ y: statsStagger }}
            >
              Case Study: Sunset Nails
            </motion.p>
            
            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  className="text-center"
                  style={{ y: stat.y }}
                >
                  <div className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-[#1C1917] tracking-[-0.02em]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[#1C1917] text-base md:text-lg font-medium">
                    {stat.label}
                  </div>
                  <div className="text-[#9A948C] text-sm">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div 
              className="mt-16 md:mt-20 flex flex-wrap justify-center gap-3 md:gap-4"
              style={{ y: featuresY }}
            >
              {['Online Booking', 'Mobile-First', 'SEO Optimized', 'Fast Loading'].map((feature) => (
                <span 
                  key={feature}
                  className="px-5 py-2.5 border border-[#E5E0DA] text-[#6B645C] text-sm rounded-full bg-white/60 backdrop-blur-sm"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ============ SCENE 4: Transformation ============ */}
        <motion.div 
          className="absolute inset-0 bg-[#1A1815] flex items-center justify-center overflow-hidden"
          style={{ opacity: scene4Opacity }}
        >
          {/* Ambient lighting */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lumina-gold/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lumina-gold/5 rounded-full blur-[120px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-6">
            {/* Text */}
            <div className="text-center lg:text-left max-w-md">
              <p className="text-lumina-gold text-xs md:text-sm tracking-[0.4em] uppercase font-medium mb-4">
                The Result
              </p>
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] tracking-[-0.02em]">
                From concept<br /><span className="italic">to launch</span>
              </h2>
              <p className="mt-6 text-[#8A847C] text-base md:text-lg font-light leading-relaxed">
                A complete website that captures the essence of your salon and converts visitors into loyal clients.
              </p>
            </div>

            {/* Phone mockup */}
            <motion.div 
              className="relative"
              style={{ x: phoneEnter }}
            >
              <div className="relative w-[260px] h-[540px] md:w-[280px] md:h-[580px] bg-[#0C0C0C] rounded-[45px] md:rounded-[50px] p-2 shadow-2xl border border-[#2A2A2A]">
                <div className="w-full h-full rounded-[38px] md:rounded-[42px] overflow-hidden bg-[#111]">
                  <iframe 
                    src="https://sunsetnails.lovable.app" 
                    className="w-full h-full border-0"
                    title="Sunset Nails Preview"
                  />
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0C0C0C] rounded-full" />
              </div>

              <motion.div 
                className="absolute -right-2 md:-right-4 top-16 md:top-20 px-4 py-2 bg-lumina-gold text-[#1A1815] text-sm font-medium rounded-full shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Live Site ↗
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* ============ SCENE 5: Final CTA ============ */}
        <motion.div 
          className="absolute inset-0 bg-[#FAF8F5] flex items-center justify-center"
          style={{ opacity: scene5Opacity, scale: finalScale }}
        >
          <div className="text-center px-6 max-w-3xl">
            <motion.p 
              className="text-lumina-gold text-xs md:text-sm tracking-[0.4em] uppercase font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Ready to transform your salon?
            </motion.p>
            
            <h2 className="text-[#1C1917] text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] tracking-[-0.02em] mb-8">
              Let's build something<br />
              <span className="text-lumina-gold italic">beautiful</span>
            </h2>
            
            <p className="text-[#6B645C] text-base md:text-lg font-light mb-10 md:mb-12 max-w-xl mx-auto">
              Join the nail salons that have transformed their online presence and seen real results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                className="px-7 py-3.5 md:px-8 md:py-4 bg-[#1C1917] text-white text-base md:text-lg font-medium rounded-full hover:bg-[#2C2926] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consultation
              </motion.button>
              
              <motion.button
                className="px-7 py-3.5 md:px-8 md:py-4 border border-[#D9D4CD] text-[#1C1917] text-base md:text-lg font-medium rounded-full hover:border-[#1C1917] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Pricing
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-8 text-[#9A948C] text-sm">
              <span>✓ No upfront costs</span>
              <span>✓ 7-day delivery</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        {/* ============ Persistent Elements ============ */}
        
        {/* Logo */}
        <div className="fixed top-5 md:top-6 left-5 md:left-6 z-50">
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#1C1917] flex items-center justify-center">
              <span className="text-white font-display text-base md:text-lg font-medium">L</span>
            </div>
          </a>
        </div>

        {/* Nav */}
        <div className="fixed top-5 md:top-6 right-5 md:right-6 z-50 hidden md:flex items-center gap-6">
          <a href="#work" className="text-[#6B645C] hover:text-[#1C1917] text-sm font-medium transition-colors">Work</a>
          <a href="#pricing" className="text-[#6B645C] hover:text-[#1C1917] text-sm font-medium transition-colors">Pricing</a>
          <a href="#contact" className="px-5 py-2 bg-[#1C1917] text-white text-sm font-medium rounded-full hover:bg-[#2C2926] transition-colors">
            Contact
          </a>
        </div>

        {/* Scroll progress */}
        <div className="fixed right-5 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2.5">
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot1Color }} />
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot2Color }} />
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot3Color }} />
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot4Color }} />
          <motion.div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot5Color }} />
        </div>

      </div>
    </div>
  );
};

export default CinematicHeroV2;
