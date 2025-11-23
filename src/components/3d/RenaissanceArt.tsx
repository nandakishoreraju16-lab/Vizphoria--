import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Pure React "3D-ish" Renaissance frame using layered transforms instead of WebGL
function RenaissanceArt() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center">
      {/* Glow background */}
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-background to-secondary/20 blur-3xl"
        animate={{ opacity: isMounted ? 1 : 0.4, scale: isMounted ? 1 : 0.95 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Tilted frame */}
      <motion.div
        className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] border border-primary/40 bg-background/80 backdrop-blur-xl overflow-hidden shadow-elegant"
        initial={{ rotateX: 15, rotateY: -15, opacity: 0, y: 40 }}
        animate={{ rotateX: 12, rotateY: -18, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
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

        {/* "Painting" layer */}
        <div className="absolute inset-6 rounded-[1.25rem] bg-gradient-to-br from-primary/20 via-background to-secondary/30 overflow-hidden">
          {/* Abstract renaissance shapes */}
          <motion.div
            className="absolute -left-10 -top-16 w-40 h-40 rounded-full bg-primary/25 blur-xl"
            animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-12 bottom-0 w-48 h-48 rounded-full bg-secondary/25 blur-xl"
            animate={{ x: [0, -15, 15, 0], y: [0, 10, -10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Central bust silhouette hint */}
          <motion.div
            className="absolute inset-10 flex items-center justify-center"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-32 h-40 rounded-full border border-primary/40 bg-background/60 backdrop-blur-md flex items-center justify-center">
              <div className="w-20 h-24 rounded-full bg-gradient-to-b from-primary/60 to-secondary/60 opacity-80" />
            </div>
          </motion.div>

          {/* Grain/noise overlay */}
          <div className="absolute inset-0 opacity-40 mix-blend-soft-light bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.25),transparent_60%),radial-gradient(circle_at_100%_0,rgba(0,0,0,0.35),transparent_55%)]" />
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-background/80 border border-primary/30 backdrop-blur-md flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Renaissance Portal
        </div>
      </motion.div>
    </div>
  );
}

export default RenaissanceArt;
