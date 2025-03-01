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
import { MoreHorizontal, MessageSquare, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

interface UpcomingShiftsProps {
  extended?: boolean
}

export function UpcomingShifts({ extended = false }: UpcomingShiftsProps) {
  const shifts = [
    {
      id: "shift-1",
      medic: {
        name: "Dr. Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        specialty: "Emergency Medicine",
      },
      job: {
        title: "Emergency Physician - Weekend Shifts",
        id: "job-1",
      },
      date: "2023-06-18",
      time: "8:00 AM - 8:00 PM",
      location: "Emergency Department",
      status: "confirmed",
    },
    {
      id: "shift-2",
      medic: {
        name: "Dr. Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        specialty: "Anesthesiology",
      },
      job: {
        title: "Anesthesiologist - Surgical Department",
        id: "job-2",
      },
      date: "2023-06-19",
      time: "7:00 AM - 3:00 PM",
      location: "Surgical Wing, Room 302",
      status: "confirmed",
    },
    {
      id: "shift-3",
      medic: {
        name: "Dr. Emily Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        specialty: "Pediatrics",
      },
      job: {
        title: "Pediatrician - Urgent Care",
        id: "job-3",
      },
      date: "2023-06-20",
      time: "10:00 AM - 6:00 PM",
      location: "Pediatric Wing",
      status: "pending",
    },
    {
      id: "shift-4",
      medic: {
        name: "Dr. James Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        specialty: "Cardiology",
      },
      job: {
        title: "Cardiologist - Consultation",
        id: "job-4",
      },
      date: "2023-06-21",
      time: "9:00 AM - 5:00 PM",
      location: "Cardiology Department",
      status: "confirmed",
    },
    {
      id: "shift-5",
      medic: {
        name: "Dr. Lisa Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
        specialty: "Neurology",
      },
      job: {
        title: "Neurologist - Outpatient Clinic",
        id: "job-5",
      },
      date: "2023-06-22",
      time: "8:00 AM - 4:00 PM",
      location: "Neurology Department",
      status: "pending",
    },
  ]

  const displayShifts = extended ? shifts : shifts.slice(0, 3)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge variant="success">Confirmed</Badge>
      case "pending":
        return <Badge variant="outline">Pending</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {displayShifts.map((shift) => (
        <div key={shift.id} className="flex items-center justify-between space-x-4 rounded-md border p-4">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={shift.medic.avatar} alt={shift.medic.name} />
              <AvatarFallback>{shift.medic.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{shift.medic.name}</p>
              <p className="text-sm text-muted-foreground">{shift.medic.specialty}</p>
              <div className="mt-1 flex flex-col gap-1">
                <Link href={`/jobs/${shift.job.id}`} className="text-xs text-primary hover:underline">
                  {shift.job.title}
                </Link>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(shift.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{shift.time}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{shift.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {getStatusBadge(shift.status)}
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
                  <Link href={`/shifts/${shift.id}`} className="flex w-full items-center">
                    View Details
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={`/messages/${shift.medic.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex w-full items-center"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Reschedule
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}

      {!extended && shifts.length > 3 && (
        <div className="text-center">
          <Link href="/shifts">
            <Button variant="link">View all shifts</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

