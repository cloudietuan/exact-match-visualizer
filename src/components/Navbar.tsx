import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import LandmarkMark from '@/components/BrandMark';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inDarkSection, setInDarkSection] = useState(false);
  
  // Track scroll progress for adaptive styling
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Calculate scroll progress based on total scrollable height
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      
      // CinematicHeroV4 uses 700vh container
      // Scene 5 (dark CTA) is at 85-100% of that container
      const cinematicHeight = 700 * window.innerHeight / 100; // 700vh in pixels
      const darkSectionStart = cinematicHeight * 0.85;
      const darkSectionEnd = cinematicHeight; // Goes to the end of cinematic section
      
      setInDarkSection(window.scrollY >= darkSectionStart && window.scrollY <= darkSectionEnd);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  // Dynamic classes based on section - always transparent with seamless blur
  const navBgClass = inDarkSection
    ? 'bg-lumina-dark/30 backdrop-blur-2xl'
    : scrolled
      ? 'bg-lumina-cream/30 backdrop-blur-2xl'
      : 'bg-transparent backdrop-blur-none';

  const linkClass = inDarkSection
    ? 'text-lumina-cream/80 hover:text-lumina-cream'
    : 'text-lumina-ink/70 hover:text-lumina-ink';

  const mobileMenuBtnClass = inDarkSection
    ? 'bg-lumina-cream'
    : 'bg-lumina-ink';

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-14">
            {/* Logo - Enhanced landmark icon with hover effects */}
            <a href="/" className="flex items-center group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LandmarkMark size={40} animated variant="thin" className="block" />
                {/* Subtle glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-lumina-gold/0 group-hover:bg-lumina-gold/10 transition-all duration-300 blur-xl" />
              </motion.div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${linkClass} text-sm font-medium tracking-wide transition-colors duration-300 relative group`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-lumina-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <motion.span
                className={`w-6 h-0.5 ${mobileMenuBtnClass} block transition-colors duration-300`}
                animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 4 : 0 }}
              />
              <motion.span
                className={`w-6 h-0.5 ${mobileMenuBtnClass} block transition-colors duration-300`}
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              />
              <motion.span
                className={`w-6 h-0.5 ${mobileMenuBtnClass} block transition-colors duration-300`}
                animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -4 : 0 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-lumina-ink/40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className={`absolute top-14 left-4 right-4 ${inDarkSection ? 'bg-lumina-dark-elevated border-lumina-cream/10' : 'bg-lumina-cream border-lumina-ink/10'} border rounded-2xl p-6 shadow-2xl`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={`${inDarkSection ? 'text-lumina-cream border-lumina-cream/10' : 'text-lumina-ink border-lumina-ink/10'} text-lg font-medium py-2 border-b transition-colors duration-300`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;