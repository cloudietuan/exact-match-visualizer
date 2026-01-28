import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const reasons = [
  'Built specifically for salons and service businesses',
  'No long-term contracts — cancel anytime',
  'Real human support, not ticket systems',
  'Fast turnaround and clear communication',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' as const
    } 
  },
};

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#FAF8F5] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-4">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-display text-lumina-ink">
            Why salon owners choose us
          </h2>
        </motion.div>

        {/* Reasons grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-lumina-cream-warm"
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                boxShadow: '0 10px 40px -10px rgba(197, 165, 114, 0.2)',
                borderColor: 'rgba(197, 165, 114, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex-shrink-0 w-8 h-8 rounded-full bg-lumina-gold/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(197, 165, 114, 0.25)' }}
              >
                <Check className="w-5 h-5 text-lumina-gold" />
              </motion.div>
              <p className="text-lumina-ink text-lg leading-relaxed">{reason}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
