import React from "react";
import FeatureHero from "@/components/features/FeaturesHero";
import CoreFeatures from "@/components/features/CoreFeatures";
import UsefulFeature from "@/components/features/UsefulFeature";
import FeaturesMatter from "@/components/features/FeaturesMatter";
import BlueGradientBanner from "@/components/features/BlueGradientBanner";
import CTASection from "@/components/features/CTASection";
import { Footer } from "@/components/home/Footer";
import Header from "@/components/home/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <FeatureHero />
        <CoreFeatures />
        <UsefulFeature />
        <FeaturesMatter />
        <BlueGradientBanner />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
