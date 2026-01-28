import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Professionally designed salon website',
  'Pages: Home, Services, Gallery, Contact',
  'Mobile-first and fast loading',
  'Domain, hosting, and SSL handled',
  'Optional ongoing care and updates',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' as const
    } 
  },
};

const WhatYouGetSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#FAF8F5] overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-4">What's Included</p>
          <h2 className="text-4xl md:text-5xl font-display text-lumina-ink">
            What you get
          </h2>
        </motion.div>

        {/* Checklist */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-lumina-cream-warm"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.ul 
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, i) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-lumina-gold/10 flex items-center justify-center"
                  whileHover={{ scale: 1.15, backgroundColor: 'rgba(197, 165, 114, 0.25)' }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-4 h-4 text-lumina-gold" />
                </motion.div>
                <span className="text-lumina-ink text-lg">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
          
          {/* Reassurance line */}
          <motion.p 
            className="mt-8 pt-6 border-t border-lumina-cream-warm text-lumina-ink-muted text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            No confusing dashboards. No DIY work.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
