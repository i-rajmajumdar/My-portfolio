import {CONTACT} from "../constants"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className=" border border-l-0 border-r-0 pb-10">
        <motion.h2 
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1}}
            className="my-10 text-center text-4xl">Get in Touch
        </motion.h2>

        <div className="text-center tracking-tighter">
            <motion.p 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className="my-4">
                {CONTACT.address}
            </motion.p>
            <motion.p 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className="my-4">
                {CONTACT.phoneNo}
            </motion.p>
            <a href={`mailto:${CONTACT.email}`} className="border-b text-purple-300">
                {CONTACT.email}
            </a>
        </div>
    </div>
  )
}

export default Contact
