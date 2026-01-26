import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import WebsiteShowcase from '@/components/sections/WebsiteShowcase';
import ProcessSection from '@/components/sections/ProcessSection';
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
        
        {/* Sketch-to-Website Hero with scroll transformation */}
        <HeroSection />
        
        {/* Full Sunset Nails website showcase */}
        <div id="work">
          <WebsiteShowcase />
        </div>
        
        {/* Process section with scroll animations */}
        <ProcessSection />
        
        {/* Pricing with dark luxury style */}
        <PricingSection />
        
        {/* CTA with parallax */}
        <CTASection />
        
        {/* Dark editorial footer */}
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
