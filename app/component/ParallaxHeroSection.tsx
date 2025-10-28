

// import React from 'react';

// // Reusable component for the statistics cards
// interface StatCardProps {
//     value: string;
//     label: string;
// }

// const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
//     <div className="flex flex-col items-center justify-center p-4 md:px-12 flex-1 min-w-[150px]">
//         {/* Value (A+, 2000+, 12+) - Large and bold */}
//         {/* I've added a custom style here to ensure the text shadow works correctly */}
//         <div
//             className="text-6xl md:text-7xl font-extrabold mb-2 text-white"
//             style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
//         >
//             {value}
//         </div>
//         {/* Label (Standards, Successful Operations, Experience) - Teal color for contrast */}
//         <div className="text-base md:text-lg font-medium tracking-wider uppercase text-teal-400 text-center">
//             {label}
//         </div>
//     </div>
// );

// // Main component with the parallax effect
// const ParallaxNumbersSection: React.FC = () => {
//     // IMPORTANT: Updated the image path to use the direct URL for better compatibility
//     // in sandboxed environments like this Canvas.
//     const imageFetchId = "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg";

//     const parallaxStyle: React.CSSProperties = {
//         backgroundImage: `url('${imageFetchId}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed', // This property enables the parallax scroll
//     };

//     return (
//         // Outer container with the parallax style applied
//         <section
//             className="relative min-h-[500px] flex items-center justify-center py-20 overflow-hidden shadow-2xl"
//             style={parallaxStyle}
//             aria-label="Clinic Statistics and Promise"
//         >
//             {/* Dark Overlay for better text readability and contrast against the image */}
//             {/* Increased overlay opacity slightly for even better text contrast */}
//             <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

//             {/* Content Container - centered and responsive */}
//             <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

//                 {/* Main Heading */}
//                 <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-16 md:mb-20 tracking-tight leading-tight">
//                     We promise complete relief
//                 </h2>

//                 {/* Statistics Cards Container */}
//                 <div className="flex flex-col md:flex-row justify-center items-stretch md:divide-x-2 md:divide-teal-500/30 divide-opacity-50 space-y-8 md:space-y-0">

//                     <StatCard value="A+" label="Standards" />
//                     <StatCard value="2000+" label="Successful Operations" />
//                     <StatCard value="12+" label="Years of Experience" />

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ParallaxNumbersSection;



// import React from 'react';

// // Reusable component for the statistics cards
// interface StatCardProps {
//     value: string;
//     label: string;
// }

// const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
//     <div className="flex flex-col items-center justify-center p-4 md:px-12 flex-1 min-w-[150px]">
//         {/* Value (A+, 2000+, 12+) - Large and bold */}
//         {/* I've added a custom style here to ensure the text shadow works correctly */}
//         <div
//             className="text-6xl md:text-7xl  mb-2 text-white"
//             style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
//         >
//             {value}
//         </div>
//         {/* Label (Standards, Successful Operations, Experience) - Teal color for contrast */}
//         <div className="text-base md:text-lg font-medium tracking-wider uppercase text-teal-400 text-center">
//             {label}
//         </div>
//     </div>
// );

// // Main component with the parallax effect
// const ParallaxNumbersSection: React.FC = () => {
//     // IMPORTANT: Updated the image path to use the direct URL for better compatibility
//     // in sandboxed environments like this Canvas.
//     const imageFetchId = "/imageTemp/a-perfume-bottle-sits-on-a-tray-with-stacked-dark-towels-and-a-dried-red-rose-illuminated-by-a-flickering-candle-photo.jpg";

//     const parallaxStyle: React.CSSProperties = {
//         backgroundImage: `url('${imageFetchId}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed', // This property enables the parallax scroll
//     };

//     return (
//         // Outer container with the parallax style applied
//         <section
//             className="relative h-screen flex items-center justify-center py-20 overflow-hidden shadow-2xl"
//             style={parallaxStyle}
//             aria-label="Clinic Statistics and Promise"
//         >

//             {/* Black Gradient Overlay at the bottom */}
//             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

//             {/* Content Container - centered and responsive */}
//             <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

//                 {/* Main Heading */}
//                 <h2 className="text-4xl sm:text-5xl md:text-6xl  text-white text-center mb-16 md:mb-20 tracking-tight leading-tight">
//                     We promise complete relief
//                 </h2>

//                 {/* Statistics Cards Container */}
//                 <div className="flex flex-col md:flex-row justify-center items-stretch md:divide-x-2 md:divide-teal-500/30 divide-opacity-50 space-y-8 md:space-y-0">

//                     <StatCard value="A+" label="Standards" />
//                     <StatCard value="2000+" label="Successful Operations" />
//                     <StatCard value="12+" label="Years of Experience" />

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ParallaxNumbersSection;

/////////////////////////////////////////////////////////

// "use client";
// import React from 'react';

// // Reusable component for the statistics cards
// interface StatCardProps {
//     value: string;
//     label: string;
// }

// const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
//     <div className="flex flex-col cormorantGaramondSubheading items-center justify-center p-4 md:px-12 flex-1 min-w-[150px]">
//         <div
//             className="text-6xl md:text-7xl mb-2 text-white"
//             style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
//         >
//             {value}
//         </div>
//         <div className="text-base md:text-lg font-medium tracking-wider uppercase beigeText text-center">
//             {label}
//         </div>
//     </div>
// );

