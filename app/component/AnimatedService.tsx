/////////// all working ///////

"use client";
import React from "react";

interface ServiceContent {
    title: string;
    description: string;
    image: string;
}

const brandDesignContent: ServiceContent = {
    title: "sottozero",
    description:
        "We build bold, cohesive brand identities that leave a lasting impression.",
    image:
        "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg",
};

// 🔥 Single-component animation that works even after refresh
const AnimatedService: React.FC = () => {
    const currentContent = brandDesignContent;
    const repeatedText = Array(10).fill("Brand Design").join(" \u2736 ");

    return (
        <section className="relative md:py-20 md:h-screen flex flex-col items-center justify-center primaryBg overflow-hidden">
            {/* ✅ Inline animation CSS once at the top level */}
            <style jsx global>{`
        @keyframes scrollText {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scrolling-text {
          animation: scrollText 60s linear infinite;
        }
      `}</style>

            {/* Background Scrolling Text */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 -translate-y-1/2 w-[200%] flex flex-row whitespace-nowrap opacity-20 text-8xl md:text-[10rem] lg:text-[12rem] font-extrabold text-white">
                    <div className="scrolling-text loraParagraph flex-shrink-0">{repeatedText}</div>
                    <div className="scrolling-text loraParagraph flex-shrink-0">{repeatedText}</div>
                </div>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-xl p-4 md:p-8 bg-black backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out">
                        <div className="rounded-2xl overflow-hidden aspect-[3/2] w-full">
                            <img
                                src={currentContent.image}
                                alt={currentContent.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default AnimatedService;
