import AnimationCanvas from './AnimationCanvas';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>

            <div className="relative w-full sm:min-h-screen h-screen justify-center mx-auto flex flex-col sm:flex-row overflow-hidden bg-gradient-to-r from-[#1F2937] via-[#374151] to-[#111827]">
                <AnimationCanvas />
                <div className="w-full sm:w-1/2 sm:h-screen flex items-center justify-center text-center">
                    <div>
                        <p className="mt-4 text-gray-300 text-lg sm:text-xl">Frontend Developer | React Specialist</p>
                        <a href="https://terminal-0-1.vercel.app/" target='_blank'>
                            <motion.button
                                className=" mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                Explore Interesting
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Hero;



