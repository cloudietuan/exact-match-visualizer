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
        {/* Phone screen - Sunset Nails inspired light mode design */}
        <div className="bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE6] rounded-[32px] overflow-hidden">
          {/* Status bar */}
          <div className="flex justify-between items-center px-6 py-2 text-xs text-[#C17F59]">
            <span>9:41</span>
            <div className="w-20 h-6 bg-[#1a1a1a] rounded-full" />
            <span>100%</span>
          </div>

          {/* Mini Sunset Nails website content */}
          <div className="px-4 pb-6 space-y-3">
            {/* Logo area */}
            <div className="text-center py-3">
              <p className="text-[#C17F59] text-[10px] uppercase tracking-[0.2em]">Sunset Nails</p>
              <p className="text-[#B8A89A] text-[8px] mt-0.5">Our Story</p>
            </div>

            {/* Hero tagline */}
            <div className="text-center py-2">
              <p className="font-display text-[#8B7355] text-sm italic">"In the heart of Mesa"</p>
            </div>

            {/* Line art buildings - simplified */}
            <div className="flex justify-center gap-2 py-2">
              <div className="w-8 h-10 border border-[#C17F59]/40 rounded-t-lg" />
              <div className="w-6 h-8 border border-[#C17F59]/40 rounded-t-full" />
              <div className="w-8 h-12 border border-[#C17F59]/40" />
            </div>

            {/* Pricing preview */}
            <div className="flex gap-2 justify-center">
              <div className="bg-white/50 rounded-lg px-2 py-1.5 text-center">
                <p className="text-[#C17F59] text-[10px] font-medium">$55</p>
                <p className="text-[#8B7355] text-[7px]">Basic Bliss</p>
              </div>
              <div className="bg-white/50 rounded-lg px-2 py-1.5 text-center">
                <p className="text-[#C17F59] text-[10px] font-medium">$70</p>
                <p className="text-[#8B7355] text-[7px]">Premium</p>
              </div>
            </div>

            {/* Book Now button */}
            <button className="w-full py-2.5 rounded-lg bg-[#C17F59] text-white font-medium text-xs">
              Book Appointment
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
