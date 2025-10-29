//////// all working ////////////



"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "./Aos"; // Import your custom Aos component

const allCollections = [
    {
        name: "Royal Cambodia",
        image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg",
    },
    {
        name: "Malaysian Heritage",
        image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg",
    },
    {
        name: "Private Blend",
        image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg",
    },
    {
        name: "Golden Sands",
        image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg",
    },
];

const CollectionsSection: React.FC = () => {
    return (
        <section className="primaryBg py-10 text-white">
            <div className="templateContainer px-4">
                {/* Heading with AOS animation */}
                {/* <Aos animation="fade-up" duration={1000}>
                    <h2 className="text-5xl text-[#E0C6A5] playfairDisplayHeading mb-12 text-center tracking-wider">
                        Our Collections
                    </h2>
                </Aos> */}

                <div className="text-center mb-5 ">
                    {/* <p className="text-gray-500 mb-2">(Why clients love Agero)</p> */}
                    <h2 className="text-4xl md:text-6xl  lg:text-9xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4]/80">
                        Our Collections
                    </h2>
                </div>

                {/* Collection Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-5  md:mb-12 justify-items-center">
                    {allCollections.map((collection, index) => (
                        <Aos
                            key={collection.name}
                            animation="fade-up"
                            delay={index * 100} // staggered animation
                            duration={800}
                        >
                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="relative mb-4 overflow-hidden rounded-sm shadow-2xl ">
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

                {/* CTA Button */}
                <div className="text-center">

                    <Link
                        href="/collection"
                        className="inline-block cursor-pointer px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none-opacity-50"
                    >
                        VIEW ALL COLLECTION
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default CollectionsSection;
