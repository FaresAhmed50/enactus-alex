import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Enactus Alexandria University was founded with a vision to empower students to use entrepreneurial action
              to improve the quality of life for people in need. Since our establishment, we've been committed to
              creating sustainable solutions for our community.
            </p>
            <p className="text-lg text-muted-foreground">
              Our journey is one of passion, innovation, and impact. Through the years, we've grown from a small group
              of dedicated students to a thriving community of changemakers.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Enactus Alexandria team"
                width={800}
                height={600}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

