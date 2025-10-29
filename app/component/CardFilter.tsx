
// "use client"; // This directive is necessary for using hooks like useState

// import React, { useState } from "react";
// import Image from "next/image";

// // 1. DATA AND TYPE DEFINITIONS
// // =================================================

// // Define the data structure for a product
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

// // Full product data for Bestseller tab (8 products from HTML)
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

// // 2. MAIN COMPONENT
// // =================================================

// const ProductTabs: React.FC = () => {
//     const [activeTab, setActiveTab] = useState<Tab>("bestseller");
//     const maxStars = 5;

//     // Helper function to render the correct list of products
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

//         // Map over the full data and render the product card JSX directly
//         // Show all 8 products to match the HTML structure (2 rows of 4)
//         return dataToRender.map((product) => (
//             <div key={product.id} className="text-center group">
//                 {/* --- Product Card Start --- */}
//                 <div className="relative bg-gray-100/70">

//                     {/* "New" Badge */}
//                     {product.isNew && (
//                         <span
//                             className="absolute top-4 left-4 z-10 
//                          bg-[#a98f63] text-white text-[11px] 
//                          font-semibold px-3 py-1 rounded-full"
//                         >
//                             New
//                         </span>
//                     )}

//                     {/* Product Image */}

//                     <Image
//                         src={product.imageUrl}
//                         alt={product.name}
//                         width={400}
//                         height={400}
//                         className="w-full h-full object-contain object-center"
//                     />
//                 </div>

//                 {/* Product Info */}
//                 <div className=" bg-[#f9f4ed]  py-2">
//                     <h5 className="text-lg text-gray-800">{product.name}</h5>

//                     {/* Star Rating (Inlined) */}
//                     {/* <div className="flex justify-center items-center space-x-0.5 mb-2">
//                         {[...Array(maxStars)].map((_, index) => {
//                             const starValue = index + 1;
//                             return (
//                                 <span
//                                     key={starValue}
//                                     className={
//                                         starValue <= product.rating
//                                             ? "text-yellow-500"
//                                             : "text-gray-300"
//                                     }
//                                 >
//                                     &#9733;
//                                 </span>
//                             );
//                         })}

//                         <span className="text-gray-500 text-sm ml-1">(3)</span>
//                     </div> */}

//                     {/* Price */}
//                     {/* <div className="flex justify-center items-baseline space-x-2">
//                         <span className="text-gray-400 line-through">
//                             ${product.originalPrice}
//                         </span>
//                         <span className="text-black font-semibold text-lg">
//                             ${product.salePrice}
//                         </span>
//                     </div> */}
//                 </div>

//             </div>
//         ));
//     };

//     // Main component render
//     return (
//         <div className="primaryBg">
//             <div className="templateContainer px-4 py-12">

//                 {/* Tab Headers */}
//                 <div className="flex  justify-center space-x-2 sm:space-x-4 mb-8">
//                     <button
//                         onClick={() => setActiveTab("bestseller")}
//                         className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
//             ${activeTab === "bestseller"
//                                 ? "bg-[#a98f63] text-white"
//                                 : "bg-black text-white"
//                             }`}
//                     >
//                         Bestseller
//                     </button>
//                     <button
//                         onClick={() => setActiveTab("new")}
//                         className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
//             ${activeTab === "new"
//                                 ? "bg-[#a98f63] text-white"
//                                 : "bg-black text-white"
//                             }`}
//                     >
//                         New Arrivals
//                     </button>
//                     <button
//                         onClick={() => setActiveTab("top")}
//                         className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
//             ${activeTab === "top"
//                                 ? "bg-[#a98f63] text-white"
//                                 : "bg-black text-white"
//                             }`}
//                     >
//                         Top Rated
//                     </button>
//                 </div>

//                 {/* Tab Content Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                     {renderProducts()}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductTabs;






// "use client";

// import React, { useState } from "react";
// import Image from "next/image";


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

// // Full product data for Bestseller tab (8 products from HTML)
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

// // 2. MAIN COMPONENT
// // =================================================

