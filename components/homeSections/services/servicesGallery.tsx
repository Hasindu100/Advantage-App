"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import servicesData from './data/services.json';
import { serviceStyles } from './services-config';

// Define the structure for a service card
interface ServiceCard {
    id: string;
    title: string;
    image?: string;
    video?: string;
    description?: string;
}

// ServiceCard Component: Displays individual service with image/video and hover effects
const ServiceCard = ({ id, title, image, video, description }: ServiceCard) => {
    // Track video loading and hover states
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);

    // Get styles specific to this service type
    const styles = serviceStyles[id as keyof typeof serviceStyles];

    // Load video when video element is ready
    useEffect(() => {
        if (videoElement) {
            videoElement.load();
        }
    }, [videoElement]);

    // Handle mouse enter - start video playback
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

    // Handle mouse leave - reset hover state
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative overflow-hidden rounded-lg group h-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Overlay effect for hover state */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 z-10" />

            {/* Conditional rendering for video or image */}
            {video ? (
                // Video background with autoplay on hover
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
                // Image background with zoom effect on hover
                    <div
                        className="absolute inset-0 transition-transform ease-in-out"
                        style={{
                            transform: isHovered ? 'scale(1.5) rotate(10deg)' : 'scale(1) rotate(0deg)',
                            transitionDuration: '5000ms',
                        }}
                    >
                    <Image
                        src={image || ''}
                        alt={title}
                        fill
                        sizes="100%"
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Content overlay with title and description */}
            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white z-20">
                {description && (
                    <p className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-90">
                        {description}
                    </p>
                )}
                <h3 className={`whitespace-pre-line ${'titleClassName' in styles ? styles.titleClassName : ''} ${styles.titleSize || 'text-xl sm:text-2xl'} ${styles.letterSpacing || ''} ${styles.lineHeight || 'leading-normal'} ${styles.fontWeight || 'font-bold'}`}>
                    {title}
                </h3>
            </div>
        </div>
    );
};

// ServicesGallery Component: Main gallery layout with responsive grid
export default function ServicesGallery() {
    const services = servicesData.services;

    return (
        <div className="container mx-auto p-2 sm:p-4">
            {/* Desktop Layout: Complex grid with different sized cards */}
            <div className="hidden md:block relative w-full pb-[100%]">
                <div className="absolute inset-0 flex gap-5">
                    {/* Left column: 2 equal cards */}
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="flex-1">
                            <ServiceCard {...services[0]} />
                        </div>
                        <div className="flex-1">
                            <ServiceCard {...services[1]} />
                        </div>
                    </div>

                    {/* Right section: Complex layout with varying card sizes */}
                    <div className="flex-[3.2] flex flex-col gap-5">
                        <div className="flex-[2.2] flex gap-5">
                            <div className="flex-[2.2] flex flex-col gap-5">
                                <div className="flex-[1.2]">
                                    <ServiceCard {...services[2]} />
                                </div>
                                <div className="flex-[2.5]">
                                    <ServiceCard {...services[3]} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <ServiceCard {...services[4]} />
                            </div>
                        </div>
                        <div className="flex-[0.7]">
                            <ServiceCard {...services[5]} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout: Simple vertical stack of cards */}
            <div className="md:hidden grid grid-cols-1 gap-5">
                {services.map((service) => (
                    <div key={service.id} className="relative pb-[100%]">
                        <div className="absolute inset-0">
                            <ServiceCard {...service} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}