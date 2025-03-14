"use client";
import HomeSponsors from "@/components/HomeSponsors";
import HomeSlider from "@/components/HomeSlider";
import HomeContact from "@/components/HomeContact";
import LandingScreen from "@/components/LandingScreen";

export default function Home() {
  return (
    <div
      className="overflow-x-hidden h-screen snap-y snap-mandatory overflow-y-auto"
      style={{
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE/Edge
      }}
    >
      {/* Hide scrollbar for WebKit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="w-full h-screen bg-white snap-start">
        <LandingScreen />
      </div>

      <div className="w-full h-screen snap-start">
        <HomeSlider />
      </div>
      
      <div className="w-full h-screen snap-start">
        <HomeSponsors />
      </div>

      <div className="w-full h-screen snap-start">
        <HomeContact />
      </div>

    </div>
  );
}
