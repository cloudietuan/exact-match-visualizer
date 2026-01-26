import { motion } from 'framer-motion';

interface InfiniteTypoScrollProps {
  text?: string;
  className?: string;
  speed?: number;
  direction?: 'left' | 'right';
}

const InfiniteTypoScroll = ({ 
  text = 'DESIGN • DEVELOP • DELIVER • ', 
  className = '',
  speed = 20,
  direction = 'left'
}: InfiniteTypoScrollProps) => {
  const repeatedText = Array(6).fill(text).join('');

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{ 
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-lumina-ink/5 select-none">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
};

export default InfiniteTypoScroll;
