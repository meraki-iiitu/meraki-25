import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

export function MarqueeDemoVertical({ names }) {
  return (
    <div className="relative w-full h-screen z-50">
      {/* ✅ Large Screens - Vertical Marquee */}
      <div className="hidden md:flex h-full w-[50px] md:w-[65px] flex-row items-center justify-center overflow-hidden ml-2">
        <Marquee pauseOnHover vertical className="[--duration:20s] border-l border-r  border-white">
          {names.map((item, index) => (
            <div
              key={index}
              className={cn(
                "text-xl md:text-3xl lg:text-4xl font-extralight text-white",
                "px-4 py-2 md:px-6 md:py-3 flex justify-center items-center whitespace-nowrap -rotate-90 my-16 md:-rotate-90 sm:-rotate-90"
              )}
            >
              <span className="text-gray-400 mr-2">|</span>
              <span>{item.name}</span>
              <span className="text-gray-400 ml-2">|</span>
            </div>
          ))}
        </Marquee>
      </div>

    

      <div className="block md:hidden w-full absolute bottom-0 left-0  z-50 ">
        <Marquee pauseOnHover reverse className="[--duration:15s]   border-white border">
          {names.map((item, index) => (
            <div
              key={index}
              className="text-lg font-light text-white   flex items-center whitespace-nowrap -rotate-90 my-16 md:-rotate-90 sm:-rotate-90"
            >
              <span className="text-gray-400 mx-2">|</span>
              <span>{item.name}</span>
              <span className="text-gray-400 mx-2">|</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
