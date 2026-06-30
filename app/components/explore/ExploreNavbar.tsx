"use client";

import Link from "next/link";
import { User } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore", active: true },
  { name: "Group Tours", href: "/group-tours" },
  { name: "Destination", href: "/destination" },
  { name: "Blog", href: "/blog" },
  { name: "Forum", href: "/forum" },
];

export default function ExploreNavbar() {
  return (
    <header className="w-full border-b border-black/5 bg-white">
      <div className="mx-auto grid max-w-[1800px] grid-cols-[auto_1fr_auto] items-center px-8 py-6 xl:px-16">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/explore/greenlogo.svg"
            alt="Hikepilot"
            className="h-[56px] w-auto object-contain"
          />
        </Link>

        {/* Nav center */}
        <nav className="hidden items-center justify-center gap-12 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-[20px] tracking-[0.02em] transition ${
                link.active
                  ? "font-bold text-[#191717]"
                  : "font-normal text-[#191717]/80 hover:text-[#191717]"
              }`}
            >
              {link.name}

              {link.active && (
                <span className="absolute left-1/2 top-[34px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#191717]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-8">
          <button className="rounded-full bg-gradient-to-b from-[#348F57] to-[#205930] px-10 py-4 text-[18px] font-bold tracking-[0.02em] text-white shadow-[0px_39px_16px_rgba(0,0,0,0.01),0px_22px_13px_rgba(0,0,0,0.03),0px_10px_10px_rgba(0,0,0,0.05),0px_2px_5px_rgba(0,0,0,0.06)] transition hover:scale-[1.02]">
            Join Now
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-black/5 transition hover:bg-black/5">
            <User className="h-5 w-5 text-[#191717]/60" />
          </button>
        </div>
      </div>
    </header>
  );
}