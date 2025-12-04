import aboutImg from '../assets/jh_be_aa.jpeg'
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
    return (
        
        <div className="border-b border-neutral-900 pb-4">

            <div className="my-20 flex justify-center">
                <h2 
                    className="inline-block rounded-full px-10 py-4 text-center text-3xl sm:text-4xl backdrop-blur-xl"
                    style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(30px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                    }}
                >
                    About <span className="text-neutral-400 font-thin">Me</span>
                </h2>
            </div>

            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2 lg:p-8">

                    <div className="flex items-center justify-center">
                        <img src={aboutImg} alt="aboutimg" style={{width:"350px", height:"auto"}} className="rounded-2xl shadow-[0_0_30px_#c9a069] hover:shadow-[0_0_50px_#c9a069] transition-shadow duration-300"/>
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