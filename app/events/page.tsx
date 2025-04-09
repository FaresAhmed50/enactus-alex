import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EventsHero from "@/components/events-hero"
import FeaturedEvent from "@/components/featured-event"
import UpcomingEvents from "@/components/upcoming-events"
import PastEvents from "@/components/past-events"
import ScrollToTop from "@/components/scroll-to-top"
import { websiteContent } from "@/data/website-content"

export const metadata: Metadata = {
  title: websiteContent.seo.pages.events.title,
  description: websiteContent.seo.pages.events.description,
  keywords: websiteContent.seo.pages.events.keywords,
  openGraph: {
    title: websiteContent.seo.pages.events.title,
    description: websiteContent.seo.pages.events.description,
    images: [
      {
        url: websiteContent.seo.pages.events.ogImage,
        width: 1200,
        height: 630,
        alt: websiteContent.seo.pages.events.title,
      },
    ],
  },
}

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <EventsHero />
      <FeaturedEvent />
      <UpcomingEvents />
      <PastEvents />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

