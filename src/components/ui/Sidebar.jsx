"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import DeleteIcon from "../assets/delet";
import SearchWithButton from "./SearchWithButton";
import CurveIcon from "../assets/Curve";
import DeleteConfirmPopup from "./DeleteConfirmPopup";

const encounters = [
  { name: "Ms. Child Female", time: "07:07 PM", count: 3, date: "Today" },
  { name: "Tahoora", time: "03:42 AM", date: "09/10/2025" },
  {
    name: "Ahmad",
    time: "02:17 AM",
    count: 4,
    date: "09/10/2025",
    hasReply: true,
  },
  { name: "Mati Ul Hassan", time: "07:05 PM", date: "08/10/2025" },
  { name: "M. Faizan", time: "07:07 PM", count: 3, date: "08/10/2025" },
  { name: "Noman Habib", time: "07:07 PM", count: 3, date: "08/10/2025" },
  { name: "Ms Rachel", time: "07:05 PM", date: "08/10/2025" },
  { name: "Fatima Tariq", time: "07:05 PM", date: "08/10/2025" },
];

export default function Sidebar({ isOpen, onClose }) {
  const [expanded, setExpanded] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const groupedEncounters = encounters.reduce((acc, e) => {
    if (!acc[e.date]) acc[e.date] = [];
    acc[e.date].push(e);
    return acc;
  }, {});

  // Dummy nested replies (for demonstration)
  const dummyReplies = [
    { name: "Follow-up 1", time: "09:00 PM", date: "19/09/25" },
    { name: "Follow-up 2", time: "09:20 PM", date: "19/09/25" },
    { name: "Follow-up 3", time: "10:00 PM", date: "19/09/25" },
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleDelete = () => {
    console.log("Item deleted ✅");
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 bottom-0 left-0 w-[300px] z-40 flex-col transition-transform duration-300 ease-in-out ${
          isOpen
            ? "flex translate-x-5 mt-2 rounded-2xl bg-white pt-4 pb-6 h-[85%]"
            : "hidden -translate-x-full pt-8 pb-6"
        } lg:translate-x-0 lg:flex`}
      >
        <div className="px-7">
          <h1 className="text-base font-bold leading-4 text-black mb-8 lg:block hidden">
            SMART
            <br />
            NOTES AI
          </h1>

          <SearchWithButton />
        </div>

        <div className="flex-1 overflow-y-auto px-5 space-y-4 custom-scrollbar">
          {Object.entries(groupedEncounters).map(([date, items]) => (
            <div key={date}>
              <div className="text-xs font-medium text-gray-400 tracking-[0.6px] mb-3">
                {date}
              </div>
              <div className="space-y-2">
                {items.map((encounter, idx) => {
                  const uniqueKey = `${date}-${idx}`;
                  const isExpanded = expanded === uniqueKey;
                  return (
                    <div
                      key={uniqueKey}
                      className="relative bg-white rounded-[21px]"
                    >
                      {/* Parent encounter */}
                      <div
                        onClick={() =>
                          encounter.count ? toggleExpand(uniqueKey) : null
                        }
                        className={`w-full h-[60px] rounded-[21px] bg-white flex items-center px-[22px] relative group hover:shadow-sm transition-all cursor-pointer ${
                          isExpanded ? "shadow-md bg-[#F8FBFD]" : ""
                        }`}
                      >
                        <div className="flex-1">
                          <div className="text-sm font-medium text-black">
                            {encounter.name}
                          </div>
                          <div className="text-[11px] font-medium text-gray-400">
                            {encounter.time}
                          </div>
                        </div>

                        {encounter.count && (
                          <div className="flex items-center gap-2">
                            <div className="h-[29px] px-3 rounded-[21px] bg-[#DFEDF6] flex items-center justify-center">
                              <span className="text-xs font-medium text-black">
                                {encounter.count}
                              </span>
                              <svg
                                width="5"
                                height="3"
                                viewBox="0 0 5 3"
                                fill="none"
                                className={`ml-2 transition-transform duration-200 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              >
                                <path
                                  d="M0.589583 0L2.5 1.85502L4.41042 0L5 0.572488L2.5 3L0 0.572488L0.589583 0Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                          </div>
                        )}

                        <button onClick={() => setShowPopup(true)} className="w-[29px] h-[29px] rounded-full border border-black/10 flex items-center justify-center ml-2 opacity-100 transition-opacity">
                          <DeleteIcon />
                        </button>
                      </div>

                      {/* Nested replies */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 mr-2 pt-2 space-y-2 relative pb-2"
                          >
                            {dummyReplies.map((reply, i) => (
                              <div key={i} className="relative pl-5">
                                {/* connector line + arrow */}
                                <div className="absolute left-0 top-[5px] w-[2px] h-[13px] bg-[#E5E6EA]" />
                                <CurveIcon />
                                {/* actual nested reply box */}
                                <div
                                  onClick={() => router.push("/note")}
                                  className="w-full h-[53px] rounded-2xl bg-gray-100 flex items-center justify-between px-4 cursor-pointer hover:bg-gray-200 transition-colors relative"
                                >
                                  <div>
                                    <div className="text-[13px] font-medium text-black tracking-[0.13px]">
                                      {reply.name}
                                    </div>
                                    <div className="flex gap-3 text-[11px] text-gray-400 font-medium">
                                      <span>{reply.time}</span>
                                      <span>{reply.date}</span>
                                    </div>
                                  </div>

                                  <button
                                    onClick={() => setShowPopup(true)}
                                    className="absolute top-3 right-2 w-[30px] h-[30px] rounded-full bg-white border border-black/10 flex items-center justify-center"
                                  >
                                    <DeleteIcon />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Popup */}
      <DeleteConfirmPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
