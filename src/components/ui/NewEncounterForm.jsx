"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import UserIcon from "../assets/user";
import DateIcon from "../assets/date";
import FileIcon from "../assets/file";
import MicIcon from "../assets/mic";
import LanguageSelector from "./LanguageSelector";

export default function NewEncounterForm() {
  const [patientType, setPatientType] = useState("new");
  const [encounterType, setEncounterType] = useState("office");
  const [patientName, setPatientName] = useState("");
  const [dob, setDob] = useState("");
  const [context, setContext] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};

    if (!patientName.trim()) newErrors.patientName = "Patient name is required";
    if (!dob.trim()) newErrors.dob = "Date of birth is required";
    if (!encounterType) newErrors.encounterType = "Encounter type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Redirect to /ask-ai page
      router.push("/dashboard/ai");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[729px] mx-auto bg-white rounded-[36px] border border-[#EEEEEE] md:p-8 p-5 relative z-10"
    >
      {/* --- Header --- */}
      <div className="flex items-center justify-between gap-2 mb-10">
        <div className="flex items-center relative bg-primary-light rounded-full p-1.5 lg:w-auto w-fit">
          <button
            type="button"
            onClick={() => setPatientType("new")}
            className={`md:text-[13px] text-[9px] lg:w-auto md:w-full w-fit text-nowrap py-2 md:px-5 px-2 rounded-full font-semibold transition-colors ${
              patientType === "new"
                ? "bg-white text-black"
                : "text-black/45 bg-transparent"
            }`}
          >
            New Patient
          </button>
          <button
            type="button"
            onClick={() => setPatientType("established")}
            className={`md:text-[13px] text-[9px] lg:w-auto md:w-full w-fit text-nowrap py-2 md:px-5 px-2 rounded-full font-semibold transition-colors ${
              patientType === "established"
                ? "bg-white text-black"
                : "text-black/45 bg-transparent"
            }`}
          >
            Established Patient
          </button>
        </div>

        <LanguageSelector />
      </div>

      {/* --- Form Fields --- */}
      <div className="space-y-6">
        {/* Patient Name + DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Patient Name */}
          <div>
            <label className="block text-sm font-semibold text-black/70 mb-3">
              Patient Name <span className="text-red-500">*</span>
            </label>
            <div className="w-full h-[51px] rounded-full border border-black/6 flex items-center px-4">
              <UserIcon />
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="e.g. Patient 1"
                className="flex-1 ml-4 text-[15px] font-medium text-black placeholder:text-black/40 outline-none bg-transparent"
              />
            </div>
            {errors.patientName && (
              <p className="text-red-500 text-xs mt-1">{errors.patientName}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-semibold text-black/70 mb-3">
              Date of Birth
            </label>
            <div className="relative">
              <div className="w-full h-[51px]  rounded-full border border-black/6 flex items-center px-4">
                <DateIcon />
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                  className="flex-1 ml-4 text-[15px] font-medium text-black placeholder:text-black/40 outline-none bg-transparent cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Context */}
        <div>
          <label className="block text-sm font-semibold text-black/70 mb-3">
            Patient Context or History (Optional)
          </label>
          <div className="w-full min-h-[119px] rounded-[20px] border border-black/6 p-4 flex items-start">
           <div className="mt-1.5">
             <FileIcon />
           </div>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="e.g. Patient 1"
              className="flex-1 ml-4 text-[15px] font-medium text-black placeholder:text-black/40 outline-none bg-transparent resize-none min-h-[80px]"
            />

            <MicIcon />
          </div>
        </div>

        {/* Encounter Type */}
        <div className="w-[80%] mx-auto"> 
          <div className="relative h-12 rounded-[35px] bg-gray-100 flex items-center md:gap-5 gap-3 px-3">
            <button
              type="button"
              onClick={() => setEncounterType("office")}
              className={`flex-1 text-[15px] text-nowrap w-full md:px-8 px-3 md:py-2 py-2 font-medium z-10 rounded-[35px] transition-all ${
                encounterType === "office"
                  ? "bg-white border border-primary shadow-lg text-black"
                  : "text-black/40 bg-transparent"
              }`}
            >
              Office Visit
            </button>
            <button
              type="button"
              onClick={() => setEncounterType("tele")}
              className={`flex-1 text-[15px] text-nowrap w-full md:px-8 px-3 md:py-2 py-2 font-medium z-10 rounded-[35px] transition-all ${
                encounterType === "tele"
                  ? "bg-white border border-primary shadow-lg text-black"
                  : "text-black/40 bg-transparent"
              }`}
            >
              Tele Visit
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="md:w-[277px] w-full h-[43px] rounded-[25px] bg-primary text-white text-base font-medium mx-auto block hover:bg-primary/90 transition-colors mt-8"
        >
          Start Encounter
        </button>
      </div>
    </form>
  );
}
