import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/helpers/mock";
import UserProfile from "./UserProfile";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className="sm:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-zinc-900 shadow-lg overflow-y-auto"
          >
            <div className="flex items-center justify-end p-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-2 text-gray-800 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-400 dark:hover:bg-zinc-800 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
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
            <div className="border-t border-gray-200 dark:border-zinc-800 px-4 py-4">
              <UserProfile />
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
