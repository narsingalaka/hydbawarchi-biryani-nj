import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b-2 border-restaurant-gold">
      <div className="container mx-auto px-4 py-2">
        {/* Navigation */}
        <nav className="hidden lg:flex justify-center items-center gap-8 py-4">
          <a href="#" className="text-restaurant-dark hover:text-restaurant-primary font-medium uppercase tracking-wide text-sm transition-colors">
            Our Story
          </a>
          <a href="#" className="text-restaurant-dark hover:text-restaurant-primary font-medium uppercase tracking-wide text-sm transition-colors">
            Menu
          </a>
          <a href="#" className="text-restaurant-dark hover:text-restaurant-primary font-medium uppercase tracking-wide text-sm transition-colors">
            Locations
          </a>
          <a href="#" className="text-restaurant-dark hover:text-restaurant-primary font-medium uppercase tracking-wide text-sm transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Contact Info */}
        <div className="lg:hidden flex flex-col items-center gap-2 text-center py-2">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4 text-restaurant-primary" />
              <a 
                href="tel:+17323794679" 
                className="font-medium text-restaurant-dark hover:text-restaurant-primary transition-colors"
              >
                (732) 379-4679
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-restaurant-primary" />
              <a 
                href="https://maps.google.com/?q=1585+OAK+TREE+RD,+ISELIN,+NJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-restaurant-dark hover:text-restaurant-primary transition-colors"
              >
                1585 OAK TREE RD, ISELINE, NJ
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;