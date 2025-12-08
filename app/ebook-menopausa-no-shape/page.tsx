import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield, Clock, BookOpen, Star, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function EbookPage() {
  const features = [
    "89 receitas proteicas - simples, rápidas e deliciosas",
    "4 semanas de cardápios prontos - 6 refeições por dia",
    "Estratégia nutricional para ativar o metabolismo",
    "Capítulo extra: montar pratos inteligentes",
    "Grupos nutricionais para escolher melhor os alimentos",
    "Lista de compras organizada por semana",
    "Receitas com ingredientes acessíveis",
    "Versões doces e salgadas para todas as refeições",
  ]

  const results = [
    "Corpo mais firme e definido",
    "Menos celulite e retenção",
    "Mais energia e disposição",
    "Fim da pochete abdominal",
    "Metabolismo acelerado",
    "Saciedade o dia todo",
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
      <section className="pt-28 md:pt-36 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-0">Ebook Digital</Badge>

              <h1 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-balance">
                Menopausa no Shape
              </h1>

              <p className="text-xl text-muted-foreground">
                O E-book com tudo o que EU COMO para manter o corpo que tenho aos 55 anos, sem hormônio e na menopausa.
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Avaliado por +40 mulheres</span>
              </div>

              <div className="bg-secondary rounded-xl p-6 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-5xl font-bold text-foreground">R$ 47</span>
                  <span className="text-muted-foreground line-through">R$ 97</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    -52% OFF
                  </Badge>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                >
                  <a href="https://pay.hotmart.com/seu-link-aqui" target="_blank" rel="noopener noreferrer">
                    Comprar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>

                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>7 dias de garantia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>PDF para baixar</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-2xl">
                <img
                  src="/ebook-cover-menopausa-fitness-recipes-healthy-food.jpg"
                  alt="Ebook Menopausa no Shape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="py-16 bg-secondary/50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-center mb-12">O que você vai receber</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-center mb-4">
            Resultados que você pode esperar
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Seguindo o cardápio e as receitas do Menopausa no Shape, você vai conquistar:
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto bg-foreground rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl font-medium text-background mb-4">Comece sua transformação hoje</h2>
          <p className="text-background/80 mb-8">
            Por apenas R$ 47, você tem acesso a tudo que EU COMO para manter meu corpo aos 55 anos.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            <a href="https://pay.hotmart.com/seu-link-aqui" target="_blank" rel="noopener noreferrer">
              Quero o Ebook Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <p className="text-background/60 text-sm mt-6">
            Garantia incondicional de 7 dias. Se não gostar, devolvemos seu dinheiro.
          </p>
        </div>
      </section>
    </main>
  )
}
