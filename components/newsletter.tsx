"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribe:", email)
    setEmail("")
  }

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-4">
            <Mail className="h-8 w-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-balance">Join Our Keto Community</h2>

          <p className="text-lg text-primary-foreground/90 text-pretty">
            Get weekly recipes, tips, and exclusive content delivered straight to your inbox. Start your transformation
            today!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-foreground flex-1"
            />
            <Button type="submit" variant="secondary" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/70">
            Join 10,000+ people already on their keto journey. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
