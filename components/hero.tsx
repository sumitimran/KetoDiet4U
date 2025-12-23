import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background opacity-60" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Your Journey to a <span className="text-primary">Healthier Life</span> Starts Here
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover delicious keto recipes, expert nutrition tips, and a supportive community to help you thrive on
            your ketogenic journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base">
              Explore Recipes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Learn About Keto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
