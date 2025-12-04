import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/jpic.png";
import profilePic from "../assets/j_g.jpeg"
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});

const Hero = () => {
    return (

        <div className="border-b border-neutral-900 pt-50 pb-4 lg:mb-35">

            <div className="flex flex-wrap">

                <div className="w-full lg:w-1/2">

                    <div className="flex flex-col items-center lg:items-start">

                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Jadin Hutchinson
                        </motion.h1>

                        <motion.span
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"

                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: -1, right: 1 }}
                        className="bg-gradient-to-r from-slate-400 via-stone-300 to-stone-500 bg-clip-text text-4xl tracking-tight text-transparent">Computer Scientist</motion.span>
                    
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"

                        className="my-2 max-w-xl motion.py-6 font-lght tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        
                    </div>

                </div>

                <div className="w-full lg:w-1/2 lg:p-8 sm:p-10">
                    <div className="flex justify-center">
                        <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={profilePic} 
                        alt="Jadin Hutchinson" 
                        style={{width:"350px", height:"auto"}} 
                        className="rounded-2xl shadow-[0_0_30px_#ffffff] hover:shadow-[0_0_50px_#ffffff] transition-shadow duration-300"/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Hero;