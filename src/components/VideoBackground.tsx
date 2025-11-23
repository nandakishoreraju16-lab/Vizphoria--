import { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { Play, Pause, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoBackgroundProps {
  videoId: string;
  isVisible: boolean;
  onTogglePlay: (isPlaying: boolean) => void;
  onFullscreen: () => void;
}

const VideoBackground = ({ 
  videoId, 
  isVisible, 
  onTogglePlay, 
  onFullscreen 
}: VideoBackgroundProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      loop: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
      playsinline: 1,
    },
  };

  const handleReady = (event: any) => {
    playerRef.current = event.target;
    event.target.playVideo();
    setIsPlaying(true);
    onTogglePlay(true);
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
    onTogglePlay(!isPlaying);
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        onFullscreen();
      } else if (e.key === 'Escape') {
        document.exitFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  if (!isVisible) return null;

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={containerRef}
    >
      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full">
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={handleReady}
          className="w-full h-full"
          iframeClassName="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Controls */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute bottom-6 right-6 flex gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors pointer-events-auto"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={onFullscreen}
              className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors pointer-events-auto"
              aria-label="Fullscreen"
            >
              <Maximize2 size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoBackground;
