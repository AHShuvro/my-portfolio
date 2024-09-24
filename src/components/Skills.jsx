import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animations";
import { skills } from "../data";



const Skills = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-12">My Skills</h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-center p-6 rounded-lg bg-[#1F2937] shadow-lg"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-4xl mr-4">{skill.icon}</span>
                            <div>
                                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                            <p className="text-sm text-[#FCE100]">{skill.level}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
