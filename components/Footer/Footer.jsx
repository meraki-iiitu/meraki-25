import { Iceland } from "next/font/google";
const iceland = Iceland({ subsets: ["latin"], weight: "400" });
import Image from "next/image";
import insta from '@/public/logos/insta.png';
import linkedIn from '@/public/logos/linkedIn.png';

const Footer = () => {
  return (
    <>
      <div className="relative bottom-0 left-0 right-0 z-50 mt-[-70px] hidden md:block w-full">
        <div
          className={`bg-black w-full h-40 flex flex-col md:flex-row justify-between px-6 py-4 ${iceland.className}`}
          style={{
            clipPath: "polygon(38% 27%, 78% 27%, 81% 0, 100% 0, 100% 100%, 0 100%, 0 0, 35% 0)",
          }}
        >
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-4xl sm:text-[2rem] md:text-[2.3rem] lg:text-[2.8rem] xl:text-6xl tracking-wide">
              MERAKI - AY'25
            </h2>
            <div className="flex gap-4 md:gap-6">
              <a href="#">
                <Image src={insta} alt="Follow us on Instagram" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              </a>
              <a href="#">
                <Image src={linkedIn} alt="Connect with us on LinkedIn" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6 items-end">
            <h2 className="text-4xl sm:text-[2rem] md:text-[2.3rem] lg:text-[2.8rem] xl:text-6xl tracking-wide">
              IIIT UNA
            </h2>
            <p className="hidden sm:block w-[24rem] md:w-[26rem] lg:w-[38rem] xl:w-[46rem] text-sm md:text-lg tracking-wide leading-tight">
              Welcome to MERAKI: Where Creativity Meets Technology, the annual
              celebration of innovation, creativity, and technology at IIIT UNA.
              We are more than just a technical fest.
            </p>
          </div>
        </div>
      </div>
      <div className={`md:hidden relatuve mt-[-60px] bottom-0 ${iceland.className} left-0 right-0 bg-black w-full h-30 flex flex-col justify-center items-center px-6 py-4 z-50`}>
        <h2 className="text-2xl tracking-widest text-white">MERAKI - AY'25</h2>
        <h2 className="text-2xl tracking-widest text-white">IIIT UNA</h2>
        <div className="flex gap-4 mt-2">
          <a href="#">
            <Image src={insta} alt="Follow us on Instagram" className="w-8 h-8" />
          </a>
          <a href="#">
            <Image src={linkedIn} alt="Connect with us on LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
