import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-digkal-dark text-primary-foreground">
      <div className="container-digkal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Prêt à développer votre visibilité ?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet en 15 minutes. Sans engagement, sans jargon technique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-digkal-dark" asChild>
              <a href="tel:0678015732">
                <Phone className="w-5 h-5" />
                06 78 01 57 32
              </a>
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/60 text-sm">
            Réponse garantie en 24h • Devis gratuit • Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
}
