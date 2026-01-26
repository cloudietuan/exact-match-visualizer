import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Midlife Engineering inspired: Stacked panels + horizontal scroll

const projects = [
  { name: 'Sunset Nails', location: 'Gilbert, AZ', result: '+47%', metric: 'bookings' },
  { name: 'Luxe Lounge', location: 'Tempe, AZ', result: '+38%', metric: 'new clients' },
  { name: 'Polished', location: 'Scottsdale, AZ', result: '+67%', metric: 'visibility' },
  { name: 'Nail Bar', location: 'Phoenix, AZ', result: '+52%', metric: 'revenue' },
];

// Stacked panel colors (Midlife style)
const panelColors = [
  'bg-[#2a2a2a]',
  'bg-[#333333]',
  'bg-[#3c3c3c]',
  'bg-[#454545]',
];

const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      {/* Stacked panels background (Midlife Engineering) */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background panels */}
        <div className="absolute inset-0">
          {panelColors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`absolute top-0 bottom-0 ${color}`}
              style={{
                left: 0,
                width: `calc(100% - ${index * 60}px)`,
                zIndex: panelColors.length - index,
              }}
            />
          ))}
        </div>

        {/* Gold accent lines (Midlife style) */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            className="absolute w-16 h-0.5 bg-lumina-gold origin-left"
            style={{ right: `${8 + i * 60}px`, top: `${35 + i * 10}%` }}
          />
        ))}

        {/* Content layer */}
        <div className="relative z-10 h-full flex items-center">
          {/* Header */}
          <div className="absolute top-12 left-8 z-20">
            <span className="text-lumina-gold/60 text-xs uppercase tracking-[0.3em]">Our Work</span>
            <h2 className="font-display text-4xl mt-2 text-white">Selected Projects</h2>
          </div>

          {/* Horizontal scrolling cards */}
          <motion.div className="flex gap-8 pl-8" style={{ x }}>
            {/* Intro card */}
            <div className="flex-shrink-0 w-[400px] h-[500px] flex items-center">
              <p className="text-white/60 text-xl leading-relaxed max-w-sm">
                Every project tells a story of transformation. 
                <span className="text-lumina-gold"> Scroll to explore</span> how we've 
                helped salons thrive online.
              </p>
            </div>

            {/* Project cards */}
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[350px] h-[500px] group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm relative">
                  <div className="p-6 flex justify-between items-start">
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1 text-lumina-gold">
                        {project.name}
                      </p>
                      <p className="text-white/40 text-xs">{project.location}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-lumina-gold transition-colors">
                      <span className="text-white group-hover:text-black">→</span>
                    </div>
                  </div>

                  <div className="px-6">
                    <div className="h-48 rounded-lg mb-4 flex items-center justify-center bg-white/5 border border-white/10">
                      <div className="text-center">
                        <div className="text-5xl mb-3 opacity-60">💅</div>
                        <p className="text-xs text-white/40">Website Preview</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-display text-5xl text-lumina-gold">{project.result}</p>
                        <p className="text-white/50 text-sm">{project.metric}</p>
                      </div>
                      <motion.div
                        className="w-12 h-12 rounded-full border-2 border-lumina-gold flex items-center justify-center text-lumina-gold opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ↗
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* End card */}
            <div className="flex-shrink-0 w-[400px] h-[500px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-lumina-gold text-6xl font-display mb-4">50+</p>
                <p className="text-white/50">Salons transformed</p>
              </div>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-12 left-8 right-8">
            <div className="h-px bg-white/10 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-lumina-gold"
                style={{ width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
              />
            </div>
            <div className="flex justify-between mt-4 text-xs text-white/40">
              <span>01</span>
              <span>0{projects.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
