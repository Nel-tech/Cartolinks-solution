"use client";

import React from "react";
import { iconcards } from "@/helpers/mock";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function IconsGallery() {
  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <header className="flex justify-between gap-4 mb-6">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          Generate
        </h1>
        <button className="flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
          <span>Show all</span>
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      </header>

      {/* Icon cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {iconcards.map((card) => {
          return (
            <div
              key={card.id}
              className="flex items-start gap-2"
            >
              {/* Left: Icon + Info */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                {/* Icon container */}
                <div
                  className={`${card.style} flex items-center justify-center w-8 h-8 relative flex-shrink-0`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>

                {/* Title + Description */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {card.title}
                    </h1>
                    {card.isNew && (
                      <span className="rounded-md bg-blue-500 px-2 py-0.5 text-xs font-medium text-white">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Right: Button */}
              <button className="ml-auto cursor-pointer rounded-lg bg-[#F3F4F6] dark:bg-gray-800 px-3 py-1.5 text-xs font-medium text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex-shrink-0">
                {card.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IconsGallery;
