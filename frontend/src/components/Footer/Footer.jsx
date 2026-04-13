import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { GiScissors } from "react-icons/gi";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/aboutus" },
  { label: "Our Team", path: "/team" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contactus" },
];

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={logo} alt="logo" className="h-10 mb-4" />
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            Premium barbershop experience blending classic techniques with modern trends. Your style, our craft.
          </p>
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href }, i) => (
              <a key={i} href={href}
                className="w-9 h-9 rounded-xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center text-[#cf814d] hover:bg-[#cf814d] hover:text-black transition-all duration-300">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <GiScissors className="text-[#cf814d]" size={14} />
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
          </div>
          <ul className="space-y-2.5">
            {quickLinks.map(({ label, path }) => (
              <li key={label}>
                <Link to={path}
                  className="text-gray-500 text-sm hover:text-[#cf814d] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#cf814d]/40 group-hover:bg-[#cf814d] transition-colors" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <GiScissors className="text-[#cf814d]" size={14} />
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Working Hours</h4>
          </div>
          <ul className="space-y-2.5">
            {[
              { day: "Mon - Tue", time: "7:30 - 6:30" },
              { day: "Wed - Thu", time: "8:00 - 7:00" },
              { day: "Friday", time: "8:30 - 8:30" },
              { day: "Sat - Sun", time: "9:30 - 5:30" },
            ].map(({ day, time }) => (
              <li key={day} className="flex justify-between text-sm">
                <span className="text-gray-500">{day}</span>
                <span className="text-[#cf814d] font-medium">{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <GiScissors className="text-[#cf814d]" size={14} />
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
          </div>
          <ul className="space-y-3">
            {[
              { icon: <FaMapMarkerAlt size={12} />, value: "100 Mainstreet Center, NY" },
              { icon: <FaPhoneAlt size={12} />, value: "+1 333 9296" },
              { icon: <FaEnvelope size={12} />, value: "contact@bluxcut.com" },
            ].map(({ icon, value }, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
                <span className="text-[#cf814d] mt-0.5 flex-shrink-0">{icon}</span>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-4 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-xs text-gray-600">© 2025 Blaxcut. All rights reserved.</p>
          <p className="text-xs text-gray-600">Designed by <span className="text-[#cf814d]">Designesia</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
