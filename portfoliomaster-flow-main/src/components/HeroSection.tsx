import { Button } from "@/components/ui/button";
import { TypewriterText } from "./TypewriterText";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="space-y-8">
          {/* Nome com efeito typewriter */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              <TypewriterText text="José Luiz" delay={150} />
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium fade-in-up">
              Dev Front-End | Portfólios que Vendem
            </p>
          </div>

          {/* Frase de impacto */}
          <div className="max-w-3xl mx-auto fade-in-up">
            <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
              Seu portfólio é sua vitrine.{" "}
              <span className="text-primary-glow">
                Eu faço ele vender por você.
              </span>
            </h2>
          </div>

          {/* Botão principal */}
          <div className="pt-8 fade-in-up">
            <Button 
              size="lg" 
              className="cta-gradient text-white font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a 
                href="https://pay.kiwify.com.br/zvmI8g1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <Sparkles className="w-6 h-6" />
                Quero meu portfólio agora
                <ArrowRight className="w-6 h-6" />
              </a>
            </Button>
          </div>

          {/* Indicador de scroll suave */}
          <div className="pt-16 fade-in-up">
            <div className="animate-bounce-gentle">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto">
                <div className="w-1 h-3 bg-white/50 rounded-full mx-auto mt-2 animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};