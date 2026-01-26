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

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-4xl opacity-20"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-16 text-3xl opacity-20"
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        💅
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
                      Gilbert, Arizona
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
                      className="text-white/90 text-lg italic drop-shadow-lg"
                    >
                      "Where beauty meets artistry"
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
                    { name: 'Manicures', price: '$35+', icon: '💅', desc: 'Classic & gel options' },
                    { name: 'Pedicures', price: '$45+', icon: '✨', desc: 'Relaxing spa treatment' },
                    { name: 'Nail Art', price: '$55+', icon: '💎', desc: 'Custom designs' },
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
                        className="text-4xl mb-4"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                      >
                        {service.icon}
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
