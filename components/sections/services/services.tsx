'use client';

import ServicesGallery from "./servicesGallery";
import { motion } from "framer-motion";
import TitleIcon from "../../uiElements/titleIcon";

export default function Services() {
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

    return (
        <div className="w-full">
            <div className="relative w-full overflow-hidden">
                <div className="flex justify-center items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="w-full py-12 sm:py-12 md:py-1"
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-3xl mx-auto md:mt-20">
                            <div className="bg-custom-red py-1 px-4 md:px-6 rounded-md flex gap-3 w-fit">
                                <div className="flex items-center">
                                    <TitleIcon />
                                </div>
                                <p className="font-semibold tracking-custom text-white text-sm md:text-custom">
                                    SERVICES
                                </p>
                            </div>

                            <div className="w-full text-center">
                                <h1 className="text-custom-4 md:text-custom-2 tracking-custom-2 font-extrabold ">
                                    End-to-End <br />
                                    Technology and <br />
                                    Innovations
                                </h1>
                            </div>

                            <div className="max-w-2xl w-full tracking-normal text-custom-3 text-gray-500 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed text-center">
                                <p>
                                    Offering a broad set of capabilities under one roof makes <br /> us a versatile partner to meet all your digital ambitions.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div>
                <ServicesGallery />
            </div>
        </div>
    );
}