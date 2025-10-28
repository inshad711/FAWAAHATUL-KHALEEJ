



// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// // The import for `div` from 'framer-motion/client' is unnecessary and has been removed.

// //
// // ──────────────────────────────────────────────
// //  AnimatedButton Component
// // ──────────────────────────────────────────────
// //
// interface AnimatedButtonProps {
//     href: string;
//     children: React.ReactNode;
//     textColorRgb: string;
//     outlineColorRgb: string;
//     fillColorRgb: string;
// }

// const AnimatedButton: React.FC<AnimatedButtonProps> = ({
//     href,
//     children,
//     textColorRgb,
//     outlineColorRgb,
//     fillColorRgb,
// }) => {
//     const textRgb = `rgb(${textColorRgb})`;
//     const outlineRgb = `rgb(${outlineColorRgb})`;
//     const fillRgb = `rgb(${fillColorRgb})`;

//     return (
//         <motion.a
//             href={href}
//             className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg cursor-pointer transition-shadow duration-300 border-2"
//             style={{ borderColor: outlineRgb }}
//             initial="rest"
//             whileHover="hover"
//         >
//             <motion.span
//                 className="absolute inset-0 z-0"
//                 style={{
//                     backgroundColor: fillRgb,
//                     originX: 0,
//                 }}
//                 variants={{
//                     rest: { scaleX: 0, transition: { duration: 0.3 } },
//                     hover: { scaleX: 1, transition: { duration: 0.3 } },
//                 }}
//             />
//             <motion.span
//                 className="relative z-10 font-bold tracking-widest uppercase px-10 py-4 text-center whitespace-nowrap"
//                 style={{ color: textRgb }}
//             >
//                 {children}
//             </motion.span>
//         </motion.a>
//     );
// };


// const slides = [
//     {
//         id: 1,
//         title: "The Soul of the East, Captured in Every Drop",
//         subtitle: "Pure. Royal. Eternal.",
//         cta: "EXPLORE OUR COLLECTION",
//         bgColor: "bg-stone-900",
//         textColor: "text-amber-400",
//         image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.23_e7a36b91.jpg",
//     },
//     {
//         id: 2,
//         title: "An Ode to Antiquity, Crafted for Modern Royalty",
//         subtitle: "Experience the timeless art of fragrance.",
//         cta: "DISCOVER SIGNATURE SCENTS",
//         bgColor: "bg-zinc-950",
//         textColor: "text-yellow-600",
//         image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.23_e7a36b91.jpg",
//     },
//     {
//         id: 3,
//         title: "Sillage That Tells a Story of Power and Grace",
//         subtitle: "Where tradition meets contemporary luxury.",
//         cta: "SHOP BEST SELLERS",
//         bgColor: "bg-neutral-900",
//         textColor: "text-yellow-500",
//         image: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.23_e7a36b91.jpg",
//     },
// ];

// const SLIDE_INTERVAL = 5000;

// const HeroSlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const directionRef = useRef(1);
//     const prevIndexRef = useRef(0);

//     useEffect(() => {
//         if (currentIndex !== prevIndexRef.current) {
//             if (
//                 currentIndex > prevIndexRef.current ||
//                 (currentIndex === 0 && prevIndexRef.current === slides.length - 1)
//             ) {
//                 directionRef.current = 1;
//             } else {
//                 directionRef.current = -1;
//             }
//         }
//         prevIndexRef.current = currentIndex;
//     }, [currentIndex]);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             directionRef.current = 1;
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//         }, SLIDE_INTERVAL);
//         return () => clearInterval(timer);
//     }, []);

//     const currentSlide = slides[currentIndex];

//     const mainSlideVariants = {
//         initial: { x: directionRef.current === 1 ? "100%" : "-100%" },
//         animate: {
//             x: 0,
//             transition: { x: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] } },
//         },
//         exit: {
//             x: directionRef.current === 1 ? "-100%" : "100%",
//             transition: { x: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] } },
//         },
//     };

//     // 💡 UPDATED: Set opacity to 1 (fully visible) for the background image
//     const backgroundFadeVariants = {
//         initial: { opacity: 0 },
//         animate: { opacity: 1, transition: { duration: 1.5, delay: 0.1 } },
//         exit: { opacity: 0, transition: { duration: 0.7 } },
//     };

//     const textVariants = {
//         initial: { opacity: 0, y: 10 },
//         animate: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 } },
//     };

//     const ctaVariants = {
//         initial: { opacity: 0, scale: 0.95 },
//         animate: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.5 } },
//     };

//     const handleDotClick = (index: number) => {
//         setCurrentIndex(index);
//     };

//     return (
//         <div className="relative h-screen w-full overflow-hidden">
//             <AnimatePresence initial={false}>
//                 <motion.div
//                     key={currentSlide.id}
//                     className={`absolute inset-0 flex items-center justify-center p-8 md:p-16 ${currentSlide.bgColor}`}
//                     variants={mainSlideVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                 >
//                     {/* Background Image Container */}
//                     <motion.div
//                         className="absolute inset-0 bg-cover bg-center"
//                         style={{ backgroundImage: `url(${currentSlide.image})` }}
//                         variants={backgroundFadeVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                     >

//                     </motion.div>

//                     {/* Content */}
//                     <div className="relative max-w-4xl w-full mx-auto text-left z-10 p-4 sm:p-8 rounded-xl backdrop-blur-sm bg-black/40">
//                         <motion.h1
//                             className={`text-3xl sm:text-4xl font-bold leading-tight ${currentSlide.textColor}`}
//                             variants={textVariants}
//                             initial="initial"
//                             animate="animate"
//                         >
//                             {currentSlide.title}
//                         </motion.h1>

//                         <motion.p
//                             className={`mt-4 text-xl sm:text-2xl text-white tracking-wider ${currentSlide.textColor.replace(
//                                 "text",
//                                 "text-opacity-80"
//                             )}`}
//                             variants={textVariants}
//                             initial="initial"
//                             animate="animate"
//                         >
//                             {currentSlide.subtitle}
//                         </motion.p>

//                         {/* CTA Button */}
//                         <motion.div
//                             className="mt-8"
//                             variants={ctaVariants}
//                             initial="initial"
//                             animate="animate"
//                         >
//                             <AnimatedButton
//                                 href="/collections/oud-elixir-new-launch"
//                                 textColorRgb="255 215 128"
//                                 outlineColorRgb="255 215 128"
//                                 fillColorRgb="255 255 255"
//                             >
//                                 {currentSlide.cta}
//                             </AnimatedButton>
//                         </motion.div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Dots */}
//             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//                 {slides.map((_, index) => (
//                     <div
//                         key={index}
//                         className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex
//                             ? "bg-amber-400 w-8"
//                             : "bg-white/50 hover:bg-white"
//                             }`}
//                         onClick={() => handleDotClick(index)}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>


