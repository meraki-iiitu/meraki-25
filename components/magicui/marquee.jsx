"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  className,
  pauseOnHover = false,
  speed = 10,
  children,
}) {
  return (
    <div className={cn("relative w-full h-screen overflow-hidden", className)}>
      {/* Wrapper to ensure smooth infinite scrolling */}
      <div
        className={cn(
          "flex flex-col absolute inset-0 animate-marquee-vertical",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ "--duration": `${speed}s` }}
      >
        {/* Duplicating children for seamless transition */}
        {children.concat(children).map((child, index) => (
          <div key={index} className="py-6 text-center">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
