import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Process section with Jesko-style scroll animations

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your salon, your style, and your goals through a quick consultation.',
    icon: '💬',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team crafts a custom design that captures your unique brand personality.',
    icon: '✏️',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build your site with booking integration, SEO, and mobile optimization.',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Your new website goes live and starts bringing in more clients immediately.',
    icon: '🚀',
  },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-32 bg-lumina-cream-warm relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--lumina-ink)) 0, hsl(var(--lumina-ink)) 1px, transparent 0, transparent 50%)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container mx-auto px-8 relative z-10">
        {/* Header with scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-lumina-ink-subtle text-xs uppercase tracking-[0.4em]">Our Process</span>
          <h2 className="font-sans font-bold text-[10vw] md:text-[6vw] leading-[0.9] uppercase text-lumina-ink mt-4">
            How We
            <span className="block text-brush text-lumina-terracotta font-normal normal-case">Work</span>
          </h2>
        </motion.div>

        {/* Process steps with connected line */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated progress line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-lumina-ink/10">
            <motion.div
              className="absolute top-0 left-0 w-full bg-lumina-terracotta origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20 md:pl-28"
              >
                {/* Step number circle */}
                <div className="absolute left-0 top-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-background border-2 border-lumina-terracotta flex items-center justify-center">
                  <span className="text-3xl">{step.icon}</span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <span className="text-lumina-terracotta font-display text-lg">{step.number}</span>
                  <h3 className="font-sans font-bold text-3xl md:text-4xl uppercase mt-2 mb-4">{step.title}</h3>
                  <p className="text-lumina-ink-muted text-lg max-w-lg">{step.description}</p>
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
