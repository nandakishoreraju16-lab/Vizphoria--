import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      role: "Event Coordinator",
      name: "Priya Sharma",
      phone: "+91 98765 43210",
      email: "priya.sharma@vizphoria.com"
    },
    {
      role: "Sponsorship Head",
      name: "Rahul Verma",
      phone: "+91 98765 43211",
      email: "rahul.verma@vizphoria.com"
    },
    {
      role: "Technical Head",
      name: "Anjali Patel",
      phone: "+91 98765 43212",
      email: "anjali.patel@vizphoria.com"
    },
    {
      role: "Public Relations",
      name: "Karan Singh",
      phone: "+91 98765 43213",
      email: "karan.singh@vizphoria.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you make the most of Vizphoria
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* General Info */}
          <Card className="ornate-border shadow-elegant hover-lift animate-fade-in-scale">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">General Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:info@vizphoria.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@vizphoria.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 12345 67890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">
                    College Campus<br />
                    City, State - 123456<br />
                    India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="ornate-border shadow-elegant hover-lift animate-fade-in-scale" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Follow us on social media for the latest updates, behind-the-scenes content, and exciting announcements
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Contacts */}
        <div className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-primary text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="ornate-border shadow-elegant hover-lift animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-renaissance mx-auto mb-4 flex items-center justify-center text-2xl font-playfair font-bold text-primary-foreground">
                    {contact.name.charAt(0)}
                  </div>
                  <h3 className="font-playfair font-semibold text-lg text-foreground mb-1">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-secondary mb-3">{contact.role}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <a href={`tel:${contact.phone}`} className="block hover:text-primary transition-colors">
                      {contact.phone}
                    </a>
                    <a href={`mailto:${contact.email}`} className="block hover:text-primary transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <Card className="ornate-border shadow-elegant animate-fade-in-scale">
          <CardContent className="p-0">
            <div className="w-full h-96 bg-gradient-to-br from-muted to-accent/20 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-playfair text-foreground">Campus Location Map</p>
                <p className="text-muted-foreground mt-2">Coming Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
