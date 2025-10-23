export default function Stats() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-32 mt-10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF] via-[#2166FF] to-[#0033CC]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6  text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]">
            Powering Smarter Healthcare,
            <br />
            One Note at a Time
          </h2>
          <p className="mx-auto max-w-4xl  text-lg font-medium text-[#F3F3F3] sm:text-xl">
            At <span className="underline">SmartNotes AI,</span> we are
            redefining how medical documentation works. Our mission is to
            eliminate the burden of manual note-taking and empower physicians
            with the most advanced AI clinical note-taking solution in the
            industry.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {/* Stat 1 - Loved by Many */}
          <div className="flex items-center justify-center rounded-xl bg-[#C8EDFF] p-12 lg:p-16">
            <h3 className="text-center  text-3xl font-bold uppercase leading-tight text-[#717A7C] sm:text-4xl lg:text-[36px]">
              Loved by Many
              <br />
              Healthcare
              <br />
              Professionals
            </h3>
          </div>

          {/* Stat 2 - 98% Satisfaction */}
          <div className="flex items-center justify-center gap-6 rounded-xl bg-[#CDC8FF] p-12 lg:p-16">
            <div>
              <img
                src="/images/docter.png?width=200"
                alt="Doctor"
                className="w-full h-[200px]"
              />
            </div>
            <div className="text-center">
              <div className="mb-2  text-6xl font-medium text-[#012025] sm:text-7xl lg:text-[100px]">
                98%
              </div>
              <p className=" text-lg font-medium text-[#012025] sm:text-xl">
                Satisfaction Rate
              </p>
            </div>
          </div>

          {/* Stat 3 - 35,400+ Startups */}
          <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-[#E3FFDB] p-12 lg:p-16">
            <div className="text-center  text-6xl font-medium leading-none text-[#012025] sm:text-7xl lg:text-[100px]">
              35,400+
            </div>
            <p className="text-center  text-lg font-medium text-[#717A7C] sm:text-xl">
              Startups ready to be connected
            </p>
          </div>

          {/* Stat 4 - Trusted by Organizations */}
          <div className="flex items-center justify-center rounded-xl bg-[#69E7FB] p-12 lg:p-16">
            <h3 className="text-center  text-3xl font-bold uppercase leading-tight text-[#012025] sm:text-4xl lg:text-[36px]">
              Trusted
              <br />
              by Multiple
              <br />
              Partner
              <br />
              Organizations
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
