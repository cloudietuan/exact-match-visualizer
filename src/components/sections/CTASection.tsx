import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState } from 'react';

// dontboardme inspired: Playful, colorful with interactive elements

const CTASection = () => {
  const [ballClicks, setBallClicks] = useState(0);
  const ballX = useMotionValue(50);
  const ballY = useMotionValue(50);
  const springX = useSpring(ballX, { stiffness: 100, damping: 15 });
  const springY = useSpring(ballY, { stiffness: 100, damping: 15 });

  const handleBallClick = () => {
    setBallClicks((prev) => prev + 1);
    ballX.set(Math.random() * 80 + 10);
    ballY.set(Math.random() * 60 + 20);
  };

  return (
    <section id="contact" className="py-32 bg-lumina-pink relative overflow-hidden">
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-lumina-coral/10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-32 w-24 h-24 rounded-full bg-lumina-yellow/30"
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-lumina-coral/20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Interactive bouncing ball */}
      <motion.div
        className="absolute z-20 cursor-pointer"
        style={{ left: springX.get() + '%', top: springY.get() + '%' }}
        onClick={handleBallClick}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div 
          className="w-16 h-16 rounded-full bg-lumina-yellow shadow-lg flex items-center justify-center text-3xl"
          animate={{ rotate: ballClicks * 360 }}
          transition={{ duration: 0.5 }}
        >
          🎾
        </motion.div>
        {ballClicks > 0 && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-lumina-coral font-bold"
          >
            {ballClicks}x
          </motion.span>
        )}
      </motion.div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Chunky playful typography (dontboardme style) */}
            <h2 className="font-sans font-bold text-[10vw] md:text-[7vw] leading-[0.9] uppercase text-lumina-coral mb-6">
              Let's Build
              <span className="block">Something</span>
              <span className="block text-foreground">Beautiful</span>
            </h2>
            
            <p className="text-lumina-coral/70 text-lg mb-12 max-w-lg mx-auto">
              Your salon deserves to shine online. Schedule a free consultation today!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                className="px-10 py-5 bg-lumina-coral text-white rounded-full font-bold text-lg uppercase tracking-wide hover:bg-lumina-coral/90 transition-colors shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Consultation
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
              <motion.button 
                className="px-10 py-5 bg-white text-lumina-coral rounded-full font-bold text-lg uppercase tracking-wide hover:bg-white/90 transition-colors shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Work
              </motion.button>
            </div>

            {/* Fun counter */}
            {ballClicks >= 5 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-lumina-coral/60 text-sm"
              >
                🎉 You found the easter egg! You bounced {ballClicks} times!
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
