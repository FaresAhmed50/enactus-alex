import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { websiteContent } from "@/data/website-content"

export default function Footer() {
  const { footer } = websiteContent
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3   lg:grid-cols-3  gap-8">

          <div className={`text-center md:text-left`}>
            <Link href="/" className="inline-block mb-6">
              <Image
                src={websiteContent.navigation.logo || "/placeholder.svg"}
                alt="Enactus Alexandria University"
                width={150}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 mb-6">{footer.about}</p>
            <div className="flex space-x-4 mb-4 justify-center md:justify-start">
              {footer.social.map((item, index) => {
                const Icon =
                  {
                    Facebook: Facebook,
                    Instagram: Instagram,
                    Twitter: Twitter,
                    LinkedIn: Linkedin,
                  }[item.platform] || Facebook

                return (
                  <a
                    key={index}
                    href={item.url}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={item.platform}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
            <div className="flex items-center justify-center md:justify-start text-white/50 text-sm">
              <span className="mr-2">Powered by</span>
              <a
                href={footer.credits.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-white/80 transition-colors"
                aria-label={`${footer.credits.company} - Website Design`}
              >
                <img
                  src={footer.credits.logo || "/placeholder.svg"}
                  alt={footer.credits.company}
                  className="h-14 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          <div className={`text-center md:text-left`}>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-white/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`text-center md:text-left`}>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center md:justify-start ">
                <MapPin className="mr-3 h-5 w-5 text-secondary shrink-0" />
                <span className="text-white/80">{footer.contact.address}</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <Mail className="mr-3 h-5 w-5 text-secondary shrink-0" />
                <a href={`mailto:${footer.contact.email}`} className="text-white/80 hover:text-white transition-colors">
                  {footer.contact.email}
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <Phone className="mr-3 h-5 w-5 text-secondary shrink-0" />
                <a href={`tel:${footer.contact.phone}`} className="text-white/80 hover:text-white transition-colors">
                  {footer.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/*<div>*/}
          {/*  <h3 className="text-lg font-bold mb-6">Newsletter</h3>*/}
          {/*  <p className="text-white/80 mb-4">{footer.newsletter.description}</p>*/}
          {/*  <form className="space-y-3">*/}
          {/*    <input*/}
          {/*      type="email"*/}
          {/*      placeholder="Your email address"*/}
          {/*      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"*/}
          {/*    />*/}
          {/*    <button*/}
          {/*      type="submit"*/}
          {/*      className="w-full px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary-dark transition-colors"*/}
          {/*    >*/}
          {/*      Subscribe*/}
          {/*    </button>*/}
          {/*  </form>*/}
          {/*</div>*/}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>{footer.copyright.replace("{year}", currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  )
}

