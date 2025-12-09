"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            Ale Fiorini
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </Link>
            <Link href="/#produtos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Produtos
            </Link>
            <Link
              href="/#depoimentos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Depoimentos
            </Link>
            <Link href="/#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#produtos">Quero Começar</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#sobre"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/#produtos"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/#depoimentos"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="/#faq"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                <Link href="#produtos">Quero Começar</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
