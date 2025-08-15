import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Clock, Shield, ArrowRight } from "lucide-react";

export const SalesSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Design moderno e exclusivo",
      description: "Portfólios únicos que destacam seu profissionalismo"
    },
    {
      icon: Clock,
      title: "Entrega rápida com suporte total",
      description: "Desenvolvimento ágil com acompanhamento completo"
    },
    {
      icon: Shield,
      title: "Garantia de satisfação ou devolução",
      description: "Sua tranquilidade é nossa prioridade"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher nossos{" "}
            <span className="text-primary">portfólios?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformamos sua experiência em uma apresentação irresistível
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="cta-gradient text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:scale-105"
            asChild
          >
            <a 
              href="https://pay.kiwify.com.br/zvmI8g1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              Contratar Agora
              <ArrowRight className="w-6 h-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};