// "use client";

// import Link from 'next/link';
// import React from 'react';

// const BANNER_IMAGE_1 = "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-2.jpg";
// const BANNER_IMAGE_2 = "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-3.jpg";
// const BANNER_IMAGE_3 = "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-15.jpg";

// const BannerSection: React.FC = () => {
//     return (
//         <section className="primaryBg py-8 md:py-16">
//             <div className="templateContainer">

//                 {/* Top Section: Two Side-by-Side Banners */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-7">

//                     {/* Banner 1 */}
//                     <div className="col-span-1">
//                         <div
//                             className="relative overflow-hidden p-6 md:p-10 flex flex-col items-start justify-center min-h-[350px] text-left rounded-xl bg-cover bg-center"
//                             style={{ backgroundImage: `url(${BANNER_IMAGE_1})` }}
//                         >

//                             {/* Content */}
//                             <div className="relative z-10 w-full md:w-3/5">
//                                 <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2 tracking-wider stelina-subtitle">
//                                     TOP STAFF PICK
//                                 </h4>
//                                 <h3 className="text-3xl md:text-4xl  text-gray-800 mb-3 title">
//                                     Best Collection
//                                 </h3>
//                                 <div className="text-base text-gray-600 mb-6 description">
//                                     Proin interdum magna primis id consequat
//                                 </div>
//                                 <Link
//                                     href="#"
//                                     className="button btn-shop-now font-semibold text-sm uppercase text-black border-b border-black pb-1 hover:border-gray-500 transition duration-300"
//                                 >
//                                     Shop now
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Banner 2 */}
//                     <div className="col-span-1">
//                         <div
//                             className="relative overflow-hidden p-6 md:p-10 flex flex-col items-start justify-center min-h-[350px] text-left rounded-xl bg-cover bg-center"
//                             style={{ backgroundImage: `url(${BANNER_IMAGE_2})` }}
//                         >

//                             {/* Content */}
//                             <div className="relative z-10 w-full md:w-3/5">
//                                 <h3 className="text-xl md:text-4xl text-gray-800 leading-tight mb-4 title">
//                                     Maybe You’ve <br /> Earned it
//                                 </h3>
//                                 <div className="text-sm font-medium text-gray-600 mb-6 code">
//                                     Use code:
//                                     <span className="font-extrabold text-black ml-1 mr-2 text-base">
//                                         STELINA
//                                     </span>
//                                     Get **25% Off** for all items!
//                                 </div>
//                                 <Link
//                                     href="#"
//                                     className="button btn-shop-now font-semibold text-sm uppercase text-black border-b border-black pb-1 hover:border-gray-500 transition duration-300"
//                                 >
//                                     Shop now
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Section (unchanged) */}
//                 <div className="relative overflow-hidden min-h-[350px] rounded-xl flex items-center justify-center p-8 md:p-12">
//                     <div className="absolute inset-0 z-0">
//                         <img
//                             src={BANNER_IMAGE_3}
//                             alt="Elegant perfume background with flowers and high-end bottles"
//                             className="w-full h-full object-cover"
//                         />
//                         {/* <div className="absolute inset-0 "></div> */}
//                     </div>

//                     <div className="relative z-10 text-center max-w-xl">
//                         <h3 className="text-4xl md:text-5xl text-gray-900 mb-3 leading-tight title">
//                             Collection Arrived
//                         </h3>
//                         <div className="text-base md:text-lg text-gray-600 mb-4 description">
//                             You have no items & Are you <br /> ready to use? come & shop with us!
//                         </div>
//                         <div className="text-lg font-semibold text-gray-900 mb-6 price">
//                             Price from: <span className="text-xl md:text-2xl text-amber-600 ml-2">$45.00</span>
//                         </div>
//                         <Link
//                             href="#"
//                             className="button btn-shop-now bg-black text-white px-8 py-3 font-bold text-sm uppercase rounded-full tracking-wider hover:bg-gray-700 transition duration-300"
//                         >
//                             SHOP NOW
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BannerSection;



// "use client";

// import Link from 'next/link';
// import React from 'react';

// const BANNER_IMAGE_1 = "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-2.jpg";
// const BANNER_IMAGE_2 = "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-3.jpg";
// const BANNER_IMAGE_3 = "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-15.jpg";

// const BannerSection: React.FC = () => {
//     return (
//         <section className="primaryBg py-8 md:py-16">
//             <div className="templateContainer">

//                 {/* Top Section: Two Side-by-Side Banners */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-7">

//                     {/* Banner 1 */}
//                     <div className="col-span-1">
//                         <div
//                             className="relative overflow-hidden p-6 md:p-10 flex flex-col items-start justify-center min-h-[350px] text-left rounded-xl bg-cover bg-center"
//                             style={{ backgroundImage: `url(${BANNER_IMAGE_1})` }}
//                         >

//                             {/* Content */}
//                             <div className="relative z-10 w-full md:w-3/5">
//                                 <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2 tracking-wider stelina-subtitle">
//                                     TOP STAFF PICK
//                                 </h4>
//                                 <h3 className="text-3xl md:text-4xl  text-gray-800 mb-3 title">
//                                     Best Collection
//                                 </h3>
//                                 <div className="text-base text-gray-600 mb-6 description">
//                                     Proin interdum magna primis id consequat
//                                 </div>
//                                 <Link
//                                     href="#"
//                                     className="button btn-shop-now font-semibold text-sm uppercase text-black border-b border-black pb-1 hover:border-gray-500 transition duration-300"
//                                 >
//                                     Shop now
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Banner 2 */}
//                     <div className="col-span-1">
//                         <div
//                             className="relative overflow-hidden p-6 md:p-10 flex flex-col items-start justify-center min-h-[350px] text-left rounded-xl bg-cover bg-center"
//                             style={{ backgroundImage: `url(${BANNER_IMAGE_2})` }}
//                         >

