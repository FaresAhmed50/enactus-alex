"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "EcoSolutions",
    description: "Sustainable waste management solutions for local communities",
    image: "/placeholder.svg?height=400&width=600",
    category: "Environment",
  },
  {
    id: 2,
    title: "MicroFinance Initiative",
    description: "Providing micro-loans to empower small business owners",
    image: "/placeholder.svg?height=400&width=600",
    category: "Economic Empowerment",
  },
  {
    id: 3,
    title: "DigitalSkills",
    description: "Teaching digital literacy to underserved communities",
    image: "/placeholder.svg?height=400&width=600",
    category: "Education",
  },
]

export default function ProjectsSection() {
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl scroll-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact Projects</h2>
            <p className="text-lg text-muted-foreground">
              Discover how our student-led projects are creating sustainable solutions and transforming lives in our
              community.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 scroll-animation">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg border border-muted hover:border-primary/20 transition-all duration-300 scroll-animation"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Link
                  href={`/projects/${project.id}`}
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

