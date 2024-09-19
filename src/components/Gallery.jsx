import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { fadeIn, slideStyle, textVariant } from "./animations";
import { div } from "framer-motion/client";

export const Gallery = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliderImages = [
        { img: "https://i.ibb.co/GtfLD4G/clothing.jpg" },
        { img: "https://i.ibb.co/GtfLD4G/clothing.jpg" },
        { img: "https://i.ibb.co/GtfLD4G/clothing.jpg" },
        { img: "https://i.ibb.co/GtfLD4G/clothing.jpg" },
        { img: "https://i.ibb.co/GtfLD4G/clothing.jpg" },
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlider();
        }, 2500);
        return () => clearInterval(interval);
    }, [currentSlider]);

    const nextSlider = () =>
        setCurrentSlider((currentSlider) =>
            currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
        );

    return (
        <div className="mt-12 sm:mx-16 mx-6">
            <motion.div variants={textVariant()} initial="hidden" animate="show">
                <p className="text-base sm:text-lg text-[#333333] uppercase tracking-wide sm:tracking-wider">My Work</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] mt-2">Projects</h2>
            </motion.div>

            <motion.p
                className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#333333] max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed tracking-normal sm:tracking-wide"
                variants={fadeIn('', '', 0.1, 1)}
                initial="hidden"
                animate="show"
            >
                I am a web developer passionate about building user-friendly, high-performance applications. I specialize in frontend development with React, creating visually appealing, interactive websites. My goal is to constantly improve and bring fresh ideas to the web development space.
            </motion.p>
            <div className=" h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
                <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                </div>
                <div
                    className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-700 flex items-center"
                    style={{ transform: `translateX(-${currentSlider * 50}%)` }}
                >
                    {sliderImages.map((slide, inx) => (
                        <div
                            key={inx}
                            className={`${currentSlider === inx
                                ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px] scale-105 z-10"
                                : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40"
                                } min-w-[50%] relative duration-700`}
                            style={{ perspective: "200px" }}
                            onMouseEnter={() => setCurrentSlider(inx)}
                        >
                            <img
                                src={slide.img}
                                className="w-full h-full bg-[#1F2937] rounded-lg duration-700"
                                alt="slider"
                                style={slideStyle(currentSlider, inx)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
