"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Users } from "lucide-react"
import { websiteContent } from "@/data/website-content"

export default function HeroSection() {
  const shapesRef = useRef<HTMLDivElement>(null)
  const { hero } = websiteContent.home

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!shapesRef.current) return

      const shapes = shapesRef.current.querySelectorAll(".shape")
      const x = e.clientX
      const y = e.clientY

      shapes.forEach((shape, index) => {
        const speed = index * 0.01 + 0.02
        const htmlShape = shape as HTMLElement
        htmlShape.style.transform = `translate(${x * speed}px, ${y * speed}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background shapes */}
      <div ref={shapesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shape absolute top-[10%] left-[15%] w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
        <div className="shape absolute top-[40%] left-[80%] w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
        <div className="shape absolute top-[70%] left-[25%] w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
        <div className="shape absolute top-[20%] left-[60%] w-20 h-20 bg-accent-orange/20 hexagon blur-lg"></div>
        <div className="shape absolute top-[60%] left-[70%] w-28 h-28 bg-accent-green/20 triangle blur-lg"></div>
        <div className="shape absolute top-[80%] left-[40%] w-36 h-36 bg-secondary/20 diamond blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary-dark font-medium animate-float">
              <span className="flex items-center gap-2">
                <Lightbulb size={18} className="animate-wave" />
                Entrepreneurial Action for Social Impact
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {hero.title.split(" Through ")[0]} Through
              <span className="text-primary"> {hero.title.split(" Through ")[1]}</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">{hero.subtitle}</p>

            <div className="flex flex-wrap gap-4 pt-4">
              {hero.buttons.map((button, index) =>
                button.primary ? (
                  <Button key={index} asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                    <Link href={button.link}>
                      {button.text} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button key={index} asChild variant="outline" size="lg">
                    <Link href={button.link}>{button.text}</Link>
                  </Button>
                ),
              )}
            </div>

            <div className="flex flex-wrap gap-8 pt-6">
              {hero.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mb-20">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <Image
                src={hero.image || "/placeholder.svg"}
                alt="Enactus Alexandria in action"
                width={`600`}
                height={`600`}
                className="rounded-xl w-full md:h-[500px]  object-cover"
              />
            </div>
            <div className="absolute -bottom-16 left-5  md:-bottom-10 md:left-10 lg:-left-10 p-4 bg-white rounded-xl shadow-lg -rotate-6 transform hover:rotate-0 transition-transform duration-500 z-10 max-w-[200px]">
              <p className="text-sm font-medium">"{hero.testimonial.quote}"</p>
              <p className="text-xs text-muted-foreground mt-2">— {hero.testimonial.author}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

