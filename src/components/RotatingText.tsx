import { motion } from 'framer-motion';

interface RotatingTextProps {
  text: string;
  className?: string;
  size?: number;
}

const RotatingText = ({ text, className = '', size = 120 }: RotatingTextProps) => {
  // Create circular text
  const characters = text.split('');
  const radius = size / 2 - 15;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        {characters.map((char, i) => {
          const angle = (i / characters.length) * 360 - 90;
          const x = size / 2 + radius * Math.cos((angle * Math.PI) / 180);
          const y = size / 2 + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <text
              key={i}
              x={x}
              y={y}
              fill="currentColor"
              fontSize="10"
              fontFamily="DM Sans"
              textAnchor="middle"
              dominantBaseline="middle"
              className="uppercase tracking-widest"
              style={{
                transform: `rotate(${angle + 90}deg)`,
                transformOrigin: `${x}px ${y}px`,
              }}
            >
              {char}
            </text>
          );
        })}
      </svg>
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-lumina-terracotta" />
      </div>
    </motion.div>
  );
};

export default RotatingText;
