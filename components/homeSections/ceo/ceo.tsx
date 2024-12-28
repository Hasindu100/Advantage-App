'use client';

import Image from "next/image";
import TitleIcon from "../../homeUiElements/titleIcon";
import { motion } from "framer-motion";
import { FC } from 'react';

const ANIMATION_VARIANTS = {
    content: {
        hidden: { x: 200, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    },
    image: {
        hidden: { x: -200, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    }
};

const ContentSection: FC = () => (
    <motion.div
        className="w-full lg:w-1/2 pl-8"
        initial="hidden"
        animate="visible"
        variants={ANIMATION_VARIANTS.content}
    >
        <div className="flex flex-col gap-6">
            <div className="uppercase bg-custom-red py-1 px-4 rounded-md flex gap-3 w-fit">
                <p className="font-semibold tracking-custom text-white text-sm">
                    CEO
                </p>
                <div className="flex items-center">
                    <TitleIcon />
                </div>
            </div>

            <div className="w-full">
                <h1 className="text-5xl font-extrabold tracking-tight">
                    Mrs.<br />
                    Jane Smith
                </h1>
            </div>

            <div className="w-full text-gray-600 text-lg leading-relaxed">
                <p>
                    Leading the charge in blockchain innovation, our vision at NuGenesis is to create a more accessible and efficient digital future. Our groundbreaking infrastructure solutions are designed to eliminate barriers and create new possibilities in the metaverse space, enabling seamless integration of digital assets into everyday life.
                </p>
            </div>
        </div>
    </motion.div>
);

const CEO: FC = () => {
    return (
        <div className="w-full py-10 px-4 mt-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATION_VARIANTS.image}
                    >
                        <div className="relative">
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                                <h2 className="text-gray-600 text-base bg-gray-50 px-8 py-2">
                                    Chief Executive Officer (CEO)
                                </h2>
                            </div>
                            <div className="border-2 border-blue-500 rounded-lg p-4">
                                <div className="relative w-full h-96">
                                    <Image
                                        src="/images/person/ceo.jpg"
                                        alt="Chief Executive Officer"
                                        fill
                                        className="object-contain"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <ContentSection />
                </div>
            </div>
        </div>
    );
};

export default CEO;