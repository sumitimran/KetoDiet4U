import { Hero } from "@/components/hero"
import { FeaturedPosts } from "@/components/featured-posts"
import { Categories } from "@/components/categories"
import { Newsletter } from "@/components/newsletter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedPosts />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
