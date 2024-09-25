import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { navLink } from '../data';

import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 opacity-95 bg-[#212428]'>
            <div className='w-full flex justify-between items-center mx-auto'>
                <RouterLink to={'/'}
                    className='flex items-center gap-2'
                    smooth={true}
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className='text-[#FFFFFF] text-lg font-bold cursor-pointer'>DevShuvro</p>
                </RouterLink>
                <ul className='list-none hidden sm:flex flex-row gap-4 md:gap-10'>
                    {
                        navLink.map((link, idx) => (
                            <li key={idx}>
                                <ScrollLink to={link.path}
                                    className={`${active === link.name ? "text-red-500" : "text-[#FFFFFF]"} text-lg font-medium cursor-pointer`}
                                    smooth={true}
                                    offset={-90}
                                    duration={700}
                                    onSetActive={setActive}
                                >
                                    {link.name}
                                </ScrollLink>
                            </li>
                        ))
                    }
                </ul>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    {
                        toggle ? (
                            <RxCross2 className='w-7 h-7 text-white object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
                        ) : (
                            <HiBars3BottomRight className='w-7 h-7 text-white object-contain cursor-pointer'
                                onClick={() => setToggle(!toggle)} />
                        )
                    }
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-36 z-10 rounded-lg bg-[#1F2937]`}>
                        <ul className='list-none flex justify-end gap-3 flex-col'>
                            {
                                navLink.map((link, idx) => (
                                    <li key={idx}>
                                        <ScrollLink to={link.path}
                                            className={`${active === link.name ? "text-red-500" : "text-[#FFFFFF]"} text-base font-medium cursor-pointer`}
                                            smooth={true}
                                            offset={-90}
                                            duration={700}
                                            onSetActive={setActive}
                                            onClick={() => setToggle(!toggle)}
                                        >
                                            {link.name}
                                        </ScrollLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
