import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-playfair font-bold text-gradient-gold mb-4">
              Vizphoria
            </h3>
            <p className="text-accent-foreground/80 mb-4">
              A Renaissance-themed college fest celebrating art, culture, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/events" className="text-accent-foreground/80 hover:text-secondary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/schedule" className="text-accent-foreground/80 hover:text-secondary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/about" className="text-accent-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/register" className="text-accent-foreground/80 hover:text-secondary transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-accent-foreground/80">
                <Mail size={18} />
                <span>vizphoria@college.edu</span>
              </li>
              <li className="flex items-center space-x-2 text-accent-foreground/80">
                <Phone size={18} />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center space-x-2 text-accent-foreground/80">
                <MapPin size={18} />
                <span>College Campus, City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-accent-foreground/20 text-center text-accent-foreground/60">
          <p>&copy; 2025 Vizphoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
