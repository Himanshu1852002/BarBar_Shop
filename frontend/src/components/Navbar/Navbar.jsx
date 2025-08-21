import { useEffect, useState } from 'react';
import logoDesktop from '../../assets/logo.png';
import logoMobile from '../../assets/logo-mobile.png';
import { FiMenu, FiX, FiChevronDown, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 🔹 user login state
  const [showDropdown, setShowDropdown] = useState(false); // 🔹 hover dropdown

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setShowDropdown(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition duration-300 text-white ${scrolled ? 'bg-black' : 'md:bg-transparent bg-black'
        }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-20 py-6">
        <div>
          <Link to="/">
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
          </Link>
        </div>
        <ul className="hidden md:flex gap-8 lg:gap-10 items-center text-sm lg:text-base">
          <li><Link to="/" className="block px-4 py-2">Home</Link></li>
          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer font-semibold">
              <span>Services</span>
              <FiChevronDown className="mt-[5px] text-md" />
            </div>
            <ul className="absolute top-full left-10 bg-black text-white shadow-md rounded-sm opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 w-40 z-50">
              <li><Link to="/services" className="block px-4 py-2 hover:bg-[#cf814d]">All Services</Link></li>
              <li><Link to="/single-service" className="block px-4 py-2 hover:bg-[#cf814d]">Service Single</Link></li>
            </ul>
          </li>
          <li className="relative group cursor-pointer font-semibold">
            <div className="flex items-center gap-1">
              <span>About</span>
              <FiChevronDown className="mt-[5px] text-md" />
            </div>
            <ul className="absolute top-full left-10 bg-black text-white shadow-md rounded-sm opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 w-40 z-50">
              <li><Link to="/aboutus" className="block px-4 py-2 hover:bg-[#cf814d]">About us</Link></li>
              <li><Link to="/team" className="block px-4 py-2 hover:bg-[#cf814d]">Our Team</Link></li>
            </ul>
          </li>
          <Link to="/booking" className="block px-4 py-2">Book Now</Link>
          <li className="cursor-pointer font-semibold">Blog</li>
          <li className="relative group cursor-pointer font-semibold">
            <div className="flex items-center gap-1">
              <span>Extras</span>
              <FiChevronDown className="mt-[5px] text-md" />
            </div>
            <ul className="absolute top-full left-10 bg-black text-white shadow-md rounded-sm opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 w-40 z-50">
              <li><Link to="/contactus" className="block px-4 py-2 hover:bg-[#cf814d]">Contact us</Link></li>
              <li><Link to="/testimonials" className="block px-4 py-2 hover:bg-[#cf814d]">Testimonials</Link></li>
            </ul>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/booking">
            <button className="bg-[#cf814d] cursor-pointer rounded-2xl text-white border border-white py-1 px-4 hover:shadow-[0_0_25px_#cf814d] transition tracking-widest">
              BOOK NOW
            </button>
          </Link>

          {!isAuthenticated ? (
            <button
              onClick={onLoginClick}
              className="bg-[#cf814d] cursor-pointer rounded-2xl px-4 py-1 border border-white hover:shadow-[0_0_25px_#cf814d] transition"
            >
              Sign In
            </button>
          ) : (
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex cursor-pointer items-center border-2 border-white h-9 w-9 bg-[#cf814d] rounded-full justify-center hover:shadow-[0_0_25px_#cf814d] transition">
                <FiUser className="w-6 h-6 text-white" />
              </button>

              {showDropdown && (
                <ul className="absolute -right-10 mt-2 bg-black text-white shadow-md rounded-md w-40">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-[#cf814d]"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-[#cf814d]"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center justify-center gap-4">
          {!isAuthenticated ? (
            <button onClick={onLoginClick} className="bg-[#cf814d] px-3 rounded-2xl py-1">
              Sign In
            </button>
          ) : (
            <button>
              <FiUser className="w-6 h-6 text-white" />
            </button>
          )}
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
