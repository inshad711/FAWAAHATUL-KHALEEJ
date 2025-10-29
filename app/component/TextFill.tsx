

"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const CraftingSection: React.FC = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Split the heading into characters
        const splitHeading = new SplitType("#animated-heading", {
            types: ["words", "chars"],
        });

        splitHeading.words?.forEach((word) => {
            word.style.display = "inline-block";
            word.style.whiteSpace = "nowrap";
        });

        // Apply animation timeline
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#animation-bottom",
                start: "top 40%",
                end: "top 12%",
                scrub: 1.2,
                pin: false,
                markers: false,
            },
        });

        // Animate each character's color based on its parent
        splitHeading.chars?.forEach((char) => {
            const isYellow = char.closest(".text-yellow");

            timeline.to(
                char,
                {
                    color: isYellow ? "#d6c3a4" : "#ffffff",
                    filter: "blur(0px)",
                    duration: 0.3,
                    ease: "power3.out",
                },
                "<+=0.03" // slight stagger between characters
            );
        });


    }, []);

    return (
        <div
            className="lg:pt-10 lg:px-20 flex flex-col justify-center items-center"
            id="animation-bottom"
        >
            <div className="flex templateContainer lg:flex-row flex-col max-sm:items-center justify-between mt-7 md:mt-0">
                <div className="w-full">
                    <section id="heading-section">
                        <div className="h-[1px] w-full"></div>
                        <h2
                            id="animated-heading"
                            className="lg:text-xl montserratCTA text-lg max-sm:text-center  mx-auto text-center text-gray-400"
                        >
                            In a world where true luxury has become rare,
                            {" "}
                            <span className="text-yellow loraParagraph">Fawaahatul Khaleej </span>{" "}
                            stands as a guardian of tradition, preserving the noble legacy of pure Oudh and authentic Dahn Al Oudh in its most royal and untouched form. Born from a passion that spans generations, our journey began with a single belief: Oudh is not merely a fragrance it is a heritage, a memory, a silent poetry carried in the air. From the mystical forests of Southeast Asia to the refined hands of our master distillers, every drop of our Dahn Al Oudh is patiently extracted, naturally aged, and carefully sealed, just as it was done in the courts of kings and scholars. Unlike commercial blends and synthetic imitations, our Oudh is 100% pure and undiluted rich, deep, and evolving with grace upon every skin it touches; it opens with the intensity of ancient wood, settles with the warmth of ambered smoke, and lingers like a whispered prayer at dawn.
                        </h2>
                        <div className="h-[1px] w-full"></div>
                    </section>
                    {/* <p
                        id="animated-subtitle"
                        className="text-[14px] opacity-0 font-light tracking-wide text-white text-center mt-10"
                    >
                        Crafting Excellence for India’s Jewelers Since 1995.
                    </p> */}
                </div>
            </div>
            {/* <p
                id="animated-paragraph"
                className="text-[14px] font-light tracking-wide text-white opacity-0 text-center translate-y-6 my-10"
            >
                Founded in 1995 in the heart of Mumbai’s iconic Zaveri Bazaar, Padmavati Chains & Jewels began as a modest gold chain trading business with a simple vision - to bring trust, design, and excellence to every gram of gold we deliver. Over the years, what started as a small operation has evolved into one of India’s most respected jewellery manufacturing houses, known for its quality, innovation, and relationship-first approach.
                From our roots in traditional trading, we have built a vertically integrated manufacturing ecosystem that caters to thousands of B2B clients across India and export markets. Our journey has been shaped by our ability to adapt - from embracing technology and expanding production capacity, to introducing design-forward collections that meet the evolving preferences of modern consumers.
                With decades of industry experience, a future-facing mindset, and an unwavering focus on quality and integrity, PC&J continues to be the trusted partner for leading jewellery retailers, wholesalers, and instit.
            </p> */}
        </div>
    );
};

export default CraftingSection;

