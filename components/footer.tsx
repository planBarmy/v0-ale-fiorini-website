import { Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <a href="#" className="font-serif text-xl font-semibold text-foreground">
              Ale Fiorini
            </a>
            <p className="text-sm text-muted-foreground mt-2">Nutri & Trainer | Especialista em Menopausa</p>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ale Fiorini. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
