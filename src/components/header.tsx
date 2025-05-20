"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scroll down
      } else {
        setIsVisible(true); // scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-background/80 h-16 md:h-25 xl:h-[140px] flex items-center px-6 w-screen shadow-sm md:shadow-none`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={161}
            height={48}
            className="w-[107px] md:w-[161px] h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12 text-md items-center">
          <Link href="#" className="transition-colors hover:text-primary">
            About us
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            Furniture <MdKeyboardArrowDown size={24} />
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            Partnership
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-primary px-6 py-3 text-md font-medium">
            Sign Up
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-soft-brown rounded-lg text-primary hover:bg-soft-brown/80 transition">
            <MdOutlineShoppingBag size={24} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <HiOutlineMenuAlt3 size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/80 z-10 shadow-md px-6 py-4 flex flex-col gap-4 md:hidden">
          <Link href="#">About us</Link>
          <Link href="#">Furniture</Link>
          <Link href="#">Partnership</Link>
          <Link href="#">Contact</Link>
          <div className="flex w-fill gap-4">
            <button className="btn-primary w-full py-2">Sign Up</button>
            <button className="flex items-center justify-center p-2 bg-soft-brown rounded-lg text-primary hover:bg-soft-brown/80 transition">
              <MdOutlineShoppingBag size={24} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
