// "use client";
// // components/ThemeFeatures.tsx

// import React from 'react';
// import { ChevronDown, Zap, MousePointerSquare, MonitorSmartphone, Wand2, RefreshCw } from 'lucide-react';

// // Define the structure for a feature item
// interface Feature {
//   title: string;
//   description: string;
//   Icon: React.ElementType;
//   delay: number; // For simple staggered animation delay
// }

// // Data for the theme features
// const themeFeatures: Feature[] = [
//   {
//     title: 'Premium Plugins Included',
//     description: 'Plugins we give VERES comes packed with all these major Plugins free of cost and totally compatible.',
//     Icon: Zap, // Using an appropriate icon from lucide-react
//     delay: 400,
//   },
//   {
//     title: 'Great Performance',
//     description: 'VERES is made to load fast is compatible with the most well know optimizer plugins.',
//     Icon: ChevronDown, // This icon choice mimics the speed gauge in the image
//     delay: 500,
//   },
//   {
//     title: 'One Click Demo Importer',
//     description: 'All contents are included in the package and can be imported with just one click.',
//     Icon: MousePointerSquare,
//     delay: 600,
//   },
//   {
//     title: 'Fully Responsive',
//     description: 'VERES is made to load fast is compatible with the most well know optimizer plugins.',
//     Icon: MonitorSmartphone,
//     delay: 600, // Matching the delay for this row's first element
//   },
//   {
//     title: 'Beautiful Animations',
//     description: 'From loading animations to toggles and modal windows to smooth scrolling navigation, VERES offers your visitor a clean experience.',
//     Icon: Wand2,
//     delay: 700,
//   },
//   {
//     title: 'Lifetime Updates',
//     description: 'With VERES, you will get lifetime free updates. Updates may contain various theme improvements, but fixes and security updates.',
//     Icon: RefreshCw,
//     delay: 800,
//   },
// ];

// // Component to render a single feature card
// const FeatureCard: React.FC<Feature> = ({ title, description, Icon, delay }) => {
//   // Simple inline style for a basic 'fade-in-up' effect to mimic the original's 'lakitShortFadeInUp'
//   const style = {
//     animationDelay: `${delay}ms`,
//   };

//   return (
//     <div
//       className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start transition-all duration-300 hover:shadow-2xl opacity-0 animate-fadeInUp"
//       style={style}
//     >
//       <div className="p-4 border-2 border-orange-400 rounded-full mb-4">
//         {/* The icon's color matches the image's style (a light orange/coral) */}
//         <Icon className="w-10 h-10 text-orange-400" />
//       </div>
//       <h4 className="text-xl font-semibold text-gray-800 mb-2">
//         {title}
//       </h4>
//       <p className="text-gray-600 text-sm">
//         {description}
//       </p>
//     </div>
//   );
// };

