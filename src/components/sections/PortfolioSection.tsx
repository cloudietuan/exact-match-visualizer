import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Sunset Nails',
    location: 'Gilbert, Arizona',
    result: '+47% bookings',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop',
  },
  {
    name: 'Luxe Nail Lounge',
    location: 'Tempe, Arizona',
    result: '+38% new clients',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&auto=format&fit=crop',
  },
  {
    name: 'Polished & Pretty',
    location: 'Scottsdale, Arizona',
    result: '+67% visibility',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&auto=format&fit=crop',
  },
];

const PortfolioSection = () => {
  return (
    <section id="work" className="py-32 bg-lumina-bg-deep">
      <div className="container mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-lumina-cream-subtle text-xs uppercase tracking-[0.3em]">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">Selected Projects</h2>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.3em] border-b border-lumina-gold pb-1">
                    View Project
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-lumina-cream-subtle text-xs uppercase tracking-[0.2em] mb-4">
                  {project.location}
                </p>
                <h3 className="font-display text-3xl md:text-4xl mb-6">{project.name}</h3>
                <p className="text-lumina-gold text-lg mb-8">{project.result}</p>
                <div className="w-12 h-px bg-lumina-gold/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
