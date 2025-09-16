import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-sm" : "bg-navy"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span 
              className="font-playfair text-2xl font-bold text-gold cursor-pointer"
              onClick={() => scrollToSection("home")}
              data-testid="logo"
            >
              Remy's Café
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")} 
                className="hover:text-gold transition-colors duration-300 font-lora text-white"
                data-testid="nav-home"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection("menu")} 
                className="hover:text-gold transition-colors duration-300 font-lora text-white"
                data-testid="nav-menu"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="hover:text-gold transition-colors duration-300 font-lora text-white"
                data-testid="nav-about"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="hover:text-gold transition-colors duration-300 font-lora text-white"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gold transition-colors duration-300"
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("home")} 
                className="block hover:text-gold transition-colors duration-300 py-2 font-lora text-white w-full text-left"
                data-testid="mobile-nav-home"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection("menu")} 
                className="block hover:text-gold transition-colors duration-300 py-2 font-lora text-white w-full text-left"
                data-testid="mobile-nav-menu"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="block hover:text-gold transition-colors duration-300 py-2 font-lora text-white w-full text-left"
                data-testid="mobile-nav-about"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="block hover:text-gold transition-colors duration-300 py-2 font-lora text-white w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
