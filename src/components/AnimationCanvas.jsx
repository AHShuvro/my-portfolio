import { motion } from 'framer-motion';
import { textVariant2 } from "./animations";


const AnimationCanvas = () => {
    return (
        <section className="relative overflow-hidden text-white w-full sm:w-1/2 min-h-screen sm:h-screen flex items-center">
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
                        className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Get in Touch
                    </motion.button>
                </a>
            </motion.div>
        </section>
    );
};

export default AnimationCanvas;


