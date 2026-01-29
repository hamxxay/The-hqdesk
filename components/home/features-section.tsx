import { Clock, CalendarCheck, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "Real-Time Availability",
    description:
      "View live workspace availability and book instantly without conflicts or double-bookings.",
    borderColor: "border-primary",
  },
  {
    icon: CalendarCheck,
    title: "Easy Booking Process",
    description:
      "Simple three-click booking process with calendar integration and instant confirmations.",
    borderColor: "border-accent",
  },
  {
    icon: Building,
    title: "Premium Workspaces",
    description:
      "Access fully-equipped workspaces with high-speed internet, meeting rooms, and premium amenities.",
    borderColor: "border-primary",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className={`bg-card border-2 ${feature.borderColor} shadow-md hover:shadow-lg transition-shadow`}
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <feature.icon className="h-8 w-8 text-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
