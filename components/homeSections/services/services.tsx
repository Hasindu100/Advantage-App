'use client';

import ServicesGallery from "./servicesGallery";
import TitleIcon from "../../homeUiElements/titleIcon";

import { motion } from "framer-motion";

// Enable logging in development environment
const DEBUG = process.env.NODE_ENV === 'development';

// Log component render cycles
const logRender = (componentName: string) => {
    if (DEBUG) {
        console.log(`[${componentName}] Component rendered at:`, new Date().toISOString());
    }
};

// Log animation states
const logAnimation = (state: string) => {
    if (DEBUG) {
        console.log(`[Services] Animation state changed to: ${state}`);
    }
};

/**
 * Services Component
 * Main component for displaying company services section
 * Includes animated content and services gallery
 */
export default function Services() {
    // Log component render
    logRender('Services');

    // Animation configuration for content sliding in from left
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

    if (DEBUG) {
        console.log('[Services] Content variants initialized:', contentVariants);
    }

    return (
        // Main container with full width
        <div className="w-full">
            {/* Overflow container for animation boundaries */}
            <div className="relative w-full overflow-hidden">
                {/* Content wrapper with responsive padding */}
                <div className="flex justify-center items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Animated content block */}
                    <motion.div
                        className="w-full py-12 sm:py-12 md:py-1"
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                        onAnimationStart={() => logAnimation('starting')}
                        onAnimationComplete={() => logAnimation('completed')}
                    >
                        {/* Content container with centered layout */}
                        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-3xl mx-auto md:mt-20">
                            {/* Services title badge */}
                            <div className="bg-custom-red py-1 px-4 md:px-6 rounded-md flex gap-3 w-fit">
                                <div className="flex items-center">
                                    <TitleIcon />
                                </div>
                                <p className="font-semibold tracking-custom text-white text-sm md:text-custom">
                                    SERVICES
                                </p>
                            </div>

                            {/* Main heading section */}
                            <div className="w-full text-center">
                                <h1 className="text-custom-4 md:text-custom-2 tracking-custom-2 font-extrabold ">
                                    End-to-End <br />
                                    Technology and <br />
                                    Innovations
                                </h1>
                            </div>

                            {/* Description text */}
                            <div className="max-w-2xl w-full tracking-normal text-custom-3 text-gray-500 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed text-center">
                                <p>
                                    Offering a broad set of capabilities under one roof makes <br /> us a versatile partner to meet all your digital ambitions.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Services gallery section */}
            <div>
                <ServicesGallery />
            </div>
        </div>
    );
}