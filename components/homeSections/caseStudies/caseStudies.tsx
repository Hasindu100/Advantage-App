
/**
 * CaseStudies Component
 * 
 * This component creates a responsive case studies section.
 */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { caseStudiesList } from './data'

const CaseStudies = () => {
  return (
    <div className='pt-16 flex items-center justify-center flex-col bg-white'>
        {/* 1st section with image and case study details */}
        <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
            {/* image */}
            <div className='flex justify-start w-full'>
                <Image src="./images/caseStudy/our-work.svg" alt="ourwork" width={300} height={300} className='h-auto' />
            </div>
            {/* details section */}
            <div className='flex items-center justify-end mx-auto w-full'>
                <div className='max-w-[400px]'>
                    <div className='px-6 py-1 mt-[100px] bg-[--primaryColor] h-auto rounded-md w-fit md:w-full float-right md:float-none'>
                        <div className='lineWithDot hidden lg:block mr-[30px]'></div>
                        <p className='font-base text-sm lg:text-base uppercase font-semibold text-white tracking-[0.5rem]'>Case Studies</p>
                    </div>
                    <div className='float-right text-end mt-[20px]'>
                        <h1 className='text-[30px] font-extrabold mb-[8px] text-gray-700'>Our Work</h1>
                        <p className='float-right mb-[16px] text-gray-500'>We inspire our clients by offering a
                        hands-on approach to the implementation of disruptive technology and innovation solutions.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Case Study cards */}
        <div className='relative mt-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full lg:w-[calc(100%_-_55px)]'>
                {/* Card */}
                {
                    caseStudiesList.map((data) => {
                        return (
                            <div key={data.id} className='w-full relative group mb-[30px]'>
                                {/* Card body */}
                                <div className='px-[30px] py-[30px] border rounded-md hover:shadow-[0px_0px_33px_-10px_rgba(71,114,254,0.3)]'>
                                    <div className='px-[5px] py-[10px] bg-[#FFC013] uppercase text-white text-[13px] lg:text-[14px] font-semibold absolute top-0 left-[30px]'>{data.title}</div>
                                    <Image src={data.image} alt="warehouse" width={64} height={64} className='mt-[30px]' />
                                    <p className='mt-[15px] text-sm text-gray-500'>
                                        {data.description}
                                        <br /><br />
                                        <strong>{data.footerText}</strong>
                                    </p>
                                </div>
                                {/* Read more button */}
                                <Link href="#" className='scale-y-0 group-hover:scale-y-100 transition duration-500 origin-top absolute py-[15px] bg-[--primaryColor] w-full text-center text-white font-semibold text-[14px]'>Read Case</Link>
                            </div>
                        )
                    })
                }
                
            </div>
            {/* Read more cases link */}
            <div className='hidden lg:block absolute top-[100px] right-[-100px] rotate-90'>
                <div className='flex hover:text-[--primaryColor]'>
                    <p className='text-[16px] font-bold leading-[18px] cursor-pointer'>Read More Case Studies</p>
                    <FaArrowRight className='ml-[10px]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CaseStudies