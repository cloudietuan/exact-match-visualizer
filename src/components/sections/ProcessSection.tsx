import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const steps = [
  {
    number: '01',
    emoji: '📞',
    title: 'Discovery Call',
    description: "Quick 15-minute call to understand your salon's vibe, services, and goals.",
    time: 'Day 1',
  },
  {
    number: '02',
    emoji: '🎨',
    title: 'Design & Build',
    description: 'We create your custom website using your brand, photos, and personality.',
    time: 'Days 2-5',
  },
  {
    number: '03',
    emoji: '✨',
    title: 'Review & Refine',
    description: "You review, we refine. We don't stop until you love it.",
    time: 'Day 6',
  },
  {
    number: '04',
    emoji: '🚀',
    title: 'Launch & Grow',
    description: 'Your site goes live. We handle hosting, updates, and ongoing support.',
    time: 'Day 7+',
  },
];

const ProcessSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
    },
  };

  return (
    <section className="py-24 bg-lumina-bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            The Process
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Live in 7 Days. Seriously.
          </h2>
          <p className="mt-4 text-lumina-cream-muted text-lg max-w-md mx-auto">
            We've streamlined everything so you can focus on what you do best.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-lumina-rose via-lumina-blush to-lumina-champagne" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number circle */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-glow flex items-center justify-center z-10">
                <span className="text-background font-display text-lg">{step.number}</span>
              </div>

              {/* Content */}
              <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
              }`}>
                <div className="glass rounded-2xl p-6">
                  <span className="text-3xl mb-4 block">{step.emoji}</span>
                  <h3 className="font-display text-xl mb-2">{step.title}</h3>
                  <p className="text-lumina-cream-muted mb-3">{step.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-lumina-champagne/20 text-lumina-champagne text-xs font-medium">
                    {step.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
