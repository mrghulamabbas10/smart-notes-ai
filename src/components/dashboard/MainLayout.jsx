"use client";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import { BottomNav } from "./BottomNav";
import { AIButton } from "./AIButton";

export default function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden relative  bg-gradient-to-b from-[#F8FAFB] to-[#E7F5F7]">
      <Header />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <RightSidebar />

      {children}
      <BottomNav onEncountersClick={() => setIsSidebarOpen(true)} />
      <AIButton />
    </div>
  );
}
