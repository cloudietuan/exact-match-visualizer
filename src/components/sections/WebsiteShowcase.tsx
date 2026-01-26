import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import sunsetNailsHero from '@/assets/sunset-nails-hero.jpg';
import nailGallery from '@/assets/nail-gallery.jpg';

// Full website showcase with scroll-triggered reveal animations and interactive elements

const WebsiteShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { damping: 20 });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Animated gold grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--lumina-gold)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--lumina-gold)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 luxury-line" />
      <div className="absolute bottom-0 left-0 right-0 luxury-line" />

      {/* Floating decorative icons */}
      <motion.div
        className="absolute top-20 right-20 opacity-30"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 4 L26 20 L42 24 L26 28 L24 44 L22 28 L6 24 L22 20 Z" fill="hsl(var(--lumina-gold))" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-16 opacity-30"
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect x="18" y="4" width="12" height="8" rx="2" fill="hsl(var(--lumina-gold))" />
          <path d="M16 18 L16 38 C16 42 19 44 24 44 C29 44 32 42 32 38 L32 18 Z" fill="hsl(var(--lumina-gold))" opacity="0.8" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-lumina-gold/60 text-xs uppercase tracking-[0.4em]">Case Study</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 text-white">
            Sunset <span className="text-gradient-gold">Nails</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A complete digital transformation for Gilbert's premier nail salon
          </p>
        </motion.div>

        {/* Full website display with 3D hover */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative max-w-5xl mx-auto perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="transform-gpu"
          >
            {/* Browser frame */}
            <div className="bg-lumina-dark-elevated rounded-t-xl p-3 md:p-4 flex items-center gap-3">
              <div className="flex gap-2">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-red-400"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-yellow-400"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-400"
                  whileHover={{ scale: 1.2 }}
                />
              </div>
              <div className="flex-1 bg-lumina-dark rounded-lg px-4 py-2 text-center">
                <span className="text-white/40 text-sm">sunsetnails.com</span>
              </div>
            </div>

            {/* Website content */}
            <div className="bg-[#FAF7F2] rounded-b-xl overflow-hidden shadow-2xl">
              {/* Hero section */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={sunsetNailsHero}
                  alt="Sunset Nails hero"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center relative z-10">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-white text-sm uppercase tracking-[0.3em] mb-4 drop-shadow-lg"
                    >
                      Mesa, Arizona · Est. 2018
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="font-display text-4xl md:text-5xl text-white mb-4 drop-shadow-lg"
                    >
                      Sunset Nails
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-white/90 text-lg italic drop-shadow-lg max-w-md mx-auto"
                    >
                      "Where every visit feels like golden hour"
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 px-8 py-3 bg-[#C17F59] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Appointment
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Services section */}
              <div className="p-8 md:p-12 bg-white">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  {[
                    { name: 'Basic Bliss', price: '$55', desc: 'Mani + Pedi', icon: 'polish' },
                    { name: 'Premium Blue', price: '$70', desc: 'Mani + Pedi', icon: 'sparkle' },
                    { name: 'Deluxe', price: '$100', desc: 'Mani + Pedi', icon: 'diamond' },
                  ].map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center p-6 rounded-xl bg-[#FAF7F2] hover:shadow-lg transition-shadow cursor-pointer"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div 
                        className="flex justify-center mb-4"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                      >
                        {service.icon === 'polish' && (
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="18" y="4" width="12" height="8" rx="2" fill="#C17F59" />
                            <path d="M16 18 L16 38 C16 42 19 44 24 44 C29 44 32 42 32 38 L32 18 Z" fill="#C17F59" opacity="0.9" />
                            <path d="M18 20 L18 36 C18 38 20 40 24 40" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" fill="none" />
                          </svg>
                        )}
                        {service.icon === 'sparkle' && (
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M24 4 L26 20 L42 24 L26 28 L24 44 L22 28 L6 24 L22 20 Z" fill="#C17F59" />
                            <path d="M24 12 L25 21 L34 24 L25 27 L24 36 L23 27 L14 24 L23 21 Z" fill="white" opacity="0.4" />
                          </svg>
                        )}
                        {service.icon === 'diamond' && (
                          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <path d="M22 4 L10 16 L22 12 Z" fill="#C17F59" opacity="0.9" />
                            <path d="M22 4 L34 16 L22 12 Z" fill="#C17F59" opacity="0.7" />
                            <path d="M6 16 L10 16 L22 12 L34 16 L38 16 L22 20 Z" fill="#C17F59" opacity="0.8" />
                            <path d="M6 16 L22 40 L22 20 Z" fill="#8B7355" opacity="0.9" />
                            <path d="M38 16 L22 40 L22 20 Z" fill="#8B7355" opacity="0.7" />
                          </svg>
                        )}
                      </motion.div>
                      <h4 className="font-display text-xl text-[#8B7355] mb-2">{service.name}</h4>
                      <p className="text-[#B8A89A] text-sm mb-2">{service.desc}</p>
                      <p className="text-[#C17F59] font-semibold text-lg">{service.price}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Gallery preview */}
              <div className="grid grid-cols-4 gap-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="col-span-2 row-span-2 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src={nailGallery}
                    alt="Nail gallery"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-square bg-gradient-to-br from-[#C17F59]/30 to-[#C17F59]/10 hover:from-[#C17F59]/40 hover:to-[#C17F59]/20 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Results stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-20 max-w-3xl mx-auto">
          {[
            { value: '+47%', label: 'Booking Increase' },
            { value: '7 Days', label: 'Time to Launch' },
            { value: '5.0★', label: 'Client Rating' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.p 
                className="text-lumina-gold font-display text-3xl md:text-5xl mb-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-white/40 text-xs md:text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteShowcase;
