import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Quick Discovery Call',
    description: 'We learn about your salon and collect photos/services.',
  },
  {
    number: '02',
    title: 'We Build Your Site',
    description: 'We design your site and send it for review.',
  },
  {
    number: '03',
    title: 'Launch & Care',
    description: 'We launch and handle ongoing care.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-lumina-cream overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-4">Process</p>
          <h2 className="text-4xl md:text-5xl font-display text-lumina-ink">
            How it works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lumina-ink text-white font-display text-xl mb-6">
                {step.number}
              </div>
              
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-lumina-cream-warm" />
              )}
              
              <h3 className="text-xl font-display text-lumina-ink mb-3">
                {step.title}
              </h3>
              <p className="text-lumina-ink-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <motion.p 
          className="text-center mt-12 text-lumina-gold text-base md:text-lg font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Most sites are live within a week.
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
