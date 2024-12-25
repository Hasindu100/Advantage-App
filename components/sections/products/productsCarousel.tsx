'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductCard = ({ title, logo, description, isSelected }) => (
    <div className="space-y-2 sm:space-y-4">
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
        <div
            className={`bg-white p-3 sm:p-6 rounded-sm w-full cursor-pointer border 
                transition-colors duration-500 ease-in-out
                ${isSelected ? 'border-red-500' : 'border-gray-200 hover:border-red-500'}`}
            style={{ aspectRatio: '16/9' }}
        >
            <div className="mb-2 sm:mb-4 relative">
                <div className="transform scale-75 sm:scale-100 origin-left">
                    {logo}
                </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">{description}</p>
        </div>
    </div>
);

const ProductsCarousel = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const products = [
        {
            title: "Warehouse Management",
            logo: (
                <div className="w-24 sm:w-32">
                    <Image
                        src="/images/products/acetrac.png"
                        alt="AceTrak Logo"
                        width={128}
                        height={128}
                        className="w-full"
                    />
                </div>
            ),
            description: "Offering a broad set of capabilities under one roof makes us a versatile partner to meet all your digital ambitions."
        },
        {
            title: "Chatbot",
            logo: (
                <div className="w-8 sm:w-12">
                    <Image
                        src="/images/products/sam.png"
                        alt="Chatbot Icon"
                        width={78}
                        height={78}
                        className="w-full rounded-full"
                    />
                </div>
            ),
            description: "Our chatbot solution is designed to enhance customer engagement and support. This intelligent chatbot utilizes natural language processing and providing real-time assistance and information."
        },
        {
            title: "CVAP (Cognitive Vision Analytics)",
            logo: (
                <div className="w-28 sm:w-36">
                    <Image
                        src="/images/products/cvap.png"
                        alt="CVAP Logo"
                        width={128}
                        height={128}
                        className="w-full"
                    />
                </div>
            ),
            description: "CVAP uses AI to analyze visual data, enabling real-time object detection, activity recognition, and insights to improve efficiency, safety, and customer experiences across industries."
        },
        {
            title: "Planogram",
            logo: (
                <div className="w-24 sm:w-32">
                    <Image
                        src="/images/products/shelf.png"
                        alt="Analytics Logo"
                        width={128}
                        height={128}
                        className="w-full"
                    />
                </div>
            ),
            description: "Planograms empower retailers to create a cohesive and inviting shopping experience while maximizing sales potential and improving inventory management."
        }
    ];

    return (
        <div className="w-full">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ clickable: true }}
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
                        <ProductCard
                            title={product.title}
                            logo={product.logo}
                            description={product.description}
                            isSelected={selectedCard === index}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductsCarousel;