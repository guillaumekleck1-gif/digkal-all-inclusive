import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien de temps pour mettre en ligne mon site ?",
    answer: "En moyenne, votre site est en ligne en 2 à 4 semaines selon la complexité. Nous travaillons par étapes validées ensemble pour garantir un résultat qui vous correspond.",
  },
  {
    question: "Est-ce que vous gérez la page Google Business ?",
    answer: "Oui, avec nos formules Growth et Performance, nous optimisons votre fiche Google Business Profile : photos, informations, posts réguliers, gestion des avis et FAQ. C'est essentiel pour votre visibilité locale.",
  },
  {
    question: "Est-ce que je peux modifier mon site ensuite ?",
    answer: "Absolument ! Nous vous formons à l'utilisation de votre site et vous pouvez modifier les textes et images facilement. Pour les modifications plus complexes, nous restons disponibles.",
  },
  {
    question: "Comment fonctionne le SEO ?",
    answer: "Le SEO (référencement naturel) consiste à optimiser votre site pour qu'il apparaisse en haut des résultats Google. Nous travaillons sur la technique, le contenu et la popularité de votre site de manière continue.",
  },
  {
    question: "Y a-t-il un engagement sur la durée ?",
    answer: "Pour la création du site, pas d'engagement après livraison. Pour l'accompagnement SEO mensuel, nous recommandons un engagement de 6 mois minimum pour voir des résultats significatifs, mais nous restons flexibles.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-digkal max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tout ce que vous devez savoir avant de démarrer.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl border border-border px-6 shadow-card"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
