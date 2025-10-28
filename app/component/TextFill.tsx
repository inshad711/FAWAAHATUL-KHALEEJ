
// "use client";
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// // The main component, required to be named App for single-file React Immersives
// const TextFill = () => {
//     const textLines = [
//         "Text Fill Effect",
//         "With Framer Motion",
//         "And Scroll Scrub",
//     ];

//     // Component for a single animating text line
//     const TextLine = ({ text }) => {
//         const ref = useRef(null);

//         // 1. Use useScroll to track scroll progress relative to this specific element (ref)
//         const { scrollYProgress } = useScroll({
//             target: ref,
//             // Define the scroll range, matching the original GSAP logic:
//             // Start: When the center of the element hits the bottom (100%) of the viewport
//             // End: When the center of the element hits the middle (50%) of the viewport
//             offset: ["center 100%", "center 50%"],
//         });

//         // 2. Use useTransform to map the 0-to-1 scroll progress to the background size
//         const backgroundSize = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//         // The component uses motion.h2 and applies the custom CSS class and the dynamic backgroundSize
//         return (
//             <motion.h2
//                 ref={ref}
//                 className="text-fill text-[5vw] leading-[1.2em] font-extrabold m-0 uppercase tracking-tight transition-none"
//                 style={{
//                     backgroundSize: backgroundSize, // Framer Motion automatically applies the MotionValue to the CSS property
//                 }}
//             >
//                 {text}
//             </motion.h2>
//         );
//     };

//     return (
//         // We include a <style> block for the necessary custom CSS properties
//         // that control the text stroke and clip effect, which cannot be done with pure Tailwind.
//         <>
//             <style>{`
//         /* Custom CSS variables for the effect */
//         :root {
//           --text-color: rgba(250, 250, 250, 0.1); /* Light transparent fill color (before animation) */
//           --text-stroke-color: #fafafa; /* Pure white stroke */
//           --text-fill-color: #fafafa; /* Pure white fill color (during animation) */
//         }

//         /* The core text-fill effect logic */
//         .text-fill {
//           /* 1. Define the background, which is the "fill" color */
//           background: linear-gradient(
//               to right,
//               var(--text-fill-color),
//               var(--text-fill-color)
//             )
//             no-repeat;

//           /* 2. Clip the background to the text shape */
//           -webkit-background-clip: text;
//           background-clip: text;

//           /* 3. Initial state: zero width background (0% fill) */
//           background-size: 0%; 

//           /* 4. Set the visible text color (the color outside the stroke/fill, usually transparent) */
//           color: var(--text-color);

//           /* 5. Apply the stroke effect */
//           -webkit-text-stroke: 0.05rem var(--text-stroke-color);
//           text-stroke: 0.05rem var(--text-stroke-color);
//         }
//       `}</style>

//             {/* Container for the effect, styled to allow deep scrolling */}
//             <div className="min-h-[220vh] flex items-center justify-center bg-gray-900 text-white font-['Inter']">
//                 <div className="container overflow-hidden p-8">
//                     {textLines.map((line, index) => (
//                         <TextLine key={index} text={line} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default TextFill;


// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TextFill = () => {
//     const textLines = ["Text Fill Effect ", "With Framer Motion", "And Scroll Scrub"];

//     const TextLine = ({ text }) => {
//         const ref = useRef(null);

//         // Track scroll progress relative to this element
//         const { scrollYProgress } = useScroll({
//             target: ref,
//             offset: ["center 100%", "center 50%"],
//         });

//         // Map scroll progress to background size (0% → 100%)
//         const backgroundSize = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//         return (
//             <motion.h2
//                 ref={ref}
//                 className="text-5xl leading-[1.2em] font-extrabold uppercase tracking-tight m-0
//                    text-transparent bg-clip-text bg-gradient-to-r from-white to-white
//                    bg-no-repeat bg-left-bottom text-stroke"
//                 style={{
//                     backgroundSize: backgroundSize,
//                 }}
//             >
//                 {text}
//             </motion.h2>
//         );
//     };

