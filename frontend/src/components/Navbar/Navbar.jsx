import { useEffect, useState } from 'react';
import logoDesktop from '../../assets/logo.png';
import logoMobile from '../../assets/logo-mobile.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <nav
      className={`fixed w-full z-50 transition duration-300 text-white ${scrolled ? 'bg-black' : 'md:bg-transparent bg-black'
        }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-20 py-6">
        <div>
          <img
            src={logoDesktop}
            alt="logo"
            className="hidden md:block w-32"
          />
          <img
            src={logoMobile}
            alt="mobile logo"
            className="block md:hidden"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-10 items-center text-sm lg:text-base">
          <li className="cursor-pointer font-semibold">Home</li>
          <li className="relative group cursor-pointer font-semibold">
            <div className="flex items-center gap-1">
              <span>Services</span>
              <FiChevronDown className="mt-[5px] text-md" />
            </div>

            <ul className="absolute top-full left-10 bg-black text-white shadow-md rounded-sm opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 w-40 z-50">
              <li>
                <Link
                  to="/services"
                  className="block px-4 py-2 hover:bg-[#cf814d] transition"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/single-service"
                  className="block px-4 py-2 hover:bg-[#cf814d] transition"
                >
                  Single Service
                </Link>
              </li>
            </ul>
          </li>
          <li className="cursor-pointer font-semibold">About</li>
          <li className="cursor-pointer font-semibold">Book Now</li>
          <li className="cursor-pointer font-semibold">Blog</li>
          <li className="cursor-pointer font-semibold">Extras</li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-[#cf814d] text-white border border-white py-1 px-4 hover:shadow-[0_0_25px_#cf814d] transition duration-400 cursor-pointer tracking-widest">
            BOOK NOW
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="w-7 h-7 text-white" />
            ) : (
              <FiMenu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black px-4 sm:px-6 pb-4">
          <ul className="flex flex-col gap-2 mb-3 text-sm">
            <li className="py-2 font-medium">Home</li>
            <li className="py-2 font-medium">Services</li>
            <li className="py-2 font-medium">About</li>
            <li className="py-2 font-medium">Book Now</li>
            <li className="py-2 font-medium">Blog</li>
            <li className="py-2 font-medium">Extras</li>
          </ul>
          <button className="bg-[#cf814d] w-full text-white py-2 tracking-widest">
            BOOK NOW
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
