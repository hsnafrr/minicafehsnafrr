import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-navy text-white py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 
              className="font-playfair text-3xl font-bold text-gold mb-4"
              data-testid="footer-brand"
            >
              Remy's Café
            </h3>
            <p 
              className="font-lora text-gray-300 leading-relaxed mb-6"
              data-testid="footer-description"
            >
              Un petit café parisien où la magie culinaire de Gusteau 
              rencontre la passion de Remy pour créer des expériences inoubliables.
            </p>
            <div 
              className="font-dancing text-xl text-gold"
              data-testid="footer-tagline"
            >
              "Anyone Can Cook, Anyone Can Brew"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="font-playfair text-xl font-semibold text-gold mb-4"
              data-testid="footer-links-title"
            >
              Liens Rapides
            </h4>
            <ul className="space-y-2 font-lora">
              <li>
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                  data-testid="footer-link-home"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("menu")} 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                  data-testid="footer-link-menu"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                  data-testid="footer-link-about"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
              <li>
                <a 
                  href="#careers" 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                  data-testid="footer-link-careers"
                >
                  Carrières
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="font-playfair text-xl font-semibold text-gold mb-4"
              data-testid="footer-contact-title"
            >
              Contact
            </h4>
            <div className="space-y-3 font-lora text-gray-300">
              <div className="flex items-center" data-testid="footer-address">
                <MapPin className="text-gold mr-3" size={16} />
                <span>Montmartre, Paris</span>
              </div>
              <div className="flex items-center" data-testid="footer-phone">
                <Phone className="text-gold mr-3" size={16} />
                <span>+33 1 42 52 46 79</span>
              </div>
              <div className="flex items-center" data-testid="footer-email">
                <Mail className="text-gold mr-3" size={16} />
                <span>bonjour@remyscafe.fr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a 
                href="#" 
                className="text-gray-300 hover:text-gold transition-colors duration-300"
                data-testid="footer-social-instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-gold transition-colors duration-300"
                data-testid="footer-social-facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-gold transition-colors duration-300"
                data-testid="footer-social-twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p 
              className="font-lora text-gray-400 text-sm"
              data-testid="footer-copyright"
            >
              © 2024 Remy's Café. Tous droits réservés. Fait avec ❤️ à Paris.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
