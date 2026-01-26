import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<'logo' | 'reveal'>('logo');

  useEffect(() => {
    const revealTimer = setTimeout(() => setPhase('reveal'), 1500);
    const completeTimer = setTimeout(() => onComplete(), 2100);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'reveal' && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] overflow-hidden bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Paper texture */}
          <div className="absolute inset-0 paper-texture" />

          {/* Logo reveal */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-px bg-lumina-ink/30 mx-auto mb-6"
              />
              
              <motion.span
                className="block text-lumina-ink-subtle text-xs uppercase tracking-[0.4em] mb-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Lumina Sites Co.
              </motion.span>

              <motion.h1
                className="font-display text-4xl md:text-5xl text-lumina-ink"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-brush text-lumina-accent">Make it</span>
                <span className="block font-sans font-bold uppercase text-3xl mt-2">Beautiful</span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="h-px bg-lumina-ink/30 mx-auto mt-6"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
