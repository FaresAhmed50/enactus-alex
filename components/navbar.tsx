"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { websiteContent } from "@/data/website-content"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { navigation } = websiteContent

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={navigation.logo || "/placeholder.svg"}
            alt="Enactus Alexandria University"
            width={150}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.links.map((link, index) => {
            if (link.name === "About") {
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                      {link.name} <ChevronDown size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/about">Our Story</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/team">Our Team</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }

            if (link.name === "Contact") {
              return (
                <Button key={index} asChild className="ml-2 bg-primary hover:bg-primary-dark text-white">
                  <Link href={link.path}>{link.name}</Link>
                </Button>
              )
            }

            return (
              <Link
                key={index}
                href={link.path}
                className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col space-y-3">
          {navigation.links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`px-4 py-2 ${
                link.name === "Contact"
                  ? "bg-primary text-white rounded-md text-center"
                  : "text-foreground hover:text-primary font-medium"
              } transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

