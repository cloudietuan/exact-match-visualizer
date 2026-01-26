import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// CTA with scroll-triggered parallax

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={containerRef} id="contact" className="py-32 bg-lumina-cream relative overflow-hidden">
      {/* Decorative shapes */}
      <motion.div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-lumina-terracotta/5"
        style={{ y }}
      />
      <motion.div
        className="absolute -right-20 top-1/4 w-40 h-40 rounded-full bg-lumina-terracotta/10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          style={{ opacity }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-lumina-ink-subtle text-xs uppercase tracking-[0.4em]">
              Ready to Start?
            </span>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mt-6 mb-8 leading-tight text-lumina-ink">
              Let's create your 
              <span className="text-brush text-lumina-terracotta block">Sunset Nails</span>
            </h2>
            
            <p className="text-lumina-ink-muted text-xl mb-12 max-w-lg mx-auto">
              Your salon deserves a website as beautiful as the work you do. Schedule a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                className="px-10 py-5 bg-lumina-ink text-white rounded-full font-medium text-lg hover:bg-lumina-ink/90 transition-colors shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consultation
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
              <motion.button 
                className="px-10 py-5 border-2 border-lumina-ink/20 rounded-full font-medium text-lg hover:bg-lumina-cream-warm transition-colors"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Sunset Nails
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
