"use client";

import Image from "next/image";
import { useState } from "react";

export default function AskAI() {
  const [isListening, setIsListening] = useState(true);

    // play → pause → resume
  const [status, setStatus] = useState("play");

  const handleClick = () => {
    if (status === "play") setStatus("pause");
    else if (status === "pause") setStatus("resume");
    else setStatus("pause");
  };

  const transcriptEntries = [
    {
      text: "Hi, this is Mati Speaking. How are you doing today?",
      time: "23:48",
      opacity: "opacity-75",
    },
    {
      text: "Hi, this is Mati Speaking. How are you doing today?",
      time: "",
      opacity: "opacity-30",
    },
    {
      text: "Hi, this is Mati Speaking. How are you doing today?",
      time: "",
      opacity: "opacity-30",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1 flex flex-col">
      <div className="mb-8 lg:mb-12">
        <h1 className="text-[21px] font-normal mb-6 leading-normal">
          Transcript
        </h1>

        <div className="space-y-[11px]">
          {transcriptEntries.map((entry, index) => (
            <div key={index} className="flex items-start justify-between gap-4">
              <p
                className={`text-base ${entry.opacity} tracking-[-0.16px] flex-1 leading-normal`}
              >
                {entry.text}
              </p>
              {entry.time && (
                <span className="text-base opacity-50 tracking-[-0.16px] whitespace-nowrap leading-normal">
                  {entry.time}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative pb-8">
        <div className="relative w-full max-w-md aspect-square flex items-center justify-center mb-8 sm:mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[280px] h-[240px] sm:w-[310px] sm:h-[270px] rounded-full bg-gradient-orb blur-[114px] animate-pulse-slow"
              style={{
                background:
                  "linear-gradient(90deg, #E0A0FB 0%, #4E65F1 80.71%)",
              }}
            />
          </div>
          <div className="border-2 border-white rounded-full z-20 relative">
            <Image
              src="/images/ai.gif"
              alt="ai"
              width={280}
              height={280}
              className="w-[280px] h-[280px]"
              unoptimized
            />
          </div>
        </div>

        <p className="text-center text-[15px] text-[#474747] font-medium leading-[26px] max-w-[325px] mb-8 px-4">
          {isListening
            ? "Please start speaking. I'm listening..."
            : "Recording paused. Click Resume to continue."}
        </p>

        <div className="flex gap-4 items-center justify-center w-full px-4">
          <button
            onClick={handleClick}
            className="w-full sm:w-auto min-w-[158px] h-[49px] rounded-[30px] bg-[#3C82F3] border border-black/10 text-white text-[15px] font-semibold flex items-center justify-center gap-2 hover:bg-[#3574e0] transition-colors shadow-sm"
          >
            {status === "play" ? (
              <>
                {/* ▶ Play Icon */}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.94754 6.06248C10.2899 5.87886 10.5033 5.52216 10.503 5.13387C10.503 4.74557 10.2892 4.38886 9.94649 4.2056C8.01624 3.17271 4.1652 1.1122 2.3192 0.124602C1.99269 -0.0502382 1.59877 -0.040411 1.28104 0.149876C0.963312 0.340164 0.769165 0.683177 0.769165 1.05322V9.2261C0.769165 9.59684 0.963665 9.93985 1.2814 10.1301C1.59948 10.3204 1.99374 10.3295 2.32025 10.1544L9.94754 6.06248Z"
                    fill="white"
                  />
                </svg>
                Play
              </>
            ) : status === "pause" ? (
              <>
                {/* ⏸ Pause Icon */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M8.25,21.937H6.564a2.5,2.5,0,0,1-2.5-2.5V4.563a2.5,2.5,0,0,1,2.5-2.5H8.25a2.5,2.5,0,0,1,2.5,2.5V19.437A2.5,2.5,0,0,1,8.25,21.937ZM6.564,3.063a1.5,1.5,0,0,0-1.5,1.5V19.437a1.5,1.5,0,0,0,1.5,1.5H8.25a1.5,1.5,0,0,0,1.5-1.5V4.563a1.5,1.5,0,0,0-1.5-1.5Z"></path>
                    <path d="M17.436,21.937H15.75a2.5,2.5,0,0,1-2.5-2.5V4.563a2.5,2.5,0,0,1,2.5-2.5h1.686a2.5,2.5,0,0,1,2.5,2.5V19.437A2.5,2.5,0,0,1,17.436,21.937ZM15.75,3.063a1.5,1.5,0,0,0-1.5,1.5V19.437a1.5,1.5,0,0,0,1.5,1.5h1.686a1.5,1.5,0,0,0,1.5-1.5V4.563a1.5,1.5,0,0,0-1.5-1.5Z"></path>
                  </g>
                </svg>
                Pause
              </>
            ) : (
              <>
                {/* 🔁 Resume Icon */}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.94754 6.06248C10.2899 5.87886 10.5033 5.52216 10.503 5.13387C10.503 4.74557 10.2892 4.38886 9.94649 4.2056C8.01624 3.17271 4.1652 1.1122 2.3192 0.124602C1.99269 -0.0502382 1.59877 -0.040411 1.28104 0.149876C0.963312 0.340164 0.769165 0.683177 0.769165 1.05322V9.2261C0.769165 9.59684 0.963665 9.93985 1.2814 10.1301C1.59948 10.3204 1.99374 10.3295 2.32025 10.1544L9.94754 6.06248Z"
                    fill="white"
                  />
                </svg>
                Resume
              </>
            )}
          </button>

          <button className="w-full sm:w-auto min-w-[158px] h-[49px] rounded-[26px] bg-[#EF4444] text-white text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-[#dc2626] transition-colors shadow-sm">
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M10.6465 1.68359L6.42578 5.9043L10.6465 10.125L9.7207 11.0508L5.5 6.83008L1.2793 11.0508L0.353516 10.125L4.57422 5.9043L0.353516 1.68359L1.2793 0.757812L5.5 4.97852L9.7207 0.757812L10.6465 1.68359Z"
                fill="white"
                stroke="#EF4444"
                strokeWidth="0.5"
              />
            </svg>
            End Encounter
          </button>
        </div>
      </div>
    </div>
  );
}
