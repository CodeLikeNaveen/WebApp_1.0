'use client';
import { assets } from '@/assets/assets';
import { ArrowUpRight, Moon, Sun, TextAlignEnd, X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({isDarkMode,setIsDarkMode}) => {

    const sideMenuRef = useRef();
    const [isScroll, setIsScroll] = useState(false)

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }
    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }

    useEffect(() => {
        const handleScroll = () => { setIsScroll(window.scrollY > 50);};
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image loading='eager' src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>

                {/* Logo  */}
                <a href='#top'>
                    <span>
                        <Image loading='eager' src={isDarkMode ? assets.logo_dark : assets.logo } className='w-28 cursor-pointer mr-14' alt='' />
                    </span>
                </a>

                {/* Page links  */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li>
                        <a
                            className='font-Ovo'
                            href='#top'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className='font-Ovo'
                            href='#about'>
                            About Me
                        </a>
                    </li>
                    {/* <li>
                        <a
                            className='font-Ovo'
                            href='#services'>
                            Services
                        </a>
                    </li> */}
                    <li>
                        <a
                            className='font-Ovo'
                            href='#work'>
                            My Work
                        </a>
                    </li>
                    <li>
                        <a
                            className='font-Ovo'
                            href='#contact'>
                            Contact Me
                        </a>
                    </li>
                </ul>

                {/* Dark Mode and Contact Button  */}
                <div className='flex items-center gap-4'>
                    <button onClick={()=> setIsDarkMode(prev => !prev)}>
                        {
                            isDarkMode ? 
                            <Sun className="w-6 h-6 text-yellow-300 cursor-pointer" /> :
                            <Moon className="w-6 h-6 text-cyan-400 cursor-pointer" />
                        }
                    </button>
                    <a
                        href='#contact'
                        className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'
                    >
                        Contact
                        <ArrowUpRight strokeWidth={1.8} className='w-6 h-6'/>
                    </a>

                    {/* Menu Button  */}
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <TextAlignEnd strokeWidth={2} className='w-7 h-7 cursor-pointer'/>
                    </button>
                </div>

                {/* --------------- Mobile Menu -----------------  */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <X  strokeWidth={2} className='w-8 h-8 cursor-pointer'/>
                    </div>

                    <li><a
                        onClick={closeMenu}
                        className='font-Ovo'
                        href='#top'>
                        Home
                    </a></li>
                    <li><a
                        onClick={closeMenu}
                        className='font-Ovo'
                        href='#about'>
                        About Me
                    </a></li>
                    {/* <li><a
                        onClick={closeMenu}
                        className='font-Ovo'
                        href='#services'>
                        Services
                    </a></li> */}
                    <li><a
                        onClick={closeMenu}
                        className='font-Ovo'
                        href='#work'>
                        My Work
                    </a></li>
                    <li><a
                        onClick={closeMenu}
                        className='font-Ovo'
                        href='#contact'>
                        Contact Me
                    </a></li>
                </ul>

            </nav >

        </>
    )
}

export default Navbar