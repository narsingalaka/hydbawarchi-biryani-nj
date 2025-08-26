import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import biryanihero from "@/assets/biryani-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${biryanihero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-restaurant-purple/90 to-restaurant-purple/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <Card className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 shadow-card">
            <h2 className="text-4xl lg:text-6xl font-bold text-restaurant-dark mb-6">
              Authentic Hyderabadi
              <span className="text-restaurant-purple block">Biryani Experience</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Hyd Bawarchi Biryani is an Indian restaurant located at 1585 Oak Tree Road, Iselin, NJ 08830, 
              specializing in authentic Hyderabadi cuisine, particularly biryanis. We are known for our 
              popular dishes like Special Chicken Biryani and Chicken 65.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-restaurant-purple/90 text-lg px-8 py-4 shadow-elegant"
              >
                Order Online
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-restaurant-purple text-restaurant-purple hover:bg-restaurant-purple hover:text-white text-lg px-8 py-4"
              >
                View Menu
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;