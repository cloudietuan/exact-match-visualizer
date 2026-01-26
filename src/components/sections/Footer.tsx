import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#151515] relative">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lumina-rose/50 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="/" className="font-display text-2xl text-foreground">
              <span className="text-gradient">Lumina Sites Co.</span>
            </a>
            <p className="mt-2 text-lumina-cream-subtle text-sm">
              Lighting up nail salons online ✨
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-lumina-cream-muted hover:text-primary transition-colors text-sm"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-lumina-cream-muted hover:text-primary transition-colors text-sm"
            >
              FAQ
            </button>
            <a 
              href="#" 
              className="text-lumina-cream-muted hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="text-lumina-cream-muted hover:text-primary transition-colors text-sm"
            >
              Privacy
            </a>
          </nav>
        </motion.div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-lumina-cream-subtle text-sm">
            Made with 💅 in Mesa, Arizona
          </p>
          <p className="mt-2 text-lumina-cream-subtle text-xs">
            © 2026 Lumina Sites Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
