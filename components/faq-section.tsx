import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "O que vem no Ebook Menopausa no Shape?",
      answer:
        "Você recebe 89 receitas proteicas (simples e deliciosas), 4 semanas de cardápios prontos com 6 refeições por dia, estratégia nutricional para ativar o metabolismo, e um capítulo extra para aprender a montar pratos inteligentes.",
    },
    {
      question: "As receitas são difíceis de fazer?",
      answer:
        "Não! Todas as receitas são práticas e rápidas, pensadas para o dia a dia corrido. Pratos principais, lanches, acompanhamentos e até sobremesas — tudo fácil de preparar.",
    },
    {
      question: "O que é o Curso Equilibbra?",
      answer:
        "O Equilibbra é um curso completo que te ensina a montar sua própria dieta 100% personalizada para seu metabolismo. Você aprende estratégias para perda de peso, digestão, energia e controle hormonal natural.",
    },
    {
      question: "Funciona mesmo sem reposição hormonal?",
      answer:
        "Sim! Eu mesma sou a prova viva disso. Tenho 55 anos, sou mastectomizada, estou na menopausa e não faço reposição hormonal. Perdi 30kg e construí músculos com esse método.",
    },
    {
      question: "E se eu não gostar? Tem garantia?",
      answer:
        "Sim! Oferecemos 7 dias de garantia incondicional. Se não estiver satisfeita, devolvemos 100% do seu investimento, sem perguntas.",
    },
    {
      question: "Como recebo o Ebook?",
      answer:
        "Após a confirmação do pagamento, você recebe acesso imediato por email. O ebook é em formato PDF, pronto para baixar e começar sua transformação.",
    },
  ]

  return (
    <section id="faq" className="py-10 md:py-16 bg-secondary/50 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Dúvidas</span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium mt-3 md:mt-4 mb-4 md:mb-6 text-balance">Perguntas Frequentes</h2>
          <p className="text-base md:text-lg text-muted-foreground">Tire suas dúvidas antes de começar sua transformação</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border border-border px-4 md:px-6">
              <AccordionTrigger className="text-left text-sm md:text-base font-medium text-card-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
