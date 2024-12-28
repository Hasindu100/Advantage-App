import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu } from 'lucide-react';

const TechnologySection: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-lg" // Adjusted padding
                    whileHover={{ scale: 1.01 }}
                >
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Technology</h2> {/* Responsive text size */}
                            <div className="space-y-3 sm:space-y-4 text-gray-600"> {/* Responsive spacing */}
                                <p>
                                    NuGenesis is a fully completed native blockchain originally built for Government and transnational corporate applications.
                                </p>
                                <p>
                                    Our system integrates blockchain load balancers and system validators for infinite parallel processing. The more users, the faster the speed!
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:gap-6"> {/* Responsive grid gap */}
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl">
                                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mb-2" /> {/* Responsive icon size */}
                                <h4 className="font-semibold">Smart Contracts</h4>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                                <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mb-2" /> {/* Responsive icon size */}
                                <h4 className="font-semibold">AI Integration</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default TechnologySection;