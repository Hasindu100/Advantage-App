'use client';

import { useMemo } from 'react';

import Image from 'next/image';
import jobListingsData from './data/jobListings.json';

import { motion } from 'framer-motion';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faBriefcase,
    faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons';

// Prevent Font Awesome from auto-injecting its CSS
config.autoAddCss = false;

// Constants
const INTERNSHIP_COUNT = 1;
const ANIMATION_DELAY = 0.2;
const HOVER_SCALE = 1.02;

// Define types for job listing data structure
interface JobListing {
    code: string;
    title: string;
    type: string;
    location: string;
}

interface JobListingsData {
    jobListings: JobListing[];
}

// Extracted components for better reusability and performance
const JobCard: React.FC<{ job: JobListing; index: number }> = ({ job, index }) => {
    const cardVariants = useMemo(() => ({
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: index * ANIMATION_DELAY,
                type: "spring",
                stiffness: 100,
                damping: 8
            }
        }
    }), [index]);

    return (
        <motion.div
            key={`job-${job.code}-${index}`}
            className="group w-full"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: HOVER_SCALE }}
        >
            <div className="bg-white border border-gray-200 rounded-[5px] transition-all duration-500 group-hover:shadow-lg cursor-pointer h-full">
                <div className="p-4 sm:p-6">
                    <div className="text-[11px] sm:text-[12px] font-bold text-white py-1 px-2 sm:px-3 rounded-sm inline-block mb-3 sm:mb-4 transition-colors duration-200 bg-gray-800 group-hover:bg-red-500">
                        {job.code}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                        {job.title}
                    </h2>
                    <div className="text-custom-gray-2 text-xs sm:text-sm">
                        <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                            width="12"
                            height="12"
                        />
                        {job.type}
                    </div>
                </div>
                <div className="border-t border-gray-200 px-4 sm:px-6 py-2 flex justify-between items-center tracking-custom-2">
                    <div className="text-[11px] sm:text-[12px] font-medium text-gray-500">
                        {job.location}
                    </div>
                    <div className="text-gray-400 group-hover:text-custom-yellow transition-colors duration-200 font-bold">
                        <FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            width="12"
                            height="12"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Header component
const Header: React.FC<{ jobCount: number }> = ({ jobCount }) => (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 border-b pb-4 border-gray-200 gap-4">
        <div className="flex items-center">
            <Image
                src="/images/logo/logo.png"
                height={36}
                width={128}
                alt="ZONE24x7"
                className="w-24 sm:w-32 h-auto"
                priority
            />
        </div>
        <div className="flex items-center">
            <span className="bg-custom-yellow text-black rounded-full px-3 sm:px-4 py-1 mr-3 sm:mr-5 text-xs sm:text-sm font-semibold">
                {jobCount}
            </span>
            <a
                href="#"
                className="text-sm sm:text-md flex items-center group font-medium text-gray-600 tracking-custom-2"
                aria-label="View more open vacancies"
            >
                More open vacancies
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-black group-hover:text-custom-yellow transition-colors duration-500"
                    width="14"
                    height="14"
                />
            </a>
        </div>
    </header>
);

/**
 * Main Vacancies Component
 * Displays job listings and internship opportunities in a responsive grid layout
 */
const Vacancies: React.FC = () => {
    const { jobListings } = jobListingsData as JobListingsData;

    // Memoize job listings to prevent unnecessary re-renders
    const jobListingsElements = useMemo(() => (
        jobListings.map((job, index) => (
            <JobCard key={`${job.code}-${index}`} job={job} index={index} />
        ))
    ), [jobListings]);

    return (
        <div className="w-full max-w-8xl mx-auto px-2 sm:px-6 lg:px-0 py-4 sm:py-8">
            <Header jobCount={jobListings.length} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 mt-6 sm:mt-10">
                {jobListingsElements}
            </div>

            <section className="bg-[#f6f6f695] border border-gray-200 px-4 sm:px-8 lg:px-14 py-6 sm:py-8 lg:py-10 rounded-[4px] mt-6 sm:mt-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
                    <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                            Internship Opportunities
                        </h2>
                        <p className="text-gray-400 text-xs sm:text-sm lg:text-[14px] tracking-wide font-normal">
                            Discover opportunities to pursue internship roles.
                            <span className="hidden sm:inline"><br /></span>
                            Find out how you can apply your skills and knowledge as a part of the next generation of our Engineering Talent.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            className="uppercase text-sm sm:text-base lg:text-lg tracking-custom-3 bg-custom-red text-white px-8 sm:px-10 lg:px-14 py-3 sm:py-4 rounded-md font-black transition-colors duration-200 whitespace-nowrap"
                            aria-label={`View ${INTERNSHIP_COUNT} internship opportunity`}
                        >
                            {INTERNSHIP_COUNT} INTERNSHIP
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vacancies;