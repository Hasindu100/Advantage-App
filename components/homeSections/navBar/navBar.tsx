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

type Props = {
    openNav:()=>void
}

const NavBar = ({openNav}:Props) => {
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
    <div className={`${navBg ? "bg-rose-900 shadow-md" : "fixed"} transition-all duration-200 h-[80px] z-[1000] fixed w-full border-b-[1px] border-b-gray-600`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            <div className='flex items-center space-x-2'>
                <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Advantage</h1>
            </div>
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => {
                    return (
                        <div key={link.id} className={`${link.label == "Services" ? "group" : "" } relative`}>
                            <Link href={link.url}>
                                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px]
                                after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">{link.label}</p>
                            </Link>
                            {/* services sub menu list */}
                            <div className='opacity-0 group-hover:opacity-100 hidden group-hover:block'>
                                <NavSubMenu />
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default NavBar