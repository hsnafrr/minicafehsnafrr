import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  badge: string;
}

const menuItems: MenuItem[] = [
  {
    id: "cafe-au-lait",
    name: "Café au Lait",
    price: "$4.50",
    description: "Un espresso parfaitement équilibré avec du lait vapeur onctueux, selon la tradition parisienne.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    badge: "Signature"
  },
  {
    id: "ratatouille-tartine",
    name: "Ratatouille Tartine",
    price: "$6.00",
    description: "Pain de campagne grillé garni de notre ratatouille maison, un hommage au chef Gusteau.",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    badge: "Spécialité"
  },
  {
    id: "creme-brulee-latte",
    name: "Crème Brûlée Latte",
    price: "$5.50",
    description: "Latte crémeux surmonté de sucre caramélisé au chalumeau, une expérience dessert unique.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    badge: "Création"
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-background" data-testid="menu-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="font-dancing text-4xl md:text-5xl text-wine mb-4"
            data-testid="menu-header-subtitle"
          >
            Notre Menu
          </div>
          <h2 
            className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6"
            data-testid="menu-header-title"
          >
            Créations Artisanales
          </h2>
          <p 
            className="font-lora text-lg text-coffee max-w-2xl mx-auto"
            data-testid="menu-header-description"
          >
            Chaque création est préparée avec passion, inspirée par les traditions françaises 
            et l'esprit créatif de nos maîtres cuisiniers.
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="menu-card rounded-2xl overflow-hidden shadow-lg"
              data-testid={`menu-item-${item.id}`}
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
                data-testid={`menu-item-image-${item.id}`}
              ></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 
                    className="font-playfair text-2xl font-bold text-navy"
                    data-testid={`menu-item-name-${item.id}`}
                  >
                    {item.name}
                  </h3>
                  <span 
                    className="font-playfair text-2xl font-bold text-wine"
                    data-testid={`menu-item-price-${item.id}`}
                  >
                    {item.price}
                  </span>
                </div>
                <p 
                  className="font-lora text-coffee leading-relaxed mb-6"
                  data-testid={`menu-item-description-${item.id}`}
                >
                  {item.description}
                </p>
                <div className="flex items-center text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current mr-1" />
                  ))}
                  <span 
                    className="font-lora text-sm text-coffee ml-2"
                    data-testid={`menu-item-badge-${item.id}`}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p 
            className="font-dancing text-2xl text-wine mb-6"
            data-testid="menu-quote"
          >
            "La seule chose prévisible à propos de la nourriture est qu'elle est imprévisible"
          </p>
          <Button 
            className="gold-button px-8 py-3 rounded-full font-lora text-lg font-semibold text-navy shadow-lg"
            data-testid="menu-cta-button"
          >
            Voir Toute La Carte
          </Button>
        </div>
      </div>
    </section>
  );
}
