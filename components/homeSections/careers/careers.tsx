// File: app/components/Careers/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Define types
type ContentVariants = {
    hidden: {
        x: number;
        opacity: number;
    };
    visible: {
        x: number;
        opacity: number;
        transition: {
            duration: number;
            ease: string;
        };
    };
};

// Use dynamic imports for better error handling
const TitleIcon = dynamic(() => import('../../homeUiElements/titleIcon'), {
    loading: () => <div>Loading...</div>,
    ssr: true
});

const Vacancies = dynamic(() => import('../careers/vacancies'), {
    loading: () => <div>Loading vacancies...</div>,
    ssr: true
});

const Careers: React.FC = () => {
    const contentVariants: ContentVariants = {
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

    return (
        <div className="w-full">
            <div className="relative w-full overflow-hidden">
                <div className="flex justify-center items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <motion.div
                        className="w-full py-12 sm:py-12 md:py-1"
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        <div className="flex flex-col items-center gap-6 md:gap-6 max-w-3xl mx-auto md:mt-20">
                            <div className="bg-custom-red py-1 px-4 md:px-6 rounded-md flex gap-3 w-fit">
                                <p className="uppercase font-semibold tracking-custom text-white text-sm md:text-custom">
                                    careers
                                </p>
                                <div className="flex items-center">
                                    <TitleIcon />
                                </div>
                            </div>

                            <div className="w-full text-center">
                                <h1 className="capitalize text-custom-4 md:text-custom-2 tracking-custom-2 font-extrabold">
                                    work with us
                                </h1>
                            </div>

                            <div className="max-w-2xl w-full tracking-wide text-[16px] text-gray-500 xs:text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed text-center sm:text-md">
                                <p>
                                    NuGenesis offers its associates with ample opportunities for <br />
                                    intellectually demanding and emotionally rewarding work.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Vacancies />
        </div>
    );
};

export default Careers;