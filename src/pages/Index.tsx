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
import InfiniteTypoScroll from '@/components/InfiniteTypoScroll';
import DrawPathOnScroll from '@/components/DrawPathOnScroll';

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
        className="min-h-screen bg-background text-foreground overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Navbar />
        
        {/* Sketch-to-Website Hero with scroll transformation */}
        <HeroSection />
        
        {/* Infinite typography scroll divider */}
        <div className="py-8 sm:py-12 bg-lumina-cream overflow-hidden">
          <InfiniteTypoScroll text="SKETCH • DESIGN • BUILD • LAUNCH • " speed={25} />
        </div>
        
        {/* Draw path decoration */}
        <div className="relative -mt-4 mb-8">
          <DrawPathOnScroll className="max-w-4xl mx-auto px-4" />
        </div>
        
        {/* Full Sunset Nails website showcase */}
        <div id="work">
          <WebsiteShowcase />
        </div>
        
        {/* Infinite scroll - opposite direction */}
        <div className="py-8 sm:py-12 bg-lumina-cream overflow-hidden">
          <InfiniteTypoScroll text="RESULTS • CONVERT • ELEVATE • GROW • " speed={30} direction="right" />
        </div>
        
        {/* Process section with scroll animations */}
        <ProcessSection />
        
        {/* Pricing with dark luxury style */}
        <PricingSection />
        
        {/* CTA with parallax */}
        <CTASection />
        
        {/* Dark editorial footer with parallax */}
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
