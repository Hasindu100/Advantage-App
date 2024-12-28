'use client'
import React from 'react'
import Image from "next/image";
import TitleIcon from "../homeUiElements/titleIcon";
import { motion } from 'framer-motion';


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

const About = () => {

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
        <div className="relative w-full overflow-hidden pt-[120px]">
            <motion.div
                className="w-full py-12 sm:py-12 md:py-1"
                initial="hidden"
                animate="visible"
                variants={contentVariants}
                >
                <div>
                    <div className="flex justify-center">
                        <div className="bg-custom-red py-1 px-4 md:px-6 rounded-md flex gap-3 w-fit">
                            <p className="uppercase font-semibold tracking-custom text-white text-sm md:text-custom text-md">
                                About us
                            </p>
                            <div className="flex items-center">
                                <TitleIcon />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 mt-[20px] text-[16px] text-gray-500 xs:text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed text-center sm:text-md">
                        <p>
                            NuGenesis is system of blockchain technologies to reap the potential in the mass 
                            adoption of the crypto market. It integrates blockchain load balancers and system 
                            validators to efficiently flow data into infinite parallel processing blockchains. 
                            The more users, the faster the transaction speed!
                        </p>
                        <p>
                            NuGenesis parallel processing blockchains are multilingual cross chains allowing 
                            dApps built on Eth, Substrate, Bitcoin and 29 other language systems to be 
                            seamlessly interoperable.
                        </p>
                        <p>
                            NuGenesis blockchain network configurations are complete and functional, and 
                            in-built in the code to constantly improve and innovate. It is entirely gasless. 
                            It is zero-carbon emission, and totally Green.
                        </p>
                    </div>
                </div>
            </motion.div>
            
            
            <div className="h-[65vh] md:h-[25vh] xl:h-[90vh] relative mt-12">
                <div className="absolute">
                    <Image 
                        src="/images/about/bg.png" 
                        alt="bg" 
                        width={1500} 
                        height={300}
                        className="hidden lg:block w-[100vw] h-full object-cover inset-0" />
                    <Image 
                        src="/images/about/bgMobile.png" 
                        alt="bg" 
                        width={1500} 
                        height={300}
                        className="lg:hidden w-[100vw] h-[400px] md:h-[200px] object-cover inset-0" />
                </div>
                <div className="absolute w-full lg:w-[60%] xl:w-[50%] right-0 lg:right-0 xl:right-10 top-6 lg:top-[100px] xl:top-[140px] px-[40px]">
                    <p className="text-white text-[16px] leading-[30x]">
                    NuGenesis is a fully completed native blockchain originally built for Government 
                    and transnational corporate applications. In the context of building a blockchain 
                    for Central Bank Digital Currencies (CBDCs), and an exchange clearing house for 
                    settlement, limitations to scaling and speed, latency and reliance on human miners 
                    and validators had to be eliminated. Security had to be enhanced, its integrity 
                    underscored by Artificial Intelligence (AI) and carbon neutral in its efficiency.
                    </p>
                </div>
            </div>

            {/* Roadmap 1 section*/}
            <div className="mt-8">
                <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                    {/* image */}
                    <div className='flex justify-start w-full order-1 md:order-2 pb-6 md:pb-0'>
                        <Image src="/images/about/roadmap2.png" alt="ourwork" width={500} height={300} className='h-auto' />
                    </div>
                    {/* details section */}
                    <div className='flex items-center justify-end mx-auto w-[80%] md:w-full order-2 md:order-1'>
                        <div className=''>
                            <div className='flex justify-center items-center px-6 py-1 bg-[--primaryColor] h-auto rounded-md w-fit md:w-fit md:float-none'>
                                <div className='lineWithDot mr-[30px] mt-0'></div>
                                <p className='font-base text-sm lg:text-base uppercase font-semibold text-white tracking-[0.5rem]'>Roadmap 1</p>
                            </div>
                            <div className='float-left text-start mt-[20px]'>
                                <div className='float-left mb-[16px] text-gray-500 space-y-5'>
                                    <p>
                                        Roadmap 1 is fully completed. NuGenesis is a fully operational blockchain 
                                        system, including a gasless interactive NFT platform, next gen smart 
                                        contract Digital Notarised Contract (DNC) platform, serialised digital 
                                        asset platform for next gen Decentralised Finance (DeFi), mutli-coin smart 
                                        chain and a complete ecosystem including a crypto-centric social media 
                                        platform (Just Social) and a fully-fledged Fiat-Crypto exchange, LedgerX.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Roadmap 2 section*/}
            <div className="mt-12">
                <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                    {/* image */}
                    <div className='flex justify-start w-full pb-6 md:pb-0'>
                        <Image src="/images/about/roadmap1.png" alt="ourwork" width={500} height={300} className='h-auto' />
                    </div>
                    {/* details section */}
                    <div className='flex items-center justify-end mx-auto w-[80%] md:w-full'>
                        <div className=''>
                            <div className='flex justify-center items-center px-6 py-1 bg-[--primaryColor] h-auto rounded-md w-fit md:w-fit md:float-none'>
                                <div className='lineWithDot mr-[30px] mt-0'></div>
                                <p className='font-base text-sm lg:text-base uppercase font-semibold text-white tracking-[0.5rem]'>Roadmap 2</p>
                            </div>
                            <div className='float-left text-start mt-[20px]'>
                                <div className='float-left mb-[16px] text-gray-500 space-y-5'>
                                    <p>
                                        Roadmap 2 is underway. The interactive NFTs are gamified, level-up and 
                                        transition into augmented and virtual reality in the meta-realm.
                                    </p>
                                    <p>
                                        The NuGenesis system has a constant rate of innovation built into the code. 
                                        The minting system provides for special purpose treasuries to fund the 
                                        continuous rate of upgrade and innovation.
                                    </p>
                                    <p>
                                        User governance is encouraged; supported by a number of programs for community 
                                        building and fostering those wishing to make crypto tech their career, 
                                        profession and business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default About