import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        hasScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        <a href="/" className="text-foreground uppercase tracking-[0.3em] text-sm font-medium">
          Lumina Sites
        </a>

        <div className="hidden md:flex items-center gap-12">
          <button 
            onClick={() => scrollToSection('work')}
            className="text-lumina-cream-muted hover:text-foreground transition-colors text-xs uppercase tracking-[0.2em]"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-lumina-cream-muted hover:text-foreground transition-colors text-xs uppercase tracking-[0.2em]"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-lumina-cream-muted hover:text-foreground transition-colors text-xs uppercase tracking-[0.2em]"
          >
            Pricing
          </button>
        </div>

        <button 
          onClick={() => scrollToSection('contact')}
          className="text-lumina-gold text-xs uppercase tracking-[0.2em] hover:text-foreground transition-colors"
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
