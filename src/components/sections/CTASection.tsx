import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B3D] to-[#3D2B35]" />
      
      {/* Radial glow - static */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--lumina-rose)/0.2)_0%,_transparent_60%)]" />
      
      {/* Static orbs */}
      <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-lumina-rose/10 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-lumina-champagne/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Ready to Glow?
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Your Salon Deserves a Website as Beautiful as Your Work
          </h2>
          <p className="mt-6 text-lumina-cream-muted text-lg">
            Join 50+ nail salons who've transformed their online presence. 
            First month is risk-free.
          </p>

          <div className="mt-10">
            <Button 
              variant="glow" 
              size="lg" 
              className="text-lg px-10 py-6 h-auto"
            >
              Book Your Free Consultation →
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
