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
import { Link } from "react-router-dom";


const Works = () => {



    return (
        <div className="py-12 sm:px-16 px-6">
            <motion.div variants={textVariant()} initial="hidden" animate="show">
                <p className="text-sm sm:text-base text-secondary-text font-medium uppercase tracking-wide sm:tracking-wider">My Work</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-text mt-2">Projects</h2>
            </motion.div>

            <motion.p
                className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-primary-text max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed tracking-normal sm:tracking-wide"
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
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}" style="background-color: #ff0a38; border-radius: 50%; width: 6px; height: 6px; display: inline-block; margin: 0 5px;"></span>`;
                        },
                    }}
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

                                <div className="bg-secondary rounded-2xl p-6 min-h-[380px] sm:min-h-[510px] flex flex-col items-center justify-center text-primary-text hover:text-white duration-600">
                                    <Tilt>
                                        <motion.div
                                            className="w-full green-pink-gradient p-[1px] rounded-2xl shadow-lg"
                                            variants={fadeIn("right", "spring", 0.5 * idx, 0.75)}
                                            initial="hidden"
                                            animate="show"
                                        >
                                            <div className=" relative w-full h-full flex items-center justify-center mb-4">
                                                <Link to={`/projectDetail/${project.id}`}>
                                                    <img
                                                        src={project.img}
                                                        alt={project.title}
                                                        className="w-full h-[190px] object-cover rounded-md"
                                                    />
                                                </Link>
                                                <div className="absolute w-7 h-7 right-4 top-5 bg-secondary-text rounded-full cursor-pointer flex items-center justify-center">

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
                                                    <a href={project.git} target="_blank">
                                                        <IoLogoGithub className=" text-white text-xl animate-zoom" />
                                                    </a>
                                                </div>
                                            </div>

                                        </motion.div>
                                    </Tilt>
                                    <div className="flex flex-col items-start justify-center">
                                        <h3 className="text-lg text-start font-bold ">
                                            {project.title.length > 30
                                                ? `${project.title.slice(0, 30)} ...`
                                                : project.title}
                                        </h3>
                                        <p className="text-sm ">
                                            {project.description.length > 220
                                                ? `${project.description.slice(0, 220)} ...`
                                                : project.description}
                                            <button
                                                className="text-secondary-text font-bold"
                                            >
                                                <Link to={`/projectDetail/${project.id}`}>Read more</Link>
                                            </button>
                                        </p>
                                        <a href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <motion.button
                                                className=" mt-6 p-1 sm:p-3 bg-gradient-to-r to-secondary from-primary text-secondary-text text-lg font-bold shadow-custom-1"
                                                initial={{ scale: 1 }}
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                            >
                                                View Project
                                            </motion.button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
};

export default Works;
