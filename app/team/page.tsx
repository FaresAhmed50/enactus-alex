import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TeamHero from "@/components/team-hero"
import TeamLeadership from "@/components/team-leadership"
import TeamMembers from "@/components/team-members"
import ScrollToTop from "@/components/scroll-to-top"
import { websiteContent } from "@/data/website-content"

export const metadata: Metadata = {
  title: websiteContent.seo.pages.team.title,
  description: websiteContent.seo.pages.team.description,
  keywords: websiteContent.seo.pages.team.keywords,
  openGraph: {
    title: websiteContent.seo.pages.team.title,
    description: websiteContent.seo.pages.team.description,
    images: [
      {
        url: websiteContent.seo.pages.team.ogImage,
        width: 1200,
        height: 630,
        alt: websiteContent.seo.pages.team.title,
      },
    ],
  },
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TeamHero />
      <TeamLeadership />
      <TeamMembers />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

