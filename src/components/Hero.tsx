
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

const Firefly = ({ delay, duration, left, top }: { delay: number; duration: number; left: string; top: string }) => (
  <div
    className="absolute w-2 h-2 rounded-full bg-yellow-300 animate-firefly opacity-0"
    style={{
      left,
      top,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      boxShadow: '0 0 10px 4px rgba(253, 224, 71, 0.6), 0 0 20px 8px rgba(253, 224, 71, 0.3)'
    }}
  />
);

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate random fireflies - memoized to prevent regeneration on scroll
  const fireflies = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 8,
    duration: 4 + Math.random() * 4,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`
  })), []);

  // Parallax calculations
  const backgroundY = scrollY * 0.5;
  const contentY = scrollY * 0.2;
  const firefliesY = scrollY * 0.3;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-living scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            transform: `translateY(${backgroundY}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Fireflies with Parallax */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${firefliesY}px)` }}
      >
        {fireflies.map((firefly) => (
          <Firefly key={firefly.id} {...firefly} />
        ))}
      </div>

      {/* Content with Parallax */}
      <div 
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        style={{ transform: `translateY(${contentY}px)` }}
      >
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
