// import { Navbar } from "../components/navbar";
"use client";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/home/hero-section";
import { FeaturesSection } from "../components/home/features-section";
import { StatsSection } from "../components/home/stats-section";
import { AboutSection } from "../components/home/about-section";
import MainHeroImage from "../components/home/MainHeroImage";
import Canvas from "../components/home/Canvas";
import { Navbar } from "../components/navbar";
import LazyShow from "../components/home/LazyShow";
import WhatsAppButton from "../components/ui/whataspp-button";

export default function HomePage() {
  return (
    <main className={`bg-background grid gap-y-16 overflow-hidden`}>
      <Navbar />
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <HeroSection />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <FeaturesSection />
          <Canvas />
        </>
      </LazyShow>

      <StatsSection />
      {/* <AboutSection /> */}
      <Footer />
      <>
        {/* Your website content */}
        <WhatsAppButton
          phoneNumber="923160577702"
          message="Hi! I'm interested in your services."
        />
      </>
    </main>
  );
}
