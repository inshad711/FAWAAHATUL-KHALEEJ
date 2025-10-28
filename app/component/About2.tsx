// export default function About2() {
//     return (
//         <section className="bg-customBrown text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
//             <div className="max-w-3xl md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//                 <h1 className="text-5xl font-serif mb-4">About Fawaahatul Khaleej</h1>
//                 <p className="text-lg font-sans leading-relaxed">
//                     In a world where true luxury has become rare. Fawaaharul Khaleej stands as a guardian of tradition—preserving the noble legacy of pure Oudh and authentic Dahn Ai Oudh.
//                 </p>
//             </div>
//             <div className="md:w-1/2 flex justify-center md:justify-end">
//                 {/* Replace with your image component or an actual image */}
//                 <div className="w-96 h-64 bg-gray-700 flex items-center justify-center rounded-lg overflow-hidden">
//                     {/* This is a placeholder. You would put your image here, e.g., <img src="/path/to/your/oudh-wood-image.jpg" alt="Oudh Wood" /> */}
//                     <span className="text-white text-xl">Oudh Wood Image</span>
//                 </div>
//             </div>
//         </section>
//     );
// }

// components/AboutSection.tsx


// import Image from 'next/image';
// import React from 'react';

// const About2: React.FC = () => {
//     return (

//         <div className='primaryBg'>
//             <section className=" templateContainer text-white py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center">
//                 <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//                     <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#E0C6A5]">
//                         About Fawaahatul <br /> Khaleej
//                     </h1>
//                     <p className="text-lg md:text-xl font-sans mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 text-[#D4C3B2]">
//                         In a world where true luxury has become rare, Fawaahatul Khaleej
//                         stands as a guardian of tradition—preserving the noble legacy of
//                         pure Oudh and authentic Dahn Al Oudh.
//                     </p>


//                     <button
//                         className={`
//                 px-8 py-3 
//                 uppercase text-sm tracking-widest font-medium 
//                 border-2 border-[#C9A05C] 
//                 hover:bg-[#C9A05C] hover:text-[#1a1510] 
//                 transition-colors duration-300 rounded-lg
//             `}
//                         aria-label="READ OUR STORY"
//                     >
//                         READ OUR STORY
//                     </button>
//                 </div>
//                 <div className="md:w-1/2 flex justify-center md:justify-end">

//                     <div className="relative overflow-hidden rounded-sm shadow-2xl w-full h-full">
//                         <Image
//                             src="/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.23_8dcb39a5.jpg"
//                             alt="image"
//                             width={600}
//                             height={600}
//                             className="object-cover w-full h-full"
//                         />

//                     </div>

//                 </div>
//             </section>
//         </div>
//     );
// };

// export default About2;

// "use client";

// import Image from 'next/image';
// import React from 'react';
// import { motion } from 'framer-motion';

// const About2: React.FC = () => {
//     // Framer Motion variants for the animation
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 delay: 0.2,
//                 staggerChildren: 0.2,
//             },
//         },
//     };

//     // Variants for the cover element to create a top-to-bottom reveal
//     const coverVariants = {
//         hidden: { x: '0%' }, // Cover starts fully down
//         visible: {
//             x: '100%', // Cover moves up to reveal the image
//             transition: {
//                 duration: 1.2,
//                 ease: [0.6, 0.01, -0.05, 0.9],
//             },
//         },
//     };

//     return (
//         <div className='primaryBg'>
//             <section className="templateContainer text-white py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center">
//                 <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//                     <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#E0C6A5]">
//                         About Fawaahatul <br /> Khaleej
//                     </h1>
//                     <p className="text-lg md:text-xl font-sans mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 text-[#D4C3B2]">
//                         In a world where true luxury has become rare, Fawaahatul Khaleej
//                         stands as a guardian of tradition—preserving the noble legacy of
//                         pure Oudh and authentic Dahn Al Oudh.
//                     </p>

//                     <button
//                         className={`
//                             px-8 py-3 
//                             uppercase text-sm tracking-widest font-medium 
//                             border-2 border-[#C9A05C] 
//                             hover:bg-[#C9A05C] hover:text-[#1a1510] 
//                             transition-colors duration-300 rounded-lg
//                         `}
//                         aria-label="READ OUR STORY"
//                     >
//                         READ OUR STORY
//                     </button>
//                 </div>

//                 <div className="md:w-1/2 flex justify-center md:justify-end">

//                     {/* Motion container for the Image Reveal Animation */}
//                     <motion.div
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.8 }}
//                         // **Corrected line** (removed the illegal comment)
//                         className="relative overflow-hidden rounded-sm shadow-2xl w-full max-w-lg h-96"
//                     >

//                         {/* The Image (hidden by the cover initially) */}
//                         <div className="absolute inset-0">
//                             <Image
//                                 src="/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.23_8dcb39a5.jpg"
//                                 alt="image"
//                                 layout="fill"
//                                 objectFit="cover"
//                                 priority
//                             />
//                         </div>

