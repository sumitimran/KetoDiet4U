import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Salad, BookOpen, Lightbulb, Users } from "lucide-react"

const categories = [
  {
    title: "Recipes",
    description: "Delicious keto-friendly meals for every occasion",
    icon: Salad,
    count: "150+ recipes",
  },
  {
    title: "Guides",
    description: "Comprehensive resources to master the keto lifestyle",
    icon: BookOpen,
    count: "25+ guides",
  },
  {
    title: "Tips & Tricks",
    description: "Expert advice to optimize your keto journey",
    icon: Lightbulb,
    count: "100+ tips",
  },
  {
    title: "Community",
    description: "Connect with fellow keto enthusiasts",
    icon: Users,
    count: "5K+ members",
  },
]

export function Categories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Explore Our Content</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need for a successful keto journey in one place
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="mb-2">{category.title}</CardTitle>
                    <CardDescription className="text-sm">{category.description}</CardDescription>
                    <p className="text-sm font-medium text-primary mt-3">{category.count}</p>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
