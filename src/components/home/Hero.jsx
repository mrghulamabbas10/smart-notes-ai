import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#EFF9FF] via-[#EFF9FF] to-[#FFF9EF]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fd72e36943bf40025f4529e03abb650aca4206ac?width=2884"
          alt=""
          className="h-full w-full object-cover opacity-50"
        />
      </div>

      {/* Navigation */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:py-20 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading with Icons */}
          <h1 className="text-center lg:text-5xl text-4xl font-bold leading-tight text-[#00234B] sm:text-6xl lg:text-[92px]">
            Transforming Clinical
          </h1>

          <div className="relative mb-8 flex flex-wrap items-center justify-center gap-4">
            <img
              src="/images/text-icon-1.png?width=252"
              alt="Document icon"
              className="h-10 w-10 sm:h-24 sm:w-24 lg:h-32 lg:w-32"
            />
            <h1 className=" lg:text-5xl text-4xl font-bold leading-tight text-[#00234B] sm:text-6xl lg:text-[92px]">
              Notes
            </h1>
            <h1 className=" lg:text-5xl text-4xl font-bold leading-tight text-[#00234B] sm:text-6xl lg:text-[92px]">
              with
            </h1>
            <img
              src="/images/text-icon-2.png?width=266"
              alt="AI icon"
              className="h-10 w-10 sm:h-24 sm:w-24 lg:h-32 lg:w-32 md:block hidden"
            />
            <h1 className=" lg:text-5xl text-3xl font-bold leading-tight text-[#00234B] sm:text-6xl lg:text-[92px]">
              AI
            </h1>
          </div>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-3xl  text-base text-[#464E68] sm:text-lg lg:text-xl">
            SmartNotes AI instantly transforms patient visits into structured
            SOAP Notes, patient summaries, billing codes, and comprehensive
            documentation — all HIPAA-compliant and EMR-integrated.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#BAD3FF] to-[#1457EA] px-8 py-4  text-base font-semibold text-white shadow-lg transition hover:shadow-xl">
              <div className="absolute inset-0 -z-10 rounded-full bg-[#4188FF] opacity-50 blur-xl"></div>
              Try it for Free
            </button>
            <button className="glassmorphic-light rounded-full border border-white px-8 py-4  text-base font-semibold text-[#1457EA] transition hover:bg-white/80">
              Login
            </button>
          </div>

          {/* Annotations */}
          <div className="absolute z-10 left-10 top-[80%] hidden transform lg:block">
            <img src="/images/left-arrow.png" alt="" className="w-[13vw]" />
          </div>

          <div className="absolute z-10 right-10 top-[90%] hidden transform lg:block">
            <img src="/images/right-arrow.png" alt="" className="w-[13vw]" />
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto p-4">
        <img
          src="/images/hero-main.png"
          alt="SmartNotes AI Interface Preview"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Partner Logos Section */}
      <div className="relative z-10 bg-gradient-to-t from-[#EFF9FF] to-transparent pb-16 pt-10 md:block hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-12 text-center font-satoshi text-lg text-[#120A0B] sm:text-xl">
            Integrated by the world's most innovative teams
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            <img
              src="/images/brand1.png?width=287"
              alt="NextGen"
              className="h-6 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
            <img
              src="/images/brand2.png?width=293"
              alt="Athena Health"
              className="h-5 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
            <img
              src="/images/brand3.png?width=240"
              alt="Practice Fusion"
              className="h-4 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
            <img
              src="/images/brand4.png?width=164"
              alt="eClinicalWorks"
              className="h-5 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
            <img
              src="/images/brand5.png?width=154"
              alt="Oracle Cerner"
              className="h-6 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
            <img
              src="/images/brand6.png?width=254"
              alt="CareCloud"
              className="h-8 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
