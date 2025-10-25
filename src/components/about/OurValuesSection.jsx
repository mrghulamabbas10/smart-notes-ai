"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { valuesData } from "./data";

export default function OurValuesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
      <h2 className="text-[#012025] text-center font-urbanist text-4xl md:text-[56px] font-bold leading-[1.12] tracking-[-1px] mb-12 md:mb-16 px-4">
        Our Values Guide Everything We Build
      </h2>

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
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          className="!pb-5"
        >
          {valuesData.map((value, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F1F5F8] rounded-2xl p-8 h-[291px] flex flex-col">
                <div className="relative w-[60px] h-[68px] mb-20">
                  <div className="relative">{value.icon}</div>
                </div>
                <h3 className="font-satoshi text-[23px] font-bold leading-[34px] text-[#120A0B] mb-3">
                  {value.title}
                </h3>
                <p className="font-satoshi text-[16px] font-normal leading-[21.2px] text-[#454140]">
                  {value.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-values flex justify-center gap-2 mt-8"></div>
      </div>
    </section>
  );
}
