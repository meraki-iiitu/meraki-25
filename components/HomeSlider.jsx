// // // "use client";
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import {
// // //   Navigation,
// // //   Pagination,
// // //   Autoplay,
// // //   EffectCoverflow,
// // // } from "swiper/modules";
// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import "swiper/css/pagination";
// // // import "swiper/css/effect-coverflow";
// // // import EventCard from "./EventCard";

// // // export default function HomeSlider() {
// // //   return (
// // //     <div
// // //       className="relative flex items-center justify-center h-screen overflow-hidden bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-8 md:px-16 lg:px-24 transition-transform duration-700 ease-in-out transform "
// // //       style={{
// // //         backgroundImage: "url('/images/backgrounds/Slider_Home.jpeg')",
// // //       }}
// // //     >
// // //       <Swiper
// // //         modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
// // //         effect="coverflow"
// // //         spaceBetween={40}
// // //         slidesPerView={1}
// // //         centeredSlides={true}
// // //         loop={true}
// // //         autoplay={{ delay: 2500, disableOnInteraction: false }}
// // //         navigation
// // //         pagination={{
// // //           clickable: true,
// // //           dynamicBullets: true,
// // //           renderBullet: (index, className) =>
// // //             `<span class='${className} bg-white'></span>`,
// // //         }}
// // //         coverflowEffect={{
// // //           rotate: 0,
// // //           stretch: 0,
// // //           depth: 180,
// // //           modifier: 2,
// // //           scale: 0.85,
// // //         }}
// // //         breakpoints={{
// // //           768: { slidesPerView: 2, spaceBetween: 50, scale: 0.85 },
// // //           1024: { slidesPerView: 3, spaceBetween: 60, scale: 0.9 },
// // //         }}
// // //         className="w-full max-w-7xl"
// // //       >
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={1}
// // //             title="AI & Machine Learning"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event1.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={2}
// // //             title="Blockchain Development"
// // //             text="Event details here."
// // //             image="/images/backgrounds/blockChain_card.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={3}
// // //             title="Cybersecurity Essentials"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event3.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={4}
// // //             title="Cloud Computing"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event4.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={5}
// // //             title="Internet of Things (IoT)"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event5.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={6}
// // //             title="Big Data & Analytics"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event6.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={7}
// // //             title="AR/VR Innovations"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event7.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={8}
// // //             title="Software Development Trends"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event8.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={9}
// // //             title="DevOps & Automation"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event9.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={10}
// // //             title="Data Science Breakthroughs"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event10.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={11}
// // //             title="Quantum Computing"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event11.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={12}
// // //             title="5G Technology Advancements"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event12.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={13}
// // //             title="Robotics & AI"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event13.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={14}
// // //             title="Edge Computing"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event14.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={15}
// // //             title="Digital Transformation"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event15.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={16}
// // //             title="Open Source Innovations"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event16.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={17}
// // //             title="Ethical AI & Bias"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event17.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={18}
// // //             title="Metaverse & Web 3.0"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event18.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={19}
// // //             title="Future of Work"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event19.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={20}
// // //             title="AI in Healthcare"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event20.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //         <SwiperSlide>
// // //           <EventCard
// // //             eventNumber={21}
// // //             title="Green Technology"
// // //             text="Event details here."
// // //             image="/images/backgrounds/event21.jpeg"
// // //           />
// // //         </SwiperSlide>
// // //       </Swiper>
// // //     </div>
// // //   );
// // // }

// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import EventCard from "./EventCard";
// // import CardsData from "./CardsData";
// import CardsData from "@/constants/CardsData";

// export default function HomeSlider() {
//   return (
//     <div
//       className="relative flex items-center justify-center h-screen overflow-hidden bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-8 md:px-16 lg:px-24 transition-transform duration-700 ease-in-out transform "
//       style={{
//         backgroundImage: "url('/images/backgrounds/Slider_Home.jpeg')",
//       }}
//     >
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
//         effect="coverflow"
//         spaceBetween={40}
//         slidesPerView={1}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{ delay: 7500, disableOnInteraction: false }}
//         navigation

//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 180,
//           modifier: 2,
//           scale: 0.75,
//         }}
//         breakpoints={{
//           375: { slidesPerView: 1.5, spaceBetween: 20, scale: 1 },
//           768: { slidesPerView: 2, spaceBetween: 50, scale: 0.85 },
//           1024: { slidesPerView: 2.5, spaceBetween: 60, scale: 2 },
//         }}

//         pagination={{
//           clickable: true,
//           dynamicBullets: false,
//           renderBullet: (index, className) => `<span class='${className} bg-white'></span>`,
//         }}
//         className="w-full max-w-7xl"
//       >
//         {CardsData.map((event, index) => (
//           <SwiperSlide key={index}>
//             <EventCard
//               id={event.id}
//               name={event.name}
//               overview={event.overview}
//               image={event.image}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import EventCard from "./EventCard";
import CardsData from "@/constants/CardsData";

export default function HomeSlider() {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-8 md:px-16 lg:px-24 transition-transform duration-700 ease-in-out transform"
      style={{
        backgroundImage: "url('/images/backgrounds/Slider_Home.jpeg')",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 7500, disableOnInteraction: false }}
        navigation
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 2,
          scale: 0.85,
        }}
        breakpoints={{
          375: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 50 },
          1024: { slidesPerView: 2.75, spaceBetween: 60 },
        }}
        className="w-full max-w-7xl"
      >
        {CardsData?.length > 0 ? (
          CardsData.map((event, index) => (
            <SwiperSlide key={index}>
              <EventCard
                id={event.id}
                name={event.name}
                overview={event.overview}
                image={event.image}
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-white text-lg">No events available</p>
        )}
      </Swiper>

      {/* Customised pagination*/}
      <div className="custom-pagination mt-6 flex justify-center space-x-2"></div>

      <style>
        {`
          .swiper-pagination {
    position: absolute !important;
    bottom: 10px; /* Adjust position to be closer */
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: auto;
    max-width: 90%;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #a1a1aa; 
    opacity: 0.7;
    border-radius: 50%;
    transition: all 0.3s ease;
    margin: 0 5px;
  }
  .swiper-pagination-bullet-active {
    width: 12px; /* Slightly smaller than before */
    height: 12px;
    background-color: #ffffff;
    opacity: 1;
  }

  /* Adjust for smaller screens */
  @media (max-width: 640px) {
    .swiper-pagination {
      bottom: 5px; /* Move up slightly */
    }
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      margin: 0 3px; /* Reduce spacing */
    }
    .swiper-pagination-bullet-active {
      width: 10px;
      height: 10px;
    }
        }
        `}
      </style>
    </div>
  );
}
