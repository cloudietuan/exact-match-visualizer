import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const testimonials = [
  {
    quote: "I used to spend hours trying to update my old website. Now I just text them and it's done. My bookings are up 40% since we launched!",
    name: 'Maria Chen',
    business: 'Sunset Nails, Mesa',
    emoji: '🌸',
  },
  {
    quote: "The website they built is exactly what I envisioned. Elegant, professional, and my clients always compliment it. Best investment I've made.",
    name: 'Tiffany Nguyen',
    business: 'Luxe Nail Lounge, Tempe',
    emoji: '✨',
  },
  {
    quote: "Finally, a web team that gets beauty business! They understand our industry and designed a site that actually brings in new clients.",
    name: 'Ashley Rodriguez',
    business: 'Polished Perfection, Scottsdale',
    emoji: '💅',
  },
];

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as Easing },
    },
  };

  return (
    <section className="py-24">
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
            Happy Clients
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Salon Owners Love Us
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 relative"
            >
              {/* Decorative quote mark */}
              <span className="absolute -top-4 -left-2 text-6xl text-lumina-rose/20 font-display">
                "
              </span>

              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-soft flex items-center justify-center text-xl">
                  {testimonial.emoji}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-lumina-cream-subtle text-sm">{testimonial.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
