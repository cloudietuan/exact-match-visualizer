import { motion } from 'framer-motion';

const PhoneMockup = () => {
  return (
    <motion.div
      className="relative mx-auto w-[280px] md:w-[320px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Phone frame */}
      <div className="relative bg-[#1a1a1a] rounded-[40px] p-3 shadow-2xl shadow-lumina-rose/20 border border-white/10">
        {/* Phone screen */}
        <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-[32px] overflow-hidden">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 py-2 text-xs text-lumina-cream-muted">
            <span>9:41</span>
            <div className="w-20 h-6 bg-black rounded-full" />
            <span>100%</span>
          </div>

          {/* Mini website content */}
          <div className="px-4 pb-6 space-y-4">
            {/* Hero gradient */}
            <div className="h-32 rounded-xl bg-gradient-to-br from-lumina-rose/30 to-lumina-champagne/30 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-lg text-foreground">Luxe Nails</p>
                <p className="text-xs text-lumina-cream-muted mt-1">Mesa's Finest</p>
              </div>
            </div>

            {/* Service icons */}
            <div className="flex justify-center gap-6 py-2">
              <div className="w-12 h-12 rounded-full bg-lumina-rose/20 flex items-center justify-center text-xl">
                💅
              </div>
              <div className="w-12 h-12 rounded-full bg-lumina-blush/20 flex items-center justify-center text-xl">
                ✨
              </div>
              <div className="w-12 h-12 rounded-full bg-lumina-champagne/20 flex items-center justify-center text-xl">
                💆
              </div>
            </div>

            {/* Book Now button */}
            <button className="w-full py-3 rounded-xl bg-gradient-glow text-primary-foreground font-medium text-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Rose gold glow behind phone */}
      <div className="absolute inset-0 -z-10 bg-lumina-rose/20 blur-3xl rounded-full scale-75" />
    </motion.div>
  );
};

export default PhoneMockup;
