import { Users, Building2, CalendarDays, Smile } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const stats = [
  {
    icon: Users,
    value: "5,678",
    label: "Active Users",
    change: "+12%",
    changeLabel: "vs last month",
    borderColor: "border-accent",
  },
  {
    icon: Building2,
    value: "1,234",
    label: "Workspaces",
    change: "+8%",
    changeLabel: "vs last month",
    borderColor: "border-accent",
  },
  {
    icon: CalendarDays,
    value: "15,890",
    label: "Bookings",
    change: "+24%",
    changeLabel: "vs last month",
    borderColor: "border-accent",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Satisfaction Rate",
    change: "+5%",
    changeLabel: "vs last month",
    borderColor: "border-accent",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
          Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className={`bg-card border ${stat.borderColor} shadow-md`}
            >
              <CardContent className="pt-6 pb-4 px-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-primary">
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stat.changeLabel}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
