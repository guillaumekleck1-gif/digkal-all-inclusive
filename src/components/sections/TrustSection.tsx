import { Star, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, label: "Sites livrés", value: "+50" },
  { icon: TrendingUp, label: "Visibilité moyenne", value: "+85%" },
  { icon: Star, label: "Note Google", value: "4.9/5" },
  { icon: Award, label: "Clients satisfaits", value: "100%" },
];

export function TrustSection() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container-digkal">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Client Logos Placeholder */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm mb-6">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Client A", "Client B", "Client C", "Client D", "Client E"].map((client, index) => (
              <div key={index} className="px-6 py-3 bg-muted rounded-lg">
                <span className="font-medium text-muted-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
