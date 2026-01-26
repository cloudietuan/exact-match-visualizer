import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Full website showcase with scroll-triggered reveal animations

const WebsiteShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);

  return (
    <section ref={containerRef} className="py-32 section-dark relative overflow-hidden">
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

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-lumina-gold/60 text-xs uppercase tracking-[0.4em]">Case Study</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-white">
            Sunset <span className="text-gradient-gold">Nails</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A complete digital transformation for Gilbert's premier nail salon
          </p>
        </motion.div>

        {/* Full website display */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Browser frame */}
          <div className="bg-lumina-dark-elevated rounded-t-xl p-4 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-lumina-dark rounded-lg px-4 py-2 text-center">
              <span className="text-white/40 text-sm">sunsetnails.com</span>
            </div>
          </div>

          {/* Website content */}
          <div className="bg-[#FAF7F2] rounded-b-xl overflow-hidden shadow-2xl">
            {/* Hero section */}
            <div className="relative h-80 bg-gradient-to-br from-[#C17F59]/20 to-[#F5EFE6] flex items-center justify-center">
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[#C17F59] text-sm uppercase tracking-[0.3em] mb-4"
                >
                  Gilbert, Arizona
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-5xl text-[#8B7355] mb-4"
                >
                  Sunset Nails
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-[#B8A89A] text-lg italic"
                >
                  "Where beauty meets artistry"
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 px-8 py-3 bg-[#C17F59] text-white rounded-full font-medium"
                >
                  Book Appointment
                </motion.button>
              </div>
            </div>

            {/* Services section */}
            <div className="p-12 bg-white">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: 'Manicures', price: '$35+', icon: '💅' },
                  { name: 'Pedicures', price: '$45+', icon: '✨' },
                  { name: 'Nail Art', price: '$55+', icon: '💎' },
                ].map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-6 rounded-xl bg-[#FAF7F2]"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="font-display text-xl text-[#8B7355] mb-2">{service.name}</h4>
                    <p className="text-[#C17F59] font-semibold">{service.price}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Gallery preview */}
            <div className="grid grid-cols-4 gap-1">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square bg-gradient-to-br from-[#C17F59]/30 to-[#C17F59]/10"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
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
            >
              <p className="text-lumina-gold font-display text-5xl mb-2">{stat.value}</p>
              <p className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteShowcase;
