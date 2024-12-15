import profilePic from "../assets/Profile.png"
import {HERO_CONTENT} from "../constants"
import {motion} from "framer-motion"
import '../App.css'
import Typewriter from "typewriter-effect";

const containerVariants ={
    hidden :{ opacity:0 , x: -100}, 
    visible: {
        opacity:1,
        x: 0,
        transition :{
            duration : 0.5,
            staggerChildren : 0.5,
        }
    }
}

const childVariants ={
    hidden: {opacity : 0, x: -100},
    visible: { opacity: 1, x:0, transition: {duration: 0.5}}
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 mx-16">
        <div className="flex flex-wrap  lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-8 raj-div">
                    <motion.img 
                    src={profilePic}
                    alt="Raj"
                    className=" raj "
                    width={350}
                    height={350}
                    initial={{ x: 100, opacity : 0}}
                    animate={{ x: 0, opacity:1}}
                    transition={{ duration: 0.5, delay: 0.5}}/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">

                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col items-center lg:items-start mt-10 width-50">
                    <motion.h2 
                        variants={childVariants}
                        className="pb-2 text-5xl tracking-tighter lg:text-6xl">Raj Majumdar</motion.h2>
                    <motion.span 
                        variants={childVariants}
                        className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-light text-transparent flex items-center">I'm a{" "}
                        <span className="ml-2">
                            <Typewriter options={{
                                strings: ["Developer.","Designer."],
                                autoStart:true,
                                loop:true,
                                delay: 100, // Speed of typing (lower = faster)
                                deleteSpeed: 50, // Speed of deletion
                                pauseFor: 1000, // Pause between typing loops
                            }}/>
                        </span>
                        </motion.span>  

                    <motion.p
                        variants={childVariants}
                        className="my-2 max-w-lg py-6 text-lg text-justify leading-relaxed tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                    
                    <motion.a 
                    variants={childVariants}
                    href="#"   //resume
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="bg-teal-500 rounded-full p-4 text-sm text-stone-950 mb-10">
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero
