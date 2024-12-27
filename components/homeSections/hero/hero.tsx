"use client"

/**
 * Hero Component
 * 
 * This component creates a responsive hero section with image sliders.
 */

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const sliderImages = [
    '/images/hero/hero3.jpg',
    '/images/hero/hero2.jpg'
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeSlider = (index:number) => {
        setCurrentIndex(index);
    }

  return (
    <div className='relative w-[100vw] -ml-[8px] lg:-ml-[112px] h-[60vh] sm:h-[50vh] md:h-[70vh] lg:h-[60vh] xl:h-[100vh] overflow-hidden'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-gray-900 opacity-70'></div>
        <AnimatePresence>
            <motion.img
                key={currentIndex}
                src={sliderImages[currentIndex]}
                alt="Slideshow Image"
                className="w-full h-full object-cover inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            />
        </AnimatePresence>
        <div className='absolute w-full sm:w-[50%] md:w-full h-full top-0 '>
            
            <div className='flex px-16 justify-end pb-12 flex-col w-full h-[90%]'>
                <AnimatePresence>
                    {/* Text content Slide 1 */}
                    {currentIndex==0 && <motion.div key="modal" exit={{ opacity: 0 }} >
                        <div className='flex justify-end flex-col'>
                            <h3 className='text-white uppercase text-[12px] md:text-[18px] lg:text-[25px] tracking-[0.2rem] font-semibold'>Cutting-Edge</h3>
                            <h1 className='text-white uppercase text-[30px] md:text-[45px] lg:text-[58px] font-bold'>IT Solutions</h1>
                            <h1 className='text-red-600 uppercase text-[20px] md:text-[30px] lg:text-[40px] font-semibold'>For all businesss</h1>
                            <Link href="#" className='rounded px-1 md:px-2 mt-4 py-1.5 xl:py-3.5 overflow-hidden group
                            bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400
                            text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all
                            ease-out duration-300 w-[100px] lg:w-[150px] text-center'>
                                <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform
                                translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                                <span className='relative font-bold uppercase text-sm lg:text-base'>Contact</span>
                            </Link>
                        </div>
                    </motion.div>
                    }
                    {/* Text content Slide 2 */}
                    {currentIndex==1 && <motion.div key="modal" exit={{ opacity: 0 }} >
                        <div className='flex justify-end flex-col'>
                            <h3 className='text-white uppercase text-[12px] md:text-[18px] lg:text-[25px] tracking-[0.2rem] font-semibold'>Streamline your</h3>
                            <h1 className='text-white uppercase text-[30px] md:text-[45px] lg:text-[58px] font-bold'>Logistics & WareHouse</h1>
                            <h1 className='text-red-600 uppercase text-[20px] md:text-[30px] lg:text-[40px] font-semibold'>Operations with cutting-edge</h1>
                            <Link href="#" className='rounded px-1 md:px-2 mt-4 py-1.5 xl:py-3.5 overflow-hidden group
                            bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400
                            text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all
                            ease-out duration-300 w-[100px] lg:w-[150px] text-center'>
                                <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform
                                translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                                <span className='relative font-bold uppercase text-sm lg:text-base'>Contact</span>
                            </Link>
                        </div>
                    </motion.div>
                    }
                </AnimatePresence>
            </div>

            {/* bottom slider buttons */}
            <div className='relative flex justify-center flex-col w-full h-[10%] border-t-[1px] border-t-gray-800'>
            <div className='absolute w-full h-full bg-gray-900 opacity-70'></div>
                <div className='absolute grid grid-cols-2 mx-auto w-[100%] h-full left-1/2 transform -translate-x-1/2'>
                    {/* button 1 */}
                    <div className={`flex justify-center items-center w-full cursor-pointer hover:bg-gray-800 border-r-[1px] border-r-gray-700 ${currentIndex==0 ? 'bg-gray-800' : ''}`} onClick={() => changeSlider(0)}>
                        <h3 className='text-white uppercase font-semibold text-sm md:text-sm lg:text-lg mx-auto items-center text-center px-2'>It Solutions</h3>
                    </div>
                    {/* button 2 */}
                    <div className={`flex justify-center items-center w-full cursor-pointer hover:bg-gray-800 ${currentIndex==1 ? 'bg-gray-800' : ''}`} onClick={() => changeSlider(1)}>
                        <h3 className='text-white uppercase font-semibold text-sm md:text-sm lg:text-lg mx-auto items-center text-center px-2'>Warehousing & Logistics</h3>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Hero