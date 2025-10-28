import { Footer } from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Specialities from "@/components/specialities/Specialities";
import SpecialitiesHero from "@/components/specialities/SpecialitiesHero";
import React from "react";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <SpecialitiesHero />
        <Specialities />
      </main>
      <Footer />
    </>
  );
}
