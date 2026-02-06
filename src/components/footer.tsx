import Link from "next/link";
import { Grid, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Grid className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">WorkNest</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Premium workspace booking platform connecting professionals with
              top-tier shared office spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Book a Space
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-background/70 text-sm">Private Offices</li>
              <li className="text-background/70 text-sm">Co-Working Spaces</li>
              <li className="text-background/70 text-sm">Meeting Rooms</li>
              <li className="text-background/70 text-sm">Event Spaces</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                hello@worknest.com
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                +92 300 1234567
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                I-8 markaz, Islamabad, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} WorkNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
