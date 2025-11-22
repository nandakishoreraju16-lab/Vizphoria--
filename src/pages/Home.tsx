import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, Sparkles, Crown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import ScrollReveal from "@/components/ScrollReveal";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background layers */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-[10000ms]"
            style={{ backgroundImage: `url(${heroBanner})` }}
          />
          <div className="absolute inset-0 bg-gradient-renaissance" />
          <div className="absolute inset-0 renaissance-pattern opacity-30" />
        </div>

        {/* Decorative corner ornaments */}
        <div className="absolute top-0 left-0 w-64 h-64 border-t-4 border-l-4 border-secondary/30 opacity-50" />
        <div className="absolute top-0 right-0 w-64 h-64 border-t-4 border-r-4 border-secondary/30 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-b-4 border-l-4 border-secondary/30 opacity-50" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-b-4 border-r-4 border-secondary/30 opacity-50" />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Decorative top element */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-secondary" />
              <Crown className="w-12 h-12 text-secondary animate-pulse-glow" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-secondary" />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-playfair font-black text-primary-foreground mb-6 glowing-text animate-fade-in tracking-tight">
            Vizphoria
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Star className="w-6 h-6 text-secondary animate-float" />
            <p className="text-3xl md:text-4xl font-playfair text-gradient-gold">
              A Renaissance Rebirth
            </p>
            <Star className="w-6 h-6 text-secondary animate-float" style={{ animationDelay: "0.5s" }} />
          </div>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Where classical elegance dances with modern innovation. Experience three days of culture, creativity, and celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link to="/register">
              <Button size="lg" className="bg-gradient-gold text-accent hover:shadow-gold text-xl px-12 py-7 rounded-full font-semibold group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Register Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-xl px-12 py-7 rounded-full font-semibold backdrop-blur-sm">
                Explore Events
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2">
            <span className="text-primary-foreground/70 text-sm font-medium">Scroll</span>
            <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Ornamental Divider */}
      <OrnamentalDivider />

      {/* Highlights Section - Asymmetric Layout */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Discover</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-playfair font-bold text-primary mb-6 glowing-text">
                Why Vizphoria?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Immerse yourself in a celebration where art meets innovation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-16 h-16" />,
                title: "Epic Competitions",
                description: "Showcase your talents in diverse events spanning arts, tech, and culture",
                color: "from-primary to-accent"
              },
              {
                icon: <Users className="w-16 h-16" />,
                title: "Amazing Community",
                description: "Connect with creative minds and build lasting memories",
                color: "from-accent to-secondary"
              },
              {
                icon: <Calendar className="w-16 h-16" />,
                title: "Three Days",
                description: "Non-stop entertainment, learning, and celebration",
                color: "from-secondary to-primary"
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="group relative h-full">
                  {/* Glowing background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
                  
                  <div className="relative bg-card rounded-2xl p-10 shadow-elegant hover-lift ornate-border h-full marble-texture border-2 border-border hover:border-secondary/50 transition-all duration-500">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 text-primary-foreground group-hover:scale-110 transition-transform duration-500`}>
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-playfair font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-20 bg-gradient-renaissance text-primary-foreground relative overflow-hidden clip-diagonal">
        <div className="absolute inset-0 renaissance-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "5000+", label: "Participants", icon: <Users className="w-8 h-8" /> },
              { number: "50+", label: "Events", icon: <Trophy className="w-8 h-8" /> },
              { number: "₹25L+", label: "Prize Money", icon: <Sparkles className="w-8 h-8" /> },
              { number: "3", label: "Epic Days", icon: <Calendar className="w-8 h-8" /> }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center group">
                  <div className="flex justify-center mb-3 text-secondary group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-5xl md:text-6xl font-playfair font-black text-gradient-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80 text-lg font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <OrnamentalDivider />

      {/* CTA Section - Enhanced */}
      <section className="py-32 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 renaissance-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-renaissance text-primary-foreground">
                <Sparkles className="w-5 h-5 animate-pulse-glow" />
                <span className="font-semibold">Limited Slots Available</span>
                <Sparkles className="w-5 h-5 animate-pulse-glow" />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-playfair font-black text-primary mb-8 leading-tight">
              Ready to Join the<br />
              <span className="text-gradient-gold">Renaissance?</span>
            </h2>
            
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't miss out on the cultural event of the year. Register now and be part of history.
            </p>
            
            <Link to="/register">
              <Button size="lg" className="bg-gradient-gold text-accent hover:shadow-gold text-2xl px-16 py-8 rounded-full font-bold group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  <Crown className="w-6 h-6" />
                  Register Today
                  <Sparkles className="w-6 h-6" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" 
                     style={{ backgroundSize: "200% 100%" }} />
              </Button>
            </Link>
            
            <p className="mt-8 text-sm text-muted-foreground">
              Early bird registrations close soon • Instant confirmation • Exclusive perks
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
