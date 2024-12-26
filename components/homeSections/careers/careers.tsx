'use client';

/**
 * @fileoverview Main careers page component that serves as the entry point for the careers section.
 * Features an animated hero section with company message and a vacancies listing component.
 */

import Vacancies from "./vecancies";
import TitleIcon from "../../homeUiElements/titleIcon";
import { motion } from "framer-motion";

/**
 * Careers component representing the main careers page
 * Features:
 * - Animated entry effects using Framer Motion
 * - Responsive design for various screen sizes
 * - Hero section with company message
 * - Integration with Vacancies component for job listings
 * 
 * @component
 */
export default function Careers() {
    // Animation configuration for the content section
    const contentVariants = {
        hidden: {
            x: -100,         // Start position off-screen to the left
            opacity: 0       // Start fully transparent
        },
        visible: {
            x: 0,           // Animate to natural position
            opacity: 1,     // Fade in to full opacity
            transition: {
                duration: 0.8,  // Animation duration in seconds
                ease: "easeOut" // Smooth easing function
            }
        }
    };

    return (
        <div className="w-full">
            {/* Main container with overflow control for animations */}
            <div className="relative w-full overflow-hidden">
                {/* Centered content wrapper with responsive padding */}
                <div className="flex justify-center items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    {/* Animated content block using Framer Motion */}
                    <motion.div
                        className="w-full py-12 sm:py-12 md:py-1"
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        {/* Hero content container with centered layout and spacing */}
                        <div className="flex flex-col items-center gap-6 md:gap-6 max-w-3xl mx-auto md:mt-20">
                            {/* Category badge with custom styling */}
                            <div className="bg-custom-red py-1 px-4 md:px-6 rounded-md flex gap-3 w-fit">
                                {/* Category text */}
                                <p className="uppercase font-semibold tracking-custom text-white text-sm md:text-custom">
                                    careers
                                </p>
                                {/* Custom icon component */}
                                <div className="flex items-center">
                                    <TitleIcon />
                                </div>
                            </div>

                            {/* Main heading container */}
                            <div className="w-full text-center">
                                <h1 className="capitalize text-custom-4 md:text-custom-2 tracking-custom-2 font-extrabold">
                                    work with us
                                </h1>
                            </div>

                            {/* Description section with responsive typography */}
                            <div className="max-w-2xl w-full tracking-wide text-[16px] text-gray-500 xs:text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed text-center sm:text-md">
                                <p>
                                    Zone24x7 offers its associates with ample opportunities for <br />
                                    intellectually demanding and emotionally rewarding work.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Job vacancies section */}
            <div>
                <Vacancies />
            </div>
        </div>
    );
}