import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep vignette background */}
      <div className="absolute inset-0 bg-lumina-bg-deep" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--lumina-bg-deep))_70%)]" />
      
      {/* Subtle golden gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--lumina-gold)/0.03)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-8 relative z-10 text-center">
        {/* Intro animation sequence */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-8"
        >
          <span className="text-lumina-cream-muted text-xs uppercase tracking-[0.4em]">
            Lumina Sites Co.
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lumina-cream-muted text-sm uppercase tracking-[0.3em] mb-6"
        >
          Premium web design for
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.9]"
        >
          nail salons
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-lumina-gold/50 to-transparent mx-auto mb-8"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="font-display text-2xl md:text-3xl lg:text-4xl text-lumina-cream-muted italic mb-12"
        >
          Your freedom to shine
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="text-lumina-cream-subtle text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-16"
        >
          Every website is designed around your brand, your clients, and your vision — 
          so you can focus on your craft, while we take care of everything else.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="flex flex-col items-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center gap-3 text-lumina-cream-subtle hover:text-lumina-gold transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Scroll down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="stroke-current">
                <rect x="1" y="1" width="18" height="28" rx="9" strokeWidth="1.5"/>
                <motion.circle
                  cx="10"
                  cy="10"
                  r="3"
                  fill="currentColor"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
