import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      role: "Designer UX/UI",
      comment: "Meu portfólio ficou incrível! Consegui 3 propostas de trabalho na primeira semana.",
      rating: 5
    },
    {
      name: "Rafael Costa",
      role: "Desenvolvedor Full Stack",
      comment: "Profissionalismo e qualidade excepcionais. Recomendo para todos os devs!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Clientes{" "}
            <span className="text-primary">satisfeitos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos clientes falam sobre nossos portfólios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-lg text-foreground leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};