import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

// Enhanced sketch-to-website intro animation with playful elements

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<'sketch' | 'drawing' | 'reveal'>('sketch');

  useEffect(() => {
    const drawTimer = setTimeout(() => setPhase('drawing'), 600);
    const revealTimer = setTimeout(() => setPhase('reveal'), 2400);
    const completeTimer = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(drawTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase === 'reveal' && (
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
          <motion.div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--lumina-ink)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--lumina-ink)) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Bouncing decorative elements */}
          <motion.div
            className="absolute top-20 right-32 text-3xl"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💅
          </motion.div>
          
          <motion.div
            className="absolute bottom-32 left-24 text-2xl"
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            ✨
          </motion.div>

          <motion.div
            className="absolute top-40 left-40 text-xl"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            🎨
          </motion.div>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              {/* Pencil with enhanced animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="mb-8 relative"
              >
                <motion.div
                  animate={phase === 'drawing' ? { 
                    x: [0, 30, -20, 40, 10, 0],
                    y: [0, -10, 15, -5, 10, 0],
                    rotate: [0, 5, -5, 10, -10, 0]
                  } : {}}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                  className="text-6xl md:text-7xl drop-shadow-lg"
                >
                  ✏️
                </motion.div>
                
                {/* Drawing trail */}
                <motion.div
                  className="absolute left-1/2 top-full w-0.5 bg-gradient-to-b from-lumina-ink/40 to-transparent"
                  initial={{ height: 0 }}
                  animate={phase === 'drawing' ? { height: 30 } : { height: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Drawing canvas */}
              <div className="relative w-72 md:w-80 h-40 mx-auto mb-8">
                {/* Progressive lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute left-0 right-0 h-px bg-lumina-ink/25"
                    style={{ top: `${i * 22 + 10}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={phase === 'drawing' ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.15 }}
                  />
                ))}
                
                {/* Wireframe boxes appearing */}
                <motion.div
                  className="absolute left-6 top-4 w-24 h-20 border-2 border-dashed border-lumina-ink/20 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={phase === 'drawing' ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                />
                <motion.div
                  className="absolute right-6 top-4 w-36 h-10 border-2 border-dashed border-lumina-ink/20 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={phase === 'drawing' ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                />
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 w-28 h-8 border-2 border-dashed border-lumina-terracotta/40 rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={phase === 'drawing' ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >
                  <span className="text-lumina-terracotta/50 text-xs">CTA</span>
                </motion.div>

                {/* Sparkle effects */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-lumina-terracotta/50"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={phase === 'drawing' ? {
                      scale: [0, 1.2, 0],
                      opacity: [0, 1, 0],
                    } : {}}
                    transition={{
                      duration: 1.5,
                      delay: 0.8 + i * 0.15,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                ))}
              </div>

              {/* Text with staggered animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span 
                  className="text-lumina-ink-subtle text-xs uppercase tracking-[0.4em] block"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Lumina Sites Co.
                </motion.span>
                <motion.h1
                  className="font-display text-4xl md:text-5xl text-lumina-ink mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-brush text-lumina-terracotta">Sketching</span>
                  <motion.span 
                    className="block font-sans font-bold uppercase text-xl md:text-2xl mt-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Your Vision
                  </motion.span>
                </motion.h1>
              </motion.div>

              {/* Loading dots */}
              <div className="flex justify-center gap-2 mt-8">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-lumina-terracotta/60"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
