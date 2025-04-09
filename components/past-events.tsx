import Image from "next/image"

const pastEvents = [
  {
    id: 1,
    title: "Annual Recruitment Drive",
    date: "September 2023",
    image: "/placeholder.svg?height=300&width=400&text=Recruitment",
  },
  {
    id: 2,
    title: "Community Impact Day",
    date: "August 2023",
    image: "/placeholder.svg?height=300&width=400&text=Impact+Day",
  },
  {
    id: 3,
    title: "Leadership Training",
    date: "July 2023",
    image: "/placeholder.svg?height=300&width=400&text=Training",
  },
  {
    id: 4,
    title: "Project Presentation",
    date: "June 2023",
    image: "/placeholder.svg?height=300&width=400&text=Presentation",
  },
  {
    id: 5,
    title: "Alumni Meetup",
    date: "May 2023",
    image: "/placeholder.svg?height=300&width=400&text=Alumni",
  },
  {
    id: 6,
    title: "Entrepreneurship Summit",
    date: "April 2023",
    image: "/placeholder.svg?height=300&width=400&text=Summit",
  },
]

export default function PastEvents() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Past Events</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {pastEvents.map((event) => (
            <div key={event.id} className="group relative overflow-hidden rounded-lg">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={300}
                height={300}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-3">
                <h3 className="text-white font-medium text-sm">{event.title}</h3>
                <p className="text-white/80 text-xs">{event.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Want to see more of our past events? Check out our social media channels.
          </p>
        </div>
      </div>
    </section>
  )
}

