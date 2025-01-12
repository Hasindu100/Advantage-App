import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { categoryList } from './data';

const categorySlider = ({ onData }: any) => {

    const onClickCategory = (catId: number) => {
        const data = catId;
        onData(data);
    };
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        640: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
      }}
    >
        {
            categoryList.map((data: any) => {
                return (
                    <SwiperSlide key={data.id}>

                        <div className='categoryBtn relative mx-[10px] mb-[10px] mt-2 w-[130px] lg:w-[200px] cursor-pointer'>
                            <div className='rounded flex justify-center items-center h-[50px]  px-1 md:px-2 py-1.5 xl:py-3.5 group
                                bg-gradient-to-r from-lime-600 via-green-600 to-teal-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400
                                text-white transition-all
                                ease-out duration-300 text-center' onClick={ () => onClickCategory(data.id)}>
                                <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform
                                translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                                <span className='relative font-bold uppercase text-sm lg:text-base'>{data.title}</span>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                );
            })
        }
    </Swiper>
  )
}

export default categorySlider