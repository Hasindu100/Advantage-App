import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'

type Props = {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    url: string
}

const categoryItemCard = ({id, title, description, imageUrl, url}: Props) => {
  return (
    <div className='w-full relative group mb-[30px] cursor-pointer'> 
        <div className='px-[10px] py-[10px] border rounded-md hover:shadow-[0px_0px_33px_-10px_rgba(71,114,254,0.3)]'>
            <div className='px-[5px] py-[10px] flex gap-1 bg-[#FFC013] uppercase text-white text-[13px] lg:text-[14px] font-semibold absolute top-0 left-[30px] z-10'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
                <div className='relative overflow-hidden group-hover:scale-105 group-hover:rotate-10 transition-transform ease-in-out duration-500'>
                <div className='absolute w-full h-[100px] top-[250px] bg-gray-900 group-hover:bg-blue-950 opacity-80 transition duration-500'></div>
                    <Image 
                        src={imageUrl}  
                        alt="warehouse" 
                        width={600} 
                        height={600} 
                        className='h-[350px] object-cover inset-0' />
                        
                    <div className='absolute mr-[10px] top-[250px] py-5 h-[100px] w-full overflow-hidden'>
                        <h1 className='text-white text-[40px] text-center font-bold uppercase'>{title}</h1>
                    </div>
                </div>
                
                <p className='mt-[15px] text-sm text-gray-500 text-center font-semibold'>
                    {description}
                </p>
        </div>
        {/* Read more button */}
        <Link href={`/category/${id}`} className='scale-y-0 group-hover:scale-y-100 transition duration-500 origin-top absolute py-[15px] bg-[--primaryColor] w-full text-center text-white font-semibold text-[14px]'>
            Read More
        </Link>
    </div>
  )
}

export default categoryItemCard