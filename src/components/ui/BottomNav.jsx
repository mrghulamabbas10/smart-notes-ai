"use client";

import { FiMenu } from "react-icons/fi";
import UsersIcon from "../assets/users";

import { LuBrain, LuLayoutDashboard } from "react-icons/lu";

export function BottomNav({ onEncountersClick }) {
  return (
    <div>
      <div className="lg:hidden w-[91%] mx-auto fixed bottom-2 rounded-3xl left-1/2 -translate-x-1/2 right-0 bg-white px-4 py-3 z-40">
        <div className="flex items-center justify-around">
          <NavItem
            icon={<UsersIcon />}
            label="Encounters"
            active
            onClick={onEncountersClick}
          />
          <NavItem icon={<LuBrain />} label="AI Physician" />
          <div className="w-16"></div>
          <NavItem icon={<LuLayoutDashboard />} label="Dashboard" />
          <NavItem icon={<FiMenu />} label="Menu" />
        </div>

        <button className="absolute left-1/2 -translate-x-1/2 -top-5 w-16 h-16 border-4 border-white bg-primary shadow-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      className="flex flex-col items-center gap-1 group"
      onClick={onClick}
    >
      <div
        className={`w-9 h-9 flex items-center justify-center rounded-full
          ${active ? "bg-primary-light text-black " : "text-black"}
        `}
      >
        {icon}
      </div>
      <span
        className={`text-xs font-medium tracking-wide ${
          active ? "text-black" : "text-black/30"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
