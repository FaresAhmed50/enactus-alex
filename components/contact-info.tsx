import { MapPin, Mail, Phone, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary/10">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Our Location</h3>
              <p className="text-muted-foreground">
                Faculty of Commerce, Alexandria University
                <br />
                El-Shatby, Alexandria, Egypt
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Email Us</h3>
              <a href="mailto:info@enactusalex.org" className="text-primary hover:underline">
                info@enactusalex.org
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Call Us</h3>
              <a href="tel:+201234567890" className="text-primary hover:underline">
                +20 123 456 7890
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary/10">
        <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6 text-[#1877F2]" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#E4405F]/10 hover:bg-[#E4405F]/20 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-[#E4405F]" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 flex items-center justify-center transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6 text-[#1DA1F2]" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-[#0A66C2]" />
          </a>
        </div>
      </div>

      <div className="bg-secondary/10 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="mb-4">
          Interested in becoming a part of Enactus Alexandria University? We're always looking for passionate
          individuals to join our team.
        </p>
        <a
          href="/join"
          className="inline-block px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary-dark transition-colors"
        >
          Apply Now
        </a>
      </div>
    </div>
  )
}

