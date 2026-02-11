"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Check, Crown, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Standard",
    icon: Zap,
    price: 29,
    description: "Flexible access for freelancers and solo founders.",
    features: ["5 hours / month", "High-speed WiFi", "Community events"],
  },
  {
    name: "Premium",
    icon: Star,
    price: 79,
    description: "Unlimited access for remote teams and power users.",
    features: ["Unlimited access", "Meeting rooms", "24/7 entry"],
    highlighted: true,
  },
  {
    name: "Executive",
    icon: Crown,
    price: 199,
    description: "Private offices with premium services included.",
    features: ["Private office", "Concierge support", "Guest passes"],
  },
];

export function PricingPreview() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {/* <p className="text-sm font-semibold text-primary">Pricing</p> */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Plans for every work style
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              Simple monthly pricing with no hidden fees. Pick the plan that
              matches your team and upgrade anytime.
            </p>
          </div>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-secondary"
            
          >
            <Link href="/pricing">See All Plans</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 shadow-sm ${
                plan.highlighted
                  ? "border-primary bg-primary text-primary-foreground shadow-primary/20"
                  : "border-border bg-background"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    plan.highlighted
                      ? "bg-primary-foreground/20"
                      : "bg-primary/10"
                  }`}
                >
                  <plan.icon
                    className={`h-5 w-5 ${
                      plan.highlighted
                        ? "text-primary-foreground"
                        : "text-primary"
                    }`}
                  />
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    plan.highlighted
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span
                  className={`text-3xl font-bold ${
                    plan.highlighted
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  /month
                </span>
              </div>
              <p
                className={`mt-3 text-sm ${
                  plan.highlighted
                    ? "text-primary-foreground/90"
                    : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check
                      className={`h-4 w-4 ${
                        plan.highlighted ? "text-accent" : "text-primary"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-6 w-full ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-secondary"
                }`}
              >
                <Link href="/pricing">Choose {plan.name}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
