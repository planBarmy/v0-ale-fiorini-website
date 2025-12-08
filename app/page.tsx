import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PainPoints } from "@/components/pain-points"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PainPoints />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