//         </div>

//     );
// };

// //
// // ──────────────────────────────────────────────
// //  Export Default Hero
// // ──────────────────────────────────────────────
// //
// export default function Hero() {
//     return (
//         <div>
//             <div className=" min-h-screen bg-black">
//                 <HeroSlider />

//             </div>

//         </div>
//     );
// }


////
// SlideshowCarousel.tsx


// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// // Assuming types.ts is in the same directory, same as previous response
// import { SlideData } from './types';

// // --- Data for the Slideshow (Using URLs from the provided HTML) ---
// const SLIDE_DATA: SlideData[] = [
//     {
//         id: 1,
//         // Original: //dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624
//         imageSrc: 'https://dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000
//         mobileImageSrc: 'https://dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000',
//         tag: 'New Oud Elixir Has Arrived.',
//         headline: 'Fragrances that redefine',
//         subHeadline: 'modern luxury',
//         buttonText: 'Shop Now',
//         buttonLink: '/collections/oud-elixir-new-launch',
//         alignment: 'end', // Content aligned bottom-left
//     },
//     {
//         id: 2,
//         // Original: //dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268
//         imageSrc: 'https://dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000
//         mobileImageSrc: 'https://dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000',
//         tag: 'New Release',
//         headline: 'Feel the Tropics.',
//         subHeadline: 'Anywhere. Anytime.',
//         buttonText: 'Discover Now',
//         buttonLink: '/products/rayhaan-tropical-vibe',
//         alignment: 'center', // Content aligned center-left
//     },
// ];

// type SlideshowCarouselProps = {
//     slides?: SlideData[];
//     autoplayInterval?: number; // Time in milliseconds for auto-advance
// };

// const Hero: React.FC<SlideshowCarouselProps> = ({
//     slides = SLIDE_DATA,
//     autoplayInterval = 5000,
// }) => {
//     const [currentIndex, setCurrentIndex] = useState(1); // Start on the "Tropical Vibe" slide (index 1) as it was the visible slide

//     // --- Functions to change slides ---

//     const goToNext = useCallback(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, [slides.length]);

//     const goToSlide = (index: number) => {
//         setCurrentIndex(index);
//     };

//     // --- Autoplay Effect ---
//     useEffect(() => {
//         if (autoplayInterval > 0) {
//             const timer = setInterval(goToNext, autoplayInterval);
//             return () => clearInterval(timer);
//         }
//     }, [autoplayInterval, goToNext]);

//     // Determine alignment classes based on the slide data
//     const getContentAlignmentClasses = (alignment: SlideData['alignment']) => {
//         switch (alignment) {
//             case 'start':
//                 // place-self-start-start: Align content to the top-left (mobile: center-center)
//                 return 'sm:place-self-start-start sm:text-left';
//             case 'center':
//                 // place-self-center-start: Align content to the center-left (mobile: center-center)
//                 return 'sm:place-self-center-start sm:text-left';
//             case 'end':
//                 // place-self-end-start: Align content to the bottom-left (mobile: center-center)
//                 return 'sm:place-self-end-start sm:text-left';
//             default:
//                 return 'sm:place-self-center-center sm:text-center';
//         }
//     };

//     const currentSlide = slides[currentIndex];

//     return (
//         <div className="relative w-full overflow-hidden bg-gray-900 aspect-video min-h-[500px]">
//             <AnimatePresence initial={false}>
//                 <motion.div
//                     key={currentSlide.id}
//                     className="absolute inset-0"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {/* Background Image (Mobile vs Desktop) */}
//                     <div className="relative w-full h-full">
//                         {/* Desktop Image */}
//                         <Image
//                             src={currentSlide.imageSrc}
//                             alt={`${currentSlide.headline} desktop image`}
//                             fill
//                             priority={currentIndex === 0} // Prioritize first image load
//                             sizes="100vw"
//                             // Use Tailwind's 'hidden md:block' to select the large image for desktop
//                             className="hidden object-cover md:block"
//                         />
//                         {/* Mobile Image */}
//                         <Image
//                             src={currentSlide.mobileImageSrc}
//                             alt={`${currentSlide.headline} mobile image`}
//                             fill
//                             sizes="100vw"
//                             // Use Tailwind's 'md:hidden' to select the smaller image for mobile
//                             className="object-cover md:hidden"
//                         />
//                         {/* Overlay for readability */}
//                         <div className="absolute inset-0 bg-black/30 md:bg-black/10"></div>
//                     </div>

//                     {/* Slide Content */}
//                     <div
//                         className={`absolute inset-0 grid place-content-center-center p-6 text-white text-center sm:p-12
//             ${getContentAlignmentClasses(currentSlide.alignment)}`}
//                     >
//                         <div className="max-w-xl">
//                             {/* Animation for Tagline */}
//                             <motion.p
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.2 }}
//                                 className="text-sm font-semibold tracking-widest uppercase mb-3 text-white/90"
//                             >
//                                 {currentSlide.tag}
//                             </motion.p>

//                             {/* Animation for Headline */}
//                             <motion.h1
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.4 }}
//                                 className="text-3xl sm:text-4xl font-extrabold leading-tight"
//                             >
//                                 {currentSlide.headline}
//                                 <br />
//                                 {currentSlide.subHeadline}
//                             </motion.h1>

//                             {/* Animation for Button */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.6 }}
//                                 className="mt-8"
//                             >
//                                 <a
//                                     href={currentSlide.buttonLink}
//                                     // Styling matches the image: white outline, white text, black text on hover
//                                     className="inline-block px-8 py-3 text-sm font-medium border border-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
//                                 >
//                                     {currentSlide.buttonText}
//                                 </a>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         aria-label={`Go to item ${index + 1}`}
//                         onClick={() => goToSlide(index)}
//                         className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-transparent hover:bg-white/50'
//                             }`}
//                     />
//                 ))}
//             </div>

//             {/* Next Section Button (as per the bottom arrow in the original HTML) */}
//             {/* <button
//                 aria-label="Navigate to next section"
//                 onClick={() => console.log('Scroll to next section logic here.')}
//                 className="absolute bottom-4 right-4 z-10 w-12 h-12 flex items-center justify-center border border-white rounded-full bg-black/30 hover:bg-white/50 transition-colors duration-300"
//             >
//                 <svg
//                     className="w-4 h-4 text-white transform rotate-90"
//                     fill="none"
//                     viewBox="0 0 18 16"
//                 >
//                     <path
//                         d="m1 4 8 8 8-8"
//                         stroke="currentColor"
//                         strokeLinecap="square"
//                         strokeWidth="2"
//                     ></path>
//                 </svg>
//             </button> */}
//         </div>
//     );
// };

// export default Hero;


// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// // Assuming types.ts is in the same directory, same as previous response
// import { SlideData } from './types';

// // --- Data for the Slideshow (Using URLs from the provided HTML) ---
// const SLIDE_DATA: SlideData[] = [
//     {
//         id: 1,
//         // Original: //dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624
//         imageSrc: 'https://dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000
//         mobileImageSrc: 'https://dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000',
//         tag: 'New Oud Elixir Has Arrived.',
//         headline: 'Fragrances that redefine',
//         subHeadline: 'modern luxury',
//         buttonText: 'Shop Now',
//         buttonLink: '/collections/oud-elixir-new-launch',
//         alignment: 'end', // Content aligned bottom-left
//     },
//     {
//         id: 2,
//         // Original: //dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268
//         imageSrc: 'https://dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000
//         mobileImageSrc: 'https://dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000',
//         tag: 'New Release',
//         headline: 'Feel the Tropics.',
//         subHeadline: 'Anywhere. Anytime.',
//         buttonText: 'Discover Now',
//         buttonLink: '/products/rayhaan-tropical-vibe',
//         alignment: 'center', // Content aligned center-left
//     },
// ];

// type SlideshowCarouselProps = {
//     slides?: SlideData[];
//     autoplayInterval?: number; // Time in milliseconds for auto-advance
// };

// const Hero: React.FC<SlideshowCarouselProps> = ({
//     slides = SLIDE_DATA,
//     autoplayInterval = 5000,
// }) => {
//     const [currentIndex, setCurrentIndex] = useState(1); // Start on the "Tropical Vibe" slide (index 1) as it was the visible slide

//     // --- Functions to change slides ---

//     const goToNext = useCallback(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, [slides.length]);

//     const goToSlide = (index: number) => {
//         setCurrentIndex(index);
//     };

//     // --- Autoplay Effect ---
//     useEffect(() => {
//         if (autoplayInterval > 0) {
//             const timer = setInterval(goToNext, autoplayInterval);
//             return () => clearInterval(timer);
//         }
//     }, [autoplayInterval, goToNext]);

//     // Modification for equal top/bottom spacing:
//     // We are simplifying alignment to always center the content block (equal top/bottom space)
//     // but keep it left-aligned horizontally on desktop as per the original design intent (using text-left).
//     const getContentAlignmentClasses = (alignment: SlideData['alignment']) => {
//         // We use flexbox utilities for consistent vertical centering on desktop.
//         // On mobile (default), the container is still `grid place-content-center-center`.
//         switch (alignment) {
//             case 'start':
//             case 'center':
//             case 'end':
//                 // For all alignments, we want the content box itself to be vertically centered.
//                 // We use flex utilities to center the child within the parent's full height.
//                 return 'sm:flex sm:items-center sm:justify-start sm:text-left';
//             default:
//                 // Fallback to center/center
//                 return 'sm:flex sm:items-center sm:justify-center sm:text-center';
//         }
//     };

//     const currentSlide = slides[currentIndex];

//     return (
//         <div className="relative w-full overflow-hidden bg-gray-900 aspect-video min-h-[500px]">
//             <AnimatePresence initial={false}>
//                 <motion.div
//                     key={currentSlide.id}
//                     className="absolute inset-0"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {/* Background Image (Mobile vs Desktop) */}
//                     <div className="relative w-full h-full">
//                         {/* Desktop Image */}
//                         <Image
//                             src={currentSlide.imageSrc}
//                             alt={`${currentSlide.headline} desktop image`}
//                             fill
//                             priority={currentIndex === 0} // Prioritize first image load
//                             sizes="100vw"
//                             // Use Tailwind's 'hidden md:block' to select the large image for desktop
//                             className="hidden object-cover md:block"
//                         />
//                         {/* Mobile Image */}
//                         <Image
//                             src={currentSlide.mobileImageSrc}
//                             alt={`${currentSlide.headline} mobile image`}
//                             fill
//                             sizes="100vw"
//                             // Use Tailwind's 'md:hidden' to select the smaller image for mobile
//                             className="object-cover md:hidden"
//                         />
//                         {/* Overlay for readability */}
//                         <div className="absolute inset-0 bg-black/30 md:bg-black/10"></div>
//                     </div>

//                     {/* Slide Content - MODIFIED GRID TO FLEX FOR CONSISTENT VERTICAL CENTERING */}
//                     <div
//                         // **MODIFICATION HERE**: We replace `grid place-content-center-center` with classes
//                         // that use flexbox on desktop (sm:...) to consistently center the content block vertically,
//                         // while keeping the mobile centering (text-center, p-6) as a fallback.
//                         className={`absolute inset-0 flex items-center justify-center p-6 text-white text-center sm:p-12
//             ${getContentAlignmentClasses(currentSlide.alignment)}`}
//                     >
//                         {/* Inner content box. On desktop, this will be aligned left because of sm:justify-start and sm:text-left */}
//                         <div className="max-w-xl">
//                             {/* Animation for Tagline */}
//                             <motion.p
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.2 }}
//                                 className="text-sm font-semibold tracking-widest uppercase mb-3 text-white/90"
//                             >
//                                 {currentSlide.tag}
//                             </motion.p>

//                             {/* Animation for Headline */}
//                             <motion.h1
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.4 }}
//                                 className="text-3xl sm:text-4xl font-extrabold leading-tight"
//                             >
//                                 {currentSlide.headline}
//                                 <br />
//                                 {currentSlide.subHeadline}
//                             </motion.h1>

//                             {/* Animation for Button */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.6 }}
//                                 className="mt-8"
//                             >
//                                 <a
//                                     href={currentSlide.buttonLink}
//                                     // Styling matches the image: white outline, white text, black text on hover
//                                     className="inline-block px-8 py-3 text-sm font-medium border border-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
//                                 >
//                                     {currentSlide.buttonText}
//                                 </a>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         aria-label={`Go to item ${index + 1}`}
//                         onClick={() => goToSlide(index)}
//                         className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-transparent hover:bg-white/50'
//                             }`}
//                     />
//                 ))}
//             </div>



//         </div>
//     );
// };

// export default Hero;


// //////////////// alll working ////////

// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- Type Definition Moved Inline to Solve the Module Error ---
// export interface SlideData {
//     id: number;
//     imageSrc: string;
//     mobileImageSrc: string;
//     tag: string;
//     headline: string;
//     subHeadline: string;
//     buttonText: string;
//     buttonLink: string;
//     alignment: 'start' | 'center' | 'end';
// }

