import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

// Multi-style intro: Shows all 5 aesthetics

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<'panels' | 'logo' | 'reveal'>('panels');

  const styles = [
    { color: 'bg-lumina-pink', label: 'Playful' },
    { color: 'bg-lumina-cream-warm', label: 'Clean' },
    { color: 'bg-[#333]', label: 'Editorial' },
    { color: 'bg-lumina-dark', label: 'Luxury' },
  ];

  useEffect(() => {
    const logoTimer = setTimeout(() => setPhase('logo'), 800);
    const revealTimer = setTimeout(() => setPhase('reveal'), 2000);
    const completeTimer = setTimeout(() => onComplete(), 2500);

    return () => {
      clearTimeout(logoTimer);
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
          transition={{ duration: 0.5 }}
        >
          {/* Stacked color panels (showing versatility) */}
          <div className="absolute inset-0">
            {styles.map((style, index) => (
              <motion.div
                key={index}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                className={`absolute bottom-0 left-0 right-0 ${style.color} origin-bottom`}
                style={{ height: `${25 * (index + 1)}%`, zIndex: styles.length - index }}
              />
            ))}
          </div>

          {/* Logo reveal */}
          <AnimatePresence>
            {phase === 'logo' && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="h-px bg-white/50 mx-auto mb-6"
                  />
                  
                  <motion.span
                    className="block text-white/80 text-xs uppercase tracking-[0.4em] mb-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    Lumina Sites Co.
                  </motion.span>

                  <motion.h1
                    className="font-display text-4xl md:text-5xl text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    5 Styles
                    <span className="block font-sans font-bold uppercase text-2xl mt-2">One Vision</span>
                  </motion.h1>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 60 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="h-px bg-white/50 mx-auto mt-6"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