//     return (
//         <>
//             {/* Minimal CSS for text stroke */}
//             <style>{`
//         .text-stroke {
//           -webkit-text-stroke: 0.05rem white;
//         }
//       `}</style>

//             {/* Container */}
//             <div className="h-screen flex items-center justify-center bg-gray-900 font-sans">
//                 <div className="templateContainer overflow-hidden p-8">
//                     {textLines.map((line, index) => (
//                         <TextLine key={index} text={line} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default TextFill;





// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TextFill = () => {
//     const textLines = ["In a world where true luxury has become rare, Fawaahatul Khaleej stands as a guardian of tradition - preserving the noble legacy of pure Oudh and authentic Dahn Al Oudh in its most royal and untouched form. Born from a passion that spans generations, our journey began with a single belief: Oudh is not merely a fragrance - it is a heritage, a memory, a silent poetry carried in the air. From the mystical forests of Southeast Asia to the refined hands of our master distillers, every drop of our Dahn Al Oudh is patiently extracted, naturally aged, and carefully sealed, just as it was done in the courts of kings and scholars. Unlike commercial blends and synthetic imitations, our Oudh is 100% pure and undiluted - rich, deep, and evolving with grace upon every skin it touches. It opens with the intensity of ancient wood, settles with the warmth of ambered smoke, and lingers like a whispered prayer at dawn."];

//     const TextLine = ({ text }) => {
//         const ref = useRef(null);

//         // Track scroll progress relative to this element
//         const { scrollYProgress } = useScroll({
//             target: ref,
//             offset: ["center 100%", "center 50%"],
//         });

//         // Map scroll progress to background size (0% → 100%)
//         const backgroundSize = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//         return (
//             <motion.h2
//                 ref={ref}
//                 className="text-2xl leading-[1.2em] font-extrabold uppercase tracking-tight m-0
//                    text-transparent bg-clip-text bg-gradient-to-r from-white to-white
//                    bg-no-repeat bg-left-bottom text-stroke"
//                 style={{
//                     backgroundSize: backgroundSize,
//                 }}
//             >
//                 {text}
//             </motion.h2>
//         );
//     };

//     return (
//         <>
//             {/* Minimal CSS for text stroke */}
//             <style>{`
//         .text-stroke {
//           -webkit-text-stroke: 0.05rem white;
//         }
//       `}</style>

//             {/* Container */}
//             <div className="h-screen flex items-center justify-center bg-gray-900 font-sans">
//                 <div className="templateContainer overflow-hidden p-8">
//                     {textLines.map((line, index) => (
//                         <TextLine key={index} text={line} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default TextFill;


// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TextFill = () => {
//     // 1. Split the content into multiple lines (or sentences/phrases)
//     // Each string in this array will animate independently.
//     const textLines = [
//         "In a world where true luxury has become rare,",
//         "Fawaahatul Khaleej stands as a guardian of tradition -",
//         "preserving the noble legacy of pure Oudh and authentic Dahn Al Oudh",
//         "in its most royal and untouched form.",
//         "Born from a passion that spans generations,",
//         "our journey began with a single belief:",
//         "Oudh is not merely a fragrance - it is a heritage,",
//         "a memory, a silent poetry carried in the air.",
//         "From the mystical forests of Southeast Asia to the refined hands of our master distillers,",
//         "every drop of our Dahn Al Oudh is patiently extracted, naturally aged,",
//         "and carefully sealed, just as it was done in the courts of kings and scholars.",
//         "Unlike commercial blends and synthetic imitations,",
//         "our Oudh is 100% pure and undiluted -",
//         "rich, deep, and evolving with grace upon every skin it touches.",
//         "It opens with the intensity of ancient wood,",
//         "settles with the warmth of ambered smoke,",
//         "and lingers like a whispered prayer at dawn.",
//     ];

//     const TextLine = ({ text }) => {
//         const ref = useRef(null);

