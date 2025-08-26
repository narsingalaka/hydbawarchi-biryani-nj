import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground shadow-elegant">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo and Restaurant Name */}
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/9d15425f-023d-42e9-aa11-e54d44260fe0.png" 
              alt="HydBawarchiBiryani Logo" 
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">HydBawarchiBiryani</h1>
              <p className="text-primary-foreground/80 text-sm">Authentic Hyderabadi Cuisine</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium">732 379 4679</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">1585 OAK TREE RD, ISELINE, NJ</span>
            </div>
            <Button variant="secondary" size="lg" className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-dark font-semibold">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;