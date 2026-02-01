"use client";

import React from "react";

import { useState } from "react";
import Link from "next/link";
import { Grid, Mail, ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Simulate password reset - in production, this would be a real API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setMessage("Password reset link sent! Please check your email inbox.");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
      <Card className="w-full max-w-md border-primary shadow-lg">
        <CardHeader className="text-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Grid className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              The HQ Desk
            </span>
          </Link>
          <CardTitle className="text-2xl font-bold text-foreground">
            Reset Password
          </CardTitle>
          <CardDescription>
            {isSubmitted
              ? "Check your email for the reset link"
              : "Enter your email to receive a password reset link"}
          </CardDescription>
        </CardHeader>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-input focus:border-primary"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Send Reset Link
                  </>
                )}
              </Button>
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to login
              </Link>
            </CardFooter>
          </form>
        ) : (
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground mb-4">{message}</p>
              <p className="text-sm text-muted-foreground">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage("");
                  }}
                  className="text-primary hover:text-secondary font-medium"
                >
                  try again
                </button>
              </p>
            </div>
            <Link href="/login">
              <Button
                variant="outline"
                className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to login
              </Button>
            </Link>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
