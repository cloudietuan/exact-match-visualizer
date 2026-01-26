import { motion } from 'framer-motion';
import sunsetNailsHero from '@/assets/sunset-nails-hero.jpg';

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
              <p className="text-[#B8A89A] text-[8px] mt-0.5">Gilbert, Arizona</p>
            </div>

            {/* Hero image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={sunsetNailsHero} 
                alt="Beautiful nail art"
                className="w-full h-20 object-cover"
              />
            </div>

            {/* Hero tagline */}
            <div className="text-center py-2">
              <p className="font-display text-[#8B7355] text-sm italic">"Where beauty meets artistry"</p>
            </div>

            {/* Services icons - using custom SVG icons instead of emojis */}
            <div className="flex justify-center gap-3 py-2">
              <div className="w-9 h-9 rounded-full bg-[#C17F59]/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                  <rect x="18" y="4" width="12" height="8" rx="2" fill="#C17F59" />
                  <path d="M16 18 L16 38 C16 42 19 44 24 44 C29 44 32 42 32 38 L32 18 Z" fill="#C17F59" opacity="0.9" />
                </svg>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#C17F59]/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4 L26 20 L42 24 L26 28 L24 44 L22 28 L6 24 L22 20 Z" fill="#C17F59" />
                </svg>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#C17F59]/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 44 44" fill="none">
                  <path d="M22 4 L10 16 L22 12 Z" fill="#C17F59" opacity="0.9" />
                  <path d="M22 4 L34 16 L22 12 Z" fill="#C17F59" opacity="0.7" />
                  <path d="M6 16 L22 40 L22 20 Z" fill="#8B7355" opacity="0.9" />
                  <path d="M38 16 L22 40 L22 20 Z" fill="#8B7355" opacity="0.7" />
                </svg>
              </div>
            </div>

            {/* Pricing preview */}
            <div className="flex gap-2 justify-center">
              <div className="bg-white/50 rounded-lg px-2 py-1.5 text-center">
                <p className="text-[#C17F59] text-[10px] font-medium">$35</p>
                <p className="text-[#8B7355] text-[7px]">Basic</p>
              </div>
              <div className="bg-[#C17F59] rounded-lg px-2 py-1.5 text-center">
                <p className="text-white text-[10px] font-medium">$55</p>
                <p className="text-white/80 text-[7px]">Premium</p>
              </div>
              <div className="bg-white/50 rounded-lg px-2 py-1.5 text-center">
                <p className="text-[#C17F59] text-[10px] font-medium">$75</p>
                <p className="text-[#8B7355] text-[7px]">Deluxe</p>
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
