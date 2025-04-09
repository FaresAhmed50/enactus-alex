import { Target, Heart, Users, Lightbulb } from "lucide-react"

const values = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Integrity",
    description: "We act with honesty, transparency, and ethical behavior in all our endeavors.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Passion",
    description:
      "We approach challenges with enthusiasm and dedication, driven by our commitment to create positive change.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership to achieve greater impact.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "We continuously seek creative and sustainable solutions to address social challenges.",
  },
]

export default function AboutValues() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground">
            These core values guide our actions and decisions as we work to create a better world through
            entrepreneurial action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{value.title}</h3>
              <p className="text-muted-foreground text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

