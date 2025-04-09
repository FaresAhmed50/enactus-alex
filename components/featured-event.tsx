import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function FeaturedEvent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Featured Event</h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-primary/10">
          <div className="grid md:grid-cols-2">
            <div className="relative h-[300px] md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Annual+Conference"
                alt="Annual Enactus Conference"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-1 rounded-full font-medium">
                Featured
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-2">Annual Enactus Conference 2023</h3>
              <p className="text-muted-foreground mb-6">
                Join us for our annual conference where we'll showcase our projects, share insights, and connect with
                industry leaders and fellow changemakers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>October 15, 2023</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Alexandria University Conference Hall</span>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary-dark text-white">Register Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

