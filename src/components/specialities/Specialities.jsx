import Link from "next/link";
import React from "react";
import { cardData } from "./data";

export default function Specialities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10 lg:px-20 md:-mt-[15vw] -mt-[40vw] relative z-10 mb-20">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="p-10 rounded-2xl bg-white shadow-[0_55px_60px_0_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-2 duration-300"
        >
          {/* Dummy SVG */}
          {card.svg}

          {/* Content */}
          <h2 className="text-2xl mb-3 font-semibold">{card.title}</h2>
          <p className="mb-8 text-[#454140]">{card.description}</p>
          <Link
            href={card.url}
            className="flex items-center gap-2 text-primary hover:text-primary/90"
          >
            Learn More
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.82083L3.71005 5L0 1.17917L1.14498 0L6 5L1.14498 10L0 8.82083Z"
                fill="#2166FF"
              />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
