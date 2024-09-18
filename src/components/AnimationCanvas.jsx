import { motion } from 'framer-motion';



const AnimationCanvas = () => {
    return (
        <section className="relative overflow-hidden bg-gray-800 text-white h-screen flex items-center">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <motion.h1
                    className="text-4xl font-extrabold leading-tight mb-4 sm:text-6xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hi, I'm <span className="text-indigo-400">Shuvro</span>
                </motion.h1>
                <motion.p
                    className="text-lg mb-6 sm:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    A passionate web developer specializing in creating interactive and visually stunning web applications.
                </motion.p>
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
            </div>
        </section>
    );
};

export default AnimationCanvas;


