import { MapPin, Plane, Clock } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Location
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Find <span className="text-gradient-gold">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.8745789430996!2d26.780!3d46.429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b5a5c3d0e9e5e5%3A0x0!2sStrada%20Narciselor%202%2C%20R%C4%83c%C4%83ciuni!5e0!3m2!1sen!2sro!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ACH Residence Location"
            />
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 border border-border">
              <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Address
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strada Narciselor 2<br />
                  Răcăciuni, Bacău County<br />
                  Romania
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 border border-border">
              <Plane className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Nearest Airport
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  George Enescu International Airport (BCM)<br />
                  <span className="text-primary">11 miles</span> from the property
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 border border-border">
              <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Distance to City
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary">20 km</span> from Bacău city center<br />
                  Peaceful countryside setting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
