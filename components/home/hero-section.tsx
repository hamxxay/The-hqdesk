import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, UserPlus } from "lucide-react";
import { WaveAnimation } from "@/components/wave-animation";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-0 md:pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto pb-16 md:pb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            The HQ Desk
          </h1>
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-8 text-pretty">
            Discover and book premium workspaces in shared office environments.
            Find your perfect workspace today with real-time availability and
            instant booking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground shadow-lg shadow-primary/25 px-8"
            >
              <Link href="/booking">
                <Calendar className="h-5 w-5 mr-2" />
                Book Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 bg-transparent"
            >
              <Link href="/signup">
                <UserPlus className="h-5 w-5 mr-2" />
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[300px]">
        <WaveAnimation className="absolute inset-0 w-full h-full" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-32 right-[15%] w-2 h-2 bg-accent/30 rounded-full animate-pulse delay-300" />
        <div className="absolute top-40 left-[25%] w-4 h-4 bg-secondary/15 rounded-full animate-pulse delay-500" />
        <div className="absolute top-16 right-[30%] w-2.5 h-2.5 bg-primary/25 rounded-full animate-pulse delay-700" />
        <div className="absolute top-48 left-[5%] w-2 h-2 bg-accent/20 rounded-full animate-pulse delay-100" />
        <div className="absolute top-24 right-[8%] w-3.5 h-3.5 bg-secondary/20 rounded-full animate-pulse delay-200" />
        <div className="absolute top-56 left-[40%] w-2 h-2 bg-primary/15 rounded-full animate-pulse delay-400" />
        <div className="absolute top-12 left-[60%] w-3 h-3 bg-accent/25 rounded-full animate-pulse delay-600" />
        <div className="absolute top-36 right-[45%] w-2 h-2 bg-secondary/25 rounded-full animate-pulse delay-800" />
        <div className="absolute top-52 right-[20%] w-4 h-4 bg-primary/10 rounded-full animate-pulse delay-150" />

        {/* Larger subtle shapes */}
        <div className="absolute top-28 left-[70%] w-16 h-16 border border-primary/10 rounded-full" />
        <div className="absolute top-44 left-[15%] w-12 h-12 border border-accent/10 rounded-full" />
        <div className="absolute top-8 right-[25%] w-20 h-20 border border-secondary/10 rounded-full" />
      </div>
    </section>
  );
}
