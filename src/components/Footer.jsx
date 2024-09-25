import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

const Footer = () => {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(schema)
    });

    const submitHandler = async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            throw new Error();
        } catch (error) {
            setError("root", {
                message: "This email is already taken!"
            });
        }
    };


    return (
        <footer className='w-full bg-secondary text-white py-12 sm:px-16 px-6 '>
            <div className=" flex flex-col lg:flex-row items-center justify-around gap-10 xl:gap-0 max-h-screen ">
                <div className="w-full lg:w-1/2 hidden lg:flex">
                    <iframe
                        className="w-full h-96 border-4 border-[#1F2937] rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.8318789773!2d90.33728815181978!3d23.780975728157546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1708593211586!5m2!1sbn!2sbd"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="w-full lg:w-1/2 bg-[#1F2937] shadow-lg rounded-lg p-8 max-w-lg mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitHandler)}>
                        <div>
                            <input
                                {...register("email")}
                                type="text"
                                placeholder="Email"
                                className={`w-full p-3 border text-[#777777] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm sm:text-base font-semibold mt-1">{errors.email.message}</span>
                            )}
                        </div>

                        <div>
                            <input
                                {...register("password")}
                                type="password"
                                placeholder="Password"
                                className={`w-full p-3 border text-[#777777] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.password && (
                                <span className="text-red-500 text-sm sm:text-base font-semibold mt-1">{errors.password.message}</span>
                            )}
                        </div>
                        <button
                            disabled={isSubmitting}
                            className={`w-full py-3 bg-secondary-text text-white rounded-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
                            type="submit"
                        >
                            {isSubmitting ? "Loading..." : "Login"}
                        </button>

                        {errors.root && (
                            <div className="text-red-500 text-center mt-4">{errors.root.message}</div>
                        )}
                    </form>
                </div>
            </div>
            <div className=' mx-auto px-6 flex flex-col items-center pt-12'>

                <div className='mb-8'>
                    <h1 className='text-3xl font-semibold'>Let's Connect</h1>
                </div>

                <div className='mb-8 flex gap-6'>
                    <a href='https://www.linkedin.com/in/ahshuvro77777/' target='_blank' rel='noopener noreferrer' className=' mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1'>
                        <FaLinkedin size={24} />
                    </a>
                    <a href='https://github.com/ahshuvro' target='_blank' rel='noopener noreferrer' className=' mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1'>
                        <FaGithub size={24} />
                    </a>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className=' mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1'>
                        <FaFacebook size={24} />
                    </a>
                    <a href='ahshuvro77777@gmail.com' className=' mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1'>
                        <FaEnvelope size={24} />
                    </a>
                    <a href='https://drive.google.com/file/d/166N6PNx2jTK1gtMcSGmAAC2fOyLr9ShR/view?usp=drive_link' target='_blank' rel='noopener noreferrer' className=' mt-6 p-1 sm:p-6 bg-gradient-to-r to-secondary from-primary text-secondary-text text-2xl shadow-custom-1'>
                        <FaFilePdf size={24} />
                    </a>
                </div>

                <div className='text-center mb-8'>
                    <p className='text-lg mb-2'>Contact me:</p>
                    <p className='text-gray-400'>ahshuvro77777@gmail.com</p>
                </div>

                <div className='text-center text-gray-400'>
                    <p>&copy; {new Date().getFullYear()} A H Shuvro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
