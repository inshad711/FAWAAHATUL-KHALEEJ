
// "use client";
// // MotorSection.tsx
// import React from 'react';
// import { ArrowRight } from 'lucide-react'; // You'll need to install 'lucide-react' for the icon

// // Install this package: npm install lucide-react

// const Describe: React.FC = () => {
//     return (
//         // Outer section with a dark background and full-width
//         <section className="bg-black text-white min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-0">

//             {/* Container for content and the background image/scene */}
//             <div className="relative w-full max-w-7xl mx-auto h-[70vh] lg:h-[80vh] flex items-end">

//                 {/* Background Image/Scene Wrapper */}
//                 <div
//                     className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
//                     style={{
//                         // This is a placeholder for your specific image URL
//                         backgroundImage: "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.23_8dcb39a5.jpg",
//                         // The image in the example looks like a showroom or a dark interior with cars
//                         backgroundPosition: 'center bottom',
//                     }}
//                 >
//                     {/* Subtle bottom gradient overlay for better text contrast */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
//                 </div>

//                 {/* Content Container - z-index ensures it's above the image */}
//                 <div className="relative z-10 p-6 md:p-12 lg:p-0 mb-10 lg:mb-20 w-full max-w-2xl">

//                     {/* Subtitle with Dot */}
//                     <div className="flex items-center space-x-3 mb-4">
//                         <span className="w-2 h-2 bg-white rounded-full"></span>
//                         <p className="text-lg font-light tracking-wider">Motor</p>
//                     </div>

//                     {/* Main Title */}
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
//                         To promote a sustainable future through innovation
//                     </h1>

//                     {/* Paragraph Description */}
//                     <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-lg">
//                         Our commitment is to advance sustainable transportation pioneering technologies. Focus on minimizing impact, maximizing efficiency, and delivering experiences customers.
//                     </p>

//                     {/* Call to Action Button */}
//                     <button className="flex items-center justify-center space-x-3 py-3 px-8 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300">
//                         <span>Join us</span>
//                         <ArrowRight className="w-5 h-5" />
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Describe;


// MotorSection.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react'; // You'll need to install 'lucide-react' for the icon

// Install this package: npm install lucide-react

const MotorSection: React.FC = () => {
    return (
        // Outer section with a dark background and full-width
        <section className="bg-black text-white min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-0">

            {/* Container for content and the background image/scene */}
            <div className="relative w-full max-w-7xl mx-auto h-[70vh] lg:h-[80vh] flex items-end">

                {/* Background Image/Scene Wrapper */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                    style={{
                        // Placeholder for your specific image URL (e.g., a dark showroom with cars)
                        backgroundImage: "url('https://framerusercontent.com/images/4be4S5coR2QthuRAfsb7USMjRZ0.png')",
                        backgroundPosition: 'center bottom',
                    }}
                >
                    {/* Subtle bottom gradient overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                {/* Content Container - z-index ensures it's above the image */}
                <div className="relative z-10 p-6 md:p-12 lg:p-0 mb-10 lg:mb-20 w-full max-w-2xl">

                    {/* Subtitle with Dot */}
                    <div className="flex items-center space-x-3 mb-4">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <p className="text-lg font-light tracking-wider">Motor</p>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                        To promote a sustainable future through innovation
                    </h1>

                    {/* Paragraph Description */}
                    <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-lg">
                        Our commitment is to advance sustainable transportation pioneering technologies. Focus on minimizing impact, maximizing efficiency, and delivering experiences customers.
                    </p>

                    {/* Call to Action Button */}
                    <button className="flex items-center justify-center space-x-3 py-3 px-8 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                        <span>Join us</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MotorSection;