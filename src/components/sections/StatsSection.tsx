import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Jesko Jets inspired: Dark luxury with gold accents and 3D hover

const stats = [
  { value: '50+', label: 'Salons Launched' },
  { value: '47%', label: 'Avg. Booking Increase' },
  { value: '7', label: 'Days to Launch' },
  { value: '100%', label: '5-Star Reviews' },
];

const StatsSection = () => {
  return (
    <section className="py-32 section-dark relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--lumina-gold)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--lumina-gold)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 luxury-line" />

      <div className="container mx-auto px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-lumina-gold/60 text-xs uppercase tracking-[0.4em]">Results</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-white">
            Numbers That <span className="text-gradient-gold">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 luxury-line" />
    </section>
  );
};

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="p-8 border border-lumina-gold/20 bg-lumina-dark-elevated/50 hover:border-lumina-gold/50 transition-colors text-center"
      >
        <p className="font-display text-5xl md:text-6xl text-lumina-gold mb-3">
          {stat.value}
        </p>
        <p className="text-white/40 text-sm uppercase tracking-[0.15em]">
          {stat.label}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;
