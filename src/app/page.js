import { BannerSection } from "@/components/home/BannerSection";
import { CTA } from "@/components/home/CTA"; 
import { Footer } from "@/components/home/Footer";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import Hero from "@/components/home/Hero";
import KeyCapabilities from "@/components/home/KeyCapabilities";
import Stats from "@/components/home/Stats";
import Workflow from "@/components/home/Workflow";
import Header from "@/components/home/Header";
import UsefulFeature from "@/components/features/UsefulFeature";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Workflow />
        <KeyCapabilities />
        <UsefulFeature />
        <Stats />
        <BannerSection />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
