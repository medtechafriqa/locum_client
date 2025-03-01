import { ClipboardList, Search, CheckCircle, Calendar } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: <ClipboardList className="h-12 w-12 text-primary" />,
      title: "Create Your Profile",
      description:
        "Hospitals register institutional accounts, while medical professionals create detailed profiles with credentials and availability.",
      forHospitals: "Register your hospital and post job openings with specific requirements.",
      forMedics: "Create your profile with skills, qualifications, and availability preferences.",
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Find the Perfect Match",
      description:
        "Our algorithm matches the right professionals with the right opportunities based on multiple factors.",
      forHospitals: "Browse qualified candidates or let our system match you with the best professionals.",
      forMedics: "Search for shifts that match your skills and preferences or receive AI-powered recommendations.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Confirm Assignments",
      description: "Communicate securely, confirm details, and finalize assignments with ease.",
      forHospitals: "Review applications, communicate with candidates, and confirm assignments.",
      forMedics: "Apply with one click, discuss details, and accept assignments that work for you.",
    },
    {
      icon: <Calendar className="h-12 w-12 text-primary" />,
      title: "Manage Shifts",
      description: "Track shifts, check-ins, and performance with our comprehensive management tools.",
      forHospitals: "Monitor shift completion and provide feedback on professional performance.",
      forMedics: "Check in/out via GPS, track your hours, and build your reputation with reviews.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform makes it easy to connect hospitals with qualified medical professionals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12">
          {steps.map((step, index) => (
            <div key={index} className="grid gap-4 md:grid-cols-2 items-center">
              <div className={`flex flex-col space-y-3 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className="flex items-center space-x-3">
                  {step.icon}
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="grid gap-2 pt-3">
                  <div className="flex items-start space-x-2">
                    <span className="font-semibold text-primary">For Hospitals:</span>
                    <span>{step.forHospitals}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-semibold text-primary">For Medics:</span>
                    <span>{step.forMedics}</span>
                  </div>
                </div>
              </div>
              <div className={`flex justify-center ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <div className="relative h-[250px] w-[350px] overflow-hidden rounded-xl bg-muted">
                  <img
                    alt={`Step ${index + 1} illustration`}
                    className="object-cover"
                    height="250"
                    src={`/placeholder.svg?height=250&width=350&text=Step ${index + 1}`}
                    width="350"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

