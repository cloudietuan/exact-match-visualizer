import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-lumina-dark via-amber-950/20 to-lumina-dark" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm mb-8">
            Limited Availability
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-display text-amber-100 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to transform<br />
          <span className="text-amber-400">your online presence?</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-amber-200/60 text-lg md:text-xl max-w-2xl mx-auto mb-12"
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
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-lumina-dark font-semibold rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="w-5 h-5" />
            <span>Book Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="tel:+1234567890"
            className="flex items-center gap-3 px-8 py-4 bg-transparent border border-amber-500/30 text-amber-300 font-medium rounded-full hover:bg-amber-500/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5" />
            <span>Call Us</span>
          </motion.a>
        </motion.div>

        {/* Trust statement */}
        <motion.p
          className="mt-8 text-amber-200/40 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          No obligation • Free consultation • Response within 24 hours
        </motion.p>

        {/* Social proof */}
        <motion.div
          className="mt-16 pt-16 border-t border-amber-900/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-amber-200/50 text-sm mb-6">What salon owners are saying</p>
          
          <div className="max-w-xl mx-auto">
            <blockquote className="text-amber-100/80 text-lg md:text-xl font-display italic mb-4">
              "Our bookings increased 47% within the first month. The website paid for itself in weeks."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600" />
              <div className="text-left">
                <p className="text-amber-100 text-sm font-medium">Sarah Chen</p>
                <p className="text-amber-400/60 text-xs">Owner, Sunset Nails</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
