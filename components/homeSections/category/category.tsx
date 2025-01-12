'use client'
import { Link } from 'lucide-react'
import React, { useState } from 'react'
import { CategoryItemList, categoryList } from './data'
import { Swiper, SwiperSlide } from 'swiper/react'
import CategorySlider from './categorySlider'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import CategoryItemCard from './categoryItemCard'
import TitleIcon from '@/components/homeUiElements/titleIcon'

const category = () => {
    const [categoryId, setCategoryId] = useState(1);

    const getCategoryId = (catId: number) => {
        setCategoryId(catId);
    }

  return (
    <div className="relative w-full  overflow-hidden mt-[30px]">
        <div className="w-full text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Play</span>
        </div>

        <div className='flex p-[5px] mb-[20px] bg-cyan-950 rounded cursor-grab'>
            <CategorySlider onData={getCategoryId} />
        </div>

        <div className="w-full relative text-3xl sm:text-3xl md:text-4xl font-bold tracking-[0.2rem] mb-4 sm:mb-6 pb-8">
            <span className="after:block after:content-[''] after:absolute after:h-[8px] after:bg-cyan-950 after:w-full w-fit">{ categoryList.find((x: any) => x.id == categoryId)?.title }</span>
        </div>

        <div className='mb-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full lg:w-[calc(100%_-_55px)]'>
            {
                CategoryItemList.filter((x: any) => x.categoryId == categoryId).map((data: any) => {
                    return (
                        <CategoryItemCard key={data.id} id={data.id} title={data.title} description={data.description} imageUrl={data.imageUrl} url={data.url} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default category