import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoLightbox = ({ isOpen, onClose, videoUrl }: VideoLightboxProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Video container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface BunnyVideoBackgroundProps {
  videoUrl?: string;
  posterUrl?: string;
  className?: string;
  showPlayButton?: boolean;
  onPlayClick?: () => void;
}

const BunnyVideoBackground = ({
  videoUrl = 'https://vz-cac74041-8b3.b-cdn.net/a9c4b9c8-c5c0-40d3-9b95-fc01bf7ad8e7/playlist.m3u8',
  posterUrl,
  className = '',
  showPlayButton = true,
  onPlayClick,
}: BunnyVideoBackgroundProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePlayClick = () => {
    if (onPlayClick) {
      onPlayClick();
    } else {
      setLightboxOpen(true);
    }
  };

  // Placeholder video - replace with your Bunny.net hosted video URL
  const fallbackUrl = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

  return (
    <>
      <div className={`relative overflow-hidden ${className}`}>
        {/* Video element */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          className="absolute inset-0 w-full h-full object-cover"
          onCanPlay={() => setIsPlaying(true)}
        >
          {/* Try HLS first, then fallback */}
          <source src={videoUrl} type="application/x-mpegURL" />
          <source src={fallbackUrl} type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Play button overlay */}
        {showPlayButton && (
          <motion.button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center group"
            whileHover="hover"
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
              variants={{
                hover: { scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </motion.div>
          </motion.button>
        )}

        {/* Loading state */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-lumina-dark flex items-center justify-center">
            <motion.div
              className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )}
      </div>

      {/* Lightbox */}
      <VideoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        videoUrl={videoUrl.includes('.m3u8') ? fallbackUrl : videoUrl}
      />
    </>
  );
};

export default BunnyVideoBackground;
