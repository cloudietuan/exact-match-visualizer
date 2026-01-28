import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BookingModal from '@/components/BookingModal';

const CTASection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Replace with your actual Calendly URL
  const calendlyUrl = 'https://calendly.com/your-calendly-link';

  return (
    <>
      <section id="contact" className="relative py-24 md:py-32 bg-lumina-ink overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumina-gold/5 rounded-full blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lumina-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lumina-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to upgrade your<br />
            <span className="text-lumina-gold italic">salon's website?</span>
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              onClick={() => setIsBookingOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-lumina-gold text-lumina-ink font-semibold rounded-full shadow-lg hover:shadow-lumina-gold/25 transition-all text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get My Website</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="text-white/50 text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Free 15-minute walkthrough. No pressure.
          </motion.p>
        </div>
      </section>
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        calendlyUrl={calendlyUrl}
      />
    </>
  );
};

export default CTASection;
