import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, forwardRef } from 'react';

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <footer ref={ref} className="relative overflow-hidden">
      <div ref={containerRef} className="relative">
        {/* Parallax background layer */}
        <motion.div 
          className="absolute inset-0 section-dark"
          style={{ y: bgY }}
        />
        
        {/* Content with parallax */}
        <motion.div 
          className="relative z-10 py-16 sm:py-20 md:py-28"
          style={{ y: contentY, opacity, scale }}
        >
          <div className="absolute top-0 left-0 right-0 luxury-line" />

          <div className="container mx-auto px-6 sm:px-8 md:px-12">
            {/* Large brand statement */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 sm:mb-16 md:mb-20"
            >
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl md:max-w-3xl leading-tight">
                Elevating salons with 
                <span className="text-gradient-gold"> premium web design</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-lumina-gold" />
                  <span className="text-white uppercase tracking-[0.3em] text-sm font-medium">
                    Lumina Sites
                  </span>
                </div>
                <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                  Premium web design for nail salons. Based in Mesa, Arizona.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <p className="text-lumina-gold/60 text-xs uppercase tracking-[0.2em] mb-6">Navigate</p>
                <ul className="space-y-4">
                  {['Work', 'Process', 'Pricing', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-lumina-gold transition-colors text-sm link-underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="text-lumina-gold/60 text-xs uppercase tracking-[0.2em] mb-6">Legal</p>
                <ul className="space-y-4">
                  <li><a href="#" className="text-white/50 hover:text-lumina-gold transition-colors text-sm link-underline">Privacy Policy</a></li>
                  <li><a href="#" className="text-white/50 hover:text-lumina-gold transition-colors text-sm link-underline">Terms of Service</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="text-lumina-gold/60 text-xs uppercase tracking-[0.2em] mb-6">Contact</p>
                <div className="space-y-4">
                  <p className="text-white/50 text-sm">hello@luminasites.co</p>
                  <p className="text-white/50 text-sm">Mesa, Arizona</p>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/30 text-xs">© 2026 Lumina Sites Co. All rights reserved.</p>
              <p className="text-white/30 text-xs flex items-center gap-2">
                Made with <span className="text-lumina-gold">✦</span> in Arizona
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;