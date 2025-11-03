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

import { SiXampp } from "react-icons/si";
import { SiApache } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

import { SiOracle } from "react-icons/si";
import { FaRProject } from "react-icons/fa";

import { SiJupyter } from "react-icons/si";
import { SiNvidia } from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

import { FaAws } from "react-icons/fa";

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

            <h2 className="my-20 text-center text-4xl">Tech <span className="text-neutral-500 font-thin">Stack</span></h2>
        
            <div className="flex flex-wrap items-center justify-center gap-4">

                
                <a 
                    target="_blank"
                    href="https://react.dev/"
                >
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
                </a>
                
                            
                <a 
                target="_blank"
                href="https://www.typescriptlang.org/"
                >
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandTypescript className="text-7xl text-blue-400"/>
                </motion.div>
                </a>
                
                <a 
                    target="_blank"
                    href="https://www.python.org/"
                >
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-yellow-300"/>
                </motion.div>
                </a>
                
                <a 
                    target="_blank"
                    href="https://www.java.com/en/"
                >
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-400"/>
                </motion.div>
                </a>
                
                <a 
                    target="_blank"
                    href="https://www.javascript.com/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandJavascript className="text-7xl text-yellow-400"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://html.com/"
                >
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandHtml5 className="text-7xl text-orange-400"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS#:~:text=Cascading%20Style%20Sheets%20(CSS)%20is,speech%2C%20or%20on%20other%20media."
                >
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandCss3 className="text-7xl text-blue-500"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://tailwindcss.com/"
                >
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandTailwind className="text-7xl text-cyan-300"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.w3schools.com/cpp/default.asp"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className="text-7xl text-blue-500"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.gnu.org/software/bash/"
                >
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGnubash className="text-7xl text-gray-700"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.php.net/"
                >
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPhp className="text-7xl text-indigo-400"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.rust-lang.org/"
                >
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaRust className="text-7xl text-orange-600"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://go.dev/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGolang className="text-7xl text-sky-400"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://developer.apple.com/swift/"
                >
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiSwift className="text-7xl text-orange-500"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.latex-project.org/"
                >
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiLatex className="text-7xl text-cyan-300"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://yaml.org/"
                >
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiYaml className="text-7xl text-red-600"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://nodejs.org/en"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNode className="text-7xl text-lime-400"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://jupyter.org/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJupyter className="text-7xl text-orange-500"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.r-project.org/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaRProject className="text-7xl text-blue-500"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://pandas.pydata.org/"
                >
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPandas className="text-7xl text-blue-950"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.nvidia.com/en-us/glossary/machine-learning/"
                >
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiNvidia className="text-7xl text-lime-300"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://fastapi.tiangolo.com/"
                >
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFastapi className="text-7xl text-teal-300"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="google.com/search?q=firebase&oq=firebase&gs_lcrp=EgZjaHJvbWUqDwgAEAAYQxjjAhiABBiKBTIPCAAQABhDGOMCGIAEGIoFMhIIARAuGEMYxwEY0QMYgAQYigUyBwgCEAAYgAQyBwgDEAAYgAQyDAgEEAAYFBiHAhiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBBzk5OGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8"
                >
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFirebase className="text-7xl text-amber-700"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.npmjs.com/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNpm className="text-7xl text-red-600"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.postgresql.org/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.figma.com/"
                >
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaFigma className="text-7xl text-purple-500"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.apachefriends.org/"
                >
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiXampp className="text-7xl text-orange-400"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.mysql.com/"
                >
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-sky-600"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://httpd.apache.org/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiApache className="text-7xl text-fuchsia-950"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.ruby-lang.org/en/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiRuby className="text-7xl text-red-800"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://rubyonrails.org/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiRubyonrails className="text-7xl text-red-700"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://cloud.google.com/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGooglecloud className="text-7xl text-blue-400"/>
                </motion.div>
                </a>

                <a 
                    target="_blank"
                    href="https://aws.amazon.com/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAws className="text-7xl text-orange-400"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.oracle.com/autonomous-database/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiOracle className="text-7xl text-red-500"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.docker.com/"
                >
                <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaDocker className="text-7xl text-blue-700"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://vercel.com"
                >
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiVercelLine className="text-7xl text-white"/>
                </motion.div>
                </a>

                
                <a 
                    target="_blank"
                    href="https://www.netlify.com/"
                >
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiNetlify className="text-7xl text-cyan-400"/>
                </motion.div>
                </a>

                
            </div>

        </div>
    )
}

export default Technologies;