import AnimationCanvas from './AnimationCanvas';

const Hero = () => {
    return (
        <>
            <div className='relative w-full h-screen mx-auto overflow-hidden'>
                <div className='absolute w-full inset-0 right-0 flex flex-wrap justify-between z-10'>
                    <div className='w-full flex justify-end'>
                        <div className='w-[564px] h-[564px] bg-[#915eff] rounded-full opacity-40 animate-grow-shrink3' />
                    </div>
                    <div className='w-full flex justify-start'>
                        <div className='w-[464px] h-[464px] bg-[#b9a0e4] rounded-full opacity-30 animate-grow-shrink1' />
                    </div>
                </div>
                <div className='absolute w-full inset-0 flex gap-5 z-10'>
                    <div className='w-full flex justify-center'>
                        <div className='w-[350px] h-[350px] bg-[#915eff] rounded-full opacity-30 animate-grow-shrink2' />
                    </div>
                    <div className='w-full flex justify-start items-end'>
                        <div className='w-[300px] h-[300px] bg-[#915eff] rounded-full opacity-20 animate-grow-shrink2' />
                    </div>
                </div>
                <AnimationCanvas />
            </div>
        </>
    );
};

export default Hero;
