const Loading = () => {
    return (
        <div className="relative flex items-center justify-center w-screen h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 overflow-hidden">

            <div className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-indigo-500 opacity-30 rounded-full animate-pulse"></div>
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-indigo-400 opacity-20 rounded-full animate-ping"></div>

            <div className="relative flex flex-col items-center justify-center text-center px-4">
                <p className="text-base sm:text-xl md:text-3xl font-medium text-white">Please Wait...</p>
            </div>
        </div>
    );
};

export default Loading;

