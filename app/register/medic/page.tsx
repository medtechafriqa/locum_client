"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { FileUploader } from "@/components/file-uploader"
import { Checkbox } from "@/components/ui/checkbox"

export default function MedicRegistration() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Registration submitted",
      description: "Your medical professional registration has been submitted for verification.",
    })

    setLoading(false)
  }

  return (
    <div className="container max-w-4xl py-10">
      <div className="mb-8 space-y-4 text-center">
        <h1 className="text-3xl font-bold">Medical Professional Registration</h1>
        <p className="text-muted-foreground">
          Create your profile to find locum opportunities that match your skills and preferences.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Professional Information</CardTitle>
          <CardDescription>Please provide your details for registration.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal" disabled={step !== 1}>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger value="professional" disabled={step !== 2}>
                  Professional Details
                </TabsTrigger>
                <TabsTrigger value="verification" disabled={step !== 3}>
                  Verification
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 pt-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First name" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last name" required />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Email address" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Phone number" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Street address" required />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input id="state" placeholder="State/Province" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="zipCode">Zip/Postal Code</Label>
                      <Input id="zipCode" placeholder="Zip/Postal Code" required />
                    </div>
                  </div>
                </div>

                <Button type="button" onClick={() => setStep(2)} className="w-full">
                  Continue to Professional Details
                </Button>
              </TabsContent>

              <TabsContent value="professional" className="space-y-4 pt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="profession">Profession</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your profession" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="doctor">Doctor</SelectItem>
                        <SelectItem value="nurse">Nurse</SelectItem>
                        <SelectItem value="specialist">Medical Specialist</SelectItem>
                        <SelectItem value="technician">Medical Technician</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="specialty">Specialty</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your specialty" />
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
                    <Label>Skills & Qualifications</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Basic Life Support (BLS)",
                        "Advanced Cardiac Life Support (ACLS)",
                        "Pediatric Advanced Life Support (PALS)",
                        "Trauma Care",
                        "Critical Care",
                        "Surgical Assistance",
                        "Ultrasound",
                        "Ventilator Management",
                      ].map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Checkbox id={skill.replace(/\s+/g, "-").toLowerCase()} />
                          <Label htmlFor={skill.replace(/\s+/g, "-").toLowerCase()}>{skill}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="11-15">11-15 years</SelectItem>
                        <SelectItem value="16+">16+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Brief description of your professional background"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-full">
                    Back
                  </Button>
                  <Button type="button" onClick={() => setStep(3)} className="w-full">
                    Continue to Verification
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="verification" className="space-y-4 pt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="licenseNumber">Professional License Number</Label>
                    <Input id="licenseNumber" placeholder="License number" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="licenseState">Licensing State/Region</Label>
                    <Input id="licenseState" placeholder="State or region of licensure" required />
                  </div>

                  <div className="grid gap-2">
                    <Label>Upload Professional License</Label>
                    <FileUploader
                      accept=".pdf,.jpg,.jpeg,.png"
                      maxSize={5}
                      label="Drag and drop your license or click to browse"
                    />
                    <p className="text-xs text-muted-foreground">Accepted file types: PDF, JPG, PNG. Max size: 5MB</p>
                  </div>

                  <div className="grid gap-2">
                    <Label>Upload CV/Resume</Label>
                    <FileUploader
                      accept=".pdf,.doc,.docx"
                      maxSize={10}
                      label="Drag and drop your CV/resume or click to browse"
                    />
                    <p className="text-xs text-muted-foreground">Accepted file types: PDF, DOC, DOCX. Max size: 10MB</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="w-full">
                    Back
                  </Button>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? "Submitting..." : "Complete Registration"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t px-6 py-4">
          <p className="text-sm text-muted-foreground">
            By registering, you agree to our{" "}
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
    </div>
  )
}

