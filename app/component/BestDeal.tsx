"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// NOTE: Removed `motion` and `AnimatePresence` as there are no tabs/transitions

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    originalPrice: number;
    salePrice: number;
    rating: number;
    isNew: boolean;
}

// Data is now local to the component logic, or you can import a specific one
const productData: Product[] = [
    // Taking the first 4 bestseller items for the 4-card grid
    {
        id: 5,
        name: "Oud Nadir",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/o/u/oud_nadir_4.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 577.5,
        salePrice: 401.63,
        rating: 5,
        isNew: false,
    },
    {
        id: 6,
        name: "Dakhoon Al Hind",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/d/a/dakhoon_al_hind_3.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 157.5,
        salePrice: 401.63,
        rating: 4.4,
        isNew: false,
    },
    {
        id: 7,
        name: "Dakhoon Azraq",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/d/a/dakhoon_azraq-1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 367.5,
        salePrice: 401.63,
        rating: 4.9,
        isNew: false,
    },
    {
        id: 8,
        name: "Ramadan Online Exclusive Raw",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/r/a/ramadan_exclusive_raw_-_flakes_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 189,
        salePrice: 160.65,
        rating: 4.8,
        isNew: true,
    },
];

// New component name reflecting static grid purpose
const BestDeal: React.FC = () => {
    // Helper function to render product card
    const renderProductCard = (product: Product) => (
        // Key is important for list items
        <div key={product.id} className="text-center group">
            <div className="relative bg-gray-100/70">
                {product.isNew && (
                    <span className="absolute top-4 left-4 z-10 bg-[#a98f63] text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                        New
                    </span>
                )}
                {/* Image Component */}
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain bg-[#2c1b12] object-center"
                />
            </div>
            {/* Product Info */}
            <div className="bg-[#ede3d2] py-2">
                <h5 className="text-lg text-gray-800">{product.name}</h5>
            </div>
        </div>
    );

    // Render the static grid
    return (
        <div className="primaryBg">
            <div className="templateContainer px-4 py-12">
                <div className="text-center mb-5 ">
                    {/* <p className="text-gray-500 mb-2">(Why clients love Agero)</p> */}
                    <h2 className="text-3xl loraParagraph text-white font-bold">
                        Deal of the day
                    </h2>
                </div>
                {/* Static Grid Container: Ensures 4 columns on medium screens and up */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Render each product using the helper function */}
                    {productData.map(renderProductCard)}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">

                    <Link
                        href="/collection"
                        className="inline-block cursor-pointer px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none-opacity-50"
                    >
                        VIEW ALL COLLECTION
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default BestDeal;