export default function MissionVisionSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0066FF] to-[#00A3FF] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden ">
              <img
                src="/images/Our Mission.png?width=1234"
                alt="Medical professional with patient"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="">
              <h2 className="text-white font-urbanist text-[33px] font-bold leading-[1.9] tracking-[-1px] mb-4">
                Our Mission
              </h2>
              <p className="text-[#F3F3F3] font-urbanist text-[16px] leading-[24px]">
                SmartNotes AI simplifies the clinical documentation process by
                converting conversations into structured notes, improving
                billing accuracy, and integrating with existing healthcare
                systems. Our mission is to help providers focus more on care—and
                less on screens.
              </p>
            </div>
          </div>

          <div className="space-y-6 flex flex-col justify-between gap-5">
            <div className="bg-[#CDC8FF] rounded-xl p-8 flex flex-col gap-20">
              <div className="inline-block bg-white rounded-full px-4 py-1 w-fit">
                <span className="text-black font-urbanist text-[16px] font-bold">
                  Inventory status
                </span>
              </div>
              <h3 className="text-black font-urbanist text-[22px] font-bold leading-[26px] mb-2">
                Loved by Many Healthcare Professionals & Trusted by Multiple
                Partner Organizations
              </h3>
            </div>

            <div className="bg-[#E3FFDB] rounded-xl p-8 flex flex-col gap-20">
              <div className="inline-block bg-white rounded-full px-4 py-1 w-fit ml-auto">
                <span className="text-black font-urbanist text-[16px] font-bold">
                  Satisfied Customers
                </span>
              </div>
              <div>
                <h3 className="text-black font-urbanist text-[45px] font-bold leading-[1.4] tracking-[-1px] mb-2">
                  98%
                </h3>
                <p className="text-black font-urbanist text-[20px] leading-[26px]">
                  Our Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-white font-urbanist text-[33px] font-bold tracking-[-1px]">
                Our Vision
              </h2>
              <p className="text-[#F3F3F3] font-urbanist text-[16px] leading-[24px]">
                Our vision is to transform clinical note-taking through
                intelligent automation—empowering healthcare professionals to
                deliver better care with less admin. SmartNotes AI ensures that
                every note is structured, accurate, and completed in seconds,
                not hours.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden  mt-10">
              <img
                src="/images/Our Vision.png?width=1278"
                alt="Healthcare professionals reviewing data"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
