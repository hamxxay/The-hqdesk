"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Users, Wifi, Coffee, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

const workspaces = [
  {
    id: 1,
    name: "Premium Private Office",
    type: "Private Office",
    location: "Downtown Financial District",
    capacity: "1-2 people",
    price: 45,
    amenities: ["Standing desk", "High-speed WiFi", "Printing access"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    available: true,
  },
  {
    id: 2,
    name: "Co-Working Hot Desk",
    type: "Co-Working Space",
    location: "Creative Arts Quarter",
    capacity: "Open seating",
    price: 25,
    amenities: ["Coffee bar", "Collaborative atmosphere", "Natural light"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    available: true,
  },
  {
    id: 3,
    name: "Executive Meeting Room",
    type: "Meeting Room",
    location: "Tech Innovation Hub",
    capacity: "8-12 people",
    price: 75,
    amenities: ["Video conferencing", "Whiteboard", "Catering available"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop",
    available: true,
  },
  {
    id: 4,
    name: "Modern Startup Space",
    type: "Private Office",
    location: "Innovation District",
    capacity: "4-6 people",
    price: 85,
    amenities: ["24/7 access", "Kitchen", "Phone booths"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    available: false,
  },
]

export function WorkspaceGallery() {
  const [selectedWorkspace, setSelectedWorkspace] = useState<typeof workspaces[0] | null>(null)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const handleBookNow = (workspace: typeof workspaces[0]) => {
    setSelectedWorkspace(workspace)
    setBookingConfirmed(false)
  }

  const confirmBooking = () => {
    setBookingConfirmed(true)
  }

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Workspace Gallery
        </h2>
        <p className="text-muted-foreground">
          Browse available workspaces and find your perfect fit
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workspaces.map((workspace) => (
          <Card
            key={workspace.id}
            className={`overflow-hidden border ${
              workspace.available ? "border-primary" : "border-muted"
            } shadow-md hover:shadow-lg transition-shadow`}
          >
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={workspace.image || "/placeholder.svg"}
                  alt={workspace.name}
                  fill
                  className="object-cover"
                />
                <Badge
                  className={`absolute top-3 right-3 ${
                    workspace.available
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {workspace.available ? "Available" : "Booked"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {workspace.name}
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {workspace.location}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Capacity: {workspace.capacity}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <Wifi className="h-4 w-4 text-primary" />
                  {workspace.amenities.slice(0, 2).map((amenity, index) => (
                    <span key={amenity}>
                      {amenity}
                      {index < 1 && ","}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between">
              <p className="text-lg font-bold text-foreground">
                ${workspace.price}
                <span className="text-sm font-normal text-muted-foreground">/day</span>
              </p>
              <Button
                onClick={() => handleBookNow(workspace)}
                disabled={!workspace.available}
                className={
                  workspace.available
                    ? "bg-primary hover:bg-secondary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }
              >
                {workspace.available ? "Book Now" : "Unavailable"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Booking Dialog */}
      <Dialog open={!!selectedWorkspace} onOpenChange={() => setSelectedWorkspace(null)}>
        <DialogContent className="sm:max-w-md">
          {!bookingConfirmed ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-foreground">Confirm Booking</DialogTitle>
                <DialogDescription>
                  You are about to book the following workspace:
                </DialogDescription>
              </DialogHeader>
              {selectedWorkspace && (
                <div className="space-y-4 py-4">
                  <div className="relative h-40 w-full rounded-lg overflow-hidden">
                    <Image
                      src={selectedWorkspace.image || "/placeholder.svg"}
                      alt={selectedWorkspace.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{selectedWorkspace.name}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4" />
                      {selectedWorkspace.location}
                    </p>
                    <p className="text-lg font-bold text-primary mt-2">
                      ${selectedWorkspace.price}/day
                    </p>
                  </div>
                </div>
              )}
              <DialogFooter className="flex gap-2">
                <Button variant="outline" onClick={() => setSelectedWorkspace(null)} className="text-foreground border-foreground">
                  Cancel
                </Button>
                <Button onClick={confirmBooking} className="bg-primary hover:bg-secondary text-primary-foreground">
                  Confirm Booking
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-foreground flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  Booking Confirmed!
                </DialogTitle>
                <DialogDescription>
                  Your workspace has been successfully booked.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  Workspace booked successfully! You will receive a confirmation email shortly.
                </p>
              </div>
              <DialogFooter>
                <Button onClick={() => setSelectedWorkspace(null)} className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                  Done
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
