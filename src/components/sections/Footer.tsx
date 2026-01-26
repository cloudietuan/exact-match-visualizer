import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <footer ref={containerRef} className="py-12 sm:py-16 md:py-20 section-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 luxury-line" />

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Large brand statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-xl md:max-w-2xl leading-tight">
            Elevating salons with 
            <span className="text-gradient-gold"> premium web design</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-lumina-gold" />
              <span className="text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-medium">
                Lumina Sites
              </span>
            </div>
            <p className="text-white/40 text-xs sm:text-sm max-w-xs">
              Premium web design for nail salons. Based in Mesa, Arizona.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-lumina-gold/60 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6">Navigate</p>
            <ul className="space-y-3 sm:space-y-4">
              {['Work', 'Process', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-lumina-gold transition-colors text-xs sm:text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-lumina-gold/60 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6">Legal</p>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-white/50 hover:text-lumina-gold transition-colors text-xs sm:text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/50 hover:text-lumina-gold transition-colors text-xs sm:text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-lumina-gold/60 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6">Contact</p>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-white/50 text-xs sm:text-sm">hello@luminasites.co</p>
              <p className="text-white/50 text-xs sm:text-sm">Mesa, Arizona</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-white/30 text-[10px] sm:text-xs">© 2026 Lumina Sites Co. All rights reserved.</p>
          <p className="text-white/30 text-[10px] sm:text-xs flex items-center gap-2">
            Made with <span className="text-lumina-gold">✦</span> in Arizona
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
