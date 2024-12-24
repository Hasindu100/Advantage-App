"use client";

import ProductsCarausel from "./productsCarousel";
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
        <div className="relative">
            <div className="flex relative">
                <Image
                    src="/images/products/bgFrame.png"
                    width={500}
                    height={500}
                    alt="products"
                    className="object-contain absolute right-0 top-0"
                />
                <motion.div
                    className="flex-1 py-20"
                    initial="hidden"
                    animate="visible"
                    variants={contentVariants}
                >
                    <div className="flex flex-col gap-7 max-w-3xl">
                        <div className="bg-custom-red py-1 px-6 rounded-md flex gap-3 w-fit">
                            <p className="font-semibold tracking-custom text-white text-custom">
                                PRODUCTS
                            </p>
                            <div className="flex items-center">
                                <TitleIcon />
                            </div>
                        </div>
                        <div className="w-fit">
                            <p className="text-custom-2 tracking-custom-2 font-bold text-5xl">
                                Explore Our Premium <br /> Product Collection
                            </p>
                        </div>
                        <div className="max-w-2xl tracking-normal text-custom-3 text-gray-500 text-xl">
                            Discover a range of top-quality products designed to meet your needs
                            and exceed your expectations. Whether you're looking for innovation,
                            durability, or style, our carefully curated selection offers something
                            for everyone. Shop now and experience the best in craftsmanship and value.
                        </div>
                        <div className="w-fit">
                            <button className="bg-custom-red text-white px-5 py-3 rounded-sm text-sm font-normal tracking-wide cursor-pointer">
                                GET A QUOTE
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div>
                <ProductsCarausel />
            </div>
            <div className="absolute bottom-0 w-screen left-[50%] translate-x-[-50%] border-b-2" />
        </div>
    );
}