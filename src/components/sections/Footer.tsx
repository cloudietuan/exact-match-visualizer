import { motion } from 'framer-motion';

// Jesko Jets inspired: Dark, editorial, luxurious

const Footer = () => {
  return (
    <footer className="py-20 section-dark relative">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 luxury-line" />

      <div className="container mx-auto px-8">
        {/* Large brand statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-4xl md:text-5xl text-white max-w-2xl leading-tight">
            Elevating nail salons with 
            <span className="text-gradient-gold"> premium web design</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-lumina-gold" />
              <span className="text-white uppercase tracking-[0.3em] text-sm font-medium">
                Lumina Sites
              </span>
            </div>
            <p className="text-white/40 text-sm max-w-xs">
              Premium web design for nail salons. Based in Mesa, Arizona.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-lumina-gold/60 text-xs uppercase tracking-[0.2em] mb-6">Navigate</p>
            <ul className="space-y-4">
              {['Work', 'Services', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/50 hover:text-lumina-gold transition-colors text-sm"
                  >
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
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-lumina-gold transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-lumina-gold/60 text-xs uppercase tracking-[0.2em] mb-6">Contact</p>
            <div className="space-y-4">
              <p className="text-white/50 text-sm">hello@luminasites.co</p>
              <p className="text-white/50 text-sm">Mesa, Arizona</p>
              <div className="flex gap-4 mt-6">
                {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-white/30 hover:text-lumina-gold transition-colors text-xs uppercase tracking-wider"
                  >
                    {social.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/30 text-xs">
            © 2026 Lumina Sites Co. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-2">
            Made with <span className="text-lumina-gold">✦</span> in Arizona
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
