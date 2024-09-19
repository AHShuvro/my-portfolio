import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

const Contact = () => {
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
        <div className="flex flex-col lg:flex-row items-center justify-around gap-10 xl:gap-0 min-h-screen bg-gray-100 p-6">
            <div className="w-1/2 hidden lg:flex">
                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.8318789773!2d90.33728815181978!3d23.780975728157546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1708593211586!5m2!1sbn!2sbd" width="800" height="600" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="w-full max-w-xl py-24 bg-[#1F2937] shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold text-[#FFFFFF] text-center mb-6">Login</h2>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <input
                            {...register("email")}
                            type="text"
                            placeholder="Email"
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                        )}
                    </div>

                    <div>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Password"
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>
                        )}
                    </div>

                    <button
                        disabled={isSubmitting}
                        className={`w-full py-3 bg-indigo-500 text-white rounded-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
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
    );
};

export default Contact;