// // --- Data for the Slideshow (Using URLs from the provided HTML) ---
// const SLIDE_DATA: SlideData[] = [
//     {
//         id: 1,
//         // Original: //dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624
//         imageSrc: '/imageTemp/a-perfume-bottle-sits-on-a-tray-with-stacked-dark-towels-and-a-dried-red-rose-illuminated-by-a-flickering-candle-photo.jpg',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000
//         mobileImageSrc: 'https://dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000',
//         tag: 'New Oud Elixir Has Arrived.',
//         headline: 'The Soul of the East Captured in Every Drop',
//         subHeadline: 'Pure. Royal. Eternal',
//         buttonText: 'EXPLORE OUR COLLECTION',
//         buttonLink: '/collections/oud-elixir-new-launch',
//         alignment: 'end', // Content aligned bottom-left
//     },
//     {
//         id: 2,
//         // Original: //dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268
//         imageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000
//         mobileImageSrc: 'https://dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000',
//         tag: 'New Release',
//         // headline: 'Feel the Tropics.',
//         // subHeadline: 'Anywhere. Anytime.',
//         // buttonText: 'Discover Now',
//         headline: 'The Soul of the East Captured in Every Drop',
//         subHeadline: 'Pure. Royal. Eternal',
//         buttonText: 'EXPLORE OUR COLLECTION',
//         buttonLink: '/products/rayhaan-tropical-vibe',
//         alignment: 'center', // Content aligned center-left
//     },
// ];

// type SlideshowCarouselProps = {
//     slides?: SlideData[];
//     autoplayInterval?: number; // Time in milliseconds for auto-advance
// };

// const Hero: React.FC<SlideshowCarouselProps> = ({
//     slides = SLIDE_DATA,
//     autoplayInterval = 5000,
// }) => {


//     const [currentIndex, setCurrentIndex] = useState(1);

//     // --- Functions to change slides ---

//     const goToNext = useCallback(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, [slides.length]);

//     const goToSlide = (index: number) => {
//         setCurrentIndex(index);
//     };

//     // --- Autoplay Effect ---
//     useEffect(() => {
//         if (autoplayInterval > 0) {
//             const timer = setInterval(goToNext, autoplayInterval);
//             return () => clearInterval(timer);
//         }
//     }, [autoplayInterval, goToNext]);


//     const getContentAlignmentClasses = (alignment: SlideData['alignment']) => {

//         switch (alignment) {
//             case 'start':
//             case 'center':
//             case 'end':

//                 return 'sm:flex sm:items-center sm:justify-start sm:text-left';
//             default:
//                 // Fallback to center/center
//                 return 'sm:flex sm:items-center sm:justify-center sm:text-center';
//         }
//     };

//     const currentSlide = slides[currentIndex];

//     return (
//         <div className="relative w-full overflow-hidden bg-gray-900 aspect-video min-h-[500px]">
//             <AnimatePresence initial={false}>
//                 <motion.div
//                     key={currentSlide.id}
//                     className="absolute inset-0"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {/* Background Image (Mobile vs Desktop) */}
//                     <div className="relative w-full h-full">
//                         {/* Desktop Image */}
//                         <Image
//                             src={currentSlide.imageSrc}
//                             alt={`${currentSlide.headline} desktop image`}
//                             fill
//                             priority={currentIndex === 0} // Prioritize first image load
//                             sizes="100vw"
//                             // Use Tailwind's 'hidden md:block' to select the large image for desktop
//                             className="hidden object-cover md:block"
//                         />
//                         {/* Mobile Image */}
//                         <Image
//                             src={currentSlide.mobileImageSrc}
//                             alt={`${currentSlide.headline} mobile image`}
//                             fill
//                             sizes="100vw"
//                             // Use Tailwind's 'md:hidden' to select the smaller image for mobile
//                             className="object-cover md:hidden"
//                         />
//                         {/* Overlay for readability */}
//                         <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
//                     </div>

//                     {/* Slide Content - MODIFIED GRID TO FLEX FOR CONSISTENT VERTICAL CENTERING */}
//                     <div

//                         className={`absolute inset-0 flex items-center justify-center p-6 text-white text-center sm:p-12
//             ${getContentAlignmentClasses(currentSlide.alignment)}`}
//                     >
//                         {/* Inner content box. On desktop, this will be aligned left because of sm:justify-start and sm:text-left */}
//                         <div className="max-w-xl">
//                             {/* Animation for Tagline */}
//                             <motion.p
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.2 }}
//                                 className="text-sm font-semibold tracking-widest uppercase mb-3 text-white/90"
//                             >
//                                 {currentSlide.tag}
//                             </motion.p>

//                             {/* Animation for Headline */}
//                             <motion.h1
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.4 }}
//                                 className="text-3xl sm:text-4xl font-extrabold leading-tight"
//                             >
//                                 {currentSlide.headline}
//                                 <br />
//                                 <span className="text-xl sm:text-2xl font-semibold">
//                                     {currentSlide.subHeadline}
//                                 </span>
//                             </motion.h1>


//                             {/* Animation for Button */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.6 }}
//                                 className="mt-8"
//                             >
//                                 <a
//                                     href={currentSlide.buttonLink}
//                                     // Styling matches the image: white outline, white text, black text on hover
//                                     className="inline-block px-8 py-3 text-sm font-medium border border-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
//                                 >
//                                     {currentSlide.buttonText}
//                                 </a>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         aria-label={`Go to item ${index + 1}`}
//                         onClick={() => goToSlide(index)}
//                         className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-transparent hover:bg-white/50'
//                             }`}
//                     />
//                 ))}
//             </div>


//         </div>
//     );
// };

// export default Hero;





//////////////// alll working ////////

// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- Type Definition Moved Inline to Solve the Module Error ---
// export interface SlideData {
//     id: number;
//     imageSrc: string;
//     mobileImageSrc: string;
//     tag: string;
//     headline: string;
//     subHeadline: string;
//     buttonText: string;
//     buttonLink: string;
//     alignment: 'start' | 'center' | 'end';
// }

// // --- Data for the Slideshow (Using URLs from the provided HTML) ---
// const SLIDE_DATA: SlideData[] = [
//     {
//         id: 1,


//         // Original: //dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268
//         imageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000
//         mobileImageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
//         tag: 'New Oud Elixir Has Arrived.',
//         headline: 'The Soul of the East Captured in Every Drop',
//         subHeadline: 'Pure. Royal. Eternal',
//         buttonText: 'EXPLORE OUR COLLECTION',
//         buttonLink: '/collections/oud-elixir-new-launch',
//         alignment: 'end', // Content aligned bottom-left
//     },
//     {
//         id: 2,
//         // Original: //dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624
//         imageSrc: '/imageTemp2/WhatsApp Image 2025-10-25 at 15.59.56_cb5f9cf8.jpg',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000
//         mobileImageSrc: '/imageTemp2/WhatsApp Image 2025-10-25 at 15.59.56_cb5f9cf8.jpg',
//         tag: 'New Release',
//         // headline: 'Feel the Tropics.',
//         // subHeadline: 'Anywhere. Anytime.',
//         // buttonText: 'Discover Now',
//         headline: 'The Soul of the East Captured in Every Drop',
//         subHeadline: 'Pure. Royal. Eternal',
//         buttonText: 'EXPLORE OUR COLLECTION',
//         buttonLink: '/products/rayhaan-tropical-vibe',
//         alignment: 'center', // Content aligned center-left
//     },
// ];

