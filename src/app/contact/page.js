import React from "react";
import ContactUs from "@/components/contact";
import PartnerSection from "@/components/contact/PartnerSection";
import SupportQuestions from "@/components/contact/SupportQuestions";
import { Footer } from "@/components/home/Footer";
import Header from "@/components/home/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ContactUs />
        <SupportQuestions />
        <PartnerSection />
      </main>
      <Footer />
    </>
  );
}
