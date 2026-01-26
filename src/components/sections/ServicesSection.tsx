import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Custom Website Design',
    description: 'Bespoke designs that capture your salon\'s unique personality and convert visitors into clients.',
  },
  {
    number: '02',
    title: 'Local SEO Optimization',
    description: 'Dominate "nail salon near me" searches. We optimize your Google presence for maximum visibility.',
  },
  {
    number: '03',
    title: 'Online Booking Integration',
    description: 'Seamless integration with Vagaro, Square, Booksy, and more. Clients book 24/7.',
  },
  {
    number: '04',
    title: 'Ongoing Support & Updates',
    description: 'Text us anytime. Price changes, new photos, holiday hours — handled same-day.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <span className="text-lumina-cream-subtle text-xs uppercase tracking-[0.3em]">Services</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">What We Deliver</h2>
          <p className="text-lumina-cream-muted leading-relaxed">
            Everything your salon needs to thrive online. No hidden fees. No tech headaches. 
            Just beautiful websites that work.
          </p>
        </motion.div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-t border-white/10 py-12 grid md:grid-cols-12 gap-8 items-start hover:bg-white/[0.02] transition-colors px-4 -mx-4"
            >
              <span className="text-lumina-gold font-display text-lg md:col-span-1">
                {service.number}
              </span>
              <h3 className="font-display text-2xl md:col-span-4 group-hover:text-lumina-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-lumina-cream-muted md:col-span-7">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
