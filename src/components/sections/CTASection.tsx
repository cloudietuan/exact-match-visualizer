import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full border border-lumina-ink/5" />
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-lumina-ink/5" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-lumina-ink-subtle text-xs uppercase tracking-[0.3em]">
              Start Your Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 leading-tight text-foreground">
              Your salon deserves to 
              <span className="text-brush text-lumina-accent block md:inline"> shine online</span>
            </h2>
            <p className="text-lumina-ink-muted text-lg mb-12 max-w-lg mx-auto">
              Join 50+ salons who've transformed their online presence. 
              Schedule a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-lumina-ink/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Book Consultation</span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
              <motion.button 
                className="px-8 py-4 border border-foreground/20 rounded-full font-medium hover:bg-lumina-bg-warm transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
