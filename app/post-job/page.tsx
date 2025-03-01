"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PostJobPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Job posted successfully",
      description: "Your job posting has been published and is now visible to medical professionals.",
    })

    router.push("/hospital-dashboard")
  }

  const certifications = [
    { id: "bls", label: "Basic Life Support (BLS)" },
    { id: "acls", label: "Advanced Cardiac Life Support (ACLS)" },
    { id: "pals", label: "Pediatric Advanced Life Support (PALS)" },
    { id: "atls", label: "Advanced Trauma Life Support (ATLS)" },
    { id: "nrp", label: "Neonatal Resuscitation Program (NRP)" },
    { id: "cpr", label: "CPR Certification" },
  ]

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Post a New Job"
        text="Create a new job posting to find qualified medical professionals."
      />

      <Card>
        <CardHeader>
          <CardTitle>Job Details</CardTitle>
          <CardDescription>Provide information about the job opening.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="basic" disabled={step !== 1}>
                  Basic Info
                </TabsTrigger>
                <TabsTrigger value="requirements" disabled={step !== 2}>
                  Requirements
                </TabsTrigger>
                <TabsTrigger value="schedule" disabled={step !== 3}>
                  Schedule & Pay
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4 pt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input id="jobTitle" placeholder="e.g., Emergency Physician - Weekend Shifts" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="specialty">Specialty</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency Medicine</SelectItem>
                        <SelectItem value="anesthesiology">Anesthesiology</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="dermatology">Dermatology</SelectItem>
                        <SelectItem value="family">Family Medicine</SelectItem>
                        <SelectItem value="internal">Internal Medicine</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="obstetrics">Obstetrics & Gynecology</SelectItem>
                        <SelectItem value="oncology">Oncology</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="psychiatry">Psychiatry</SelectItem>
                        <SelectItem value="surgery">Surgery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" placeholder="e.g., Emergency Department, Surgical Wing" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g., Main Campus, North Wing, 3rd Floor" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="description">Job Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Detailed description of the job responsibilities and requirements"
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                </div>

                <Button type="button" onClick={() => setStep(2)} className="w-full">
                  Continue to Requirements
                </Button>
              </TabsContent>

              <TabsContent value="requirements" className="space-y-4 pt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select required experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No minimum (Entry level)</SelectItem>
                        <SelectItem value="1">At least 1 year</SelectItem>
                        <SelectItem value="2">At least 2 years</SelectItem>
                        <SelectItem value="3">At least 3 years</SelectItem>
                        <SelectItem value="5">At least 5 years</SelectItem>
                        <SelectItem value="10">At least 10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label>Required Certifications</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {certifications.map((certification) => (
                        <div key={certification.id} className="flex items-center space-x-2">
                          <Checkbox id={certification.id} />
                          <Label htmlFor={certification.id}>{certification.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="skills">Required Skills</Label>
                    <Textarea
                      id="skills"
                      placeholder="List specific skills required for this position"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="education">Education Requirements</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="md">MD (Doctor of Medicine)</SelectItem>
                        <SelectItem value="do">DO (Doctor of Osteopathic Medicine)</SelectItem>
                        <SelectItem value="rn">RN (Registered Nurse)</SelectItem>
                        <SelectItem value="np">NP (Nurse Practitioner)</SelectItem>
                        <SelectItem value="pa">PA (Physician Assistant)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-full">
                    Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)} className="w-full">
                    Continue to Schedule & Pay
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4 pt-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Start Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !startDate && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? format(startDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="grid gap-2">
                      <Label>End Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !endDate && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {endDate ? format(endDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="shiftType">Shift Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shift type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day">Day Shift</SelectItem>
                        <SelectItem value="night">Night Shift</SelectItem>
                        <SelectItem value="evening">Evening Shift</SelectItem>
                        <SelectItem value="weekend">Weekend</SelectItem>
                        <SelectItem value="on-call">On-Call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="hoursPerShift">Hours per Shift</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select hours" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4">4 hours</SelectItem>
                          <SelectItem value="8">8 hours</SelectItem>
                          <SelectItem value="10">10 hours</SelectItem>
                          <SelectItem value="12">12 hours</SelectItem>
                          <SelectItem value="24">24 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="shiftsPerWeek">Shifts per Week</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select shifts" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 shift</SelectItem>
                          <SelectItem value="2">2 shifts</SelectItem>
                          <SelectItem value="3">3 shifts</SelectItem>
                          <SelectItem value="4">4 shifts</SelectItem>
                          <SelectItem value="5">5 shifts</SelectItem>
                          <SelectItem value="6">6 shifts</SelectItem>
                          <SelectItem value="7">7 shifts</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                    <Input id="hourlyRate" type="number" placeholder="e.g., 200" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="additionalCompensation">Additional Compensation</Label>
                    <Textarea
                      id="additionalCompensation"
                      placeholder="e.g., Housing allowance, travel reimbursement, meal stipend"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="w-full">
                    Back
                  </Button>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Posting Job..." : "Post Job"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t px-6 py-4">
          <p className="text-sm text-muted-foreground">
            By posting a job, you agree to our{" "}
            <a href="/terms" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </DashboardShell>
  )
}

