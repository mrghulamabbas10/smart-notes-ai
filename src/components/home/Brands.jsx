import React from "react";

import Marquee from "react-fast-marquee";

export default function Brands() {
  return (
    <Marquee>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
        <img
          src="/images/brand1.png?width=287"
          alt="NextGen"
          className="h-10 transition hover:opacity-100"
        />
        <img
          src="/images/brand2.png?width=293"
          alt="Athena Health"
          className="h-5 transition hover:opacity-100"
        />
        <img
          src="/images/brand3.png?width=240"
          alt="Practice Fusion"
          className="h-4 transition hover:opacity-100"
        />
        <img
          src="/images/brand4.png?width=164"
          alt="eClinicalWorks"
          className="h-10 transition hover:opacity-100"
        />
        <img
          src="/images/brand5.png?width=154"
          alt="Oracle Cerner"
          className="h-6 transition hover:opacity-100"
        />
        <img
          src="/images/brand6.png?width=254"
          alt="CareCloud"
          className="h-8 transition hover:opacity-100"
        />
        <img
          src="/images/brand4.png?width=164"
          alt="eClinicalWorks"
          className="h-10 transition hover:opacity-100"
        />
      </div>
    </Marquee>
  );
}
