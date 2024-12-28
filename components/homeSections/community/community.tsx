'use client'

import TitleIcon from "../../homeUiElements/titleIcon";
import { motion } from "framer-motion";

interface ContentVariants {
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
}

export default function Community() {

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
        <div className="w-full flex flex-col justify-center items-center">
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
                                    Community
                                </p>
                                <div className="flex items-center">
                                    <TitleIcon />
                                </div>
                            </div>

                            <div className="w-full text-center">
                                <h1 className="capitalize text-custom-4 md:text-custom-2 tracking-custom-2 font-extrabold">
                                    Community Participation
                                </h1>
                            </div>


                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="w-full sm:py-6 md:py-8 lg:py-0 p-2">
                <div className="relative max-w-4xl mx-auto">
                    <div className="flex flex-col items-center">
                        <motion.div
                            className="w-full max-w-3xl relative"
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                        >
                            <div className="relative pt-8">
                                {/* Floating title above video frame */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 pt-2">
                                    <h2 className="text-gray-600 text-md md:text-base whitespace-nowrap text-center bg-gray-50 px-6 py-2 mt-5">
                                        Adoption Participation Program
                                    </h2>
                                </div>
                                {/* YouTube video frame */}
                                <div className="border-[3px] border-custom-red rounded-[3px] p-4 md:p-8">
                                    <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                        <iframe
                                            className="absolute top-0 left-0 w-full h-full border-0"
                                            src="https://www.youtube.com/embed/xMcCqJl4QA8?si=cbicj3WqYupTvyC-"
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
            <div className="max-w-2xl w-full tracking-wide text-[16px] text-gray-500 xs:text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed text-center sm:text-md mt-12">
                <p>
                    Do you want to get involved and make your mark? <br />

                    Do you want to become a part of the NuGenesis community?<br />

                    Want to make a career, profession, or business in the new economy?<br />

                    Check out the opportunities in the NuGenesis ecosystem here:
                </p>
            </div>
        </div>
    );
}