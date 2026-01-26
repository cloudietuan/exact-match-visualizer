import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your salon, your style, and your goals through a quick consultation.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team crafts a custom design that captures your unique brand personality.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build your site with booking integration, SEO, and mobile optimization.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Your new website goes live and starts bringing in more clients immediately.',
  },
];

// Custom SVG icons for each step
const StepIcon = ({ step }: { step: string }) => {
  switch (step) {
    case '01':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      );
    case '02':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 24l16-16 4 4-16 16H4v-4z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          <path d="M16 8l4 4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case '03':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4v6l5 3-5 3v6l-8-9 8-9z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          <path d="M14 10l8 9-8-1v6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        </svg>
      );
    case '04':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 12l6-8 6 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="14" cy="24" r="2" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-20 sm:py-24 md:py-32 bg-lumina-cream-warm relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--lumina-ink)) 0, hsl(var(--lumina-ink)) 1px, transparent 0, transparent 50%)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <span className="text-lumina-ink-subtle text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">Our Process</span>
          <h2 className="font-sans font-bold text-[12vw] sm:text-[10vw] md:text-[6vw] leading-[0.9] uppercase text-lumina-ink mt-3 sm:mt-4">
            How We
            <span className="block text-brush text-lumina-terracotta font-normal normal-case">Work</span>
          </h2>
        </motion.div>

        {/* Process steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated progress line */}
          <div className="absolute left-6 sm:left-8 md:left-10 top-0 bottom-0 w-px bg-lumina-ink/10">
            <motion.div
              className="absolute top-0 left-0 w-full bg-lumina-terracotta origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-16 sm:pl-20 md:pl-24"
              >
                {/* Step icon circle */}
                <div className="absolute left-0 top-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full bg-background border border-lumina-terracotta/50 flex items-center justify-center text-lumina-terracotta">
                  <StepIcon step={step.number} />
                </div>

                {/* Content */}
                <div className="pt-1 sm:pt-2">
                  <span className="text-lumina-terracotta font-display text-sm sm:text-base md:text-lg">{step.number}</span>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl uppercase mt-1 sm:mt-2 mb-2 sm:mb-3 text-lumina-ink">{step.title}</h3>
                  <p className="text-lumina-ink-muted text-sm sm:text-base max-w-md">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
