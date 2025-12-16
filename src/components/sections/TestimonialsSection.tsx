import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dupont",
    company: "Menuiserie Dupont",
    text: "Digkal a transformé notre présence en ligne. En 3 mois, nous avons doublé nos demandes de devis. L'équipe est réactive et professionnelle.",
    rating: 5,
    result: "+120% de demandes",
  },
  {
    name: "Pierre Martin",
    company: "Restaurant Le Gourmet",
    text: "Notre page Google Business est enfin optimisée et notre site attire des clients tous les jours. Je recommande sans hésiter.",
    rating: 5,
    result: "+85% de réservations",
  },
  {
    name: "Sophie Bernard",
    company: "Immo Paris 15",
    text: "Le meilleur investissement pour notre agence. Le site est magnifique et nous apparaissons désormais en première page Google.",
    rating: 5,
    result: "+200% de leads qualifiés",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-digkal">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ce qu'en disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Des résultats concrets, des clients satisfaits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 border border-border shadow-card"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Result badge */}
              <div className="inline-block bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
