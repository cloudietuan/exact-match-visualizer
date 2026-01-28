import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

const BookingModal = ({ isOpen, onClose, calendlyUrl = '' }: BookingModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // Fallback UI when no Calendly URL is provided
  const hasCalendlyUrl = calendlyUrl && calendlyUrl.trim() !== '';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] md:max-w-[900px] h-[85vh] max-h-[750px] p-0 overflow-hidden bg-lumina-cream border-lumina-cream-warm">
        <DialogHeader className="p-6 pb-0 border-b border-lumina-cream-warm bg-white">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-display text-lumina-ink">
                Schedule Your Discovery Call
              </DialogTitle>
              <p className="text-lumina-ink-muted text-sm mt-1">
                Free 15-minute walkthrough • No pressure
              </p>
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex-1 h-full overflow-hidden">
          {hasCalendlyUrl ? (
            <div className="relative w-full h-full min-h-[500px]">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-lumina-cream">
                  <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-12 h-12 border-2 border-lumina-gold border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <p className="text-lumina-ink-muted text-sm">Loading calendar...</p>
                  </motion.div>
                </div>
              )}
              <iframe
                src={`${calendlyUrl}?hide_gdpr_banner=1&background_color=faf8f5&text_color=1a1a1a&primary_color=c5a572`}
                width="100%"
                height="100%"
                frameBorder="0"
                onLoad={() => setIsLoading(false)}
                className="min-h-[500px]"
                title="Schedule a call"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <motion.div
                className="w-20 h-20 rounded-full bg-lumina-gold/10 flex items-center justify-center mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Calendar className="w-10 h-10 text-lumina-gold" />
              </motion.div>
              
              <motion.h3
                className="text-2xl font-display text-lumina-ink mb-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Book Your Discovery Call
              </motion.h3>
              
              <motion.p
                className="text-lumina-ink-muted max-w-md mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                We'll discuss your salon's goals, answer questions, and see if we're a good fit. No pressure, no sales pitch.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="mailto:hello@luminasites.com?subject=Discovery Call Request"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-lumina-ink text-white rounded-full font-medium hover:bg-lumina-ink/90 transition-colors"
                >
                  <span>Email Us to Book</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
              
              <motion.div
                className="mt-8 flex items-center gap-6 text-sm text-lumina-ink-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  15 minutes
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Video or phone
                </span>
              </motion.div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
