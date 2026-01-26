import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Check } from 'lucide-react';

// Midlife Engineering inspired: Layered cards with mouse-reactive effects

const plans = [
  {
    name: 'Glow',
    price: '$97',
    description: 'For new salons ready to shine.',
    features: ['3-page website', 'Mobile responsive', 'Basic SEO', 'Contact form', '2 updates/mo'],
    featured: false,
    offset: 0,
  },
  {
    name: 'Radiant',
    price: '$197',
    description: 'For salons ready to dominate.',
    features: ['5-7 page website', 'Booking integration', 'Google optimization', 'Portfolio gallery', 'Unlimited updates', 'Analytics report'],
    featured: true,
    offset: -20,
  },
  {
    name: 'Brilliant',
    price: '$297',
    description: 'The ultimate online presence.',
    features: ['Everything in Radiant', 'E-commerce', 'Gift cards', 'Blog', 'Priority support', 'Strategy calls'],
    featured: false,
    offset: 0,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 bg-background relative">
      {/* Stacked panel accents (Midlife style) */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 hidden lg:block">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 bg-lumina-cream-soft"
            style={{
              left: `${i * 30}px`,
              width: '100%',
              opacity: 0.3 + i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-lumina-ink-subtle text-xs uppercase tracking-[0.3em]">Investment</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Simple Pricing</h2>
        </motion.div>

        {/* Pricing cards with stacking effect */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, index }: { plan: typeof plans[0]; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: plan.offset }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${plan.featured ? 'md:-mt-6 md:mb-6' : ''}`}
    >
      <motion.div
        style={{ x: mouseXSpring, y: mouseYSpring }}
        whileHover={{ y: -10 }}
        className={`h-full p-8 border rounded-xl transition-all bg-background ${
          plan.featured 
            ? 'border-lumina-terracotta shadow-xl shadow-lumina-terracotta/10' 
            : 'border-lumina-ink/10 hover:border-lumina-terracotta/30'
        }`}
      >
        {plan.featured && (
          <div className="absolute -top-px left-4 right-4 h-1 bg-lumina-terracotta rounded-full" />
        )}

        <div className="mb-6">
          <p className="text-lumina-ink-subtle text-xs uppercase tracking-[0.2em] mb-2">
            {plan.name}
          </p>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-5xl">{plan.price}</span>
            <span className="text-lumina-ink-subtle">/mo</span>
          </div>
        </div>

        <p className="text-lumina-ink-muted text-sm mb-8">{plan.description}</p>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-center gap-3 text-sm">
              <Check className="w-4 h-4 text-lumina-terracotta flex-shrink-0" />
              <span className="text-lumina-ink-muted">{feature}</span>
            </li>
          ))}
        </ul>

        <button 
          className={`w-full py-4 rounded-full font-medium transition-colors ${
            plan.featured 
              ? 'bg-foreground text-background hover:bg-lumina-ink/90' 
              : 'border border-foreground/20 hover:bg-lumina-cream-soft'
          }`}
        >
          Get Started
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PricingSection;
