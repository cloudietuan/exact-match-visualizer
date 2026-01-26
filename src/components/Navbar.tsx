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
          hasScrolled 
            ? 'bg-lumina-cream/90 backdrop-blur-xl border-b border-lumina-ink/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-8 py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-lumina-terracotta" />
            <span className="text-lumina-ink uppercase tracking-[0.25em] text-sm font-medium">
              Lumina
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-12">
            {['work', 'pricing', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-lumina-ink-muted hover:text-lumina-ink transition-colors text-xs uppercase tracking-[0.2em]"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block px-6 py-2 bg-lumina-ink text-white text-xs uppercase tracking-[0.15em] rounded-full hover:bg-lumina-ink/90 transition-colors"
            >
              Get Started
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            >
              <motion.span 
                className="w-6 h-px bg-lumina-ink"
                animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 3 : 0 }}
              />
              <motion.span 
                className="w-6 h-px bg-lumina-ink"
                animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -3 : 0 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-lumina-cream flex items-center justify-center md:hidden"
          >
            <div className="text-center space-y-8">
              {['work', 'pricing', 'contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item)}
                  className="block text-3xl font-display capitalize hover:text-lumina-terracotta transition-colors"
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
