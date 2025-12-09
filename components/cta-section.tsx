import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  const guarantees = [
    { icon: Shield, text: "7 dias de garantia" },
    { icon: Clock, text: "Acesso imediato" },
    { icon: Award, text: "Método comprovado" },
  ]

  return (
    <section className="py-10 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-foreground text-background rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6 text-balance">
            O corpo e a energia que você quer começam aqui
          </h2>
          <p className="text-background/80 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Eu venci o câncer, perdi 30kg sem hormônio e construí músculos aos 55 anos. Se eu consegui, você também
            pode. Deixe eu te mostrar o caminho.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
            <Button asChild size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base px-6 md:px-8">
              <Link href="/curso-equilibbra">
                Quero o Curso Equilibbra
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="default"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 text-sm md:text-base px-6 md:px-8 bg-transparent"
            >
              <Link href="/ebook-menopausa-no-shape">Começar com o Ebook - R$47</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-background/70">
                <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