// type SlideshowCarouselProps = {
//     slides?: SlideData[];
//     autoplayInterval?: number; // Time in milliseconds for auto-advance
// };

// const Hero: React.FC<SlideshowCarouselProps> = ({
//     slides = SLIDE_DATA,
//     autoplayInterval = 5000,
// }) => {


//     const [currentIndex, setCurrentIndex] = useState(1);

//     // --- Functions to change slides ---

//     const goToNext = useCallback(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, [slides.length]);

//     const goToSlide = (index: number) => {
//         setCurrentIndex(index);
//     };

//     // --- Autoplay Effect ---
//     useEffect(() => {
//         if (autoplayInterval > 0) {
//             const timer = setInterval(goToNext, autoplayInterval);
//             return () => clearInterval(timer);
//         }
//     }, [autoplayInterval, goToNext]);


//     const getContentAlignmentClasses = (alignment: SlideData['alignment']) => {

//         switch (alignment) {
//             case 'start':
//             case 'center':
//             case 'end':

//                 return 'sm:flex sm:items-center sm:justify-start sm:text-left';
//             default:
//                 // Fallback to center/center
//                 return 'sm:flex sm:items-center sm:justify-center sm:text-center';
//         }
//     };

//     const currentSlide = slides[currentIndex];

//     return (
//         <div className="relative w-full overflow-hidden bg-gray-900 aspect-video min-h-[500px]">
//             <AnimatePresence initial={false}>
//                 <motion.div
//                     key={currentSlide.id}
//                     className="absolute inset-0"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {/* Background Image (Mobile vs Desktop) */}
//                     <div className="relative w-full h-full">
//                         {/* Desktop Image */}
//                         <Image
//                             src={currentSlide.imageSrc}
//                             alt={`${currentSlide.headline} desktop image`}
//                             fill
//                             priority={currentIndex === 0} // Prioritize first image load
//                             sizes="100vw"
//                             // Use Tailwind's 'hidden md:block' to select the large image for desktop
//                             className="hidden object-cover md:block"
//                         />
//                         {/* Mobile Image */}
//                         <Image
//                             src={currentSlide.mobileImageSrc}
//                             alt={`${currentSlide.headline} mobile image`}
//                             fill
//                             sizes="100vw"
//                             // Use Tailwind's 'md:hidden' to select the smaller image for mobile
//                             className="object-cover md:hidden"
//                         />
//                         {/* Overlay for readability */}
//                         <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
//                     </div>

//                     {/* Slide Content - MODIFIED GRID TO FLEX FOR CONSISTENT VERTICAL CENTERING */}
//                     <div

//                         className={`absolute inset-0 flex items-center justify-center p-6 text-white text-center sm:p-12
//             ${getContentAlignmentClasses(currentSlide.alignment)}`}
//                     >
//                         {/* Inner content box. On desktop, this will be aligned left because of sm:justify-start and sm:text-left */}
//                         <div className="max-w-xl">
//                             {/* Animation for Tagline */}


//                             {/* Animation for Headline */}
//                             <motion.h1
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.4 }}
//                                 className="text-3xl playfairDisplayHeading sm:text-4xl font-extrabold leading-tight"
//                             >
//                                 {currentSlide.headline}
//                                 <br />
//                                 <span className="text-xl loraParagraph sm:text-2xl font-semibold">
//                                     {currentSlide.subHeadline}
//                                 </span>
//                             </motion.h1>


//                             {/* Animation for Button */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: 0.6 }}
//                                 className="mt-8"
//                             >
//                                 <a
//                                     href={currentSlide.buttonLink}
//                                     // Styling matches the image: white outline, white text, black text on hover
//                                     className="inline-block px-8 py-3 text-sm font-medium border border-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
//                                 >
//                                     {currentSlide.buttonText}
//                                 </a>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         aria-label={`Go to item ${index + 1}`}
//                         onClick={() => goToSlide(index)}
//                         className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-transparent hover:bg-white/50'
//                             }`}
//                     />
//                 ))}
//             </div>


//         </div>
//     );
// };

// export default Hero;



/////////////// all working ////////

// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- Type Definition Moved Inline to Solve the Module Error ---
// export interface SlideData {
//     id: number;
//     imageSrc: string;
//     mobileImageSrc: string;
//     tag: string;
//     headline: string;
//     subHeadline: string;
//     buttonText: string;
//     buttonLink: string;
//     alignment: 'start' | 'center' | 'end';
// }

// // --- Data for the Slideshow (Using URLs from the provided HTML) ---
// const SLIDE_DATA: SlideData[] = [
//     {
//         id: 1,


//         // Original: //dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268
//         imageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000
//         mobileImageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
//         tag: 'New Oud Elixir Has Arrived.',
//         headline: 'The Soul of the East Captured in Every Drop',
//         subHeadline: 'Pure. Royal. Eternal',
//         buttonText: 'EXPLORE OUR COLLECTION',
//         buttonLink: '/collections/oud-elixir-new-launch',
//         alignment: 'end', // Content aligned bottom-left
//     },
//     {
//         id: 2,
//         // Original: //dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624
//         imageSrc: '/imageTemp2/WhatsApp Image 2025-10-25 at 15.59.56_cb5f9cf8.jpg',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000
//         mobileImageSrc: '/imageTemp2/WhatsApp Image 2025-10-25 at 15.59.56_cb5f9cf8.jpg',
//         tag: 'New Release',
//         // headline: 'Feel the Tropics.',
//         // subHeadline: 'Anywhere. Anytime.',
//         // buttonText: 'Discover Now',
//         headline: 'The Soul of the East Captured in Every Drop',
//         subHeadline: 'Pure. Royal. Eternal',
//         buttonText: 'EXPLORE OUR COLLECTION',
//         buttonLink: '/products/rayhaan-tropical-vibe',
//         alignment: 'center', // Content aligned center-left
//     },
// ];

// type SlideshowCarouselProps = {
//     slides?: SlideData[];
//     autoplayInterval?: number; // Time in milliseconds for auto-advance
// };

// const Hero: React.FC<SlideshowCarouselProps> = ({
//     slides = SLIDE_DATA,
//     autoplayInterval = 5000,
// }) => {


//     const [currentIndex, setCurrentIndex] = useState(1);

//     // --- Functions to change slides ---

//     const goToNext = useCallback(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, [slides.length]);

//     const goToSlide = (index: number) => {
//         setCurrentIndex(index);
//     };

