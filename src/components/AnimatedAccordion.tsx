import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AnimatedAccordionProps {
  items?: AccordionItem[];
}

const defaultItems: AccordionItem[] = [
  {
    question: 'How long does it take to build my website?',
    answer: 'Most projects are completed within 5-7 business days. Complex sites with custom features may take up to 2 weeks. We\'ll provide a clear timeline during our discovery call.',
  },
  {
    question: 'Do I need to provide content and images?',
    answer: 'We can work with whatever you have! If you don\'t have professional photos, we can source high-quality stock images that match your brand. We\'ll also help you refine your copy.',
  },
  {
    question: 'Can I update the website myself?',
    answer: 'Absolutely! We build on platforms that are easy to manage. Plus, all our packages include training and support to help you make updates confidently.',
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'Our Glow plan includes 2 updates per month, and Radiant/Brilliant packages include unlimited updates. We\'re always here to help your website evolve.',
  },
];

const AnimatedAccordion = ({ items = defaultItems }: AnimatedAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="border border-lumina-ink/10 rounded-xl overflow-hidden bg-white/50"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-5 py-4 flex items-center justify-between text-left group"
          >
            <span className="font-medium text-lumina-ink group-hover:text-lumina-terracotta transition-colors">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <ChevronDown className="w-5 h-5 text-lumina-ink-muted" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: 'auto', 
                  opacity: 1,
                  transition: {
                    height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.25, delay: 0.15 }
                  }
                }}
                exit={{ 
                  height: 0, 
                  opacity: 0,
                  transition: {
                    height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.2 }
                  }
                }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  exit={{ y: -10 }}
                  className="px-5 pb-4 text-lumina-ink-muted text-sm leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedAccordion;
