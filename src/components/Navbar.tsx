import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({coin}: {coin:number}) => {
  return (
    <>
      <nav className=" px-6 py-3 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between container mx-auto ">
          <img src={Logo} alt="BPL" className="h-20 w-auto cursor-pointer" />

          <div className="flex items-center gap-4 ">
            <ul className="flex items-center gap-8 text-lg leading-relaxed text-gray-700">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Fixture</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Teams</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Schedules</li>
            </ul>
            <span className=" flex items-center gap-1 text-xl font-semibold text-gray-800 rounded-full border border-amber-300 px-4 py-1.5 ml-4 cursor-pointer">
              <span className="ml-2.5">{coin}</span> 
              <span className="font-semibold">Coin</span> 
              <AiFillDollarCircle className="text-amber-500 text-2xl" />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