//     // --- Autoplay Effect ---
//     useEffect(() => {
//         if (autoplayInterval > 0) {
//             const timer = setInterval(goToNext, autoplayInterval);
//             return () => clearInterval(timer);
//         }
//     }, [autoplayInterval, goToNext]);


//     const getContentAlignmentClasses = (alignment: SlideData['alignment']) => {

//         switch (alignment) {
//             case 'start':
//             case 'center':
//             case 'end':

//                 return 'sm:flex sm:items-center sm:justify-start sm:text-left';
//             default:
//                 // Fallback to center/center
//                 return 'sm:flex sm:items-center sm:justify-center sm:text-center';
//         }
//     };

//     const currentSlide = slides[currentIndex];

//     return (
//         <div className="relative w-full overflow-hidden bg-gray-900  h-screen min-h-[500px]">
//             <AnimatePresence initial={false}>
//                 <motion.div
//                     key={currentSlide.id}
//                     className="absolute inset-0"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {/* Background Image (Mobile vs Desktop) */}
//                     <div className="relative w-full h-full">
//                         {/* Desktop Image */}
//                         <Image
//                             src={currentSlide.imageSrc}
//                             alt={`${currentSlide.headline} desktop image`}
//                             fill
//                             priority={currentIndex === 0} // Prioritize first image load
//                             sizes="100vw"
//                             // Use Tailwind's 'hidden md:block' to select the large image for desktop
//                             className="hidden object-cover md:block"
//                         />
//                         {/* Mobile Image */}
//                         <Image
//                             src={currentSlide.mobileImageSrc}
//                             alt={`${currentSlide.headline} mobile image`}
//                             fill
//                             sizes="100vw"
//                             // Use Tailwind's 'md:hidden' to select the smaller image for mobile
//                             className="object-cover md:hidden"
//                         />
//                         {/* Overlay for readability */}
//                         <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
//                     </div>


//                     <div className="absolute inset-0 flex items-center justify-center text-white">
//                         <div
//                             className={`w-full templateContainer
//         ${getContentAlignmentClasses(currentSlide.alignment)}`}
//                         >
//                             {/* Animation for Tagline */}


//                             <div className='block max-w-xl'>
//                                 {/* Animation for Headline */}
//                                 <motion.h1
//                                     initial={{ opacity: 0, y: 10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.4 }}
//                                     className="text-3xl playfairDisplayHeading sm:text-5xl font-extrabold leading-tight"
//                                 >
//                                     {currentSlide.headline}
//                                     <br />
//                                     <span className="text-xl loraParagraph sm:text-2xl font-semibold">
//                                         {currentSlide.subHeadline}
//                                     </span>
//                                 </motion.h1>


//                                 {/* Animation for Button */}
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.6 }}
//                                     className="mt-8"
//                                 >
//                                     <a
//                                         href={currentSlide.buttonLink}
//                                         // Styling matches the image: white outline, white text, black text on hover
//                                         className="inline-block px-8 py-3 text-sm font-medium border border-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
//                                     >
//                                         {currentSlide.buttonText}
//                                     </a>
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         aria-label={`Go to item ${index + 1}`}
//                         onClick={() => goToSlide(index)}
//                         className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-transparent hover:bg-white/50'
//                             }`}
//                     />
//                 ))}
//             </div>


//         </div>
//     );
// };

// export default Hero;


//////////////////// alllllllllllllllllllllllllllllllllllllllllll////////////

// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- Type Definition Moved Inline to Solve the Module Error ---
// export interface SlideData {
//     id: number;
//     imageSrc: string;
//     mobileImageSrc: string;
//     tag: string;
//     headline: string;
//     subHeadline: string;
//     buttonText: string;
//     buttonLink: string;
//     alignment: 'start' | 'center' | 'end';
// }

// // --- Data for the Slideshow (Using URLs from the provided HTML) ---
// const SLIDE_DATA: SlideData[] = [
//     {
//         id: 1,


//         // Original: //dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268
//         imageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000
//         mobileImageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
//         tag: 'New Oud Elixir Has Arrived.',
//         headline: 'The Soul of the East Captured in Every Drop',
//         subHeadline: 'Pure. Royal. Eternal',
//         buttonText: 'EXPLORE OUR COLLECTION',
//         buttonLink: '/collections/oud-elixir-new-launch',
//         alignment: 'end', // Content aligned bottom-left
//     },
//     {
//         id: 2,
//         // Original: //dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624
//         imageSrc: '/imageTemp2/WhatsAddsd.jpg',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000
//         mobileImageSrc: '/imageTemp2/WhatsApp Image 2025-10-25 at 15.59.56_cb5f9cf8.jpg',
//         tag: 'New Release',
//         // headline: 'Feel the Tropics.',
//         // subHeadline: 'Anywhere. Anytime.',
//         // buttonText: 'Discover Now',
//         headline: 'The Soul of the East Captured in Every Drop',
//         subHeadline: 'Pure. Royal. Eternal',
//         buttonText: 'EXPLORE OUR COLLECTION',
//         buttonLink: '/products/rayhaan-tropical-vibe',
//         alignment: 'center', // Content aligned center-left
//     },
// ];

// type SlideshowCarouselProps = {
//     slides?: SlideData[];
//     autoplayInterval?: number; // Time in milliseconds for auto-advance
// };

// const Hero: React.FC<SlideshowCarouselProps> = ({
//     slides = SLIDE_DATA,
//     autoplayInterval = 5000,
// }) => {


//     const [currentIndex, setCurrentIndex] = useState(1);

//     // --- Functions to change slides ---

//     const goToNext = useCallback(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, [slides.length]);

//     const goToSlide = (index: number) => {
//         setCurrentIndex(index);
//     };

//     // --- Autoplay Effect ---
//     useEffect(() => {
//         if (autoplayInterval > 0) {
//             const timer = setInterval(goToNext, autoplayInterval);
//             return () => clearInterval(timer);
//         }
//     }, [autoplayInterval, goToNext]);


//     const getContentAlignmentClasses = (alignment: SlideData['alignment']) => {

//         switch (alignment) {
//             case 'start':
//             case 'center':
//             case 'end':

//                 return 'sm:flex sm:items-center sm:justify-start sm:text-left';
//             default:
//                 // Fallback to center/center
//                 return 'sm:flex sm:items-center sm:justify-center sm:text-center';
//         }
//     };

//     const currentSlide = slides[currentIndex];

