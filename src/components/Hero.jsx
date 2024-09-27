import AnimationCanvas from './AnimationCanvas';
import { motion } from 'framer-motion';

import { FaFilePdf } from "react-icons/fa";
import { HiMiniCommandLine } from "react-icons/hi2";


const Hero = () => {
    return (
        <>

            <div className="sm:px-16 px-6 relative w-full min-h-screen justify-center flex flex-col lg:flex-row">
                <AnimationCanvas />
                <div className="w-full mt-12 lg:mt-0 lg:w-1/2 flex items-center justify-start lg:justify-center text-center">
                    <div>
                        <p className="mt-4 text-white text-lg sm:text-xl text-start">Frontend Developer | React Specialist</p>

                        <div className='flex gap-6 '>
                            <a href='https://drive.google.com/file/d/1PJWaVTdNQsphHijgLbDinO8RufWmmsqT/view?usp=sharing' target='_blank'>
                                <motion.button
                                    className=" group mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <FaFilePdf />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-1 hidden group-hover:block bg-secondary text-white text-xs rounded py-1 px-2">
                                        Resume
                                    </span>
                                </motion.button>
                            </a>
                            <a href="https://terminal-0-1.vercel.app/" target='_blank'>
                                <motion.button
                                    className=" mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1 group"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <HiMiniCommandLine />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-1 hidden group-hover:block bg-secondary text-white text-xs rounded py-1 px-2">
                                    Don't...!
                                    </span>
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Hero;



