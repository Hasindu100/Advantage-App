'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import podcastData from './data/podcastData.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { Podcast } from './types';
import VideoPopup from '@/app/helper/videoPopup';

const PodcastCard: React.FC<Podcast> = ({ imageUrl, link, title, onOpenVideoPopup }) => {

    // method to handle video popup open
    const handleClick = (link: string) => {
        onOpenVideoPopup(link);
    }

    return (
        <div
            className="block relative transform-gpu cursor-pointer"
            onClick={() => handleClick(link) }
        >
            <div className="w-full h-[32rem] relative mt-20 mb-20 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-gray-200 overflow-visible">
                <Image
                    src={imageUrl}
                    alt={title || "Podcast thumbnail"}
                    fill
                    className="object-contain rounded-lg"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                    <span className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                        {title}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default function PodCase() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    const { podcasts } = podcastData;

    const [videoUrl, setVideoUrl] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = (link: string) => { 
        setVideoUrl(link);
        setIsPopupOpen(true); 
    }
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center mt-12">
            <div className="w-full max-w-6xl px-4">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="py-8"
                >
                    {podcasts.map((podcast) => (
                        <SwiperSlide key={podcast.id} className="flex items-center justify-center cursor-grab">
                            <PodcastCard title={''} description={''} {...podcast} onOpenVideoPopup={openPopup} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <VideoPopup
                videoUrl={videoUrl}
                isOpen={isPopupOpen}
                onClose={closePopup}
            />
        </div>
    );
}