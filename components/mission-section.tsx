"use client"

import { useEffect, useRef } from "react"
import { Lightbulb, Users, Globe, TrendingUp } from "lucide-react"

export default function MissionSection() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-lg text-muted-foreground">
            We believe entrepreneurial action can solve the world's toughest challenges. Through Enactus, students use
            innovation and business principles to improve the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 scroll-animation impact-card">
            <div className="w-14 h-14 mb-6 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lightbulb className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-muted-foreground">
              We foster creative thinking and innovative solutions to address social challenges through entrepreneurial
              action.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-secondary/10 hover:border-secondary/30 transition-all duration-300 scroll-animation impact-card">
            <div className="w-14 h-14 mb-6 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Users className="h-7 w-7 text-secondary-dark" />
            </div>
            <h3 className="text-xl font-bold mb-3">Collaboration</h3>
            <p className="text-muted-foreground">
              We bring together diverse talents and perspectives to create powerful teams that drive meaningful change.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-accent/10 hover:border-accent/30 transition-all duration-300 scroll-animation impact-card">
            <div className="w-14 h-14 mb-6 rounded-lg bg-accent/10 flex items-center justify-center">
              <Globe className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Impact</h3>
            <p className="text-muted-foreground">
              We create sustainable solutions that address local challenges while contributing to global development
              goals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-accent-green/10 hover:border-accent-green/30 transition-all duration-300 scroll-animation impact-card">
            <div className="w-14 h-14 mb-6 rounded-lg bg-accent-green/10 flex items-center justify-center">
              <TrendingUp className="h-7 w-7 text-accent-green" />
            </div>
            <h3 className="text-xl font-bold mb-3">Sustainable Growth</h3>
            <p className="text-muted-foreground">
              We develop projects that create lasting economic, social, and environmental value for communities.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-primary p-[2px] rounded-2xl scroll-animation">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Entrepreneurial Action for a Better World</h3>
                <p className="text-muted-foreground mb-6">
                  At Enactus Alexandria University, we believe in the power of business to transform lives. Our student
                  teams develop and implement entrepreneurial projects that empower people to improve their livelihoods
                  in an economically, socially, and environmentally sustainable way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">10+</span>
                    </div>
                    <span className="text-sm">Years of Impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-secondary-dark font-bold">5K+</span>
                    </div>
                    <span className="text-sm">Lives Impacted</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl h-[300px] blob-animation">
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center text-white p-8 text-center">
                    <p className="text-xl md:text-2xl font-medium">"A head for business. A heart for the world."</p>
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

