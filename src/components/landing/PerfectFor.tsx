import { PartyPopper, Heart, Users, Home, Plane } from "lucide-react";

const occasions = [
  {
    icon: PartyPopper,
    title: "Petreceri de Aniversare",
    description: "Sărbătorește cu stil într-un spațiu generos pentru până la 20 de invitați"
  },
  {
    icon: Heart,
    title: "Aniversări și Evenimente",
    description: "Creează amintiri de neuitat într-un cadru intim și rafinat"
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Locația perfectă pentru retrageri corporate și consolidarea echipei"
  },
  {
    icon: Home,
    title: "Reuniuni de Familie",
    description: "Adu întreaga familie împreună sub același acoperiș"
  },
  {
    icon: Plane,
    title: "Escapade de Weekend",
    description: "Evadează din cotidian pentru o retragere de lux"
  },
];

const PerfectFor = () => {
  return (
    <section id="perfect-for" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Ocazii
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Locul <span className="text-gradient-gold">Ideal Pentru</span>
          </h2>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occasion, index) => (
            <div
              key={occasion.title}
              className={`
                group relative p-8 rounded-2xl border border-border bg-card 
                hover:border-primary/50 transition-all duration-300
                ${index === 4 ? "lg:col-start-2" : ""}
              `}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
              
              <occasion.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                {occasion.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {occasion.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfectFor;