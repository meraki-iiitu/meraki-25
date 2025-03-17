import Image from "next/image";
import event from "@/public/images/backgrounds/event.png";
import { Iceland } from "next/font/google";

const iceland = Iceland({ subsets: ["latin"], weight: "400" });

const EventCard = ({ id, name, overview }) => {
  return (
    <div className="relative flex flex-col justify-end w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[460px] overflow-hidden rounded-2xl">
      {/* Background Image */}
      <Image
        src={event}
        alt={`Event Number ${id} Image`}
        className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
      />

      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx OR option xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      Event ID (Top Left) */}
      {/* <div className="absolute top-4 left-4 text-yellow-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider z-10">
        <h2 className={iceland.className}>{`#${id}`}</h2>
      </div>*/}
      <div className="absolute w-full h-[55%] rounded-b-2xl">


        {/* <div className="absolute w-[35%] p-0  
        text-yellow-400 tracking-wider sm:p-1 flex 
        text-3xl sm:text-3xl md:text-4xl xl:text-5xl 
        font-extrabold
        items-center text-end bg-transparent left-0 h-[30.5%] rounded-tl-4xl rounded-tr-3xl">
          <h2 className="px-2 sm:px-5 w-full flex flex-wrap">{`</${id}>`}</h2>
        </div> */}
<div className="absolute w-[35%] p-0  
        text-yellow-400 tracking-wider sm:p-1 flex 
        text-4xl sm:text-4xl md:text-4xl xl:text-5xl 
        font-extrabold
        items-center  bg-transparent left-0 h-[30.5%] rounded-tl-4xl rounded-tr-3xl">
  <h2 className="w-full text-end whitespace-nowrap">{`<${id}>`}</h2>
</div>


        <div
          className="absolute w-[65%] font-bold p-0 sm:p-1 flex 
        text-2xl sm:text-3xl md:text-3xl xl:text-4xl 
        items-center 
        bg-neutral-900 
        right-0 h-[30.5%] 
        rounded-tl-4xl rounded-tr-3xl"
        >
          <h2 className="px-2 right-0 sm:px-5 w-full text-start flex flex-wrap">
            {name}
          </h2>
        </div>

        <div className="absolute w-full flex items-center justify-center text-md sm:text-xl md:text-lg lg:text-xl xl:text-2xl bg-neutral-900 bottom-0 h-[70%] rounded-tl-4xl rounded-b-2xl">
          <h2 className="px-5 text-start">{overview}</h2>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
