import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ScrollGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Accelerating rotation based on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-40 flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative w-24 h-24"
        style={{ rotate, scale, opacity }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Globe circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--lumina-terracotta))"
            strokeWidth="1"
          />
          {/* Latitude lines */}
          {[20, 40, 60, 80].map((y, i) => (
            <ellipse
              key={`lat-${i}`}
              cx="50"
              cy={y}
              rx={Math.sin((y / 100) * Math.PI) * 45}
              ry={5}
              fill="none"
              stroke="hsl(var(--lumina-terracotta) / 0.5)"
              strokeWidth="0.5"
            />
          ))}
          {/* Longitude lines */}
          {[0, 45, 90, 135].map((angle, i) => (
            <ellipse
              key={`lon-${i}`}
              cx="50"
              cy="50"
              rx={10}
              ry="45"
              fill="none"
              stroke="hsl(var(--lumina-terracotta) / 0.5)"
              strokeWidth="0.5"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          {/* Center dot */}
          <circle cx="50" cy="50" r="3" fill="hsl(var(--lumina-terracotta))" />
        </svg>
      </motion.div>
    </div>
  );
};

export default ScrollGlobe;
