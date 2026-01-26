import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const projects = [
  {
    name: 'Sunset Nails',
    location: 'Gilbert, AZ',
    result: '+47% online bookings in 30 days',
    gradient: 'from-[#FAF7F2] to-[#F5EFE6]',
    accentColor: '#C17F59',
    style: 'light',
  },
  {
    name: 'Luxe Nail Lounge',
    location: 'Tempe, AZ',
    result: '+38% new client acquisition',
    gradient: 'from-lumina-rose/40 to-lumina-champagne/40',
    accentColor: '#DEA193',
    style: 'dark',
  },
  {
    name: 'Polished & Pretty',
    location: 'Scottsdale, AZ',
    result: '+67% Google visibility',
    gradient: 'from-lumina-champagne/40 to-lumina-blush/40',
    accentColor: '#C9A87C',
    style: 'dark',
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
              className="group cursor-pointer"
            >
              {/* Mockup Image */}
              <div className={`relative h-64 md:h-80 rounded-2xl bg-gradient-to-br ${project.gradient} overflow-hidden mb-6 border border-white/5`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Phone mockup preview */}
                  <div 
                    className={`w-[140px] h-[280px] rounded-[24px] border-4 border-[#1a1a1a] shadow-xl overflow-hidden ${
                      project.style === 'light' ? 'bg-[#FAF7F2]' : 'bg-lumina-bg-primary'
                    }`}
                  >
                    {/* Status bar */}
                    <div className="h-6 flex items-center justify-center">
                      <div className="w-16 h-4 bg-[#1a1a1a] rounded-full" />
                    </div>
                    
                    {/* Content preview */}
                    <div className="px-2 py-2 space-y-2">
                      <p 
                        className="text-center text-[8px] uppercase tracking-wider font-medium"
                        style={{ color: project.accentColor }}
                      >
                        {project.name}
                      </p>
                      <div 
                        className="h-12 rounded-lg"
                        style={{ backgroundColor: `${project.accentColor}20` }}
                      />
                      <div className="flex gap-1">
                        <div 
                          className="flex-1 h-8 rounded"
                          style={{ backgroundColor: `${project.accentColor}15` }}
                        />
                        <div 
                          className="flex-1 h-8 rounded"
                          style={{ backgroundColor: `${project.accentColor}15` }}
                        />
                      </div>
                      <div 
                        className="h-6 rounded-md"
                        style={{ backgroundColor: project.accentColor }}
                      />
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
              <h3 className="font-display text-xl mb-1">{project.name}</h3>
              <p className="text-lumina-cream-subtle text-sm mb-2">{project.location}</p>
              <p className="text-lumina-champagne font-medium">{project.result}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
