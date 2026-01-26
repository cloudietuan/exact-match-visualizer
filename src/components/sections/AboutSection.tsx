import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-8">
        {/* Large statement */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-lumina-cream-muted leading-relaxed max-w-4xl"
        >
          <span className="text-foreground">Lumina Sites Co.</span> is a premium web design studio 
          with over <span className="text-lumina-gold">50 salons</span> transformed across Arizona. 
          From boutique nail bars to luxury spa destinations, our clients trust us to deliver 
          beautiful, conversion-focused websites that book more appointments.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center md:text-left">
            <p className="text-lumina-cream-subtle text-xs uppercase tracking-[0.2em] mb-2">Est.</p>
            <p className="font-display text-4xl text-lumina-gold">2018</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-lumina-cream-subtle text-xs uppercase tracking-[0.2em] mb-2">Salons</p>
            <p className="font-display text-4xl">50+</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-lumina-cream-subtle text-xs uppercase tracking-[0.2em] mb-2">Avg. Booking Increase</p>
            <p className="font-display text-4xl">47%</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-lumina-cream-subtle text-xs uppercase tracking-[0.2em] mb-2">5-Star Reviews</p>
            <p className="font-display text-4xl">100%</p>
          </div>
        </motion.div>

        {/* Separator line */}
        <div className="luxury-line mt-24" />

        {/* Three pillars */}
        <div className="mt-24 grid md:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl mb-6">Direct Access to Premium Design</h3>
            <p className="text-lumina-cream-muted leading-relaxed">
              No templates. No DIY frustration. Our team crafts custom websites that capture 
              your salon's unique personality — from the first consultation to launch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-display text-xl mb-6">Your Freedom to Focus</h3>
            <p className="text-lumina-cream-muted leading-relaxed">
              We value your time above all. You focus on creating beautiful nails — 
              we handle the tech, the updates, and the strategy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl mb-6">Precision & Excellence</h3>
            <p className="text-lumina-cream-muted leading-relaxed">
              Every pixel matters. Every word is intentional. We obsess over the details 
              so your website converts visitors into loyal clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
