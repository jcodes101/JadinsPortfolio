import logo from '../assets/jhlogo.png';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {

    return (
    <nav 
        className="fixed top-4 left-1/2 z-50 mb-20 flex w-[95%] max-w-8xl -translate-x-1/2 items-center justify-between rounded-full px-6 py-2 backdrop-blur-xl sm:px-8 sm:py-2.5"
        style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(30px) saturate(180%)',
            WebkitBackdropFilter: 'blur(30px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
        }}
    >
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" style={{width:"80px", height:"auto"}}/>
        </div>

        <div className="m-4 flex items-center justify-center gap-3 text-xl">
            <a 
                target="_blank"
                href="https://www.linkedin.com/in/jadin-hutchinson-a175a52ba/"
                className="text-white/80 transition-all duration-300 hover:text-blue-400 hover:scale-110"
            >
                <FaLinkedin />
            </a>

            <a
                target="_blank"
                href="https://github.com/jcodes101"
                className="text-white/80 transition-all duration-300 hover:text-slate-800 hover:scale-110"
            >
                <FaGithub />
            </a>

            <a
                target="_blank"
                href="https://www.instagram.com/gtsjadin/"
                className="text-white/80 transition-all duration-300 hover:text-pink-400 hover:scale-110"
            >
                <FaInstagram />
            </a>
            
        </div>

    </nav>
    );
};

export default Navbar;