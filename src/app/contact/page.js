import ContactUs from "@/components/contact";
import PartnerSection from "@/components/contact/PartnerSection";
import SupportQuestions from "@/components/contact/SupportQuestions";
import { Footer } from "@/components/home/Footer";
import React from "react";

export default function Page() {
  return (
    <main>
      <ContactUs />
      <SupportQuestions />
      <PartnerSection />
      <Footer />
    </main>
  );
}
