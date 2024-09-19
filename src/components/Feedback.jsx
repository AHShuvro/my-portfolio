import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { motion } from "framer-motion";
import { fadeIn, textVariant } from './animations';

const Feedback = () => {
    return (
        <div className=" h-screen mt-12 sm:mx-16 mx-6">
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
            <div className="mt-12">
                    <Swiper

                        spaceBetween={70}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={2000}
                        modules={[Pagination, Autoplay, Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 2
                            },
                            1450: {
                                slidesPerView: 3
                            },
                        }}
                    >

                        <SwiperSlide>
                            <div className="h-auto w-full bg-[#1F2937] flex flex-col items-start justify-center px-3 sm:px-8 md:px-14 lg:px-24 py-12">
                                <p className='text-white text-[1.5rem] md:text-[2rem] pb-6'>Exceptional service! They turned my outdated website into a sleek masterpiece. Highly recommend for anyone seeking top-notch web development.</p>
                                <p className='text-white text-[2rem] font-poppins pb-3'>Alexander Flik</p>
                                <p className='text-[#858792] text-[1.2rem] font-poppins'>BlueTech Solutions</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-auto w-full bg-[#1F2937] flex flex-col items-start justify-center px-6 sm:px-12 md:px-14 py-12">
                                <p className='text-white text-[1.5rem] md:text-[2rem] pb-6'>Incredible attention to detail! Their team transformed my vision into a stunning reality. Couldn't be happier with the results!</p>
                                <p className='text-white text-[2rem] font-poppins pb-3'>Thomas</p>
                                <p className='text-[#858792] text-[1.2rem] font-poppins'>PixelPerfect WebWorks</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-auto w-full bg-[#1F2937] flex flex-col items-start justify-center px-6 sm:px-12 md:px-14 py-12">
                                <p className='text-white text-[1.5rem] md:text-[2rem] pb-6'>Outstanding professionalism! From start to finish, they exceeded my expectations. The website they created surpassed all others in design and functionality. Amazing job!</p>
                                <p className='text-white text-[2rem] font-poppins pb-3'>Emily</p>
                                <p className='text-[#858792] text-[1.2rem] font-poppins'>CodeCraft Studios</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-auto w-full bg-[#1F2937] flex flex-col items-start justify-center px-6 sm:px-12 md:px-14 py-12">
                                <p className='text-white text-[1.5rem] md:text-[2rem] pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore? Nam consequuntur natus rerum minus. Ratione, id!</p>
                                <p className='text-white text-[2rem] font-poppins pb-3'>Lorem, ipsum.</p>
                                <p className='text-[#858792] text-[1.2rem] font-poppins'>Lorem.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                </div>
            </div>
    );
};

export default Feedback;