////////// all working //////////

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Aos from "./Aos"; // Adjust the path as needed

const allCollections = [
    { name: "Royal Cambodia", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
    { name: "Malaysian Heritage", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
    { name: "Private Blend", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
    { name: "Golden Sands", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
    { name: "Oud Majestic", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
    { name: "Amber Luxe", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
    { name: "Desert Mirage", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
    { name: "Royal Cambodia", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
    { name: "Malaysian Heritage", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
    { name: "Private Blend", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
    { name: "Golden Sands", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
];

const Collection: React.FC = () => {
    const [showAll, setShowAll] = useState(false); // toggle between 8 and all

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    const displayedCollections = showAll ? allCollections : allCollections.slice(0, 8);

    return (
        <section className="primaryBg pt-32 pb-16 text-white min-h-screen">
            <div className="templateContainer px-4">
                {/* Apply AOS to the heading */}

                {/* <h2 className="text-5xl text-[#E0C6A5] playfairDisplayHeading mb-12 text-center tracking-wider">
                    All Collections
                </h2> */}
                <div className="text-center">
                    {/* <p className="text-gray-500 mb-2">(Why clients love Agero)</p> */}
                    <h2 className="text-6xl md:text-9xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4]/80">
                        All Collections
                    </h2>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {displayedCollections.map((collection, index) => (
                        // Apply AOS to each collection item with staggered delay
                        <Aos
                            key={index}
                            animation="fade-up"
                            delay={index * 100} // Stagger the animation
                            duration={600}
                        >
                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="relative mb-4 overflow-hidden rounded-sm shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                                    <Image
                                        src={collection.image}
                                        alt={collection.name}
                                        width={400}
                                        height={400}
                                        className="rounded-sm object-cover transition-transform duration-300 hover:scale-[1.15]"
                                    />
                                </div>
                                <h3 className="text-xl tracking-wide text-[#E0C6A5] border-b border-transparent transition-colors duration-300">
                                    {collection.name}
                                </h3>
                            </div>
                        </Aos>
                    ))}
                </div>

                {/* Toggle Button */}
                <div className="mt-12 text-center">

                    <button
                        onClick={handleToggle}
                        className="inline-block px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA cursor-pointer hover:bg-[#c9a67f] transition-colors duration-300"
                    >
                        {showAll ? "View Less" : "View All Products"}
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Collection;