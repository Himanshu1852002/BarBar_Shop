import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
  <div className="flex flex-col md:flex-row justify-between items-center py-6 px-15 bg-black text-white gap-6 md:gap-0 text-center">
  <div>
    <ul className="flex gap-3 items-center text-[#cf814d]">
      <li className="cursor-pointer p-2 bg-[#ffffff1a] hover:bg-white transition-colors duration-300 rounded"><FaFacebookF /></li>
      <li className="cursor-pointer p-2 bg-[#ffffff1a] hover:bg-white transition-colors duration-300 rounded"><FaTwitter /></li>
      <li className="cursor-pointer p-2 bg-[#ffffff1a] hover:bg-white transition-colors duration-300 rounded"><FaLinkedinIn /></li>
      <li className="cursor-pointer p-2 bg-[#ffffff1a] hover:bg-white transition-colors duration-300 rounded"><FaPinterest /></li>
      <li className="cursor-pointer p-2 bg-[#ffffff1a] hover:bg-white transition-colors duration-300 rounded"><FaWifi /></li>
    </ul>
  </div>
  <div className="flex justify-center">
    <img src={logo} alt="footer logo" className="h-10" />
  </div>
  <div>
    <h3 className="text-sm md:text-base">© 2025 - Blaxcut by Designesia</h3>
  </div>
</div>

  )
}

export default Footer