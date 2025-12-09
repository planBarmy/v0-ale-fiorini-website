import { Flame, Scale, Zap, Frown } from "lucide-react"

export function PainPoints() {
  const painPoints = [
    {
      icon: Scale,
      title: "Pochete e Ganho de Peso",
      description: "Gordura localizada que não sai com nada que você tenta",
    },
    {
      icon: Zap,
      title: "Falta de Energia",
      description: "Cansaço constante que atrapalha sua rotina e motivação",
    },
    {
      icon: Flame,
      title: "Metabolismo Lento",
      description: "Dificuldade para emagrecer mesmo comendo pouco",
    },
    {
      icon: Frown,
      title: "Corpo Flácido",
      description: "Perda de massa muscular e firmeza na pele",
    },
  ]

  return (
    <section className="py-10 md:py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4 md:mb-6 text-balance">
            Você está cansada de lutar contra seu próprio corpo?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            A menopausa mudou tudo, mas não precisa ser assim. Com a estratégia certa de alimentação, você pode
            recuperar o controle do seu corpo e da sua energia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-card p-4 md:p-6 rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <point.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base md:text-lg mb-2 text-card-foreground">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <p className="text-base md:text-lg font-medium text-foreground">
            Se você se identificou, saiba: <span className="text-primary">eu já passei por tudo isso</span> — e venci.
          </p>
        </div>
      </div>
    </section>
  )
}
