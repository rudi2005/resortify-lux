import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "Rooms",
    href: "#rooms"
  }, {
    name: "Facilities",
    href: "#amenities"
  }, {
    name: "Culture",
    href: "#culture"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-base">
            <h2 className="font-medium text-base">
              <span className="text-saffron">শুভ</span> Homestay
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-white/90 hover:text-saffron transition-smooth font-medium">
                {item.name}
              </a>)}
            <Button className="btn-outline-indian">
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="text-white/90 hover:text-saffron transition-smooth font-medium" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
              <Button className="btn-outline-indian w-fit">
                Book Now
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;