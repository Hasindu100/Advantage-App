'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

import { products } from './data/productsData';
import { Product } from './types';

const ProductCard: React.FC<Product> = ({ title, src, alt, description, imageConfig }) => {
    return (
        <div className="flex flex-col h-[560px] w-full bg-white rounded-[4px] border-[1px] border-gray-200 hover:border-custom-red transition duration-700 ease-in-out">
            {/* Title section with fixed height */}
            <div className="h-24 px-6 pt-6">
                <h2 className="text-2xl font-semibold text-gray-900 leading-tight line-clamp-2">
                    {title}
                </h2>
            </div>

            {/* Image section with fixed height */}
            <div className="h-64 w-full relative">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Description section with fixed top padding */}
            <div className="px-6 pt-6 flex-grow overflow-hidden">
                <p className="text-gray-600 text-base leading-relaxed line-clamp-6">
                    {description}
                </p>
            </div>
        </div>
    );
};

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
        <div className="w-full max-w-7xl mx-auto">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={32}
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
                        spaceBetween: 32,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                }}
                className="py-8"
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