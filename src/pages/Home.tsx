import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from 'framer-motion';
import OrnamentalDivider from "@/components/OrnamentalDivider";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden">
      <Hero />

      {/* Highlights Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

        {/* Animated Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Vizphoria</span>?
              </h2>
              <OrnamentalDivider />
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mt-8">
                Where Renaissance grandeur meets Gen Z energy in an explosive celebration of culture, creativity, and chaos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-12 h-12" />,
                title: "Epic Competitions",
                description: "Battle it out in 25+ events. From classical arts to digital innovation, every talent finds its stage.",
                delay: 0,
                gradient: "from-primary/20 to-primary/5"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Vibe with 5000+ Creatives",
                description: "Network, collab, and create memories with India's most creative minds. This isn't just a fest—it's a movement.",
                delay: 0.2,
                gradient: "from-secondary/20 to-secondary/5"
              },
              {
                icon: <Calendar className="w-12 h-12" />,
                title: "4 Days of Pure Energy",
                description: "96 hours of non-stop entertainment, learning, performances, and cultural explosion. Sleep is for later.",
                delay: 0.4,
                gradient: "from-accent/20 to-accent/5"
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={item.delay}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group relative p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Background Gradient */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  />

                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/20`}
                    >
                      {item.icon}
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax */}
      <section className="relative py-32 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        </motion.div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="text-center text-4xl md:text-6xl font-playfair font-bold mb-20">
              By the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Numbers</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Participants", sublabel: "Creative Minds" },
              { number: "25+", label: "Events", sublabel: "Epic Competitions" },
              { number: "Upto ₹1L+", label: "Prize Pool", sublabel: "Win Big" },
              { number: "4", label: "Days", sublabel: "Non-Stop Action" }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  
                  <div className="relative">
                    <motion.div 
                      className="text-5xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-secondary mb-3"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", duration: 0.8, delay: index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-foreground font-bold tracking-wide uppercase text-sm mb-1">
                      {stat.label}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {stat.sublabel}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <motion.div
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-9xl font-playfair font-bold mb-8 leading-none">
                <span className="block text-foreground">Ready to</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-shimmer bg-[length:200%_100%]">
                  Make History?
                </span>
              </h2>
            </motion.div>

            <OrnamentalDivider />

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto mt-8">
              Don't just attend—be part of the Renaissance. 5000 spots. Infinite memories. One legendary fest.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-16 py-10 rounded-full font-bold shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative flex items-center gap-3">
                    Claim Your Spot Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </Link>
            </motion.div>

            <p className="text-sm text-muted-foreground mt-6">
              🔥 Early bird registrations closing soon
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
