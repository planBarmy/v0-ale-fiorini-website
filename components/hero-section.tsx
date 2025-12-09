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
    <section className="pt-16 md:pt-20 pb-8 md:pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-4 md:space-y-5">
            <div className="inline-block max-w-full">
              <span className="inline-block text-xs uppercase tracking-widest text-primary font-medium bg-primary/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full whitespace-normal break-words leading-relaxed">
                <span className="inline">Nutri & Trainer</span>
                <span className="hidden sm:inline"> | </span>
                <span className="block sm:inline">Especialista em Menopausa</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-balance">
              Venci o câncer, perdi <span className="text-primary">30kg sem hormônio</span> e vou te mostrar como
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Sou Ale Fiorini, 55 anos, mastectomizada, na menopausa e sem reposição hormonal. Criei o método que
              transformou meu corpo e agora ensino mulheres 40+ a emagrecer e controlar a menopausa.
            </p>

            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base px-6 md:px-8"
              >
                <Link href="#produtos">
                  Conhecer os Cursos
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 md:gap-6 pt-2">
              <div className="flex -space-x-2 md:-space-x-3">
                {[
                  "/brazilian-woman-45-years-fit-smiling-portrait-head.jpg",
                  "/brazilian-woman-52-years-healthy-radiant-portrait-.jpg",
                  "/brazilian-woman-48-years-confident-athletic-portra.jpg",
                  "/brazilian-woman-55-years-energetic-happy-portrait-.jpg",
                ].map((src, i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={src || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 md:gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">Mulheres 40+ transformadas</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden bg-muted">
              <img
                src="/ale-hero.jpeg"
                alt="Ale Fiorini - Nutri & Trainer Especialista em Menopausa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 -left-4 md:top-6 md:-left-6 bg-card p-4 md:p-6 rounded-lg md:rounded-xl shadow-lg border border-border max-w-xs">
              <p className="font-serif text-xl md:text-2xl font-semibold text-foreground">-30kg</p>
              <p className="text-xs md:text-sm text-muted-foreground">sem reposição hormonal, na menopausa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