//         // 2. Each line now has its own independent scroll tracker
//         const { scrollYProgress } = useScroll({
//             target: ref,
//             // Start the animation when the element's bottom edge hits the viewport's bottom edge (100%)
//             // End the animation when the element's top edge hits the viewport's center (50%)
//             offset: ["end 100%", "start 50%"],
//         });

//         // Map scroll progress (0 → 1) to the background-size CSS property (0% → 100%)
//         const backgroundSize = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//         return (
//             <motion.h2
//                 ref={ref}
//                 // Reduced font size and line height to accommodate more lines
//                 className="text-xl md:text-2xl lg:text-3xl leading-[1.4em] font-extrabold uppercase tracking-tight m-0 text-center
//                     text-transparent bg-clip-text bg-gradient-to-r from-white to-white
//                     bg-no-repeat bg-left-bottom text-stroke whitespace-nowrap" // Use whitespace-nowrap to prevent wraps
//                 style={{
//                     backgroundSize: backgroundSize,
//                     paddingBottom: '0.1em', // Small padding for visual spacing between lines
//                 }}
//             >
//                 {text}
//             </motion.h2>
//         );
//     };

//     return (
//         <>
//             {/* Minimal CSS for text stroke */}
//             <style>{`
//                 .text-stroke {
//                     -webkit-text-stroke: 0.05rem white;
//                 }
//             `}</style>

//             {/* Main Scrollable Container: Increased height for scroll space */}
//             <div className="h-[300vh] flex items-start pt-[20vh] justify-center bg-gray-900 font-sans">
//                 {/* The text container is sticky to keep the block visible while scrolling */}
//                 <div className="templateContainer p-8 sticky top-[15vh] overflow-hidden flex flex-col items-center">
//                     {/* 3. Mapping now creates an independent animated element for EACH line */}
//                     {textLines.map((line, index) => (
//                         <TextLine key={index} text={line} />
//                     ))}
//                 </div>
//             </div>
//             {/* Additional space for the scroll effect to fully play out */}
//             <div className="h-[50vh] bg-gray-900"></div>
//         </>
//     );
// };

// export default TextFill;

// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TextFill = () => {
//     // Text split into phrases for sequential animation
//     const textLines = [
//         "In a world where true luxury has become rare,",
//         "Fawaahatul Khaleej stands as a guardian of tradition —",
//         "preserving the noble legacy of pure Oudh",
//         "and authentic Dahn Al Oudh in its most royal and untouched form.",
//         "Born from a passion that spans generations,",
//         "our journey began with a single belief:",
//         "Oudh is not merely a fragrance — it is a heritage,",
//         "a memory, a silent poetry carried in the air.",
//         "From the mystical forests of Southeast Asia",
//         "to the refined hands of our master distillers,",
//         "every drop of our Dahn Al Oudh is patiently extracted,",
//         "naturally aged, and carefully sealed,",
//         "just as it was done in the courts of kings and scholars.",
//         "Unlike commercial blends and synthetic imitations,",
//         "our Oudh is 100% pure and undiluted —",
//         "rich, deep, and evolving with grace upon every skin it touches.",
//         "It opens with the intensity of ancient wood,",
//         "settles with the warmth of ambered smoke,",
//         "and lingers like a whispered prayer at dawn.",
//     ];

//     const TextLine = ({ text }) => {
//         const ref = useRef(null);

//         // Each line has an independent scroll tracker
//         const { scrollYProgress } = useScroll({
//             target: ref,
//             // **ADJUSTED OFFSET:** // Start the fill when the line's bottom hits the viewport's bottom ("end 100%")
//             // Complete the fill when the line's top hits the viewport's top ("start 0%")
//             // This ensures the animation plays fully as the element scrolls up the screen.
//             offset: ["end 100%", "start 0%"],
//         });

