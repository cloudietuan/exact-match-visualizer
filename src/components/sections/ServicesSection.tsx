import { motion } from 'framer-motion';

// Kineticsplay inspired: Massive full-bleed typography

const services = [
  { number: '01', title: 'Custom Design', description: 'Bespoke websites that capture your salon\'s unique personality.', icon: '✦' },
  { number: '02', title: 'Local SEO', description: 'Dominate "nail salon near me" searches in your area.', icon: '◈' },
  { number: '03', title: 'Booking Integration', description: 'Seamless integration with Vagaro, Square, and Booksy.', icon: '◎' },
  { number: '04', title: 'Ongoing Support', description: 'Text us anytime. Updates handled same-day.', icon: '◉' },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-lumina-cream-warm relative overflow-hidden">
      {/* Massive background typography (Kineticsplay style) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          className="text-[30vw] font-bold uppercase text-lumina-ink whitespace-nowrap"
        >
          SERVICES
        </motion.h2>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header with massive typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-sans font-bold text-[12vw] md:text-[8vw] leading-[0.9] uppercase text-lumina-ink">
            What We
            <span className="block text-brush text-lumina-terracotta font-normal normal-case text-[10vw] md:text-[6vw]">Deliver</span>
          </h2>
        </motion.div>

        {/* Services list */}
        <div className="space-y-6 max-w-4xl">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-8 p-8 border-b border-lumina-ink/10 hover:bg-background transition-colors">
                {/* Number */}
                <span className="text-lumina-terracotta font-display text-2xl">{service.number}</span>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-lumina-terracotta text-2xl">{service.icon}</span>
                    <h3 className="font-sans font-bold text-3xl md:text-4xl uppercase group-hover:text-lumina-terracotta transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lumina-ink-muted text-lg ml-10">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  className="self-center w-12 h-12 rounded-full border border-lumina-ink/20 flex items-center justify-center text-lumina-ink opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--lumina-terracotta))', color: 'white' }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
