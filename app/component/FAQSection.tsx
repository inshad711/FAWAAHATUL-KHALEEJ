
"use client";
import React, { useState } from 'react';

// --- Data Structure ---
interface FAQItem {
    q: string;
    a: string;
}



const faqs: FAQItem[] = [
    {
        q: "What makes your perfumes unique?",
        a: "Our perfumes are crafted using high-quality, ethically sourced ingredients and blended by expert perfumers to create long-lasting, signature scents that stand out."
    },
    {
        q: "How long does the fragrance last?",
        a: "Our perfumes are designed to last between 6–10 hours, depending on your skin type, environment, and the concentration of the fragrance."
    },
    {
        q: "Do you ship internationally?",
        a: "Yes! We offer worldwide shipping. Delivery times vary by region, and we ensure that all perfumes are carefully packaged for safe transport."
    },
    {
        q: "Are your perfumes cruelty-free?",
        a: "Absolutely. All our products are cruelty-free and never tested on animals. We also prioritize sustainable and eco-friendly sourcing."
    },
    {
        q: "How should I store my perfume?",
        a: "To preserve the scent, store your perfume in a cool, dry place away from direct sunlight and heat. Avoid keeping it in the bathroom where humidity can affect it."
    },
    {
        q: "Can I get a sample before buying a full bottle?",
        a: "Yes! We offer discovery sets and sample sizes so you can experience different scents before choosing your favorite full-size bottle."
    },
];

// Custom color definition matching the provided Framer snippet's accent color (rgb(249, 69, 45))
const ACCENT_COLOR = '#8b5e3c';
const DIVIDER_COLOR = 'rgba(255, 255, 255, 0.08)';

// --- Individual FAQ Item Component ---
const FAQItemComponent: React.FC<{
    item: FAQItem;
    index: number;
    isOpen: boolean;
    setOpenIndex: (index: number) => void;
    highlighted: boolean;
}> = ({ item, index, isOpen, setOpenIndex, highlighted }) => {
    const number = (index + 1).toString().padStart(3, '0');

    const toggleOpen = () => {
        setOpenIndex(isOpen ? -1 : index);
    };

    return (
        <div
            className={`w-full cursor-pointer transition-all duration-300 ${highlighted ? 'border-t border-white' : 'border-t'} border-[${DIVIDER_COLOR}]`}
            onClick={toggleOpen}
        >
            <div className="flex p-6 md:p-8 space-x-6 items-start">
                {/* Left Number Block */}
                <div className="flex-shrink-0 flex space-x-1 items-start font-medium text-sm md:text-base pt-0.5">
                    <span className="text-white">{number}</span>
                    <span style={{ color: ACCENT_COLOR }}>/</span>
                </div>

                {/* Question & Icon Block */}
                <div className="flex-grow flex justify-between items-start">
                    <p className="text-white montserratCTA text-base md:text-lg font-medium pr-4">{item.q}</p>

                    {/* Custom Plus/Minus Icon */}
                    <div className="flex-shrink-0 relative w-6 h-6 pt-0.5">
                        <div
                            className={`absolute top-1/2 left-1/2 w-4 h-[2px] bg-white transition-transform duration-300`}
                            style={{
                                transform: `translate(-50%, -50%) rotate(${isOpen ? 90 : 0}deg)`,
                                backgroundColor: isOpen ? ACCENT_COLOR : 'white'
                            }}
                        ></div>
                        <div
                            className={`absolute top-1/2 left-1/2 w-4 h-[2px] bg-white transition-transform duration-300`}
                            style={{
                                transform: `translate(-50%, -50%) rotate(0deg)`,
                                opacity: isOpen ? 0 : 1
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Answer Block */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4 md:pb-8' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="ml-16 md:ml-20 pr-6 md:pr-8 text-gray-400 text-base leading-relaxed">
                    {item.a}
                </div>
            </div>
        </div>
    );
};

// --- Main FAQ Section Component ---
const FAQSection: React.FC = () => {
    // -1 means no FAQ is open
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section
            id="faq"
            className="py-16 md:py-18 primaryBg text-white"

        >
            <div className="templateContainer px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16">

                    {/* Left Column (FAQ Header and Button) */}
                    <div className="lg:col-span-4 mb-12 lg:mb-0 lg:sticky lg:top-24 h-min">
                        {/* <h2 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-tighter">
                            FAQ.
                        </h2> */}
                        <h2 className="text-6xl md:text-9xl loraParagraph font-bold text-white/80  from-transparent">
                            FAQs
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-md">
                            Find answers to the most common questions about our perfumes, ingredients, and what makes our fragrances truly unique.
                        </p>


                        <a
                            href="#contact"
                            className="inline-flex px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300 transform hover:scale-[1.02]"

                        >
                            Ask a question
                            {/* Arrow Up Right Icon */}
                            <svg
                                className="ml-2 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </div>

                    {/* Right Column (Accordion List) */}
                    <div className="lg:col-span-8">
                        <div className="w-full">
                            {faqs.map((item, index) => (
                                <FAQItemComponent
                                    key={index}
                                    item={item}
                                    index={index}
                                    isOpen={index === openIndex}
                                    setOpenIndex={setOpenIndex}
                                    // Highlight the divider line for the currently open or hovered item
                                    highlighted={index === openIndex}
                                />
                            ))}
                            {/* Last Divider, matching the first item's top border logic for the bottom of the list */}
                            <div
                                className={`border-t border-[${DIVIDER_COLOR}]`}
                                style={{ borderColor: faqs.length - 1 === openIndex ? 'white' : DIVIDER_COLOR }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
