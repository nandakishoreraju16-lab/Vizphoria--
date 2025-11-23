import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoModal from '@/components/VideoModal';

// Pure React "3D-ish" Renaissance frame using layered transforms instead of WebGL
function RenaissanceArt() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoId = 'qfY4FnaURBY';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="relative w-full h-full min-h-[320px] flex items-center justify-center">
        {/* Glow background */}
        <motion.div
          className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-background to-secondary/20 blur-3xl"
          animate={{ opacity: isMounted ? 1 : 0.4, scale: isMounted ? 1 : 0.95 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* Tilted frame - clickable */}
        <motion.div
          className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] border border-primary/40 bg-background/80 backdrop-blur-xl overflow-hidden shadow-elegant cursor-pointer"
          initial={{ rotateX: 15, rotateY: -15, opacity: 0, y: 40 }}
          animate={{ rotateX: 12, rotateY: -18, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsVideoOpen(true)}
        >
        {/* Ornate border */}
        <div className="absolute inset-0 rounded-[2rem] border border-primary/30" />
        <div className="absolute inset-3 rounded-[1.5rem] border border-primary/20" />

        {/* Corner orbs */}
        {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos, i) => (
          <motion.div
            key={pos}
            className={`absolute ${pos} w-3 h-3 rounded-full bg-primary shadow-gold`}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* "Painting" layer with video thumbnail */}
        <div className="absolute inset-6 rounded-[1.25rem] overflow-hidden">
          {/* YouTube thumbnail */}
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Vizphoria Video"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />

          {/* Play button overlay */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative"
              animate={{ 
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
              <div className="relative w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm border-2 border-primary flex items-center justify-center shadow-2xl shadow-primary/50">
                <Play className="w-10 h-10 text-primary-foreground fill-current ml-1" />
              </div>
            </motion.div>
          </motion.div>

          {/* Grain/noise overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.25),transparent_60%),radial-gradient(circle_at_100%_0,rgba(0,0,0,0.35),transparent_55%)]" />
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-background/80 border border-primary/30 backdrop-blur-md flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">
          <Play className="w-3 h-3 text-primary" />
          Watch Vizphoria
        </div>
      </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
}

export default RenaissanceArt;
