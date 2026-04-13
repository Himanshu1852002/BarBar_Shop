import { useEffect, useState } from 'react';
import logoDesktop from '../../assets/logo.png';
import logoMobile from '../../assets/logo-mobile.png';
import { FiMenu, FiX, FiChevronDown, FiUser, FiLogOut, FiCalendar } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { handleBookNow } from '../../utils/authHelper';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services', children: [
      { label: 'All Services', path: '/services' },
      { label: 'Service Single', path: '/single-service' },
    ]
  },
  {
    label: 'About', children: [
      { label: 'About Us', path: '/aboutus' },
      { label: 'Our Team', path: '/team' },
    ]
  },
  { label: 'Blog', path: '/blog' },
  {
    label: 'More', children: [
      { label: 'Contact Us', path: '/contactus' },
      { label: 'Testimonials', path: '/testimonials' },
    ]
  },
];

const Navbar = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenMobileMenu(null);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setShowUserDropdown(false);
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 text-white
        ${scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.5)] py-0'
          : 'bg-gradient-to-b from-black/80 to-transparent py-2'
        }`}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 md:px-10 lg:px-20 py-4">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logoDesktop} alt="logo" className="hidden md:block w-28 lg:w-32" />
            <img src={logoMobile} alt="logo" className="block md:hidden h-9" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label} className="relative group">
                  <div className={`flex items-center gap-1 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200
                    hover:text-[#cf814d] group-hover:text-[#cf814d]
                    ${link.children.some(c => isActive(c.path)) ? 'text-[#cf814d]' : 'text-white'}`}
                  >
                    <span className="tracking-wide">{link.label}</span>
                    <FiChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                  </div>

                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <ul className="bg-[#0f0f0f] border border-[#cf814d]/20 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] min-w-[160px]">
                      {link.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            className={`flex items-center gap-2 px-4 py-3 text-sm transition-all duration-200
                              hover:bg-[#cf814d] hover:text-white hover:pl-6
                              ${isActive(child.path) ? 'text-[#cf814d] bg-[#cf814d]/10' : 'text-gray-300'}`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative px-3 py-2 rounded-md tracking-wide transition-colors duration-200 block
                      hover:text-[#cf814d] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px]
                      after:bg-[#cf814d] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300
                      ${isActive(link.path) ? 'text-[#cf814d] after:scale-x-100' : 'text-white'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleBookNow(navigate, onLoginClick)}
              className="flex items-center gap-2 bg-[#cf814d] text-white text-sm font-semibold rounded-lg uppercase tracking-widest
                px-5 py-2.5 hover:shadow-[0_0_20px_rgba(207,129,77,0.6)] hover:bg-[#d98f5a] cursor-pointer transition-all duration-300"
            >
              <FiCalendar className="text-base" />
              Book Now
            </button>

            {!isAuthenticated ? (
              <button
                onClick={onLoginClick}
                className="text-white text-sm font-semibold border border-white/40 rounded-lg uppercase tracking-widest
                  px-5 py-2.5 hover:border-[#cf814d] hover:text-[#cf814d] cursor-pointer transition-all duration-300"
              >
                Sign In
              </button>
            ) : (
              <div className="relative" onMouseEnter={() => setShowUserDropdown(true)} onMouseLeave={() => setShowUserDropdown(false)}>
                <button className="flex items-center justify-center w-9 h-9 bg-[#cf814d] rounded-full border-2 border-[#cf814d]/50
                  hover:shadow-[0_0_15px_rgba(207,129,77,0.6)] transition-all duration-300 cursor-pointer">
                  <FiUser className="w-4 h-4 text-white" />
                </button>
                {showUserDropdown && (
                  <div className="absolute right-0 top-full pt-2">
                    <ul className="bg-[#0f0f0f] border border-[#cf814d]/20 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] min-w-[150px]">
                      <li>
                        <Link to="/userProfile" className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-[#cf814d] hover:text-white transition-all duration-200">
                          <FiUser className="text-xs" /> Profile
                        </Link>
                      </li>
                      <li>
                        <button onClick={handleLogout} className="flex items-center gap-2 w-full px-4 py-3 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200">
                          <FiLogOut className="text-xs" /> Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Right */}
          <div className="md:hidden flex items-center gap-3">
            {isAuthenticated && (
              <Link to="/userProfile" className="flex items-center justify-center w-8 h-8 bg-[#cf814d] rounded-full">
                <FiUser className="w-4 h-4 text-white" />
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/20 hover:border-[#cf814d] transition-colors duration-200"
            >
              {isOpen
                ? <FiX className="w-5 h-5 text-white" />
                : <FiMenu className="w-5 h-5 text-white" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#0a0a0a] z-50 md:hidden
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-end px-5 py-4 border-b border-white/10">
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#cf814d] transition">
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="flex flex-col flex-1 overflow-y-auto px-4 py-4 gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label}>
                <button
                  onClick={() => setOpenMobileMenu(openMobileMenu === link.label ? null : link.label)}
                  className="w-full flex justify-between items-center px-3 py-3 rounded-lg text-sm font-semibold text-white hover:bg-white/5 hover:text-[#cf814d] transition-all duration-200"
                >
                  {link.label}
                  <FiChevronDown className={`transition-transform duration-300 ${openMobileMenu === link.label ? 'rotate-180 text-[#cf814d]' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openMobileMenu === link.label ? 'max-h-40' : 'max-h-0'}`}>
                  <ul className="ml-3 border-l border-[#cf814d]/30 pl-3 py-1 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                            hover:text-[#cf814d] hover:bg-white/5
                            ${isActive(child.path) ? 'text-[#cf814d]' : 'text-gray-200'}`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-3 py-3 rounded-lg text-sm font-semibold transition-all duration-200
                    hover:bg-white/5 hover:text-[#cf814d]
                    ${isActive(link.path) ? 'text-[#cf814d] bg-[#cf814d]/10' : 'text-gray-100'}`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Drawer Footer Buttons */}
        <div className="px-4 py-5 border-t border-white/10 flex flex-col gap-3">
          <button
            onClick={() => handleBookNow(navigate, onLoginClick)}
            className="flex items-center justify-center gap-2 bg-[#cf814d] text-white font-semibold rounded-lg uppercase tracking-widest
              py-3 hover:shadow-[0_0_20px_rgba(207,129,77,0.5)] transition-all duration-300 text-sm"
          >
            <FiCalendar /> Book Now
          </button>
          {!isAuthenticated && (
            <button
              onClick={() => { onLoginClick(); setIsOpen(false); }}
              className="text-white font-semibold border border-white/30 rounded-lg uppercase tracking-widest
                py-3 hover:border-[#cf814d] hover:text-[#cf814d] transition-all duration-300 text-sm"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
