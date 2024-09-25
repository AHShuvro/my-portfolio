import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <div className="py-12 sm:px-16 px-6 relative w-full mx-auto flex flex-col items-center sm:flex-row overflow-hidden bg-gradient-to-r from-secondary to-primary text-white">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0">
                <div className="bg-white opacity-10 w-[500px] h-[500px] rounded-full"></div>
            </div>

            <div className="w-full sm:w-1/2 flex items-center justify-center text-center z-10">
                <VerticalTimeline className="w-full px-4">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentStyle={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(5px)',
                            borderRadius: '15px',
                            padding: '20px',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    >
                        <h3 className="vertical-timeline-element-title text-3xl md:text-4xl font-bold">
                            Self-Taught FrontEnd Developer
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg md:text-xl">
                            Currently Learning
                        </h4>
                        <p className="text-base md:text-lg mt-3">
                            Building projects and enhancing my skills in React, JavaScript, Tailwind CSS, and Node.js.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentStyle={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(5px)',
                            borderRadius: '15px',
                            padding: '20px',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                    >
                        <h3 className="vertical-timeline-element-title text-3xl md:text-4xl font-bold">
                            Personal Projects
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle text-lg md:text-xl">
                            Web Development Projects
                        </h4>
                        <p className="text-base md:text-lg mt-3">
                            Developing and designing personal projects to build hands-on experience in frontend development.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Experience;
