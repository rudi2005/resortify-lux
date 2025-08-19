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
    name: "Amenities",
    href: "#amenities"
  }, {
    name: "Dining",
    href: "#dining"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
      
    </header>;
};
export default Header;