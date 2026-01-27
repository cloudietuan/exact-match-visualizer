import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandmarkMark from '@/components/BrandMark';

interface LoadingIntroProps {
  onComplete: () => void;
}

const LoadingIntro = ({ onComplete }: LoadingIntroProps) => {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds total
    const steps = 100;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      // Easing: start slow, speed up, slow down at end
      const progress = currentStep / steps;
      const easedProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      setCount(Math.floor(easedProgress * 100));
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800);
        }, 300);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] bg-lumina-cream flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Brand mark */}
          <motion.div
            className="absolute top-8 left-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <LandmarkMark size={40} variant="thin" animated />
          </motion.div>

          {/* Counter */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-lumina-ink text-8xl md:text-9xl font-display font-medium tracking-[-0.04em] tabular-nums">
              {count.toString().padStart(3, '0')}
            </span>
          </motion.div>

          {/* Progress bar */}
          <motion.div 
            className="mt-8 w-48 h-px bg-lumina-cream-warm overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.div 
              className="h-full bg-lumina-ink origin-left"
              style={{ scaleX: count / 100 }}
              transition={{ duration: 0.05 }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mt-6 text-lumina-ink-subtle text-sm tracking-[0.3em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Lumina Sites
          </motion.p>

          {/* Decorative elements */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 text-lumina-ink-subtle text-xs tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span className="w-8 h-px bg-lumina-cream-warm" />
            <span>Loading</span>
            <span className="w-8 h-px bg-lumina-cream-warm" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingIntro;
