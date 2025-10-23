import Layars from "../assets/layars";

export function CTA() {
  return (
    <section className="w-full px-6 lg:px-[155px] py-16 lg:py-[80px] md:block hidden">
      <div className="relative rounded-[30px] bg-primary overflow-hidden max-w-[1200px] mx-auto">
        <Layars />

        <div className="space-y-6 lg:space-y-[37px] p-20 max-w-3xl ">
          <div className="absolute left-1/2 top-5">
            <img src="/images/mini-arrow.png" alt="" className="w-[15vw]" />
          </div>

          <h2 className="text-3xl lg:text-[48px] font-bold text-white leading-tight">
            Start Your Smart Note Taking Journey Today!
          </h2>

          <p className="text-base text-white/80 leading-relaxed max-w-[484px]">
            Manage your Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt — all in one intuitive app.
          </p>

          <button className="px-11 py-5 rounded-full border border-white bg-gradient-to-tr from-[#FFFFFF] to-[#1457EA] backdrop-blur-sm text-brand-blue-dark font-bold text-base hover:shadow-lg transition-all duration-300">
            Try it for Free
          </button>
        </div>

        <div className=" hidden lg:block absolute bottom-0 right-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/65f3a0289a4c7bbdaa4d64d0025f17c8fb49b027?width=854"
            alt="Hand holding smartphone"
            className="w-full h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
