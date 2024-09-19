import AnimationCanvas from './AnimationCanvas';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Hero = () => {
    return (
        <>

            <div className="relative w-full min-h-screen sm:h-screen mx-auto flex flex-col sm:flex-row overflow-hidden">
                <AnimationCanvas />
                <div className="w-full sm:w-1/2 sm:h-screen flex items-center justify-center text-center">
                    <div>
                        <h1 className="text-4xl sm:text-6xl font-bold text-white">Hi, I'm Abul Hasan</h1>
                        <p className="mt-4 text-gray-300 text-lg sm:text-xl">Frontend Developer | React Specialist</p>
                        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
                            Explore My Work
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Hero;



