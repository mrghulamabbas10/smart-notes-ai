"use client";

import { useState } from "react";
import UsersIcon from "../assets/users";
import { LuBrain, LuLayoutDashboard } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import { HiLogout } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Smart Encounters");
  const router = useRouter();
  const navItems = [
    { name: "Smart Encounters", icon: <UsersIcon /> },
    { name: "AI Physician Assistant", icon: <LuBrain className="text-lg" /> },
    { name: "Dashboard", icon: <LuLayoutDashboard className="text-lg" /> },
    { name: "Support & FAQ", icon: <BiSupport className="text-lg" /> },
    { name: "Settings", icon: <IoSettingsOutline className="text-lg" /> },
  ];

  const handleClickNewEncounter = () => {
    router.push("/");
  };

  return (
    <header className="fixed top-0 left-0 md:left-[300px] right-0 h-[76px] z-30 ">
      {/* Desktop Header */}
      <div className="h-full  md:flex hidden items-center justify-between gap-8 pl-10">
        <nav className="flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide bg-white rounded-full">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`px-2 py-1 rounded-full 2xl:text-base text-[12px] text-nowrap font-medium flex items-center gap-1.5 transition-colors ${
                activeTab === item.name
                  ? "bg-primary-light text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <div>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    activeTab === item.name ? "bg-white" : "bg-transparent"
                  }`}
                >
                  {item.icon}
                </div>
              </div>
              {item.name}
            </button>
          ))}
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

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-5">
        <h2 className="text-base font-bold leading-4 text-black">
          /Smart Encounters
        </h2>
        <div>
          <button
            onClick={handleClickNewEncounter}
            className="w-fit px-5 py-2 rounded-[25px] bg-primary text-white text-[13px] font-medium hover:bg-primary/90 transition-colors"
          >
            + New
          </button>
        </div>
      </div>
    </header>
  );
}
