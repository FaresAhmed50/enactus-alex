import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const leadershipTeam = [
  {
    id: 1,
    name: "Ahmed Ibrahim",
    role: "President",
    bio: "Ahmed leads our team with a passion for social entrepreneurship and sustainable development.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "ahmed@enactusalex.org",
  },
  {
    id: 2,
    name: "Nour El-Din",
    role: "Vice President",
    bio: "Nour brings extensive experience in project management and community development.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "nour@enactusalex.org",
  },
  {
    id: 3,
    name: "Dr. Laila Hassan",
    role: "Faculty Advisor",
    bio: "Dr. Laila provides guidance and mentorship to our team, with expertise in business and economics.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "laila@enactusalex.org",
  },
]

export default function TeamLeadership() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {leadershipTeam.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-primary font-medium mb-3">{leader.role}</p>
                <p className="text-muted-foreground mb-4">{leader.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 flex items-center justify-center transition-colors"
                    aria-label={`${leader.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

