import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Glow',
    price: '$97',
    description: 'For new salons ready to shine.',
    features: ['3-page website', 'Mobile responsive', 'Basic SEO', 'Contact form', '2 updates/mo'],
    featured: false,
  },
  {
    name: 'Radiant',
    price: '$197',
    description: 'For salons ready to dominate.',
    features: ['5-7 page website', 'Booking integration', 'Google optimization', 'Portfolio gallery', 'Unlimited updates', 'Analytics report'],
    featured: true,
  },
  {
    name: 'Brilliant',
    price: '$297',
    description: 'The ultimate online presence.',
    features: ['Everything in Radiant', 'E-commerce', 'Gift cards', 'Blog', 'Priority support', 'Strategy calls'],
    featured: false,
  },
];

const PricingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={containerRef} id="pricing" className="py-20 sm:py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--lumina-gold)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--lumina-gold)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }} />
      </motion.div>

      {/* Gold lines */}
      <div className="absolute top-0 left-0 right-0 luxury-line" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <span className="text-lumina-gold/60 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">Investment</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 text-white">
            Simple <span className="text-gradient-gold">Pricing</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 luxury-line" />
    </section>
  );
};

const PricingCard = ({ plan, index }: { plan: typeof plans[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 25);
    y.set((e.clientY - centerY) / 25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: plan.featured ? -12 : 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
    >
      <motion.div
        style={{ x: mouseXSpring, y: mouseYSpring }}
        whileHover={{ y: -8 }}
        className={`h-full p-5 sm:p-6 md:p-8 border transition-all bg-lumina-dark-elevated ${
          plan.featured 
            ? 'border-lumina-gold shadow-lg shadow-lumina-gold/10' 
            : 'border-white/10 hover:border-lumina-gold/30'
        }`}
      >
        {plan.featured && (
          <div className="absolute -top-px left-0 right-0 h-1 bg-lumina-gold" />
        )}

        <div className="mb-5 sm:mb-6">
          <p className="text-lumina-gold/60 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2">{plan.name}</p>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl text-white">{plan.price}</span>
            <span className="text-white/40 text-sm">/mo</span>
          </div>
        </div>

        <p className="text-white/50 text-xs sm:text-sm mb-6 sm:mb-8">{plan.description}</p>

        <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
          {plan.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-lumina-gold flex-shrink-0" />
              <span className="text-white/60">{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`w-full py-3 sm:py-4 font-medium text-sm transition-colors ${
          plan.featured 
            ? 'bg-lumina-gold text-lumina-dark hover:bg-lumina-gold/90' 
            : 'border border-lumina-gold/30 text-lumina-gold hover:bg-lumina-gold/10'
        }`}>
          Get Started
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PricingSection;
