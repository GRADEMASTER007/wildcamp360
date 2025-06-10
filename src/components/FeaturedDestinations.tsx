
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, Wifi, Car } from "lucide-react";

const FeaturedDestinations = () => {
  const destinations = [
    {
      name: "Mountain View Campground",
      location: "Rocky Mountains, Colorado",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 324,
      price: "$45",
      features: ["RV Hookups", "WiFi", "Pet Friendly", "Hiking Trails"],
      type: "Premium"
    },
    {
      name: "Lakeside RV Resort",
      location: "Lake Tahoe, California",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 567,
      price: "$65",
      features: ["Lake Access", "Boat Rentals", "Swimming", "Fishing"],
      type: "Luxury"
    },
    {
      name: "Desert Oasis Camp",
      location: "Joshua Tree, California",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 198,
      price: "$35",
      features: ["Stargazing", "Rock Climbing", "Quiet Hours", "Solar Power"],
      type: "Adventure"
    },
    {
      name: "Forest Haven Retreat",
      location: "Yellowstone, Wyoming",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 445,
      price: "$55",
      features: ["Wildlife Viewing", "Guided Tours", "Campfire Rings", "Store"],
      type: "Premium"
    },
    {
      name: "Riverside Adventure Park",
      location: "Grand Canyon, Arizona",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 278,
      price: "$40",
      features: ["River Access", "Rafting", "Photography Tours", "Equipment Rental"],
      type: "Adventure"
    },
    {
      name: "Coastal Breeze Campground",
      location: "Big Sur, California",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 356,
      price: "$50",
      features: ["Ocean Views", "Beach Access", "Sunset Views", "Coastal Hiking"],
      type: "Premium"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Luxury": return "bg-yellow-500";
      case "Premium": return "bg-blue-500";
      case "Adventure": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="destinations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular camping and RV destinations, each offering unique experiences and breathtaking natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 text-white ${getTypeColor(destination.type)}`}>
                  {destination.type}
                </Badge>
                <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                  {destination.price}/night
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-3">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 font-semibold">{destination.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({destination.reviews} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.features.slice(0, 3).map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {destination.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{destination.features.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
