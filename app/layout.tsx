import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nathcorp.com"),
  title: {
    default: "NathCorp - Modern Deployment & Cloud Migration Solutions",
    template: "%s | NathCorp",
  },
  description:
    "NathCorp provides modern deployment solutions, cloud migration services, and IT consulting. Cost effective, safe & personalized.",
  keywords: [
    "modern deployment",
    "cloud migration",
    "EZ Migrate",
    "Pro-Work Portfolio",
    "cost saving",
    "technology solutions",
  ],
  authors: [{ name: "NathCorp" }],
  creator: "NathCorp",
  publisher: "NathCorp",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "NathCorp",
    title: "NathCorp - Modern Deployment & Cloud Migration Solutions",
    description:
      "NathCorp provides modern deployment solutions, cloud migration services, and IT consulting. Cost effective, safe & personalized.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NathCorp - Modern Deployment & Cloud Migration Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NathCorp - Modern Deployment & Cloud Migration Solutions",
    description:
      "NathCorp provides modern deployment solutions, cloud migration services, and IT consulting. Cost effective, safe & personalized.",
    images: ["/og-image.jpg"],
    creator: "@nathcorp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
