import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ketodiet4u.com"),
  title: {
    default: "KetoDiet4U - Your Guide to the Ketogenic Lifestyle",
    template: "%s | KetoDiet4U",
  },
  description:
    "Discover delicious keto recipes, expert tips, and lifestyle advice for your ketogenic journey. Start your healthy low-carb lifestyle today.",
  keywords: [
    "keto diet",
    "ketogenic lifestyle",
    "low carb recipes",
    "keto meals",
    "ketosis guide",
    "healthy eating",
    "weight loss",
  ],
  authors: [{ name: "KetoDiet4U Team" }],
  creator: "KetoDiet4U",
  publisher: "KetoDiet4U",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ketodiet4u.com",
    siteName: "KetoDiet4U",
    title: "KetoDiet4U - Your Guide to the Ketogenic Lifestyle",
    description: "Discover delicious keto recipes, expert tips, and lifestyle advice for your ketogenic journey.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KetoDiet4U - Keto Diet and Recipes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KetoDiet4U - Your Guide to the Ketogenic Lifestyle",
    description: "Discover delicious keto recipes, expert tips, and lifestyle advice for your ketogenic journey.",
    images: ["/og-image.jpg"],
    creator: "@ketodiet4u",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
