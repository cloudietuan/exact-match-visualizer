import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
  return (
    <section id="pricing" className="py-32 bg-lumina-bg-warm">
      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-lumina-ink-subtle text-xs uppercase tracking-[0.3em]">Investment</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground">Simple Pricing</h2>
        </motion.div>

        {/* Pricing cards */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`relative ${plan.featured ? 'md:-mt-6 md:mb-6' : ''}`}
              >
                <div className={`h-full p-8 border rounded-xl transition-all bg-background ${
                  plan.featured 
                    ? 'border-lumina-accent shadow-lg shadow-lumina-accent/10' 
                    : 'border-lumina-ink/10 hover:border-lumina-accent/30'
                }`}>
                  {plan.featured && (
                    <div className="absolute -top-px left-4 right-4 h-1 bg-lumina-accent rounded-full" />
                  )}

                  <div className="mb-6">
                    <p className="text-lumina-ink-subtle text-xs uppercase tracking-[0.2em] mb-2">
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl text-foreground">{plan.price}</span>
                      <span className="text-lumina-ink-subtle">/mo</span>
                    </div>
                  </div>

                  <p className="text-lumina-ink-muted text-sm mb-8">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm">
                        <Check className="w-4 h-4 text-lumina-accent flex-shrink-0" />
                        <span className="text-lumina-ink-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full rounded-full ${plan.featured ? 'bg-foreground text-background hover:bg-lumina-ink/90' : 'border border-foreground/20 bg-transparent text-foreground hover:bg-lumina-bg-soft'}`}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
