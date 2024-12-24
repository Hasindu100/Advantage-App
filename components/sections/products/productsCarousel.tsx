'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const ProductCard = ({ title, logo, description, isSelected }) => (
    <div className="space-y-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div
            className={`bg-white p-6 rounded-sm w-full cursor-pointer border 
                transition-colors duration-300
                ${isSelected ? 'border-red-500' : 'border-gray-200 hover:border-red-500'}`}
            style={{ aspectRatio: '16/9' }}
        >
            <div className="mb-4 relative">
                {logo}
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
);

const ProductsCarousel = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const products = [
        {
            title: "Warehouse Management",
            logo: (
                <div className="w-24">
                    <Image
                        src="/api/placeholder/96/96"
                        alt="AceTrak Logo"
                        width={96}
                        height={96}
                        className="w-full"
                    />
                </div>
            ),
            description: "Offering a broad set of capabilities under one roof makes us a versatile partner to meet all your digital ambitions."
        },
        {
            title: "Chatbot",
            logo: (
                <div className="w-16">
                    <Image
                        src="/api/placeholder/64/64"
                        alt="Chatbot Icon"
                        width={64}
                        height={64}
                        className="w-full rounded-full"
                    />
                </div>
            ),
            description: "Our chatbot solution is designed to enhance customer engagement and support. This intelligent chatbot utilizes natural language processing and providing real-time assistance and information."
        },
        {
            title: "CVAP (Cognitive Vision Analytics)",
            logo: (
                <div className="w-32">
                    <Image
                        src="/api/placeholder/128/48"
                        alt="CVAP Logo"
                        width={128}
                        height={48}
                        className="w-full"
                    />
                </div>
            ),
            description: "CVAP uses AI to analyze visual data, enabling real-time object detection, activity recognition, and insights to improve efficiency, safety, and customer experiences across industries."
        },
        {
            title: "Advanced Analytics",
            logo: (
                <div className="w-24">
                    <Image
                        src="/api/placeholder/96/96"
                        alt="Analytics Logo"
                        width={96}
                        height={96}
                        className="w-full"
                    />
                </div>
            ),
            description: "Powerful analytics platform providing real-time insights and predictive modeling to drive data-informed decision making."
        }
    ];

    return (
        <div className="w-full">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 3,
                    },
                }}
                className="w-full py-4"
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