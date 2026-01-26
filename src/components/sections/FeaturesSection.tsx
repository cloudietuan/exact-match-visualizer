import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const features = [
  {
    emoji: '📍',
    title: 'Local SEO Domination',
    description: "Show up when someone searches 'nail salon near me.' We optimize your Google presence to get you in the top 3.",
    badge: '#1 ranking factor',
  },
  {
    emoji: '📅',
    title: '24/7 Online Booking',
    description: 'Integrate with Square, Vagaro, or Booksy. Clients book while you sleep. Automated reminders reduce no-shows.',
    badge: '40% fewer no-shows',
  },
  {
    emoji: '📱',
    title: 'Mobile-Perfect Design',
    description: '73% of your visitors are on phones. Our sites load fast and look stunning on every device.',
    badge: 'Under 2 sec load time',
  },
  {
    emoji: '⭐',
    title: 'Review Generation',
    description: 'More reviews = higher rankings = more trust. We set up automated review requests after appointments.',
    badge: '5-star strategy',
  },
  {
    emoji: '🎨',
    title: 'Portfolio Gallery',
    description: 'Show off your best work with a beautiful, organized gallery. Let your nail art sell itself.',
    badge: 'Visual proof converts',
  },
  {
    emoji: '💰',
    title: 'Clear Pricing Display',
    description: "Service menus with benefit-focused descriptions. Transparent pricing builds trust and reduces tire-kickers.",
    badge: "No more 'how much?' DMs",
  },
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
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
            What You Get
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Everything Your Salon Needs to Shine Online
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 0 40px -10px hsl(var(--lumina-rose) / 0.3)',
              }}
              className="group glass rounded-2xl p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-glow flex items-center justify-center text-xl mb-5">
                {feature.emoji}
              </div>
              <h3 className="font-display text-xl mb-3">{feature.title}</h3>
              <p className="text-lumina-cream-muted leading-relaxed mb-4">
                {feature.description}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-lumina-rose/20 text-lumina-rose text-xs font-medium">
                {feature.badge}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
