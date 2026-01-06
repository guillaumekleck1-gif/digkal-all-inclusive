import { Star, Users, TrendingUp, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import stradimLogo from "@/assets/clients/stradim.png";
import sopremaLogo from "@/assets/clients/soprema.png";
import oreEauLogo from "@/assets/clients/ore-eau.png";

const stats = [
  { icon: Users, label: "Sites livrés", value: 50, prefix: "+", suffix: "" },
  { icon: TrendingUp, label: "Visibilité moyenne", value: 85, prefix: "+", suffix: "%" },
  { icon: Star, label: "Note Google", value: 4.9, prefix: "", suffix: "/5", decimals: 1 },
  { icon: Award, label: "Clients satisfaits", value: 100, prefix: "", suffix: "%" },
];

function useCountUp(end: number, duration: number = 2000, decimals: number = 0) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * end;
      
      setCount(Number(currentValue.toFixed(decimals)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration, decimals]);

  return { count, ref };
}

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const { count, ref } = useCountUp(stat.value, 2000, stat.decimals || 0);

  return (
    <div ref={ref} className="text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
        <stat.icon className="w-7 h-7 text-primary" />
      </div>
      <p className="font-display text-3xl font-bold text-foreground tabular-nums">
        {stat.prefix}{count}{stat.suffix}
      </p>
      <p className="text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container-digkal">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm mb-6">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="https://www.stradim.fr" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <img src={stradimLogo} alt="Stradim" className="h-8 object-contain" />
            </a>
            <a href="https://www.soprema.fr" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <img src={sopremaLogo} alt="Soprema" className="h-8 object-contain" />
            </a>
            <a href="https://www.ore-eau.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white rounded-lg hover:shadow-md transition-shadow">
              <img src={oreEauLogo} alt="Oré-Eau Sanitaire" className="h-20 object-contain" />
            </a>
            {["Client D", "Client E"].map((client, index) => (
              <div key={index} className="px-6 py-3 bg-muted rounded-lg opacity-60">
                <span className="font-medium text-muted-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
