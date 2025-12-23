import { Hero } from "@/components/hero"
import { FeaturedPosts } from "@/components/featured-posts"
import { Categories } from "@/components/categories"
import { Newsletter } from "@/components/newsletter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KetoDiet4U - Delicious Keto Recipes & Expert Diet Tips",
  description:
    "Your complete resource for ketogenic diet success. Find easy keto recipes, meal plans, beginner guides, and expert nutrition advice for sustainable weight loss and healthy living.",
  openGraph: {
    title: "KetoDiet4U - Delicious Keto Recipes & Expert Diet Tips",
    description:
      "Your complete resource for ketogenic diet success. Find easy keto recipes, meal plans, beginner guides, and expert nutrition advice.",
    type: "website",
    url: "https://ketodiet4u.com",
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KetoDiet4U",
    url: "https://ketodiet4u.com",
    description: "Your complete resource for ketogenic diet success with recipes, guides, and expert tips.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ketodiet4u.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "KetoDiet4U",
      url: "https://ketodiet4u.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ketodiet4u.com/logo.png",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
    </>
  )
}