//         // Map scroll progress (0 → 1) to the background-size CSS property (0% → 100%)
//         const backgroundSize = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//         return (
//             <motion.h2
//                 ref={ref}
//                 // Text styling remains the same
//                 className="text-xl md:text-2xl lg:text-3xl leading-[1.3em] font-extrabold uppercase tracking-tight m-0 text-center
//                     text-transparent bg-clip-text bg-gradient-to-r from-white to-white
//                     bg-no-repeat bg-left-bottom text-stroke max-w-5xl transition-all duration-100" // Added duration-100 for smoother feel
//                 style={{
//                     backgroundSize: backgroundSize,
//                     paddingBottom: '0.1em',
//                 }}
//             >
//                 {text}
//             </motion.h2>
//         );
//     };

//     return (
//         <>
//             {/* Minimal CSS for text stroke */}
//             <style>{`
//                 .text-stroke {
//                     -webkit-text-stroke: 0.05rem white;
//                 }
//             `}</style>

//             {/* Main Scrollable Container: Increased height (300vh) to ensure ample scroll space */}
//             <div className=" flex items-start pt-[20vh] justify-center bg-gray-900 font-sans">
//                 {/* REMOVED: sticky top-[15vh] */}
//                 {/* The text container will now scroll normally with the page */}
//                 <div className="templateContainer p-8 overflow-hidden flex flex-col items-center">
//                     {textLines.map((line, index) => (
//                         <TextLine key={index} text={line} />
//                     ))}
//                 </div>
//             </div>
//             {/* Additional space for the scroll effect to fully play out */}
//             <div className="h-[50vh] bg-gray-900"></div>
//         </>
//     );
// };

// export default TextFill;

// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TextFill = () => {
//     const text = `
//         In a world where true luxury has become rare, 
//         Fawaahatul Khaleej stands as a guardian of tradition — 
//         preserving the noble legacy of pure Oudh 
//         and authentic Dahn Al Oudh in its most royal and untouched form. 
//         Born from a passion that spans generations, 
//         our journey began with a single belief: 
//         Oudh is not merely a fragrance — it is a heritage, 
//         a memory, a silent poetry carried in the air. 
//         From the mystical forests of Southeast Asia 
//         to the refined hands of our master distillers, 
//         every drop of our Dahn Al Oudh is patiently extracted, 
//         naturally aged, and carefully sealed, 
//         just as it was done in the courts of kings and scholars. 
//         Unlike commercial blends and synthetic imitations, 
//         our Oudh is 100% pure and undiluted — 
//         rich, deep, and evolving with grace upon every skin it touches. 
//         It opens with the intensity of ancient wood, 
//         settles with the warmth of ambered smoke, 
//         and lingers like a whispered prayer at dawn.
//     `;

//     const ref = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["end 100%", "start 20%"],
//     });

//     const backgroundSize = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//     return (
//         <>
//             {/* Minimal CSS for text stroke */}
//             <style>{`
//                 .text-stroke {
//                     -webkit-text-stroke: 0.05rem white;
//                 }
//             `}</style>

//             <div className="flex items-start justify-center bg-gray-900 font-sans">
//                 <div className="templateContainer p-8 overflow-hidden flex flex-col items-center max-w-3xl">
//                     <motion.p
//                         ref={ref}
//                         className="text-sm md:text-lg lg:text-xl leading-[1.6em] font-bold uppercase tracking-tight text-center
//                             text-transparent bg-clip-text bg-gradient-to-r from-white to-white
//                             bg-no-repeat text-stroke transition-all duration-100"
//                         style={{ backgroundSize: backgroundSize, paddingBottom: '0.1em' }}
//                     >
//                         {text}
//                     </motion.p>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default TextFill;


// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TextFill = () => {
//     const text = `
//         In a world where true luxury has become rare, 
//         Fawaahatul Khaleej stands as a guardian of tradition — 
//         preserving the noble legacy of pure Oudh 
//         and authentic Dahn Al Oudh in its most royal and untouched form. 
//         Born from a passion that spans generations, 
//         our journey began with a single belief: 
//         Oudh is not merely a fragrance — it is a heritage, 
//         a memory, a silent poetry carried in the air. 
//         From the mystical forests of Southeast Asia 
//         to the refined hands of our master distillers, 
//         every drop of our Dahn Al Oudh is patiently extracted, 
//         naturally aged, and carefully sealed, 
//         just as it was done in the courts of kings and scholars. 
//         Unlike commercial blends and synthetic imitations, 
//         our Oudh is 100% pure and undiluted — 
//         rich, deep, and evolving with grace upon every skin it touches. 
//         It opens with the intensity of ancient wood, 
//         settles with the warmth of ambered smoke, 
//         and lingers like a whispered prayer at dawn.
//     `;

//     const ref = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["end 100%", "start 20%"],
//     });

//     // Animate background width from 0% to 100%
//     const backgroundSize = useTransform(
//         scrollYProgress,
//         [0, 1],
//         ["0% 100%", "100% 100%"]
//     );

//     return (
//         <div className="flex items-start justify-center bg-gray-900 font-sans min-h-screen p-4">
//             <div className="max-w-3xl w-full flex flex-col items-center">

//                 {/* Inline CSS for text stroke */}
//                 <style>{`
//                     .text-stroke {
//                         -webkit-text-stroke: 0.03rem white;
//                         -webkit-background-clip: text;
//                         background-clip: text;
//                         color: transparent;
//                     }
//                 `}</style>

//                 <motion.p
//                     ref={ref}
//                     className="text-sm md:text-lg lg:text-xl leading-[1.6em] font-bold uppercase tracking-tight text-center text-stroke"
//                     style={{
//                         backgroundImage: "linear-gradient(to right, white 0%, #ffffff 100%)",
//                         backgroundRepeat: "no-repeat",
//                         backgroundPosition: "left",
//                         backgroundSize: backgroundSize,
//                         display: "inline-block", // ensures bg-clip works on wrapped text
//                         paddingBottom: "0.1em",
//                     }}
//                 >
//                     {text}
//                 </motion.p>
//             </div>
//         </div>
//     );
// };

// export default TextFill;

// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TextFill = () => {
//     const text = `
//     In a world where true luxury has become rare, 
//     Fawaahatul Khaleej stands as a guardian of tradition — 
//     preserving the noble legacy of pure Oudh 
//     and authentic Dahn Al Oudh in its most royal and untouched form. 
//     Born from a passion that spans generations, 
//     our journey began with a single belief: 
//     Oudh is not merely a fragrance — it is a heritage, 
//     a memory, a silent poetry carried in the air. 
//     From the mystical forests of Southeast Asia 
//     to the refined hands of our master distillers, 
//     every drop of our Dahn Al Oudh is patiently extracted, 
//     naturally aged, and carefully sealed, 
//     just as it was done in the courts of kings and scholars. 
//     Unlike commercial blends and synthetic imitations, 
//     our Oudh is 100% pure and undiluted — 
//     rich, deep, and evolving with grace upon every skin it touches. 
//     It opens with the intensity of ancient wood, 
//     settles with the warmth of ambered smoke, 
//     and lingers like a whispered prayer at dawn.
//   `;

//     const ref = useRef(null);

//     // Scroll progress for text fill
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start end", "end start"], // works on all screen sizes
//     });

//     // Animate background width from 0% to 100%
//     const backgroundSize = useTransform(
//         scrollYProgress,
//         [0, 1],
//         ["0% 100%", "100% 100%"]
//     );

//     return (
//         <div className="flex items-start justify-center bg-gray-900 font-sans min-h-screen p-4">
//             <div className="max-w-3xl w-full flex flex-col items-center">

//                 {/* CSS for text stroke & multi-line background clip */}
//                 <style>{`
//           .text-stroke {
//             -webkit-text-stroke: 0.03rem white;
//             -webkit-background-clip: text;
//             background-clip: text;
//             color: transparent;
//             -webkit-box-decoration-break: clone; /* fix multi-line fill */
//           }
//         `}</style>

