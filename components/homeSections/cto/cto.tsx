'use client';

import Image from "next/image";
import TitleIcon from "../../homeUiElements/titleIcon";
import { motion } from "framer-motion";
import { FC } from 'react';

/**
 * Animation configuration for content transitions
 * Defines entry animations for both text content and image sections
 */
const ANIMATION_VARIANTS = {
    content: {
        hidden: { x: -200, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    },
    image: {
        hidden: { x: 200, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    }
};

/**
 * ContentSection Component
 * Renders the left side content section including title, description
 */
const ContentSection: FC = () => (
    <motion.div
        className="w-full lg:w-2/5 flex-shrink-0 "
        initial="hidden"
        animate="visible"
        variants={ANIMATION_VARIANTS.content}
    >
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-3xl ">
            {/* Section label with icon */}
            <div className="uppercase bg-custom-red py-1 px-4 md:px-6 rounded-md flex gap-3 w-fit">
                <p className="font-semibold tracking-custom text-white text-xs sm:text-sm md:text-custom">
                    CTO
                </p>
                <div className="flex items-left">
                    <TitleIcon />
                </div>
            </div>

            {/* Main heading */}
            <div className="w-full">
                <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl tracking-custom-2 font-extrabold">
                    Tharindu Adhikari
                </h1>
            </div>

            {/* Description text */}
            <div className="max-w-2xl w-full tracking-normal text-gray-500 md:text-lg text-[18px] lg:text-xl leading-relaxed text-justify">
                <p>
                    Tharindu Adhikari is an accomplished technology leader with over 15 years of expertise in Artificial Intelligence, Machine Learning, Blockchain, Data Science, and Big Data. As the Chief Technology Officer (CTO) of NuGenesis, Tharindu is responsible for driving the company’s technological vision and innovation strategy. His extensive experience in developing cutting-edge enterprise solutions and high-performance systems ensures NuGenesis remains at the forefront of blockchain and cryptocurrency advancements. Passionate about creating scalable, secure, and intelligent ecosystems, Tharindu leads with a focus on transformative technologies that deliver unmatched value to users and stakeholders. His collaborative approach and deep technical acumen continue to propel NuGenesis toward global excellence. 
                </p>
            </div>
        </div>
    </motion.div>
);

/**
 * Main CTO Component
 * Combines ContentSection with CTO image display
 * Implements responsive layout and animations
 */
const CTO: FC = () => {
    return (
        <div className="w-full py-8 sm:py-12 md:py-8 lg:py-10 p-2">
            <div className="relative">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-5 min-h-[300px]">
                    {/* Left side content section */}
                    <ContentSection />

                    {/* Right side image section */}
                    <motion.div
                        className="w-full lg:w-3/5 flex-shrink-0 relative self-center"
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATION_VARIANTS.image}
                    >
                        <div className="relative pt-8">
                            {/* Floating title above image frame */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                <h2 className="text-gray-600 text-md md:text-base whitespace-nowrap text-center bg-gray-50 px-6 py-2 mt-5">
                                    Chief Technology Officer (CTO)
                                </h2>
                            </div>
                            {/* Image frame */}
                            <div className="border-[3px] border-custom-red rounded-[3px] p-4 md:p-8">
                                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                                    <Image
                                        src="/images/person/cto.png" 
                                        alt="Chief Technology Officer Mr.Tharindu Adhikari"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CTO;