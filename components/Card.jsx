const Card = () => {
  return (
    <div
      className="absolute hidden md:block inset-0 z-50 bg-black/60 backdrop-blur-xl xl:w-[900px] lg:w-[750px] md:w-[600px] h-full"
      style={{
        clipPath:
          "polygon(86% 0, 100% 0, 100% 16%, 86% 26%, 86% 74%, 100% 84%, 100% 100%, 86% 100%, 0 100%, 0 0)",
      }}
    >
    </div>
  );
};

export default Card;
