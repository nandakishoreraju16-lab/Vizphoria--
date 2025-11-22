import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-renaissance" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary-foreground mb-6">
            Vizphoria
          </h1>
          <p className="text-2xl md:text-3xl font-playfair text-secondary mb-4">
            A Renaissance Rebirth
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the fusion of classical elegance and modern innovation at our premier college fest
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-gold text-accent hover:shadow-gold text-lg px-8 py-6">
                Register Now
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
                Explore Events
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Why Vizphoria?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in a celebration where art meets innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy className="w-12 h-12" />,
                title: "Epic Competitions",
                description: "Showcase your talents in diverse events spanning arts, tech, and culture"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Amazing Community",
                description: "Connect with creative minds and build lasting memories"
              },
              {
                icon: <Calendar className="w-12 h-12" />,
                title: "Three Days",
                description: "Non-stop entertainment, learning, and celebration"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-elegant hover-lift ornate-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-renaissance text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Join the Renaissance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't miss out on the cultural event of the year
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-gradient-gold text-accent hover:shadow-gold text-lg px-8 py-6">
              Register Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
