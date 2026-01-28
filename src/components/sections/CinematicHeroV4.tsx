import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BookingModal from '@/components/BookingModal';
import LandmarkMark from '@/components/BrandMark';

const CinematicHeroV4 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Scene 0: Logo Animation (0% - 10%)
  const scene0Opacity = useTransform(scrollYProgress, [0, 0.07, 0.10], [1, 1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const logoRotate = useTransform(scrollYProgress, [0, 0.05], [-5, 0]);

  // Scene 1: Empty Browser (10% - 20%)
  const scene1Opacity = useTransform(scrollYProgress, [0.08, 0.12, 0.18, 0.20], [0, 1, 1, 0]);
  const browserInitialScale = useTransform(scrollYProgress, [0.10, 0.15], [0.95, 1]);

  // Scene 2: Wireframe Draws In (20% - 40%)
  const scene2Opacity = useTransform(scrollYProgress, [0.18, 0.22, 0.37, 0.40], [0, 1, 1, 0]);
  const wireframeProgress = useTransform(scrollYProgress, [0.22, 0.35], [1000, 0]);

  // Scene 3: Design Fills In (40% - 58%)
  const scene3Opacity = useTransform(scrollYProgress, [0.38, 0.43, 0.55, 0.58], [0, 1, 1, 0]);
  const designProgress = useTransform(scrollYProgress, [0.43, 0.53], [0, 1]);

  // Scene 4: Final Website (58% - 85%)
  const scene4Opacity = useTransform(scrollYProgress, [0.56, 0.62, 0.82, 0.85], [0, 1, 1, 0]);

  // Scene 5: CTA (85% - 100%)
  const scene5Opacity = useTransform(scrollYProgress, [0.83, 0.88, 0.98, 1], [0, 1, 1, 0]);

  return (
    <>
      <div ref={containerRef} className="h-[800vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* Scene 0: Logo Animation */}
          <motion.div 
            className="absolute inset-0 bg-[#FAF8F5] flex items-center justify-center flex-col"
            style={{ opacity: scene0Opacity }}
          >
            {/* Animated Logo */}
            <motion.div
              className="relative"
              style={{ scale: logoScale, rotate: logoRotate }}
            >
              {/* Large L Mark */}
              <LandmarkMark size={120} animated variant="thin" />
              
              {/* Glowing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-[28px] border-2 border-lumina-gold/30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Brand name with staggered reveal */}
            <motion.div
              className="mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1
                className="text-lumina-ink text-2xl md:text-3xl font-display font-medium tracking-[0.2em] uppercase"
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Lumina Sites
              </motion.h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-4 text-lumina-ink-subtle text-sm tracking-[0.15em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Premium websites for beauty professionals
            </motion.p>

            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-12 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-[#9A948C] text-xs tracking-widest uppercase">Scroll</span>
              <motion.div
                className="text-[#B8A990] w-4 h-4"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
                  <path d="M10 4v12M10 16l-4-4M10 16l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scene 1: Empty Browser */}
          <motion.div 
            className="absolute inset-0 bg-[#FAF8F5] flex items-center justify-center flex-col"
            style={{ opacity: scene1Opacity }}
          >
            {/* Browser window */}
            <motion.div 
              className="w-[90vw] max-w-4xl aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-[#E5E0DA]"
              style={{ scale: browserInitialScale }}
            >
              {/* Browser chrome bar */}
              <div className="h-10 md:h-12 bg-[#1A1917] flex items-center">
                {/* Traffic lights */}
                <div className="flex gap-2 ml-4">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                {/* URL bar */}
                <div className="flex-1 mx-4">
                  <div className="bg-[#2C2926] rounded-md px-4 py-1.5 flex items-center justify-center">
                    <span className="text-[#6B6560] text-sm font-mono">yoursalon.com</span>
                  </div>
                </div>
              </div>
              {/* Browser content - empty state */}
              <div className="bg-[#FEFEFE] flex-1 h-[calc(100%-2.5rem)] md:h-[calc(100%-3rem)] flex items-center justify-center">
                <p className="text-[#C4C0BA] text-lg md:text-xl font-light italic text-center px-8">
                  Your salon deserves better than this
                </p>
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <span className="text-[#9A948C] text-sm">Scroll to build</span>
              <motion.div
                className="text-[#B8A990] w-5 h-5"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
                  <path d="M10 4v12M10 16l-4-4M10 16l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Scene 2: Wireframe Draws In */}
          <motion.div 
            className="absolute inset-0 bg-[#FAF8F5] flex items-center justify-center"
            style={{ opacity: scene2Opacity }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center max-w-7xl mx-auto px-6">
              {/* Left side - Text (desktop only) */}
              <div className="hidden lg:block max-w-sm">
                <p className="text-[#B8A990] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  STEP 1
                </p>
                <h2 className="text-[#1A1917] text-3xl xl:text-4xl font-display font-medium leading-tight">
                  We map out your customer's journey
                </h2>
                <p className="text-[#6B645C] text-base font-light mt-4 leading-relaxed">
                  Every click, every scroll, every booking — designed with intention.
                </p>
              </div>

              {/* Right side - Browser with wireframe */}
              <div className="w-[90vw] lg:w-[50vw] max-w-3xl aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-[#E5E0DA]">
                {/* Browser chrome bar */}
                <div className="h-10 md:h-12 bg-[#1A1917] flex items-center">
                  <div className="flex gap-2 ml-4">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-[#2C2926] rounded-md px-4 py-1.5 flex items-center justify-center">
                      <span className="text-[#6B6560] text-sm font-mono">yoursalon.com/wireframe</span>
                    </div>
                  </div>
                </div>
                {/* Browser content - wireframe SVG */}
                <div className="bg-[#FEFEFE] flex-1 h-[calc(100%-2.5rem)] md:h-[calc(100%-3rem)] flex items-center justify-center p-4">
                  <svg viewBox="0 0 400 280" className="w-full h-full">
                    {/* Header bar */}
                    <motion.rect 
                      x="10" y="10" width="380" height="30" rx="4"
                      stroke="#C4C0BA" strokeWidth="1.5" fill="none"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    {/* Logo placeholder */}
                    <motion.rect 
                      x="20" y="17" width="60" height="16" rx="2"
                      stroke="#C4C0BA" strokeWidth="1.5" fill="none"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    {/* Nav items */}
                    <motion.line 
                      x1="280" y1="25" x2="310" y2="25"
                      stroke="#C4C0BA" strokeWidth="1.5"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    <motion.line 
                      x1="320" y1="25" x2="350" y2="25"
                      stroke="#C4C0BA" strokeWidth="1.5"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    <motion.rect 
                      x="360" y="18" width="20" height="14" rx="2"
                      stroke="#C4C0BA" strokeWidth="1.5" fill="none"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    
                    {/* Hero section */}
                    <motion.rect 
                      x="10" y="50" width="180" height="100" rx="4"
                      stroke="#C4C0BA" strokeWidth="1.5" fill="none"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    {/* Hero text lines */}
                    <motion.line 
                      x1="210" y1="70" x2="380" y2="70"
                      stroke="#C4C0BA" strokeWidth="1.5"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    <motion.line 
                      x1="210" y1="90" x2="350" y2="90"
                      stroke="#C4C0BA" strokeWidth="1.5"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    <motion.line 
                      x1="210" y1="110" x2="320" y2="110"
                      stroke="#C4C0BA" strokeWidth="1.5"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    {/* CTA button */}
                    <motion.rect 
                      x="210" y="125" width="80" height="20" rx="4"
                      stroke="#C4C0BA" strokeWidth="1.5" fill="none"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    
                    {/* Service cards */}
                    <motion.rect 
                      x="10" y="170" width="120" height="100" rx="4"
                      stroke="#C4C0BA" strokeWidth="1.5" fill="none"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    <motion.rect 
                      x="140" y="170" width="120" height="100" rx="4"
                      stroke="#C4C0BA" strokeWidth="1.5" fill="none"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                    <motion.rect 
                      x="270" y="170" width="120" height="100" rx="4"
                      stroke="#C4C0BA" strokeWidth="1.5" fill="none"
                      strokeDasharray="1000"
                      style={{ strokeDashoffset: wireframeProgress }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scene 3: Design Fills In */}
          <motion.div 
            className="absolute inset-0 bg-[#FAF8F5] flex items-center justify-center"
            style={{ opacity: scene3Opacity }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center max-w-7xl mx-auto px-6">
              {/* Left side - Text */}
              <div className="hidden lg:block max-w-sm">
                <p className="text-[#B8A990] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  STEP 2
                </p>
                <h2 className="text-[#1A1917] text-3xl xl:text-4xl font-display font-medium leading-tight">
                  Your brand comes to life
                </h2>
                <p className="text-[#6B645C] text-base font-light mt-4 leading-relaxed">
                  Colors, fonts, and imagery that reflect your salon's unique personality.
                </p>
              </div>

              {/* Right side - Browser with styled preview */}
              <div className="w-[90vw] lg:w-[50vw] max-w-3xl aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-[#E5E0DA]">
                <div className="h-10 md:h-12 bg-[#1A1917] flex items-center">
                  <div className="flex gap-2 ml-4">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-[#2C2926] rounded-md px-4 py-1.5 flex items-center justify-center">
                      <span className="text-[#6B6560] text-sm font-mono">yoursalon.com/design</span>
                    </div>
                  </div>
                </div>
                {/* Styled preview */}
                <motion.div 
                  className="bg-gradient-to-br from-[#FAF8F5] to-[#F0EBE3] flex-1 h-[calc(100%-2.5rem)] md:h-[calc(100%-3rem)] p-4 overflow-hidden"
                  style={{ opacity: designProgress }}
                >
                  <div className="w-full h-full bg-white rounded-lg shadow-sm p-4 space-y-3">
                    {/* Mini header */}
                    <div className="flex items-center justify-between border-b border-[#E5E0DA] pb-2">
                      <div className="w-16 h-4 bg-[#B8A990] rounded" />
                      <div className="flex gap-2">
                        <div className="w-8 h-2 bg-[#D4CFC7] rounded" />
                        <div className="w-8 h-2 bg-[#D4CFC7] rounded" />
                        <div className="w-12 h-4 bg-[#1A1917] rounded" />
                      </div>
                    </div>
                    {/* Mini hero */}
                    <div className="flex gap-4">
                      <div className="w-1/2 h-20 bg-gradient-to-br from-[#E8E2DA] to-[#D4CFC7] rounded" />
                      <div className="w-1/2 space-y-2 py-2">
                        <div className="w-full h-3 bg-[#1A1917] rounded" />
                        <div className="w-3/4 h-3 bg-[#6B645C] rounded" />
                        <div className="w-16 h-5 bg-[#B8A990] rounded mt-2" />
                      </div>
                    </div>
                    {/* Mini cards */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="aspect-square bg-gradient-to-br from-[#F5F2EE] to-[#E8E2DA] rounded p-2">
                        <div className="w-full h-1/2 bg-[#D4CFC7] rounded mb-1" />
                        <div className="w-2/3 h-2 bg-[#1A1917] rounded" />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-[#F5F2EE] to-[#E8E2DA] rounded p-2">
                        <div className="w-full h-1/2 bg-[#D4CFC7] rounded mb-1" />
                        <div className="w-2/3 h-2 bg-[#1A1917] rounded" />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-[#F5F2EE] to-[#E8E2DA] rounded p-2">
                        <div className="w-full h-1/2 bg-[#D4CFC7] rounded mb-1" />
                        <div className="w-2/3 h-2 bg-[#1A1917] rounded" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Scene 4: Final Website */}
          <motion.div 
            className="absolute inset-0 bg-[#FAF8F5] flex items-center justify-center"
            style={{ opacity: scene4Opacity }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center max-w-7xl mx-auto px-6">
              {/* Left side - Text */}
              <div className="hidden lg:block max-w-sm">
                <p className="text-[#B8A990] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  STEP 3
                </p>
                <h2 className="text-[#1A1917] text-3xl xl:text-4xl font-display font-medium leading-tight">
                  Ready to book clients
                </h2>
                <p className="text-[#6B645C] text-base font-light mt-4 leading-relaxed">
                  A polished, professional website that turns visitors into appointments.
                </p>
              </div>

              {/* Right side - Browser with live site */}
              <div className="w-[90vw] lg:w-[50vw] max-w-3xl aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-[#E5E0DA]">
                <div className="h-10 md:h-12 bg-[#1A1917] flex items-center">
                  <div className="flex gap-2 ml-4">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-[#2C2926] rounded-md px-4 py-1.5 flex items-center justify-center">
                      <span className="text-[#28C840] text-sm font-mono">● yoursalon.com — Live</span>
                    </div>
                  </div>
                </div>
                {/* Live site iframe - scrollable */}
                <div className="bg-white flex-1 h-[calc(100%-2.5rem)] md:h-[calc(100%-3rem)] overflow-auto">
                  <iframe
                    src="https://sunsetnails.lovable.app"
                    className="w-full h-full border-0"
                    title="Demo salon website"
                    style={{ pointerEvents: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scene 5: CTA */}
          <motion.div 
            className="absolute inset-0 bg-[#1A1917] flex items-center justify-center"
            style={{ opacity: scene5Opacity }}
          >
            <div className="text-center px-6 max-w-2xl">
              <motion.h2
                className="text-white text-4xl lg:text-5xl font-display font-medium leading-tight text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Ready to upgrade your salon's website?
              </motion.h2>
              <motion.p
                className="text-white/70 text-lg font-light text-center max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Free 15-minute walkthrough. No pressure.
              </motion.p>
              <motion.button
                onClick={() => setIsBookingOpen(true)}
                className="mt-10 px-8 py-4 text-lg font-semibold rounded-full bg-white text-[#1A1917] hover:bg-[#FAF8F5] transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get My Website
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        calendlyUrl=""
      />
    </>
  );
};

export default CinematicHeroV4;
