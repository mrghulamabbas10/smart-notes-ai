import AboutHero from "@/components/about/Hero";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import { NotesCTA } from "@/components/about/NotesCTA";
import OurApproachSection from "@/components/about/OurApproachSection";
import OurValuesSection from "@/components/about/OurValuesSection";
import WhatWeBelieveSection from "@/components/about/WhatWeBelieveSection";
import { Footer } from "@/components/home/Footer";
import React from "react";

export default function Page() {
  return (
    <main>
      <AboutHero />
      <OurValuesSection />
      <MissionVisionSection />
      <WhatWeBelieveSection />
      <OurApproachSection />
      <NotesCTA />
      <Footer />
    </main>
  );
}
