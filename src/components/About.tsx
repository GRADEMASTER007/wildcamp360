
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Shield, Heart, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in facilities, service, and outdoor experiences."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety and security are our top priorities with 24/7 support and emergency services."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate outdoor enthusiasts who love sharing the beauty of nature with others."
    },
    {
      icon: Clock,
      title: "Experience",
      description: "Over 15 years of expertise in providing unforgettable outdoor adventures and hospitality."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Gateway to 
              <span className="text-primary"> Outdoor Adventures</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              For over 15 years, WildCamp has been connecting outdoor enthusiasts with the most beautiful 
              and well-maintained camping and RV destinations across the country. We believe that everyone 
              deserves to experience the rejuvenating power of nature.
            </p>
            <p className="text-muted-foreground mb-8">
              From families seeking quality time together to solo adventurers looking for their next challenge, 
              we provide safe, clean, and memorable outdoor experiences. Our carefully selected locations offer 
              the perfect balance of natural beauty and modern amenities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Happy campers around a campfire"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Why Choose WildCamp</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
