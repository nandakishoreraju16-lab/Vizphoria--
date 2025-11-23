import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentalDivider from "@/components/OrnamentalDivider";

const events = [
  {
    title: "Renaissance Art Exhibition",
    category: "Art & Culture",
    date: "Day 1 - 10:00 AM",
    venue: "Main Auditorium",
    participants: "Open to All",
    description: "Showcase your artistic talents in our grand art exhibition featuring painting, sculpture, and digital art.",
    prize: "₹50,000"
  },
  {
    title: "Classical Music Fusion",
    category: "Music",
    date: "Day 1 - 6:00 PM",
    venue: "Amphitheater",
    participants: "Solo/Band",
    description: "Blend traditional and modern music in this unique performance competition.",
    prize: "₹40,000"
  },
  {
    title: "Tech Innovation Challenge",
    category: "Technology",
    date: "Day 2 - 9:00 AM",
    venue: "Tech Lab",
    participants: "Teams of 4",
    description: "24-hour hackathon to create innovative solutions for real-world problems.",
    prize: "₹1,00,000"
  },
  {
    title: "Drama & Theater",
    category: "Performing Arts",
    date: "Day 2 - 5:00 PM",
    venue: "Main Stage",
    participants: "Group (8-15)",
    description: "Present your interpretation of Renaissance-era stories with a modern twist.",
    prize: "₹60,000"
  },
  {
    title: "Fashion Renaissance",
    category: "Fashion",
    date: "Day 3 - 4:00 PM",
    venue: "Grand Hall",
    participants: "Solo/Duo",
    description: "Runway show featuring fusion of classical Renaissance fashion with contemporary design.",
    prize: "₹45,000"
  },
  {
    title: "Literary Symposium",
    category: "Literature",
    date: "Day 2 - 2:00 PM",
    venue: "Library Hall",
    participants: "Solo",
    description: "Poetry, storytelling, and debate competitions celebrating the written word.",
    prize: "₹30,000"
  },
  {
    title: "Dance Spectacular",
    category: "Dance",
    date: "Day 3 - 7:00 PM",
    venue: "Main Stage",
    participants: "Solo/Group",
    description: "Fusion dance competition blending classical and contemporary styles.",
    prize: "₹55,000"
  },
  {
    title: "Culinary Arts",
    category: "Food & Culture",
    date: "Day 3 - 11:00 AM",
    venue: "Dining Hall",
    participants: "Teams of 2",
    description: "Create Renaissance-inspired dishes with a modern gastronomic twist.",
    prize: "₹35,000"
  }
];

const Events = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full page background overlay */}
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm -z-10" />
      
      <div className="py-12 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Experience Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-playfair font-black text-primary mb-6 glowing-text">
              Events
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Discover the diverse competitions and performances at Vizphoria
            </p>
          </div>
        </ScrollReveal>
        
        <OrnamentalDivider />

        {/* Events Grid - Enhanced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {events.map((event, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="group relative overflow-hidden hover-lift ornate-border bg-card marble-texture border-2 border-border hover:border-secondary/50 transition-all duration-500 h-full">
                {/* Glowing gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-semibold text-secondary bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 backdrop-blur-sm">
                      {event.category}
                    </span>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-lg">{event.prize}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-3xl font-playfair font-bold group-hover:text-primary transition-colors mb-3">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-base text-muted-foreground group-hover:text-foreground transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-base text-muted-foreground group-hover:text-foreground transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{event.venue}</span>
                    </div>
                    <div className="flex items-center text-base text-muted-foreground group-hover:text-foreground transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{event.participants}</span>
                    </div>
                  </div>
                  
                  <Link to="/register">
                    <Button className="w-full bg-gradient-gold text-black hover:shadow-gold text-lg py-6 rounded-xl font-bold group-hover:scale-105 transition-transform duration-300">
                      Register for This Event
                    </Button>
                  </Link>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
