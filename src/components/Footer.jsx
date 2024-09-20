import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='w-full bg-gray-900 text-white py-12'>
            <div className='container mx-auto px-6 flex flex-col items-center'>

                <div className='mb-8'>
                    <h1 className='text-3xl font-semibold'>Let's Connect</h1>
                </div>

                <div className='mb-8 flex space-x-4'>
                    <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>
                        <FaLinkedin size={24} />
                    </a>
                    <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>
                        <FaGithub size={24} />
                    </a>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>
                        <FaFacebook size={24} />
                    </a>
                    <a href='mailto:email@example.com' className='hover:text-gray-400 transition-colors'>
                        <FaEnvelope size={24} />
                    </a>
                    <a href='/path-to-your-resume.pdf' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400 transition-colors'>
                        <FaFilePdf size={24} />
                    </a>
                </div>

                <div className='text-center mb-8'>
                    <p className='text-lg mb-2'>Contact me:</p>
                    <p className='text-gray-400'>email@example.com</p>
                </div>

                <div className='text-center text-gray-400'>
                    <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
