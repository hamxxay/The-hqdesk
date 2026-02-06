"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Calendar,
  LogIn,
  UserPlus,
  Home,
  Grid,
  Info,
  CreditCard,
  Album,
  UserCircle,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Grid className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">WorkNest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>

            <Link
              href="/booking"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive("/booking")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Calendar className="h-4 w-4" />
              Book Now
            </Link>

            <Link
              href="/pricing"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive("/pricing")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <CreditCard className="h-4 w-4" />
              Pricing
            </Link>

            <Link
              href="/gallery"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive("/gallery")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Album className="h-4 w-4" />
              Gallery
            </Link>

            <Link
              href="/about"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Info className="h-4 w-4" />
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              asChild
              className="text-foreground border-foreground hover:bg-foreground hover:text-background bg-transparent"
            >
              <Link href="/login" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            </Button>

            <Button
              asChild
              className="bg-primary hover:bg-secondary text-primary-foreground"
            >
              <Link href="/signup" className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Link>
            </Button>
            <Button
              asChild
              className="bg-primary hover:bg-secondary text-primary-foreground"
            >
              <Link href="/login" className="flex items-center gap-2">
                <UserCircle className="h-4 w-4" />
                Members Portal
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home", icon: Home },
                { href: "/booking", label: "Book Now", icon: Calendar },
                { href: "/pricing", label: "Pricing", icon: CreditCard },
                { href: "/gallery", label: "Gallery", icon: Album },
                { href: "/about", label: "About", icon: Info },
              ].map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2">
                <Button
                  variant="outline"
                  asChild
                  className="w-full text-foreground border-foreground bg-transparent"
                >
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Link>
                </Button>

                <Button
                  asChild
                  className="w-full bg-primary hover:bg-secondary text-primary-foreground"
                >
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-secondary text-primary-foreground"
                >
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <UserCircle className="h-4 w-4 mr-2" />
                    Members Portal
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
