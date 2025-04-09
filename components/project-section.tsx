"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { websiteContent } from "@/data/website-content"

export default function ProjectSection() {
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

  const { project } = websiteContent.home

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl scroll-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
            <p className="text-lg text-muted-foreground">{project.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-muted hover:border-primary/20 transition-all duration-300 scroll-animation">
            <div className="relative h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.fullDescription}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start  gap-2">
                  <span className="font-medium">Goal:</span>
                  <span>{project.goal}</span>
                </div>
                <div className="flex items-start  gap-2">
                  <span className="font-medium">Impact:</span>
                  <span>{project.impact}</span>
                </div>
                <div className="flex items-start  gap-2">
                  <span className="font-medium">Timeline:</span>
                  <span>{project.timeline}</span>
                </div>
              </div>

              {/*<Button className="w-full bg-primary hover:bg-primary-dark text-white">*/}
              {/*  Support This Project <ArrowRight className="ml-2 h-4 w-4" />*/}
              {/*</Button>*/}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-muted scroll-animation">
              <h4 className="text-xl font-bold mb-3">Project Objectives</h4>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-muted scroll-animation">
              <h4 className="text-xl font-bold mb-3">Sustainability Approach</h4>
              <p className="text-muted-foreground mb-4">{project.sustainability}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-muted scroll-animation">
              <h4 className="text-xl font-bold mb-3">Get Involved</h4>
              <p className="text-muted-foreground mb-4">{project.getInvolved}</p>
              <Button variant="outline" className="w-full bg-primary hover:bg-primary-dark text-white">
                Contact Us About This Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

