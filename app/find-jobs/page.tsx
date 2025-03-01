"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function FindJobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [payRange, setPayRange] = useState([100, 300])
  
  const specialties = [
    "Emergency Medicine",
    "Anesthesiology",
    "Cardiology",
    "Dermatology",
    "Family Medicine",
    "Internal Medicine",
    "Neurology",
    "Obstetrics & Gynecology",
    "Oncology",
    "Pediatrics",
    "Psychiatry",
    "Surgery",
  ]

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Find Jobs"
        text="Search and apply for medical locum opportunities."
      />
      
      <div className="grid gap-4 md:grid-cols-4">
        {/* Filters - Desktop */}
        <Card className="hidden md:block">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-medium">Specialty</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Specialties" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specialties</SelectItem>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty.toLowerCase().replace(/\s+/g, '-')}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h3 className="mb-2 font-medium">Location</h3>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <Input placeholder="City, State, or Zip" />
                </div>
              </div>
              
              <div>
                <h3 className="mb-2 font-medium">Pay Range ($/hr)</h3>
                <div className="space-y-2">
                  <Slider
                    defaultValue={payRange}
                    min={50}
                    max={500}
                    step={10}
                    onValueChange={setPayRange}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${payRange[0]}</span>
                    <span className="text-sm">${payRange[1]}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="mb-2 font-medium">Shift Type</h3>
                <div className="space-y-2">
                  {["Day Shift", "Night Shift", "Evening Shift", "Weekend", "On-Call"].map((shift) => (
                    <div key={shift} className="flex items-center space-x-2">
                      <Checkbox id={`shift-${shift.toLowerCase().replace(/\s+/g, '-')}`} />
                      <Label htmlFor={`shift-${shift.toLowerCase().replace(/\s+/g, '-')}`}>{shift}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="mb-2 font-medium">Duration</h3>
                <div className="space-y-2">
                  {["1-7 days", "1-2 weeks", "2-4 weeks", "1-3 months", "3+ months"].map((duration) => (
                    <div key={duration} className="flex items-center space-x-2">
                      <Checkbox id={`duration-${duration.toLowerCase().replace(/\s+/g, '-')}`} />
                      <Label htmlFor={`duration-${duration.toLowerCase().replace(/\s+/g, '-')}`}>{duration}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="mb-2 font-medium">Hospital Rating</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Rating</SelectItem>
                    <SelectItem value="4.5">4.5+ Stars</SelectItem>
                    <SelectItem value="4">4+ Stars</SelectItem>
                    <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    <SelectItem value="3">3+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full">Apply Filters</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Main Content */}
        <div className="md:col-span-3 space-y-4">
          {/* Search Bar */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs by title, hospital, or location"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Mobile Filters */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Filter className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your job search results.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <h3 className="mb-2 font-medium">Specialty</h3>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Specialties" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Specialties</SelectItem>
                        {specialties.map((specialty) => (
                          <SelectItem key={specialty} value={specialty.toLowerCase().replace(/\s+/g, '-')}>
                            {specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 font-medium">Location</h3>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-mute

    </DashboardShell>

