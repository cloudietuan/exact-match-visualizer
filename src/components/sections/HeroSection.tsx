import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PhoneMockup from '@/components/PhoneMockup';
import type { Easing } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.03, duration: 0.4 },
    }),
  };

  const headline = "Websites That Glow As Bright As Your Work";
  const words = headline.split(' ');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-lumina-rose/5 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-lumina-champagne/5 blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-lumina-cream-muted">
                <span className="animate-pulse">✨</span>
                Mesa's Premium Nail Salon Web Partner
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-3">
                  {word === 'Glow' ? (
                    <motion.span 
                      className="text-gradient-animated inline-block"
                      custom={wordIndex * 5}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {word}
                    </motion.span>
                  ) : (
                    word.split('').map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        custom={wordIndex * 5 + letterIndex}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))
                  )}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-lumina-cream-muted max-w-lg"
            >
              We create stunning, conversion-optimized websites for nail salons. 
              No upfront cost. No tech headaches. Just more bookings.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button variant="glow" size="lg">
                See Our Work
              </Button>
              <Button variant="glass" size="lg">
                Book Free Call
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <PhoneMockup />

            {/* Floating cards */}
            <motion.div 
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-sm"
              >
                <span className="text-lumina-champagne">📈 +47%</span>
                <span className="text-lumina-cream-muted ml-1">More Bookings</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute bottom-20 -right-8 glass px-4 py-2 rounded-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="text-sm"
              >
                <span className="text-lumina-rose">⭐</span>
                <span className="text-lumina-cream-muted ml-1">5-Star Reviews</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute top-1/3 -left-12 glass px-4 py-2 rounded-xl hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="text-sm"
              >
                <span className="text-lumina-blush">📱</span>
                <span className="text-lumina-cream-muted ml-1">24/7 Online Booking</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
