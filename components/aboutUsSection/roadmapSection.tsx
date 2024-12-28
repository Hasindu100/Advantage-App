import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Box } from 'lucide-react';
import TitleIcon from '../homeUiElements/titleIcon';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const RoadmapSection: React.FC = () => {
    return (
        <section className="p-4 sm:p-5 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                    initial={fadeIn.initial}
                    animate={fadeIn.animate}
                    transition={fadeIn.transition}
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
                    >
                        <div className="w-full">
                            <div className="relative w-full overflow-hidden">
                                <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-3xl mx-auto">
                                    <div className="bg-custom-red py-1 px-4 rounded-md flex gap-3 w-fit">
                                        <p className="uppercase font-semibold tracking-custom text-white text-sm md:text-custom">
                                            Road Map
                                        </p>
                                        <div className="flex items-center">
                                            <TitleIcon />
                                        </div>
                                    </div>
                                    <div className="w-full text-center">
                                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Road Map</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-3 sm:mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        A revolutionary system of blockchain technologies designed for mass adoption of the crypto market.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    {/* Roadmap 1 */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="aspect-video relative rounded-2xl overflow-hidden mb-4 sm:mb-6">
                                <Image
                                    src="/images/about/roadmap1.png"
                                    alt="Roadmap 1"
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-blue-200/20" />
                            </div>
                            <div className="bg-white/90 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg h-64">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <Box className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mr-2 sm:mr-3" />
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Roadmap 1</h3>
                                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">
                                        Completed
                                    </span>
                                </div>
                                <ul className="space-y-2 sm:space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-1 mt-1 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Gasless interactive NFT platform & serialized digital asset platform for next-gen DeFi</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-1 mt-1 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Next-gen smart contract Digital Notarised Contract (DNC) platform</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mr-1 mt-1 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Multi-coin smart chain with Just Social platform & LedgerX exchange</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Roadmap 2 */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="aspect-video relative rounded-2xl overflow-hidden mb-4 sm:mb-6">
                                <Image
                                    src="/images/about/roadmap2.png"
                                    alt="Roadmap 2"
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-blue-200/20" />
                            </div>
                            <div className="bg-white/90 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg">
                                <div className="flex items-center mb-3 sm:mb-6">
                                    <Box className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mr-2 sm:mr-3" />
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Roadmap 2</h3>
                                    <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs sm:text-sm font-medium">
                                        In Progress
                                    </span>
                                </div>
                                <ul className="space-y-2 sm:space-y-4 text-gray-600">
                                    <li className="flex items-start">
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-1 mt-1 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Gamified interactive NFTs with level-up system and AR/VR meta-realm integration</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-1 mt-1 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Innovation-driven minting system with special purpose treasuries for continuous upgrades</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-1 mt-1 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Community governance programs and career development initiatives</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default RoadmapSection;