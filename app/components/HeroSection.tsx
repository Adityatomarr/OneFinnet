import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { PiBicycleFill } from "react-icons/pi";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[100vh] bg-cover bg-center" style={{ backgroundImage: "url('/bicycle2.jpg')", objectFit: "contain" }}>
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-gradient-to-r from-stone-900 to-stone-900/80" />
        <div className="w-1/2 bg-gradient-to-l from-red-600 to-red-600/80" />
      </div>

      <nav className="relative z-10 flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <PiBicycleFill className="h-10 w-10 md:h-20  md:w-20 ml-6 text-white" />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link className="text-sm md:text-xl font-medium text-white hover:text-gray-200" href="#">
            HOME
          </Link>
          <Link className="text-sm md:text-xl  font-medium text-white hover:text-gray-200" href="#">
            BICYCLES
          </Link>
          <Link className="text-sm md:text-xl font-medium text-white hover:text-gray-200" href="#">
            ACCESSORIES
          </Link>
          <Link className="text-sm md:text-xl font-medium text-white hover:text-gray-200" href="#">
            ABOUT US
          </Link>
          <Link className="text-sm md:text-xl font-medium text-white hover:text-gray-200" href="#">
            CONTACT
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <span className="text-sm font-medium">$0.00</span>
          <FaShoppingCart className="h-6 w-6" />
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex h-full ">
        <div className="w-1/2 flex flex-col justify-normal xl:gap-6 p-8  leading-10">
          <span className=" text-4xl md:text-7xl font-bold text-white italic ">Newly Launched</span>
          <h1 className="text-6xl md:text-8xl font-bold italic mb-8 text-white  mt-12">
            Kryo X26
            <br />
            MTB{/* Escaped double quotes around MTB */}
          </h1>
          <div className="space-y-4 mb-8">
            <h2 className="md:text-5xl text-3xl font-bold italic text-white">Specifications:</h2>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 outline-4 bg-white outline-double rounded-full" />
                <span className="text-xl md:text-2xl">  Lightweight 18&quot; Frame</span> {/* Escaped double quote in inch */}
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 outline-4 outline-double bg-white rounded-full" />
                <span className="text-xl md:text-2xl">Steel Suspension Fork</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1 h-1 outline-4 outline-double bg-white rounded-full" />
                <span className="text-xl md:text-2xl">Steel Hardtail Frame</span>
              </li>
            </ul>
          </div>
          <button className="bg-red-600 text-white px-8 py-3 rounded w-fit hover:bg-red-700 transition-colors">
            BUY NOW
          </button>
        </div>
        <div className="w-1/2" />
      </div>
    </div>
  );
};

export default HeroSection;
