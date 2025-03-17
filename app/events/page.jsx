"use client";

import EventCard from "../../components/EventCard";
import CardsData from "@/constants/CardsData";

export default function Events() {
  return (
    <>
      <div
        className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 pt-10 mt-20 mb-20 pb-10 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(./../../images/backgrounds/Events.jpeg)",
        }}
      >
        {CardsData?.length > 0 ? (
          CardsData.map((event, index) => (
            <div 
              key={event.id}
              className={`flex md:${index % 6 < 2 ? 'justify-start' : 'justify-end'} lg:${index % 6 < 3 ? 'justify-start' : 'justify-end'} justify-center w-[90%] mx-auto gap-x-10 hover:scale-105 cursor-pointer`}
            >
              <EventCard
                id={event.id}
                name={event.name}
                overview={event.overview}
                image={event.image}
              />
            </div>
<<<<<<< HEAD
          ))
        ) : (
          <p className="text-white text-lg text-center col-span-full">No events available</p>
        )}
      </div>
    </>
  );
=======
        </>
    );
>>>>>>> 1688e3d4c01cc4af407e84a2d3dcc3963dbfd5e4
}