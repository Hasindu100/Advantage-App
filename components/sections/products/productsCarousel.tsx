// ProductsCarousel.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import 'swiper/css';

type Product = {
    title: string;
    logo: React.ReactNode;
    description: string;
};

interface ProductCardProps extends Product { }

interface ProductsCarouselProps {
    onSlideChange: (swiper: SwiperType) => void;
    activeIndex: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, logo, description }) => (
    <div className="h-64 space-y-2">
        <h2 className="text-lg font-custom-2 tracking-widest truncate">{title}</h2>
        <div className="bg-white p-4 rounded-sm w-full h-52 cursor-pointer border border-gray-200 hover:border-red-500 transition-colors duration-500 ease-in-out flex flex-col">
            <div className="h-12 flex items-center mb-3">
                <div className="transform scale-100 origin-left">
                    {logo}
                </div>
            </div>
            <p className="text-gray-600 text-md leading-relaxed line-clamp-3">
                {description}
            </p>
        </div>
    </div>
);

const products: Product[] = [
    {
        title: "Warehouse Management",
        logo: (
            <div className="w-36">
                <Image
                    src="/images/products/acetrac.png"
                    alt="AceTrak Logo - Warehouse Management Solution"
                    width={160}
                    height={160}
                    className="w-full"
                    priority
                />
            </div>
        ),
        description: "Offering a broad set of capabilities under one roof makes us a versatile partner to meet all your digital ambitions."
    },
    {
        title: "Chatbot",
        logo: (
            <div className="w-12">
                <Image
                    src="/images/products/sam.png"
                    alt="AI Chatbot Solution for Customer Engagement"
                    width={96}
                    height={96}
                    className="w-full rounded-full"
                    priority
                />
            </div>
        ),
        description: "Our chatbot solution is designed to enhance customer engagement and support. This intelligent chatbot utilizes natural language processing and providing real-time assistance and information."
    },
    {
        title: "CVAP (Cognitive Vision Analytics)",
        logo: (
            <div className="w-36">
                <Image
                    src="/images/products/cvap.png"
                    alt="CVAP - Advanced Vision Analytics Platform"
                    width={160}
                    height={160}
                    className="w-full"
                    priority
                />
            </div>
        ),
        description: "CVAP uses AI to analyze visual data, enabling real-time object detection, activity recognition, and insights to improve efficiency, safety, and customer experiences across industries."
    },
    {
        title: "Planogram",
        logo: (
            <div className="w-32">
                <Image
                    src="/images/products/shelf.png"
                    alt="Planogram Solution for Retail Management"
                    width={160}
                    height={160}
                    className="w-full"
                    priority
                />
            </div>
        ),
        description: "Planograms empower retailers to create a cohesive and inviting shopping experience while maximizing sales potential and improving inventory management."
    }
];

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ onSlideChange, activeIndex }) => {
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