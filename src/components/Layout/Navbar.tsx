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
    <nav className="fixed top-4 right-4 z-50">
      <div className={`transition-transform duration-300 ${scrolled ? "scale-95" : "scale-100"}`}>
        {/* MAIN NAV CONTENT (NO BLUR BAR) */}
        <div className="flex items-center gap-3">
        {/* Logo – always clickable, small on mobile */}
        <Link to="/" className="block">
          <img
            src="/images/vizphoria-logo.png"
            alt="Vizphoria Logo"
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative group px-1 py-0.5"
            >
              <span
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive(item.path)
                    ? "text-primary"
                    : "text-foreground/80 group-hover:text-primary"
                  }`}
              >
                {item.name}
              </span>
              <span
                className={`absolute -bottom-0.5 left-0 w-full h-[1px] bg-primary transform origin-left transition-transform duration-300 ${isActive(item.path)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                  }`}
              />
            </Link>
          ))}

          {/* Atria logo – right aligned on desktop only */}
          <div className="ml-3 pl-3 border-l border-white/10">
            <img
              src="/images/AU Logo-High res-24.png"
              alt="ATRIA University Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-xl md:hidden flex items-center justify-center px-4 py-6"
          >
            {/* Centered frosted panel to separate menu from page */}
            <div className="w-[92vw] mx-1 bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-h-[96vh]">
              {/* Top row inside panel: logo + close button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/30">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img
                    src="/images/vizphoria-logo.png"
                    alt="Vizphoria Logo"
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Menu items centered inside panel */}
              <div className="py-10 px-8 flex flex-col items-center gap-6 overflow-auto max-h-[84vh]">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="w-full"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block w-full text-center text-3xl sm:text-4xl font-playfair font-semibold leading-snug transition-colors ${isActive(item.path)
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
