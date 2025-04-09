"use client"

import { useRef, useEffect } from "react"

const timelineEvents = [
  {
    year: "2010",
    title: "Foundation",
    description:
      "Enactus Alexandria University was established by a group of passionate students with a vision to create positive change through entrepreneurial action.",
  },
  {
    year: "2012",
    title: "First National Competition",
    description:
      "Our team participated in the Enactus Egypt National Competition for the first time, presenting our initial projects and gaining valuable experience.",
  },
  {
    year: "2015",
    title: "First Major Project",
    description:
      "Launched our first major sustainable project, which focused on empowering local artisans through business training and market access.",
  },
  {
    year: "2017",
    title: "National Recognition",
    description:
      "Received national recognition for our innovative approach to solving community challenges through entrepreneurship.",
  },
  {
    year: "2019",
    title: "International Representation",
    description:
      "Represented Egypt at the Enactus World Cup, showcasing our projects on a global stage and connecting with teams from around the world.",
  },
  {
    year: "2022",
    title: "Expansion & Growth",
    description:
      "Expanded our team to over 100 active members and launched multiple high-impact projects addressing various social and environmental challenges.",
  },
  {
    year: "Present",
    title: "Continuing the Journey",
    description:
      "Today, we continue to innovate and create sustainable solutions for our community, empowering both our members and beneficiaries.",
  },
]

export default function AboutStory() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".timeline-item")
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible")
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current)
      }
    }
  }, [])

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:translate-x-[-50%]"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-item relative flex flex-col md:flex-row gap-8 opacity-0 transition-all duration-700 ease-out ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms`, transform: "translateY(20px)" }}
              >
                {/* Year bubble */}
                <div className="absolute left-[-10px] md:left-1/2 top-0 w-5 h-5 rounded-full bg-primary transform md:translate-x-[-50%] z-10"></div>

                {/* Content */}
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-primary/10">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-full mb-3">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

