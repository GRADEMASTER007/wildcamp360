
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, Calendar, Tent, Car, Mountain } from "lucide-react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <FeaturedDestinations />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
