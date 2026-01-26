import { motion, useMotionValue, useSpring } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Custom Design',
    description: 'Bespoke websites that capture your salon\'s unique personality.',
    icon: '✦',
  },
  {
    number: '02',
    title: 'Local SEO',
    description: 'Dominate "nail salon near me" searches in your area.',
    icon: '◈',
  },
  {
    number: '03',
    title: 'Booking Integration',
    description: 'Seamless integration with Vagaro, Square, and Booksy.',
    icon: '◎',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description: 'Text us anytime. Updates handled same-day.',
    icon: '◉',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lumina-gold/20 to-transparent" />
      
      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <span className="text-lumina-cream-subtle text-xs uppercase tracking-[0.3em]">Services</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">What We Deliver</h2>
        </motion.div>

        {/* Services grid - Interactive cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 20);
    y.set((e.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <motion.div
        style={{ x: mouseXSpring, y: mouseYSpring }}
        className="relative p-8 border border-white/10 bg-lumina-bg-elevated/50 hover:border-lumina-gold/30 transition-colors overflow-hidden"
      >
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-lumina-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10 flex gap-6">
          {/* Number & Icon */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-lumina-gold font-display text-xl">{service.number}</span>
            <span className="text-lumina-gold text-2xl">{service.icon}</span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-display text-2xl mb-3 group-hover:text-lumina-gold transition-colors">
              {service.title}
            </h3>
            <p className="text-lumina-cream-muted">
              {service.description}
            </p>
          </div>

          {/* Arrow */}
          <motion.div
            className="self-center w-10 h-10 rounded-full border border-lumina-gold/30 flex items-center justify-center text-lumina-gold opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
          >
            →
          </motion.div>
        </div>

        {/* Gold accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-lumina-gold"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServicesSection;
