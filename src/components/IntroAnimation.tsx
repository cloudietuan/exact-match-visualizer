import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<'panels' | 'logo' | 'reveal'>('panels');

  const panels = [
    { color: 'bg-[#2e2d25]', delay: 0 },
    { color: 'bg-[#292821]', delay: 0.1 },
    { color: 'bg-[#24231d]', delay: 0.2 },
    { color: 'bg-[#1f1e19]', delay: 0.3 },
    { color: 'bg-[#1a1915]', delay: 0.4 },
    { color: 'bg-lumina-bg-deep', delay: 0.5 },
  ];

  useEffect(() => {
    const logoTimer = setTimeout(() => setPhase('logo'), 800);
    const revealTimer = setTimeout(() => setPhase('reveal'), 2200);
    const completeTimer = setTimeout(() => onComplete(), 2800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'reveal' ? null : (
        <motion.div
          key="reveal-overlay"
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {phase !== 'reveal' && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] overflow-hidden bg-lumina-bg-deep"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Stacked panels sliding in */}
          <div className="absolute inset-0">
            {panels.map((panel, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 ${panel.color}`}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: panel.delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  clipPath: `inset(0 0 0 ${index * 60}px)`,
                }}
              />
            ))}
          </div>

          {/* Gold accent lines */}
          {panels.map((panel, index) => (
            <motion.div
              key={`line-${index}`}
              className="absolute w-24 h-0.5 bg-lumina-gold"
              style={{
                left: `${10 + index * 12}%`,
                top: `${30 + index * 8}%`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.6 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.08,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Logo reveal */}
          <AnimatePresence>
            {phase === 'logo' && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-px bg-lumina-gold mx-auto mb-6"
                  />
                  
                  <motion.span
                    className="block text-lumina-gold text-xs uppercase tracking-[0.5em] mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Lumina Sites Co.
                  </motion.span>

                  <motion.h1
                    className="font-display text-4xl md:text-5xl text-lumina-cream"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Premium Web Design
                  </motion.h1>

                  <motion.p
                    className="text-lumina-cream-muted text-sm mt-4 tracking-widest uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    For Beauty & Wellness
                  </motion.p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="h-px bg-lumina-gold mx-auto mt-6"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Corner accents */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-l border-t border-lumina-gold/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-lumina-gold/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
