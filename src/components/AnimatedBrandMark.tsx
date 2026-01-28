import { motion } from "framer-motion";

type AnimatedBrandMarkProps = {
  size?: number;
  className?: string;
};

export default function AnimatedBrandMark({
  size = 120,
  className,
}: AnimatedBrandMarkProps) {
  // Path for the L shape - designed as a single stroke path for drawing animation
  const lPath = "M30 24 L30 56 L54 56";
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lumina Sites"
    >
      {/* Background square - fades in */}
      <motion.rect 
        x="8" 
        y="8" 
        width="64" 
        height="64" 
        rx="18" 
        className="fill-lumina-ink"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* L shape - draws itself in */}
      <motion.path
        d={lPath}
        className="stroke-lumina-cream"
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          pathLength: { duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.2, delay: 0.4 }
        }}
      />
      
      {/* Fill the L after drawing */}
      <motion.path
        d="M30 24 L30 56 L54 56 L54 52 L34 52 L34 24 Z"
        className="fill-lumina-cream"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.5 }}
      />
      
      {/* Gold accent dot - pops in after L is drawn */}
      <motion.circle
        cx="52"
        cy="24"
        r="4"
        className="fill-lumina-gold"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 1.6, 
          duration: 0.5, 
          ease: [0.34, 1.56, 0.64, 1] // Spring-like overshoot
        }}
      />
      
      {/* Pulsing glow on the dot */}
      <motion.circle
        cx="52"
        cy="24"
        r="4"
        className="fill-lumina-gold"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.6, 0, 0.6]
        }}
        transition={{ 
          delay: 2.1,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </svg>
  );
}
