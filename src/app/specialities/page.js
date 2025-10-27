import { Footer } from "@/components/home/Footer";
import Specialities from "@/components/specialities/Specialities";
import SpecialitiesHero from "@/components/specialities/SpecialitiesHero";
import React from "react";

export default function Page() {
  return (
    <div>
      <SpecialitiesHero />
      <Specialities/>
      <Footer/>
    </div>
  );
}
