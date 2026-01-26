import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          {/* Left */}
          <div>
            <p className="text-foreground uppercase tracking-[0.3em] text-sm mb-4">
              Lumina Sites Co.
            </p>
            <p className="text-lumina-cream-subtle text-sm max-w-sm">
              Premium web design for nail salons. Based in Mesa, Arizona. 
              Serving beauty businesses nationwide.
            </p>
          </div>

          {/* Right */}
          <div className="md:text-right">
            <p className="text-lumina-cream-subtle text-sm mb-4">
              hello@luminasites.co
            </p>
            <p className="text-lumina-cream-subtle text-sm">
              Mesa, Arizona
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-lumina-cream-subtle text-xs">
            © 2026 Lumina Sites Co. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-lumina-cream-subtle text-xs hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-lumina-cream-subtle text-xs hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
