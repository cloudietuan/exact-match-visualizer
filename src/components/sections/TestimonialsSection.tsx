import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "I used to spend hours trying to update my old website. Now I just text them and it's done. My bookings are up 40% since we launched.",
    name: 'Maria Chen',
    title: 'Sunset Nails, Mesa',
  },
  {
    quote: "The website they built is exactly what I envisioned. Elegant, professional, and my clients always compliment it. Best investment I've made.",
    name: 'Tiffany Nguyen',
    title: 'Luxe Nail Lounge, Tempe',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-lumina-cream-subtle text-xs uppercase tracking-[0.3em]">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">What Our Clients Say</h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <blockquote className="text-xl md:text-2xl leading-relaxed text-lumina-cream-muted mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="text-foreground font-medium">{testimonial.name}</p>
                <p className="text-lumina-cream-subtle text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
