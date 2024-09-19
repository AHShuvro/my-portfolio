import AnimationCanvas from './AnimationCanvas';

const Hero = () => {
    return (
        <>
            <div className='relative w-full min-h-screen sm:h-screen mx-auto flex flex-col sm:flex-row overflow-hidden'>
                <div className='absolute w-full inset-0 right-0 flex flex-wrap justify-between z-10'>
                    <div className='w-full flex justify-end'>
                        <div className='w-[564px] h-[564px] bg-[#1F2937] rounded-full opacity-40 animate-grow-shrink3' />
                    </div>
                    <div className='w-full flex justify-start'>
                        <div className='w-[464px] h-[464px] bg-[#1F2937] rounded-full opacity-30 animate-grow-shrink1' />
                    </div>
                </div>
                <div className='absolute w-full inset-0 flex gap-5 z-10'>
                    <div className='w-full flex justify-center'>
                        <div className='w-[350px] h-[350px] bg-[#1F2937] rounded-full opacity-30 animate-grow-shrink2' />
                    </div>
                    <div className='w-full flex justify-start items-end'>
                        <div className='w-[300px] h-[300px] bg-[#1F2937] rounded-full opacity-20 animate-grow-shrink2' />
                    </div>
                </div>
                <AnimationCanvas />
                <div className='w-full sm:w-1/2 sm:h-screen flex items-center justify-center '>
                
                </div>
            </div>
        </>
    );
};

export default Hero;
