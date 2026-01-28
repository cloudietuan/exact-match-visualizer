import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import CinematicHeroV4 from '@/components/sections/CinematicHeroV4';
import WhatYouGetSection from '@/components/sections/WhatYouGetSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import LoadingIntro from '@/components/LoadingIntro';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll after loading
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingIntro onComplete={() => setIsLoading(false)} />}
      
      <div className={`relative bg-lumina-cream min-h-screen ${isLoading ? 'overflow-hidden' : ''}`}>
        {/* Navbar */}
        <Navbar />
        
        {/* Cinematic Scroll Journey */}
        <CinematicHeroV4 />
        
        {/* What You Get */}
        <WhatYouGetSection />
        
        {/* How It Works */}
        <section id="process">
          <HowItWorksSection />
        </section>
        
        {/* Why Choose Us */}
        <WhyChooseUsSection />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* CTA Section */}
        <CTASection />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
