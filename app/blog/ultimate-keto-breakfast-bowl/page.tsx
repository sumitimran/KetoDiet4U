import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar, ArrowLeft, ChefHat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UltimateKetoBreakfastBowl() {
  return (
    <article className="min-h-screen">
      <div className="relative h-[400px] w-full overflow-hidden bg-gradient-to-b from-primary/20 to-background">
        <Image
          src="/keto-breakfast-bowl-with-avocado-and-eggs.jpg"
          alt="Ultimate Keto Breakfast Bowl"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              Recipes
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Ultimate Keto Breakfast Bowl</h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Dec 20, 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />5 min read
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Start your day right with this protein-packed, nutrient-dense breakfast that keeps you satisfied for hours.
          </p>

          <Card className="my-8 bg-secondary/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Recipe Overview</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Prep Time</p>
                  <p className="font-semibold">5 minutes</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cook Time</p>
                  <p className="font-semibold">10 minutes</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Servings</p>
                  <p className="font-semibold">1 bowl</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Why This Breakfast Bowl Works</h2>
          <p className="leading-relaxed">
            This keto breakfast bowl is the perfect way to kickstart your morning with sustained energy and focus.
            Packed with healthy fats from avocado, high-quality protein from eggs, and nutrient-dense vegetables, this
            bowl keeps you in ketosis while providing all the essential nutrients your body needs. The best part? It's
            incredibly simple to prepare and endlessly customizable.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Ingredients</h2>

          <Card className="my-6 bg-accent/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Base Ingredients</h3>
              <ul className="space-y-2 leading-relaxed">
                <li>• 2-3 large eggs (pasture-raised for best nutrition)</li>
                <li>• 1/2 ripe avocado, sliced</li>
                <li>• 1 cup fresh spinach or mixed greens</li>
                <li>• 2 tablespoons grass-fed butter or ghee</li>
                <li>• Salt and pepper to taste</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-4">Optional Toppings</h3>
              <ul className="space-y-2 leading-relaxed">
                <li>• 2 strips of crispy bacon</li>
                <li>• 1/4 cup shredded cheddar cheese</li>
                <li>• 2 tablespoons sour cream or Greek yogurt</li>
                <li>• Fresh herbs (cilantro, parsley, or chives)</li>
                <li>• Hot sauce or sriracha</li>
                <li>• Cherry tomatoes (in moderation)</li>
                <li>• Everything bagel seasoning</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Step-by-Step Instructions</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: Prepare Your Greens</h3>
          <p className="leading-relaxed">
            Start by washing your spinach or mixed greens thoroughly. You can use them raw for a fresh, crunchy texture,
            or quickly sauté them in a bit of butter for 1-2 minutes until just wilted. If sautéing, add a pinch of
            garlic powder for extra flavor.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: Cook Your Eggs to Perfection</h3>
          <p className="leading-relaxed">
            Heat a non-stick skillet over medium heat and add 1-2 tablespoons of butter. Once melted and slightly
            foaming, crack your eggs directly into the pan. For scrambled eggs, whisk them first and pour into the pan,
            stirring gently until creamy. For fried eggs, cook until the whites are set but the yolks remain runny
            (about 3-4 minutes). Season generously with salt and pepper.
          </p>

          <Card className="my-6 bg-primary/5">
            <CardContent className="p-6">
              <p className="font-semibold mb-2">Pro Tip:</p>
              <p className="text-muted-foreground leading-relaxed">
                Don't overcook your eggs! Remove them from heat when they're slightly underdone—they'll continue cooking
                from residual heat. This keeps them soft, creamy, and delicious.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: Assemble Your Bowl</h3>
          <p className="leading-relaxed">
            Start with your greens as a base in a wide, shallow bowl. This creates a bed for all the other ingredients.
            Add your cooked eggs on one side, and arrange your sliced avocado on the other. The visual contrast makes
            the bowl more appetizing and Instagram-worthy!
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Step 4: Add Your Favorite Toppings</h3>
          <p className="leading-relaxed">
            This is where you can get creative! Crumble crispy bacon over the top, sprinkle with cheese, add a dollop of
            sour cream, and finish with fresh herbs. A drizzle of hot sauce adds a nice kick, and everything bagel
            seasoning provides incredible flavor with minimal effort.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Nutritional Information</h2>
          <Card className="my-6 bg-secondary/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Per Serving (base recipe)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Calories</p>
                  <p className="font-semibold text-lg">485</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Fat</p>
                  <p className="font-semibold text-lg">42g</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Protein</p>
                  <p className="font-semibold text-lg">18g</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Net Carbs</p>
                  <p className="font-semibold text-lg">4g</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                *Nutritional values may vary based on specific ingredients and portions used
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mt-12 mb-6">Customization Ideas</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Mediterranean Style</h3>
          <p className="leading-relaxed">
            Add crumbled feta cheese, sliced olives, a sprinkle of oregano, and a drizzle of olive oil. Use cherry
            tomatoes sparingly to keep carbs low.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Mexican-Inspired</h3>
          <p className="leading-relaxed">
            Top with shredded pepper jack cheese, jalapeños, a dollop of guacamole or extra avocado, sour cream, and
            cilantro. Add salsa verde for extra flavor.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Protein-Packed Power Bowl</h3>
          <p className="leading-relaxed">
            Add grilled chicken breast or leftover steak, extra bacon, and a sprinkle of hemp hearts or chia seeds for
            additional protein and omega-3s.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Meal Prep Tips</h2>
          <ul className="leading-relaxed space-y-3">
            <li>
              <strong>Pre-wash greens:</strong> Wash and dry your greens on Sunday, store in the fridge with a paper
              towel to absorb moisture
            </li>
            <li>
              <strong>Cook bacon ahead:</strong> Bake a batch of bacon on the weekend and reheat as needed
            </li>
            <li>
              <strong>Prep toppings:</strong> Chop herbs, shred cheese, and portion out your favorite add-ons in small
              containers
            </li>
            <li>
              <strong>Hard-boiled eggs:</strong> Keep a batch of hard-boiled eggs ready for even faster assembly
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Why This Bowl Keeps You Full</h2>
          <p className="leading-relaxed">
            The combination of healthy fats from avocado and butter, plus protein from eggs, creates a satiating meal
            that stabilizes blood sugar and keeps hunger at bay for 4-6 hours. Unlike carb-heavy breakfasts that cause
            energy crashes, this keto bowl provides steady, sustained energy perfect for busy mornings and productive
            days.
          </p>

          <Card className="my-12 bg-accent/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Love This Recipe?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Explore more delicious keto recipes and meal ideas to keep your diet exciting and enjoyable!
              </p>
              <Link href="/">
                <Button size="lg">Discover More Recipes</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  )
}
