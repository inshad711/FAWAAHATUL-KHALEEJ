/////////// all working ///////

"use client";

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const About2: React.FC = () => {
    // Framer Motion variants for the animation
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.2,
            },
        },
    };


    const coverVariants: Variants = {
        hidden: { x: '0%' },
        visible: {
            x: '100%',
            transition: {
                duration: 1.2,
                ease: [0.6, 0.01, -0.05, 0.9],
            },
        },
    };


    return (
        <section className='primaryBg'>
            {/* Layout container: centered, flexible, and responsive */}
            <div className="templateContainer text-white pt-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content Block */}
                <div className="md:w-1/2 playfairDisplayHeading text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl mb-4 text-[#E0C6A5]">
                        About Fawaahatul <br /> Khaleej
                    </h1>
                    <p className="text-lg playfairDisplayHeading md:text-xl font-sans mb-8 leading-relaxed max-w-lg md:max-w-full mx-auto md:mx-0 text-[#D4C3B2]">
                        In a world where true luxury has become rare, Fawaahatul Khaleej
                        stands as a guardian of tradition—preserving the noble legacy of
                        pure Oudh and authentic Dahn Al Oudh.
                    </p>

                    {/* Call-to-Action Button */}
                    <a
                        href="/about"
                        className="inline-block px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300"
                        aria-label="Read our story"
                    >
                        READ OUR STORY
                    </a>
                </div>

                {/* Image Reveal Animation Block */}
                <div className="md:w-1/2 flex justify-center md:justify-end w-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        className="relative overflow-hidden rounded-sm shadow-2xl w-full max-w-lg aspect-[4/3] md:h-96"
                    >
                        {/* Image */}
                        <div className="absolute inset-0">
                            <Image
                                src="/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.23_8dcb39a5.jpg"
                                alt="Authentic Oudh and Dahn Al Oudh products"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Cover Animation */}
                        <motion.div
                            variants={coverVariants}
                            className="absolute inset-0 primaryBg z-10"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About2;
