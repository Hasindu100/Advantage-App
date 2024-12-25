'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { products } from './data/productsData';
import { Product } from './types';
import 'swiper/css';

const ProductCard: React.FC<Product> = ({ title, src, alt, description, imageConfig }) => (
    <div className="h-64 space-y-2">
        <h2 className="text-lg font-custom-2 tracking-widest truncate">{title}</h2>
        <div className="bg-white p-4 rounded-sm w-full h-52 cursor-pointer border border-gray-200 hover:border-red-500 transition-colors duration-500 ease-in-out flex flex-col">
            <div className="h-12 flex items-center mb-3">
                <div className="transform scale-100 origin-left">
                    <Image
                        src={src}
                        alt={alt}
                        {...imageConfig}
                    />
                </div>
            </div>
            <p className="text-gray-600 text-md leading-relaxed line-clamp-3">
                {description}
            </p>
        </div>
    </div>
);

interface CarouselProps {
    onSlideChange: (swiper: SwiperType) => void;
    activeIndex: number;
}

const ProductsCarousel: React.FC<CarouselProps> = ({ onSlideChange, activeIndex }) => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    useEffect(() => {
        if (swiper && swiper.realIndex !== activeIndex) {
            swiper.slideToLoop(activeIndex);
        }
    }, [activeIndex, swiper]);

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                onSwiper={setSwiper}
                onSlideChange={onSlideChange}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                className="w-full py-4 px-4 sm:px-0"
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard {...product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductsCarousel;