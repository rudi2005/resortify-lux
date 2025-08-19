import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Dining", href: "#dining" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
      <nav className="container-luxury flex items-center justify-between py-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-light text-white tracking-wide">
            Serene <span className="text-luxury-gold">Shores</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-luxury-gold transition-smooth font-medium tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-luxury md:hidden">
            <div className="container-luxury py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-luxury-gold transition-smooth font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="btn-luxury mt-4 w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;