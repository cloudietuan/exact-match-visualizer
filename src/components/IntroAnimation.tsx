import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

// Jesko Jets inspired cinematic intro - dark, elegant, minimal
const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<'intro' | 'tagline' | 'reveal'>('intro');

  useEffect(() => {
    const taglineTimer = setTimeout(() => setPhase('tagline'), 1200);
    const revealTimer = setTimeout(() => setPhase('reveal'), 2800);
    const completeTimer = setTimeout(() => onComplete(), 3400);

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'reveal' ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] overflow-hidden bg-lumina-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {/* Brand name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden"
              >
                <motion.span
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lumina-gold/60 text-xs uppercase tracking-[0.5em] block mb-6"
                >
                  Lumina Sites Co.
                </motion.span>
              </motion.div>

              {/* Main headline - staggered word reveal */}
              <div className="overflow-hidden">
                <motion.h1
                  className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight"
                  initial={{ y: 80 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Web design
                </motion.h1>
              </div>
              
              <div className="overflow-hidden mt-2">
                <motion.h2
                  className="font-display text-3xl md:text-5xl lg:text-6xl text-white/90"
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  that <span className="text-lumina-gold italic">converts</span>
                </motion.h2>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={phase === 'tagline' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-white/50 mt-8 text-sm md:text-base max-w-md mx-auto"
              >
                Turning your vision into stunning, high-converting websites
              </motion.p>

              {/* Elegant loading line */}
              <motion.div
                className="mt-12 w-32 h-px mx-auto bg-lumina-gold/20 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="h-full bg-lumina-gold"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lumina-gold/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </motion.div>
      ) : (
        <motion.div
          key="fade-out"
          className="fixed inset-0 z-[100] bg-lumina-dark pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
