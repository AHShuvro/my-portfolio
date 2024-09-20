import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

import { IoLogoGithub } from "react-icons/io5";

import { fadeIn, textVariant } from "./animations";
import { projects } from "../data";


const Works = () => {



    return (
        <div className="mt-12 sm:px-16 px-6">
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
            <div className=" mt-8 sm:mt-16">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    speed={1500}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 4
                        }
                    }}
                >
                    {projects.map((project, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="xs:w-64 w-full">

                                <div className="bg-[#1F2937] rounded-2xl p-6 min-h-[380px] sm:min-h-[510px] flex flex-col items-center justify-center">
                                    <Tilt>
                                        <motion.div
                                            className="w-full green-pink-gradient p-[1px] rounded-2xl shadow-lg"
                                            variants={fadeIn("right", "spring", 0.5 * idx, 0.75)}
                                            initial="hidden"
                                            animate="show"
                                        >
                                            <div className=" relative w-full h-full flex items-center justify-center mb-4">
                                                <a href={project.link} target="blank">
                                                    <img
                                                        src={project.img}
                                                        alt={project.title}
                                                        className="w-full h-[190px] object-cover rounded-md"
                                                    />
                                                </a>
                                                <div className="absolute w-7 h-7 right-4 top-5 bg-[#000000] rounded-full cursor-pointer flex items-center justify-center">

                                                    <style>
                                                        {`
                                                          @keyframes zoomInOut {
                                                            0% {
                                                              transform: scale(1);
                                                            }
                                                            50% {
                                                              transform: scale(1.5);
                                                            }
                                                            100% {
                                                              transform: scale(1);
                                                            }
                                                          }
                                                                                                        
                                                          .animate-zoom {
                                                            animation: zoomInOut 1s infinite;
                                                          }
                                                        `}
                                                    </style>
                                                    <a href={project.git} target="blank">
                                                        <IoLogoGithub className=" text-white text-xl animate-zoom" />
                                                    </a>
                                                </div>
                                            </div>

                                        </motion.div>
                                    </Tilt>
                                    <div className="flex flex-col items-start justify-center">
                                        <h3 className="text-lg text-start font-bold text-white">
                                            {project.title.length > 30
                                                ? `${project.title.slice(0, 30)} ...`
                                                : project.title}
                                        </h3>
                                        <p className="text-sm text-gray-300">
                                            {project.description.length > 220
                                                ? `${project.description.slice(0, 220)} ...`
                                                : project.description}
                                            {project.description.length > 220 && (
                                                <button
                                                    className="text-blue-500 font-bold"
                                                >
                                                    <a href={project.link} target="blank"><br />Read more</a>
                                                </button>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Works;
