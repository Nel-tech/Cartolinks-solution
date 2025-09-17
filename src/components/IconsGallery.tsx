"use client";

import React from "react";
import { iconcards } from "@/helpers/mock";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function IconsGallery() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <header className="flex justify-between gap-4 mb-6">
        <h1 className="text-xl font-semibold text-black">Generate</h1>
        <button className="flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors">
          <span>Show all</span>
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      </header>

      {/* Icon cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {iconcards.map((card) => {
          return (
            <div
              key={card.id}
              className="flex items-start p-2 gap-3"
            >
              {/* Left: Image + Info */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                {/* Icon Image */}
                <div
                  className={`${card.style} flex items-center justify-center w-10 h-10 relative flex-shrink-0`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill={true}
                    className="object-contain"
                  />
                </div>

                {/* Title + Description */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm font-semibold text-gray-900">
                      {card.title}
                    </h1>
                    {card.isNew && (
                      <span className="rounded-md bg-blue-500 px-2 py-0.5 text-xs font-medium text-white">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xs sm:max-w-sm">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Right: Button */}
              {/* <button className="ml-auto cursor-pointer rounded-lg bg-[#F3F4F6] px-3 py-1.5 text-xs font-medium text-black hover:bg-black hover:text-white transition-colors flex-shrink-0">
                {card.buttonText}
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IconsGallery;
