import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Glow',
    price: '$97',
    description: 'Perfect for new salons ready to shine online.',
    features: [
      'Beautiful 3-page website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form',
      '2 updates per month',
    ],
    featured: false,
  },
  {
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
    name: 'Brilliant',
    price: '$297',
    description: 'The ultimate presence for luxury salons.',
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
  return (
    <section id="pricing" className="py-32 bg-lumina-bg-deep">
      <div className="container mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-lumina-cream-subtle text-xs uppercase tracking-[0.3em]">Investment</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lumina-cream-muted max-w-lg mx-auto">
            No upfront costs. Cancel anytime. Your content stays yours.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative p-10 border transition-colors ${
                plan.featured 
                  ? 'border-lumina-gold/50 bg-lumina-gold/5' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-10 px-4 py-1 bg-lumina-gold text-background text-xs uppercase tracking-[0.15em]">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-display text-5xl">{plan.price}</span>
                <span className="text-lumina-cream-muted">/month</span>
              </div>
              <p className="text-lumina-cream-muted text-sm mb-8">{plan.description}</p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-lumina-gold flex-shrink-0 mt-1" />
                    <span className="text-lumina-cream-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.featured ? 'luxuryFilled' : 'luxury'}
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
