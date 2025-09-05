import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () =>{
        localStorage.removeItem("adminToken");
        navigate('/admin')
    }
    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-md px-6 py-3 flex justify-between items-center z-50">
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-10 w-25 object-contain" />
            </div>
            <button onClick={handleLogout} className="bg-[#cf814d] text-white font-semibold tracking-widest uppercase px-10 py-2 rounded-lg 
                                   hover:shadow-[0_0_25px_#cf814d] cursor-pointer transition-all duration-300">
                Logout
            </button>
        </nav>
    );
};

export default Navbar;
