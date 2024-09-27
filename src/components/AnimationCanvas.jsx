import { motion } from 'framer-motion';
import { textVariant2 } from "./animations";

import { FaLinkedin, FaGithubSquare, FaFacebook, FaEnvelope } from 'react-icons/fa';

const AnimationCanvas = () => {
    return (
        <div className="relative overflow-hidden w-full lg:w-1/2 text-white flex items-center">
            <motion.div
                variants={textVariant2()} initial="hidden" animate="show"
                className="relative z-10 flex flex-col gap-2 sm:gap-4 lg:gap-6 items-start justify-center text-center"
            >
                <p className="uppercase text-primary-text">Welcome to my world</p>
                <h1 className="text-4xl sm:text-6xl font-bold text-white"
                >Hi, I'm <span className="text-secondary-text">Shuvro</span></h1>
                <p className="mt-4 text-start text-primary-text text-lg sm:text-xl" >
                    A passionate web developer specializing in creating interactive and visually stunning web applications.
                </p>
                <div className='flex gap-6'>
                            <a href="https://www.linkedin.com/in/ahshuvro77777/" target='_blank'>
                                <motion.button
                                    className=" group mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <FaLinkedin />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-1 hidden group-hover:block bg-secondary text-white text-xs rounded py-1 px-2">
                                        Linkedin
                                    </span>
                                </motion.button>
                            </a>
                            <a href="https://github.com/ahshuvro" target='_blank'>
                                <motion.button
                                    className=" group mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <FaGithubSquare />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-1 hidden group-hover:block bg-secondary text-white text-xs rounded py-1 px-2">
                                        Github
                                    </span>
                                </motion.button>
                            </a>
                            <a href="https://www.facebook.com/ahshuvro7777/" target='_blank'>
                                <motion.button
                                    className=" group mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <FaFacebook />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-1 hidden group-hover:block bg-secondary text-white text-xs rounded py-1 px-2">
                                        Facebook
                                    </span>
                                </motion.button>
                            </a>
                            <a href="https://ahshuvro77777@gmail.com" target='_blank'>
                                <motion.button
                                    className=" group mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <FaEnvelope />
                                    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-1 hidden group-hover:block bg-secondary text-white text-xs rounded py-1 px-2">
                                        Email
                                    </span>
                                </motion.button>
                            </a>
                        </div>
            </motion.div>
        </div>
    );
};

export default AnimationCanvas;


