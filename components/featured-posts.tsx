import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "Ultimate Keto Breakfast Bowl",
    description:
      "Start your day right with this protein-packed, nutrient-dense breakfast that keeps you satisfied for hours.",
    image: "/keto-breakfast-bowl-with-avocado-and-eggs.jpg",
    category: "Recipes",
    readTime: "5 min read",
    date: "Dec 20, 2024",
    slug: "ultimate-keto-breakfast-bowl",
  },
  {
    title: "Beginner's Guide to Ketosis",
    description:
      "Everything you need to know about entering and maintaining ketosis for optimal fat burning and energy.",
    image: "/healthy-keto-meal-planning.jpg",
    category: "Guides",
    readTime: "8 min read",
    date: "Dec 18, 2024",
    slug: "beginners-guide-to-ketosis",
  },
  {
    title: "Low-Carb Comfort Foods",
    description: "Satisfy your cravings with these keto-friendly versions of your favorite comfort foods.",
    image: "/keto-comfort-food-lasagna.jpg",
    category: "Recipes",
    readTime: "6 min read",
    date: "Dec 15, 2024",
    slug: "low-carb-comfort-foods",
  },
  {
    title: "Best Keto Supplements 2025",
    description:
      "Discover the top keto supplements to enhance your ketogenic diet with expert reviews of MCT oil, electrolytes, and more.",
    image: "/keto-supplements-collection.jpg",
    category: "Supplements",
    readTime: "10 min read",
    date: "Dec 23, 2024",
    slug: "best-keto-supplements-2025",
  },
  {
    title: "Best Keto Protein Powders 2025",
    description: "Expert reviews of the best keto-friendly protein powders with minimal carbs for muscle building.",
    image: "/keto-protein-powder-bottles.jpg",
    category: "Products",
    readTime: "8 min read",
    date: "Dec 23, 2024",
    slug: "keto-protein-powders",
  },
  {
    title: "Top 20 Keto Snacks to Buy Online",
    description: "The ultimate guide to convenient, delicious low-carb snacks you can order directly to your door.",
    image: "/keto-snacks-variety-spread.jpg",
    category: "Shopping",
    readTime: "7 min read",
    date: "Dec 23, 2024",
    slug: "keto-snacks-guide",
  },
]

export function FeaturedPosts() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hand-picked content to inspire and guide your keto lifestyle
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
