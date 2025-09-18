"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-2xl cursor-pointer bg-gray-100 hover:bg-gray-200 
                 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className="w-5 h-5 text-indigo-400" />
      ) : (
        <SunIcon className="w-5 h-5 text-amber-500" />
      )}
    </button>
  );
}
