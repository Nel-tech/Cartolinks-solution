"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavIcon from "./Header/NavIcon";
import CircleNav from "./Header/CircleNav";
import Link from "next/link";
import {
  ChevronDownIcon,
  PhotoIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { HeadsetIcon } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import ActionButton from "./Header/ActionButton";
import clsx from "clsx";
import { NAV_LINKS } from "@/helpers/mock";
import ThemeToggle from "./Header/ThemeToggle";

export default function Header() {

  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* -------------------- Lifecycle -------------------- */
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  /* -------------------- Handlers -------------------- */
 

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between px-6 sm:px-8 lg:px-12 pt-4 pb-3">
        {/* -------------------- Left: Logo & User -------------------- */}
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

          {/* User Info (desktop only) */}
          <div className="hidden sm:flex items-center gap-2">
            <CircleNav />
            <span className="font-semibold text-sm hidden lg:inline text-gray-900 dark:text-gray-100">
              benevolenternimblebot
            </span>
            <ChevronDownIcon className="w-4 h-4 hidden lg:inline text-gray-900 dark:text-gray-100" />
          </div>
        </div>

        {/* -------------------- Center Nav -------------------- */}
        <div className="hidden md:flex gap-4 bg-gray-100 dark:bg-white px-3 py-2 rounded-2xl">
          {NAV_LINKS.map(({ key, src, alt, active }) => (
            <Link href="#" key={key}>
              <NavIcon src={src} alt={alt} active={active} />
            </Link>
          ))}
        </div>

        {/* -------------------- Right Actions (Desktop) -------------------- */}
        <div className="hidden sm:flex items-center gap-5 md:gap-3">
          <ActionButton Icon={PhotoIcon} label="Gallery" />
          <ActionButton Icon={HeadsetIcon} label="Support" />

          <button className="p-2 rounded-2xl cursor-pointer text-gray-900 bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors">
            <BellIcon className="w-5 h-5" />
          </button>

          <ThemeToggle />
          <CircleNav />
        </div>

        {/* -------------------- Right Actions (Mobile) -------------------- */}
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

      {/* -------------------- Mobile Menu -------------------- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="sm:hidden"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-zinc-900 shadow-lg overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex items-center justify-end p-4">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-400 dark:hover:bg-zinc-800 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Links */}
              <div className="mt-2 px-4 pb-6">
                <div className="space-y-4">
                  {NAV_LINKS.map(({ key, src, alt, active }) => (
                    <Link
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
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider + Profile Section */}
              <div className="border-t border-gray-200 dark:border-zinc-800 px-4 py-4">
                <div className="flex items-center gap-2">
                  <CircleNav />
                  <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    benevolenternimblebot
                  </span>
                  <ChevronDownIcon className="w-4 h-4 text-gray-900 dark:text-gray-100" />
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
