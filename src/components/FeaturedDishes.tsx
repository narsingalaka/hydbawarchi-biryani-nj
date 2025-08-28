import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import specialBiryani from "@/assets/special-biryani.jpg";
import chicken65 from "@/assets/chicken-65.jpg";

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Special Chicken Biryani",
      description: "Our signature dish - aromatic basmati rice cooked with tender chicken pieces, traditional spices, and garnished with fried onions and fresh herbs.",
      image: specialBiryani,
      price: "From $16.99"
    },
    {
      name: "Chicken 65",
      description: "Crispy, spicy deep-fried chicken appetizer with curry leaves, green chilies, and our special blend of South Indian spices.",
      image: chicken65,
      price: "From $12.99"
    }
  ];

  return (
    <section className="py-16 bg-restaurant-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-restaurant-dark mb-4">
            Our Popular Dishes
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the authentic flavors of Hyderabad with our carefully crafted specialties
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {dishes.map((dish, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-restaurant-dark">{dish.name}</h4>
                  <span className="text-lg font-semibold text-restaurant-primary">{dish.price}</span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{dish.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  <a 
                    href="https://www.ubereats.com/store/hyderabad-bawarchi-biryani/aNC3vvSJR4aVZf5nt21RXg?srsltid=AfmBOooXPeVARGt1di8NlL7uEOr4cqT60X3AYBByqRHVmdDD2OR9CVvC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 text-gray-800 px-3 py-2 rounded font-medium text-sm hover:bg-gray-200 transition-colors text-center border border-gray-300"
                  >
                    UberEats
                  </a>
                  <a 
                    href="https://www.doordash.com/store/hyd-bawarchi-biryani-woodbridge-township-1250843/1819486/?srsltid=AfmBOopvN_M7MnsfNuP56d1gikQDxSZrlzzMccPBxvrmWYwRpRFwpMNL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-50 text-red-700 px-3 py-2 rounded font-medium text-sm hover:bg-red-100 transition-colors text-center border border-red-200"
                  >
                    DoorDash
                  </a>
                  <a 
                    href="https://www.grubhub.com/restaurant/hyd-bawarchi-biryani-1585-oak-tree-rd-iselin/2397796" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-orange-50 text-orange-700 px-3 py-2 rounded font-medium text-sm hover:bg-orange-100 transition-colors text-center border border-orange-200"
                  >
                    GrubHub
                  </a>
                  <a 
                    href="https://order.online/store/hyd-bawarchi-biryani-woodbridge-township-1250843/?hideModal=true&pickup=true&redirected=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-restaurant-primary-light text-restaurant-primary px-3 py-2 rounded font-medium text-sm hover:bg-restaurant-primary/20 transition-colors text-center border border-restaurant-primary/30"
                  >
                    Order Online
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;