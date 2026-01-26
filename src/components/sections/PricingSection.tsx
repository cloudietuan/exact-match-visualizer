import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'upfront',
      description: 'Perfect for nail salons just getting started online',
      monthly: '$149/mo',
      features: [
        '5-page custom website',
        'Mobile-responsive design',
        'Basic SEO setup',
        'Contact form',
        'Google Maps integration',
        'SSL certificate included',
        '30-day support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth',
      price: '$0',
      period: 'upfront',
      description: 'For salons ready to scale their online presence',
      monthly: '$249/mo',
      features: [
        'Everything in Starter',
        '10-page custom website',
        'Online booking integration',
        'Service menu with pricing',
        'Photo gallery',
        'Advanced SEO optimization',
        'Monthly analytics reports',
        'Priority support',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Premium',
      price: '$0',
      period: 'upfront',
      description: 'Full-service solution for ambitious salons',
      monthly: '$399/mo',
      features: [
        'Everything in Growth',
        'Unlimited pages',
        'E-commerce for products',
        'Loyalty program integration',
        'Custom animations',
        'Blog/content management',
        'Social media integration',
        'Dedicated account manager',
      ],
      cta: 'Go Premium',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-lumina-cream overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-display text-lumina-ink mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lumina-ink-muted max-w-2xl mx-auto">
            No upfront costs. No hidden fees. Just a beautiful website that pays for itself.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-lumina-ink text-white border-2 border-lumina-gold/30' 
                  : 'bg-white border border-lumina-cream-warm shadow-sm'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-lumina-gold text-lumina-ink text-xs font-bold tracking-wider rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-xl font-display mb-2 ${plan.popular ? 'text-white' : 'text-lumina-ink'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-white/60' : 'text-lumina-ink-muted'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-display ${plan.popular ? 'text-white' : 'text-lumina-ink'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-white/50' : 'text-lumina-ink-subtle'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-lg mt-1 ${plan.popular ? 'text-lumina-gold' : 'text-lumina-gold-muted'}`}>
                  then {plan.monthly}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-lumina-gold' : 'text-lumina-gold-muted'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-lumina-ink-muted'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-3 rounded-full font-medium transition-all ${
                  plan.popular
                    ? 'bg-lumina-gold text-lumina-ink hover:shadow-lg'
                    : 'bg-lumina-ink text-white hover:bg-lumina-ink-muted'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lumina-ink-subtle text-sm mb-4">Trusted by nail salons across the country</p>
          <div className="flex flex-wrap justify-center gap-8">
            {['30-day money back', 'Cancel anytime', 'Free migrations', '24/7 support'].map((item, i) => (
              <span key={i} className="text-lumina-ink-muted text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-lumina-gold rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
