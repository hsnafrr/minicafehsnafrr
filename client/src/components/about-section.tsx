export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative py-20 overflow-hidden"
      data-testid="about-section"
    >
      {/* Paris skyline background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://pixabay.com/get/gb45480ef76185d5b0df5a1fc6cb43ab5d27496f90c123ee125b6a72a94b4d3ba0f33600ed09ce78959f3bd2666675d6141e835d3bf960fe168e292c93e9b00ed_1280.jpg')" 
        }}
      >
        <div className="absolute inset-0 bg-navy bg-opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="font-dancing text-4xl md:text-5xl text-gold mb-8"
          data-testid="about-subtitle"
        >
          Notre Histoire
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 
            className="font-playfair text-3xl md:text-4xl font-bold text-white mb-8 leading-tight"
            data-testid="about-title"
          >
            L'Esprit de Gusteau Vit Ici
          </h2>
          
          <div className="space-y-6 font-lora text-lg text-gray-100 leading-relaxed">
            <p data-testid="about-paragraph-1">
              Dans les ruelles pavées de Montmartre, notre petit café perpétue l'héritage 
              du grand chef Gusteau. Chaque matin, nous ouvrons nos portes avec la conviction 
              que <strong className="text-gold">"Anyone can cook, anyone can brew"</strong>.
            </p>
            
            <p data-testid="about-paragraph-2">
              Inspirés par la magie de Remy et l'excellence de Gusteau, nous créons des expériences 
              gustatives qui transcendent les attentes. Chaque tasse de café, chaque bouchée 
              raconte l'histoire de notre passion pour l'art culinaire français.
            </p>
            
            <p data-testid="about-paragraph-3">
              Notre mission est simple : transformer chaque visite en un moment magique, 
              où les saveurs authentiques rencontrent l'innovation créative, dans l'esprit 
              chaleureux d'un vrai café parisien.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-center" data-testid="stat-year">
              <div className="font-playfair text-3xl font-bold text-gold">2018</div>
              <div className="font-lora text-white">Année d'ouverture</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gold opacity-50"></div>
            <div className="text-center" data-testid="stat-clients">
              <div className="font-playfair text-3xl font-bold text-gold">5000+</div>
              <div className="font-lora text-white">Clients satisfaits</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gold opacity-50"></div>
            <div className="text-center" data-testid="stat-local">
              <div className="font-playfair text-3xl font-bold text-gold">100%</div>
              <div className="font-lora text-white">Ingrédients locaux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
