import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofBar from '@/components/sections/SocialProofBar';
import StyleShowcaseSection from '@/components/sections/StyleShowcaseSection';
import HorizontalScrollSection from '@/components/sections/HorizontalScrollSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import IntroAnimation from '@/components/IntroAnimation';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
      
      <motion.div 
        className="min-h-screen bg-background text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Navbar />
        
        {/* Vizcom-inspired Hero: Brush typography, centered, carousel */}
        <HeroSection />
        
        {/* Vizcom-inspired: Logo trust bar */}
        <SocialProofBar />
        
        {/* Style showcase: Explains the 5 different aesthetics */}
        <StyleShowcaseSection />
        
        {/* Midlife Engineering-inspired: Stacked panels + horizontal scroll */}
        <div id="work">
          <HorizontalScrollSection />
        </div>
        
        {/* Jesko Jets-inspired: Dark luxury with gold accents */}
        <StatsSection />
        
        {/* Kineticsplay-inspired: Massive full-bleed typography */}
        <ServicesSection />
        
        {/* Midlife Engineering-inspired: Mouse-reactive layered cards */}
        <PricingSection />
        
        {/* dontboardme-inspired: Playful, colorful, interactive */}
        <CTASection />
        
        {/* Jesko Jets-inspired: Dark editorial footer */}
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
