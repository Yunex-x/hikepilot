"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-[1683px] px-4 md:px-8 z-50">
      <div className="flex items-center justify-between h-[71px]">
        {/* ---------- LOGO (left) ---------- */}
        <div className="flex items-center flex-shrink-0">
          <div className="relative w-[120px] md:w-[160px] h-[71px]  flex items-center justify-center">
            {/* Replace with your actual logo image */}
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[50px] md:h-[60px] object-contain"
            />
          </div>
        </div>

        {/* ---------- NAV LINKS (center) ---------- */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-[48px]">
          <Link href="/" className="relative">
            <span className="font-poppins font-bold text-[22px] leading-[28px] text-white tracking-[0.02em]">
              Home
            </span>
            {/* Dot indicator */}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white" />
          </Link>

          {["Explore", "Group Tours", "Destination", "Blog", "Forum"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className="font-poppins font-normal text-[20px] leading-[28px] text-white/80 tracking-[0.02em] hover:text-white transition-colors">
                  {item}
                </span>
              </Link>
            )
          )}
        </div>

        {/* ---------- RIGHT SIDE: Join Now + User Icon ---------- */}
        <div className="flex items-center gap-4">
          {/* Join Now button */}
          <button
            className="
              hidden md:flex items-center justify-center
              px-6 py-1.5
              bg-gradient-to-b from-[#348F57] to-[#205930]
              shadow-[0_39px_16px_rgba(0,0,0,0.01),0_22px_13px_rgba(0,0,0,0.03),0_10px_10px_rgba(0,0,0,0.05),0_2px_5px_rgba(0,0,0,0.06)]
              rounded-[46px]
              font-poppins font-bold text-[18px] leading-[28px] text-white tracking-[0.02em]
              hover:opacity-90 transition-opacity
              whitespace-nowrap
            "
          >
            Join Now
          </button>

          {/* User Icon (SVG) */}
          <div className="flex items-center justify-center h-[26px] w-[26px] cursor-pointer hover:opacity-80 transition-opacity">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <g clipPath="url(#clip0_user)">
                <path
                  d="M13.0002 14.4C11.0069 14.4 9.2002 12.5934 9.2002 10.6C9.2002 8.6066 11.0069 6.8 13.0002 6.8C14.9935 6.8 16.8002 8.6066 16.8002 10.6C16.8002 12.5934 14.9935 14.4 13.0002 14.4ZM13.0002 8.4C11.7862 8.4 10.8002 9.386 10.8002 10.6C10.8002 11.814 11.7862 12.8 13.0002 12.8C14.2142 12.8 15.2002 11.814 15.2002 10.6C15.2002 9.386 14.2142 8.4 13.0002 8.4Z"
                  fill="rgba(255,255,255,0.6)"
                />
                <path
                  d="M13.0002 19.6C8.90695 19.6 5.2002 22.0934 5.2002 24.6H4.0002C4.0002 21.4934 8.00695 18.4 13.0002 18.4C17.9935 18.4 22.0002 21.4934 22.0002 24.6H20.8002C20.8002 22.0934 17.0935 19.6 13.0002 19.6Z"
                  fill="rgba(255,255,255,0.6)"
                />
              </g>
              <defs>
                <clipPath id="clip0_user">
                  <rect
                    width="20.24"
                    height="23.29"
                    fill="white"
                    transform="translate(2.88 1.35)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ---------- MOBILE MENU (collapsible) ---------- */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-xl p-6 space-y-4">
          <Link href="/" className="block text-white font-bold text-xl">
            Home
          </Link>
          {["Explore", "Group Tours", "Destination", "Blog", "Forum"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-white/80 hover:text-white text-lg"
              >
                {item}
              </Link>
            )
          )}
          <button
            className="
              w-full mt-2 py-2
              bg-gradient-to-b from-[#348F57] to-[#205930]
              rounded-full
              font-poppins font-bold text-white
              hover:opacity-90 transition-opacity
            "
          >
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;