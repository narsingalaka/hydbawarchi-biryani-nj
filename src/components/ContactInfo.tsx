import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Utensils } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-restaurant-purple-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-restaurant-dark mb-4">
            Visit Us Today
          </h3>
          <p className="text-lg text-muted-foreground">
            Experience authentic Hyderabadi flavors in the heart of New Jersey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-restaurant-dark mb-2">Call Us</h4>
              <p className="text-muted-foreground text-sm mb-3">Ready to take your order</p>
              <p className="font-bold text-restaurant-purple">732 379 4679</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-restaurant-dark" />
              </div>
              <h4 className="font-semibold text-restaurant-dark mb-2">Location</h4>
              <p className="text-muted-foreground text-sm mb-3">Easy to find on Oak Tree Road</p>
              <p className="font-bold text-restaurant-purple text-sm">1585 OAK TREE RD<br />ISELINE, NJ</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-restaurant-dark mb-2">Hours</h4>
              <p className="text-muted-foreground text-sm mb-3">Open 7 days a week</p>
              <p className="font-bold text-restaurant-purple text-sm">11:00 AM - 10:00 PM</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-6 w-6 text-restaurant-dark" />
              </div>
              <h4 className="font-semibold text-restaurant-dark mb-2">Services</h4>
              <p className="text-muted-foreground text-sm mb-3">Multiple ordering options</p>
              <p className="font-bold text-restaurant-purple text-sm">Pickup & Delivery</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-restaurant-purple/90 text-lg px-12 py-4 shadow-elegant"
          >
            Order Online Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;