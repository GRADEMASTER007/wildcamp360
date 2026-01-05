
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-living scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Discover Your Next
          <span className="block text-yellow-400">Adventure</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Experience the ultimate camping and RV adventures in breathtaking locations. 
          From mountain peaks to serene lakeshores, create memories that last a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
            onClick={() => scrollToSection('destinations')}
          >
            Explore Destinations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
            onClick={() => scrollToSection('services')}
          >
            <Play className="mr-2 h-5 w-5" />
            Our Services
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400">500+</div>
            <div className="text-sm md:text-base opacity-80">Camping Sites</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400">50k+</div>
            <div className="text-sm md:text-base opacity-80">Happy Campers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400">15+</div>
            <div className="text-sm md:text-base opacity-80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
