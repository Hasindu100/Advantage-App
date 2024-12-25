// page.tsx
'use client';

import React, { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import ProductsCarousel from "./productsCarousel";
import Image from "next/image";
import TitleIcon from "@/components/uiElements/titleIcon";
import { motion } from "framer-motion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Premium Product Collection | Zone24x7 Solutions',
    description: 'Explore Zone24x7\'s innovative technology solutions including Warehouse Management, AI Chatbot, CVAP Analytics, and Planogram.',
    keywords: 'Warehouse Management, AI Chatbot, CVAP Analytics, Planogram, Zone24x7 products, technology solutions',
    openGraph: {
        title: 'Premium Product Collection | Zone24x7',
        description: 'Discover our range of innovative technology solutions designed to transform your business operations and drive growth.',
        url: 'https://zone24x7.com/products',
        images: [
            {
                url: '/images/products/product-collection.jpg',
                width: 1200,
                height: 630,
                alt: 'Zone24x7 Product Collection',
            }
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Premium Product Collection | Zone24x7',
        description: 'Transform your business with our innovative technology solutions.',
        images: ['/images/products/product-collection.jpg'],
    },
    alternates: {
        canonical: 'https://zone24x7.com/products',
    }
};

const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Zone24x7 Product Collection',
    description: 'Explore our premium collection of innovative technology solutions designed to transform your business.',
    mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
            {
                '@type': 'Product',
                name: 'Warehouse Management System',
                description: 'Comprehensive warehouse management solution for digital transformation.',
                image: '/images/products/acetrac.png'
            },
            {
                '@type': 'Product',
                name: 'AI Chatbot',
                description: 'Intelligent chatbot solution for enhanced customer engagement.',
                image: '/images/products/sam.png'
            },
            {
                '@type': 'Product',
                name: 'CVAP Analytics',
                description: 'Advanced cognitive vision analytics for real-time insights.',
                image: '/images/products/cvap.png'
            },
            {
                '@type': 'Product',
                name: 'Planogram Solution',
                description: 'Retail optimization through intelligent planogram management.',
                image: '/images/products/shelf.png'
            }
        ]
    }
};

export function generateMetadata(): Metadata {
    return {
        ...metadata,
        other: {
            'script': [
                {
                    type: 'application/ld+json',
                    text: JSON.stringify(pageSchema)
                }
            ]
        }
    };
}

export default function Products() {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const contentVariants = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveSlide(swiper.realIndex);
    };

    const handleNext = () => {
        const nextIndex = (activeSlide + 1) % 4;
        setActiveSlide(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (activeSlide - 1 + 4) % 4;
        setActiveSlide(prevIndex);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex relative">
                <div className="hidden md:block absolute right-0 top-0">
                    <div className="relative">
                        <Image
                            src="/images/products/bgFrame.png"
                            width={500}
                            height={500}
                            alt="Products section decorative background"
                            className="object-contain"
                            priority
                        />
                        <div className="absolute -bottom-12 right-0 z-10 flex items-center gap-3 px-4 py-2">
                            <button
                                onClick={handlePrev}
                                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110
            ${activeSlide === 0 || activeSlide === 1
                                        ? 'bg-red-500 scale-110 shadow-lg'
                                        : 'bg-gray-300 hover:bg-red-500 border border-gray-500'
                                    }`}
                                aria-label="Previous slide"
                            />
                            <button
                                onClick={handleNext}
                                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110
            ${activeSlide === 2 || activeSlide === 3
                                        ? 'bg-red-500 scale-110 shadow-lg'
                                        : 'bg-gray-300 hover:bg-red-500 border border-gray-500'
                                    }`}
                                aria-label="Next slide"
                            />
                        </div>
                    </div>
                </div>

                <motion.div
                    className="flex-1 py-6 sm:py-8 md:py-20 px-4 md:px-0"
                    initial="hidden"
                    animate="visible"
                    variants={contentVariants}
                >
                    <div className="flex flex-col gap-4 md:gap-7 max-w-3xl">
                        <div className="bg-custom-red py-1 px-4 md:px-6 rounded-md flex gap-3 w-fit">
                            <p className="font-semibold tracking-custom text-white text-sm md:text-custom">
                                PRODUCTS
                            </p>
                            <div className="flex items-center">
                                <TitleIcon />
                            </div>
                        </div>

                        <div className="w-full sm:w-fit">
                            <h1 className="text-custom-4 md:text-custom-2 tracking-custom-2 font-extrabold">
                                Explore Our Premium{" "}
                                <br className="hidden md:block" /> Product Collection
                            </h1>
                        </div>

                        <div className="max-w-2xl tracking-normal text-custom-3 text-gray-500 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed">
                            <p>
                                Discover a range of top-quality products designed to meet your needs
                                and exceed your expectations. Whether you're looking for innovation,
                                durability, or style, our carefully curated selection offers something
                                for everyone.Shop now and experience the best in craftsmanship and value.
                            </p>
                        </div>

                        <div className="w-fit">
                            <button
                                className="bg-custom-red text-white px-4 md:px-5 py-2 md:py-3 rounded-sm text-sm font-normal tracking-wide cursor-pointer"
                                aria-label="Request a quote for our products"
                            >
                                GET A QUOTE
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="relative">
                <ProductsCarousel
                    onSlideChange={handleSlideChange}
                    activeIndex={activeSlide}
                />
            </div>

            <hr className="mt-6 sm:mt-8 md:mt-12" />
        </div>
    );
}