import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

interface DynamicCursorProps {
  defaultText?: string;
}

const DynamicCursor = ({ defaultText = '' }: DynamicCursorProps) => {
  const [cursorText, setCursorText] = useState(defaultText);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'text' | 'image'>('default');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for data-cursor-text attribute
      const cursorTextAttr = target.closest('[data-cursor-text]');
      if (cursorTextAttr) {
        setCursorText(cursorTextAttr.getAttribute('data-cursor-text') || '');
        setCursorVariant('text');
        return;
      }

      // Check for data-cursor-image attribute
      const cursorImageAttr = target.closest('[data-cursor-image]');
      if (cursorImageAttr) {
        setImagePreview(cursorImageAttr.getAttribute('data-cursor-image'));
        setCursorVariant('image');
        return;
      }

      // Check for interactive elements
      if (target.closest('a, button, [role="button"]')) {
        setCursorVariant('text');
        setCursorText('');
        return;
      }

      setCursorVariant('default');
      setCursorText('');
      setImagePreview(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'hsl(var(--lumina-terracotta))',
    },
    text: {
      width: cursorText ? 100 : 40,
      height: cursorText ? 100 : 40,
      backgroundColor: 'hsl(var(--lumina-terracotta) / 0.9)',
    },
    image: {
      width: 180,
      height: 120,
      backgroundColor: 'transparent',
    },
  };

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-difference flex items-center justify-center hidden md:flex"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={cursorVariant}
        variants={variants}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorVariant === 'text' && cursorText && (
          <span className="text-white text-xs font-medium uppercase tracking-wider">
            {cursorText}
          </span>
        )}
        {cursorVariant === 'image' && imagePreview && (
          <img 
            src={imagePreview} 
            alt="Preview" 
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        )}
      </motion.div>

      {/* Cursor outline follower */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-8 h-8 border border-lumina-terracotta/30 rounded-full hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorVariant === 'default' ? 1 : 0,
          opacity: cursorVariant === 'default' ? 1 : 0,
        }}
      />
    </>
  );
};

export default DynamicCursor;
