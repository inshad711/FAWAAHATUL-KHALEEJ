

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion"; // ✅ added for smooth transition

// interface Product {
//     id: number;
//     name: string;
//     imageUrl: string;
//     originalPrice: number;
//     salePrice: number;
//     rating: number;
//     isNew: boolean;
// }

// // Define the available tab IDs
// type Tab = "bestseller" | "new" | "top";


// const bestsellerData: Product[] = [
//     {
//         id: 1,
//         name: "Blanche Parfum",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-1.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 2,
//         name: "Tuscan Creations",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-2.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 3,
//         name: "Terra Rossa",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-3.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 4,
//         name: "Glorious Eau",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-4.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 5,
//         name: "The Alchemist",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-5.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 6,
//         name: "Garden A Winter",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-6.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 7,
//         name: "Melody Eau",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-7.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 8,
//         name: "Toilette",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-8.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
// ];

// // Full product data for New Arrivals tab (8 products from HTML)
// const newArrivalsData: Product[] = [
//     {
//         id: 9,
//         name: "Ambre Royal",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-9.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 10,
//         name: "Patiala Eau",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-10.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 11,
//         name: "Mojave Ghost",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-11.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 12,
//         name: "Rose Elixir",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-13.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 13,
//         name: "Aoud Queen Roses",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-14.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 14,
//         name: "Love Eau",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-15.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 15,
//         name: "Bibliotheque",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-16.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 16,
//         name: "Tuscan Creations",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-2.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
// ];

// // Full product data for Top Rated tab (8 products from HTML)
// const topRatedData: Product[] = [
//     {
//         id: 17,
//         name: "Patiala Eau",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-10.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 18,
//         name: "Bal Afrique",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-12.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 19,
//         name: "Exotic Diamond",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-8.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 20,
//         name: "Mon Guerlain",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-4.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 21,
//         name: "Dainty Diamond",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-9.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 22,
//         name: "Magnificent Bangle",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-13.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 23,
//         name: "Florale",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-16.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
//     {
//         id: 24,
//         name: "The Alchemist",
//         imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-8.jpg",
//         originalPrice: 65,
//         salePrice: 45,
//         rating: 3,
//         isNew: true,
//     },
// ];


// const CardFilter: React.FC = () => {
//     const [activeTab, setActiveTab] = useState<Tab>("bestseller");

//     // Helper function to render correct product list
//     const renderProducts = () => {
//         let dataToRender: Product[];
//         switch (activeTab) {
//             case "new":
//                 dataToRender = newArrivalsData;
//                 break;
//             case "top":
//                 dataToRender = topRatedData;
//                 break;
//             case "bestseller":
//             default:
//                 dataToRender = bestsellerData;
//         }

//         return dataToRender.map((product) => (
//             <div key={product.id} className="text-center group">
//                 <div className="relative bg-gray-100/70">
//                     {product.isNew && (
//                         <span className="absolute top-4 left-4 z-10 bg-[#a98f63] text-white text-[11px] font-semibold px-3 py-1 rounded-full">
//                             New
//                         </span>
//                     )}
//                     <Image
//                         src={product.imageUrl}
//                         alt={product.name}
//                         width={400}
//                         height={400}
//                         className="w-full h-full object-contain object-center"
//                     />
//                 </div>
//                 <div className="bg-[#f9f4ed] py-2">
//                     <h5 className="text-lg text-gray-800">{product.name}</h5>
//                 </div>
//             </div>
//         ));
//     };

//     // Render
//     return (
//         <div className="primaryBg">
//             <div className="templateContainer px-4 py-12">

//                 {/* Tab Headers */}
//                 <div className="flex justify-center space-x-2 sm:space-x-4 mb-8">
//                     <div className="border-2 border-gray-300 p-1 rounded-full inline-flex"> {/* Added border, padding, rounded-full, and inline-flex */}
//                         <button
//                             onClick={() => setActiveTab("bestseller")}
//                             className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
//                 ${activeTab === "bestseller"
//                                     ? "bg-[#a98f63] text-white"
//                                     : "bg-black text-white"
//                                 }`}
//                         >
//                             Bestseller
//                         </button>
//                         <button
//                             onClick={() => setActiveTab("new")}
//                             className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
//                 ${activeTab === "new"
//                                     ? "bg-[#a98f63] text-white"
//                                     : "bg-black text-white"
//                                 }`}
//                         >
//                             New Arrivals
//                         </button>
//                         <button
//                             onClick={() => setActiveTab("top")}
//                             className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
//                 ${activeTab === "top"
//                                     ? "bg-[#a98f63] text-white"
//                                     : "bg-black text-white"
//                                 }`}
//                         >
//                             Top Rated
//                         </button>
//                     </div>
//                 </div>

//                 {/* Tab Content Grid with Smooth Transition */}
//                 <div className="relative">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeTab}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.4, ease: "easeInOut" }}
//                             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
//                         >
//                             {renderProducts()}
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default CardFilter;




/////////////////////////////

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // ✅ added for smooth transition

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    originalPrice: number;
    salePrice: number;
    rating: number;
    isNew: boolean;
}

// Define the available tab IDs
type Tab = "bestseller" | "new" | "top";

const bestsellerData: Product[] = [

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
        name: "Ramadan Online Exclusive Raw ",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/r/a/ramadan_exclusive_raw_-_flakes_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 189,
        salePrice: 160.65,
        rating: 4.8,
        isNew: true,
    },
];

