import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


const MainFeaturesSection: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"> {/* Adjusted padding */}
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> {/* Responsive gap */}
                    <motion.div
                        className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300" // Adjusted padding
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                    >
                        <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" /> {/* Responsive icon size and margin */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Parallel Processing</h3> {/* Responsive font size and margin */}
                        <p className="text-gray-600">
                            Integrates blockchain load balancers and system validators for infinite parallel processing. The more users, the faster the speed!
                        </p>
                    </motion.div>

                    <motion.div
                        className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                    >
                        <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Cross-Chain Compatible</h3>
                        <p className="text-gray-600">
                            Multilingual cross chains supporting dApps built on Eth, Substrate, Bitcoin and 29 other language systems.
                        </p>
                    </motion.div>

                    <motion.div
                        className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                    >
                        <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Zero Carbon</h3>
                        <p className="text-gray-600">
                            Completely gasless and zero-carbon emission blockchain technology. Environmentally conscious and totally green.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default MainFeaturesSection;