//     return (
//         <div className="relative w-full overflow-hidden bg-gray-900  h-screen min-h-[500px]">
//             <AnimatePresence initial={false}>
//                 <motion.div
//                     key={currentSlide.id}
//                     className="absolute inset-0"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {/* Background Image (Mobile vs Desktop) */}
//                     <div className="relative w-full h-full">
//                         {/* Desktop Image */}
//                         <Image
//                             src={currentSlide.imageSrc}
//                             alt={`${currentSlide.headline} desktop image`}
//                             fill
//                             priority={currentIndex === 0} // Prioritize first image load
//                             sizes="100vw"
//                             // Use Tailwind's 'hidden md:block' to select the large image for desktop
//                             className="hidden object-cover md:block"
//                         />
//                         {/* Mobile Image */}
//                         <Image
//                             src={currentSlide.mobileImageSrc}
//                             alt={`${currentSlide.headline} mobile image`}
//                             fill
//                             sizes="100vw"
//                             // Use Tailwind's 'md:hidden' to select the smaller image for mobile
//                             className="object-cover md:hidden"
//                         />
//                         {/* Overlay for readability */}
//                         <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
//                     </div>


//                     <div className="absolute inset-0 flex items-center justify-center text-white">
//                         <div
//                             className={`w-full templateContainer
//         ${getContentAlignmentClasses(currentSlide.alignment)}`}
//                         >
//                             {/* Animation for Tagline */}


//                             <div className='block max-w-xl'>
//                                 {/* Animation for Headline */}
//                                 <motion.h1
//                                     initial={{ opacity: 0, y: 10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.4 }}
//                                     className="text-3xl playfairDisplayHeading sm:text-5xl font-extrabold leading-tight"
//                                 >
//                                     {currentSlide.headline}
//                                     <br />
//                                     <span className="text-xl loraParagraph sm:text-2xl font-semibold">
//                                         {currentSlide.subHeadline}
//                                     </span>
//                                 </motion.h1>


//                                 {/* Animation for Button */}
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.6 }}
//                                     className="mt-8"
//                                 >
//                                     <a
//                                         href={currentSlide.buttonLink}
//                                         // Styling matches the image: white outline, white text, black text on hover
//                                         className="inline-block px-8 py-3 text-sm font-medium border border-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
//                                     >
//                                         {currentSlide.buttonText}
//                                     </a>
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         aria-label={`Go to item ${index + 1}`}
//                         onClick={() => goToSlide(index)}
//                         className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-transparent hover:bg-white/50'
//                             }`}
//                     />
//                 ))}
//             </div>


//         </div>
//     );
// };

// export default Hero;

////////////////////////////////////////


// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- Type Definition Moved Inline to Solve the Module Error ---
// export interface SlideData {
//     id: number;
//     imageSrc: string;
//     mobileImageSrc: string;
//     tag: string;
//     headline: string;
//     subHeadline: string;
//     buttonText: string;
//     buttonLink: string;
//     alignment: 'start' | 'center' | 'end';
// }

// // --- Data for the Slideshow (Using URLs from the provided HTML) ---
// const SLIDE_DATA: SlideData[] = [
//     {
//         id: 1,


//         // Original: //dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268
//         imageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000
//         mobileImageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
//         tag: 'New Oud Elixir Has Arrived.',
//         headline: 'The Soul of the East Captured in Every Drop',
//         subHeadline: 'Pure. Royal. Eternal',
//         buttonText: 'EXPLORE OUR COLLECTION',
//         buttonLink: '/collection',
//         alignment: 'end', // Content aligned bottom-left
//     },
//     {
//         id: 2,
//         // Original: //dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624
//         imageSrc: '/imageTemp2/WhatsAddsd.jpg',
//         // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000
//         mobileImageSrc: '/imageTemp2/WhatsAddsd.jpg',
//         tag: 'New Release',
//         // headline: 'Feel the Tropics.',
//         // subHeadline: 'Anywhere. Anytime.',
//         // buttonText: 'Discover Now',
//         headline: 'The Soul of the East Captured in Every Drop',
//         subHeadline: 'Pure. Royal. Eternal',
//         buttonText: 'EXPLORE OUR COLLECTION',
//         buttonLink: '/collection',
//         alignment: 'center', // Content aligned center-left
//     },
// ];

// type SlideshowCarouselProps = {
//     slides?: SlideData[];
//     autoplayInterval?: number; // Time in milliseconds for auto-advance
// };

// const Hero: React.FC<SlideshowCarouselProps> = ({
//     slides = SLIDE_DATA,
//     autoplayInterval = 5000,
// }) => {


//     const [currentIndex, setCurrentIndex] = useState(1);

//     // --- Functions to change slides ---

//     const goToNext = useCallback(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, [slides.length]);

//     const goToSlide = (index: number) => {
//         setCurrentIndex(index);
//     };

//     // --- Autoplay Effect ---
//     useEffect(() => {
//         if (autoplayInterval > 0) {
//             const timer = setInterval(goToNext, autoplayInterval);
//             return () => clearInterval(timer);
//         }
//     }, [autoplayInterval, goToNext]);


//     const getContentAlignmentClasses = (alignment: SlideData['alignment']) => {

//         switch (alignment) {
//             case 'start':
//             case 'center':
//             case 'end':

//                 return 'sm:flex sm:items-center sm:justify-start sm:text-left';
//             default:
//                 // Fallback to center/center
//                 return 'sm:flex sm:items-center sm:justify-center sm:text-center';
//         }
//     };

//     const currentSlide = slides[currentIndex];

//     return (
//         <div className="relative w-full overflow-hidden primaryBg  md:h-screen h-[550px]">
//             <AnimatePresence initial={false}>
//                 <motion.div
//                     key={currentSlide.id}
//                     className="absolute inset-0"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {/* Background Image (Mobile vs Desktop) */}
//                     <div className="relative w-full h-full">
//                         {/* Desktop Image */}
//                         <Image
//                             src={currentSlide.imageSrc}
//                             alt={`${currentSlide.headline} desktop image`}
//                             fill
//                             priority={currentIndex === 0} // Prioritize first image load
//                             sizes="100vw"
//                             // Use Tailwind's 'hidden md:block' to select the large image for desktop
//                             className="hidden object-cover md:block"
//                         />
//                         {/* Mobile Image */}
//                         <Image
//                             src={currentSlide.mobileImageSrc}
//                             alt={`${currentSlide.headline} mobile image`}
//                             fill
//                             sizes="100vw"
//                             // Use Tailwind's 'md:hidden' to select the smaller image for mobile
//                             className="object-cover md:hidden"
//                         />
//                         {/* Overlay for readability */}
//                         <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
//                     </div>


//                     <div className="absolute inset-0 flex items-center justify-center text-white">
//                         <div
//                             className={`w-full templateContainer
//         ${getContentAlignmentClasses(currentSlide.alignment)}`}
//                         >
//                             {/* Animation for Tagline */}


