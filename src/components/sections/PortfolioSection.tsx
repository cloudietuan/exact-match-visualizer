import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const projects = [
  {
    name: 'Luxe Nails Mesa',
    result: '+52% online bookings in 30 days',
    gradient: 'from-lumina-rose/40 to-lumina-champagne/40',
  },
  {
    name: 'Sunset Nail Lounge',
    result: '+38% new client acquisition',
    gradient: 'from-lumina-blush/40 to-lumina-rose/40',
  },
  {
    name: 'Polished & Pretty',
    result: '+67% Google visibility',
    gradient: 'from-lumina-champagne/40 to-lumina-blush/40',
  },
];

const PortfolioSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
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
    <section id="work" className="py-24 bg-lumina-bg-secondary">
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
            Our Work
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Websites That Actually Convert
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group cursor-hover"
            >
              {/* Mockup Image */}
              <div className={`relative h-64 md:h-80 rounded-2xl bg-gradient-to-br ${project.gradient} overflow-hidden mb-6`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[200px] h-[360px] bg-background/20 backdrop-blur-sm rounded-[32px] border border-white/10 p-2">
                    <div className="w-full h-full bg-lumina-bg-primary rounded-[28px] flex items-center justify-center">
                      <span className="font-display text-sm text-lumina-cream-muted">Preview</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-foreground font-medium flex items-center gap-2">
                    View Project <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl mb-2">{project.name}</h3>
              <p className="text-lumina-champagne font-medium">{project.result}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
