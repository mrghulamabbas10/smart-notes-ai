"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function SearchWithButton() {
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);
  const router = useRouter();

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearching(false);
      }
    }
    if (isSearching) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearching]);

  const handleClickNewEncounter = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center gap-2 mb-5 relative z-10" ref={searchRef}>
      <AnimatePresence mode="wait">
        {!isSearching ? (
          <>
            {/* + New Encounter Button */}
            <motion.button
              key="newButton"
              onClick={handleClickNewEncounter}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-[201px] h-[49px] rounded-[25px] bg-primary text-white text-[13px] font-medium hover:bg-primary/90 transition-colors"
            >
              + New Encounter
            </motion.button>

            {/* Search Icon Button */}
            <div>
              <motion.button
                key="searchButton"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsSearching(true)}
                className="w-[49px] h-[49px] rounded-full bg-transparent border border-black/10 flex items-center justify-center hover:bg-white transition-colors"
              >
                <FiSearch className="text-[18px]" />
              </motion.button>
            </div>
          </>
        ) : (
          // ✅ Search Input Field
          <motion.div
            key="searchInput"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex items-center w-full h-[49px] rounded-[25px] border border-black/10 px-4 bg-white"
          >
            <FiSearch className="text-gray-400 text-[18px] mr-2" />
            <input
              type="text"
              placeholder="Search encounters..."
              autoFocus
              className="flex-1 outline-none text-sm text-black placeholder-gray-400"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
