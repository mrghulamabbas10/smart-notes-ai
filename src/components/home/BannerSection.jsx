export function BannerSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[536px] bg-gradient-to-r from-[#3755AF] to-[#3755AF]/0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/docter-banner.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3755AF] via-[#3755AF]/50 to-transparent" />
      
      <div className="relative container mx-auto px-6 lg:px-20 py-16 lg:py-32 flex flex-col justify-end min-h-[550px] lg:min-h-[836px]">
        <div className="max-w-[566px] space-y-8 lg:space-y-16">
          <h1 className="text-4xl lg:text-[56px] font-bold text-white leading-tight lg:leading-[62.72px] tracking-tight">
            Helping You Work Faster, Document Smarter, Care Better
          </h1>
          
          <p className="text-base lg:text-xl text-[#F3F3F3] leading-relaxed max-w-[499px]">
            We transform live conversations into real-time outputs—AI-generated SOAP notes, billing codes, and patient summaries—helping doctors work faster, document smarter, and focus on patient care.
          </p>
          
          <button className="group relative px-8 lg:px-[34px] py-4 lg:py-[18px] rounded-full bg-gradient-to-tr from-[#BAD3FF] to-primary text-white font-bold text-base lg:text-lg hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
