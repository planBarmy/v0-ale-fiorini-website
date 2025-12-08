import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const benefits = [
    "Emagrecer e dar fim à pochete",
    "Recuperar energia e disposição",
    "Corpo mais firme e definido, sem dieta maluca",
  ]

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-widest text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">
                Nutri & Trainer | Especialista em Menopausa
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance">
              Venci o câncer, perdi <span className="text-primary">30kg sem hormônio</span> e vou te mostrar como
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Sou Ale Fiorini, 55 anos, mastectomizada, na menopausa e sem reposição hormonal. Criei o método que
              transformou meu corpo e agora ensino mulheres 40+ a emagrecer e controlar a menopausa.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8"
              >
                <Link href="/curso-equilibbra">
                  Quero Transformar Meu Corpo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 bg-transparent">
                <Link href="#produtos">Conhecer os Cursos</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[
                  "/brazilian-woman-45-years-fit-smiling-portrait-head.jpg",
                  "/brazilian-woman-52-years-healthy-radiant-portrait-.jpg",
                  "/brazilian-woman-48-years-confident-athletic-portra.jpg",
                  "/brazilian-woman-55-years-energetic-happy-portrait-.jpg",
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={src || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Mulheres 40+ transformadas</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/ale-hero.jpeg"
                alt="Ale Fiorini - Nutri & Trainer Especialista em Menopausa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs">
              <p className="font-serif text-2xl font-semibold text-foreground">-30kg</p>
              <p className="text-sm text-muted-foreground">sem reposição hormonal, na menopausa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
