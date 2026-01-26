import { motion } from 'framer-motion';

// A section to highlight the 5 different design styles

const styles = [
  {
    name: 'Vizcom',
    description: 'Clean, brush typography, centered layouts',
    color: 'bg-lumina-cream-warm',
    textColor: 'text-lumina-ink',
    accent: 'text-lumina-terracotta',
  },
  {
    name: 'Midlife Engineering',
    description: 'Stacked panels, horizontal scroll, depth',
    color: 'bg-[#2a2a2a]',
    textColor: 'text-white',
    accent: 'text-lumina-gold',
  },
  {
    name: 'Jesko Jets',
    description: 'Dark luxury, gold accents, 3D effects',
    color: 'bg-lumina-dark',
    textColor: 'text-white',
    accent: 'text-lumina-gold',
  },
  {
    name: 'Kineticsplay',
    description: 'Massive typography, full-bleed layouts',
    color: 'bg-lumina-cream-soft',
    textColor: 'text-lumina-ink',
    accent: 'text-lumina-terracotta',
  },
  {
    name: 'dontboardme',
    description: 'Playful, colorful, interactive elements',
    color: 'bg-lumina-pink',
    textColor: 'text-lumina-coral',
    accent: 'text-lumina-yellow',
  },
];

const StyleShowcaseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-lumina-ink-subtle text-xs uppercase tracking-[0.3em]">Inspiration</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">5 Styles, 1 Showcase</h2>
          <p className="text-lumina-ink-muted mt-4 max-w-xl mx-auto">
            Each section of this website demonstrates a different design aesthetic, 
            showcasing our versatility and range.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {styles.map((style, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${style.color} p-6 rounded-xl cursor-pointer`}
            >
              <p className={`${style.accent} text-xs uppercase tracking-widest mb-2`}>
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className={`${style.textColor} font-display text-lg mb-2`}>
                {style.name}
              </h3>
              <p className={`${style.textColor} opacity-60 text-xs`}>
                {style.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleShowcaseSection;
