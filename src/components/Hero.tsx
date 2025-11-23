import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RenaissanceArt from "./3d/RenaissanceArt";
import VideoBackground from "./VideoBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <VideoBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(218,165,32,0.1),transparent_50%)]" />
      
      {/* 3D Element - positioned on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] opacity-60 hidden lg:block">
        <RenaissanceArt />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Renaissance Reimagined</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl font-playfair font-bold leading-none">
                <span className="block text-foreground">Vizphoria</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary animate-shimmer bg-[length:200%_100%]">
                  2025
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Where the grandeur of the Renaissance collides with the pulse of Gen Z culture. 
                Three days. Infinite possibilities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
                >
                  Join the Renaissance
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/events">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-full font-bold border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  Explore Events
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-8"
            >
              {[
                { value: "5000+", label: "Participants" },
                { value: "50+", label: "Events" },
                { value: "₹25L+", label: "Prizes" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-playfair font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Element on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:hidden h-[400px]"
          >
            <RenaissanceArt />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
