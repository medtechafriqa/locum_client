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
import { MoreHorizontal, MessageSquare, Calendar, MapPin, Clock, Building, DollarSign } from "lucide-react"
import Link from "next/link"

interface MedicUpcomingShiftsProps {
  extended?: boolean
}

export function MedicUpcomingShifts({ extended = false }: MedicUpcomingShiftsProps) {
  const shifts = [
    {
      id: "shift-1",
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
      date: "2023-06-18",
      time: "8:00 AM - 8:00 PM",
      department: "Emergency Department",
      status: "confirmed",
    },
    {
      id: "shift-2",
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
      date: "2023-06-19",
      time: "7:00 AM - 3:00 PM",
      department: "Surgical Wing, Room 302",
      status: "confirmed",
    },
    {
      id: "shift-3",
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
      date: "2023-06-20",
      time: "10:00 AM - 6:00 PM",
      department: "Pediatric Wing",
      status: "pending",
    },
    {
      id: "shift-4",
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
      date: "2023-06-21",
      time: "9:00 AM - 5:00 PM",
      department: "Cardiology Department",
      status: "confirmed",
    },
    {
      id: "shift-5",
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
      date: "2023-06-22",
      time: "8:00 AM - 4:00 PM",
      department: "Neurology Department",
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
              <AvatarImage src={shift.hospital.avatar} alt={shift.hospital.name} />
              <AvatarFallback>{shift.hospital.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{shift.job.title}</p>
              <div className="mt-1 flex flex-col gap-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Building className="h-3 w-3" />
                  <span>{shift.hospital.name}</span>
                </div>
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
                  <span>{shift.department}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <DollarSign className="h-3 w-3" />
                  <span>{shift.job.rate}</span>
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
                    href={`/messages/${shift.hospital.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex w-full items-center"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Hospital
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}

      {!extended && shifts.length > 3 && (
        <div className="text-center">
          <Link href="/my-shifts">
            <Button variant="link">View all shifts</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

