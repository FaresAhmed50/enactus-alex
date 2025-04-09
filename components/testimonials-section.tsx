"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Being part of Enactus Alexandria has been transformative. I've developed leadership skills while making a real difference in my community.",
    name: "Ahmed Hassan",
    role: "Team Leader",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "Enactus gave me the opportunity to apply classroom knowledge to real-world problems. The experience has been invaluable for my career.",
    name: "Nour Ibrahim",
    role: "Project Manager",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote:
      "The mentorship and support I received through Enactus helped me grow both personally and professionally. It's more than just a student organization.",
    name: "Layla Mahmoud",
    role: "Marketing Lead",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".scroll-animation")
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices of Impact</h2>
          <p className="text-lg text-muted-foreground">
            Hear from our members about their experiences and the impact Enactus has had on their lives and careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg relative scroll-animation">
              <div className="absolute -top-5 left-6">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Quote className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="pt-6">
                <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 scroll-animation">
          <div className="bg-secondary p-[2px] rounded-2xl">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Community of Changemakers</h3>
                  <p className="text-muted-foreground mb-6">
                    Become part of a global network of student, academic and business leaders who are transforming lives
                    and shaping a better, more sustainable world.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/join"
                      className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Apply Now
                    </a>
                    <a
                      href="/contact"
                      className="px-6 py-3 border border-primary/20 text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-xl blur-xl"></div>
                  <div className="relative overflow-hidden rounded-xl h-[300px]">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Enactus team"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

