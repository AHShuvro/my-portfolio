import { motion } from 'framer-motion';
import { textVariant2 } from "./animations";


const AnimationCanvas = () => {
    return (
        <div className="relative overflow-hidden text-white w-full sm:w-1/2 sm:min-h-screen sm:h-screen flex items-center">
            <motion.div
                variants={textVariant2()} initial="hidden" animate="show"
                className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center"
            >
                <h1 className="text-4xl font-extrabold leading-tight mb-4 sm:text-6xl text-black"
                >Hi, I'm <span className="text-indigo-400">Shuvro</span></h1>
                <p className="text-lg mb-6 sm:text-xl text-black" >
                    A passionate web developer specializing in creating interactive and visually stunning web applications.
                </p>
                <a href="#contact">
                    <motion.button
                        className=" text-white py-3 px-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 transition"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Get in Touch
                    </motion.button>
                </a>
            </motion.div>
        </div>
    );
};

export default AnimationCanvas;


