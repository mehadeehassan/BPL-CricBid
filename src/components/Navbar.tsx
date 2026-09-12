import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const navLinks = ["Home", "Fixture", "Teams", "Schedules"];

const Navbar = ({ coin }: { coin: number }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm sm:px-6">
        <div className="flex items-center justify-between container mx-auto">
          <img src={Logo} alt="BPL" className="h-14 w-auto cursor-pointer sm:h-16 md:h-20" />

          {/* Desktop nav */}
          <div className="hidden items-center gap-4 lg:flex">
            <ul className="flex items-center gap-8 text-lg leading-relaxed text-gray-700">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Fixture</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Teams</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Schedules</li>
            </ul>
            <span className="flex items-center gap-1 text-xl font-semibold text-gray-800 rounded-full border border-amber-300 px-4 py-1.5 ml-4 cursor-pointer">
              <span className="ml-2.5">{coin}</span>
              <span className="font-semibold">Coin</span>
              <AiFillDollarCircle className="text-amber-500 text-2xl" />
            </span>
          </div>

          {/* Mobile: coin badge + menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <span className="flex items-center gap-1 text-sm font-semibold text-gray-800 rounded-full border border-amber-300 px-3 py-1 cursor-pointer">
              <span>{coin}</span>
              <AiFillDollarCircle className="text-amber-500 text-lg" />
            </span>
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="container mx-auto mt-3 flex flex-col gap-1 border-t border-gray-100 pt-3 lg:hidden">
            {navLinks.map((link) =>
              link === "Home" ? (
                <Link
                  key={link}
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                >
                  {link}
                </Link>
              ) : (
                <span
                  key={link}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer rounded-lg px-3 py-2.5 text-base text-gray-700 hover:bg-gray-100 hover:text-amber-500"
                >
                  {link}
                </span>
              )
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