// // Main Theme Features Component
// const ThemeFeatures: React.FC = () => {
//   return (
//     // The main container with the background color matching the image
//     <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f2c6b9' }}>
//       <div className="max-w-7xl mx-auto">
//         {/* Theme Features Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl sm:text-5xl font-serif font-light text-gray-800 mb-4">
//             Theme Features
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             VERES theme comes packed with all the features you need to get your site up and running quickly and with ease.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {themeFeatures.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </div>
//       {/* Tailwind CSS keyframes for the animation effect, typically in your global CSS file */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.7s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ThemeFeatures;


// "use client";

// // components/ThemeFeatures.tsx

// import React from "react";
// import {
//   PlugZap,
//   Gauge,
//   MousePointerSquare,
//   MonitorSmartphone,
//   Wand2,
//   RefreshCw,
// } from "lucide-react";

// // Define the structure for a feature item
// interface Feature {
//   title: string;
//   description: string;
//   Icon: React.ElementType;
//   delay: number; // For simple staggered animation delay
// }

// // Data for the theme features
// const themeFeatures: Feature[] = [
//   {
//     title: "Premium Plugins Included",
//     description:
//       "VERES comes packed with all these major plugins free of cost and totally compatible.",
//     Icon: PlugZap,
//     delay: 400,
//   },
//   {
//     title: "Great Performance",
//     description:
//       "VERES is optimized for fast loading and works seamlessly with popular optimization plugins.",
//     Icon: Gauge,
//     delay: 500,
//   },
//   {
//     title: "One Click Demo Importer",
//     description:
//       "Import all demo content instantly with a single click — fast, simple, and hassle-free.",
//     Icon: MousePointerSquare,
//     delay: 600,
//   },
//   {
//     title: "Fully Responsive",
//     description:
//       "Your website will look stunning on every device — from large monitors to mobile screens.",
//     Icon: MonitorSmartphone,
//     delay: 600,
//   },
//   {
//     title: "Beautiful Animations",
//     description:
//       "Smooth transitions, scroll effects, and subtle motion bring your site to life effortlessly.",
//     Icon: Wand2,
//     delay: 700,
//   },
//   {
//     title: "Lifetime Updates",
//     description:
//       "Enjoy free lifetime updates that include feature enhancements and critical security fixes.",
//     Icon: RefreshCw,
//     delay: 800,
//   },
// ];

// // Component to render a single feature card
// const FeatureCard: React.FC<Feature> = ({ title, description, Icon, delay }) => {
//   const style = {
//     animationDelay: `${delay}ms`,
//   };

//   return (
//     <div
//       className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start 
//                  transition-all duration-300 hover:shadow-2xl opacity-0 animate-fadeInUp 
//                  hover:-translate-y-2"
//       style={style}
//     >
//       <div className="p-4 border-2 border-orange-400 rounded-full mb-4">
//         <Icon className="w-10 h-10 text-orange-400" />
//       </div>
//       <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
//       <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//     </div>
//   );
// };

// // Main Theme Features Component
// const ThemeFeatures: React.FC = () => {
//   return (
//     <section
//       className="py-20 px-4 sm:px-6 lg:px-8"
//       style={{ backgroundColor: "#f2c6b9" }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl sm:text-5xl font-serif font-light text-gray-800 mb-4">
//             Theme Features
//           </h2>
//           <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//             VERES theme includes everything you need to build a beautiful,
//             high-performance website — all in one place.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {themeFeatures.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </div>

//       {/* Animation styles */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ThemeFeatures;


// "use client";

// // components/ThemeFeatures.tsx

// import React from "react";
// import {
//   PlugZap,
//   Gauge,
//   MousePointerSquareDashed,
//   MonitorSmartphone,
//   Wand2,
//   RefreshCw,
// } from "lucide-react";

// // Define the structure for a feature item
// interface Feature {
//   title: string;
//   description: string;
//   Icon: React.ElementType;
//   delay: number; // For simple staggered animation delay
// }

// // Data for the theme features
// const themeFeatures: Feature[] = [
//   {
//     title: "Premium Plugins Included",
//     description:
//       "VERES comes packed with all these major plugins free of cost and totally compatible.",
//     Icon: PlugZap,
//     delay: 400,
//   },
//   {
//     title: "Great Performance",
//     description:
//       "VERES is optimized for fast loading and works seamlessly with popular optimization plugins.",
//     Icon: Gauge,
//     delay: 500,
//   },
//   {
//     title: "One Click Demo Importer",
//     description:
//       "Import all demo content instantly with a single click — fast, simple, and hassle-free.",
//     Icon: MousePointerSquareDashed, // ✅ fixed icon name
//     delay: 600,
//   },
//   {
//     title: "Fully Responsive",
//     description:
//       "Your website will look stunning on every device — from large monitors to mobile screens.",
//     Icon: MonitorSmartphone,
//     delay: 600,
//   },
//   {
//     title: "Beautiful Animations",
//     description:
//       "Smooth transitions, scroll effects, and subtle motion bring your site to life effortlessly.",
//     Icon: Wand2,
//     delay: 700,
//   },
//   {
//     title: "Lifetime Updates",
//     description:
//       "Enjoy free lifetime updates that include feature enhancements and critical security fixes.",
//     Icon: RefreshCw,
//     delay: 800,
//   },
// ];

// // Component to render a single feature card
// const FeatureCard: React.FC<Feature> = ({ title, description, Icon, delay }) => {
//   const style = {
//     animationDelay: `${delay}ms`,
//   };

//   return (
//     <div
//       className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start 
//                  transition-all duration-300 hover:shadow-2xl opacity-0 animate-fadeInUp 
//                  hover:-translate-y-2"
//       style={style}
//     >
//       <div className="p-4 border-2 border-orange-400 rounded-full mb-4">
//         <Icon className="w-10 h-10 text-orange-400" />
//       </div>
//       <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
//       <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//     </div>
//   );
// };

// // Main Theme Features Component
// const ThemeFeatures: React.FC = () => {
//   return (
//     <section
//       className="py-20 px-4 sm:px-6 lg:px-8"
//       style={{ backgroundColor: "#f2c6b9" }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl sm:text-5xl font-serif font-light text-gray-800 mb-4">
//             Theme Features
//           </h2>
//           <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//             VERES theme includes everything you need to build a beautiful,
//             high-performance website — all in one place.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {themeFeatures.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </div>

//       {/* Animation styles */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ThemeFeatures;


// "use client";



// import React from "react";
// import {
//   PlugZap,
//   Gauge,
//   MousePointerSquareDashed,
//   MonitorSmartphone,
//   Wand2,
//   RefreshCw,
// } from "lucide-react";

// // Define the structure for a feature item
// interface Feature {
//   title: string;
//   description: string;
//   Icon: React.ElementType;
//   delay: number;
// }

// // Data for the theme features
// const themeFeatures: Feature[] = [
//   {
//     title: "Premium Plugins Included",
//     description:
//       "VERES comes packed with all these major plugins free of cost and totally compatible.",
//     Icon: PlugZap,
//     delay: 400,
//   },
//   {
//     title: "Great Performance",
//     description:
//       "VERES is optimized for fast loading and works seamlessly with popular optimization plugins.",
//     Icon: Gauge,
//     delay: 500,
//   },
//   {
//     title: "One Click Demo Importer",
//     description:
//       "Import all demo content instantly with a single click — fast, simple, and hassle-free.",
//     Icon: MousePointerSquareDashed,
//     delay: 600,
//   },
//   {
//     title: "Fully Responsive",
//     description:
//       "Your website will look stunning on every device — from large monitors to mobile screens.",
//     Icon: MonitorSmartphone,
//     delay: 600,
//   },
//   {
//     title: "Beautiful Animations",
//     description:
//       "Smooth transitions, scroll effects, and subtle motion bring your site to life effortlessly.",
//     Icon: Wand2,
//     delay: 700,
//   },
//   {
//     title: "Lifetime Updates",
//     description:
//       "Enjoy free lifetime updates that include feature enhancements and critical security fixes.",
//     Icon: RefreshCw,
//     delay: 800,
//   },
// ];

// // Component to render a single feature card
// const FeatureCard: React.FC<Feature> = ({ title, description, Icon }) => {
//   return (
//     <div
//       className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col items-start 
//                  transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//     >
//       <div className="p-4 border-2 border-orange-400 rounded-full mb-4">
//         <Icon className="w-10 h-10 text-orange-400" />
//       </div>
//       <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
//       <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
//     </div>
//   );
// };

// // Main Theme Features Component
// const ThemeFeatures: React.FC = () => {
//   return (
//     <section
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl sm:text-5xl font-serif font-light text-white mb-4">
//             Theme Features
//           </h2>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             VERES theme includes everything you need to build a beautiful,
//             high-performance website — all in one place.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {themeFeatures.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThemeFeatures;

//////////////////////////////////////////////

// "use client";

// import React from "react";
// import {
//   PlugZap,
//   Gauge,
//   MousePointerSquareDashed,
//   MonitorSmartphone,
//   Wand2,
//   RefreshCw,
// } from "lucide-react";

// // Define the structure for a feature item
// interface Feature {
//   title: string;
//   description: string;
//   Icon: React.ElementType;
//   delay: number;
// }

// // Luxury Oudh Features
// const luxuryFeatures: Feature[] = [
//   {
//     title: "Pure Oudh Essence",
//     description:
//       "Experience the timeless elegance of 100% pure Oudh, extracted and aged naturally for an unmatched aroma.",
//     Icon: Wand2,
//     delay: 400,
//   },
//   {
//     title: "Traditional Craftsmanship",
//     description:
//       "Every drop is carefully distilled using centuries-old techniques, preserving the heritage of true luxury.",
//     Icon: PlugZap,
//     delay: 500,
//   },
//   {
//     title: "Exclusive Collections",
//     description:
//       "Tailored for collectors and connoisseurs, our Oudh oils are a statement of prestige and refinement.",
//     Icon: MonitorSmartphone,
//     delay: 600,
//   },
//   {
//     title: "Ethically Sourced",
//     description:
//       "Only the rarest agarwood from trusted sources is selected, ensuring sustainability and authenticity.",
//     Icon: Gauge,
//     delay: 600,
//   },
//   {
//     title: "Luxury Packaging",
//     description:
//       "Every bottle is elegantly presented, making it perfect for gifting or personal indulgence.",
//     Icon: MousePointerSquareDashed,
//     delay: 700,
//   },
//   {
//     title: "Lifetime Quality Guarantee",
//     description:
//       "We promise pure, undiluted, and high-quality Oudh that evolves beautifully over time.",
//     Icon: RefreshCw,
//     delay: 800,
//   },
// ];

// // Component to render a single feature card
// const FeatureCard: React.FC<Feature> = ({ title, description, Icon }) => {
//   return (
//     <div
//       className="bg-[#1a0f0a]/30 p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col items-start 
//                  transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//     >
//       <div className="p-4 border-2 border-white rounded-full mb-4">
//         <Icon className="w-10 h-10 beigeText" />
//       </div>
//       <h4 className="text-xl loraParagraph font-semibold text-white mb-2">{title}</h4>
//       <p className="text-gray-300 montserratCTA text-sm leading-relaxed">{description}</p>
//     </div>
//   );
// };

// // Luxury Oudh Features Section
// const LuxuryFeatures: React.FC = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 primaryBg">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="text-center">

//             <h2 className="text-6xl md:text-9xl font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80">
//               Features
//             </h2>
//           </div>

//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {luxuryFeatures.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LuxuryFeatures;


"use client";

import React from "react";
import {
  PlugZap,
  Gauge,
  MousePointerSquareDashed,
  MonitorSmartphone,
  Wand2,
  RefreshCw,
} from "lucide-react";
import Aos from "./Aos"; // 👈 Import your AOS wrapper component

// Define the structure for a feature item
interface Feature {
  title: string;
  description: string;
  Icon: React.ElementType;
  delay: number;
}

// Luxury Oudh Features
const luxuryFeatures: Feature[] = [
  {
    title: "Pure Oudh Essence",
    description:
      "Experience the timeless elegance of 100% pure Oudh, extracted and aged naturally for an unmatched aroma.",
    Icon: Wand2,
    delay: 200,
  },
  {
    title: "Traditional Craftsmanship",
    description:
      "Every drop is carefully distilled using centuries-old techniques, preserving the heritage of true luxury.",
    Icon: PlugZap,
    delay: 300,
  },
  {
    title: "Exclusive Collections",
    description:
      "Tailored for collectors and connoisseurs, our Oudh oils are a statement of prestige and refinement.",
    Icon: MonitorSmartphone,
    delay: 400,
  },
  {
    title: "Ethically Sourced",
    description:
      "Only the rarest agarwood from trusted sources is selected, ensuring sustainability and authenticity.",
    Icon: Gauge,
    delay: 500,
  },
  {
    title: "Luxury Packaging",
    description:
      "Every bottle is elegantly presented, making it perfect for gifting or personal indulgence.",
    Icon: MousePointerSquareDashed,
    delay: 600,
  },
  {
    title: "Lifetime Quality Guarantee",
    description:
      "We promise pure, undiluted, and high-quality Oudh that evolves beautifully over time.",
    Icon: RefreshCw,
    delay: 700,
  },
];

// 🧩 Feature Card Component — Now includes its own AOS animation
const FeatureCard: React.FC<Feature> = ({ title, description, Icon, delay }) => {
  return (
    <Aos animation="fade-up" delay={delay} duration={900} offset={100}>
      <div
        className="bg-[#1a0f0a]/30 p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col items-start 
                   transition-all duration-300 "
      >
        <div className="p-4 border-2 border-white rounded-full mb-4">
          <Icon className="w-10 h-10 beigeText" />
        </div>
        <h4 className="text-xl loraParagraph font-semibold text-white mb-2">
          {title}
        </h4>
        <p className="text-gray-300 montserratCTA text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Aos>
  );
};

// 🏆 Luxury Oudh Features Section
const LuxuryFeatures: React.FC = () => {
  return (
    <section className="py-20  primaryBg">
      <div className="templateContainer">
        {/* Header with animation */}

        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-9xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4]/80">
            Features
          </h2>
        </div>


        {/* Animated Grid of Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {luxuryFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryFeatures;
