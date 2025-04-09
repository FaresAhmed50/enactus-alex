import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Entrepreneurship Workshop",
    description: "Learn the fundamentals of entrepreneurship and how to develop your business ideas.",
    date: "November 5, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Business Faculty, Room 302",
    image: "/placeholder.svg?height=400&width=600&text=Workshop",
  },
  {
    id: 2,
    title: "Project Showcase",
    description: "Discover our current projects and learn how you can get involved.",
    date: "November 15, 2023",
    time: "3:00 PM - 6:00 PM",
    location: "University Main Hall",
    image: "/placeholder.svg?height=400&width=600&text=Showcase",
  },
  {
    id: 3,
    title: "Networking Event",
    description: "Connect with alumni, business leaders, and fellow students.",
    date: "December 1, 2023",
    time: "5:00 PM - 7:00 PM",
    location: "Alexandria Business Hub",
    image: "/placeholder.svg?height=400&width=600&text=Networking",
  },
]

export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="relative h-48">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <Link
                  href={`/events/${event.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

