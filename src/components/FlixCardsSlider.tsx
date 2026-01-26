import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface FlixCard {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface FlixCardsSliderProps {
  cards?: FlixCard[];
}

const defaultCards: FlixCard[] = [
  { id: 1, image: '', title: 'Sunset Nails', subtitle: 'Mesa, AZ' },
  { id: 2, image: '', title: 'Glow Spa', subtitle: 'Phoenix, AZ' },
  { id: 3, image: '', title: 'Luxe Lashes', subtitle: 'Tempe, AZ' },
  { id: 4, image: '', title: 'Beauty Bar', subtitle: 'Scottsdale, AZ' },
];

const FlixCardsSlider = ({ cards = defaultCards }: FlixCardsSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div className="relative">
      {/* Cards container */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="flex-shrink-0 w-72 sm:w-80 snap-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onViewportEnter={() => setActiveIndex(index)}
          >
            <motion.div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-lumina-terracotta/20 to-lumina-gold/10 cursor-pointer group"
              whileHover={{ scale: 1.02, y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              {card.image ? (
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-lumina-terracotta/20 flex items-center justify-center">
                    <span className="text-lumina-terracotta font-display text-2xl">
                      {index + 1}
                    </span>
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-lumina-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              >
                <h4 className="font-display text-xl text-white">{card.title}</h4>
                <p className="text-white/60 text-sm">{card.subtitle}</p>
              </motion.div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-lumina-gold/0 group-hover:border-lumina-gold/50 rounded-2xl transition-colors duration-300" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-6">
        {cards.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-lumina-terracotta' : 'bg-lumina-ink/20'
            }`}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default FlixCardsSlider;