// const ProductTabs: React.FC = () => {
//     const [activeTab, setActiveTab] = useState<Tab>("bestseller");


//     // Helper function to render the correct list of products
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
//                 {/* --- Product Card Start --- */}
//                 <div className="relative bg-gray-100/70">

//                     {/* "New" Badge */}
//                     {product.isNew && (
//                         <span
//                             className="absolute top-4 left-4 z-10 
//                          bg-[#a98f63] text-white text-[11px] 
//                          font-semibold px-3 py-1 rounded-full"
//                         >
//                             New
//                         </span>
//                     )}

//                     {/* Product Image */}

//                     <Image
//                         src={product.imageUrl}
//                         alt={product.name}
//                         width={400}
//                         height={400}
//                         className="w-full h-full object-contain object-center"
//                     />
//                 </div>

//                 {/* Product Info */}
//                 <div className=" bg-[#f9f4ed]  py-2">
//                     <h5 className="text-lg text-gray-800">{product.name}</h5>



//                 </div>

//             </div>
//         ));
//     };

//     // Main component render
//     return (
//         <div className="primaryBg">
//             <div className="templateContainer px-4 py-12">

//                 {/* Tab Headers */}
//                 <div className="flex  justify-center space-x-2 sm:space-x-4 mb-8">
//                     <button
//                         onClick={() => setActiveTab("bestseller")}
//                         className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
//             ${activeTab === "bestseller"
//                                 ? "bg-[#a98f63] text-white"
//                                 : "bg-black text-white"
//                             }`}
//                     >
//                         Bestseller
//                     </button>
//                     <button
//                         onClick={() => setActiveTab("new")}
//                         className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
//             ${activeTab === "new"
//                                 ? "bg-[#a98f63] text-white"
//                                 : "bg-black text-white"
//                             }`}
//                     >
//                         New Arrivals
//                     </button>
//                     <button
//                         onClick={() => setActiveTab("top")}
//                         className={`py-2 px-5 cursor-pointer rounded-full font-medium text-sm transition-colors duration-300
//             ${activeTab === "top"
//                                 ? "bg-[#a98f63] text-white"
//                                 : "bg-black text-white"
//                             }`}
//                     >
//                         Top Rated
//                     </button>
//                 </div>

//                 {/* Tab Content Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                     {renderProducts()}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductTabs;


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
        id: 1,
        name: "Blanche Parfum",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-1.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 2,
        name: "Tuscan Creations",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-2.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 3,
        name: "Terra Rossa",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-3.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 4,
        name: "Glorious Eau",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-4.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 5,
        name: "The Alchemist",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-5.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 6,
        name: "Garden A Winter",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-6.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 7,
        name: "Melody Eau",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-7.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 8,
        name: "Toilette",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-8.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
];

// Full product data for New Arrivals tab (8 products from HTML)
const newArrivalsData: Product[] = [
    {
        id: 9,
        name: "Ambre Royal",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-9.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 10,
        name: "Patiala Eau",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-10.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 11,
        name: "Mojave Ghost",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-11.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 12,
        name: "Rose Elixir",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-13.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 13,
        name: "Aoud Queen Roses",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-14.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 14,
        name: "Love Eau",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-15.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 15,
        name: "Bibliotheque",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-16.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 16,
        name: "Tuscan Creations",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-2.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
];

// Full product data for Top Rated tab (8 products from HTML)
const topRatedData: Product[] = [
    {
        id: 17,
        name: "Patiala Eau",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-10.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 18,
        name: "Bal Afrique",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-12.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 19,
        name: "Exotic Diamond",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-8.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 20,
        name: "Mon Guerlain",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-4.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 21,
        name: "Dainty Diamond",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-9.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 22,
        name: "Magnificent Bangle",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-13.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 23,
        name: "Florale",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-16.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
    },
    {
        id: 24,
        name: "The Alchemist",
        imageUrl: "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/product-item-8.jpg",
        originalPrice: 65,
        salePrice: 45,
        rating: 3,
        isNew: true,
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
                        className="w-full h-full object-contain object-center"
                    />
                </div>
                <div className="bg-[#f9f4ed] py-2">
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
