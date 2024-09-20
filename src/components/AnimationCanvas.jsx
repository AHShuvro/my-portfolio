import { motion } from 'framer-motion';
import { textVariant2 } from "./animations";
import { Link } from 'react-scroll';


const AnimationCanvas = () => {
    return (
        <div className="relative overflow-hidden text-white w-full sm:w-1/2 sm:min-h-screen sm:h-screen flex items-center">
            <motion.div
                variants={textVariant2()} initial="hidden" animate="show"
                className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center text-center"
            >
                <h1 className="text-4xl sm:text-6xl font-bold text-white"
                >Hi, I'm <span className="text-[#6C56EF]">Shuvro</span></h1>
                <p className="mt-4 text-gray-300 text-lg sm:text-xl" >
                    A passionate web developer specializing in creating interactive and visually stunning web applications.
                </p>
                <div className='flex gap-4 '>
                    <a href='https://github.com/AHShuvro' target='blank'>
                        <motion.button
                            className=" mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            GitHub
                        </motion.button>
                    </a>
                    <a href='https://www.linkedin.com/in/ahshuvro77777/' target='blank'>
                        <motion.button
                            className=" mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Linkedin
                        </motion.button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default AnimationCanvas;


