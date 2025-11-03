"use client";

import { useState } from "react";
import Link from "next/link";
import { CloseSquare, SearchNormal1, HamburgerMenu } from "iconsax-reactjs";
import useMobile from "@/hooks/useMobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  const links = [
    { name: "blog", href: "/blog", title: "Read our articles" },
    { name: "portfolio", href: "/portfolio", title: "See our projects" },
    { name: "contact", href: "/contact", title: "Get in touch with us" },
    { name: "home", href: "/", title: "Go to homepage" },
  ];

  return (
    <header className="bg-background-light text-green py-5 shadow-md block md:fixed md:top-0 md:left-0 w-full z-50 border-b border-b-green">
      <nav
        className="container mx-auto flex justify-between items-center px-4 py-3 md:px-8"
        aria-label="Main navigation"
      >
        {/* Left icons */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            aria-label="Search"
            className="hover:text-primary transition-colors"
          >
            <SearchNormal1 size="24" variant="Outline" />

          </button>
        </div>

        {/* Center links */}
        <ul className="hidden md:flex gap-8 text-[16px] font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                title={link.title}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right logo */}
        <Link href={"/"}>
          <h1 className="text-black text-2xl font-bold select-none">
            Board <span className="text-green">&</span> Vellum
          </h1>
        </Link>

        {/* Mobile menu button */}
        
          <button
            className="flex md:hidden text-neutral-800"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <CloseSquare size="28" className="text-green" variant="Bold" />
            ) : (
              <HamburgerMenu size="28" className="text-green" />
            )}
          </button>
      
      </nav>

      {/* Mobile menu */}
      {isMobile && (
        <>
          {isOpen && (
            <div className="bsolute top-full left-0 w-full   items-center justify-center bg-white text-green border-t border-neutral-200 shadow-sm animate-slideDown">
              <ul className="flex flex-col items-center justify-center py-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      title={link.title}
                      className=" text-green font-medium hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    aria-label="Search"
                    className=" hidden md:flex text-neutral-800 hover:text-primary transition-colors"
                  >
                    <SearchNormal1 size="24" variant="Outline" />
                  </button>
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </header>
  );
}
