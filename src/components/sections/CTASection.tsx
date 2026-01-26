import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={containerRef} id="contact" className="py-20 sm:py-24 md:py-32 bg-lumina-cream relative overflow-hidden">
      {/* Decorative shapes */}
      <motion.div
        className="absolute -left-24 sm:-left-32 top-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-lumina-terracotta/5"
        style={{ y }}
      />
      <motion.div
        className="absolute -right-16 sm:-right-20 top-1/4 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-lumina-terracotta/10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-25, 25]) }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          style={{ opacity }}
          className="max-w-2xl md:max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-lumina-ink-subtle text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">
              Ready to Start?
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-6 mb-5 sm:mb-8 leading-tight text-lumina-ink">
              Let's create your 
              <span className="text-brush text-lumina-terracotta block">Sunset Nails</span>
            </h2>
            
            <p className="text-lumina-ink-muted text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-md mx-auto">
              Your salon deserves a website as beautiful as the work you do. Schedule a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <motion.button 
                className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-lumina-ink text-white rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-lumina-ink/90 transition-colors shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consultation
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
              <motion.button 
                className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 border-2 border-lumina-ink/20 rounded-full font-medium text-sm sm:text-base md:text-lg hover:bg-lumina-cream-warm transition-colors text-lumina-ink"
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
