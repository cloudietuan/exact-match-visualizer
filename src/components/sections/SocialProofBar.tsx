import { motion } from 'framer-motion';

const logos = [
  { name: 'Sunset Nails', initial: 'S' },
  { name: 'Luxe Lounge', initial: 'L' },
  { name: 'Polished', initial: 'P' },
  { name: 'Nail Bar', initial: 'N' },
  { name: 'Glow Studio', initial: 'G' },
  { name: 'Bliss Spa', initial: 'B' },
];

const SocialProofBar = () => {
  return (
    <section className="py-16 bg-lumina-bg-warm border-y border-lumina-ink/5">
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
              className="flex items-center gap-2 text-lumina-ink-muted hover:text-lumina-ink transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-lumina-bg-soft flex items-center justify-center font-display text-lg">
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
