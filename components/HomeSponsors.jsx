export default function HomeSponsors() {
    return (
      <div
        className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-8 md:px-16 lg:px-24 md:bg-contain"
        style={{
          backgroundImage: "url('/images/backgrounds/sponsors_left.jpeg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
  
        <div className="relative w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden max-h-screen">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 space-y-8 md:space-y-0 md:space-x-12">
            {/* Left-side text */}
            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide leading-relaxed">
                We extend our sincere thanks to our sponsors, whose generous
                support fuels the success of{" "}
                <span className="font-bold text-blue-300">MERAKI</span>. We deeply
                appreciate their commitment to innovation and technology.
              </p>
            </div>
  
            {/* Right-side sponsor boxes */}
            <div className="w-full md:w-1/2 flex flex-col sm:flex-row md:flex-col items-center justify-center gap-6 lg:gap-8">
              <div
                className="w-40 h-40 md:w-55 md:h-55 lg:w-65 lg:h-65 flex items-center justify-center 
                  bg-white transition-all duration-300 
                  shadow-lg hover:shadow-2xl rounded-xl md:self-end transform hover:-translate-y-2"
              >
                <img
                  // src=""
                  alt="Sponsor 1"
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className="w-40 h-40 md:w-55 md:h-55 lg:w-65 lg:h-65 flex items-center justify-center 
                  bg-white transition-all duration-300 
                  shadow-lg hover:shadow-2xl rounded-xl md:self-start transform hover:-translate-y-2"
              >
                <img
                  // src=""
                  alt="Sponsor 2"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  