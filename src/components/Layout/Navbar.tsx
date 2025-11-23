import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Schedule", path: "/schedule" },
    { name: "Gallery", path: "/gallery" },
    { name: "Register", path: "/register" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass-panel py-2" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group relative z-50">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-playfair font-bold text-foreground tracking-wider group-hover:text-primary transition-colors duration-300">
                VIZPHORIA
              </span>
              <span className="text-[0.6rem] text-primary tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 -mt-1">
                Renaissance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group px-2 py-1"
              >
                <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive(item.path) ? "text-primary" : "text-foreground/80 group-hover:text-primary"
                  }`}>
                  {item.name}
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-primary transform origin-left transition-transform duration-300 ${isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
              </Link>
            ))}

            <div className="ml-4 pl-6 border-l border-white/10 flex flex-col items-start">
              <span className="text-[0.6rem] font-medium text-foreground/60 tracking-widest">ATRIA</span>
              <span className="text-[0.6rem] font-bold text-primary tracking-widest">UNIVERSITY</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8 p-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-playfair font-bold transition-colors ${isActive(item.path) ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
