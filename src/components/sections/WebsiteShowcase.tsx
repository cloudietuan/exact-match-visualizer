import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import sunsetNailsHero from '@/assets/sunset-nails-hero.jpg';
import nailGallery from '@/assets/nail-gallery.jpg';

const WebsiteShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [4, -4]), { damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-4, 4]), { damping: 25 });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [0.92, 1]);

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
    <section ref={containerRef} className="py-20 sm:py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Animated gold grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--lumina-gold)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--lumina-gold)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 luxury-line" />
      <div className="absolute bottom-0 left-0 right-0 luxury-line" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <span className="text-lumina-gold/60 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">Case Study</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 text-white">
            Sunset <span className="text-gradient-gold">Nails</span>
          </h2>
          <p className="text-white/50 mt-3 sm:mt-4 max-w-lg mx-auto text-sm sm:text-base">
            A complete digital transformation for Mesa's premier nail salon
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
            <div className="bg-lumina-dark-elevated rounded-t-lg sm:rounded-t-xl p-2 sm:p-3 md:p-4 flex items-center gap-2 sm:gap-3">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400" />
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-400" />
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-lumina-dark rounded-md sm:rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-center">
                <span className="text-white/40 text-xs sm:text-sm">sunsetnails.lovable.app</span>
              </div>
            </div>

            {/* Website content */}
            <div className="bg-[#FAF7F2] rounded-b-lg sm:rounded-b-xl overflow-hidden shadow-2xl">
              {/* Hero section */}
              <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                <img 
                  src={sunsetNailsHero}
                  alt="Sunset Nails hero"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center relative z-10 px-4">
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-white text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-4 drop-shadow-lg"
                    >
                      Mesa, Arizona · Est. 2018
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 sm:mb-4 drop-shadow-lg"
                    >
                      Sunset Nails
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-white/90 text-sm sm:text-base md:text-lg italic drop-shadow-lg max-w-sm sm:max-w-md mx-auto"
                    >
                      "Where every visit feels like golden hour"
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-[#C17F59] text-white rounded-full font-medium text-sm shadow-lg"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Appointment
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Services section - 4 packages matching real site */}
              <div className="p-4 sm:p-6 md:p-10 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  {[
                    { name: 'Basic Bliss', price: '$55', desc: 'Mani + Pedi' },
                    { name: 'Sea Breeze', price: '$60', desc: 'Mani + Pedi' },
                    { name: 'Premium Blue', price: '$70', desc: 'Mani + Pedi' },
                    { name: 'Deluxe', price: '$100', desc: 'Mani + Pedi' },
                  ].map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className={`text-center p-3 sm:p-4 md:p-5 rounded-lg transition-shadow cursor-pointer ${
                        i === 2 ? 'bg-[#C17F59] shadow-md' : 'bg-[#FAF7F2] hover:shadow-md'
                      }`}
                      whileHover={{ y: -3 }}
                    >
                      <h4 className={`font-display text-sm sm:text-base md:text-lg mb-1 ${
                        i === 2 ? 'text-white' : 'text-[#8B7355]'
                      }`}>{service.name}</h4>
                      <p className={`text-xs sm:text-sm mb-1 ${
                        i === 2 ? 'text-white/80' : 'text-[#B8A89A]'
                      }`}>{service.desc}</p>
                      <p className={`font-semibold text-base sm:text-lg ${
                        i === 2 ? 'text-white' : 'text-[#C17F59]'
                      }`}>{service.price}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Gallery preview */}
              <div className="grid grid-cols-4 gap-0.5 sm:gap-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="col-span-2 row-span-2 overflow-hidden"
                  whileHover={{ scale: 1.01 }}
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="aspect-square bg-gradient-to-br from-[#C17F59]/25 to-[#C17F59]/10 hover:from-[#C17F59]/35 hover:to-[#C17F59]/15 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Results stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-2xl mx-auto">
          {[
            { value: '+47%', label: 'Booking Increase' },
            { value: '7 Days', label: 'Time to Launch' },
            { value: '5.0★', label: 'Client Rating' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center"
            >
              <p className="text-lumina-gold font-display text-xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">
                {stat.value}
              </p>
              <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteShowcase;
