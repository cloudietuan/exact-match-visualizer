import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hasScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-lumina-ink/5' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-8 py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-lumina-terracotta" />
            <span className="text-foreground uppercase tracking-[0.25em] text-sm font-medium">
              Lumina
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-12">
            <button 
              onClick={() => scrollToSection('work')}
              className="text-lumina-ink-muted hover:text-foreground transition-colors text-xs uppercase tracking-[0.2em]"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-lumina-ink-muted hover:text-foreground transition-colors text-xs uppercase tracking-[0.2em]"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-lumina-ink-muted hover:text-foreground transition-colors text-xs uppercase tracking-[0.2em]"
            >
              Pricing
            </button>
          </div>

          {/* CTA / Mobile menu button */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block text-lumina-terracotta text-xs uppercase tracking-[0.2em] hover:text-foreground transition-colors"
            >
              Contact
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            >
              <motion.span 
                className="w-6 h-px bg-foreground"
                animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 3 : 0 }}
              />
              <motion.span 
                className="w-6 h-px bg-foreground"
                animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -3 : 0 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background flex items-center justify-center md:hidden"
          >
            <div className="text-center space-y-8">
              {['work', 'services', 'pricing', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item)}
                  className="block text-2xl font-display capitalize hover:text-lumina-terracotta transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
