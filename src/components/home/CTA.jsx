import Layars from "../assets/layars";

export function CTA() {
  return (
    <section className="w-full px-6 lg:px-[155px] py-16 lg:py-[80px] ">
      <div className="relative rounded-[30px] bg-primary overflow-hidden max-w-[1200px] mx-auto">
        <Layars />

        <div className="space-y-6 lg:space-y-[37px] md:p-20 p-8 max-w-3xl ">
          <div className="absolute left-1/2 top-5 md:block hidden">
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

        <div className="block md:absolute bottom-0 right-0">
          <img
            src="/images/StartYourSmartNote.png?width=854"
            alt="Hand holding smartphone"
            className="w-full md:h-[450px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
