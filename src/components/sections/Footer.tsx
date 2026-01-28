import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import LandmarkMark from '@/components/BrandMark';

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'How It Works', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer ref={ref} className="relative bg-[#FAF8F5] border-t border-lumina-cream-warm">
      {/* Main footer content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <LandmarkMark size={40} variant="thin" className="flex-shrink-0" />
              <span className="text-lumina-ink font-display text-xl">
                Lumina<span className="text-lumina-gold">Sites</span>
              </span>
            </a>
            <p className="text-lumina-ink-muted text-sm leading-relaxed mb-6 max-w-sm">
              Built for salons. Modern websites that bring in more bookings — so you can focus on what you do best.
            </p>
            <p className="text-lumina-ink-muted text-sm">
              Contact: <a href="mailto:hello@luminasites.com" className="text-lumina-gold hover:underline">hello@luminasites.com</a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lumina-ink font-medium mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-lumina-ink-muted text-sm hover:text-lumina-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-lumina-cream-warm">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lumina-ink-subtle text-sm">
            © {currentYear} Lumina Sites. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-lumina-ink-subtle text-sm hover:text-lumina-ink transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
