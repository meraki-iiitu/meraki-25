export default function HomeContact() {
    return (
      <div
        className="relative flex items-center justify-center w-screen min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-8 md:px-16 lg:px-24 md:bg-contain"
        style={{
          backgroundImage: "url('/images/backgrounds/Contact_Home.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-12 lg:p-16 space-y-6 md:space-y-0 md:space-x-12">
            {/* Left-side text */}
            <div className="w-full max-w-lg text-white text-center md:text-left">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide leading-relaxed">
                Have questions or need assistance? We're here to help! Feel free
                to get in touch with us. We're eager to hear from you!
              </p>

              {/* Button */}
              <div className="mt-6">
                <button className="bg-white text-black px-6 py-2 md:px-8 md:py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
