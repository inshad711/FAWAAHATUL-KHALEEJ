
///////////////////

"use client";
import React from 'react';

interface StatCardProps {
    value: string;
    label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
    <div className="flex flex-col cormorantGaramondSubheading items-center justify-center p-4 md:px-12 flex-1 min-w-[150px]">
        <div
            className="text-6xl md:text-7xl mb-2 text-white"
            style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
        >
            {value}
        </div>
        <div className="text-base md:text-lg font-medium tracking-wider uppercase beigeText text-center">
            {label}
        </div>
    </div>
);

const ParallaxHeroSection: React.FC = () => {
    const imageUrl = "/imageTemp/a-perfume-bottle-sits-on-a-tray-with-stacked-dark-towels-and-a-dried-red-rose-illuminated-by-a-flickering-candle-photo.jpg";

    return (
        <section
            className={`relative max-h-screen flex items-center justify-center py-20 overflow-hidden
                  bg-center bg-cover
                  md:bg-fixed`}
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-label="Perfume Statistics and Promise"
        >
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
                <h2 className="text-xl max-w-2xl cormorantGaramondSubheading mx-auto sm:text-2xl md:text-3xl text-white text-center mb-6 md:mb-8 tracking-tight leading-tight">
                    What makes Fawaahatul Khaleej truly distinguished is our unwavering commitment to excellence
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-stretch md:divide-x-2 md:divide-teal-500/30 divide-opacity-50 space-y-8 md:space-y-0">
                    <StatCard value="A+" label="Standards" />
                    <StatCard value="2000+" label="Successful Operations" />
                    <StatCard value="12+" label="Years of Experience" />
                </div>
            </div>
        </section>
    );
};

export default ParallaxHeroSection;
