import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const reasons = [
  'Built specifically for salons and service businesses',
  'No long-term contracts — cancel anytime',
  'Real human support, not ticket systems',
  'Fast turnaround and clear communication',
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#FAF8F5] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-4">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-display text-lumina-ink">
            Why salon owners choose us
          </h2>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-lumina-cream-warm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lumina-gold/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-lumina-gold" />
              </div>
              <p className="text-lumina-ink text-lg leading-relaxed">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
