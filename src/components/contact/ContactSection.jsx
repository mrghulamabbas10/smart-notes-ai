"use client";

import Link from "next/link";
import React, { useState } from "react";

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
          <div className="flex items-start gap-4 md:gap-6">
            <div className="relative flex-shrink-0">
              <div className="absolute w-10 h-14 bg-[#009DFF] blur-[14.5px] top-3 left-2.5"></div>
              <svg
                className="relative w-[60px] h-[60px]"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="60" rx="14" fill="#009DFF" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.7358 38.1882C28.0011 38.2227 26.3435 38.3764 24.8151 38.629C25.2966 40.1144 25.9079 41.4139 26.6194 42.4631C27.5227 43.7941 28.575 44.715 29.7358 45V38.1882ZM31.2642 38.1882V45C32.425 44.715 33.4773 43.7941 34.3806 42.4631C35.0921 41.4139 35.7035 40.1144 36.1849 38.629C34.6565 38.3764 32.999 38.2227 31.2642 38.1882ZM37.6919 38.9185C37.1524 40.6352 36.4547 42.1329 35.6431 43.3279C35.3657 43.7373 35.0738 44.1121 34.7704 44.4508C37.3809 43.6436 39.6789 42.1152 41.4335 40.0983C40.3567 39.6275 39.0935 39.2289 37.6919 38.9185ZM23.3081 38.9185C21.9065 39.2289 20.6433 39.6283 19.5665 40.0983C21.3211 42.1152 23.6191 43.6429 26.2296 44.4508C25.9263 44.1121 25.6343 43.7373 25.3569 43.3279C24.5453 42.1329 23.8476 40.6352 23.3081 38.9185ZM22.1029 31.268H16C16.1452 34.0798 17.0844 36.6828 18.596 38.8533C19.8073 38.288 21.2631 37.8079 22.897 37.4408C22.4369 35.5607 22.1565 33.4739 22.1029 31.268ZM45 31.268H38.8971C38.8436 33.4739 38.5631 35.5614 38.1031 37.4408C39.7369 37.8079 41.192 38.288 42.404 38.8533C43.9156 36.6828 44.8549 34.0798 45 31.268ZM37.3679 31.268H31.2642V36.652C33.1511 36.689 34.9515 36.8617 36.6067 37.1459C37.0484 35.3618 37.3159 33.3717 37.3679 31.268ZM29.7358 36.652V31.268H23.6321C23.6841 33.3717 23.9516 35.3618 24.3933 37.1459C26.0485 36.8617 27.849 36.689 29.7358 36.652ZM18.596 22.1467C17.0844 24.3172 16.1452 26.9201 16 29.7319H22.1029C22.1565 27.5261 22.4369 25.4385 22.897 23.5584C21.2639 23.192 19.8088 22.712 18.596 22.1467ZM36.6067 23.854C34.9515 24.1382 33.1511 24.311 31.2642 24.3479V29.7319H37.3679C37.3159 27.6282 37.0484 25.6382 36.6067 23.854ZM42.404 22.1467C41.192 22.712 39.7362 23.192 38.1031 23.5584C38.5631 25.4385 38.8436 27.5261 38.8971 29.7319H45C44.8549 26.9201 43.9156 24.3172 42.404 22.1467ZM24.3933 23.854C23.9516 25.6382 23.6841 27.6282 23.6321 29.7319H29.7358V24.3479C27.849 24.311 26.0485 24.1382 24.3933 23.854ZM29.7358 16C28.575 16.2849 27.5227 17.2058 26.6194 18.5369C25.9079 19.586 25.2966 20.8855 24.8151 22.3717C26.3435 22.6236 28.0003 22.7772 29.7358 22.8118V16ZM31.2642 16V22.8118C32.999 22.7772 34.6565 22.6244 36.1849 22.3717C35.7035 20.8855 35.0921 19.586 34.3806 18.5369C33.4773 17.2058 32.425 16.2849 31.2642 16ZM26.2296 16.5492C23.6191 17.3564 21.3211 18.8848 19.5665 20.9017C20.6425 21.3725 21.9057 21.7719 23.3081 22.0822C23.8476 20.3648 24.5453 18.8671 25.3569 17.672C25.6343 17.2627 25.9263 16.8879 26.2296 16.5492ZM34.7704 16.5492C35.0738 16.8879 35.3657 17.2627 35.6431 17.672C36.4547 18.8671 37.1524 20.3648 37.6919 22.0822C39.0943 21.7719 40.3575 21.3725 41.4335 20.9017C39.6789 18.8848 37.3809 17.3571 34.7704 16.5492Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-satoshi font-bold text-[#120A0B] text-xl md:text-2xl lg:text-[27px] leading-[34px] mb-1">
                Website
              </h3>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-satoshi text-[#454140] text-lg md:text-xl lg:text-2xl hover:text-smartnotes-blue transition-colors"
              >
                www.smartnotesai.com
              </Link>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 md:gap-6">
            <div className="relative flex-shrink-0">
              <div className="absolute w-10 h-14 bg-[#009DFF] blur-[14.5px] top-3 left-2.5"></div>
              <svg
                className="relative w-[60px] h-[60px]"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="60" rx="14" fill="#009DFF" />
                <path
                  d="M29.6163 29.5391C29.8457 29.6571 30.1199 29.6571 30.3504 29.5391L43.2939 22.8483C42.6831 21.5601 41.3622 20.5037 39.9965 20.3441C35.7049 19.8853 24.2637 19.8853 19.9721 20.3441C18.6064 20.5026 17.2844 21.5591 16.6748 22.8483L29.6171 29.5391H29.6163Z"
                  fill="white"
                />
                <path
                  d="M31.3034 31.3833C30.8904 31.5974 30.4369 31.7034 29.9835 31.7034C29.5301 31.7034 29.0767 31.5963 28.6637 31.3833L16.2459 24.9646C15.8875 28.9262 15.9192 32.8867 16.342 36.8471C16.5452 38.5963 18.2223 40.2734 19.9716 40.4767C24.2632 40.9356 35.7044 40.9356 39.996 40.4767C41.7452 40.2735 43.4223 38.5964 43.6256 36.8471C44.0495 32.8855 44.0801 28.9251 43.7217 24.9646L31.3034 31.3833Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-satoshi font-bold text-[#120A0B] text-xl md:text-2xl lg:text-[27px] leading-[34px] mb-1">
                Email
              </h3>
              <Link
                href="#"
                className="font-satoshi text-[#454140] text-lg md:text-xl lg:text-2xl hover:text-smartnotes-blue transition-colors"
              >
                info@genmeditech.com
              </Link>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 md:gap-6">
            <div className="relative flex-shrink-0">
              <div className="absolute w-10 h-14 bg-[#009DFF] blur-[14.5px] top-3 left-2.5"></div>
              <svg
                className="relative w-[60px] h-[60px]"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="60" rx="14" fill="#009DFF" />
                <path
                  d="M25.599 19.6214C25.1704 19.1917 24.5752 18.9669 23.9689 19.004L23.2983 19.0447C22.7154 19.0818 22.1646 19.33 21.7509 19.7437L20.6666 20.828C20.4146 21.0799 19.9824 21.4751 19.6996 21.9135C18.7104 23.4424 18.8339 25.5493 19.6712 27.7934C20.5085 30.0373 22.0917 32.474 24.2775 34.7683C24.5405 35.0437 24.9555 35.4599 25.2321 35.723C27.5267 37.9089 29.9633 39.4921 32.207 40.3293C34.4507 41.1665 36.5578 41.2889 38.0867 40.3009C38.5251 40.0181 38.9203 39.5859 39.1723 39.3339L40.2566 38.2496C40.6703 37.8359 40.9185 37.2851 40.9555 36.701L40.9963 36.0304C41.0321 35.424 40.8073 34.83 40.3776 34.4002L36.7653 30.7879C36.2799 30.3013 35.5143 30.2111 34.9276 30.5717L31.2142 32.8552C31.1808 32.87 30.919 32.849 30.9091 32.8404C30.4176 32.4304 29.8841 31.9475 29.4123 31.4967C29.1617 31.2572 28.7418 30.8385 28.5022 30.5866C28.0514 30.1148 27.5686 29.5813 27.1586 29.091C27.1499 29.0675 27.1326 28.8181 27.1462 28.786L29.4297 25.0712C29.789 24.4846 29.6989 23.7189 29.2135 23.2335L25.599 19.6214Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-satoshi font-bold text-[#120A0B] text-xl md:text-2xl lg:text-[27px] leading-[34px] mb-1">
                Phone
              </h3>
              <Link
                href="#"
                className="font-satoshi text-[#454140] text-lg md:text-xl lg:text-2xl hover:text-smartnotes-blue transition-colors block"
              >
                +1 914-930-6264
              </Link>
              <p className="font-satoshi text-[#454140] text-base md:text-lg lg:text-[23px] mt-2">
                Call us directly at +1 914-930-6264
              </p>
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