//                             <div className='block max-w-xl'>
//                                 {/* Animation for Headline */}
//                                 <motion.h1
//                                     initial={{ opacity: 0, y: 10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.4 }}
//                                     className="text-3xl playfairDisplayHeading beigeText sm:text-5xl font-extrabold leading-tight"
//                                 >
//                                     {currentSlide.headline}
//                                     <br />
//                                     <span className="text-xl loraParagraph beigeText sm:text-2xl font-semibold">
//                                         {currentSlide.subHeadline}
//                                     </span>
//                                 </motion.h1>


//                                 {/* Animation for Button */}
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: 0.6 }}
//                                     className="mt-8"
//                                 >
//                                     <a
//                                         href={currentSlide.buttonLink}
//                                         // Styling matches the image: white outline, white text, black text on hover
//                                         className="inline-block px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300"
//                                     >
//                                         {currentSlide.buttonText}
//                                     </a>
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         aria-label={`Go to item ${index + 1}`}
//                         onClick={() => goToSlide(index)}
//                         className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${currentIndex === index ? 'bg-white' : 'bg-transparent hover:bg-white/50'
//                             }`}
//                     />
//                 ))}
//             </div>


//         </div>
//     );
// };

// export default Hero;



'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definition Moved Inline to Solve the Module Error ---
export interface SlideData {
    id: number;
    imageSrc: string;
    mobileImageSrc: string;
    tag: string;
    headline: string;
    subHeadline: string;
    buttonText: string;
    buttonLink: string;
    alignment: 'start' | 'center' | 'end';
}

// --- Data for the Slideshow (Using URLs from the provided HTML) ---
const SLIDE_DATA: SlideData[] = [
    {
        id: 1,


        // Original: //dxbperfume.co.uk/cdn/shop/files/ec7b1ef1682a45b0bcfe9c1fbc9b1d31.webp?v=1758236391&width=4268
        imageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
        // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/4_A.jpg?v=1758236040&width=1000
        mobileImageSrc: '/imageTemp2/ChatGPT Image Oct 25, 2025, 03_44_23 PM.png',
        tag: 'New Oud Elixir Has Arrived.',
        headline: 'The Soul of the East Captured in Every Drop',
        subHeadline: 'Pure. Royal. Eternal',
        buttonText: 'EXPLORE OUR COLLECTION',
        buttonLink: '/collection',
        alignment: 'end', // Content aligned bottom-left
    },
    {
        id: 2,
        // Original: //dxbperfume.co.uk/cdn/shop/files/6b5aaaf93ee84b05868a537ffe1458ec_1.webp?v=1760523111&width=2624
        imageSrc: '/imageTemp2/WhatsAddsd.jpg',
        // Original Mobile: //dxbperfume.co.uk/cdn/shop/files/ab617d0361384fe782976bea6cf11b64_1.webp?v=1760522309&width=1000
        mobileImageSrc: '/imageTemp2/WhatsAddsd.jpg',
        tag: 'New Release',
        // headline: 'Feel the Tropics.',
        // subHeadline: 'Anywhere. Anytime.',
        // buttonText: 'Discover Now',
        headline: 'The Soul of the East Captured in Every Drop',
        subHeadline: 'Pure. Royal. Eternal',
        buttonText: 'EXPLORE OUR COLLECTION',
        buttonLink: '/collection',
        alignment: 'center', // Content aligned center-left
    },
];

type SlideshowCarouselProps = {
    slides?: SlideData[];
    autoplayInterval?: number; // Time in milliseconds for auto-advance
};

const Hero: React.FC<SlideshowCarouselProps> = ({
    slides = SLIDE_DATA,
    autoplayInterval = 5000,
}) => {


    const [currentIndex, setCurrentIndex] = useState(1);

    // --- Functions to change slides ---

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // --- Autoplay Effect ---
    useEffect(() => {
        if (autoplayInterval > 0) {
            const timer = setInterval(goToNext, autoplayInterval);
            return () => clearInterval(timer);
        }
    }, [autoplayInterval, goToNext]);


    const getContentAlignmentClasses = (alignment: SlideData['alignment']) => {

        switch (alignment) {
            case 'start':
            case 'center':
            case 'end':

                return 'sm:flex sm:items-center sm:justify-start sm:text-left';
            default:
                // Fallback to center/center
                return 'sm:flex sm:items-center sm:justify-center sm:text-center';
        }
    };

    const currentSlide = slides[currentIndex];

    return (
        <div className="relative w-full overflow-hidden primaryBg  md:h-screen h-[550px]">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Background Image (Mobile vs Desktop) */}
                    <div className="relative w-full h-full">
                        {/* Desktop Image */}
                        <Image
                            src={currentSlide.imageSrc}
                            alt={`${currentSlide.headline} desktop image`}
                            fill
                            priority={currentIndex === 0} // Prioritize first image load
                            sizes="100vw"
                            // Use Tailwind's 'hidden md:block' to select the large image for desktop
                            className="hidden object-cover md:block"
                        />
                        {/* Mobile Image */}
                        <Image
                            src={currentSlide.mobileImageSrc}
                            alt={`${currentSlide.headline} mobile image`}
                            fill
                            sizes="100vw"
                            // Use Tailwind's 'md:hidden' to select the smaller image for mobile
                            className="object-cover md:hidden"
                        />
                        {/* Overlay for readability */}
                        <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
                    </div>


                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div
                            className={`w-full templateContainer
        ${getContentAlignmentClasses(currentSlide.alignment)}`}
                        >
                            {/* Animation for Tagline */}


                            <div className='block max-w-xl'>
                                {/* Animation for Headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-3xl playfairDisplayHeading beigeText sm:text-5xl font-extrabold leading-tight"
                                >
                                    {currentSlide.headline}
                                    <br />
                                    <span className="text-xl loraParagraph beigeText sm:text-2xl font-semibold">
                                        {currentSlide.subHeadline}
                                    </span>
                                </motion.h1>


                                {/* Animation for Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="mt-8"
                                >
                                    <a
                                        href={currentSlide.buttonLink}
                                        // Styling matches the image: white outline, white text, black text on hover
                                        className="inline-block px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300"
                                    >
                                        {currentSlide.buttonText}
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            {/* Navigation Arrows */}
            <div className="absolute bottom-6 right-6 z-10 flex space-x-3">
                {/* Previous Button */}
                <button
                    onClick={() =>
                        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
                    }
                    aria-label="Previous Slide"
                    className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#8b5e3c]/50 hover:bg-black/70 text-white rounded-full shadow-lg transition-colors duration-300"
                >
                    &#10094; {/* Left arrow */}
                </button>

                {/* Next Button */}
                <button
                    onClick={() => goToNext()}
                    aria-label="Next Slide"
                    className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#8b5e3c]/50 hover:bg-black/70 text-white rounded-full shadow-lg transition-colors duration-300"
                >
                    &#10095; {/* Right arrow */}
                </button>
            </div>



        </div>
    );
};

export default Hero;