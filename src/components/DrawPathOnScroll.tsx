import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface DrawPathOnScrollProps {
  className?: string;
}

const DrawPathOnScroll = ({ className = '' }: DrawPathOnScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className={`pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 400 200"
        fill="none"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Decorative flowing path */}
        <motion.path
          d="M-20,100 C50,20 100,180 200,100 C300,20 350,180 420,100"
          stroke="hsl(var(--lumina-terracotta))"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          style={{
            pathLength,
            opacity: pathOpacity,
          }}
        />
        {/* Secondary path with offset */}
        <motion.path
          d="M-20,120 C60,40 110,160 200,80 C290,0 340,160 420,80"
          stroke="hsl(var(--lumina-gold))"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="8 4"
          fill="none"
          style={{
            pathLength: useTransform(scrollYProgress, [0.1, 0.6], [0, 1]),
            opacity: pathOpacity,
          }}
        />
      </svg>
    </div>
  );
};

export default DrawPathOnScroll;
