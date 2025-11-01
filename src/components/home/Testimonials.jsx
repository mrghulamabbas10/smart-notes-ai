"use client";
import { StarIcon } from "../assets/star-icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section className="w-full bg-white py-16 lg:py-[130px] px-6 lg:px-[100px]">
      <div className="container mx-auto max-w-[1200px]">
        <div className="text-center mb-12 lg:mb-[60px]">
          <h2 className="text-4xl lg:text-[56px] font-bold leading-tight">
            What our users are saying
          </h2>
          <p className="text-lg text-gray-600 max-w-[583px] mx-auto">
            Simplify project planning, streamline collaboration, and boost
            productivity all with SmartNotes AI.
          </p>
        </div>

        {/* ✅ Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="border border-[#F8F4F1] rounded-[20px] p-8 lg:p-[35px] flex flex-col h-[340px] md:h-[400px] bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-1 mb-6 lg:mb-8">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 lg:w-8 lg:h-8" />
                  ))}
                </div>

                <div className="flex-1 space-y-4 lg:space-y-[22px]">
                  <h4 className="text-xl lg:text-2xl font-medium text-gray-600-dark leading-snug">
                    {testimonial.quote}
                  </h4>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8 lg:mt-[32px]">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-base text-gray-600-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