//                 <motion.p
//                     ref={ref}
//                     className="text-sm md:text-lg lg:text-xl leading-[1.6em] font-bold uppercase tracking-tight text-center text-stroke"
//                     style={{
//                         backgroundImage: "linear-gradient(to right, white 0%, #ffffff 100%)",
//                         backgroundRepeat: "no-repeat",
//                         backgroundPosition: "left",
//                         backgroundSize: backgroundSize,
//                         display: "inline", // better for multi-line fill
//                     }}
//                 >
//                     {text}
//                 </motion.p>


//             </div>
//         </div>
//     );
// };

// export default TextFill;

// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TextFill = () => {
//     const text = `In a world where true luxury has become rare,
// Fawaahatul Khaleej stands as a guardian of tradition —
// preserving the noble legacy of pure Oudh
// and authentic Dahn Al Oudh in its most royal and untouched form.
// Born from a passion that spans generations,
// our journey began with a single belief:
// Oudh is not merely a fragrance — it is a heritage,
// a memory, a silent poetry carried in the air.
// From the mystical forests of Southeast Asia
// to the refined hands of our master distillers,
// every drop of our Dahn Al Oudh is patiently extracted,
// naturally aged, and carefully sealed,
// just as it was done in the courts of kings and scholars.
// Unlike commercial blends and synthetic imitations,
// our Oudh is 100% pure and undiluted —
// rich, deep, and evolving with grace upon every skin it touches.
// It opens with the intensity of ancient wood,
// settles with the warmth of ambered smoke,
// and lingers like a whispered prayer at dawn.`;

//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start end", "end start"],
//     });

//     const lines = text.split("\n").filter(Boolean);

//     // Stagger each line's fill using scrollYProgress
//     const lineProgresses = lines.map((_, i) =>
//         useTransform(scrollYProgress, [i / lines.length, (i + 1) / lines.length], ["0%", "100%"])
//     );

//     return (
//         <div className="flex items-start justify-center bg-gray-900 font-sans min-h-screen p-4">
//             <div className="max-w-3xl w-full flex flex-col items-center" ref={ref}>
//                 <style>{`
//           .text-stroke {
//             -webkit-text-stroke: 0.03rem white;
//             -webkit-background-clip: text;
//             background-clip: text;
//             color: transparent;
//           }
//         `}</style>

//                 {lines.map((line, index) => (
//                     <motion.p
//                         key={index}
//                         className="text-sm md:text-lg lg:text-xl leading-[1.6em] font-bold uppercase tracking-tight text-center text-stroke"
//                         style={{
//                             backgroundImage: "linear-gradient(to right, white 0%, #ffffff 100%)",
//                             backgroundRepeat: "no-repeat",
//                             backgroundPosition: "left",
//                             backgroundSize: lineProgresses[index],
//                             display: "inline-block",
//                             margin: 0,
//                         }}
//                     >
//                         {line}
//                     </motion.p>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TextFill;


// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TextFill = () => {
//     const text = `
// In a world where true luxury has become rare, Fawaahatul Khaleej stands as a guardian of tradition, preserving the noble legacy of pure Oudh and authentic Dahn Al Oudh in its most royal and untouched form. Born from a passion that spans generations, our journey began with a single belief: Oudh is not merely a fragrance—it is a heritage, a memory, a silent poetry carried in the air. From the mystical forests of Southeast Asia to the refined hands of our master distillers, every drop of our Dahn Al Oudh is patiently extracted, naturally aged, and carefully sealed, just as it was done in the courts of kings and scholars. Unlike commercial blends and synthetic imitations, our Oudh is 100% pure and undiluted—rich, deep, and evolving with grace upon every skin it touches; it opens with the intensity of ancient wood, settles with the warmth of ambered smoke, and lingers like a whispered prayer at dawn.
// `;

//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start end", "end start"],
//     });

//     // Split text into lines
//     const lines = text.split("\n").filter(Boolean);

