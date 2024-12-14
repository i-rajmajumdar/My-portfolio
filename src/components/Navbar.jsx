import logo from "../assets/MyLogo.jpg"
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  px-16 "> 

        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mr-8 mix-blend-screen z-[20]" width={60} height={33} alt="logo" />
            </a>
        </div>

        <div className="flex items-center justify-center gap-12 lg:gap-24 text-2xl">

            <a href="https://www.linkedin.com/in/raj-majumdar-100abc/" //linkedin profile line
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
                <FaLinkedin className="text-blue-400"/>
            </a>  

            <a href="https://github.com/i-rajmajumdar"  //Github
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github">
                <FaGithub className="text-cyan-500"/>
            </a> 

            <a href="https://www.instagram.com/i.rajmajumdar/"  //Instagram
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Intagram">
                <FaInstagram className="text-fuchsia-600"/>
            </a> 

            <a href="https://x.com/Majumdarraj0618" //Twitter
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter">
                <FaSquareXTwitter />
            </a> 
        </div>
    </nav>
  )
}

export default Navbar
