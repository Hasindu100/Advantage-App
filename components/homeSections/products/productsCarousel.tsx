'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { products } from './data/productsData';
import { Product } from './types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

/**
 * @component ProductCard
 * @description Individual product card component displaying product information with hover effects
 * 
 * @param {string} title - Product title
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {string} description - Product description
 * @param {Object} imageConfig - Next.js Image component configuration
 */
const ProductCard: React.FC<Product> = ({ title, src, alt, description, imageConfig }) => {
    useEffect(() => {
        console.info('[ProductCard] Rendering product:', title);
    }, [title]);

    return (
        <div className="h-64 space-y-2">
            <h2 className="text-lg font-custom-2 tracking-widest truncate">{title}</h2>
            <div
                className="bg-white p-4 rounded-sm w-full h-52 cursor-pointer border border-gray-200 hover:border-red-500 transition-colors duration-500 ease-in-out flex flex-col"
                onMouseEnter={() => console.info('[ProductCard] User hovering over:', title)}
            >
                <div className="h-12 flex items-center mb-3">
                    <div className="transform scale-100 origin-left">
                        <Image
                            src={src}
                            alt={alt}
                            {...imageConfig}
                            onLoad={() => console.info('[ProductCard] Image loaded for:', title)}
                            onError={() => console.error('[ProductCard] Failed to load image for:', title)}
                        />
                    </div>
                </div>
                <p className="text-gray-600 text-md leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>
        </div>
    );
};

/**
 * @interface CarouselProps
 * @description Props interface for ProductsCarousel component
 * 
 * @property {function} onSlideChange - Callback function triggered on slide change
 * @property {number} activeIndex - Current active slide index
 */
interface CarouselProps {
    onSlideChange: (swiper: SwiperType) => void;
    activeIndex: number;
}

/**
 * @component ProductsCarousel
 * @description A responsive product carousel with autoplay and custom navigation
 * Features:
 * - Automatic slideshow with 3s delay
 * - Responsive breakpoints for different screen sizes
 * - External navigation control support
 * - Loop functionality
 */
const ProductsCarousel: React.FC<CarouselProps> = ({ onSlideChange, activeIndex }) => {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    // Log component initialization
    useEffect(() => {
        console.info('[ProductsCarousel] Component mounted with initial active index:', activeIndex);
        return () => {
            console.info('[ProductsCarousel] Component unmounting');
        };
    }, [activeIndex]);

    // Handle external navigation
    useEffect(() => {
        if (swiper && swiper.realIndex !== activeIndex) {
            console.info('[ProductsCarousel] External navigation triggered. Moving to index:', activeIndex);
            swiper.slideToLoop(activeIndex);
        }
    }, [activeIndex, swiper]);

    /**
     * Swiper initialization handler
     * @param {SwiperType} swiperInstance - The initialized Swiper instance
     */
    const handleSwiperInit = (swiperInstance: SwiperType) => {
        console.info('[ProductsCarousel] Swiper initialized');
        setSwiper(swiperInstance);
    };

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                onSwiper={handleSwiperInit}
                onSlideChange={(swiper) => {
                    console.info('[ProductsCarousel] Slide changed to index:', swiper.realIndex);
                    onSlideChange(swiper);
                }}
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
                {products.map((product, index) => {
                    console.info('[ProductsCarousel] Rendering product slide:', product.title);
                    return (
                        <SwiperSlide key={index}>
                            <ProductCard {...product} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ProductsCarousel;