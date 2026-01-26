import { motion } from 'framer-motion';

const SocialProofBar = () => {
  return (
    <motion.section 
      className="py-8 bg-lumina-bg-secondary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <p className="text-lumina-cream-muted text-center md:text-left">
            Trusted by <span className="text-foreground font-medium">50+</span> nail salons across Arizona
          </p>
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="w-10 h-10 rounded-full bg-lumina-bg-elevated border border-white/5 flex items-center justify-center text-xs text-lumina-cream-subtle"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {['💅', '✨', '💖', '🌸', '💎'][i - 1]}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SocialProofBar;
