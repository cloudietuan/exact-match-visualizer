import { motion } from 'framer-motion';
import { useState } from 'react';
import BunnyVideoBackground from '@/components/BunnyVideoBackground';

const VideoShowcaseSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-lumina-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 luxury-line" />
      
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-lumina-gold/60 text-xs uppercase tracking-[0.4em]">Watch</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 text-white">
            See It In <span className="text-gradient-gold">Action</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-md mx-auto text-sm sm:text-base">
            Watch how we transform ideas into stunning websites
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <BunnyVideoBackground
              videoUrl="https://vz-cac74041-8b3.b-cdn.net/sample/playlist.m3u8"
              showPlayButton={true}
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Stats below video */}
        <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
          {[
            { value: '100+', label: 'Projects Delivered' },
            { value: '5.0★', label: 'Average Rating' },
            { value: '48hrs', label: 'Avg Response Time' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-lumina-gold font-display text-2xl sm:text-3xl">{stat.value}</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 luxury-line" />
    </section>
  );
};

export default VideoShowcaseSection;