//     // Create staggered fill for each line
//     const lineProgresses = lines.map((_, i) =>
//         useTransform(scrollYProgress, [i / lines.length, (i + 1) / lines.length], ["0%", "100%"])
//     );

//     return (
//         <div className="flex items-start justify-center bg-gray-900 p-4">
//             <div className=" w-full max-w-5xl mx-auto flex flex-col items-center" ref={ref}>
//                 <style>{`
//           .text-stroke {
//             -webkit-text-stroke: 0.03rem white;
//             -webkit-background-clip: text;
//             background-clip: text;
//             color: transparent;
//             -webkit-box-decoration-break: clone; /* ensures per-line fill */
//             line-height: 1.6em;
//           }
//         `}</style>

//                 {lines.map((line, index) => (
//                     <motion.p
//                         key={index}
//                         className="text-sm md:text-lg lg:text-xl font-bold uppercase tracking-tight text-center text-stroke"
//                         style={{
//                             backgroundImage: "linear-gradient(to right, white 0%, white 100%)",
//                             backgroundRepeat: "no-repeat",
//                             backgroundPosition: "left",
//                             backgroundSize: lineProgresses[index],
//                             display: "inline-block",
//                             margin: 0,
//                         }}
//                     >
//                         {line}
//                     </motion.p>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TextFill;


// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const TextFillStaggered = () => {
//     const text = `
// In a world where true luxury has become rare, Fawaahatul Khaleej stands as a guardian of tradition, preserving the noble legacy of pure Oudh and authentic Dahn Al Oudh in its most royal and untouched form. Born from a passion that spans generations, our journey began with a single belief: Oudh is not merely a fragrance—it is a heritage, a memory, a silent poetry carried in the air. From the mystical forests of Southeast Asia to the refined hands of our master distillers, every drop of our Dahn Al Oudh is patiently extracted, naturally aged, and carefully sealed, just as it was done in the courts of kings and scholars. Unlike commercial blends and synthetic imitations, our Oudh is 100% pure and undiluted—rich, deep, and evolving with grace upon every skin it touches; it opens with the intensity of ancient wood, settles with the warmth of ambered smoke, and lingers like a whispered prayer at dawn.
// `;

//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start end", "end start"],
//     });

//     // Split text into lines
//     const lines = text.split("\n").filter(Boolean);

//     // Create staggered fill for each line (same as original logic)
//     const lineProgresses = lines.map((_, i) =>
//         useTransform(scrollYProgress, [i / lines.length, (i + 1) / lines.length], ["0%", "100%"])
//     );

//     return (
//         <div className="flex items-start justify-center bg-gray-900 p-4">
//             <div className=" w-full max-w-5xl mx-auto flex flex-col items-center" ref={ref}>
//                 <style>{`
//           .text-stroke {
//             -webkit-text-stroke: 0.03rem white;
//             -webkit-background-clip: text;
//             background-clip: text;
//             color: transparent;
//             -webkit-box-decoration-break: clone;
//             line-height: 1.6em;
//           }
//         `}</style>

//                 {lines.map((line, index) => {
//                     // Determine fill direction: even lines from left, odd lines from right
//                     const isFillingFromLeft = index % 2 === 0;
//                     const backgroundGradient = isFillingFromLeft
//                         ? "linear-gradient(to right, white 0%, white 100%)"
//                         : "linear-gradient(to left, white 0%, white 100%)";
//                     const backgroundPosition = isFillingFromLeft ? "left" : "right";

//                     return (
//                         <motion.p
//                             key={index}
//                             className="text-sm md:text-lg lg:text-xl font-bold uppercase tracking-tight text-center text-stroke"
//                             style={{
//                                 backgroundImage: backgroundGradient,
//                                 backgroundRepeat: "no-repeat",
//                                 backgroundPosition: backgroundPosition, // 'left' or 'right'
//                                 backgroundSize: lineProgresses[index], // Use the staggered progress
//                                 display: "inline-block",
//                                 margin: 0,
//                                 // Add text-align to ensure the text itself is aligned correctly within its container
//                                 textAlign: 'center'
//                             }}
//                         >
//                             {line}
//                         </motion.p>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default TextFillStaggered;


