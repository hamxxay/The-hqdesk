import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Users, Target, Award, Heart, Building2, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              About The HQ Desk
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We are on a mission to transform how professionals work by
              providing flexible, inspiring workspaces that foster productivity,
              collaboration, and growth.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-muted/30 py-16 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded in 2020, The HQ Desk began with a simple idea: work
                  should happen in spaces that inspire. What started as a single
                  shared office space has grown into a network of premium
                  workspaces across major cities.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We noticed that traditional office spaces were no longer
                  meeting the needs of modern professionals. Freelancers,
                  startups, and remote workers needed flexibility, community,
                  and environments designed for focus and creativity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we serve thousands of members who rely on The HQ Desk
                  for their daily productivity, important meetings, and
                  professional growth.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                  <Building2 className="h-10 w-10 text-primary mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">Locations</div>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    10K+
                  </div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    15
                  </div>
                  <div className="text-sm text-muted-foreground">Cities</div>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    98%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at The HQ Desk.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We strive for excellence in every detail, from workspace design
                to customer service, ensuring our members have the best possible
                experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Community
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of community. Our spaces are designed to
                foster connections, collaboration, and meaningful professional
                relationships.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Care
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We genuinely care about our members success. Every decision we
                make is guided by what will help our community thrive and grow.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the people driving our vision forward.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Sarah Chen", role: "CEO & Founder", initials: "SC" },
                { name: "Michael Torres", role: "COO", initials: "MT" },
                {
                  name: "Emily Johnson",
                  role: "Head of Design",
                  initials: "EJ",
                },
                { name: "David Kim", role: "CTO", initials: "DK" },
              ].map((member) => (
                <div
                  key={member.name}
                  className="bg-background rounded-xl p-6 text-center shadow-sm border border-border"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-semibold text-primary">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
