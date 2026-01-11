import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* CTA Section */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ești gata să creezi</span>
            <br />
            <span className="text-gradient-gold">Amintiri de Neuitat?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Rezervă-ți șederea la ACH Residence și experimentează luxul, confortul 
            și cadrul perfect pentru următoarea ta celebrare.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-gold-light text-primary-foreground px-12 py-7 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 group"
            asChild
          >
            <a href="https://www.booking.com/hotel/ro/vila-cu-ciubar.ro.html" target="_blank" rel="noopener noreferrer">
              Rezervă Acum
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p>
            © {currentYear} <span className="text-gradient-gold font-semibold">ACH Residence</span>. Toate drepturile rezervate.
          </p>
          <p>
            Strada Narciselor 2, Răcăciuni, România
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;