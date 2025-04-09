import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ScrollToTop from "@/components/scroll-to-top"
import { websiteContent } from "@/data/website-content"

export const metadata: Metadata = {
  title: websiteContent.seo.pages.contact.title,
  description: websiteContent.seo.pages.contact.description,
  keywords: websiteContent.seo.pages.contact.keywords,
  openGraph: {
    title: websiteContent.seo.pages.contact.title,
    description: websiteContent.seo.pages.contact.description,
    images: [
      {
        url: websiteContent.seo.pages.contact.ogImage,
        width: 1200,
        height: 630,
        alt: websiteContent.seo.pages.contact.title,
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{websiteContent.contact.hero.title}</h1>
            <p className="text-lg text-muted-foreground">{websiteContent.contact.hero.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}

