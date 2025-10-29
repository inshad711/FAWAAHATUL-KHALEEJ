

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definition Moved Inline to Solve the Module Error ---
export interface SlideData {
    id: number;
    imageSrc: string;
    mobileImageSrc: string;
    tag: string;
    headline: string;
    subHeadline: string;
    buttonText: string;
    buttonLink: string;
    alignment: 'start' | 'center' | 'end';
}

// --- Data for the Slideshow (Using URLs from the provided HTML) ---
const SLIDE_DATA: SlideData[] = [
    {
        id: 1,


        // Original: //dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268
        imageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
        // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000
        mobileImageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
        tag: 'New Oud Elixir Has Arrived.',
        headline: 'The Soul of the East Captured in Every Drop',
        subHeadline: 'Pure. Royal. Eternal',
        buttonText: 'EXPLORE OUR COLLECTION',
        buttonLink: '/collection',
        alignment: 'end', // Content aligned bottom-left
    },
    {
        id: 2,
        // Original: //dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624
        imageSrc: '/imageTemp2/WhatsAddsd.jpg',
        // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000
        mobileImageSrc: '/imageTemp2/WhatsAddsd.jpg',
        tag: 'New Release',
        // headline: 'Feel the Tropics.',
        // subHeadline: 'Anywhere. Anytime.',
        // buttonText: 'Discover Now',
        headline: 'The Soul of the East Captured in Every Drop',
        subHeadline: 'Pure. Royal. Eternal',
        buttonText: 'EXPLORE OUR COLLECTION',
        buttonLink: '/collection',
        alignment: 'center', // Content aligned center-left
    },
];

type SlideshowCarouselProps = {
    slides?: SlideData[];
    autoplayInterval?: number; // Time in milliseconds for auto-advance
};

const Hero: React.FC<SlideshowCarouselProps> = ({
    slides = SLIDE_DATA,
    autoplayInterval = 5000,
}) => {


    const [currentIndex, setCurrentIndex] = useState(1);

    // --- Functions to change slides ---

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // --- Autoplay Effect ---
    useEffect(() => {
        if (autoplayInterval > 0) {
            const timer = setInterval(goToNext, autoplayInterval);
            return () => clearInterval(timer);
        }
    }, [autoplayInterval, goToNext]);


    const getContentAlignmentClasses = (alignment: SlideData['alignment']) => {

        switch (alignment) {
            case 'start':
            case 'center':
            case 'end':

                return 'sm:flex sm:items-center sm:justify-start sm:text-left';
            default:
                // Fallback to center/center
                return 'sm:flex sm:items-center sm:justify-center sm:text-center';
        }
    };

    const currentSlide = slides[currentIndex];

    return (
        <div className="relative w-full overflow-hidden primaryBg  md:h-screen h-[550px]">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Background Image (Mobile vs Desktop) */}
                    <div className="relative w-full h-full">
                        {/* Desktop Image */}
                        <Image
                            src={currentSlide.imageSrc}
                            alt={`${currentSlide.headline} desktop image`}
                            fill
                            priority={currentIndex === 0} // Prioritize first image load
                            sizes="100vw"
                            // Use Tailwind's 'hidden md:block' to select the large image for desktop
                            className="hidden object-cover md:block"
                        />
                        {/* Mobile Image */}
                        <Image
                            src={currentSlide.mobileImageSrc}
                            alt={`${currentSlide.headline} mobile image`}
                            fill
                            sizes="100vw"
                            // Use Tailwind's 'md:hidden' to select the smaller image for mobile
                            className="object-cover md:hidden"
                        />
                        {/* Overlay for readability */}
                        <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
                    </div>


                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div
                            className={`w-full templateContainer
        ${getContentAlignmentClasses(currentSlide.alignment)}`}
                        >
                            {/* Animation for Tagline */}


                            <div className='block max-w-xl'>
                                {/* Animation for Headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-3xl playfairDisplayHeading beigeText sm:text-5xl font-extrabold leading-tight"
                                >
                                    {currentSlide.headline}
                                    <br />
                                    <span className="text-xl loraParagraph beigeText sm:text-2xl font-semibold">
                                        {currentSlide.subHeadline}
                                    </span>
                                </motion.h1>


                                {/* Animation for Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="mt-8"
                                >
                                    <a
                                        href={currentSlide.buttonLink}
                                        // Styling matches the image: white outline, white text, black text on hover
                                        className="inline-block px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300"
                                    >
                                        {currentSlide.buttonText}
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            {/* Navigation Arrows */}
            <div className="absolute bottom-6 right-6 z-10 flex space-x-3">
                {/* Previous Button */}
                <button
                    onClick={() =>
                        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
                    }
                    aria-label="Previous Slide"
                    className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#8b5e3c]/50 hover:bg-black/70 text-white rounded-full shadow-lg transition-colors duration-300"
                >
                    &#10094; {/* Left arrow */}
                </button>

                {/* Next Button */}
                <button
                    onClick={() => goToNext()}
                    aria-label="Next Slide"
                    className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#8b5e3c]/50 hover:bg-black/70 text-white rounded-full shadow-lg transition-colors duration-300"
                >
                    &#10095; {/* Right arrow */}
                </button>
            </div>



        </div>
    );
};

export default Hero;