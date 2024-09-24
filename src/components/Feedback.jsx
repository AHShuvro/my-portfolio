import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { motion } from "framer-motion";
import { fadeIn, textVariant } from './animations';
import { feedbackData } from '../data';

const Feedback = () => {
    return (
        <div className="h-auto my-12 sm:mx-16 mx-6">
            <motion.div variants={textVariant()} initial="hidden" animate="show">
                <p className="text-sm sm:text-base text-[#ffffff] uppercase tracking-wide sm:tracking-wider">Client Feedback</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#ffffff] mt-2">What Clients Say</h2>
            </motion.div>
            <motion.p
                className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#ffffff] max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed tracking-normal sm:tracking-wide"
                variants={fadeIn('', '', 0.1, 1)}
                initial="hidden"
                animate="show"
            >
                Working with Shuvro was transformative for our project. His expertise in frontend technologies and innovative problem-solving were crucial to our success. He delivered a visually stunning and functional website, paying attention to every detail. His professionalism and dedication set a new standard for future projects. We're thrilled with the outcome and eager to collaborate again.
            </motion.p>

            {/* Swiper Section */}
            <div className="mt-12">
                <Swiper
                    spaceBetween={30}
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
                            slidesPerView: 2,
                        },
                        1450: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {feedbackData.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="w-full bg-[#1F2937] rounded-lg flex flex-col items-start justify-center px-4 sm:px-6 md:px-8 lg:px-14 py-8 md:py-12 lg:py-16">
                                <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl pb-6'>
                                    {item.feedback.length > 120
                                        ? `${item.feedback.slice(0, 120)} ...`
                                        : item.feedback}

                                    {item.feedback.length > 120 && (
                                        <button
                                            className="text-blue-500 font-bold"
                                        >
                                            <a className='text-base font-bold' href="#" target="">Read more</a>
                                        </button>
                                    )}
                                </p>
                                <p className='text-white text-lg sm:text-xl md:text-2xl font-poppins pb-3'>{item.name}</p>
                                <p className='text-[#858792] text-sm sm:text-base md:text-lg font-poppins'>{item.company}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Feedback;
