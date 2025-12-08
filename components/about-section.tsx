import { Award, Users, Heart } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, value: "40+", label: "Mulheres Transformadas" },
    { icon: Award, value: "55", label: "Anos de Vida" },
    { icon: Heart, value: "-30kg", label: "Transformação Pessoal" },
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img src="/ale-about.jpeg" alt="Ale Fiorini" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest text-primary font-medium">Minha História</span>

            <h2 className="font-serif text-3xl md:text-4xl font-medium text-balance">Prazer, eu sou a Ale Fiorini</h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou Nutri & Trainer, tenho <strong className="text-foreground">55 anos</strong>, sou{" "}
                <strong className="text-foreground">mastectomizada</strong>, estou na{" "}
                <strong className="text-foreground">menopausa</strong> e não faço{" "}
                <strong className="text-foreground">reposição hormonal</strong>.
              </p>
              <p>
                Venci o câncer de mama, perdi 30kg e construí músculos — tudo isso sem hormônio. Não foi sorte, foi
                método. E hoje eu ensino esse método para mulheres como você.
              </p>
              <p>
                Criei o Ebook Menopausa no Shape com <strong className="text-foreground">tudo o que EU COMO</strong> e o
                que transformou o meu corpo. Agora te mostro o caminho para você conquistar o corpo e a energia que
                merece.
              </p>
              <p className="text-primary font-medium">A menopausa não é o fim. É o começo de uma nova você.</p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-secondary rounded-lg">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
