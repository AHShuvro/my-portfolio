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
        <div className=" h-screen mt-12 sm:mx-16 mx-6">
            <motion.div variants={textVariant()} initial="hidden" animate="show">
                <p className="text-base sm:text-lg text-[#333333] uppercase tracking-wide sm:tracking-wider">Client Feedback</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] mt-2">What Clients Say</h2>
            </motion.div>

            <motion.p
                className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#333333] max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed tracking-normal sm:tracking-wide"
                variants={fadeIn('', '', 0.1, 1)}
                initial="hidden"
                animate="show"
            >
                Working with Shuvro was transformative for our project. His expertise in frontend technologies and innovative problem-solving were crucial to our success. He delivered a visually stunning and functional website, paying attention to every detail. His professionalism and dedication set a new standard for future projects. We're thrilled with the outcome and eager to collaborate again.
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

                    {
                        feedbackData.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className=" w-full bg-[#1F2937] rounded-lg flex flex-col items-start justify-center px-3 sm:px-8 md:px-14 lg:px-24 py-12">
                                    <p className='text-white text-[1.5rem] md:text-[2rem] pb-6'>
                                        {item.feedback.length > 120
                                            ? `${item.feedback.slice(0, 120)} ...`
                                            : item.feedback}

                                        {item.feedback.length > 120 && (
                                            <button
                                                className="text-blue-500 font-bold"
                                            >
                                                <a className='text-base font-bold' href="" target="blank">Read more</a>
                                            </button>
                                        )}
                                    </p>
                                    <p className='text-white text-[2rem] font-poppins pb-3'>Alexander Flik</p>
                                    <p className='text-[#858792] text-[1.2rem] font-poppins'>BlueTech Solutions</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>


            </div>
        </div>
    );
};

export default Feedback;