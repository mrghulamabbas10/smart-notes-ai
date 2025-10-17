"use client";

import { useState } from "react";
import UserIcon from "../assets/user";
import DateIcon from "../assets/date";
import FileIcon from "../assets/file";
import MicIcon from "../assets/mic";

export default function NewEncounterForm() {
  const [patientType, setPatientType] = useState("new");
  const [encounterType, setEncounterType] = useState("office");

  return (
    <div className="w-full max-w-[729px] mx-auto bg-white rounded-[36px] border border-[#EEEEEE] md:p-8 p-5 relative z-10">
      <div className="flex items-center justify-between gap-2 mb-10">
        <div className="flex items-center relative bg-primary-light rounded-full p-1.5 lg:w-auto w-full">
          <button
            onClick={() => setPatientType("new")}
            className="text-[13px] lg:w-auto w-full text-nowrap py-2 px-5 rounded-full bg-white font-semibold text-black z-10 transition-colors"
          >
            New Patient
          </button>
          <button
            onClick={() => setPatientType("established")}
            className="text-[13px] lg:w-auto w-full text-nowrap py-2 px-5 rounded-full font-medium text-black/45 z-10 transition-colors"
          >
            Established Patient
          </button>
        </div>

        <div className="lg:flex hidden items-center gap-2 px-4 py-2 rounded-[26px] border border-[#DADADA]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8bf04b8e848942e5a16ad98bdd97760fd874ccad?width=56"
            alt="United Kingdom"
            className="w-7 h-7 rounded-full"
          />
          <span className="text-[15px] font-medium text-gray-500">EN</span>
          <svg width="7" height="4" viewBox="0 0 7 4" fill="none">
            <path
              d="M0.825417 0L3.5 2.47336L6.17458 0L7 0.763318L3.5 4L0 0.763318L0.825417 0Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-black/70 mb-3">
              Patient Name
            </label>
            <div className="relative">
              <div className="w-full h-[51px] rounded-full border border-black/6 flex items-center px-4">
                <div className="w-[38px] h-[38px] rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <UserIcon />
                </div>
                <input
                  type="text"
                  placeholder="e.g. Patient 1"
                  className="flex-1 ml-4 text-[15px] font-medium text-black placeholder:text-black/40 outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-black/70 mb-3">
              Date of Birth
            </label>
            <div className="relative">
              <div className="w-full h-[51px] rounded-full border border-black/6 flex items-center px-4">
                <div className="w-[38px] h-[38px] rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <DateIcon />
                </div>
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  className="flex-1 ml-4 text-[15px] font-medium text-black placeholder:text-black/40 outline-none bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-black/70 mb-3">
            Patient Context or History (Optional)
          </label>
          <div className="relative">
            <div className="w-full min-h-[119px] rounded-[20px] border border-black/6 p-4 flex items-start">
              <div className="w-[38px] h-[38px] rounded-full bg-success flex items-center justify-center flex-shrink-0">
                <FileIcon />
              </div>
              <textarea
                placeholder="e.g. Patient 1"
                className="flex-1 ml-4 mt-2 text-[15px] font-medium text-black placeholder:text-black/40 outline-none bg-transparent resize-none min-h-[80px]"
              />
              <button className="flex-shrink-0 ml-2 text-black/30 hover:text-black transition-colors">
                <MicIcon />
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-black/70 mb-3">
            Encounter Type
          </label>
          <div className="relative w-full h-12 rounded-[35px] bg-gray-100 flex items-center gap-5 px-3">
            <button
              onClick={() => setEncounterType("office")}
              className="flex-1 text-[15px] text-nowrap w-full px-8 md:py-1 py-2 font-medium text-black z-10 rounded-[35px] bg-white border border-primary shadow-lg transition-all"
            >
              Office Visit
            </button>
            <button
              onClick={() => setEncounterType("tele")}
              className="flex-1 text-[15px] text-nowrap w-full px-8 md:py-1 py-2 font-medium text-black/40 z-10 "
            >
              Tele Visit
            </button>
          </div>
        </div>

        <button className="md:w-[277px] w-full h-[43px] rounded-[25px] bg-primary text-white text-base font-medium mx-auto block hover:bg-primary/90 transition-colors mt-8">
          Start Encounter
        </button>
      </div>
    </div>
  );
}