//                             {/* Content */}
//                             <div className="relative z-10 w-full md:w-3/5">
//                                 <h3 className="text-xl md:text-4xl text-gray-800 leading-tight mb-4 title">
//                                     Maybe You’ve <br /> Earned it
//                                 </h3>
//                                 <div className="text-sm font-medium text-gray-600 mb-6 code">
//                                     Use code:
//                                     <span className="font-extrabold text-black ml-1 mr-2 text-base">
//                                         STELINA
//                                     </span>
//                                     Get **25% Off** for all items!
//                                 </div>
//                                 <Link
//                                     href="#"
//                                     className="button btn-shop-now font-semibold text-sm uppercase text-black border-b border-black pb-1 hover:border-gray-500 transition duration-300"
//                                 >
//                                     Shop now
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Section (unchanged) */}
//                 <div className="relative overflow-hidden min-h-[350px] rounded-xl flex items-center justify-center p-8 md:p-12">
//                     <div className="absolute inset-0 z-0">
//                         <img
//                             src={BANNER_IMAGE_3}
//                             alt="Elegant perfume background with flowers and high-end bottles"
//                             className="w-full h-full object-cover"
//                         />
//                         {/* <div className="absolute inset-0 "></div> */}
//                     </div>

//                     <div className="relative z-10 text-center max-w-xl">
//                         <h3 className="text-4xl md:text-5xl text-gray-900 mb-3 leading-tight title">
//                             Collection Arrived
//                         </h3>
//                         <div className="text-base md:text-lg text-gray-600 mb-4 description">
//                             You have no items & Are you <br /> ready to use? come & shop with us!
//                         </div>
//                         <div className="text-lg font-semibold text-gray-900 mb-6 price">
//                             Price from: <span className="text-xl md:text-2xl text-amber-600 ml-2">$45.00</span>
//                         </div>
//                         <Link
//                             href="#"
//                             className="button btn-shop-now bg-black text-white px-8 py-3 font-bold text-sm uppercase rounded-full tracking-wider hover:bg-gray-700 transition duration-300"
//                         >
//                             SHOP NOW
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BannerSection;

"use client";

import Link from "next/link";
import React from "react";

const BANNER_IMAGE_1 =
    "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-2.jpg";
const BANNER_IMAGE_2 =
    "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-3.jpg";
const BANNER_IMAGE_3 =
    "https://dreamingtheme.kiendaotac.com/html/stelina/assets/images/banner-home-15.jpg";

const BannerSection: React.FC = () => {
    return (
        <section className="primaryBg py-8 sm:py-12 md:py-16">
            <div className="templateContainer px-4 sm:px-6 lg:px-0">

                {/* Top Section: Two Side-by-Side Banners */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-7">

                    {/* Banner 1 */}
                    <div className="col-span-1">
                        <div
                            className="relative overflow-hidden p-6 sm:p-8 md:p-10 flex flex-col items-start justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[350px] text-left rounded-xl bg-cover bg-center"
                            style={{ backgroundImage: `url(${BANNER_IMAGE_1})` }}
                        >
                            {/* Content */}
                            <div className="relative z-10 w-full md:w-3/5">
                                <h4 className="text-xs sm:text-sm font-semibold uppercase text-gray-500 mb-2 tracking-wider stelina-subtitle">
                                    TOP STAFF PICK
                                </h4>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 title">
                                    Best Collection
                                </h3>
                                <div className="text-sm sm:text-base text-gray-600 mb-6 description">
                                    Proin interdum magna primis id consequat
                                </div>
                                <Link
                                    href="#"
                                    className="button btn-shop-now font-semibold text-xs sm:text-sm uppercase text-black border-b border-black pb-1 hover:border-gray-500 transition duration-300"
                                >
                                    Shop now
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Banner 2 */}
                    <div className="col-span-1">
                        <div
                            className="relative overflow-hidden p-6 sm:p-8 md:p-10 flex flex-col items-start justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[350px] text-left rounded-xl bg-cover bg-center"
                            style={{ backgroundImage: `url(${BANNER_IMAGE_2})` }}
                        >
                            {/* Content */}
                            <div className="relative z-10 w-full md:w-3/5">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-tight mb-4 title">
                                    Maybe You’ve <br /> Earned it
                                </h3>
                                <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 mb-6 code">

                                    <span className="font-extrabold text-black ml-1 mr-2 text-base">
                                        STELINA
                                    </span>
                                    Get <strong>25% Off</strong> for all items!
                                </div>
                                <Link
                                    href="#"
                                    className="button btn-shop-now font-semibold text-xs sm:text-sm uppercase text-black border-b border-black pb-1 hover:border-gray-500 transition duration-300"
                                >
                                    Shop now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[350px] rounded-xl flex items-center justify-center p-6 sm:p-8 md:p-12">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={BANNER_IMAGE_3}
                            alt="Elegant perfume background with flowers and high-end bottles"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-10 text-center max-w-md sm:max-w-lg md:max-w-xl">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 leading-tight title">
                            Collection Arrived
                        </h3>
                        <div className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 description">
                            You have no items & Are you <br /> ready to use? come & shop with us!
                        </div>
                        <div className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-6 price">
                            Price from:{" "}
                            <span className="text-lg sm:text-xl md:text-2xl text-amber-600 ml-2">
                                $45.00
                            </span>
                        </div>
                        <Link
                            href="#"
                            className="button btn-shop-now bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 font-bold text-xs sm:text-sm uppercase rounded-full tracking-wider hover:bg-gray-700 transition duration-300"
                        >
                            SHOP NOW
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
