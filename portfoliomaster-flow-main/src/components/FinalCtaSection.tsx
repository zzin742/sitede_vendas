import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

export const FinalCtaSection = () => {
  return (
    <section className="hero-gradient py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Comece agora e{" "}
              <span className="text-primary-glow">
                impressione seus clientes
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Não perca mais oportunidades por ter um portfólio comum. 
              Destaque-se da concorrência hoje mesmo!
            </p>
          </div>

          <div className="pt-8">
            <Button 
              size="lg" 
              className="cta-gradient text-white font-bold text-2xl px-16 py-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a 
                href="https://pay.kiwify.com.br/zvmI8g1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4"
              >
                <Rocket className="w-8 h-8" />
                Contratar Agora
                <ArrowRight className="w-8 h-8" />
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-white/70 text-lg">
              ⚡ Entrega rápida • 🛡️ Garantia total • 🎨 Design exclusivo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};