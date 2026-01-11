import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          Experiență Premium la Vilă
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-gradient-gold">ACH</span>{" "}
          <span className="text-foreground">Residence</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Unde Evenimentele Întâlnesc Luxul
        </p>
        <p className="text-lg text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          Capacitate de până la <span className="text-primary font-semibold">20 de oaspeți</span> • 4 Dormitoare • Ciubăr
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-gold-light text-primary-foreground px-10 py-6 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#gallery">
              Explorează Vila
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;