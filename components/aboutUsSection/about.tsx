'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from './heroSection';
import MainFeaturesSection from './mainFeaturesSection';
import TechnologySection from './technologySection';
import RoadmapSection from './roadmapSection';

export default function About() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);


    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-100 pb-10">
            <motion.div style={{ opacity }}>
                <HeroSection scale={scale} />
                <MainFeaturesSection />
                <TechnologySection />
                <RoadmapSection />
            </motion.div>
        </main>
    );
}