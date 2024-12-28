
/**
 * NewsAndUpdates Component
 * 
 * This component creates a responsive news & updates section.
 */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const NewsAndUpdates = () => {
  return (
    <div className='pt-16 flex items-center justify-center flex-col bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full'>
            {/* left side details section */}
            <div className='w-full relative mb-[40px]'>
                <div className='lg:flex'>
                    <div className='flex-none lg:w-[50px] mb-[10px]'>
                        <div className='flex px-6 py-1 bg-[--primaryColor] h-auto w-fit rounded-md lg:-rotate-90 lg:absolute top-[90px] -left-[96px]'>
                            <p className='font-base text-sm lg:text-base uppercase font-semibold text-white tracking-[0.5rem]'>Blog</p>
                            <div className='lineWithDot hidden lg:block ml-[30px]'></div>
                        </div>
                    </div>
                    
                    <div className='w-full lg:w-[calc(100%_-_45px)]'>
                        <h1 className='text-[28px] lg:text-[50px] font-bold leading-[30px] lg:leading-[60px] tracking-[0.055em] mb-[8px]'>News And Updates</h1>
                        <p className='text-18px] text-gray-600 leading-[24px] tracking-[0.055em]'>Keep yourself updated with the latest industry updates and news from Zone24x7.</p>
                    </div>
                </div>
                <Link href="">
                    <div className='mt-[40px]'>
                        <p className='flex items-center text-[16px] font-semibold hover:text-[--primaryColor] group'>
                            Read More Articles
                            <FaArrowRight className='ml-[10px] group-hover:ml-[20px] transition-all duration-500 origin-left' />
                        </p>
                        
                    </div>
                </Link>
            </div>

            {/* two cards containing news */}
            {/* 1st card */}
            <div className='px-[12px]'>
                <div className='w-full relative group mb-[30px] border rounded-md cursor-pointer'>
                    <div className='px-[30px] py-[30px]'>
                        <Image src="/images/news/news1.webp" alt="news" width={300} height={300} className='w-full mb-[15px] max-h-[200px] object-cover' />
                        <h2 className='text-[20px] font-semibold leading-[24px] tracking-[0.055em] mb-[10px]'>Locators and Capturing XPath</h2>
                        <p className='text-[14px] text-gray-600 leading-[24px] tracking-[0.055em]'>This blog places its emphasis on the concepts of locators and capturing XPaths. As we are well aware, testing web-based applications involves executing specific actions on HTML elements, like clicking, typing, etc. When automating web-based ...</p>
                    </div>
                    

                </div>
            </div>

            {/* second card */}
            <div className='px-[12px]'>
                <div className='w-full relative group mb-[30px] border rounded-md cursor-pointer'>
                    <div className='px-[30px] py-[30px]'>
                        <Image src="/images/news/news2.webp" alt="news" width={300} height={300} className='w-full mb-[15px] max-h-[200px] object-cover' />
                        <h2 className='text-[20px] font-semibold leading-[24px] tracking-[0.055em] mb-[10px]'>04 Most Used Advertising Appeals and Usage Scenarios</h2>
                        <p className='text-[14px] text-gray-600 leading-[24px] tracking-[0.055em]'>
                        What is Advertising Appeal? An advertising appeal is defined as a strategy or technique for acquiring the attention of people to persuade and reinforce them to purchase a particular product or service. The approach may be a marketing or ...
                        </p>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsAndUpdates