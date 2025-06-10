
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tent, Car, Mountain, Users, Calendar, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Tent,
      title: "Tent Camping",
      description: "Traditional camping experiences in pristine natural settings with all essential amenities.",
      features: ["Fire pits", "Picnic tables", "Restroom facilities", "Hiking trails"]
    },
    {
      icon: Car,
      title: "RV Parks",
      description: "Full-service RV sites with hookups and modern conveniences for comfortable road trips.",
      features: ["Electric hookups", "Water & sewer", "WiFi access", "Laundry facilities"]
    },
    {
      icon: Mountain,
      title: "Adventure Tours",
      description: "Guided outdoor adventures including hiking, fishing, and wildlife watching experiences.",
      features: ["Expert guides", "Equipment provided", "Small groups", "All skill levels"]
    },
    {
      icon: Users,
      title: "Group Events",
      description: "Perfect venues for family reunions, corporate retreats, and special celebrations.",
      features: ["Event planning", "Group discounts", "Catering options", "Activity coordination"]
    },
    {
      icon: Calendar,
      title: "Seasonal Programs",
      description: "Year-round activities and events designed to enhance your outdoor experience.",
      features: ["Seasonal festivals", "Educational programs", "Nature workshops", "Special events"]
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      description: "Choose from diverse landscapes across the region, each offering unique adventures.",
      features: ["Mountain settings", "Lakefront sites", "Forest locations", "Desert escapes"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From rustic tent camping to luxury RV experiences, we offer everything you need for the perfect outdoor adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
