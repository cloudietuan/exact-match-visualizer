import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

// Sketch-to-website intro animation

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<'sketch' | 'drawing' | 'reveal'>('sketch');

  useEffect(() => {
    const drawTimer = setTimeout(() => setPhase('drawing'), 600);
    const revealTimer = setTimeout(() => setPhase('reveal'), 2200);
    const completeTimer = setTimeout(() => onComplete(), 2800);

    return () => {
      clearTimeout(drawTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'reveal' ? null : (
        <motion.div
          key="fade-out"
          className="fixed inset-0 z-[100] bg-lumina-cream pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {phase !== 'reveal' && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] overflow-hidden bg-lumina-cream"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Paper texture */}
          <div className="absolute inset-0 paper-texture" />

          {/* Grid lines */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--lumina-ink)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--lumina-ink)) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {/* Pencil drawing animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <motion.div
                  animate={phase === 'drawing' ? { 
                    x: [0, 20, -10, 30, 0],
                    y: [0, -5, 10, -10, 0],
                  } : {}}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  className="text-6xl"
                >
                  ✏️
                </motion.div>
              </motion.div>

              {/* Drawing lines appearing */}
              <div className="relative w-64 h-32 mx-auto mb-8">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute left-0 right-0 h-px bg-lumina-ink/30"
                    style={{ top: `${i * 30 + 10}%` }}
                    initial={{ scaleX: 0 }}
                    animate={phase === 'drawing' ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                  />
                ))}
                
                {/* Box shapes */}
                <motion.div
                  className="absolute left-4 top-4 w-20 h-16 border-2 border-dashed border-lumina-ink/20"
                  initial={{ opacity: 0 }}
                  animate={phase === 'drawing' ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                />
                <motion.div
                  className="absolute right-4 top-4 w-32 h-8 border-2 border-dashed border-lumina-ink/20"
                  initial={{ opacity: 0 }}
                  animate={phase === 'drawing' ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 1 }}
                />
              </div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-lumina-ink-subtle text-xs uppercase tracking-[0.4em]">
                  Lumina Sites Co.
                </span>
                <motion.h1
                  className="font-display text-4xl md:text-5xl text-lumina-ink mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-brush text-lumina-terracotta">Sketching</span>
                  <span className="block font-sans font-bold uppercase text-2xl mt-2">Your Vision</span>
                </motion.h1>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
