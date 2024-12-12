import logo from "../assets/raviKumarLogo.webp"
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6"> 
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="max-2" width={50} height={33} alt="logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl"></div>

            <a href="#" //linkedin profile line
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
                <FaLinkedin />
            </a>  

            <a href="#"  //Github
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github">
                <FaGithub />
            </a> 

            <a href="#"  //Instagram
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Intagram">
                <FaInstagram />
            </a> 

            <a href="#" //Twitter
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter">
                <FaSquareXTwitter />
            </a> 


    </nav>
  )
}

export default Navbar
