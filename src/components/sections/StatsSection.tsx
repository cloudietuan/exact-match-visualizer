import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import type { Easing } from 'framer-motion';

const stats = [
  { value: 76, suffix: '%', label: 'of consumers look up a business online before visiting', source: 'Google Consumer Insights' },
  { value: 47, suffix: '%', label: 'more bookings with optimized websites', source: 'Industry Average' },
  { value: 6.8, suffix: '%', label: 'beauty industry conversion rate (vs 2.9% average)', source: 'Shopify Data' },
  { value: 24, suffix: '/7', label: 'online booking availability', source: 'Always On' },
];

const AnimatedNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Number((easeProgress * value).toFixed(1)));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span className="text-gradient font-display text-5xl md:text-6xl">
      {value % 1 === 0 ? Math.floor(displayValue) : displayValue.toFixed(1)}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-lumina-bg-secondary">
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
            The Data
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Numbers Don't Lie</h2>
          <p className="mt-4 text-lumina-cream-muted text-lg max-w-md mx-auto">
            Our approach is backed by real industry research.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass rounded-2xl p-8 text-center"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
              <p className="mt-4 text-lumina-cream-muted">
                {stat.label}
              </p>
              <p className="mt-3 text-xs text-lumina-cream-subtle">
                {stat.source}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
