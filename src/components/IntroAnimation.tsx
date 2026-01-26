import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

// Willem-style loading animation - clean, typographic, sophisticated
const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal'>('loading');

  useEffect(() => {
    // Animate progress from 0 to 100
    const duration = 2200;
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(newProgress);
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setPhase('reveal'), 300);
        setTimeout(() => onComplete(), 800);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'reveal' ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] overflow-hidden bg-lumina-cream"
          exit={{ 
            clipPath: 'inset(0 0 100% 0)',
          }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Main content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            {/* Brand name - subtle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="text-lumina-ink-subtle text-[10px] uppercase tracking-[0.5em]">
                Lumina Sites Co.
              </span>
            </motion.div>

            {/* Large typographic number */}
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span className="font-display text-[120px] sm:text-[180px] md:text-[240px] leading-none text-lumina-ink tabular-nums">
                {progress.toString().padStart(3, '0')}
              </span>
            </motion.div>

            {/* Progress bar - Willem style minimal */}
            <motion.div
              className="mt-8 w-48 sm:w-64 h-px bg-lumina-ink/10 overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-lumina-terracotta origin-left"
                style={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lumina-ink-muted text-xs uppercase tracking-[0.3em]"
            >
              Loading experience
            </motion.p>
          </div>

          {/* Corner decorations - Willem style */}
          <motion.div
            className="absolute top-8 left-8 w-8 h-8 border-l border-t border-lumina-ink/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-lumina-ink/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          />
        </motion.div>
      ) : (
        <motion.div
          key="fade-out"
          className="fixed inset-0 z-[100] bg-lumina-cream pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
