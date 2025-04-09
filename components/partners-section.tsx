"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export default function PartnersSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground">
            We collaborate with leading organizations and businesses to create meaningful impact and drive change.
          </p>
        </div>

        <div className="relative overflow-hidden py-10 scroll-animation">
          <div ref={marqueeRef} className="flex animate-marquee">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-[200px] mx-8">
                <div className="h-20 bg-muted/20 rounded-lg flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=80&width=160&text=Partner ${i + 1}`}
                    alt={`Partner ${i + 1}`}
                    width={160}
                    height={80}
                    className="max-h-12 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center scroll-animation">
          <h3 className="text-2xl font-bold mb-6">Become a Partner</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us in our mission to create a better world through entrepreneurial action. Partner with Enactus
            Alexandria University to support student innovation and community impact.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg  transition-colors"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  )
}

