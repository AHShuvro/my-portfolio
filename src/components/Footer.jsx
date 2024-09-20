import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='w-full bg-gray-900 text-white py-12'>
            <div className='container mx-auto px-6 flex flex-col items-center'>

                <div className='mb-8'>
                    <h1 className='text-3xl font-semibold'>Let's Connect</h1>
                </div>

                <div className='mb-8 flex space-x-4'>
                    <a href='https://www.linkedin.com/in/ahshuvro77777/' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>
                        <FaLinkedin size={24} />
                    </a>
                    <a href='https://github.com/ahshuvro' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>
                        <FaGithub size={24} />
                    </a>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>
                        <FaFacebook size={24} />
                    </a>
                    <a href='ahshuvro77777@gmail.com' className='hover:text-gray-400 transition-colors'>
                        <FaEnvelope size={24} />
                    </a>
                    <a href='https://drive.google.com/file/d/166N6PNx2jTK1gtMcSGmAAC2fOyLr9ShR/view?usp=drive_link' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>
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
