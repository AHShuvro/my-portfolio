import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { textVariant } from './animations';



const Experience = () => {
    return (
        <div className="mt-12 sm:px-16 px-6">
            <motion.div 
            variants={textVariant()}>
                <p className='text-base sm:text-lg text-[#333333] uppercase tracking-wide sm:tracking-wider'>What I have done so far</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] mt-2">Work Experience.</h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {
                        
                    }
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Experience;