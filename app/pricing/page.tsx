import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Standard",
    icon: Zap,
    price: 29,
    period: "month",
    description:
      "Perfect for freelancers and individuals who need occasional workspace access.",
    features: [
      "5 hours of workspace access per month",
      "Access to common areas",
      "High-speed WiFi",
      "Coffee & refreshments",
      "Basic meeting room access (2 hrs/month)",
      "Community events access",
    ],
    highlighted: false,
    buttonText: "Get Started",
  },
  {
    name: "Premium",
    icon: Star,
    price: 79,
    period: "month",
    description:
      "Ideal for remote workers and small teams needing regular workspace access.",
    features: [
      "Unlimited workspace access",
      "Dedicated desk options",
      "High-speed WiFi & printing",
      "Coffee, refreshments & snacks",
      "Meeting room access (10 hrs/month)",
      "Phone booth access",
      "Networking events priority",
      "24/7 building access",
    ],
    highlighted: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Executive",
    icon: Crown,
    price: 199,
    period: "month",
    description:
      "For established professionals and teams requiring premium amenities and privacy.",
    features: [
      "Private office space",
      "Unlimited meeting room access",
      "Executive lounge access",
      "Dedicated phone line",
      "Mail handling & business address",
      "On-site IT support",
      "Guest passes (5/month)",
      "Priority parking",
      "Personal storage locker",
      "Concierge services",
    ],
    highlighted: false,
    buttonText: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Choose the plan that fits your work style. All plans include
              access to our premium workspace amenities and supportive
              community.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/25 scale-105"
                    : "bg-background border border-border shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      plan.highlighted
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <plan.icon
                      className={`h-6 w-6 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <span
                    className={`text-4xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  >
                    /{plan.period}
                  </span>
                </div>

                <p
                  className={`mb-6 text-sm leading-relaxed ${
                    plan.highlighted
                      ? "text-primary-foreground/90"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`h-5 w-5 shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-accent" : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted
                            ? "text-primary-foreground/90"
                            : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-secondary"
                  }`}
                >
                  <Link href="/signup">{plan.buttonText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "Can I switch plans at any time?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
                },
                {
                  question: "Is there a free trial available?",
                  answer:
                    "Yes! The Premium plan includes a 7-day free trial so you can experience all the benefits before committing.",
                },
                {
                  question: "Are there any long-term commitments?",
                  answer:
                    "No, all our plans are month-to-month with no long-term contracts. You can cancel anytime.",
                },
                {
                  question: "Can I bring guests to the workspace?",
                  answer:
                    "Standard and Premium members can bring guests for a day pass fee. Executive members receive 5 complimentary guest passes per month.",
                },
                {
                  question: "Do you offer team or enterprise pricing?",
                  answer:
                    "Yes, we offer custom pricing for teams of 5 or more. Contact our sales team to discuss your needs.",
                },
              ].map((faq) => (
                <div
                  key={faq.question}
                  className="bg-background rounded-xl p-6 border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Book a free tour of our workspace and speak with our team to find
              the perfect plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/booking">Book a Tour</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
