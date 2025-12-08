import { Button } from "@/components/ui/button"
import { Check, Star, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function ProductsSection() {
  const ebookFeatures = [
    "89 receitas proteicas - simples e deliciosas",
    "4 semanas de cardápios prontos",
    "Estratégia nutricional para ativar o metabolismo",
    "Corpo firme, menos celulite, mais disposição",
  ]

  const cursoFeatures = [
    "Dieta 100% personalizada para seu metabolismo",
    "Estratégias para perda de peso sustentável",
    "Acompanhamento e suporte completo",
    "Ebook Menopausa no Shape incluso",
  ]

  return (
    <section id="produtos" className="py-12 md:py-16 bg-secondary/50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Produtos</span>
          <h2 className="font-serif text-2xl md:text-3xl font-medium mt-3 mb-4 text-balance">
            O corpo e a energia que você quer começam aqui
          </h2>
          <p className="text-base text-muted-foreground">
            Escolha o caminho ideal para sua transformação na menopausa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-6 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-xs">
                Mais Vendido
              </Badge>
            </div>

            <div className="mb-4 mt-1">
              <h3 className="font-serif text-xl font-medium text-card-foreground">Menopausa no Shape</h3>
              <p className="text-sm text-muted-foreground mt-1">O E-book que está transformando mulheres 40+</p>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-muted mb-4">
              <img
                src="/ebook-cover-menopausa-fitness-recipes-healthy-food.jpg"
                alt="Ebook Menopausa no Shape"
                className="w-full h-full object-cover"
              />
            </div>

            <ul className="space-y-2 mb-6 flex-grow">
              {ebookFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-4">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-serif text-3xl font-semibold text-card-foreground">R$ 47</span>
              </div>
              <Button asChild className="w-full bg-foreground hover:bg-foreground/90 text-background" size="default">
                <Link href="/ebook-menopausa-no-shape">
                  Quero o Ebook Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">Pagamento único • Acesso imediato</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl border-2 border-primary p-6 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground text-xs">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Mais Completo
              </Badge>
            </div>

            <div className="mb-4 mt-1">
              <h3 className="font-serif text-xl font-medium text-card-foreground">Curso Equilibbra</h3>
              <p className="text-sm text-muted-foreground mt-1">Dieta 100% personalizada para seu metabolismo</p>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-muted mb-4">
              <img
                src="/online-course-nutrition-women-menopause-health-tra.jpg"
                alt="Curso Equilibbra"
                className="w-full h-full object-cover"
              />
            </div>

            <ul className="space-y-2 mb-6 flex-grow">
              {cursoFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-3xl font-semibold text-card-foreground">Consulte</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Vagas limitadas por turma</p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="default">
                <Link href="/curso-equilibbra">
                  Quero Saber Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">Garantia de 7 dias • Suporte completo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