// // Main component with the parallax effect
// const ParallaxHeroSection: React.FC = () => {
//     const imageFetchId = "/imageTemp/a-perfume-bottle-sits-on-a-tray-with-stacked-dark-towels-and-a-dried-red-rose-illuminated-by-a-flickering-candle-photo.jpg";

//     const parallaxStyle: React.CSSProperties = {
//         backgroundImage: `url('${imageFetchId}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//     };

//     return (
//         <section
//             className="relative max:h-screen flex items-center justify-center py-20 overflow-hidden"
//             style={parallaxStyle}
//             aria-label="Perfume Statistics and Promise"
//         >
//             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

//             <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

//                 {/* Main Heading */}
//                 <h2 className="text-xl max-w-2xl cormorantGaramondSubheading mx-auto sm:text-2xl md:text-3xl  text-white text-center mb-6 md:mb-8 tracking-tight leading-tight">
//                     What makes Fawaahatul Khaleej truly distinguished is our unwavering commitment to excellence
//                 </h2>



//                 {/* Statistics Cards Container */}
//                 <div className="flex flex-col md:flex-row justify-center items-stretch md:divide-x-2 md:divide-teal-500/30 divide-opacity-50 space-y-8 md:space-y-0">

//                     <StatCard value="A+" label="Standards" />
//                     <StatCard value="2000+" label="Successful Operations" />
//                     <StatCard value="12+" label="Years of Experience" />

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ParallaxHeroSection;


// "use client";
// import React, { useEffect, useState } from 'react';

// interface StatCardProps {
//     value: string;
//     label: string;
// }

// const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
//     <div className="flex flex-col cormorantGaramondSubheading items-center justify-center p-4 md:px-12 flex-1 min-w-[150px]">
//         <div
//             className="text-6xl md:text-7xl mb-2 text-white"
//             style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
//         >
//             {value}
//         </div>
//         <div className="text-base md:text-lg font-medium tracking-wider uppercase beigeText text-center">
//             {label}
//         </div>
//     </div>
// );

// const ParallaxHeroSection: React.FC = () => {
//     const imageFetchId = "/imageTemp/a-perfume-bottle-sits-on-a-tray-with-stacked-dark-towels-and-a-dried-red-rose-illuminated-by-a-flickering-candle-photo.jpg";

//     const [isDesktop, setIsDesktop] = useState(false);

//     useEffect(() => {
//         const mediaQuery = window.matchMedia('(min-width: 768px)'); // md breakpoint in Tailwind
//         setIsDesktop(mediaQuery.matches);

//         const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
//         mediaQuery.addEventListener('change', handler);

//         return () => mediaQuery.removeEventListener('change', handler);
//     }, []);

//     const parallaxStyle: React.CSSProperties = {
//         backgroundImage: `url('${imageFetchId}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: isDesktop ? 'fixed' : 'scroll', // fixed only on desktop
//     };

//     return (
//         <section
//             className="relative max:h-screen flex items-center justify-center py-20 overflow-hidden"
//             style={parallaxStyle}
//             aria-label="Perfume Statistics and Promise"
//         >
//             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

//             <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
//                 <h2 className="text-xl max-w-2xl cormorantGaramondSubheading mx-auto sm:text-2xl md:text-3xl text-white text-center mb-6 md:mb-8 tracking-tight leading-tight">
//                     What makes Fawaahatul Khaleej truly distinguished is our unwavering commitment to excellence
//                 </h2>

//                 <div className="flex flex-col md:flex-row justify-center items-stretch md:divide-x-2 md:divide-teal-500/30 divide-opacity-50 space-y-8 md:space-y-0">
//                     <StatCard value="A+" label="Standards" />
//                     <StatCard value="2000+" label="Successful Operations" />
//                     <StatCard value="12+" label="Years of Experience" />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ParallaxHeroSection;


"use client";
import React from 'react';

interface StatCardProps {
    value: string;
    label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
    <div className="flex flex-col cormorantGaramondSubheading items-center justify-center p-4 md:px-12 flex-1 min-w-[150px]">
        <div
            className="text-6xl md:text-7xl mb-2 text-white"
            style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
        >
            {value}
        </div>
        <div className="text-base md:text-lg font-medium tracking-wider uppercase beigeText text-center">
            {label}
        </div>
    </div>
);

const ParallaxHeroSection: React.FC = () => {
    const imageUrl = "/imageTemp/a-perfume-bottle-sits-on-a-tray-with-stacked-dark-towels-and-a-dried-red-rose-illuminated-by-a-flickering-candle-photo.jpg";

    return (
        <section
            className={`relative max-h-screen flex items-center justify-center py-20 overflow-hidden
                  bg-center bg-cover
                  md:bg-fixed`}
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-label="Perfume Statistics and Promise"
        >
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
                <h2 className="text-xl max-w-2xl cormorantGaramondSubheading mx-auto sm:text-2xl md:text-3xl text-white text-center mb-6 md:mb-8 tracking-tight leading-tight">
                    What makes Fawaahatul Khaleej truly distinguished is our unwavering commitment to excellence
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-stretch md:divide-x-2 md:divide-teal-500/30 divide-opacity-50 space-y-8 md:space-y-0">
                    <StatCard value="A+" label="Standards" />
                    <StatCard value="2000+" label="Successful Operations" />
                    <StatCard value="12+" label="Years of Experience" />
                </div>
            </div>
        </section>
    );
};

export default ParallaxHeroSection;
