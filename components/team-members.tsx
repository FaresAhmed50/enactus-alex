"use client"

import { useState } from "react"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample team data
const departments = [
  {
    id: "projects",
    name: "Projects",
    members: [
      {
        id: 1,
        name: "Sara Ahmed",
        role: "Project Manager",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
      {
        id: 2,
        name: "Omar Khaled",
        role: "Project Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
      {
        id: 3,
        name: "Yasmin Mohamed",
        role: "Project Developer",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
      {
        id: 4,
        name: "Karim Mahmoud",
        role: "Project Developer",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    members: [
      {
        id: 5,
        name: "Hana Ibrahim",
        role: "Marketing Director",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
      {
        id: 6,
        name: "Youssef Ali",
        role: "Social Media Specialist",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
      {
        id: 7,
        name: "Nada Hassan",
        role: "Content Creator",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    members: [
      {
        id: 8,
        name: "Mostafa Samir",
        role: "Finance Director",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
      {
        id: 9,
        name: "Rana Adel",
        role: "Financial Analyst",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
    ],
  },
  {
    id: "hr",
    name: "Human Resources",
    members: [
      {
        id: 10,
        name: "Amira Salah",
        role: "HR Director",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
      {
        id: 11,
        name: "Tarek Nour",
        role: "Recruitment Specialist",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
      {
        id: 12,
        name: "Dina Fouad",
        role: "Training Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        linkedin: "https://linkedin.com",
      },
    ],
  },
]

export default function TeamMembers() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Departments</h2>

        <Tabs defaultValue="projects" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              {departments.map((dept) => (
                <TabsTrigger key={dept.id} value={dept.id} className="px-4 py-2">
                  {dept.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {departments.map((dept) => (
            <TabsContent key={dept.id} value={dept.id} className="mt-0">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dept.members.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center mb-2"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                        </a>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in joining our team? We're always looking for passionate individuals to make a difference.
          </p>
          <Button asChild className="bg-primary hover:bg-primary-dark text-white">
            <a href="/join">Join Our Team</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

