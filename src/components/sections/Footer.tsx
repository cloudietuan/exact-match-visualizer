import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 bg-lumina-bg-warm border-t border-lumina-ink/5">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="text-foreground uppercase tracking-[0.3em] text-sm mb-4">
              Lumina Sites
            </p>
            <p className="text-lumina-ink-subtle text-sm max-w-xs">
              Premium web design for nail salons. Based in Mesa, Arizona.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-4 text-lumina-ink-subtle">Navigate</p>
              <ul className="space-y-3">
                <li><a href="#work" className="text-lumina-ink-muted hover:text-lumina-accent transition-colors text-sm">Work</a></li>
                <li><a href="#services" className="text-lumina-ink-muted hover:text-lumina-accent transition-colors text-sm">Services</a></li>
                <li><a href="#pricing" className="text-lumina-ink-muted hover:text-lumina-accent transition-colors text-sm">Pricing</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-4 text-lumina-ink-subtle">Legal</p>
              <ul className="space-y-3">
                <li><a href="#" className="text-lumina-ink-muted hover:text-lumina-accent transition-colors text-sm">Privacy</a></li>
                <li><a href="#" className="text-lumina-ink-muted hover:text-lumina-accent transition-colors text-sm">Terms</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] mb-4 text-lumina-ink-subtle">Contact</p>
            <p className="text-lumina-ink-muted text-sm mb-2">hello@luminasites.co</p>
            <p className="text-lumina-ink-muted text-sm">Mesa, Arizona</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-lumina-ink/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-lumina-ink-subtle text-xs">
            © 2026 Lumina Sites Co. All rights reserved.
          </p>
          <p className="text-lumina-ink-subtle text-xs">
            Made with ✦ in Arizona
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
