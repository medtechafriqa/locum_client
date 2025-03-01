import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, MessageSquare, Building, Calendar, MapPin, DollarSign } from "lucide-react"
import Link from "next/link"

interface MedicApplicationsProps {
  extended?: boolean
}

export function MedicApplications({ extended = false }: MedicApplicationsProps) {
  const applications = [
    {
      id: "app-1",
      hospital: {
        name: "Memorial Hospital",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "New York, NY",
      },
      job: {
        title: "Emergency Physician - Weekend Shifts",
        id: "job-1",
        rate: "$200/hr",
      },
      date: "2023-06-15",
      status: "pending",
    },
    {
      id: "app-2",
      hospital: {
        name: "City Medical Center",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Boston, MA",
      },
      job: {
        title: "Anesthesiologist - Surgical Department",
        id: "job-2",
        rate: "$220/hr",
      },
      date: "2023-06-14",
      status: "reviewing",
    },
    {
      id: "app-3",
      hospital: {
        name: "Children's Hospital",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Chicago, IL",
      },
      job: {
        title: "Pediatrician - Urgent Care",
        id: "job-3",
        rate: "$180/hr",
      },
      date: "2023-06-12",
      status: "accepted",
    },
    {
      id: "app-4",
      hospital: {
        name: "Heart Institute",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Los Angeles, CA",
      },
      job: {
        title: "Cardiologist - Consultation",
        id: "job-4",
        rate: "$250/hr",
      },
      date: "2023-06-10",
      status: "rejected",
    },
    {
      id: "app-5",
      hospital: {
        name: "Neuroscience Center",
        avatar: "/placeholder.svg?height=40&width=40",
        location: "Seattle, WA",
      },
      job: {
        title: "Neurologist - Outpatient Clinic",
        id: "job-5",
        rate: "$230/hr",
      },
      date: "2023-06-08",
      status: "pending",
    },
  ]

  const displayApplications = extended ? applications : applications.slice(0, 3)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline">Pending</Badge>
      case "reviewing":
        return <Badge variant="secondary">Reviewing</Badge>
      case "accepted":
        return <Badge variant="success">Accepted</Badge>
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {displayApplications.map((application) => (
        <div key={application.id} className="flex items-center justify-between space-x-4 rounded-md border p-4">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={application.hospital.avatar} alt={application.hospital.name} />
              <AvatarFallback>{application.hospital.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{application.job.title}</p>
              <div className="mt-1 flex flex-col gap-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Building className="h-3 w-3" />
                  <span>{application.hospital.name}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{application.hospital.location}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <DollarSign className="h-3 w-3" />
                  <span>{application.job.rate}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Applied on {new Date(application.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {getStatusBadge(application.status)}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Actions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={`/applications/${application.id}`} className="flex w-full items-center">
                    View Details
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={`/messages/${application.hospital.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex w-full items-center"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Hospital
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`/jobs/${application.job.id}`} className="flex w-full items-center">
                    View Job
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}

      {!extended && applications.length > 3 && (
        <div className="text-center">
          <Link href="/my-applications">
            <Button variant="link">View all applications</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

