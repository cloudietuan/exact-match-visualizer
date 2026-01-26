import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    name: 'Sunset Nails',
    location: 'Gilbert, AZ',
    result: '+47%',
    metric: 'bookings',
    color: '#C17F59',
    bgColor: '#FAF7F2',
  },
  {
    name: 'Luxe Lounge',
    location: 'Tempe, AZ',
    result: '+38%',
    metric: 'new clients',
    color: '#8B7355',
    bgColor: '#F5EFE6',
  },
  {
    name: 'Polished',
    location: 'Scottsdale, AZ',
    result: '+67%',
    metric: 'visibility',
    color: '#A67C5B',
    bgColor: '#FBF8F4',
  },
  {
    name: 'Nail Bar',
    location: 'Phoenix, AZ',
    result: '+52%',
    metric: 'revenue',
    color: '#9B7653',
    bgColor: '#F8F4EE',
  },
];

const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-lumina-bg-deep">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Header */}
        <div className="absolute top-12 left-8 z-10">
          <span className="text-lumina-cream-subtle text-xs uppercase tracking-[0.3em]">Our Work</span>
          <h2 className="font-display text-4xl mt-2">Selected Projects</h2>
        </div>

        {/* Horizontal scrolling cards */}
        <motion.div 
          className="flex gap-8 pl-8"
          style={{ x }}
        >
          {/* Intro card */}
          <div className="flex-shrink-0 w-[400px] h-[500px] flex items-center">
            <div>
              <p className="text-lumina-cream-muted text-xl leading-relaxed max-w-sm">
                Every project tells a story of transformation. 
                <span className="text-lumina-gold"> Scroll to explore</span> how we've 
                helped salons across Arizona thrive online.
              </p>
            </div>
          </div>

          {/* Project cards */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[350px] h-[500px] group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="h-full rounded-2xl overflow-hidden border border-white/10 relative"
                style={{ background: `linear-gradient(180deg, ${project.bgColor} 0%, ${project.bgColor}dd 100%)` }}
              >
                {/* Card header */}
                <div className="p-6 flex justify-between items-start">
                  <div>
                    <p 
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: project.color }}
                    >
                      {project.name}
                    </p>
                    <p className="text-gray-500 text-xs">{project.location}</p>
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <span style={{ color: project.color }}>→</span>
                  </div>
                </div>

                {/* Mock website preview */}
                <div className="px-6 flex-1">
                  <div 
                    className="h-48 rounded-lg mb-4 flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                        style={{ backgroundColor: `${project.color}30` }}
                      >
                        <span className="text-2xl">💅</span>
                      </div>
                      <p className="text-xs text-gray-500">Website Preview</p>
                    </div>
                  </div>
                </div>

                {/* Result stats */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: `linear-gradient(0deg, ${project.bgColor} 80%, transparent)` }}
                >
                  <div className="flex items-end justify-between">
                    <div>
                      <p 
                        className="font-display text-5xl"
                        style={{ color: project.color }}
                      >
                        {project.result}
                      </p>
                      <p className="text-gray-500 text-sm">{project.metric}</p>
                    </div>
                    <motion.div
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ borderColor: project.color, color: project.color }}
                    >
                      ↗
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* End card */}
          <div className="flex-shrink-0 w-[400px] h-[500px] flex items-center">
            <div className="text-center">
              <p className="text-lumina-gold text-6xl font-display mb-4">50+</p>
              <p className="text-lumina-cream-muted">Salons transformed</p>
            </div>
          </div>
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-12 left-8 right-8">
          <div className="h-px bg-white/10 relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-lumina-gold"
              style={{ width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
            />
          </div>
          <div className="flex justify-between mt-4 text-xs text-lumina-cream-subtle">
            <span>01</span>
            <span>0{projects.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
