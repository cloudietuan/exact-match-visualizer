import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import WebsiteShowcase from '@/components/sections/WebsiteShowcase';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import IntroAnimation from '@/components/IntroAnimation';
import Marquee from '@/components/Marquee';
import DrawPathOnScroll from '@/components/DrawPathOnScroll';
import ScrollGlobe from '@/components/ScrollGlobe';
import SmoothScroll from '@/components/SmoothScroll';
import DynamicCursor from '@/components/DynamicCursor';
import AnimatedAccordion from '@/components/AnimatedAccordion';
import LiveContactForm from '@/components/LiveContactForm';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const footerRef = useRef<HTMLElement>(null);

  return (
    <SmoothScroll>
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
      
      {/* Dynamic cursor - hidden on mobile */}
      <DynamicCursor />
      
      <motion.div 
        className="min-h-screen bg-background text-foreground overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Navbar />
        
        {/* Sketch-to-Website Hero with scroll transformation */}
        <HeroSection />
        
        {/* Scroll-responsive marquee divider */}
        <div className="py-6 sm:py-10 bg-lumina-cream overflow-hidden">
          <Marquee text="SKETCH • DESIGN • BUILD • LAUNCH • " baseSpeed={25} scrollMultiplier={0.3} />
        </div>
        
        {/* Draw path decoration with globe */}
        <div className="relative py-8 bg-lumina-cream">
          <DrawPathOnScroll className="max-w-4xl mx-auto px-6" />
          <ScrollGlobe />
        </div>
        
        {/* Full Sunset Nails website showcase */}
        <div id="work">
          <WebsiteShowcase />
        </div>
        
        {/* Marquee - opposite direction */}
        <div className="py-6 sm:py-10 bg-lumina-cream overflow-hidden">
          <Marquee text="RESULTS • CONVERT • ELEVATE • GROW • " baseSpeed={30} scrollMultiplier={-0.3} />
        </div>
        
        {/* Process section with scroll animations */}
        <ProcessSection />
        
        {/* FAQ Section with animated accordion */}
        <section className="py-16 sm:py-20 md:py-28 bg-lumina-cream-warm">
          <div className="container mx-auto px-6 sm:px-8 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 sm:mb-14"
            >
              <span className="text-lumina-ink-subtle text-xs uppercase tracking-[0.4em]">FAQ</span>
              <h2 className="font-display text-scale-4xl mt-4 text-lumina-ink">
                Common <span className="text-brush text-lumina-terracotta">Questions</span>
              </h2>
            </motion.div>
            <div className="max-w-2xl">
              <AnimatedAccordion />
            </div>
          </div>
        </section>
        
        {/* Pricing with dark luxury style */}
        <PricingSection />
        
        {/* Contact section with live form */}
        <section className="py-16 sm:py-20 md:py-28 bg-lumina-cream">
          <div className="container mx-auto px-6 sm:px-8 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-lumina-ink-subtle text-xs uppercase tracking-[0.4em]">Get in Touch</span>
                <h2 className="font-display text-scale-4xl mt-4 mb-6 text-lumina-ink">
                  Let's Create <span className="text-brush text-lumina-terracotta">Together</span>
                </h2>
                <p className="text-lumina-ink-muted text-scale-base mb-8 max-w-md">
                  Ready to transform your salon's online presence? Fill out the form and we'll get back to you within 24 hours.
                </p>
                <div className="space-y-4 text-lumina-ink-muted text-sm">
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-lumina-terracotta/10 flex items-center justify-center text-lumina-terracotta">✉</span>
                    hello@luminasites.co
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-lumina-terracotta/10 flex items-center justify-center text-lumina-terracotta">📍</span>
                    Mesa, Arizona
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm"
              >
                <LiveContactForm />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA with parallax */}
        <CTASection />
        
        {/* Dark editorial footer with parallax */}
        <Footer ref={footerRef} />
      </motion.div>
    </SmoothScroll>
  );
};

export default Index;