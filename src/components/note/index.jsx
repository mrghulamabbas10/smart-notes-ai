"use client";

import { useState } from "react";
import NoteIcon from "../assets/note";
import BillingIcon from "../assets/Billing";
import Patienticon from "../assets/Patient";
import NoteTab from "./noteTab";
import BillingTab from "./BillingTab";
import SummryTab from "./SummaryTab";

export default function Note() {
  const [activeTab, setActiveTab] = useState("note");

  return (
    <div className="w-[85%]">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-lg">
          <span className="font-medium text-black">Patient Name :</span>
          <span className="font-medium text-black opacity-63">
            Mati ul Hassan
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveTab("note")}
          className={`flex h-24 pb-8 items-center justify-center gap-2 rounded-t-2xl md:px-6 px-3 transition-all ${
            activeTab === "note"
              ? "bg-primary text-white shadow-lg"
              : "bg-medical-gray-100"
          }`}
        >
          <div
            className={`${
              activeTab === "note" &&
              "flex items-center justify-center bg-white w-8 h-8 rounded-full text-black"
            }`}
          >
            <NoteIcon activeTab={activeTab} />
          </div>

          <span className="text-sm font-semibold">Note</span>
        </button>

        <button
          onClick={() => setActiveTab("billing")}
          className={`flex h-24 pb-8 items-center justify-center gap-2 rounded-t-2xl md:px-6 px-3 transition-all ${
            activeTab === "billing"
              ? "bg-primary text-white shadow-lg"
              : "bg-medical-gray-100"
          }`}
        >
          <div>
            <div
              className={`${
                activeTab === "billing" &&
                "flex items-center justify-center bg-white w-8 h-8 rounded-full text-black"
              }`}
            >
              <BillingIcon activeTab={activeTab} />
            </div>
          </div>
          <span className="text-sm font-medium">
            Billing codes & reinbursement
          </span>
        </button>

        <button
          onClick={() => setActiveTab("summary")}
          className={`flex h-24 pb-8 items-center justify-center gap-2 rounded-t-2xl md:px-6 px-3 transition-all ${
            activeTab === "summary"
              ? "bg-primary text-white shadow-lg"
              : "bg-medical-gray-100"
          }`}
        >
          <div>
            <div
              className={`${
                activeTab === "summary" &&
                "flex items-center justify-center bg-white w-8 h-8 rounded-full text-black"
              }`}
            >
              <Patienticon activeTab={activeTab} />
            </div>
          </div>
          <span className="text-sm font-medium">Patient Summary</span>
        </button>
      </div>

      {activeTab === "note" && <NoteTab />}
      {activeTab === "billing" && <BillingTab />}
      {activeTab === "summary" && <SummryTab />}
    </div>
  );
}
