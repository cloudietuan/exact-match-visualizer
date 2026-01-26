import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofBar from '@/components/sections/SocialProofBar';
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
        <HeroSection />
        <SocialProofBar />
        <div id="work">
          <HorizontalScrollSection />
        </div>
        <StatsSection />
        <ServicesSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
