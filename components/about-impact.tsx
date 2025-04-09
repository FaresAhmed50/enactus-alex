import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutImpact() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-muted-foreground">
            Through our projects and initiatives, we've made a significant impact on our community and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
            <p className="text-lg font-medium">Projects Implemented</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">5,000+</h3>
            <p className="text-lg font-medium">Lives Impacted</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
            <p className="text-lg font-medium">Team Members</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate individuals to join our team and contribute to our mission of
                creating a better world through entrepreneurial action.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary-dark text-white">
                  <Link href="/join">Apply to Join</Link>
                </Button>
                {/*<Button asChild variant="outline">*/}
                {/*  <Link href="/projects">Explore Our Projects</Link>*/}
                {/*</Button>*/}
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Enactus team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

