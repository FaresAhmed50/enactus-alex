import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import ProjectSection from "@/components/project-section"
import TestimonialsSection from "@/components/testimonials-section"
import PartnersSection from "@/components/partners-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { websiteContent } from "@/data/website-content"

export const metadata: Metadata = {
  title: websiteContent.seo.pages.home.title,
  description: websiteContent.seo.pages.home.description,
  keywords: websiteContent.seo.pages.home.keywords,
  openGraph: {
    title: websiteContent.seo.pages.home.title,
    description: websiteContent.seo.pages.home.description,
    images: [
      {
        url: websiteContent.seo.pages.home.ogImage,
        width: 1200,
        height: 630,
        alt: websiteContent.seo.pages.home.title,
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <section id="project">
        <ProjectSection />
      </section>
      <TestimonialsSection />
      <PartnersSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

