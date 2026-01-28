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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' as const
    } 
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { 
      duration: 0.8, 
      delay: 0.5,
      ease: 'easeOut' as const
    } 
  },
};

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-lumina-cream overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-4">Process</p>
          <h2 className="text-4xl md:text-5xl font-display text-lumina-ink">
            How it works
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              variants={stepVariants}
            >
              {/* Step number */}
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lumina-ink text-white font-display text-xl mb-6"
                whileHover={{ scale: 1.1, backgroundColor: '#C5A572' }}
                transition={{ duration: 0.3 }}
              >
                {step.number}
              </motion.div>
              
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-lumina-cream-warm origin-left"
                  variants={lineVariants}
                />
              )}
              
              <h3 className="text-xl font-display text-lumina-ink mb-3">
                {step.title}
              </h3>
              <p className="text-lumina-ink-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtext */}
        <motion.p 
          className="text-center mt-12 text-lumina-gold text-base md:text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Most sites are live within a week.
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
