"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import servicesData from './data/services.json';
import { serviceStyles } from './services-config';

interface ServiceCard {
    id: string;
    title: string;
    image?: string;
    video?: string;
    description?: string;
}

const ServiceCard = ({ id, title, image, video, description }: ServiceCard) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);
    const styles = serviceStyles[id as keyof typeof serviceStyles];

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
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 z-10" />

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
                        src={image || ''}
                        alt={title}
                        fill
                        sizes="100%"
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white z-20">
                {description && (
                    <p className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-90">
                        {description}
                    </p>
                )}
                <h3 className={`whitespace-pre-line ${styles.titleClassName || ''} ${styles.titleSize || 'text-xl sm:text-2xl'} ${styles.letterSpacing || ''} ${styles.lineHeight || 'leading-normal'} ${styles.fontWeight || 'font-bold'}`}>
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default function ServicesGallery() {
    const services = servicesData.services;

    return (
        <div className="container mx-auto p-2 sm:p-4">
            <div className="hidden md:block relative w-full pb-[100%]">
                <div className="absolute inset-0 flex gap-5">
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="flex-1">
                            <ServiceCard {...services[0]} />
                        </div>
                        <div className="flex-1">
                            <ServiceCard {...services[1]} />
                        </div>
                    </div>

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