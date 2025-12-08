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
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-foreground text-background rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-balance">
            O corpo e a energia que você quer começam aqui
          </h2>
          <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto">
            Eu venci o câncer, perdi 30kg sem hormônio e construí músculos aos 55 anos. Se eu consegui, você também
            pode. Deixe eu te mostrar o caminho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8">
              <Link href="/curso-equilibbra">
                Quero o Curso Equilibbra
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 text-base px-8 bg-transparent"
            >
              <Link href="/ebook-menopausa-no-shape">Começar com o Ebook - R$47</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-background/70">
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
