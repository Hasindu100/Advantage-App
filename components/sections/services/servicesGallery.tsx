"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ServiceCard {
    title: string;
    subtitle?: string;
    image: string;
    video?: string;
    description?: string;
    titleClassName?: string;
}

const services: ServiceCard[] = [
    // First Column
    {
        title: 'Software\nEngineering\nSolutions',
        image: '/images/services/tl.jpg',
        description: 'Delivering Enduring Growth With',
        titleClassName: 'text-cyan-300'
    },
    {
        title: 'Technology\nInnovation',
        image: '/images/services/lb.jpg',
        description: 'Productivity Improvements With'
    },
    // Middle Column
    {
        title: 'Artificial Intelligence & Data Science',
        image: '/images/services/tm.jpg',
        description: 'Omni-channel Personalized Product Recommendations With'
    },
    {
        title: 'Next Gen\nWarehousing &\nLogistics',
        image: '/images/services/m.jpg',
        description: 'PROFESSIONAL SERVICES',
        titleClassName: 'text-orange-400'
    },
    // Right Column
    {
        title: 'Embedded\nSystems\nSolutions',
        video: '/images/services/l.mp4',
        description: 'Streamline With',
        titleClassName: 'text-green-400',
        image: ''
    },
    // Bottom Merged
    {
        title: 'IoT & IoB',
        image: '/images/services/b.jpg',
        description: 'Remote Monitoring With'
    },
];

const ServiceCard = ({ title, image, video, description, titleClassName }: ServiceCard) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoElement) {
            videoElement.load();
        }
    }, [videoElement]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoElement) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.error('Video play error:', error);
                });
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative overflow-hidden rounded-lg group h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 z-10" />

            {/* Media Container */}
            {video ? (
                <video
                    ref={setVideoElement}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    onLoadedData={() => setVideoLoaded(true)}
                    style={{ opacity: videoLoaded ? 1 : 0 }}
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div
                    className="absolute inset-0 transition-transform duration-[7000ms] ease-in-out"
                    style={{
                        transform: isHovered ? 'scale(1.5) rotate(10deg)' : 'scale(1) rotate(0deg)'
                    }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="100%"
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Content Overlay */}
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white z-20">
                {description && (
                    <p className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-90">
                        {description}
                    </p>
                )}
                <h3 className={`text-xl sm:text-2xl font-bold whitespace-pre-line ${titleClassName || ''}`}>
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default function ServicesGallery() {
    return (
        <div className="container mx-auto p-2 sm:p-4">
            {/* Desktop Layout (md and up) */}
            <div className="hidden md:block relative w-full pb-[100%]">
                <div className="absolute inset-0 flex gap-5">
                    {/* First Column - flex-1 */}
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="flex-1">
                            <ServiceCard {...services[0]} />
                        </div>
                        <div className="flex-1">
                            <ServiceCard {...services[1]} />
                        </div>
                    </div>

                    {/* Middle and Right Columns Container - flex-2 */}
                    <div className="flex-[3.5] flex flex-col gap-5">
                        {/* Top Row */}
                        <div className="flex-[2.2] flex gap-5">
                            {/* Middle Column Top - flex-[1.3] */}
                            <div className="flex-[2.5] flex flex-col gap-5">
                                <div className="flex-[1.2]">
                                    <ServiceCard {...services[2]} />
                                </div>
                                <div className="flex-[2.5]">
                                    <ServiceCard {...services[3]} />
                                </div>
                            </div>
                            {/* Right Column - flex-1 */}
                            <div className="flex-1">
                                <ServiceCard {...services[4]} />
                            </div>
                        </div>

                        {/* Bottom Merged Row */}
                        <div className="flex-[0.7]">
                            <ServiceCard {...services[5]} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (sm and below) */}
            <div className="md:hidden grid grid-cols-1 gap-5">
                {services.map((service, index) => (
                    <div key={index} className="relative pb-[100%]">
                        <div className="absolute inset-0">
                            <ServiceCard {...service} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}