import Facebook from "../assets/facebook";
import Instagram from "../assets/Instagram";
import Linkedin from "../assets/Linkedin";

 

export function Footer() {
  return (
    <footer className="relative w-full bg-[#00234B] text-white overflow-hidden">
      <div
        className=" inset-0 opacity-30 text-[120px] md:leading-tight leading-[120px] lg:text-[229px] font-bold text-center flex items-center justify-center md:mt-0 mt-8"
        style={{
          background:
            "linear-gradient(90deg, #0D3562 0.05%, rgba(13, 53, 98, 0.40) 43.27%, rgba(13, 53, 98, 0.50) 60.63%, #0D3562 99.95%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Smart Notes
      </div>

      <div className="relative container mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <h3 className="text-3xl lg:text-[48px] font-bold mb-6 lg:mb-[37px] leading-tight">
              Subscribe Our Newsletter
            </h3>

            <form className="flex items-center bg-white rounded-full p-1 max-w-[475px]">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-5 py-3 bg-transparent placeholder:text-[#999999] text-black text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 md:ml-0 -ml-5 lg:px-8 py-3 lg:py-4 rounded-full bg-gradient-to-tr from-[#BAD3FF] to-[#1457EA] text-white text-sm lg:text-base hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                Submit Now
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg lg:text-xl font-medium mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm lg:text-base text-[#DCE2E3]">
              <p>www.smartnotesai.com</p>
              <p>info@genmeditech.com</p>
              <p>+1 914-930-6264</p>
            </div>

            <div className="pt-6">
              <h4 className="text-lg lg:text-xl font-medium mb-4">Address</h4>
              <p className="text-sm lg:text-base text-[#DCE2E3]">
                WestWood, New Jersey
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg lg:text-xl font-medium mb-4">Security</h4>
            <p className="text-sm lg:text-base text-[#DCE2E3]">
              SmartNotes AI is HIPAA compliant
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg lg:text-xl font-medium mb-4">Social Media</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 text-sm lg:text-base text-[#DCE2E3] hover:text-white transition-colors"
              >
              <Facebook/>
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm lg:text-base text-[#DCE2E3] hover:text-white transition-colors"
              >
                <Instagram/>
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm lg:text-base text-[#DCE2E3] hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
