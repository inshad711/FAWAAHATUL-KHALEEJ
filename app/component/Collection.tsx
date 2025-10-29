// ////////// all working //////////

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Aos from "./Aos"; // Adjust the path as needed

// const allCollections = [
//     { name: "Royal Cambodia", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
//     { name: "Malaysian Heritage", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
//     { name: "Private Blend", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
//     { name: "Golden Sands", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
//     { name: "Oud Majestic", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
//     { name: "Amber Luxe", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
//     { name: "Desert Mirage", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
//     { name: "Royal Cambodia", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
//     { name: "Malaysian Heritage", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
//     { name: "Private Blend", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
//     { name: "Golden Sands", image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg" },
// ];

// const Collection: React.FC = () => {
//     const [showAll, setShowAll] = useState(false); // toggle between 8 and all

//     const handleToggle = () => {
//         setShowAll(!showAll);
//     };

//     const displayedCollections = showAll ? allCollections : allCollections.slice(0, 8);

//     return (
//         <section className="primaryBg pt-32 pb-16 text-white min-h-screen">
//             <div className="templateContainer px-4">
//                 {/* Apply AOS to the heading */}

//                 {/* <h2 className="text-5xl text-[#E0C6A5] playfairDisplayHeading mb-12 text-center tracking-wider">
//                     All Collections
//                 </h2> */}
//                 <div className="text-center">
//                     {/* <p className="text-gray-500 mb-2">(Why clients love Agero)</p> */}
//                     <h2 className="text-6xl md:text-9xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4]/80">
//                         All Collections
//                     </h2>
//                 </div>


//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
//                     {displayedCollections.map((collection, index) => (
//                         // Apply AOS to each collection item with staggered delay
//                         <Aos
//                             key={index}
//                             animation="fade-up"
//                             delay={index * 100} // Stagger the animation
//                             duration={600}
//                         >
//                             <div className="flex flex-col items-center group cursor-pointer">
//                                 <div className="relative mb-4 overflow-hidden rounded-sm shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
//                                     <Image
//                                         src={collection.image}
//                                         alt={collection.name}
//                                         width={400}
//                                         height={400}
//                                         className="rounded-sm object-cover transition-transform duration-300 hover:scale-[1.15]"
//                                     />
//                                 </div>
//                                 <h3 className="text-xl tracking-wide text-[#E0C6A5] border-b border-transparent transition-colors duration-300">
//                                     {collection.name}
//                                 </h3>
//                             </div>
//                         </Aos>
//                     ))}
//                 </div>

//                 {/* Toggle Button */}
//                 <div className="mt-12 text-center">

//                     <button
//                         onClick={handleToggle}
//                         className="inline-block px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA cursor-pointer hover:bg-[#c9a67f] transition-colors duration-300"
//                     >
//                         {showAll ? "View Less" : "View All Products"}
//                     </button>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Collection;




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

// Data is now local to the component logic, updated to 12 products
const productData: Product[] = [
    // --- Products 1-4 (Original 4) ---
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
        salePrice: 125.63, // Adjusted salePrice for differentiation
        rating: 4.4,
        isNew: false,
    },
    {
        id: 7,
        name: "Dakhoon Azraq",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/d/a/dakhoon_azraq-1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 367.5,
        salePrice: 294.00, // Adjusted salePrice for differentiation
        rating: 4.9,
        isNew: false,
    },
    {
        id: 8,
        name: "Ramadan Exclusive Raw",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/r/a/ramadan_exclusive_raw_-_flakes_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 189,
        salePrice: 160.65,
        rating: 4.8,
        isNew: true,
    },
    // --- Products 5-8 (New) ---
    {
        id: 9,
        name: "Amber Santal",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/a/m/amber-santal_2_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 300,
        salePrice: 210.00,
        rating: 4.6,
        isNew: false,
    },
    {
        id: 10,
        name: "Haya",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/h/a/haya_2.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 150,
        salePrice: 105.00,
        rating: 4.2,
        isNew: true,
    },
    {
        id: 11,
        name: "Shadow II",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/s/h/shadow_ii_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 250,
        salePrice: 212.50,
        rating: 5.0,
        isNew: false,
    },
    {
        id: 12,
        name: "Wisal Dhahab",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/w/i/wisal_dhahab_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 120,
        salePrice: 96.00,
        rating: 4.7,
        isNew: false,
    },
    // --- Products 9-12 (New) ---
    {
        id: 13,
        name: "Raindrops",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/r/a/raindrops_2.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 130,
        salePrice: 110.50,
        rating: 4.5,
        isNew: true,
    },
    {
        id: 14,
        name: "Evoke Gold Edition",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/e/v/evoke_gold_edition_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 190,
        salePrice: 152.00,
        rating: 4.3,
        isNew: false,
    },
    {
        id: 15,
        name: "Aurum Summer",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/a/u/aurum_summer_2.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 115,
        salePrice: 80.50,
        rating: 4.9,
        isNew: false,
    },
    {
        id: 16,
        name: "Silver Shade",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/s/i/silver_shade_2.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 140,
        salePrice: 119.00,
        rating: 4.6,
        isNew: true,
    },
];

/**
 * BestDeal Component
 * Displays a static grid of 12 products, ideal for a "Deal of the Day" or "Featured Products" section.
 */
const Collection: React.FC = () => {
    // Helper function to render product card
    const renderProductCard = (product: Product) => (
        // Key is important for list items
        <div key={product.id} className="text-center group">
            <div className="relative bg-gray-100/70">
                {/* 'New' Badge */}
                {product.isNew && (
                    <span className="absolute top-4 left-4 z-10 bg-[#a98f63] text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                        New
                    </span>
                )}
                {/* Product Image */}
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                    // Adjusted Image class for better visibility on a dark background
                    className="w-full h-full object-contain bg-[#2c1b12] object-center transition-transform duration-500 group-hover:scale-[1.01]"
                // Add Link around image for clickability
                // as={Link}
                // href={`/product/${product.id}`}
                />
            </div>
            {/* Product Info - Price added for a more complete e-commerce card */}
            <div className="bg-[#ede3d2] py-3 px-2">
                {/* <Link href={`/product/${product.id}`}> */}
                <h5 className="text-lg text-gray-800 hover:text-[#a98f63] transition-colors duration-200">{product.name}</h5>
                {/* </Link> */}

            </div>
        </div>
    );

    // Render the static grid
    return (
        // Changed primaryBg to a more specific class for clarity
        <section className="bg-[#1a0f0a]">
            <div className="templateContainer px-4 py-28">

                {/* Static Grid Container: Grid now has 4 columns on large screens (lg:grid-cols-4) 
                    and 3 on medium screens (md:grid-cols-3) to fit 12 evenly. */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {/* Render each product using the helper function */}
                    {productData.map(renderProductCard)}
                </div>


            </div>
        </section>
    );
};

export default Collection;