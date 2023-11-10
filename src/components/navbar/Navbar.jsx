import React, { useState } from 'react';
import '../../output.css';
import './navbar.css';

const Navbar = () => {
    const [menuDisplay, setMenuDisplay] = useState(false);
    const [changeDropImg, setChangeDropImg] = useState(false);

    const displayMenu = () => {
        setMenuDisplay(!menuDisplay);
        setChangeDropImg(!changeDropImg);
    }

    return (
        <div className='navbar ss:flex ss:justify-center w-screen'>
            <nav className='ss:w-screen'>
                <container className='ss:w-screen lg:hidden overflow-hidden px-6 sm:px-14 py-4 sm:py-14 h-[70px] flex justify-between items-center'>
                    <div className='logo lg:hidden w-28 h-10 sm:w-40 px-0 sm:h-14 xs:w-28 xs:h-10'></div>
                    <button className={`md:w-[44px] md:h-11 sm:w-[24px] sm:h-6 xs:w-[25px] xs:h-7 hover:cursor-pointer ${changeDropImg ? 'drop-menu-close' : 'drop-menu-button'}`} onClick={displayMenu}></button>
                    <div className={`drop-menu absolute left-0 w-screen top-0 sm:mt-[112px] xs:mt-[70px] drop-menu h-fit ${menuDisplay ? 'active' : ''}`}>
                        <ul className='flex flex-col mx-4 text-sm text-gray-200 font-semibold bg-menu-bg'>
                            <li className='hover:cursor-pointer w-full flex items-center px-5 border-b-[0.5px] border-gray-500 h-[36px]'>HOME</li>
                            <li className='hover:cursor-pointer w-full flex items-center px-5 border-b-[0.5px] border-gray-500 h-[36px]'>ABOUT</li>
                            <li className='hover:cursor-pointer w-full flex items-center px-5 border-b-[0.5px] border-gray-500 h-[36px]'>SERVICES</li>
                            <li className='hover:cursor-pointer w-full flex items-center px-5 border-b-[0.5px] border-gray-500 h-[36px]'>SHOP</li>
                            <li className='hover:cursor-pointer w-full flex items-center px-5 border-b-[0.5px] border-gray-500 h-[36px]'>BLOG</li>
                            <li className='hover:cursor-pointer w-full flex items-center px-5 border-b-[0.5px] border-gray-500 h-[36px]'>PAGE</li>
                            <li className='hover:cursor-pointer w-full flex items-center px-5 border-b-[0.5px] border-gray-500 h-[36px]'>CONTACT</li>
                        </ul>
                    </div>
                </container>

                <container className='bg-hero-bg lg:w-screen hidden lg:block'>
                    <div className='navbar-lg bg-hero-bg mx-auto flex justify-between h-20 items-center'>
                        <div className='dropMenu w-7 h-6 hover:cursor-pointer'></div>
                        <div>
                            <ul className='flex gap-10 text-[15px] font-bold text-gray-500'>
                                <li className='hover:cursor-pointer hover:text-black'>HOME</li>
                                <li className='hover:cursor-pointer hover:text-black'>ABOUT</li>
                                <li className='hover:cursor-pointer hover:text-black'>SERVICES</li>
                                <li className='hover:cursor-pointer hover:text-black'>SHOP</li>
                                <li className='hover:cursor-pointer hover:text-black'>BLOG</li>
                                <li className='hover:cursor-pointer hover:text-black'>PAGE</li>
                                <li className='hover:cursor-pointer hover:text-black'>CONTACT</li>
                            </ul>
                        </div>
                        <div className='user w-8 h-8 hover:cursor-pointer'></div>
                    </div>
                </container>
            </nav>
        </div>
    )
}

export default Navbar;
