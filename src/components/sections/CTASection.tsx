import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-lumina-ink overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumina-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lumina-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lumina-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-lumina-gold/10 border border-lumina-gold/20 rounded-full text-lumina-gold text-sm mb-8">
            Limited Availability
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-display text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to transform<br />
          <span className="text-lumina-gold">your online presence?</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Book a free 15-minute consultation and let's discuss how we can help your nail salon stand out online.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="#book"
            className="group flex items-center gap-3 px-8 py-4 bg-lumina-gold text-lumina-ink font-semibold rounded-full shadow-lg hover:shadow-lumina-gold/25 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="w-5 h-5" />
            <span>Book Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="tel:+1234567890"
            className="flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5" />
            <span>Call Us</span>
          </motion.a>
        </motion.div>

        {/* Trust statement */}
        <motion.p
          className="mt-8 text-white/40 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          No obligation • Free consultation • Response within 24 hours
        </motion.p>

        {/* Social proof */}
        <motion.div
          className="mt-16 pt-16 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/50 text-sm mb-6">What salon owners are saying</p>
          
          <div className="max-w-xl mx-auto">
            <blockquote className="text-white/80 text-lg md:text-xl font-display italic mb-4">
              "Our bookings increased 47% within the first month. The website paid for itself in weeks."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lumina-gold to-lumina-coral" />
              <div className="text-left">
                <p className="text-white text-sm font-medium">Sarah Chen</p>
                <p className="text-lumina-gold/60 text-xs">Owner, Sunset Nails</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
