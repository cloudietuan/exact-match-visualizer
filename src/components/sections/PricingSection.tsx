import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-lumina-cream overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-display text-lumina-ink mb-4">
            Simple, transparent pricing
          </h2>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative bg-lumina-ink text-white rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Badge */}
            <div className="absolute -top-px left-1/2 -translate-x-1/2 px-6 py-2 bg-lumina-gold text-lumina-ink text-xs font-bold tracking-wider rounded-b-xl">
              MOST SALONS CHOOSE THIS
            </div>
            
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lumina-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-lumina-coral/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Plan name */}
              <h3 className="text-2xl font-display text-white mb-2 mt-4">Build & Care Plan</h3>
              
              {/* One-time price */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-display text-white">$699</span>
                  <span className="text-white/50">one-time</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-3 text-white/70">
                    <Check className="w-4 h-4 text-lumina-gold flex-shrink-0" />
                    Website design & launch
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <Check className="w-4 h-4 text-lumina-gold flex-shrink-0" />
                    Domain + SSL (first year included)
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <Check className="w-4 h-4 text-lumina-gold flex-shrink-0" />
                    30-day post-launch support
                  </li>
                </ul>
              </div>
              
              {/* Monthly price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-display text-lumina-gold">$99</span>
                  <span className="text-white/50">/month</span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-3 text-white/70">
                    <Check className="w-4 h-4 text-lumina-gold flex-shrink-0" />
                    Hosting & security
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <Check className="w-4 h-4 text-lumina-gold flex-shrink-0" />
                    Small updates (up to 2 hours/month)
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <Check className="w-4 h-4 text-lumina-gold flex-shrink-0" />
                    Priority support
                  </li>
                </ul>
              </div>
              
              {/* CTA */}
              <motion.a
                href="#contact"
                className="block w-full py-4 bg-lumina-gold text-lumina-ink font-semibold rounded-full text-center text-lg hover:shadow-lg hover:shadow-lumina-gold/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get My Website
              </motion.a>
              
              {/* Add-on note */}
              <p className="mt-6 text-center text-white/40 text-sm">
                Optional add-on: AI receptionist available to answer questions and guide bookings.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {['No hidden fees', 'Cancel anytime', 'Free migrations'].map((item, i) => (
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
