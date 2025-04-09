import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutStory from "@/components/about-story"
import AboutValues from "@/components/about-values"
import AboutImpact from "@/components/about-impact"
import ScrollToTop from "@/components/scroll-to-top"
import { websiteContent } from "@/data/website-content"

export const metadata: Metadata = {
  title: websiteContent.seo.pages.about.title,
  description: websiteContent.seo.pages.about.description,
  keywords: websiteContent.seo.pages.about.keywords,
  openGraph: {
    title: websiteContent.seo.pages.about.title,
    description: websiteContent.seo.pages.about.description,
    images: [
      {
        url: websiteContent.seo.pages.about.ogImage,
        width: 1200,
        height: 630,
        alt: websiteContent.seo.pages.about.title,
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      {/*<AboutStory />*/}
      <AboutValues />
      <AboutImpact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

