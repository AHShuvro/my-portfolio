import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { fadeIn, textVariant } from './animations';
import { sliderImages } from '../data';
import { motion } from 'framer-motion';
import { Tilt } from "react-tilt";

export const Gallery = () => {
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
                The Gallery component is designed to display a collection of images, cards, or media in a grid layout. The component should be responsive, ensuring the layout adjusts smoothly across different screen sizes, from mobile to desktop.
            </motion.p>

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={false}
                grabCursor={true}
                keyboard={{ enabled: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1500}
                breakpoints={{
                    840: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                scrollbar={{ draggable: true }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                className="mySwiper mt-8"
            >
                {sliderImages.map((slide, index) => (
                    <Tilt key={index} >
                        <motion.div
                            className="w-full green-pink-gradient p-[1px] rounded-2xl"
                            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                            initial="hidden"
                            animate="show"
                        >
                            <SwiperSlide className="rounded-lg overflow-hidden md:h-[356px] lg:h-[456px] shadow-lg">
                                <img
                                    src={slide.img}
                                    className="w-full h-full object-cover"
                                    alt={`Slide ${index + 1}`}
                                />
                            </SwiperSlide>
                        </motion.div>
                    </Tilt>
                ))}
            </Swiper>
            {/* <div className='flex gap-6 text-white font-semibold'>
                <button className='py-2 px-4 bg-red-500 rounded-full'>Prev</button>
                <button className='py-2 px-4 bg-red-500 rounded-full'>Next</button>
            </div> */}
        </div>
    );
};

export default Gallery;
