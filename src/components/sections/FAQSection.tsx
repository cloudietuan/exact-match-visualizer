import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does it take to launch?',
    answer: 'Most salon websites are ready within 5–7 days once we receive your content.',
  },
  {
    question: 'Do I need professional photos?',
    answer: 'No. Phone photos are fine — we can upgrade visuals later if needed.',
  },
  {
    question: 'Can you connect my booking system?',
    answer: 'Yes. We design your site to work with your existing booking platform.',
  },
  {
    question: 'What updates are included monthly?',
    answer: 'Small text, photo, or service changes — up to 2 hours per month.',
  },
  {
    question: 'What happens if I cancel the monthly plan?',
    answer: "Your site stays live. You just won't receive ongoing updates or support.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-lumina-cream">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lumina-gold text-sm tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl text-lumina-ink">
            Common questions
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 border border-lumina-cream-warm data-[state=open]:border-lumina-gold/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-lumina-ink hover:text-lumina-gold py-5 [&[data-state=open]]:text-lumina-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lumina-ink-muted pb-5">
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
