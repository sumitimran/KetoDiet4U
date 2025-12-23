import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">KetoDiet4U</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#recipes" className="text-sm font-medium hover:text-primary transition-colors">
            Recipes
          </Link>
          <Link href="#guides" className="text-sm font-medium hover:text-primary transition-colors">
            Guides
          </Link>
          <Link href="#tips" className="text-sm font-medium hover:text-primary transition-colors">
            Tips
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex">Subscribe</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
