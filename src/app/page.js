import { BannerSection } from "@/components/home/BannerSection";
import { CTA } from "@/components/home/CTA";
import { FAQ } from "@/components/home/FAQ";
import { Footer } from "@/components/home/Footer";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import Hero from "@/components/home/Hero";
import KeyCapabilities from "@/components/home/KeyCapabilities";
import Stats from "@/components/home/Stats";
import Workflow from "@/components/home/Workflow";

export default function Page() {
  return (
    <main>
      <Hero />
      <Workflow />
      <KeyCapabilities />
      <Stats />
      <BannerSection />
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
