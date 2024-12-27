'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

import ProductsCarousel from "./productsCarousel";
import TitleIcon from "../../homeUiElements/titleIcon";

import { motion } from "framer-motion";
import type { Swiper as SwiperType } from 'swiper';

/**
 * @component Products
 * @description Main products showcase component featuring a carousel and animated content.
 * Implements a responsive design with mobile-first approach and custom navigation controls.
 * 
 * @features
 * - Animated content transitions using Framer Motion
 * - Responsive carousel navigation
 * - Custom slide indicators
 * - Mobile-friendly layout adaptations
 */
export default function Products() {
    // Initialize state for tracking active slide index (0-3)
    const [activeSlide, setActiveSlide] = useState<number>(0);

    // Log component initialization
    useEffect(() => {
        console.info('[Products] Component mounted with initial slide:', activeSlide);
        return () => {
            console.info('[Products] Component unmounting, cleaning up...');
        };
    }, []);

    /**
     * Animation variants for content section
     * Defines entry animation with slide and fade effects
     */
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

    /**
     * Handles Swiper slide change events
     * @param {SwiperType} swiper - Swiper instance containing slide information
     */
    const handleSlideChange = (swiper: SwiperType) => {
        console.info('[Products] Slide changed to index:', swiper.realIndex);
        setActiveSlide(swiper.realIndex);
    };

    /**
     * Navigates to the next slide in the carousel
     * Implements circular navigation (wraps around to first slide after last)
     */
    const handleNext = () => {
        const nextIndex = (activeSlide + 1) % 4;
        console.info('[Products] Moving to next slide. Current:', activeSlide, 'Next:', nextIndex);
        setActiveSlide(nextIndex);
    };

    /**
     * Navigates to the previous slide in the carousel
     * Implements circular navigation (wraps around to last slide from first)
     */
    const handlePrev = () => {
        const prevIndex = (activeSlide - 1 + 4) % 4;
        console.info('[Products] Moving to previous slide. Current:', activeSlide, 'Previous:', prevIndex);
        setActiveSlide(prevIndex);
    };

    // Log any changes to active slide state
    useEffect(() => {
        console.info('[Products] Active slide updated:', activeSlide);
    }, [activeSlide]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Background frame and navigation controls - Desktop only */}
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
                            onLoad={() => console.info('[Products] Background image loaded')}
                            onError={() => console.error('[Products] Failed to load background image')}
                        />
                        {/* Custom navigation controls */}
                        <div className="absolute -bottom-12 right-0 z-10 flex items-center gap-3 px-4 py-2">
                            <button
                                onClick={handlePrev}
                                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110
                                    ${activeSlide === 0 || activeSlide === 1
                                    ? 'bg-custom-red scale-110 shadow-lg'
                                    : 'bg-gray-300 hover:bg-custom-red border border-gray-500'
                                    }`}
                                aria-label="Previous slide"
                            />
                            <button
                                onClick={handleNext}
                                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-110
                                    ${activeSlide === 2 || activeSlide === 3
                                    ? 'bg-custom-red scale-110 shadow-lg'
                                    : 'bg-gray-300 hover:custom-red border border-gray-500'
                                    }`}
                                aria-label="Next slide"
                            />
                        </div>
                    </div>
                </div>

                {/* Main content section with animation */}
                <motion.div
                    className="flex-1 py-6 sm:py-8 md:py-20 px-4 md:px-0"
                    initial="hidden"
                    animate="visible"
                    variants={contentVariants}
                >
                    <div className="flex flex-col gap-4 md:gap-7 max-w-3xl">
                        {/* Section header with icon */}
                        <div className="bg-custom-red py-1 px-4 md:px-6 rounded-md flex gap-3 w-fit">
                            <p className="uppercase font-semibold tracking-custom text-white text-sm md:text-custom">
                                PRODUCTS
                            </p>
                            <div className="flex items-center">
                                <TitleIcon />
                            </div>
                        </div>

                        {/* Main heading */}
                        <div className="w-full sm:w-fit">
                            <h1 className="text-custom-4 md:text-custom-2 tracking-custom-2 font-extrabold">
                                Explore Our Premium{" "}
                                <br className="hidden md:block" /> Product Collection
                            </h1>
                        </div>

                        {/* Description text */}
                        <div className="max-w-2xl tracking-normal text-custom-3 text-gray-500 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed">
                            <p>
                                With unlimited scale and speed, the NuGenesis blockchain infrastructure is the substratum for gasless interactive NFTs, augmented, and virtual reality. The backbone of the metaverse and metarealm. Learn more about our Projects.
                            </p>
                        </div>

                        {/* Call-to-action button */}
                        {/* <div className="w-fit">
                            <button
                                className="uppercase bg-custom-red text-white px-4 md:px-5 py-2 md:py-3 rounded-sm text-sm font-normal tracking-wide cursor-pointer"
                                aria-label="Request a quote for our products"
                                onClick={() => console.info('[Products] Quote button clicked')}
                            >
                                GET A QUOTE
                            </button>
                        </div> */}
                    </div>
                </motion.div>
            </div>

            {/* Products carousel section */}
            <div className="relative">
                <ProductsCarousel
                    onSlideChange={handleSlideChange}
                    activeIndex={activeSlide}
                />
            </div>

            <hr className="mt-6 sm:mt-8 md:mt-20" />
        </div>
    );
}