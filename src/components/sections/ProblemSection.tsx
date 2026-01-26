import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const problems = [
  {
    emoji: '😫',
    title: 'No Time to DIY',
    description: "Between clients, inventory, and life—who has time to figure out Wix? You didn't become a nail artist to become a web developer.",
  },
  {
    emoji: '💸',
    title: 'Agencies Cost $5K+',
    description: "Most web agencies charge $3,000-$10,000 upfront. That's a massive risk when you're not sure it'll even bring more clients.",
  },
  {
    emoji: '📱',
    title: 'DIY Sites Look... DIY',
    description: "Generic templates scream 'I made this in 5 minutes.' Your beautiful nail art deserves a website that matches your talent.",
  },
];

const ProblemSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
    },
  };

  return (
    <section className="py-24 relative">
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
            The Struggle is Real
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Sound Familiar?</h2>
          <p className="mt-4 text-lumina-cream-muted text-lg max-w-md mx-auto">
            Most nail salon owners face the same frustrations.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 0 40px -10px hsl(var(--lumina-rose) / 0.3)',
              }}
              className="group glass rounded-2xl p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-glow flex items-center justify-center text-2xl mb-6">
                {problem.emoji}
              </div>
              <h3 className="font-display text-2xl mb-4">{problem.title}</h3>
              <p className="text-lumina-cream-muted leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
