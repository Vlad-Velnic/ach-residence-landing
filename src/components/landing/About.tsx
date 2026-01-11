import { Star, Users, BedDouble, Bath, Ruler } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "20", label: "Oaspeți" },
    { icon: BedDouble, value: "4", label: "Dormitoare" },
    { icon: Bath, value: "4", label: "Băi" },
    { icon: Ruler, value: "250m²", label: "Spațiu Locuibil" },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Rating Badge */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-primary font-semibold text-lg">10/10</span>
            <span className="text-muted-foreground">Rating Excepțional</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Trai de Lux</span>
            <br />
            <span className="text-foreground">în Răcăciuni</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            ACH Residence este o vilă modernă uluitoare situată în inima României, 
            concepută pentru celebrări de neuitat. Fie că plănuiești o petrecere de zi de naștere, 
            o aniversare, un eveniment de team building sau pur și simplu o escapadă luxoasă cu 
            prietenii și familia, vila noastră oferă cadrul perfect.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="text-center p-8 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;