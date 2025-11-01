"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { UsefulFeatureData } from "./data";

export default function UsefulFeature() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-20 max-w-[1440px] mx-auto">
      <div className="max-w-4xl text-center mb-16 mx-auto">
        <h2 className="text-[#012025] text-center text-4xl md:text-[56px] font-bold leading-[1.12] tracking-[-1px] px-4">
          More Useful Features
        </h2>
        <p className="text-[#454140] mt-3">
          Generate and push your clinical notes to EHR/EMR in few clicks, with
          SmartNotes AI
        </p>
      </div>

      <div className="our-values-slider">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-values",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="!pb-5"
        >
          {UsefulFeatureData.map((value, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F1F5F8] rounded-2xl p-8 h-[520px] md:h-[490px] flex flex-col">
                <div className="relative w-[60px] h-[68px] mb-10">
                  <div className="relative">{value.icon}</div>
                </div>
                <h3 className="font-satoshi text-[23px] font-bold leading-[34px] text-[#120A0B] mb-2">
                  {value.title}
                </h3>
                <p className="font-satoshi text-[16px] font-normal leading-[21.2px] text-[#454140]">
                  {value.description}
                </p>
                <ul className="space-y-2 list-disc ml-5 text-[#454140] text-[16px] font-normal leading-[21.2px] mt-4">
                  {value.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-values flex justify-center gap-2 mt-8"></div>
      </div>
    </section>
  );
}
