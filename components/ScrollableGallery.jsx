"use client";
import React, { useState } from "react";
import LeftImageSection from "./LeftImageSection";
import RightImageSection from "./RightImageSection";
import { MarqueeDemoVertical } from "./Marquee";

const data = [
  { name: "Vansh Namdev", img: "https://avatar.vercel.sh/jack" },
  { name: "Pranav Garg", img: "https://avatar.vercel.sh/jill" },
  { name: "John Doe", img: "https://avatar.vercel.sh/john" },
  { name: "Jane Smith", img: "https://avatar.vercel.sh/jane" },
  { name: "Jenny Wilson", img: "https://avatar.vercel.sh/jenny" },
  { name: "James Brown", img: "https://avatar.vercel.sh/james" },
];

export default function ScrollableGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center text-white relative overflow-hidden ">
      {/* Four Sections Grid with Ratio 10% - 30% - 50% - 10% */}
      <div className="grid grid-cols-[10%_45%_35%_10%] w-full h-full items-center">
        {/* Left Marquee */}
        <div className="h-full flex items-center justify-center lg:ml-2.5 ml-2.5">
          <MarqueeDemoVertical names={data} currentIndex={currentIndex} />
        </div>

        {/* Left Image Section */}
        <div className="flex w-full h-full overflow-hidden items-center justify-center lg:ml-6 sm:ml-1 md:ml-1.5 lg:w-[600px] lg:h-[600px]">
          <LeftImageSection data={data[currentIndex]} />
        </div>

        {/* Right Image Section */}
        <div className="flex w-full h-full overflow-hidden items-center justify-center">
          <RightImageSection
            data={data[currentIndex]}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>

        {/* Right Marquee with slight left margin */}
        <div className="h-full flex items-center justify-center  lg:ml-12 mr-2">
          <MarqueeDemoVertical names={data} currentIndex={currentIndex} />
        </div>
      </div>

     
    </div>
  );
}
