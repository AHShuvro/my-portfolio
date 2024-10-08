import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { fadeIn, slideStyle, textVariant } from "./animations";
import { sliderImages } from "../data";

export const Gallery = () => {
    const [currentSlider, setCurrentSlider] = useState(0);



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
        <div className="py-12 sm:mx-16 mx-6">
            <motion.div variants={textVariant()} initial="hidden" animate="show">
                <p className="text-sm sm:text-base text-secondary-text font-medium uppercase tracking-wide sm:tracking-wider">Overview</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-text mt-2">Gallery</h2>
            </motion.div>

            <motion.p
                className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-primary-text max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed tracking-normal sm:tracking-wide"
                variants={fadeIn('', '', 0.1, 1)}
                initial="hidden"
                animate="show"
            >
                The Gallery component is designed to display a collection of images, cards, or media in a grid layout. The component should be responsive, ensuring the layout adjusts smoothly across different screen sizes, from mobile to desktop. The gallery may include features such as image modals for a full-screen view, hover effects for additional information or zoom, and filtering options for better navigation.
            </motion.p>
            <div className=" flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
                <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                </div>
                <div
                    className="h-[380px] sm:h-[440px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-700 flex items-center"
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
