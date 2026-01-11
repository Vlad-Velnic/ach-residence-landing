import { 
  Waves, 
  Wifi, 
  Snowflake, 
  Car, 
  PawPrint, 
  Gamepad2, 
  ChefHat, 
  TreePine,
  Tv,
  Utensils,
  Coffee,
  Shirt
} from "lucide-react";

const amenities = [
  { icon: Waves, name: "Ciubăr / Jacuzzi", highlight: true },
  { icon: Wifi, name: "WiFi Gratuit de Mare Viteză", highlight: false },
  { icon: Snowflake, name: "Aer Condiționat", highlight: false },
  { icon: Car, name: "Parcare Gratuită", highlight: false },
  { icon: PawPrint, name: "Acceptăm Animale de Companie", highlight: false },
  { icon: Gamepad2, name: "Masă de Ping Pong", highlight: true },
  { icon: ChefHat, name: "Bucătărie Complet Echipată", highlight: false },
  { icon: TreePine, name: "Grădină Privată", highlight: false },
  { icon: Tv, name: "Smart TV", highlight: false },
  { icon: Utensils, name: "Facilități Grătar", highlight: true },
  { icon: Coffee, name: "Espressor de Cafea", highlight: false },
  { icon: Shirt, name: "Mașină de Spălat", highlight: false },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Dotări
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Tot Ce Ai <span className="text-gradient-gold">Nevoie</span>
          </h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.name}
              className={`
                flex flex-col items-center p-6 rounded-xl border transition-all duration-300 hover:scale-105
                ${amenity.highlight 
                  ? "bg-primary/10 border-primary/30 hover:border-primary" 
                  : "bg-secondary/30 border-border hover:border-primary/50"
                }
              `}
            >
              <amenity.icon 
                className={`w-8 h-8 mb-4 ${amenity.highlight ? "text-primary" : "text-muted-foreground"}`} 
              />
              <p className={`text-center text-sm font-medium ${amenity.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                {amenity.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;