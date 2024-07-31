/** @format */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const pathname = usePathname();
  const navItems = [
    { id: "home", label: "HOME", href: "/" },
    { id: "about", label: "ABOUT", href: "/about" },
    { id: "services", label: "SERVICES", href: "/services" },
    { id: "works", label: "WORKS", href: "/works" },
    { id: "blogs", label: "BLOGS", href: "/blogs" },
    { id: "contact", label: "CONTACT", href: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden md:flex flex-col justify-between h-full py-4 px-6 bg-[#141313] text-white">
        <div>
          <h5 className="pt-10 text-2xl">Jac.</h5>
          <div className="mt-16 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <p
                  className={`pb-4 cursor-pointer font-thin transition-colors duration-300 ease-in-out ${
                    pathname === item.href
                      ? "font-bold text-white"
                      : "font-thin"
                  }`}>
                  <span
                    className={`relative ${
                      pathname === item.href
                        ? "font-bold text-white active-text"
                        : "font-thin"
                    }`}>
                    {item.label}
                    {pathname === item.href && (
                      <span className="line-through-gradient"></span>
                    )}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-16 space-y-4">
          <div>
            <Image
              src="/assets/images/behance.svg"
              width={40}
              height={40}
              alt="Behance"
            />
          </div>
          <div>
            <Image
              src="/assets/images/ball.svg"
              width={40}
              height={40}
              alt="Ball"
            />
          </div>
          
          <div>
            <Image
              src="/assets/images/instagram.svg"
              width={40}
              height={40}
              alt="Instagram"
            />
          </div>
        </div>
        <p className="text-xs mt-8 leading-5 mb-2">
          Copyright © 2023 Jacob Jones. All rights reserved.
        </p>
      </div>

      {/* Navbar for smaller screens */}
      <nav className="bg-transparent pt-8 px-10 flex justify-between items-center relative md:hidden">
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`text-black ml-auto ${isMenuOpen ? "hidden" : "block"}`}>
          <MenuIcon style={{ color: "black" }} />
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full pt-10 pb-5 bg-[#000] z-50 flex flex-col items-center justify-center">
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-0 right-0 mt-2 mr-2">
              <CloseIcon style={{ color: "black" }} />
            </button>
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <p
                  className={`pb-4 cursor-pointer font-thin transition-colors duration-300 ease-in-out ${
                    pathname === item.href
                      ? "font-bold text-white"
                      : "font-thin"
                  }`}>
                  <span
                    className={`relative ${
                      pathname === item.href
                        ? "font-bold text-white active-text"
                        : "font-thin"
                    }`}>
                    {item.label}
                    {pathname === item.href && (
                      <span className="line-through-gradient"></span>
                    )}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
