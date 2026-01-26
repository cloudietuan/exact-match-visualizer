import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface MarqueeProps {
  text?: string;
  className?: string;
  baseSpeed?: number;
  scrollMultiplier?: number;
}

const Marquee = ({ 
  text = 'DESIGN • DEVELOP • DELIVER • ', 
  className = '',
  baseSpeed = 20,
  scrollMultiplier = 0.5,
}: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Scroll-based direction and speed
  const x1 = useTransform(scrollY, (value) => -(value * scrollMultiplier) % 1000);
  const x2 = useTransform(scrollY, (value) => (value * scrollMultiplier) % 1000);

  const repeatedText = Array(8).fill(text).join('');

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      {/* First row - moves left on scroll */}
      <motion.div
        className="inline-block mb-2"
        style={{ x: x1 }}
      >
        <motion.span 
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-lumina-ink/[0.03] select-none inline-block"
          animate={{ x: [0, -1000] }}
          transition={{ duration: baseSpeed, repeat: Infinity, ease: 'linear' }}
        >
          {repeatedText}
        </motion.span>
      </motion.div>

      {/* Second row - moves right on scroll */}
      <motion.div
        className="inline-block"
        style={{ x: x2 }}
      >
        <motion.span 
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-lumina-ink/[0.03] select-none inline-block"
          animate={{ x: [-1000, 0] }}
          transition={{ duration: baseSpeed * 1.2, repeat: Infinity, ease: 'linear' }}
        >
          {repeatedText}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Marquee;
