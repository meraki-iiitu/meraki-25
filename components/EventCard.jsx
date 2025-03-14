'use client';

import Image from 'next/image';

export default function EventCard({ title, text, image, eventNumber = 1 }) {
  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-gray-900 mb-7 text-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="opacity-80" />
      </div>

      {/* Text Content */}
      <div className="p-6 bg-black bg-opacity-80 flex flex-col">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="text-yellow-400 text-3xl mr-2">{`<${eventNumber}>`}</span>
          {title}
        </h2>
        <p className="text-base mt-2 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
