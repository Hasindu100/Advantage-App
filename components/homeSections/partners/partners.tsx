'use client';

/**
 * Partners Component
 * 
 * This component creates a responsive partners/sponsors section with animated content and logo display.
 * It consists of two main sections:
 * 1. A content section with title, description, and CTA button
 * 2. A logo display section showing partner company logos in a grid
 */

import Image from "next/image";
import TitleIcon from "../../homeUiElements/titleIcon";
import { motion } from "framer-motion";
import partnerData from './data/PartnerData.json';

// Type definitions for partner data structure
interface Partner {
    id: string;         // Unique identifier for each partner
    name: string;       // Partner company name
    imagePath: string;  // Path to partner logo image
    priority: number;   // Display priority/order for the partner
}

interface PartnerData {
    partners: Partner[];  // Array of partner objects
}

/**
 * Animation configuration for content transitions
 * Defines entry animations for both text content and image sections
 */
const ANIMATION_VARIANTS = {
    content: {
        hidden: { x: -200, opacity: 0 },          // Initial state: shifted left and invisible
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    },
    image: {
        hidden: { x: 200, opacity: 0 },           // Initial state: shifted right and invisible
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    }
};

/**
 * Configuration for partner logo image dimensions
 * Provides two size presets: standard and small
 */
const IMAGE_DIMENSIONS = {
    standard: {
        width: 320,
        height: 320
    },
    small: {
        width: 120,
        height: 120
    }
};

/**
 * PartnerLogo Component
 * Renders individual partner logo with appropriate dimensions
 * 
 * @param partner - Partner object containing logo information
 */
const PartnerLogo = ({ partner }: { partner: Partner }) => {
    // Special handling for 'zebra' partner with smaller dimensions
    const dimensions = partner.id === 'zebra' ? IMAGE_DIMENSIONS.small : IMAGE_DIMENSIONS.standard;

    return (
        <div className="w-48 h-24 flex items-center justify-center">
            <Image
                src={partner.imagePath}
                alt={partner.name}
                className="max-w-full max-h-full p-4"
                {...dimensions}
                loading="lazy"
            />
        </div>
    );
};

/**
 * ContentSection Component
 * Renders the left side content section including title, description, and CTA button
 * Implements entry animation using framer-motion
 */
const ContentSection = () => (
    <motion.div
        className="w-full lg:w-2/5 flex-shrink-0"
        initial="hidden"
        animate="visible"
        variants={ANIMATION_VARIANTS.content}
    >
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-3xl">
            {/* Section label with icon */}
            <div className="uppercase bg-custom-red py-1 px-4 md:px-6 rounded-md flex gap-3 w-fit">
                <p className="font-semibold tracking-custom text-white text-xs sm:text-sm md:text-custom">
                    Media
                </p>
                <div className="flex items-left">
                    <TitleIcon />
                </div>
            </div>

            {/* Main heading */}
            <div className="w-full">
                <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl tracking-custom-2 font-extrabold">
                    NuGenesis Metaverse Backbone
                </h1>
            </div>

            {/* Description text */}
            <div className="max-w-2xl w-full tracking-normal text-gray-500 md:text-lg text-[18px] lg:text-xl leading-relaxed">
                <p>
                    With unlimited scale and speed, the NuGenesis blockchain infrastructure is the substratum for gasless interactive NFTs, augmented, and virtual reality. The backbone of the metaverse and metarealm.
                </p>
            </div>

            {/* Call-to-action button */}
            {/* <div className="w-fit">
                <button
                    className="bg-gray-800 text-white font-bold tracking-wide px-5 md:px-6 py-3 md:py-4 rounded-[3px] text-xs sm:text-sm cursor-pointer hover:bg-custom-red hover:text-white transition-colors duration-700 ease-in-out"
                    aria-label="Request a quote for our products"
                    onClick={() => console.info('[Products] Quote button clicked')}
                >
                    Join Us
                </button>
            </div> */}
        </div>
    </motion.div>
);

/**
 * Main Partners Component
 * Combines ContentSection with partner logos display
 * Implements responsive layout and animations
 */
export default function Partners() {
    // Sort partners by priority for consistent display order
    const typedPartnerData = partnerData as PartnerData;
    const sortedPartners = typedPartnerData.partners.sort((currentPartner, nextPartner) =>
        currentPartner.priority - nextPartner.priority
    );

    return (
        <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 p-2">
            <div className="relative">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-5 min-h-[300px]">
                    {/* Left side content section */}
                    <ContentSection />

                    {/* Right side partner logos section */}
                    <motion.div
                        className="w-full lg:w-3/5 flex-shrink-0 relative self-center"
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATION_VARIANTS.image}
                    >
                        <div className="relative pt-8">
                            {/* Floating title above video frame */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                <h2 className="text-gray-600 text-md md:text-base whitespace-nowrap text-center bg-gray-50 px-6 py-2 mt-5">
                                    NuGenesis - 2022 & Beyond!
                                </h2>
                            </div>
                            {/* YouTube video frame */}
                            <div className="border-[3px] border-custom-red rounded-[3px] p-4 md:p-8">
                                <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full border-0"
                                        src="https://www.youtube.com/embed/_K5JB5ZNoeA?si=8uEqoZZvVrSZ1J5c"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}