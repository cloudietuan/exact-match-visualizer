import { motion } from 'framer-motion';

// Vizcom-inspired: Clean logo trust bar

const logos = [
  { name: 'Sunset Nails', initial: 'SN' },
  { name: 'Luxe Lounge', initial: 'LL' },
  { name: 'Polished', initial: 'P' },
  { name: 'Nail Bar', initial: 'NB' },
  { name: 'Glow Studio', initial: 'GS' },
  { name: 'Bliss Spa', initial: 'BS' },
];

const SocialProofBar = () => {
  return (
    <section className="py-16 bg-lumina-cream-warm border-y border-lumina-ink/5">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-lumina-ink-subtle text-sm">
            Trusted by leading salons across Arizona
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-lumina-ink-muted hover:text-lumina-ink transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-lumina-cream-soft flex items-center justify-center font-display text-sm group-hover:bg-lumina-terracotta group-hover:text-white transition-colors">
                {logo.initial}
              </div>
              <span className="text-sm font-medium hidden sm:block">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
