import { Coffee, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToMenu = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* French kitchen background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" 
        }}
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          data-testid="hero-title"
        >
          Anyone Can Brew
        </h1>
        <div 
          className="font-dancing text-3xl md:text-4xl lg:text-5xl text-gold mb-8"
          data-testid="hero-subtitle"
        >
          Bienvenue à Remy's Café
        </div>
        <p 
          className="font-lora text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
          data-testid="hero-description"
        >
          Dans cette petite cuisine parisienne, chaque tasse raconte une histoire. 
          Découvrez des saveurs qui réveilleront vos sens.
        </p>
        <Button 
          onClick={scrollToMenu}
          className="gold-button px-10 py-4 rounded-full font-lora text-lg font-semibold text-navy shadow-lg hover:shadow-xl"
          data-testid="hero-cta-button"
        >
          <Coffee className="mr-3" size={20} />
          Découvrir Nos Créations
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} className="opacity-70" />
      </div>
    </section>
  );
}
