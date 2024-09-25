import { motion } from "framer-motion";
import { containerVariants, fadeIn, itemVariants, textVariant } from "./animations";
import { skills } from "../data";



const Skills = () => {
    return (
        <section className="py-12 sm:px-16 px-6">
                <motion.div variants={textVariant()} initial="hidden" animate="show">
                    <p className="text-sm sm:text-base text-secondary-text font-medium uppercase tracking-wide sm:tracking-wider">Skills</p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-text mt-2">My Skills</h2>
                </motion.div>
                <motion.p
                    className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-primary-text max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed tracking-normal sm:tracking-wide"
                    variants={fadeIn('', '', 0.1, 1)}
                    initial="hidden"
                    animate="show"
                >
                    I am proficient in various technologies and frameworks that enable me to create dynamic and responsive web applications. My key skills include:
                </motion.p>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-center p-6 rounded-sm bg-gradient-to-r from-secondary to-primary shadow-custom-2 text-primary-text hover:text-white duration-400"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-4xl mr-4">{skill.icon}</span>
                            <div>
                                <h3 className="text-xl font-semibold ">{skill.name}</h3>
                                <p className="text-sm font-semibold text-secondary-text">{skill.level}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
        </section>
    );
};

export default Skills;
