"use client";

import Link from "next/link";
import React, { useState } from "react";
import { contentinfo, socialmedia } from "./data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-16 my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Contact Information */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="font-fustat font-extrabold text-[#00234B] text-3xl md:text-4xl lg:text-[39px] leading-tight mb-8 md:mb-12">
            Contact Us
          </h2>

          {/* Website */}
          {contentinfo.map((item, idx) => (
            <div className="flex items-start gap-4 md:gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute w-10 h-14 bg-[#009DFF] blur-[14.5px] top-3 left-2.5"></div>
                {item.icon}
              </div>
              <div>
                <h3 className="font-satoshi font-bold text-[#120A0B] text-xl md:text-2xl lg:text-[27px] leading-[34px] mb-1">
                  {item.heading}
                </h3>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-satoshi text-[#454140] text-lg md:text-xl lg:text-2xl hover:text-smartnotes-blue transition-colors"
                >
                  {item.subtext}
                </Link>
              </div>
            </div>
          ))}
          <div className="flex items-center md:flex-row flex-col gap-0">
            <h3 className="font-satoshi font-bold text-[#120A0B] text-xl md:text-2xl lg:text-[27px] leading-[34px] mb-1">
              Follow us at:
            </h3>

            <div className="flex items-center">
              {socialmedia.map((item, idx) => (
                <Link href={item.url} key={idx}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-[18px] p-8 md:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-urbanist font-semibold text-black text-sm block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full h-10 rounded-xl border border-[#DBDBDB] px-4 font-urbanist text-xs text-[#747474] placeholder:text-[#747474] focus:outline-none focus:border-[#3C82F3] focus:bg-[rgba(223,237,246,0.2)]"
                />
              </div>
              <div>
                <label className="font-urbanist font-semibold text-black text-sm block mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full h-10 rounded-xl border border-[#DBDBDB] px-4 font-urbanist text-xs text-[#747474] placeholder:text-[#747474] focus:outline-none focus:border-[#3C82F3] focus:bg-[rgba(223,237,246,0.2)]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="font-urbanist font-semibold text-black text-sm block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="smart_05@yopmail.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-10 rounded-xl border border-[#3C82F3] bg-[rgba(223,237,246,0.2)] px-4 font-urbanist text-xs text-[#747474] placeholder:text-[#747474] focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="font-urbanist font-semibold text-black text-sm block mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full rounded-xl border border-[#DBDBDB] px-4 py-3 font-urbanist text-xs text-[#747474] placeholder:text-[#747474] focus:outline-none focus:border-[#3C82F3] focus:bg-[rgba(223,237,246,0.2)] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[60px] bg-[#2066FF] hover:bg-[#1457EA] transition-colors rounded-[9px] font-urbanist font-semibold text-white text-[15px] shadow-md"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
