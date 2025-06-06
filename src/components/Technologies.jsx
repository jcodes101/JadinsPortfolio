import {RiReactjsLine} from 'react-icons/ri';
import {TbBrandTypescript} from 'react-icons/tb';
import {FaPython} from 'react-icons/fa';
import {FaJava} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {TbBrandHtml5} from 'react-icons/tb';
import {TbBrandCss3} from 'react-icons/tb';
import {TbBrandTailwind} from 'react-icons/tb';
import {SiCplusplus} from 'react-icons/si';

import { SiGnubash } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { DiSwift } from "react-icons/di";
import { SiLatex } from "react-icons/si";
import { SiYaml } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiPandas } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";

// used for animation
import { motion } from 'framer-motion';
import { track } from 'framer-motion/m';

const iconVariants = (duration) => ({
    animate:{
        // moves icon up and down
        y: [10, -10],
        transition: {
            // how long one full up and down takes
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            // goes up then down
            repeatType: "reverse",
        }
    }
})


const Technologies = () => {
    return (

        <div className="border-b border-neutral-800 py-24">

            <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
        
            <div className="flex flex-wrap items-center justify-center gap-4">

                {/*wrapped icon for animation */}
                <motion.div 
                // gives bouncing animation at a specific speed
                variants={iconVariants(1)}
                initial="initial"
                // the animate state is applied from the const
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandTypescript className="text-7xl text-blue-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-300"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandJavascript className="text-7xl text-yellow-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandHtml5 className="text-7xl text-orange-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandCss3 className="text-7xl text-blue-500"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandTailwind className="text-7xl text-cyan-300"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-7xl text-blue-500"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGnubash className="text-7xl text-gray-700"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className="text-7xl text-indigo-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaRust className="text-7xl text-orange-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGolang className="text-7xl text-sky-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiSwift className="text-7xl text-orange-500"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiLatex className="text-7xl text-cyan-300"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiYaml className="text-7xl text-red-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNode className="text-7xl text-lime-400"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPandas className="text-7xl text-blue-950"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFastapi className="text-7xl text-teal-300"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFirebase className="text-7xl text-amber-700"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNpm className="text-7xl text-red-600"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaFigma className="text-7xl text-purple-500"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiVercelLine className="text-7xl text-white"/>
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiNetlify className="text-7xl text-cyan-400"/>
                </motion.div>

            </div>

        </div>
    )
}

export default Technologies;