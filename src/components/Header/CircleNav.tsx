import React from "react";

function CircleNav() {
  return (
    <div>
      <div
        className="
    w-6 h-6 rounded-full
    bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
    shadow-md ring-1 ring-white/50 dark:ring-black/30
    flex items-center justify-center
    relative overflow-hidden cursor-pointer
  "
      >
        <div
          className="
      absolute inset-0 
      bg-white/10 
      rounded-full
      mix-blend-overlay
    "
        />
      </div>
    </div>
  );
}

export default CircleNav;
