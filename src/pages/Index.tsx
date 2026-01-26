import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import CinematicHeroV2 from '@/components/sections/CinematicHeroV2';
import PricingSection from '@/components/sections/PricingSection';
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
        {/* Cinematic Scroll Journey V2 */}
        <CinematicHeroV2 />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* CTA Section */}
        <CTASection />
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
