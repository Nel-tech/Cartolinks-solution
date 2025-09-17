"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavIcon from "./Header/NavIcon";
import CircleNav from "./Header/CircleNav";
import {
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
  PhotoIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { HeadsetIcon } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import ActionButton from "./Header/ActionButton";
import clsx from "clsx";

/* -------------------- Nav Links -------------------- */
const NAV_LINKS = [
  { key: "home", src: "/icons/Home.svg", alt: "Home", active: true },
  { key: "gallery", src: "/icons/Image.svg", alt: "Gallery" },
  { key: "video", src: "/icons/Video.svg", alt: "Video" },
  { key: "enhancer", src: "/icons/Enhancer.svg", alt: "Enhancer" },
  { key: "realtime", src: "/icons/RealTime.svg", alt: "Real-time" },
  { key: "compass", src: "/icons/Edit.svg", alt: "Edit" },
  { key: "assets", src: "/icons/Assets.svg", alt: "Assets" },
];

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // tweak threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-2xl bg-gray-100 hover:bg-gray-200 
                 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className="w-5 h-5 text-indigo-400" />
      ) : (
        <SunIcon className="w-5 h-5 text-amber-500" />
      )}
    </button>
  );

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between px-6 sm:px-8 md:gap-3 lg:px-12 pt-4 pb-3">
        {/* Left: Logo & User */}
        <div className="flex items-center gap-4">
          {/* Light Mode Logo */}
          <Image
            src="/images/Dark-Logo.svg"
            width={30}
            height={30}
            alt="Krea Ai Light"
            className="block dark:hidden"
          />

          {/* Dark Mode Logo */}
          <Image
            src="/images/Light-logo.svg"
            width={30}
            height={30}
            alt="Krea Ai Dark"
            className="hidden dark:block"
          />

          <div className="hidden sm:flex items-center gap-2">
            <CircleNav />
            <span className="font-semibold text-sm hidden lg:inline text-gray-900 dark:text-gray-100">
              benevolenternimblebot
            </span>
            <ChevronDownIcon className="w-4 h-4 hidden lg:inline text-gray-900 dark:text-gray-100" />
          </div>
        </div>

        {/* Center Nav */}
        <div className="hidden md:flex gap-4 bg-gray-100 dark:bg-zinc-800 px-3 py-2 rounded-2xl">
          {NAV_LINKS.map(({ key, src, alt, active }) => (
            <NavIcon key={key} src={src} alt={alt} active={active} />
          ))}
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden sm:flex items-center gap-5 md:gap-3">
          <ActionButton Icon={PhotoIcon} label="Gallery" />
          <ActionButton Icon={HeadsetIcon} label="Support" />

          <button className="p-2 rounded-2xl text-gray-900 bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors">
            <BellIcon className="w-5 h-5" />
          </button>

          <ThemeToggle />
          <CircleNav />
        </div>

        {/* Right Actions (Mobile) */}
        <div className="flex items-center gap-2 sm:hidden">
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

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="sm:hidden"
      >
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-zinc-900 shadow-lg overflow-y-auto transition-colors">
          <div className="flex items-center justify-between p-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-400 dark:hover:bg-zinc-800 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-2 px-4 pb-6">
            <div className="space-y-4">
              {NAV_LINKS.map(({ key, src, alt, active }) => (
                <a
                  key={key}
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold text-gray-800 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors"
                >
                  <Image
                    src={src}
                    width={20}
                    height={20}
                    alt={alt}
                    className={`${active ? "opacity-100" : "opacity-60"} transition-opacity dark:invert`}
                  />
                  {alt}
                </a>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
