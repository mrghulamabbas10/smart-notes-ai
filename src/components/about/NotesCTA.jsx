import Layars from "../assets/layars";

export function NotesCTA() {
  return (
    <section className="w-full px-6 lg:px-[155px] py-16 lg:py-[80px] ">
      <div className="relative rounded-[30px] bg-primary overflow-hidden max-w-[1200px] mx-auto">
        <Layars />

        <div className="space-y-6 lg:space-y-5 md:p-20 p-8 max-w-3xl ">
          <h2 className="text-3xl lg:text-[48px] font-bold text-white leading-tight">
            Ready to Spend Less Time on Notes?
          </h2>

          <p className="text-base text-white/80 leading-relaxed max-w-[484px]">
            Join hundreds of providers using SmartNotes AI to streamline
            documentation and refocus on patient care.
          </p>

          <div className="flex items-center relative z-20">
            <button className="md:px-8 px-5 md:text-base text-sm py-3 rounded-full border border-white bg-gradient-to-tr from-[#FFFFFF] to-[#1457EA] backdrop-blur-sm text-brand-blue-dark font-bold hover:shadow-lg transition-all duration-300">
              Start Free Trial
            </button>
            <button className="md:px-8 px-5 md:text-base text-sm py-3 rounded-full text-white  font-bold hover:shadow-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        <div className="block md:absolute bottom-0 right-0">
          <img
            src="/images/smartphone.png?width=854"
            alt="Hand holding smartphone"
            className="w-full md:h-[420px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