"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const CraftingSection: React.FC = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Split the heading into characters
        const splitHeading = new SplitType("#animated-heading", {
            types: ["words", "chars"],
        });

        splitHeading.words?.forEach((word) => {
            word.style.display = "inline-block";
            word.style.whiteSpace = "nowrap";
        });

        // Apply animation timeline
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#animation-bottom",
                start: "top 40%",
                end: "top 12%",
                scrub: 1.2,
                pin: false,
                markers: false,
            },
        });

        // Animate each character's color based on its parent
        splitHeading.chars?.forEach((char) => {
            const isYellow = char.closest(".text-yellow");

            timeline.to(
                char,
                {
                    color: isYellow ? "#d6c3a4" : "#ffffff",
                    filter: "blur(0px)",
                    duration: 0.3,
                    ease: "power3.out",
                },
                "<+=0.03" // slight stagger between characters
            );
        });


    }, []);

    return (
        <div
            className="lg:pt-10 lg:px-20 flex flex-col justify-center items-center"
            id="animation-bottom"
        >
            <div className="flex templateContainer lg:flex-row flex-col max-sm:items-center justify-between mt-7 md:mt-0">
                <div className="w-full">
                    <section id="heading-section">
                        <div className="h-[1px] w-full"></div>
                        <h2
                            id="animated-heading"
                            className="lg:text-xl montserratCTA text-lg max-sm:text-center  mx-auto text-center text-gray-400"
                        >
                            In a world where true luxury has become rare,
                            {" "}
                            <span className="text-yellow loraParagraph">Fawaahatul Khaleej </span>{" "}
                            stands as a guardian of tradition, preserving the noble legacy of pure Oudh and authentic Dahn Al Oudh in its most royal and untouched form. Born from a passion that spans generations, our journey began with a single belief: Oudh is not merely a fragrance it is a heritage, a memory, a silent poetry carried in the air. From the mystical forests of Southeast Asia to the refined hands of our master distillers, every drop of our Dahn Al Oudh is patiently extracted, naturally aged, and carefully sealed, just as it was done in the courts of kings and scholars. Unlike commercial blends and synthetic imitations, our Oudh is 100% pure and undiluted rich, deep, and evolving with grace upon every skin it touches; it opens with the intensity of ancient wood, settles with the warmth of ambered smoke, and lingers like a whispered prayer at dawn.
                        </h2>
                        <div className="h-[1px] w-full"></div>
                    </section>
                    {/* <p
                        id="animated-subtitle"
                        className="text-[14px] opacity-0 font-light tracking-wide text-white text-center mt-10"
                    >
                        Crafting Excellence for India’s Jewelers Since 1995.
                    </p> */}
                </div>
            </div>
            {/* <p
                id="animated-paragraph"
                className="text-[14px] font-light tracking-wide text-white opacity-0 text-center translate-y-6 my-10"
            >
                Founded in 1995 in the heart of Mumbai’s iconic Zaveri Bazaar, Padmavati Chains & Jewels began as a modest gold chain trading business with a simple vision - to bring trust, design, and excellence to every gram of gold we deliver. Over the years, what started as a small operation has evolved into one of India’s most respected jewellery manufacturing houses, known for its quality, innovation, and relationship-first approach.
                From our roots in traditional trading, we have built a vertically integrated manufacturing ecosystem that caters to thousands of B2B clients across India and export markets. Our journey has been shaped by our ability to adapt - from embracing technology and expanding production capacity, to introducing design-forward collections that meet the evolving preferences of modern consumers.
                With decades of industry experience, a future-facing mindset, and an unwavering focus on quality and integrity, PC&J continues to be the trusted partner for leading jewellery retailers, wholesalers, and instit.
            </p> */}
        </div>
    );
};

export default CraftingSection;

