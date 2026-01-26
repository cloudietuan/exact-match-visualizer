import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What if I already have a website?',
    answer: 'No problem! We can redesign your existing site or build fresh. Zero downtime during transition.',
  },
  {
    question: 'Do I own my website?',
    answer: "You own all your content—photos, text, branding. If you ever leave, we export everything. We earn your business, not trap you.",
  },
  {
    question: "What's included in hosting?",
    answer: 'Fast, secure hosting with SSL, daily backups, and 99.9% uptime. Domain renewal and email setup included.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: "Absolutely. No contracts, no cancellation fees, no guilt trips. You're never locked in.",
  },
  {
    question: 'How do updates work?',
    answer: "Just text, email, or call us. Most updates are done same-day. New photos, price changes, holiday hours—we've got you.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-lumina-bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Questions? We've Got Answers.
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none data-[state=open]:border-lumina-rose/30"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary py-5 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lumina-cream-muted pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
