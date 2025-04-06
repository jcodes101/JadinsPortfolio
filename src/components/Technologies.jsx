import {RiReactjsLine} from 'react-icons/ri';
import {TbBrandTypescript} from 'react-icons/tb';
import {FaPython} from 'react-icons/fa';
import {FaJava} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {TbBrandHtml5} from 'react-icons/tb';
import {TbBrandCss3} from 'react-icons/tb';
import {TbBrandTailwind} from 'react-icons/tb';
import {SiCplusplus} from 'react-icons/si';
import { motion } from 'framer-motion';
import { track } from 'framer-motion/m';

const iconVariants = (duration) => ({
    animate:{
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technologies = () => {
    return (

        <div className="border-b border-neutral-800 py-24">

            <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
        
            <div className="flex flex-wrap items-center justify-center gap-4">

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandTypescript className="text-7xl text-blue-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-300"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-300"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandJavascript className="text-7xl text-yellow-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandHtml5 className="text-7xl text-orange-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandCss3 className="text-7xl text-blue-500"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandTailwind className="text-7xl text-cyan-300"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-7xl text-blue-500"/>
                </motion.div>

            </div>

        </div>
    )
}

export default Technologies;