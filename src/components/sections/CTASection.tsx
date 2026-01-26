import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section id="contact" className="py-32 bg-lumina-bg-deep relative overflow-hidden">
      {/* Decorative stacked panels in background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="absolute top-0 bottom-0 bg-lumina-bg-elevated/30"
            style={{
              left: `${i * 15}%`,
              width: '100%',
              borderLeft: '1px solid hsl(var(--lumina-gold) / 0.1)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-lumina-cream-subtle text-xs uppercase tracking-[0.3em]">
              Start Your Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 leading-tight">
              Your salon deserves to 
              <span className="text-lumina-gold"> shine online</span>
            </h2>
            <p className="text-lumina-cream-muted text-lg mb-12 max-w-lg">
              Join 50+ salons who've transformed their online presence. 
              Schedule a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxuryFilled" size="lg" className="group">
                <span>Book Consultation</span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <Button variant="luxury" size="lg">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
