import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLink } from '../data';

const Navbar = () => {

    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav
                className='sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-[#1F2937]'
            >
                <div className='w-full flex justify-between items-center mx-auto'>
                    <Link to="/"
                        className='flex items-center gap-2'
                        onClick={() => {
                            window.scrollTo(0, 0);
                            setActive("");
                        }}
                    >
                        <h3 className='w-8 h-9 object-contain text-[#FFFF00] flex items-center'>logo</h3>
                        <p className='text-[#FFFFFF] text-lg font-bold cursor-pointer' >DevShuvro
                        </p>
                    </Link>
                    <ul className='list-none hidden sm:flex flex-row gap-10'>
                        {
                            navLink.map((link, idx) => (
                                <li key={idx}>
                                    <a href={`#${link.path}`}
                                        className={`${active === link.name ? "text-red-500" : "text-[#FFFFFF]"} text-lg font-medium cursor-pointer`}
                                        onClick={() => {
                                            setActive(link.name)
                                        }}
                                    >{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        {
                            toggle ? <p className='w-7 h-7 object-contain cursor-pointer'
                                onClick={() => setToggle(!toggle)}>open</p> :
                                <p className='w-7 h-7 object-contain cursor-pointer'
                                    onClick={() => setToggle(!toggle)}>close</p>
                        }

                        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-36 z-10 rounded-lg bg-slate-400`}>
                            <ul className='list-none flex justify-end gap-3 flex-col'>
                                {
                                    navLink.map((link, idx) => (
                                        <li key={idx}>
                                            <a href={`#${link.path}`}
                                                className={`${active === link.name ? "text-red-500" : "text-[#FFFFFF]"} text-base font-medium cursor-pointer`}
                                                onClick={() => {
                                                    setToggle(!toggle)
                                                    setActive(link.name)
                                                }}
                                            >{link.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navbar;