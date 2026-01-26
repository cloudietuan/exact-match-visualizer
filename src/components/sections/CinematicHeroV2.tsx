import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * CinematicHero V2 - Jesko Jets Inspired
 * 
 * Design Philosophy:
 * - Real photography, not illustrations
 * - Cream/white backgrounds (not dark)
 * - Massive typography that interacts with images
 * - Clean luxury minimalism
 * - Text clips through images like Jesko
 * 
 * Scene Structure:
 * 0-20%:   Scene 1 - Hero image with framed nail art (like Jesko's window)
 * 20-40%:  Scene 2 - Image expands, text scales through
 * 40-60%:  Scene 3 - Results/Stats on cream background
 * 60-80%:  Scene 4 - The transformation reveal
 * 80-100%: Scene 5 - Final website showcase
 */

const CinematicHeroV2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Scene 1: Hero with framed image (0-20%)
  const heroImageScale = useTransform(scrollYProgress, [0, 0.2], [1, 2.5]);
  const heroFrameOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const heroTextOpacity = useTransform(scrollYProgress, [0.1, 0.18], [1, 0]);
  
  // Scene 2: Image becomes background, big text appears (20-40%)
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

  // Stats stagger transforms for individual items
  const stat1Y = useTransform(scrollYProgress, [0.42, 0.52], [40, 0]);
  const stat2Y = useTransform(scrollYProgress, [0.44, 0.54], [40, 0]);
  const stat3Y = useTransform(scrollYProgress, [0.46, 0.56], [40, 0]);
  const featuresY = useTransform(scrollYProgress, [0.48, 0.56], [30, 0]);

  // Scroll progress indicator colors (using hex for framer-motion compatibility)
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
        
        {/* ============ SCENE 1: Hero with Framed Image ============ */}
        <div className="absolute inset-0 bg-lumina-cream flex items-center justify-center">
          {/* The Frame - like Jesko's airplane window */}
          <motion.div 
            className="relative"
            style={{ scale: heroImageScale }}
          >
            {/* Outer frame border */}
            <motion.div 
              className="absolute -inset-6 rounded-[60px] border-[16px] border-lumina-cream-warm shadow-2xl"
              style={{ opacity: heroFrameOpacity }}
            />
            
            {/* Main image container */}
            <div className="relative w-[340px] h-[460px] md:w-[420px] md:h-[560px] rounded-[44px] overflow-hidden shadow-2xl">
              {/* Real nail salon image from Unsplash */}
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"
                alt="Luxury nail salon"
                className="w-full h-full object-cover"
              />
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
            </div>
          </motion.div>

          {/* Hero Text - positioned around the frame */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            style={{ y: heroTextY, opacity: heroTextOpacity }}
          >
            {/* Top text */}
            <div className="absolute top-[12%] left-0 right-0 text-center">
              <p className="text-lumina-gold-muted text-sm tracking-[0.4em] uppercase font-medium">
                Lumina Sites
              </p>
            </div>
            
            {/* Side text - left */}
            <div className="absolute left-[5%] top-1/2 -translate-y-1/2 hidden lg:block">
              <h1 className="text-lumina-ink text-6xl xl:text-7xl font-display font-semibold leading-none">
                We build
              </h1>
            </div>
            
            {/* Side text - right */}
            <div className="absolute right-[5%] top-1/2 -translate-y-1/2 text-right hidden lg:block">
              <h1 className="text-lumina-ink text-6xl xl:text-7xl font-display font-semibold leading-none">
                stunning
              </h1>
            </div>
            
            {/* Bottom text */}
            <div className="absolute bottom-[15%] left-0 right-0 text-center">
              <p className="text-lumina-ink-muted text-lg md:text-xl font-light">
                websites for nail salons
              </p>
              <p className="text-lumina-ink-subtle text-sm mt-2">Scroll to explore</p>
            </div>
          </motion.div>
        </div>

        {/* ============ SCENE 2: Big Typography Over Image ============ */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: scene2Opacity }}
        >
          {/* Full bleed background image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=1600&q=80"
              alt="Nail art close-up"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" />
          </div>
          
          {/* Massive text that clips through */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ scale: bigTextScale }}
          >
            <div className="text-center px-4">
              <h2 className="text-lumina-ink text-5xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tight">
                More<br />
                <span className="text-lumina-gold">Bookings</span>
              </h2>
              <p className="mt-8 text-lumina-ink-muted text-xl md:text-2xl font-light max-w-xl mx-auto">
                Beautiful websites that turn visitors into clients
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ============ SCENE 3: Results/Stats ============ */}
        <motion.div 
          className="absolute inset-0 bg-lumina-cream flex items-center justify-center"
          style={{ opacity: scene3Opacity }}
        >
          {/* Subtle texture */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }} />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            {/* Section label */}
            <motion.p 
              className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-12"
              style={{ y: statsStagger }}
            >
              Case Study: Sunset Nails
            </motion.p>
            
            {/* Big stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  className="text-center"
                  style={{ y: stat.y }}
                >
                  <div className="text-6xl md:text-8xl font-display font-semibold text-lumina-ink tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-lumina-ink text-lg font-medium">
                    {stat.label}
                  </div>
                  <div className="text-lumina-ink-subtle text-sm">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features row */}
            <motion.div 
              className="mt-20 flex flex-wrap justify-center gap-4"
              style={{ y: featuresY }}
            >
              {['Online Booking', 'Mobile-First', 'SEO Optimized', 'Fast Loading'].map((feature) => (
                <span 
                  key={feature}
                  className="px-5 py-2.5 border border-lumina-cream-warm text-lumina-ink-muted text-sm rounded-full bg-white/50"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ============ SCENE 4: Transformation ============ */}
        <motion.div 
          className="absolute inset-0 bg-lumina-ink flex items-center justify-center overflow-hidden"
          style={{ opacity: scene4Opacity }}
        >
          {/* Gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-lumina-ink via-lumina-dark-elevated to-lumina-ink" />
          
          {/* Floating light orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lumina-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lumina-gold/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 px-6">
            {/* Left: Text */}
            <div className="text-center lg:text-left max-w-md">
              <p className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-4">
                The Result
              </p>
              <h2 className="text-white text-4xl md:text-6xl font-display font-semibold leading-tight">
                From concept<br />to launch
              </h2>
              <p className="mt-6 text-lumina-ink-subtle text-lg">
                A complete website that captures the essence of your salon and converts visitors into loyal clients.
              </p>
            </div>

            {/* Right: Phone with site preview */}
            <motion.div 
              className="relative"
              style={{ x: phoneEnter }}
            >
              {/* Phone frame */}
              <div className="relative w-[280px] h-[580px] bg-black rounded-[50px] p-2 shadow-2xl border border-lumina-ink-muted/30">
                {/* Screen */}
                <div className="w-full h-full rounded-[42px] overflow-hidden bg-lumina-ink">
                  <iframe 
                    src="https://sunsetnails.lovable.app" 
                    className="w-full h-full border-0"
                    title="Sunset Nails Preview"
                  />
                </div>
                
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                
                {/* Side button */}
                <div className="absolute right-[-2px] top-28 w-[3px] h-12 bg-lumina-ink-muted/30 rounded-l" />
              </div>

              {/* Floating badge */}
              <motion.div 
                className="absolute -right-4 top-20 px-4 py-2 bg-lumina-gold text-lumina-ink text-sm font-medium rounded-full shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Live Site ↗
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* ============ SCENE 5: Final CTA ============ */}
        <motion.div 
          className="absolute inset-0 bg-lumina-cream flex items-center justify-center"
          style={{ opacity: scene5Opacity, scale: finalScale }}
        >
          <div className="text-center px-6 max-w-4xl">
            <motion.p 
              className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Ready to transform your salon?
            </motion.p>
            
            <h2 className="text-lumina-ink text-4xl md:text-7xl font-display font-semibold leading-tight mb-8">
              Let's build something<br />
              <span className="text-lumina-gold">beautiful</span>
            </h2>
            
            <p className="text-lumina-ink-muted text-xl mb-12 max-w-2xl mx-auto">
              Join the nail salons that have transformed their online presence and seen real results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                className="px-8 py-4 bg-lumina-ink text-white text-lg font-medium rounded-full hover:bg-lumina-ink-muted transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consultation
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border border-lumina-cream-warm text-lumina-ink text-lg font-medium rounded-full hover:border-lumina-ink transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Pricing
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-lumina-ink-subtle text-sm">
              <span>✓ No upfront costs</span>
              <span>✓ 7-day delivery</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        {/* ============ Persistent Elements ============ */}
        
        {/* Logo - top left */}
        <div className="fixed top-6 left-6 z-50">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-lumina-ink flex items-center justify-center">
              <span className="text-white font-display text-lg font-bold">L</span>
            </div>
          </a>
        </div>

        {/* Nav - top right */}
        <div className="fixed top-6 right-6 z-50 hidden md:flex items-center gap-6">
          <a href="#work" className="text-lumina-ink-muted hover:text-lumina-ink text-sm font-medium transition-colors">Work</a>
          <a href="#pricing" className="text-lumina-ink-muted hover:text-lumina-ink text-sm font-medium transition-colors">Pricing</a>
          <a href="#contact" className="px-5 py-2 bg-lumina-ink text-white text-sm font-medium rounded-full hover:bg-lumina-ink-muted transition-colors">
            Contact
          </a>
        </div>

        {/* Scroll progress - right side */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
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
