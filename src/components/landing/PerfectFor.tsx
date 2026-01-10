import { PartyPopper, Heart, Users, Home, Plane } from "lucide-react";

const occasions = [
  {
    icon: PartyPopper,
    title: "Birthday Parties",
    description: "Celebrate in style with space for up to 20 guests"
  },
  {
    icon: Heart,
    title: "Anniversary Events",
    description: "Create unforgettable memories in an intimate setting"
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Perfect venue for corporate retreats and team bonding"
  },
  {
    icon: Home,
    title: "Family Reunions",
    description: "Bring the whole family together under one roof"
  },
  {
    icon: Plane,
    title: "Weekend Getaways",
    description: "Escape the ordinary for a luxurious retreat"
  },
];

const PerfectFor = () => {
  return (
    <section id="perfect-for" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Occasions
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Perfect <span className="text-gradient-gold">For</span>
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
