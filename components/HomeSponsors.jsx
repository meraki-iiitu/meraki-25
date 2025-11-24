export default function HomeSponsors() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden 
                 bg-cover bg-center bg-no-repeat px-4 py-8"
      style={{
        backgroundImage: "url('/images/backgrounds/sponsors_left.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row w-full max-w-7xl items-center justify-between 
                      space-y-8 md:space-y-0 md:space-x-12 p-6 sm:p-12">
        
        {/* Left/Text Side */}
                <div className="w-full md:w-1/2 text-white space-y-6">
           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
             We extend our sincere thanks to our sponsors
             Their generous support fuels the success of{" "}
             <span className="font-bold text-blue-300">MERAKI</span>.
             We deeply appreciate their commitment to innovation and technology.
           </h2>
        </div>

        {/* Right/Sponsors Side */}
        <div className="w-full md:w-1/2">
          {/* Responsive 2x2 Grid */}
          <div className="grid grid-cols-2 gap-0 md:gap-6 place-items-center">
            
            {/* Sponsor 1 */}
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center
                        w-40 h-40 sm:w-32 sm:h-32 md:w-45 lg:w-65 md:h-45 lg:h-65
                        bg-transparent transition-all duration-300 
                        shadow-md hover:shadow-xl rounded-xl 
                        transform hover:-translate-y-1"
            >
              <img
                src="./../logos/unstop.png"
                alt="Unstop"
                className="object-cover w-4/5 h-4/5 rounded-2xl"
              />
            </a>

            {/* Sponsor 2 */}
            <a
              href="https://www.instagram.com/sambaruna_official?igsh=ZjZ5YWY2aWoyemY2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center
                        w-40 h-40 sm:w-32 sm:h-32 md:w-45 lg:w-65 md:h-45 lg:h-65
                        bg-transparent transition-all duration-300 
                        shadow-md hover:shadow-xl rounded-xl 
                        transform hover:-translate-y-1"
            >
              <img
                src="./../logos/sambar.png"
                alt="Sambar"
                className="object-cover w-4/5 h-4/5 rounded-2xl"
              />
            </a>

            {/* Sponsor 3 */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center
                        w-40 h-40 sm:w-32 sm:h-32 md:w-45 lg:w-65 md:h-45 lg:h-65
                        bg-transparent transition-all duration-300 
                        shadow-md hover:shadow-xl rounded-xl 
                        transform hover:-translate-y-1"
            >
              <img
                src="./../logos/hungerz.png"
                alt="Hungerz"
                className="object-cover w-4/5 h-4/5 rounded-2xl"
              />
            </a>

            {/* Sponsor 4 */}
            <a
              href="https://www.instagram.com/crispy_adda095?igsh=MWgzNDUyZWJrOWprZw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center
                        w-40 h-40 sm:w-32 sm:h-32 md:w-45 lg:w-65 md:h-45 lg:h-65
                        bg-transparent transition-all duration-300 
                        shadow-md hover:shadow-xl rounded-xl 
                        transform hover:-translate-y-1"
            >
              <img
                src="./../logos/crispy.png"
                alt="Crispy"
                className="object-cover w-4/5 h-4/5 rounded-2xl"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
