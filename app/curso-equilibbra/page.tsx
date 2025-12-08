import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield, Users, MessageCircle, Star, ArrowLeft, Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CursoPage() {
  const modules = [
    {
      title: "Módulo 1: Entendendo seu Metabolismo",
      items: [
        "Como a menopausa afeta seu corpo",
        "Identificando seu tipo metabólico",
        "Por que as dietas tradicionais não funcionam",
      ],
    },
    {
      title: "Módulo 2: Montando sua Dieta Personalizada",
      items: [
        "Calculando suas necessidades nutricionais",
        "Escolhendo os alimentos certos",
        "Montando seu cardápio semanal",
      ],
    },
    {
      title: "Módulo 3: Estratégias de Emagrecimento",
      items: [
        "Protocolo de perda de peso sustentável",
        "Controle da fome e compulsão",
        "Acelerando o metabolismo naturalmente",
      ],
    },
    {
      title: "Módulo 4: Treino e Suplementação",
      items: ["Exercícios ideais para 40+", "Suplementos que realmente funcionam", "Recuperação e descanso"],
    },
  ]

  const bonuses = [
    "Ebook Menopausa no Shape (R$ 47)",
    "Grupo exclusivo no WhatsApp",
    "Aulas ao vivo semanais",
    "Suporte direto com a Ale",
  ]

  const testimonials = [
    {
      name: "Regina, 49 anos",
      text: "O Equilibbra me ensinou a comer certo pro meu corpo. Perdi 8kg em 2 meses sem passar fome!",
      avatar: "/brazilian-woman-49-years-professional-portrait-hea.jpg",
    },
    {
      name: "Lúcia, 54 anos",
      text: "Finalmente entendi meu metabolismo. A dieta personalizada fez toda diferença!",
      avatar: "/brazilian-woman-54-years-elegant-portrait-headshot.jpg",
    },
    {
      name: "Tereza, 51 anos",
      text: "O suporte da Ale é incrível. Me sinto acompanhada em cada passo da jornada.",
      avatar: "/brazilian-woman-51-years-friendly-portrait-headsho.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Voltar</span>
            </Link>
            <Link href="/" className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              Ale Fiorini
            </Link>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge className="bg-primary text-primary-foreground">Curso + Mentoria</Badge>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance">
              Curso Equilibbra
            </h1>

            <p className="text-xl text-muted-foreground">
              Monte sua própria dieta 100% personalizada para seu metabolismo único. Aprenda a emagrecer de verdade, sem
              dieta da moda.
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground">Avaliado por alunas transformadas</span>
            </div>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6"
              >
                <a href="https://pay.hotmart.com/seu-link-curso" target="_blank" rel="noopener noreferrer">
                  Quero Me Inscrever
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Image Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden bg-muted relative group cursor-pointer">
            <img src="/ale-hero.jpeg" alt="Ale Fiorini - Curso Equilibbra" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-4">Assista a apresentação do curso</p>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-16 bg-secondary/50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-center mb-12">O que você vai aprender</h2>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-serif text-xl font-medium text-card-foreground mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-center mb-4">Bônus Exclusivos</h2>
          <p className="text-center text-muted-foreground mb-12">Ao se inscrever no Equilibbra, você também recebe:</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-center gap-4 bg-primary/5 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{bonus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-secondary/50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-center mb-12">O que as alunas dizem</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-card-foreground">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto bg-foreground rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl font-medium text-background mb-4">Pronta para transformar seu corpo?</h2>
          <p className="text-background/80 mb-6">Vagas limitadas para garantir acompanhamento de qualidade.</p>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            <a href="https://pay.hotmart.com/seu-link-curso" target="_blank" rel="noopener noreferrer">
              Quero Me Inscrever no Equilibbra
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-background/70">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">7 dias de garantia</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">Comunidade exclusiva</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">Suporte direto</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
