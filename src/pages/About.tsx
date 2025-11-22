import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-4">
            About Vizphoria
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where the spirit of the Renaissance meets modern innovation
          </p>
        </div>

        {/* Main Story */}
        <div className="mb-16 animate-fade-in-scale">
          <Card className="ornate-border shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p className="text-lg">
                  Vizphoria is more than just a college fest – it's a celebration of human creativity, 
                  innovation, and cultural renaissance. Inspired by the transformative period that brought 
                  art, science, and philosophy to new heights, we aim to create a platform where modern 
                  students can showcase their talents across diverse domains.
                </p>
                <p className="text-lg">
                  The Renaissance was a time of rebirth, exploration, and breaking boundaries. Similarly, 
                  Vizphoria encourages participants to push their creative limits, blend traditional wisdom 
                  with contemporary innovation, and create something truly extraordinary.
                </p>
                <p className="text-lg">
                  From art exhibitions that rival museum galleries to tech innovations that solve real-world 
                  problems, from theatrical performances that captivate audiences to musical fusion that 
                  transcends genres – Vizphoria is where passion meets excellence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold text-primary text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: "Excellence",
                description: "Striving for the highest standards in every event and performance"
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Passion",
                description: "Celebrating the dedication and enthusiasm of every participant"
              },
              {
                icon: <Lightbulb className="w-10 h-10" />,
                title: "Innovation",
                description: "Encouraging creative thinking and groundbreaking ideas"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Community",
                description: "Building lasting connections and fostering collaboration"
              }
            ].map((value, index) => (
              <Card
                key={index}
                className="hover-lift ornate-border animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-renaissance rounded-lg p-12 text-primary-foreground text-center animate-fade-in-scale">
          <h2 className="text-3xl font-playfair font-bold mb-12">Vizphoria by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Participants" },
              { number: "50+", label: "Events" },
              { number: "₹25L+", label: "Prize Money" },
              { number: "3", label: "Days of Fun" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
