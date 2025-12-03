import { useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import YouTube from 'react-youtube';

interface VideoModalProps {
  isOpen: boolean;
  videoId: string;
  onClose: () => void;
}

const VideoModal = ({ isOpen, videoId, onClose }: VideoModalProps) => {
  const playerRef = useRef<any>(null);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      disablekb: 0,
      fs: 1,
      loop: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      playsinline: 1,
    },
  };

  const handleReady = (event: any) => {
    playerRef.current = event.target;
    event.target.playVideo();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Clickable overlay that closes the modal */}
          <div 
            className="absolute inset-0 cursor-pointer"
            onClick={onClose}
          />
          
          {/* Video Container - Centered */}
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] aspect-video z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={handleReady}
              className="w-full h-full"
              iframeClassName="w-full h-full rounded-lg shadow-2xl"
            />
            
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-3 right-3 sm:-top-12 sm:right-0 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
