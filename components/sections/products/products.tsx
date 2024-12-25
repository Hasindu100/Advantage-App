"use client";

import ProductsCarousel from "./productsCarousel";
import Image from "next/image";
import TitleIcon from "../../uiElements/titleIcon";
import { motion } from "framer-motion";

export default function Products() {
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
        <div className="relative w-full overflow-hidden">
            <div className="flex relative">
                <div className="hidden md:block absolute right-0 top-0">
                    <Image
                        src="/images/products/bgFrame.png"
                        width={500}
                        height={500}
                        alt="products"
                        className="object-contain"
                    />
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
                            <p className="text-custom-2 tracking-custom-2 font-bold text-2xl sm:text-3xl md:text-5xl">
                                Explore Our Premium{" "}
                                <br className="hidden md:block" /> Product Collection
                            </p>
                        </div>

                        <div className="max-w-2xl tracking-normal text-custom-3 text-gray-500 text-sm sm:text-base md:text-xl">
                            Discover a range of top-quality products designed to meet your needs
                            and exceed your expectations. Whether you're looking for innovation,
                            durability, or style, our carefully curated selection offers something
                            for everyone.
                        </div>

                        <div className="w-fit">
                            <button className="bg-custom-red text-white px-4 md:px-5 py-2 md:py-3 rounded-sm text-sm font-normal tracking-wide cursor-pointer">
                                GET A QUOTE
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div>
                <ProductsCarousel />
            </div>

            <hr className="mt-6 sm:mt-8 md:mt-12" />
        </div>
    );
}