"use client";

import { useEffect, useState } from "react";
import { Bars3Icon, BellIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { HeadsetIcon } from "lucide-react";
import clsx from "clsx";
import Logo from "./Header/Logo";
import UserProfile from "./Header/UserProfile";
import DesktopNav from "./Header/DesktopNav";
import MobileMenu from "./Header/MobileMenu";
import ActionButton from "./Header/ActionButton";
import CircleNav from "./Header/CircleNav";
import ThemeToggle from "./Header/ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 transition-colors duration-300",
          isScrolled
            ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="flex items-center justify-between px-6 sm:px-8 md:gap-3  pt-4 pb-3">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <Logo />
            <div className="hidden sm:flex">
              <UserProfile />
            </div>
          </div>

          {/* Center Section */}
          <div className="hidden md:flex">
            <DesktopNav />
          </div>

          {/* Right Section (Desktop) */}
          <div className="hidden sm:flex items-center gap-5 md:gap-3">
            <ActionButton Icon={PhotoIcon} label="Gallery" />
            <ActionButton Icon={HeadsetIcon} label="Support" />
            <button className="p-2 rounded-2xl cursor-pointer text-gray-900 bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors">
              <BellIcon className="w-5 h-5" />
            </button>
            <ThemeToggle />
            <CircleNav />
          </div>

          {/* Right Section (Mobile) */}
          <div className="flex items-center gap-4 sm:hidden">
            <button className="p-2 rounded-2xl text-gray-900 bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors">
              <BellIcon className="w-5 h-5" />
            </button>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:text-gray-300 dark:hover:bg-zinc-800 transition-colors"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
