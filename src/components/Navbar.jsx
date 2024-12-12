import logo from "../assets/MyLogo.jpg"
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-1"> 

        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-1" width={60} height={33} alt="logo" />
            </a>
        </div>

        <div className="m-8 flex items-center justify-center gap-16 text-2xl">

            <a href="https://www.linkedin.com/in/raj-majumdar-100abc/" //linkedin profile line
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
                <FaLinkedin />
            </a>  

            <a href="https://github.com/i-rajmajumdar"  //Github
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github">
                <FaGithub />
            </a> 

            <a href="https://www.instagram.com/i.rajmajumdar/"  //Instagram
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Intagram">
                <FaInstagram />
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