//                         {/* The covering element that slides up/away to reveal the image */}
//                         <motion.div
//                             variants={coverVariants}
//                             className="absolute inset-0 bg-gray-900 z-10"
//                         />
//                     </motion.div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default About2;


/////////////////////  /////////////////////


// "use client";

// import Image from 'next/image';
// import React from 'react';
// import { motion } from 'framer-motion';

// const About2: React.FC = () => {
//     // Framer Motion variants for the animation
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 delay: 0.2,
//                 staggerChildren: 0.2,
//             },
//         },
//     };

// const coverVariants = {
//     hidden: { x: '0%' },
//     visible: {
//         x: '100%',
//         transition: {
//             duration: 1.2,
//             ease: [0.6, 0.01, -0.05, 0.9],
//         },
//     },
// };

//     return (

//         <section className='primaryBg'>
//             {/* The layout container: centered, flexible, and responsive padding */}
//             <div className="templateContainer text-white py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">

//                 {/* Text Content Block */}
//                 <div className="md:w-1/2 playfairDisplayHeading text-center md:text-left">
//                     <h1 className="text-4xl md:text-5xl mb-4 text-[#E0C6A5]">
//                         About Fawaahatul <br /> Khaleej
//                     </h1>
//                     <p className="text-lg playfairDisplayHeading md:text-xl font-sans mb-8 leading-relaxed max-w-lg md:max-w-full mx-auto md:mx-0 text-[#D4C3B2]">
//                         In a world where true luxury has become rare, Fawaahatul Khaleej
//                         stands as a guardian of tradition—preserving the noble legacy of
//                         pure Oudh and authentic Dahn Al Oudh.
//                     </p>

//                     {/* Call-to-Action Button */}
//                     <a
//                         href="#story" // Changed button to <a> for better navigation/SEO practices
//                         className={`
//                            inline-block px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300
//                         `}
//                         aria-label="Read our story"
//                     >
//                         READ OUR STORY
//                     </a>
//                 </div>

//                 {/* Image Reveal Animation Block */}
//                 <div className="md:w-1/2 flex justify-center md:justify-end w-full">

//                     <motion.div
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, amount: 0.4 }} // Lowered amount for earlier visibility
//                         className="relative overflow-hidden rounded-sm shadow-2xl w-full max-w-lg aspect-[4/3] md:h-96" // Changed fixed 'h-96' to 'aspect-[4/3]' for better responsiveness, added md:h-96 fallback
//                     >

//                         {/* The Image (uses Next/Image with layout="fill" for responsiveness) */}
//                         <div className="absolute inset-0">
//                             <Image
//                                 src="/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.23_8dcb39a5.jpg"
//                                 alt="Authentic Oudh and Dahn Al Oudh products"
//                                 fill // Use 'fill' instead of 'layout="fill"' in Next.js 13+
//                                 style={{ objectFit: 'cover' }} // Equivalent of objectFit="cover"
//                                 priority
//                                 sizes="(max-width: 768px) 100vw, 50vw" // Good practice for performance
//                             />
//                         </div>

//                         {/* The covering element that slides away to reveal the image */}
//                         <motion.div
//                             variants={coverVariants}
//                             className="absolute inset-0 primaryBg z-10" // Using bg-gray-900 matching the section background
//                         />
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About2;


"use client";

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const About2: React.FC = () => {
    // Framer Motion variants for the animation
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.2,
            },
        },
    };


    const coverVariants: Variants = {
        hidden: { x: '0%' },
        visible: {
            x: '100%',
            transition: {
                duration: 1.2,
                ease: [0.6, 0.01, -0.05, 0.9],
            },
        },
    };


    return (
        <section className='primaryBg'>
            {/* Layout container: centered, flexible, and responsive */}
            <div className="templateContainer text-white pt-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content Block */}
                <div className="md:w-1/2 playfairDisplayHeading text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl mb-4 text-[#E0C6A5]">
                        About Fawaahatul <br /> Khaleej
                    </h1>
                    <p className="text-lg playfairDisplayHeading md:text-xl font-sans mb-8 leading-relaxed max-w-lg md:max-w-full mx-auto md:mx-0 text-[#D4C3B2]">
                        In a world where true luxury has become rare, Fawaahatul Khaleej
                        stands as a guardian of tradition—preserving the noble legacy of
                        pure Oudh and authentic Dahn Al Oudh.
                    </p>

                    {/* Call-to-Action Button */}
                    <a
                        href="/about"
                        className="inline-block px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300"
                        aria-label="Read our story"
                    >
                        READ OUR STORY
                    </a>
                </div>

                {/* Image Reveal Animation Block */}
                <div className="md:w-1/2 flex justify-center md:justify-end w-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        className="relative overflow-hidden rounded-sm shadow-2xl w-full max-w-lg aspect-[4/3] md:h-96"
                    >
                        {/* Image */}
                        <div className="absolute inset-0">
                            <Image
                                src="/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.23_8dcb39a5.jpg"
                                alt="Authentic Oudh and Dahn Al Oudh products"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Cover Animation */}
                        <motion.div
                            variants={coverVariants}
                            className="absolute inset-0 primaryBg z-10"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About2;
