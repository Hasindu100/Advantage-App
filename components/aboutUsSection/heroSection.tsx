import React from 'react';
import { motion } from 'framer-motion';
import TitleIcon from '../homeUiElements/titleIcon';

interface HeroSectionProps {
    scale: any;
}
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const HeroSection: React.FC<HeroSectionProps> = ({ scale }) => {
    return (
        <motion.section
            className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8" // Adjusted padding
        >
            <motion.div
                className="max-w-7xl mx-auto text-center"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={fadeIn.transition}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6" // Responsive font size
                    style={{ scale }}
                >
                    <div className="w-full">
                        <div className="relative w-full overflow-hidden">
                            <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-3xl mx-auto">
                                <div className="bg-custom-red py-1 px-4 rounded-md flex gap-3 w-fit"> {/* Removed md:px-6 for more compact on mobile */}
                                    <p className="uppercase font-semibold tracking-custom text-white text-sm md:text-custom">
                                        About
                                    </p>
                                    <div className="flex items-center">
                                        <TitleIcon />
                                    </div>
                                </div>
                                <div className="w-full text-center">
                                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">NuGenesis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.h1>
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed" // Responsive text size
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    A revolutionary system of blockchain technologies designed for mass adoption of the crypto market.
                </motion.p>
            </motion.div>
        </motion.section>
    );
};

export default HeroSection;