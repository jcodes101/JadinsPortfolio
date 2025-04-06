import logo from '../assets/jhlogo.png';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {

    return (
    <nav className="mb-20 flex items-center justify-between py-6">

        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" style={{width:"100px", height:"auto"}}/>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a 
                target="_blank"
                href="https://www.linkedin.com/in/jadin-hutchinson-a175a52ba/">
                <FaLinkedin />
            </a>

            <a
                target="_blank"
                href="https://github.com/jcodes101">
                <FaGithub />
            </a>

            <a
                target="_blank"
                href="https://www.instagram.com/gtsjadin/">
            <FaInstagram />
            </a>
            
        </div>

    </nav>
    );
};

export default Navbar;