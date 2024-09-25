import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { fadeIn, textVariant } from "./animations";
import { services } from "../data";

const About = () => {
    return (
        <div className="py-12 sm:px-16 px-6">
            <motion.div variants={textVariant()} initial="hidden" animate="show">
                <p className="text-sm sm:text-base text-secondary-text font-medium uppercase tracking-wide sm:tracking-wider">Introduction</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-text mt-2">Overview</h2>
            </motion.div>
            <motion.p
                className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-primary-text max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed tracking-normal sm:tracking-wide"
                variants={fadeIn('', '', 0.1, 1)}
                initial="hidden"
                animate="show"
            >
                I am a web developer passionate about building user-friendly, high-performance applications. I specialize in frontend development with React, creating visually appealing, interactive websites. My goal is to constantly improve and bring fresh ideas to the web development space.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
                {services.map((service, idx) => (
                    <div key={idx} className="xs:w-64 w-full">
                        <Tilt>
                            <motion.div
                                className="w-full green-pink-gradient p-[1px] rounded-2xl"
                                variants={fadeIn("right", "spring", 0.5 * idx, 0.75)}
                                initial="hidden"
                                animate="show"
                            >
                                <div className="bg-gradient-to-r from-secondary to-primary shadow-custom-1 rounded-sm p-6 min-h-[280px] flex flex-col items-center justify-center text-primary-text hover:text-white duration-400">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-16 h-16 object-contain mb-4"
                                    />
                                    <h3 className="text-lg font-bold ">{service.title}</h3>
                                </div>
                            </motion.div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
