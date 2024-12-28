'use client'

/**
 * NavBar Component
 * 
 * This component creates a navigation bar for the big screen sizes.
 */

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';
import { navLinks } from './data';
import NavSubMenu from './navSubMenu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

type Props = {
    openNav:()=>void
}

const NavBar = ({openNav}:Props) => {
    const pathname = usePathname(); // get current path name

    const [navBg, setNavBg] = useState(false); // identifier for change navbar background color when scrolling

    // set navBg value when scrolling
    useEffect(() => {
        const handler = () => {
            if (window.scrollY >=90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

  return (
    <div className={`${pathname != '/home' ? 'bg-cyan-950' : navBg ? "bg-cyan-950 shadow-md" : "fixed"} transition-all duration-200 h-[80px] z-[1000] fixed w-full border-b-[1px] border-b-gray-600`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* logo */}
            <Link href="/home" className='flex items-center space-x-2'>
                <Image 
                    src="/images/logo/logo.png" 
                    alt="logo" 
                    width={100}
                    height={50} />
            </Link>
            {/* Navigation menu */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => {
                    return (
                        <div key={link.id} className={`${link.id == 5 ? "group" : "" } relative`}>
                            <Link href={link.url} className='flex'>
                                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px]
                                after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">{link.label}</p>
                                
                                {/* Add caret icon for about us */}
                                {link.id == 5 ? <div className='text-white my-auto ml-2'><FaCaretDown className='hidden group-hover:block' /> <FaCaretUp className='group-hover:hidden' /></div>: ''}
                            </Link>
                            
                            {/* about us sub menu list */}
                            <div className='opacity-0 group-hover:opacity-100 hidden group-hover:block'>
                                <NavSubMenu />
                            </div>

                        </div>
                    )
                })}
            </div>
            <div className='flex items-center space-x-4'>
                <Link href="/contact-us" className='md:px-6 md-py-2.5 px-4 py-2 text-white text-sm lg:text-base font-semibold bg-[#DB9632] 
                 hover:bg-orange-400 transition-all duration-200 rounded'>Contact Us</Link>
                 <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
            </div>
        </div>
    </div>
  )
}

export default NavBar