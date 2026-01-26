import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import type { Easing } from 'framer-motion';

const plans = [
  {
    tier: 'Starter',
    name: 'Glow',
    price: '$97',
    description: 'Perfect for new salons ready to shine online.',
    features: [
      'Beautiful 3-page website',
      'Mobile responsive',
      'Basic SEO setup',
      'Contact form',
      '2 updates/month',
    ],
    featured: false,
  },
  {
    tier: 'Growth',
    name: 'Radiant',
    price: '$197',
    description: 'For salons ready to dominate their market.',
    features: [
      'Custom 5-7 page website',
      'Online booking integration',
      'Google Business optimization',
      'Portfolio gallery',
      'Service menu with pricing',
      'Unlimited updates',
      'Monthly analytics report',
    ],
    featured: true,
  },
  {
    tier: 'Premium',
    name: 'Brilliant',
    price: '$297',
    description: 'The ultimate online presence for luxury salons.',
    features: [
      'Everything in Radiant',
      'E-commerce for products',
      'Gift card system',
      'Blog setup',
      'Email marketing integration',
      'Priority same-day support',
      'Quarterly strategy calls',
    ],
    featured: false,
  },
];

const PricingSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
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
    <section id="pricing" className="py-24">
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
            Simple Pricing
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Transparent. No Surprises.
          </h2>
          <p className="mt-4 text-lumina-cream-muted text-lg max-w-md mx-auto">
            Cancel anytime. Your content stays yours.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`relative glass rounded-2xl p-8 flex flex-col ${
                plan.featured 
                  ? 'md:scale-105 border-2 border-lumina-rose/50 shadow-xl shadow-lumina-rose/20' 
                  : ''
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-glow text-background text-xs font-semibold uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <span className="text-lumina-cream-subtle text-sm uppercase tracking-wider">
                  {plan.tier}
                </span>
                <h3 className="font-display text-2xl mt-1">{plan.name}</h3>
              </div>

              <div className="mb-6">
                <span className="text-gradient font-display text-5xl">{plan.price}</span>
                <span className="text-lumina-cream-muted">/month</span>
              </div>

              <p className="text-lumina-cream-muted mb-8">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lumina-rose flex-shrink-0 mt-0.5" />
                    <span className="text-lumina-cream-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.featured ? 'glow' : 'glass'}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
