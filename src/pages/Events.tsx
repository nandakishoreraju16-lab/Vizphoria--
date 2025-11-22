import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-4">
            Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the diverse competitions and performances at Vizphoria
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="hover-lift ornate-border animate-fade-in-scale bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    Prize: {event.prize}
                  </span>
                </div>
                <CardTitle className="text-2xl font-playfair">{event.title}</CardTitle>
                <CardDescription className="text-base">{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {event.venue}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {event.participants}
                  </div>
                </div>
                <Link to="/register">
                  <Button className="w-full bg-gradient-gold text-accent hover:shadow-gold">
                    Register for This Event
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
