import { Building, UserCircle, Search, MessageSquare, Calendar, CreditCard, Shield, Bell } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Hospital Registration",
      description: "Create institutional accounts with role-based access control and verification.",
    },
    {
      icon: <UserCircle className="h-10 w-10 text-primary" />,
      title: "Medic Profiles",
      description: "Build detailed professional profiles with skills, availability, and credentials.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Smart Matching",
      description: "Our algorithm matches medics to openings based on skills, availability, and location.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Secure Messaging",
      description: "End-to-end encrypted communication between hospitals and medical professionals.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Shift Management",
      description: "Track shifts from assignment to completion with GPS check-in/out.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Payment Integration",
      description: "Secure payment processing for premium features and subscriptions.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Verification Tools",
      description: "Automatically validate licenses and certifications with medical board APIs.",
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Smart Notifications",
      description: "Stay updated with SMS and push notifications for new opportunities and updates.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Medical Staffing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers comprehensive tools for both hospitals and medical professionals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

