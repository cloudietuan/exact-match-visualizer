import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="contact" className="py-32 bg-lumina-bg-deep relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--lumina-gold)/0.05)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-lumina-cream-subtle text-xs uppercase tracking-[0.3em]">Start Your Journey</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 leading-tight">
            Your salon deserves a website as beautiful as your work
          </h2>
          <p className="text-lumina-cream-muted text-lg mb-12 max-w-xl mx-auto">
            Join 50+ salons who've transformed their online presence. 
            Schedule a free consultation to see what we can create for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxuryFilled" size="lg">
              Book Consultation
            </Button>
            <Button variant="luxury" size="lg">
              View Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
