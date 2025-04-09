import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { websiteContent } from "@/data/website-content"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(websiteContent.seo.global.siteUrl),
  title: {
    default: websiteContent.seo.global.defaultTitle,
    template: websiteContent.seo.global.titleTemplate,
  },
  description: websiteContent.seo.global.defaultDescription,
  keywords: websiteContent.seo.global.defaultKeywords,
  authors: [{ name: "Enactus Alexandria University" }],
  creator: "Enactus Alexandria University",
  publisher: "Enactus Alexandria University",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: websiteContent.seo.global.locale,
    url: websiteContent.seo.global.siteUrl,
    siteName: websiteContent.seo.global.siteName,
    title: websiteContent.seo.global.defaultTitle,
    description: websiteContent.seo.global.defaultDescription,
    images: [
      {
        url: `${websiteContent.seo.global.siteUrl}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: websiteContent.seo.global.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: websiteContent.seo.global.defaultTitle,
    description: websiteContent.seo.global.defaultDescription,
    creator: websiteContent.seo.global.twitterHandle,
    images: [`${websiteContent.seo.global.siteUrl}/images/og-default.jpg`],
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
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: websiteContent.seo.global.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={websiteContent.seo.global.favicon} sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'