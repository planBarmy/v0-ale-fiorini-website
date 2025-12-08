import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Cristina, 52 anos",
      location: "São Paulo, SP",
      text: "As receitas do Menopausa no Shape são deliciosas e práticas! Em 30 dias já perdi 4kg e minha energia voltou. Finalmente um cardápio que funciona!",
      rating: 5,
      avatar: "/brazilian-woman-52-years-short-brown-hair-smiling-.jpg",
    },
    {
      name: "Sandra, 48 anos",
      location: "Rio de Janeiro, RJ",
      text: "O Equilibbra mudou minha vida! Aprendi a montar minha própria dieta e entendi meu metabolismo. Nunca mais vou fazer dieta da moda.",
      rating: 5,
      avatar: "/brazilian-woman-48-years-curly-black-hair-smiling-.jpg",
    },
    {
      name: "Márcia, 55 anos",
      location: "Belo Horizonte, MG",
      text: "A Ale entende na pele o que passamos. As 89 receitas proteicas são incríveis e a pochete está sumindo! Me sinto com 40 anos.",
      rating: 5,
      avatar: "/brazilian-woman-55-years-blonde-hair-smiling-portr.jpg",
    },
    {
      name: "Vera, 51 anos",
      location: "Curitiba, PR",
      text: "Corpo mais firme, menos celulite e muita disposição. O ebook é completo e o cardápio de 4 semanas facilita demais a rotina!",
      rating: 5,
      avatar: "/brazilian-woman-51-years-dark-hair-smiling-portrai.jpg",
    },
  ]

  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Resultados Reais</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mt-4 mb-6 text-balance">
            Mulheres 40+ que transformaram seus corpos
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de quem seguiu o método e conquistou resultados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-6 flex flex-col">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-6">"{testimonial.text}"</p>

              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm text-card-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