const newArrivalsData: Product[] = [
    {
        id: 9,
        name: "Ramadan Online Exclusive Hindi",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/r/a/ramadan_exclusive_hindi_-_salla_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 203.7,
        salePrice: 173.15,
        rating: 5,
        isNew: true,
    },
    {
        id: 10,
        name: "Ramadan Online Exclusive Raw",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/r/a/ramadan_exclusive_raw_-_maroke_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 163.8,
        salePrice: 139.23,
        rating: 5,
        isNew: true,
    },
    {
        id: 11,
        name: "Agarwood 12 (a) Hindi",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/a/w/aw_12_a_hindi-38.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 399,
        salePrice: 401.63,
        rating: 4.7,
        isNew: true,
    },
    {
        id: 12,
        name: "Ramadan Online Exclusive Hindi M",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/r/a/ramadan_exclusive_hindi_muri_1_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 315,
        salePrice: 267.75,
        rating: 4.9,
        isNew: true,
    },
    {
        id: 13,
        name: "Agarwood Quality A-2",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/a/w/aw_qlty_a_2_-29.1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 2100,
        salePrice: 401.63,
        rating: 5,
        isNew: false,
    },
    {
        id: 14,
        name: "Agarwood 30 (a) Hindi",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/a/w/aw_30_a_hindi-47_2.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 945,
        salePrice: 401.63,
        rating: 4.8,
        isNew: false,
    },
    {
        id: 15,
        name: "Ramadan Online Exclusive",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/r/a/ramdan_exclusive_cambodi_1.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 472.5,
        salePrice: 401.63,
        rating: 5,
        isNew: true,
    },
    {
        id: 16,
        name: "Agarwood 90 (b) Hindi",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/a/w/aw_90_b_hindi-50.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 262.5,
        salePrice: 401.63,
        rating: 4.6,
        isNew: false,
    },
];

const topRatedData: Product[] = [
    {
        id: 17,
        name: "Agarwood 15 (a) Hindi",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/a/w/aw_15_a_hindi-40.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 472.5,
        salePrice: 401.63,
        rating: 5,
        isNew: false,
    },
    {
        id: 18,
        name: "Agarwood A (42.5) Hindi",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/a/w/awa_42.5_hindi-36_2.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 1312.5,
        salePrice: 401.63,
        rating: 5,
        isNew: false,
    },
    {
        id: 19,
        name: "Mystique Aroma Gift Set",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/b/o/box1_outside.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 735,
        salePrice: 472.5,
        rating: 5,
        isNew: false,
    },
    {
        id: 20,
        name: "Luxe Oud Gift Set",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/b/o/box2_outside.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 682.5,
        salePrice: 451.5,
        rating: 4.9,
        isNew: false,
    },
    {
        id: 21,
        name: "Agarwood Marourqi",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/a/w/aw_mrk_009_bakhoor-72.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 420,
        salePrice: 401.63,
        rating: 4.8,
        isNew: false,
    },
    {
        id: 22,
        name: "Agarwood Quality A-5",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/a/w/aw_qlty_a_5-78.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 682.5,
        salePrice: 401.63,
        rating: 5,
        isNew: false,
    },
    {
        id: 23,
        name: "Agarwood Cambodi",
        imageUrl: "https://en-ae.ajmal.com/media/catalog/product/cache/7db5978f8213027e9a230423563b06cd/c/a/cambodi_aw_ab_online_exclusive-90.png?auto=webp&format=png&width=640&fit=cover",
        originalPrice: 525,
        salePrice: 401.63,
        rating: 4.9,
        isNew: false,
    },

];

const CardFilter: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>("bestseller");

    // Helper function to render correct product list
    const renderProducts = () => {
        let dataToRender: Product[];
        switch (activeTab) {
            case "new":
                dataToRender = newArrivalsData;
                break;
            case "top":
                dataToRender = topRatedData;
                break;
            case "bestseller":
            default:
                dataToRender = bestsellerData;
        }

        return dataToRender.map((product) => (
            <div key={product.id} className="text-center group">
                <div className="relative bg-gray-100/70">
                    {product.isNew && (
                        <span className="absolute top-4 left-4 z-10 bg-[#a98f63] text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                            New
                        </span>
                    )}
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-contain bg-[#2c1b12] object-center"
                    />
                </div>
                <div className="bg-[#ede3d2] py-2">
                    <h5 className="text-lg text-gray-800">{product.name}</h5>
                </div>
            </div>
        ));
    };

    // Render
    return (
        <div className="primaryBg">
            <div className="templateContainer px-4 py-12">

                {/* Tab Headers */}
                <div className="flex justify-center space-x-2 sm:space-x-4 mb-8">
                    <div className="border-2 border-gray-300 p-1 rounded-full inline-flex"> {/* Added border, padding, rounded-full, and inline-flex */}
                        <button
                            onClick={() => setActiveTab("bestseller")}
                            className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
                ${activeTab === "bestseller"
                                    ? "bg-[#a98f63] text-white"
                                    : "bg-black text-white"
                                }`}
                        >
                            Bestseller
                        </button>
                        <button
                            onClick={() => setActiveTab("new")}
                            className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
                ${activeTab === "new"
                                    ? "bg-[#a98f63] text-white"
                                    : "bg-black text-white"
                                }`}
                        >
                            New Arrivals
                        </button>
                        <button
                            onClick={() => setActiveTab("top")}
                            className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
                ${activeTab === "top"
                                    ? "bg-[#a98f63] text-white"
                                    : "bg-black text-white"
                                }`}
                        >
                            Top Rated
                        </button>
                    </div>
                </div>

                {/* Tab Content Grid with Smooth Transition */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {renderProducts()}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};

export default CardFilter;
