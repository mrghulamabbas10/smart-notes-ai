import UsersIcon from "../assets/users";
import { LuBrain, LuLayoutDashboard } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import { HiLogout } from "react-icons/hi";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 md:left-[310px] right-0 h-[76px] z-30 ">
      <div className="h-full md:flex hidden items-center gap-8 pl-10">
        <nav className="flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide bg-white rounded-full">
          <button className="px-3 py-1 rounded-full bg-primary-light text-xs font-semibold text-black flex items-center gap-2 shadow-sm">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-lg">
              <UsersIcon />
            </div>
            Smart Encounters
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1.5">
            <LuBrain className="text-lg" />
            AI Physician Assistant
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1.5">
            <LuLayoutDashboard className="text-lg" />
            Dashboard
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1.5">
            <BiSupport className="text-lg" />
            Support & FAQ
          </button>
          <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-black transition-colors flex items-center gap-1.5">
            <IoSettingsOutline className="text-lg" />
            Settings
          </button>
        </nav>

        <div className="flex items-center">
          <div className="flex items-center gap-3 pr-4 rounded-full bg-[#DFEDF6]">
            <Image
              src="/images/user.png"
              alt="User"
              width={40}
              height={40}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="flex flex-col py-2 ">
              <div className="text-xs font-medium text-black">
                smart_05@yopmail.com
              </div>
              <div className="text-[9px] font-bold text-black">
                <span className="font-normal">Dr.</span> Zain Whaj
              </div>
            </div>
          </div>

          <button className="w-10 h-10 mr-3 -ml-3 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
            <HiLogout />
          </button>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between p-5">
        <h2 className="text-base font-bold leading-4 text-black">
          /Smart Encounters
        </h2>
        <div>
          <button className="w-fit px-5 py-2 rounded-[25px] bg-primary text-white text-[13px] font-medium hover:bg-primary/90 transition-colors">
            + New
          </button>
        </div>
      </div>
    </header>
  );
}
