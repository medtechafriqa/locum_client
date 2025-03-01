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
import { MoreHorizontal, MessageSquare, CheckCircle, XCircle, Calendar } from "lucide-react"
import Link from "next/link"

interface RecentApplicationsProps {
  extended?: boolean
}

export function RecentApplications({ extended = false }: RecentApplicationsProps) {
  const applications = [
    {
      id: "app-1",
      applicant: {
        name: "Dr. Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        specialty: "Emergency Medicine",
      },
      job: {
        title: "Emergency Physician - Weekend Shifts",
        id: "job-1",
      },
      date: "2023-06-15",
      status: "pending",
    },
    {
      id: "app-2",
      applicant: {
        name: "Dr. Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        specialty: "Anesthesiology",
      },
      job: {
        title: "Anesthesiologist - Surgical Department",
        id: "job-2",
      },
      date: "2023-06-14",
      status: "reviewing",
    },
    {
      id: "app-3",
      applicant: {
        name: "Dr. Emily Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        specialty: "Pediatrics",
      },
      job: {
        title: "Pediatrician - Urgent Care",
        id: "job-3",
      },
      date: "2023-06-12",
      status: "accepted",
    },
    {
      id: "app-4",
      applicant: {
        name: "Dr. James Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        specialty: "Cardiology",
      },
      job: {
        title: "Cardiologist - Consultation",
        id: "job-4",
      },
      date: "2023-06-10",
      status: "rejected",
    },
    {
      id: "app-5",
      applicant: {
        name: "Dr. Lisa Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
        specialty: "Neurology",
      },
      job: {
        title: "Neurologist - Outpatient Clinic",
        id: "job-5",
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
              <AvatarImage src={application.applicant.avatar} alt={application.applicant.name} />
              <AvatarFallback>{application.applicant.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{application.applicant.name}</p>
              <p className="text-sm text-muted-foreground">{application.applicant.specialty}</p>
              <div className="mt-1 flex items-center gap-2">
                <Link href={`/jobs/${application.job.id}`} className="text-xs text-primary hover:underline">
                  {application.job.title}
                </Link>
                <span className="text-xs text-muted-foreground">
                  Applied on {new Date(application.date).toLocaleDateString()}
                </span>
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
                    href={`/messages/${application.applicant.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex w-full items-center"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Accept
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center">
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Interview
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}

      {!extended && applications.length > 3 && (
        <div className="text-center">
          <Link href="/applications">
            <Button variant="link">View all applications</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

