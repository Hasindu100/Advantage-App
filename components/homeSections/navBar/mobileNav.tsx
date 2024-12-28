"use client"

/**
 * MobileNavBar Component
 * 
 * This component creates a navigation bar for the small screen sizes.
 */

import Link from 'next/link'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { navLinks } from './data'
import Menu from '@/app/helper/menu'

type Props = {
    showNav:boolean;
    closeNav: () => void
}

const MobileNav = ({closeNav,showNav}: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-120%]"

    const [isOpen, setIsOpen] = useState(false); // variable for identify is mobileNav is open or not
    
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    <div className={`fixed ${navOpen} inset-0 transform transision-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
    <div className={`text-white ${navOpen} fixed justify-center flex flex-col pt-10 h-full transform transition-all duration-500
     delay-300 w-[80%] sm:w-[60%] bg-cyan-950 space-y-6 z-[1050]`}>
      <div className='h-[calc(100vh_-_90px)] overflow-y-auto mt-[90px]'>
        {navLinks.map((link) => {
            return (
              <div key={link.id} className='w-full px-5 py-0'>
                {/* Nav menu */}
                {link.id != 5 &&
                  <Link href={link.url}>
                    <p className='text-white w-fit text-[20px] 
                     border-white sm:text-[30px] leading-[52px]'>{link.label}</p>
                     <hr />
                  </Link>
                }
                {/* Services sub menu */}
                {link.id == 5 && (
                  <div onClick={toggleMenu}>
                    <div className='flex justify-between items-center mr-4'>
                      <p className='text-white w-fit text-[20px]
                      border-white sm:text-[30px] leading-[52px]'>{link.label}</p>
                      {isOpen ? <FaCaretDown /> : <FaCaretUp />}
                    </div>
                     <hr />
                     <Menu isOpen={isOpen} />
                  </div>
                )}
              </div>
                
            )
        })}
        </div>
        {/* close button */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
     </div>
    </>
    
  )
}

export default MobileNav