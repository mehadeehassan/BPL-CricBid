import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Fixture", id: "fixture" },
  { name: "Teams", id: "teams" },
  { name: "Schedules", id: "schedules" },
];

const Navbar = ({ coin }: { coin: number }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white px-4 py-3 shadow-sm sm:px-6">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <button onClick={() => handleNavigation("home")}>
          <img
            src={Logo}
            alt="BPL"
            className="h-14 w-auto cursor-pointer sm:h-16 md:h-20"
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-4 lg:flex">
          <ul className="flex items-center gap-8 text-lg leading-relaxed text-gray-700">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavigation(link.id)}
                  className="cursor-pointer transition-colors hover:text-amber-500"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Coin */}
          <span className="ml-4 flex cursor-pointer items-center gap-1 rounded-full border border-amber-300 px-4 py-1.5 text-xl font-semibold text-gray-800">
            <span className="ml-2.5">{coin}</span>
            <span>Coin</span>
            <AiFillDollarCircle className="text-2xl text-amber-500" />
          </span>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <span className="flex items-center gap-1 rounded-full border border-amber-300 px-3 py-1 text-sm font-semibold text-gray-800">
            <span>{coin}</span>
            <AiFillDollarCircle className="text-lg text-amber-500" />
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

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="container mx-auto mt-3 flex flex-col gap-1 border-t border-gray-100 pt-3 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className="rounded-lg px-3 py-2.5 text-left text-base text-gray-700 transition-colors hover:bg-gray-100 hover:text-amber-500"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;