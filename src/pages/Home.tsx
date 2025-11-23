import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      <Hero />

      {/* Highlights Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-0" />

        {/* Decorative Blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                <span className="text-gradient-gold">Why Vizphoria?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Immerse yourself in a celebration where art meets innovation.
                A convergence of creativity, technology, and culture.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-12 h-12" />,
                title: "Epic Competitions",
                description: "Showcase your talents in diverse events spanning arts, tech, and culture",
                delay: 0
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Vibrant Community",
                description: "Connect with creative minds and build lasting memories with peers",
                delay: 0.2
              },
              {
                icon: <Calendar className="w-12 h-12" />,
                title: "Three Days",
                description: "Non-stop entertainment, learning, and celebration of the arts",
                delay: 0.4
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={item.delay}>
                <div className="group relative p-8 rounded-2xl bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-primary">
                      {item.icon}
                    </div>

                    <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax */}
      <section className="relative py-32 bg-black overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "5000+", label: "Participants" },
              { number: "50+", label: "Events" },
              { number: "₹25L+", label: "Prize Pool" },
              { number: "3", label: "Days" }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div>
                  <div className="text-5xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary font-medium tracking-widest uppercase text-sm">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-8xl font-playfair font-bold mb-8 leading-tight">
              Ready to Make <br />
              <span className="text-primary italic">History?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join us for the most anticipated cultural fest of the year.
              Register now to secure your spot.
            </p>

            <Link to="/register">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 text-xl px-12 py-8 rounded-full font-bold transition-transform hover:scale-105">
                Register Now <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
