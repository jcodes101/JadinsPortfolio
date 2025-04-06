import aboutImg from '../assets/codeimg.png';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
    return (
        
        <div className="border-b border-neutral-900 pb-4">

            <h2 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500 font-thin"> Me</span>
            </h2>

            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2 lg:p-8">

                    <div className="flex items-center justify-center">
                        <img src={aboutImg} alt="aboutimg" style={{width:"500px", height:"auto"}} className="rounded-2xl shadow-[0_0_15px_#a2d2ff] hover:shadow-[0_0_15px_#f7c2ff] transition-shadow duration-300"/>
                    </div>

                </motion.div>

                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-2-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>

            </div>

        </div>

    )
}

export default About;