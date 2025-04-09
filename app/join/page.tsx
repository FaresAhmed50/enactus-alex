import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import JoinHero from "@/components/join-hero"
import JoinForm from "@/components/join-form"
import ScrollToTop from "@/components/scroll-to-top"
import { websiteContent } from "@/data/website-content"

export const metadata: Metadata = {
  title: websiteContent.seo.pages.join.title,
  description: websiteContent.seo.pages.join.description,
  keywords: websiteContent.seo.pages.join.keywords,
  openGraph: {
    title: websiteContent.seo.pages.join.title,
    description: websiteContent.seo.pages.join.description,
    images: [
      {
        url: websiteContent.seo.pages.join.ogImage,
        width: 1200,
        height: 630,
        alt: websiteContent.seo.pages.join.title,
      },
    ],
  },
}

export default function JoinPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <JoinHero />
      <JoinForm />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

