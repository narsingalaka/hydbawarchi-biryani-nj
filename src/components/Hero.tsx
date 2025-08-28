import biryanihero from "@/assets/biryani-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${biryanihero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/9d15425f-023d-42e9-aa11-e54d44260fe0.png" 
            alt="HydBawarchiBiryani Logo" 
            className="h-32 lg:h-40 w-auto mx-auto mb-4"
          />
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">
            HydBawarchiBiryani
          </h1>
          <p className="text-white/90 text-lg lg:text-xl">Authentic Hyderabadi Cuisine</p>
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex justify-center items-center gap-12 mb-8 text-white">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide text-white/80 mb-1">Call Us</p>
            <a 
              href="tel:+17323794679" 
            className="text-xl font-bold text-white hover:text-restaurant-gold transition-colors"
            >
              (732) 379-4679
            </a>
          </div>
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide text-white/80 mb-1">Visit Us</p>
            <p className="text-xl font-bold">1585 OAK TREE RD, ISELINE, NJ</p>
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-4xl font-script text-restaurant-gold italic">
            The Food You Love, The Tradition We Follow!
          </h2>
        </div>

        {/* Online Ordering Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <a 
            href="https://www.ubereats.com/store/hyderabad-bawarchi-biryani/aNC3vvSJR4aVZf5nt21RXg?srsltid=AfmBOooXPeVARGt1di8NlL7uEOr4cqT60X3AYBByqRHVmdDD2OR9CVvC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-black/80 transition-colors flex items-center gap-2 justify-center"
          >
            <span className="text-xl">🍽️</span>
            UberEats
          </a>
          <a 
            href="https://www.doordash.com/store/hyd-bawarchi-biryani-woodbridge-township-1250843/1819486/?srsltid=AfmBOopvN_M7MnsfNuP56d1gikQDxSZrlzzMccPBxvrmWYwRpRFwpMNL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors flex items-center gap-2 justify-center"
          >
            <span className="text-xl">🚗</span>
            DoorDash
          </a>
          <a 
            href="https://www.grubhub.com/restaurant/hyd-bawarchi-biryani-1585-oak-tree-rd-iselin/2397796" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors flex items-center gap-2 justify-center"
          >
            <span className="text-xl">🥡</span>
            GrubHub
          </a>
          <a 
            href="https://order.online/store/hyd-bawarchi-biryani-woodbridge-township-1250843/?hideModal=true&pickup=true&redirected=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-restaurant-primary text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-restaurant-primary/90 transition-colors flex items-center gap-2 justify-center"
          >
            <span className="text-xl">📱</span>
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;