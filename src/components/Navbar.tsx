import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        hasScrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-display text-2xl text-foreground">
          <span className="text-gradient">Lumina</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('work')}
            className="text-lumina-cream-muted hover:text-foreground transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-lumina-cream-muted hover:text-foreground transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-lumina-cream-muted hover:text-foreground transition-colors"
          >
            FAQ
          </button>
        </div>

        <Button variant="glow" size="sm">
          Book a Call
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
