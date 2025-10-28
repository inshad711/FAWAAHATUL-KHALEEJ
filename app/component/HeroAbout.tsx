'use client';
import React from 'react';
import Image from 'next/image';

interface AboutSectionProps {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    imageAlt: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
    title,
    description,
    buttonText,
    imageUrl,
    imageAlt
}) => (
    <section className="py-16 md:py-24 font-inter text-gray-200 bg-[#1a1510]">
        <div className="templateContainer px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                <div className="md:w-1/2 order-2 md:order-1">
                    <h2 className="text-xl md:text-2xl tracking-widest uppercase mb-6 font-semibold text-[#C9A05C]">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl font-serif leading-relaxed mb-8 text-gray-300">
                        {description}
                    </p>
                    <button
                        className={`
              px-8 py-3 
              uppercase text-sm tracking-widest font-medium 
              border-2 border-[#C9A05C] 
              hover:bg-[#C9A05C] hover:text-[#1a1510] 
              transition-colors duration-300 rounded-lg
            `}
                        aria-label={buttonText}
                    >
                        {buttonText}
                    </button>
                </div>

                <div className="md:w-1/2 order-1 md:order-2">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl w-full h-full">
                        <Image
                            src={imageUrl}
                            alt={imageAlt}
                            width={600}
                            height={800}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const HeroAbout: React.FC = () => {
    const mockData: AboutSectionProps = {
        title: "ABOUT FAWAAHATUL KHALEEJ",
        description:
            "In a world where true luxury has become rare, Fawaahatul Khaleeji stands as a guardian of tradition – preserving the nable legacy of pure Oudh and authentic Dahn Al Oudh.",
        buttonText: "READ OUR STORY",
        imageUrl: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.23_8dcb39a5.jpg", // public folder
        imageAlt: "A wooden bowl filled with authentic Oudh wood chips on a dark background.",
    };

    return (
        <div className="bg-[#0d0a08] flex justify-center items-center">
            <AboutSection {...mockData} />
        </div>
    );
};

export default HeroAbout;
