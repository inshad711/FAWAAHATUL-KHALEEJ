// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';

// // --- Types ---
// type TextBlockProps = {
//     text: string;
//     bgColor: string;
//     index: number;
// };

// // --- Framer Motion Variants for the Text Container and Individual Characters ---

// // The main animation logic for the 'Blocks' effect lives here.
// // When 'inView' is true, the text characters are revealed.
// const charVariants: Variants = {
//     // 'hidden' state corresponds to [data-scroll='out']
//     hidden: {
//         opacity: 0,
//         transition: { duration: 0.01 }, // Quick transition for hiding
//     },
//     // 'visible' state corresponds to the final revealed state
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 0.01,
//             // The text is revealed only after the white block animation is complete (0.5s + 0.25s delay)
//             delay: 0.75,
//         },
//     },
// };

// // Variants for the sweeping white block overlay
// const blockVariants: Variants = {
//     hidden: {
//         x: '0%', // Block is not visible
//         transition: {
//             // For the 'out' state, the block should not run its animation
//             duration: 0.01,
//             delay: 0,
//         },
//     },
//     visible: {
//         // Mimics the 'block' keyframes: -110% -> 0% (in) -> 110% (out)
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1], // Keyframes at 0%, 45%, 100%
//             duration: 1, // Total duration of the animation (combines 0.5s animation + 0.25s delay from original)
//             ease: 'easeInOut', // Smoother transition
//             delay: 0.25, // Initial delay before the block starts
//         },
//     },
// };

// // --- Component ---

// const TextBlock: FC<TextBlockProps> = ({ text, bgColor, index }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     // useInView is Framer Motion's hook for Intersection Observer
//     const isInView = useInView(ref, { once: false, amount: 0.5 }); // Detect when 50% of the element is in view

//     // Utility to split the text into an array of characters
//     const characters = useMemo(() => Array.from(text), [text]);

//     // Determine the animation state based on scroll
//     const animationState = isInView ? 'visible' : 'hidden';

//     return (
//         <div
//             ref={ref}
//             className={`
//         flex items-center justify-center h-screen w-screen text-white text-5xl md:text-8xl font-black relative overflow-hidden
//         ${bgColor}
//       `}
//         >
//             {/* This is the equivalent of the .text--blocks [data-scroll='in']:after pseudo-element.
//         It's the white sweeping block animation.
//       */}
//             <motion.div
//                 className="absolute inset-0 bg-white"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 // Tailwind utility for dynamic background colors
//                 style={{ zIndex: 10, backgroundColor: bgColor }}
//             />

//             {/* The main text container. We use 'motion.div' to pass the animation state down
//         to its children (the characters) and to hide the text visually until
//         the block has passed.
//       */}
//             <motion.div
//                 className="flex relative z-20"
//             >
//                 {characters.map((char, charIndex) => (
//                     <motion.span
//                         key={charIndex}
//                         className="inline-block"
//                         variants={charVariants}
//                         initial="hidden"
//                         animate={animationState}
//                     // Use character index for staggered transition (not needed here for 'blocks', but good practice)
//                     >
//                         {char === ' ' ? '\u00A0' : char} {/* Preserve spaces */}
//                     </motion.span>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// // --- Main Page Component ---
// const ScrollTextAnimator: FC = () => {
//     const data = [
//         { text: 'First', color: 'bg-[#7e05d7]' }, // Equivalent to .text:nth-child(n)
//         { text: 'Blocks', color: 'bg-[#f21e56]' }, // Equivalent to .text:nth-child(2n)
//         { text: 'Last', color: 'bg-[#bd04a9]' }, // Equivalent to .text:nth-child(3n)
//     ];

//     return (
//         // Equivalent to .page
//         <div className="h-screen overflow-y-scroll">
//             {data.map((item, index) => (
//                 <TextBlock
//                     key={index}
//                     text={item.text}
//                     bgColor={item.color}
//                     index={index + 1}
//                 />
//             ))}
//         </div>
//     );
// };

// export default ScrollTextAnimator;

// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';

// // Load necessary icons (though none are used here, keeping the standard React setup)
// // For aesthetics, we'll set a standard font for the whole app.

// // --- Types ---
// type TextBlockProps = {
//     text: string;
//     bgColor: string;
//     index: number;
// };

// // --- Framer Motion Variants for the Text Container and Individual Characters ---

// // The main animation logic for the 'Blocks' effect lives here.
// const charVariants: Variants = {
//     // 'hidden' state corresponds to [data-scroll='out']
//     hidden: {
//         opacity: 0,
//         transition: { duration: 0.01 }, // Quick transition for hiding
//     },
//     // 'visible' state corresponds to the final revealed state
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 0.01,
//             // The text is revealed only after the white block animation is complete (0.75s)
//             delay: 0.75,
//         },
//     },
// };

// // Variants for the sweeping white block overlay
// const blockVariants: Variants = {
//     hidden: {
//         x: '0%', // Block is not visible
//         transition: {
//             duration: 0.01,
//             delay: 0,
//         },
//     },
//     visible: {
//         // Mimics the 'block' keyframes: -110% -> 0% (in) -> 110% (out)
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1], // Keyframes at 0%, 45%, 100%
//             duration: 1, // Total duration of the animation
//             ease: 'easeInOut', // Smoother transition
//             delay: 0.25, // Initial delay before the block starts
//         },
//     },
// };

// // --- TextBlock Component (Represents one column) ---

// const TextBlock: FC<TextBlockProps> = ({ text, bgColor }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     // Since the component is now always in view on a full-screen layout, we keep
//     // the hook for a single trigger on load, or if the user scrolls it out of view
//     // which is not possible in this new h-screen design. Setting once: true is better here.
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     // Utility to split the text into an array of characters
//     const characters = useMemo(() => Array.from(text), [text]);

//     // Determine the animation state based on scroll
//     const animationState = isInView ? 'visible' : 'hidden';

//     return (
//         // KEY CHANGE: h-full and w-1/3 make this block a single column in the parent flex container
//         <div
//             ref={ref}
//             className={`
//                 flex items-center justify-center h-full w-1/3
//                 text-white text-5xl md:text-8xl font-black relative overflow-hidden
//                 ${bgColor}
//             `}
//         >
//             {/* White sweeping block overlay */}
//             <motion.div
//                 className="absolute inset-0 bg-white"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 // Setting the zIndex higher than text, but the sweeping motion should be visible
//                 style={{ zIndex: 10, backgroundColor: 'white' }}
//             />

//             {/* The main text container. z-20 ensures it appears after the block has passed */}
//             <motion.div
//                 className="flex relative z-20"
//             >
//                 {characters.map((char, charIndex) => (
//                     <motion.span
//                         key={charIndex}
//                         className="inline-block"
//                         variants={charVariants}
//                         initial="hidden"
//                         animate={animationState}
//                     >
//                         {char === ' ' ? '\u00A0' : char} {/* Preserve spaces */}
//                     </motion.span>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// // --- Main App Component ---
// const TextSection: FC = () => {
//     const data = [
//         // Using distinct, bright colors for a visually striking layout
//         { text: 'First', color: 'bg-[#7e05d7]' },
//         { text: 'Blocks', color: 'bg-[#f21e56]' },
//         { text: 'Last', color: 'bg-[#bd04a9]' },
//     ];

//     return (
//         <div className="font-sans">
//             {/* KEY CHANGE: Use flex, h-screen, and w-screen to make the container
//                 take up the full viewport and lay children out horizontally.
//             */}
//             <div className="flex h-screen w-screen overflow-hidden">
//                 {data.map((item, index) => (
//                     <TextBlock
//                         key={index}
//                         text={item.text}
//                         bgColor={item.color}
//                         index={index + 1}
//                     />
//                 ))}
//             </div>

//             {/* Adding some extra content to allow scrolling if needed,
//                 but the main animation block remains full screen.
//             */}
//             <div className="h-40 flex items-center justify-center bg-gray-100 text-gray-700">
//                 Scroll content below the main animation block.
//             </div>
//         </div>
//     );
// };

// export default TextSection;

// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';
// // NOTE: Since this environment may not fully support Next.js Image component outside a full Next.js project,
// // I am replacing it with a standard <img> tag for guaranteed rendering.
// // import Image from 'next/image'; // Removed import

// // --- Types ---
// type TextBlockProps = {
//     content: string | 'image'; // Change content to accept string or 'image'
//     bgColor: string;
//     index: number;
// };

// // --- Framer Motion Variants for the Text Container and Individual Characters ---

// const charVariants: Variants = {
//     hidden: {
//         opacity: 0,
//         transition: { duration: 0.01 },
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 0.01,
//             delay: 0.75,
//         },
//     },
// };

// const blockVariants: Variants = {
//     hidden: {
//         x: '0%',
//         transition: {
//             duration: 0.01,
//             delay: 0,
//         },
//     },
//     visible: {
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1],
//             duration: 1,
//             ease: 'easeInOut',
//             delay: 0.25,
//         },
//     },
// };

// // --- TextBlock Component (Represents one column) ---

// const TextBlock: FC<TextBlockProps> = ({ content, bgColor }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     const characters = useMemo(() =>
//         typeof content === 'string' ? Array.from(content) : [],
//         [content]
//     );

//     const animationState = isInView ? 'visible' : 'hidden';

//     return (
//         <div
//             ref={ref}
//             className={`
//                 flex items-center justify-center
//                 h-[calc(100vh/3)] w-full md:h-full md:w-1/3 /* Responsive height and width */
//                 text-white text-5xl md:text-8xl font-black relative overflow-hidden
//                 ${bgColor}
//             `}
//         >
//             {/* The white swipe animation block */}
//             <motion.div
//                 className="absolute inset-0 bg-white"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 style={{ zIndex: 10, backgroundColor: 'white' }}
//             />

//             {content === 'image' ? (
//                 // Image content (using standard <img> tag)
//                 <motion.div
//                     className="relative z-20 w-3/4 h-3/4 flex items-center justify-center"
//                     initial="hidden"
//                     animate={animationState}
//                     variants={charVariants} // Using charVariants for image opacity animation
//                 >
//                     <img
//                         src="https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png"// Replace with your image path
//                         alt="Placeholder"
//                         style={{ objectFit: 'contain', width: '100%', height: '100%' }}
//                     />
//                 </motion.div>
//             ) : (
//                 // Text content
//                 <motion.div
//                     className="flex relative z-20"
//                 >
//                     {characters.map((char, charIndex) => (
//                         <motion.span
//                             key={charIndex}
//                             className="inline-block"
//                             variants={charVariants}
//                             initial="hidden"
//                             animate={animationState}
//                         >
//                             {char === ' ' ? '\u00A0' : char}
//                         </motion.span>
//                     ))}
//                 </motion.div>
//             )}
//         </div>
//     );
// };

// // --- Main App Component ---
// export default function App() {
//     const data = [
//         { content: 'First', color: 'bg-[#7e05d7]' },
//         { content: 'image', color: 'bg-[#f21e56]' }, // Content is now 'image'
//         { content: 'Last', color: 'bg-[#bd04a9]' },
//     ];

//     return (
//         // FIXED: The outer div now uses 'overflow-x-hidden' explicitly.
//         // This is the standard fix for the horizontal scrollbar caused by w-screen (100vw).
//         // I also removed the unnecessary empty wrapper div that was present in the original code.
//         <div className="flex flex-col md:flex-row h-screen w-screen overflow-x-hidden">
//             {data.map((item, index) => (
//                 <TextBlock
//                     key={index}
//                     content={item.content}
//                     bgColor={item.color}
//                     index={index + 1}
//                 />
//             ))}
//         </div>
//     );
// }



// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';
// // NOTE: Since this environment may not fully support Next.js Image component outside a full Next.js project,
// // I am replacing it with a standard <img> tag for guaranteed rendering.
// // import Image from 'next/image'; // Removed import

// // --- Types ---
// type TextBlockProps = {
//     content: string | 'image'; // Change content to accept string or 'image'
//     bgColor: string;
//     index: number;
// };

// // --- Framer Motion Variants for the Text Container and Individual Characters ---

// const charVariants: Variants = {
//     hidden: {
//         opacity: 0,
//         transition: { duration: 0.01 },
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 0.01,
//             delay: 0.75,
//         },
//     },
// };

// const blockVariants: Variants = {
//     hidden: {
//         x: '0%',
//         transition: {
//             duration: 0.01,
//             delay: 0,
//         },
//     },
//     visible: {
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1],
//             duration: 1,
//             ease: 'easeInOut',
//             delay: 0.25,
//         },
//     },
// };

// // --- TextBlock Component (Represents one column) ---

// const TextBlock: FC<TextBlockProps> = ({ content, bgColor }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     const characters = useMemo(() =>
//         typeof content === 'string' ? Array.from(content) : [],
//         [content]
//     );

//     const animationState = isInView ? 'visible' : 'hidden';

//     return (
//         <div
//             ref={ref}
//             className={`
//                 flex items-center justify-center
//                 h-[calc(100vh/3)] w-full md:h-full md:w-1/3 /* Responsive height and width */
//                 text-white text-5xl md:text-8xl font-black relative overflow-hidden
//                 ${bgColor}
//             `}
//         >
//             {/* The white swipe animation block */}
//             <motion.div
//                 className="absolute inset-0 bg-white"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 style={{ zIndex: 10, backgroundColor: 'white' }}
//             />

//             {content === 'image' ? (
//                 // Image content (using standard <img> tag)
//                 <motion.div
//                     className="relative z-20 w-3/4 h-3/4 flex items-center justify-center"
//                     initial="hidden"
//                     animate={animationState}
//                     variants={charVariants} // Using charVariants for image opacity animation
//                 >
//                     <img
//                         src="https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png"// Replace with your image path
//                         alt="Placeholder"
//                         style={{ objectFit: 'contain', width: '100%', height: '100%' }}
//                     />
//                 </motion.div>
//             ) : (
//                 // Text content
//                 <motion.div
//                     className="flex relative z-20"
//                 >
//                     {characters.map((char, charIndex) => (
//                         <motion.span
//                             key={charIndex}
//                             className="inline-block"
//                             variants={charVariants}
//                             initial="hidden"
//                             animate={animationState}
//                         >
//                             {char === ' ' ? '\u00A0' : char}
//                         </motion.span>
//                     ))}
//                 </motion.div>
//             )}
//         </div>
//     );
// };

// // --- Main App Component ---
// export default function App() {
//     const data = [
//         { content: 'First', color: 'bg-[#7e05d7]' },
//         { content: 'image', color: 'bg-[#f21e56]' }, // Content is now 'image'
//         { content: 'Last', color: 'bg-[#bd04a9]' },
//     ];

//     return (
//         // FIX: Removed 'fixed inset-0' and replaced with 'relative w-full h-screen'
//         // to prevent the component from overlapping other elements while still occupying the full viewport size
//         // as a standard, scrollable section.
//         <div className="flex flex-col md:flex-row relative w-full h-screen overflow-x-hidden">
//             {data.map((item, index) => (
//                 <TextBlock
//                     key={index}
//                     content={item.content}
//                     bgColor={item.color}
//                     index={index + 1}
//                 />
//             ))}
//         </div>
//     );
// }


// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';


// // --- Types ---
// type TextBlockProps = {
//     content: string | 'image'; // Change content to accept string or 'image'
//     bgColor: string;
//     index: number;
// };

// // --- Framer Motion Variants for the Text Container and Individual Characters ---

// const charVariants: Variants = {
//     hidden: {
//         opacity: 0,
//         transition: { duration: 0.01 },
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 0.01,
//             delay: 0.75,
//         },
//     },
// };

// const blockVariants: Variants = {
//     hidden: {
//         x: '0%',
//         transition: {
//             duration: 0.01,
//             delay: 0,
//         },
//     },
//     visible: {
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1],
//             duration: 1,
//             ease: 'easeInOut',
//             delay: 0.25,
//         },
//     },
// };

// // --- TextBlock Component (Represents one column) ---

// const TextBlock: FC<TextBlockProps> = ({ content, bgColor }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     const characters = useMemo(() =>
//         typeof content === 'string' ? Array.from(content) : [],
//         [content]
//     );

//     const animationState = isInView ? 'visible' : 'hidden';

//     return (
//         <div
//             ref={ref}
//             className={`
//                 flex items-center justify-center  
//                 h-1/3 w-full md:h-full md:w-1/3 
//                 text-white text-5xl md:text-8xl font-black relative overflow-hidden
//                 ${bgColor}
//             `}
//         >
//             {/* The white swipe animation block */}
//             <motion.div
//                 className="absolute inset-0 bg-white"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 style={{ zIndex: 10, backgroundColor: 'black' }}
//             />

//             {content === 'image' ? (
//                 // Image content (using standard <img> tag)
//                 <motion.div
//                     className="relative z-20 w-3/4 h-3/4 flex items-center justify-center"
//                     initial="hidden"
//                     animate={animationState}
//                     variants={charVariants} // Using charVariants for image opacity animation
//                 >
//                     <img
//                         src="https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png"// Replace with your image path
//                         alt="Placeholder"
//                         style={{ objectFit: 'contain', width: '100%', height: '100%' }}
//                     />
//                 </motion.div>
//             ) : (
//                 // Text content
//                 <motion.div
//                     className="flex relative z-20"
//                 >
//                     {characters.map((char, charIndex) => (
//                         <motion.span
//                             key={charIndex}
//                             className="inline-block"
//                             variants={charVariants}
//                             initial="hidden"
//                             animate={animationState}
//                         >
//                             {char === ' ' ? '\u00A0' : char}
//                         </motion.span>
//                     ))}
//                 </motion.div>
//             )}
//         </div>
//     );
// };

// // --- Main App Component ---
// export default function App() {
//     const data = [
//         { content: 'First', color: 'bg-[#7e05d7]' },
//         { content: 'image', color: 'bg-[#f21e56]' }, // Content is now 'image'
//         { content: 'Last', color: 'bg-[#bd04a9]' },
//     ];

//     return (

//         <div className='bg-black'>
//             <div className="flex flex-col md:flex-row relative templateContainer w-full h-[480px] overflow-x-hidden">
//                 {data.map((item, index) => (
//                     <TextBlock

//                         key={index}
//                         content={item.content}
//                         bgColor={item.color}
//                         index={index + 1}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }


// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';


// // --- Types ---
// type TextBlockProps = {
//     content: string; // Content is simplified to always be text (displayed on top of the bg or solid color)
//     bgColor: string;
//     index: number;
//     bgImage?: string; // New: Optional background image URL
//     textColor?: string; // New: Optional text color for contrast
// };

// // --- Framer Motion Variants for the Text Container and Individual Characters ---

// const charVariants: Variants = {
//     hidden: {
//         opacity: 0,
//         transition: { duration: 0.01 },
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 0.01,
//             delay: 0.75, // Time after the swipe animation finishes
//         },
//     },
// };

// const blockVariants: Variants = {
//     hidden: {
//         x: '0%',
//         transition: {
//             duration: 0.01,
//             delay: 0,
//         },
//     },
//     visible: {
//         // Swipe animation: slide from left, cover, slide to right
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1], // Timing markers for the keyframes
//             duration: 1,
//             ease: 'easeInOut',
//             delay: 0.25,
//         },
//     },
// };

// // --- TextBlock Component (Represents one column) ---

// const TextBlock: FC<TextBlockProps> = ({ content, bgColor, bgImage, textColor = 'text-white' }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     // Trigger animation when 50% of the block is in view (only once)
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     const characters = useMemo(() =>
//         Array.from(content),
//         [content]
//     );

//     const animationState = isInView ? 'visible' : 'hidden';

//     // Conditional styles for background image
//     const backgroundStyle = bgImage ? {
//         backgroundImage: `url('${bgImage}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         // Optional: Ensure the text color is always readable on the image block
//         filter: 'grayscale(50%) brightness(0.8)', // Subtle image filter for better text contrast
//     } : {};

//     return (
//         <div
//             ref={ref}
//             // Main container styles: conditional background class and applied inline style
//             className={`
//                 flex items-center justify-center
//                 h-1/3 w-full md:h-full md:w-1/3
//                 ${textColor} text-5xl md:text-8xl font-black relative overflow-hidden
//                 ${!bgImage ? bgColor : 'bg-gray-900'}
//             `}
//             style={backgroundStyle}
//         >
//             {/* The SWIPE/WIPE animation block (solid black for contrast) */}
//             <motion.div
//                 className="absolute inset-0"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 style={{ zIndex: 10, backgroundColor: 'black' }}
//             />

//             {/* Text content (renders on top of the background) */}
//             <motion.div
//                 className="flex relative z-20"
//                 initial="hidden"
//                 animate={animationState}
//             // This motion.div ensures the entire word fades in after the swipe
//             >
//                 {characters.map((char, charIndex) => (
//                     // Each character fades in
//                     <motion.span
//                         key={charIndex}
//                         className="inline-block"
//                         variants={charVariants}
//                         initial="hidden"
//                         animate={animationState}
//                     >
//                         {char === ' ' ? '\u00A0' : char}
//                     </motion.span>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// // --- Main App Component ---
// export default function App() {
//     const data: TextBlockProps[] = [
//         { content: 'First', color: 'bg-[#7e05d7]', index: 1 },
//         {
//             content: 'Look', // Text displayed on top of the background image
//             color: 'bg-[#f21e56]', // This color is ignored because bgImage is present
//             bgImage: 'https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png',
//             textColor: 'text-white', // Ensure text is visible against the background image
//             index: 2
//         },
//         { content: 'Last', color: 'bg-[#bd04a9]', index: 3 },
//     ];

//     return (
//         <div className='bg-black font-[Inter]'>
//             <div className="flex flex-col md:flex-row relative templateContainer w-full h-[60vh] min-h-[400px] max-h-[700px] overflow-x-hidden shadow-2xl rounded-xl">
//                 {data.map((item, index) => (
//                     <TextBlock
//                         key={index}
//                         content={item.content}
//                         bgColor={item.color}
//                         bgImage={item.bgImage}
//                         textColor={item.textColor}
//                         index={item.index}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }


// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';


// // --- Types ---
// type TextBlockProps = {
//     content: string; // Content is simplified to always be text (displayed on top of the bg or solid color)
//     bgColor: string;
//     index: number;
//     bgImage?: string; // New: Optional background image URL
//     textColor?: string; // New: Optional text color for contrast
// };

// // --- Framer Motion Variants for the Text Container and Individual Characters ---

// const charVariants: Variants = {
//     hidden: {
//         opacity: 0,
//         transition: { duration: 0.01 },
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 0.01,
//             delay: 0.75, // Time after the swipe animation finishes
//         },
//     },
// };

// const blockVariants: Variants = {
//     hidden: {
//         x: '0%',
//         transition: {
//             duration: 0.01,
//             delay: 0,
//         },
//     },
//     visible: {
//         // Swipe animation: slide from left, cover, slide to right
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1], // Timing markers for the keyframes
//             duration: 1,
//             ease: 'easeInOut',
//             delay: 0.25,
//         },
//     },
// };

// // --- TextBlock Component (Represents one column) ---

// const TextBlock: FC<TextBlockProps> = ({ content, bgColor, bgImage, textColor = 'text-white' }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     // Trigger animation when 50% of the block is in view (only once)
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     const characters = useMemo(() =>
//         Array.from(content),
//         [content]
//     );

//     const animationState = isInView ? 'visible' : 'hidden';

//     // Conditional styles for background image
//     const backgroundStyle = bgImage ? {
//         backgroundImage: `url('${bgImage}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         // Optional: Ensure the text color is always readable on the image block
//         filter: 'grayscale(50%) brightness(0.8)', // Subtle image filter for better text contrast
//     } : {};

//     return (
//         <div
//             ref={ref}
//             // Main container styles: conditional background class and applied inline style
//             className={`
//                 flex items-center justify-center
//                 h-1/3 w-full md:h-full md:w-1/3
//                 ${textColor} text-5xl md:text-8xl font-black relative overflow-hidden
//                 ${!bgImage ? bgColor : 'bg-gray-900'}
//             `}
//             style={backgroundStyle}
//         >
//             {/* The SWIPE/WIPE animation block (solid black for contrast) */}
//             <motion.div
//                 className="absolute inset-0"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 style={{ zIndex: 10, backgroundColor: 'black' }}
//             />

//             {/* Text content (renders on top of the background) */}
//             <motion.div
//                 className="flex relative z-20"
//                 initial="hidden"
//                 animate={animationState}
//             // This motion.div ensures the entire word fades in after the swipe
//             >
//                 {characters.map((char, charIndex) => (
//                     // Each character fades in
//                     <motion.span
//                         key={charIndex}
//                         className="inline-block"
//                         variants={charVariants}
//                         initial="hidden"
//                         animate={animationState}
//                     >
//                         {char === ' ' ? '\u00A0' : char}
//                     </motion.span>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// // --- Main App Component ---
// export default function App() {
//     const data: TextBlockProps[] = [
//         // FIXED: Renamed 'color' to 'bgColor'
//         { content: 'First', bgColor: 'bg-[#7e05d7]', index: 1 },
//         {
//             content: 'Look',
//             // FIXED: Renamed 'color' to 'bgColor'. Although it's ignored, it must match the type.
//             bgColor: 'bg-[#f21e56]',
//             bgImage: 'https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png',
//             textColor: 'text-white',
//             index: 2
//         },
//         // FIXED: Renamed 'color' to 'bgColor'
//         { content: 'Last', bgColor: 'bg-[#bd04a9]', index: 3 },
//     ];

//     return (
//         <div className='bg-black font-[Inter]'>
//             <div className="flex flex-col md:flex-row relative templateContainer w-full h-[60vh] min-h-[400px] max-h-[700px] overflow-x-hidden shadow-2xl rounded-xl">
//                 {data.map((item, index) => (
//                     <TextBlock
//                         key={index}
//                         content={item.content}
//                         // These props are now correctly named 'bgColor'
//                         bgColor={item.bgColor}
//                         bgImage={item.bgImage}
//                         textColor={item.textColor}
//                         index={item.index}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }


// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';


// // --- Types ---
// type TextBlockProps = {
//     content: string; // Content is simplified to always be text (displayed on top of the bg or solid color)
//     bgColor: string;
//     index: number;
//     bgImage?: string; // New: Optional background image URL
//     textColor?: string; // New: Optional text color for contrast
// };

// // --- Framer Motion Variants for the Text Container and Individual Characters ---

// const charVariants: Variants = {
//     hidden: {
//         opacity: 0,
//         transition: { duration: 0.01 },
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 0.01,
//             delay: 0.75, // Time after the swipe animation finishes
//         },
//     },
// };

// const blockVariants: Variants = {
//     hidden: {
//         x: '0%',
//         transition: {
//             duration: 0.01,
//             delay: 0,
//         },
//     },
//     visible: {
//         // Swipe animation: slide from left, cover, slide to right
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1], // Timing markers for the keyframes
//             duration: 1,
//             ease: 'easeInOut',
//             delay: 0.25,
//         },
//     },
// };

// // --- TextBlock Component (Represents one column) ---

// const TextBlock: FC<TextBlockProps> = ({ content, bgColor, bgImage, textColor = 'text-white' }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     // Trigger animation when 50% of the block is in view (only once)
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     const characters = useMemo(() =>
//         Array.from(content),
//         [content]
//     );

//     const animationState = isInView ? 'visible' : 'hidden';

//     // Conditional styles for background image
//     const backgroundStyle = bgImage ? {
//         backgroundImage: `url('${bgImage}')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         // Optional: Ensure the text color is always readable on the image block
//         filter: 'grayscale(50%) brightness(0.8)', // Subtle image filter for better text contrast
//     } : {};

//     return (
//         <div
//             ref={ref}
//             // Main container styles: conditional background class and applied inline style
//             className={`
//                 flex items-center justify-center
//                 h-1/3 w-full md:h-full md:w-1/3
//                 ${textColor} text-5xl md:text-8xl font-black relative overflow-hidden
//                 ${!bgImage ? bgColor : 'bg-gray-900'}
//             `}
//             style={backgroundStyle}
//         >
//             {/* The SWIPE/WIPE animation block (solid black for contrast) */}
//             <motion.div
//                 className="absolute inset-0"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 style={{ zIndex: 10, backgroundColor: 'black' }}
//             />

//             {/* Text content (renders on top of the background) */}
//             <motion.div
//                 className="flex relative z-20"
//                 initial="hidden"
//                 animate={animationState}
//             // This motion.div ensures the entire word fades in after the swipe
//             >
//                 {characters.map((char, charIndex) => (
//                     // Each character fades in
//                     <motion.span
//                         key={charIndex}
//                         className="inline-block"
//                         variants={charVariants}
//                         initial="hidden"
//                         animate={animationState}
//                     >
//                         {char === ' ' ? '\u00A0' : char}
//                     </motion.span>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// // --- Main App Component ---
// export default function TextSection() {
//     const data: TextBlockProps[] = [
//         // 1. First Block: IMAGE ADDED HERE
//         {
//             content: 'First',
//             // New background image added here:
//             bgImage: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//             bgColor: 'bg-[#7e05d7]', // This color will be ignored
//             textColor: 'text-white', // Recommended for contrast on the image
//             index: 1
//         },

//         // 2. Second Block: Image (from previous update)
//         {
//             content: 'Look',
//             bgColor: 'bg-[#f21e56]',
//             bgImage: 'https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png',
//             textColor: 'text-white',
//             index: 2
//         },

//         // 3. Third Block: Image (from previous update)
//         {
//             content: 'Last',
//             bgImage: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//             bgColor: 'bg-[#bd04a9]',
//             textColor: 'text-white',
//             index: 3
//         },
//     ];

//     return (
//         <div className='bg-black flex items-center justify-center '>
//             <div className="flex flex-col md:flex-row relative templateContainer  w-full max-w-7xl h-[60vh] min-h-[400px] max-h-[500px] overflow-x-hidden shadow-2xl rounded-2xl">
//                 {data.map((item, index) => (
//                     <TextBlock
//                         key={index}
//                         content={item.content}
//                         bgColor={item.bgColor}
//                         bgImage={item.bgImage}
//                         textColor={item.textColor}
//                         index={item.index}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

//////////////////// all working /////


// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';

// // --- Types ---
// type TextBlockProps = {
//     content: string;
//     bgColor: string;
//     index: number;
//     bgImage?: string;
//     textColor?: string;
// };

// // --- Framer Motion Variants ---
// const charVariants: Variants = {
//     hidden: { opacity: 0, transition: { duration: 0.01 } },
//     visible: {
//         opacity: 1,
//         transition: { duration: 0.01, delay: 0.75 },
//     },
// };

// const blockVariants: Variants = {
//     hidden: { x: '0%', transition: { duration: 0.01, delay: 0 } },
//     visible: {
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1],
//             duration: 1,
//             ease: 'easeInOut',
//             delay: 0.25,
//         },
//     },
// };

// // --- TextBlock Component ---
// const TextBlock: FC<TextBlockProps> = ({ content, bgColor, bgImage, textColor = 'text-white' }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     const characters = useMemo(() => Array.from(content), [content]);
//     const animationState = isInView ? 'visible' : 'hidden';

//     const backgroundStyle = bgImage
//         ? {
//             backgroundImage: `url('${bgImage}')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             filter: 'grayscale(50%) brightness(0.8)',
//         }
//         : {};

//     return (
//         <div
//             ref={ref}
//             className={`
//                 flex items-center justify-center
//                 h-1/3 w-full md:h-full md:w-1/3
//                 ${textColor} text-5xl md:text-8xl font-black relative overflow-hidden
//                 ${!bgImage ? bgColor : 'bg-gray-900'}
//             `}
//             style={backgroundStyle}
//         >
//             <motion.div
//                 className="absolute inset-0"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 style={{ zIndex: 10, backgroundColor: 'black' }}
//             />
//             <motion.div
//                 className="flex relative z-20"
//                 initial="hidden"
//                 animate={animationState}
//             >
//                 {characters.map((char, charIndex) => (
//                     <motion.span
//                         key={charIndex}
//                         className="inline-block"
//                         variants={charVariants}
//                         initial="hidden"
//                         animate={animationState}
//                     >
//                         {char === ' ' ? '\u00A0' : char}
//                     </motion.span>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// // --- Main Component ---
// export default function TextSection() {
//     const data: TextBlockProps[] = [
//         {
//             content: 'First',
//             bgImage:
//                 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//             bgColor: 'bg-[#7e05d7]',
//             textColor: 'text-white',
//             index: 1,
//         },
//         {
//             content: 'Look',
//             bgColor: 'bg-[#f21e56]',
//             bgImage:
//                 'https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png',
//             textColor: 'text-white',
//             index: 2,
//         },
//         {
//             content: 'Last',
//             bgImage:
//                 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//             bgColor: 'bg-[#bd04a9]',
//             textColor: 'text-white',
//             index: 3,
//         },
//     ];

//     return (
//         <section className="bg-black text-white py-16 px-6 md:px-12 flex flex-col items-center justify-center">
//             {/* --- Heading & Description --- */}
//             <div className="max-w-3xl text-center mb-12">
//                 {/* <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-wide">
//                     An Invitation to Experience True Luxury
//                 </h2> */}
//                 <div className="text-center">
//                     <p className="text-gray-500"> An Invitation to Experience   True </p>
//                     {/* Adjusted text size for responsiveness: text-6xl for mobile, text-9xl for md and up */}
//                     <h2 className="text-6xl md:text-9xl font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80">
//                         Luxury
//                     </h2>
//                 </div>

//             </div>

//             {/* --- Animated Text Blocks Section --- */}
//             <div className="flex flex-col md:flex-row relative templateContainer w-full max-w-7xl h-[60vh] min-h-[400px] max-h-[500px] overflow-x-hidden shadow-2xl rounded-2xl">
//                 {data.map((item, index) => (
//                     <TextBlock
//                         key={index}
//                         content={item.content}
//                         bgColor={item.bgColor}
//                         bgImage={item.bgImage}
//                         textColor={item.textColor}
//                         index={item.index}
//                     />
//                 ))}
//             </div>

//             <div className="max-w-3xl text-center mt-12">

//                 <p className="text-base md:text-md leading-relaxed text-gray-300">
//                     From intimate personal devotion to statement-making Oudh oils for
//                     ceremonies, gifting, and signature presence, we serve those who
//                     understand that true fragrance does not shout — it speaks with dignity.

//                     At Fawaahatul Khaleej, we invite you not just to wear Oudh, but to
//                     experience it — to carry with you the soul of the East, the honor of
//                     legacy, and the timeless elegance of those who appreciate refinement
//                     beyond trends.
//                 </p>
//             </div>
//         </section>
//     );
// }


///////////// all working ///////////

// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';

// // --- Types ---
// type TextBlockProps = {
//     content: string;
//     bgColor: string;
//     index: number;
//     bgImage?: string;
//     textColor?: string;
// };

// // --- Framer Motion Variants ---
// const charVariants: Variants = {
//     hidden: { opacity: 0, transition: { duration: 0.01 } },
//     visible: {
//         opacity: 1,
//         transition: { duration: 0.01, delay: 0.75 },
//     },
// };

// const blockVariants: Variants = {
//     hidden: { x: '0%', transition: { duration: 0.01, delay: 0 } },
//     visible: {
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1],
//             duration: 1,
//             ease: 'easeInOut',
//             delay: 0.25,
//         },
//     },
// };

// // --- TextBlock Component ---
// const TextBlock: FC<TextBlockProps> = ({ content, bgColor, bgImage, textColor = 'text-white' }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     const characters = useMemo(() => Array.from(content), [content]);
//     const animationState = isInView ? 'visible' : 'hidden';

//     const backgroundStyle = bgImage
//         ? {
//             backgroundImage: `url('${bgImage}')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             filter: 'grayscale(50%) brightness(0.8)',
//         }
//         : {};

//     return (
//         <div
//             ref={ref}
//             className={`
//                 flex items-center justify-center
//                 h-1/3 w-full md:h-full md:w-1/3
//                 ${textColor} text-5xl md:text-8xl font-black relative overflow-hidden
//                 ${!bgImage ? bgColor : 'bg-gray-900'}
//             `}
//             style={backgroundStyle}
//         >
//             <motion.div
//                 className="absolute inset-0"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 style={{ zIndex: 10, backgroundColor: 'black' }}
//             />
//             <motion.div
//                 className="flex relative z-20"
//                 initial="hidden"
//                 animate={animationState}
//             >
//                 {characters.map((char, charIndex) => (
//                     <motion.span
//                         key={charIndex}
//                         className="inline-block"
//                         variants={charVariants}
//                         initial="hidden"
//                         animate={animationState}
//                     >
//                         {char === ' ' ? '\u00A0' : char}
//                     </motion.span>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// // --- Main Component ---
// export default function TextSection() {
//     const data: TextBlockProps[] = [
//         {
//             content: 'First',
//             bgImage:
//                 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//             bgColor: 'bg-[#7e05d7]',
//             textColor: 'text-white',
//             index: 1,
//         },
//         {
//             content: 'Look',
//             bgColor: 'bg-[#f21e56]',
//             bgImage:
//                 'https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png',
//             textColor: 'text-white',
//             index: 2,
//         },
//         {
//             content: 'Last',
//             bgImage:
//                 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//             bgColor: 'bg-[#bd04a9]',
//             textColor: 'text-white',
//             index: 3,
//         },
//     ];

//     return (
//         <section className="bg-black text-white  pt-28 py-16 px-6 md:px-12 flex flex-col items-center justify-center">
//             {/* --- Heading & Description --- */}
//             <div className=" text-center mb-12">
//                 {/* <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-wide">
//                     An Invitation to Experience True Luxury
//                 </h2> */}
//                 <div className="text-center">
//                     <p className="text-gray-500"> About us </p>
//                     {/* Adjusted text size for responsiveness: text-6xl for mobile, text-9xl for md and up */}
//                     {/* <h2 className="text-6xl md:text-6xl font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80"> */}
//                     <h2 className="text-center text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80 font-extrabold tracking-tight leading-none  text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] uppercase">
//                         Fawaahatul
//                         <span className="block text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80 text-[1.5rem] sm:text-[2rem] md:text-[3rem] tracking-tight">
//                             Khaleej
//                         </span>
//                     </h2>
//                     {/* </h2> */}
//                 </div>

//             </div>

//             {/* --- Animated Text Blocks Section --- */}
//             <div className="flex flex-col md:flex-row relative templateContainer w-full max-w-7xl h-[60vh] min-h-[400px] max-h-[500px] overflow-x-hidden shadow-2xl rounded-2xl">
//                 {data.map((item, index) => (
//                     <TextBlock
//                         key={index}
//                         content={item.content}
//                         bgColor={item.bgColor}
//                         bgImage={item.bgImage}
//                         textColor={item.textColor}
//                         index={item.index}
//                     />
//                 ))}
//             </div>

//             <div className="max-w-3xl text-center mt-12">

//                 <p className="text-base md:text-md leading-relaxed text-gray-300">
//                     In a world where true luxury has become
//                     rare, Fawaahatul Khaleej stands as a
//                     guardian of tradition - preserving the
//                     noble legacy of pure Oudh and authentic
//                     Dahn Al Oudh in its most royal and
//                     untouched form.
//                     Born from a passion that spans
//                     generations, our journey began with a
//                     single belief: Oudh is not merely a
//                     fragrance - it is a heritage, a memory, a
//                     silent poetry carried in the air. From the
//                     mystical forests of Southeast Asia to
//                     the refined hands of our master
//                     distillers, every drop of our Dahn Al
//                     Oudh is patiently extracted, naturally
//                     aged, and carefully sealed, just as it was
//                     done in the courts of kings and scholars.
//                     Unlike commercial blends and synthetic
//                     imitations, our Oudh is 100% pure and
//                     undiluted - rich, deep, and evolving with
//                     grace upon every skin it touches. It
//                     opens with the intensity of ancient
//                     wood, settles with the warmth of
//                     ambered smoke, and lingers like a
//                     whispered prayer at dawn.
//                 </p>
//             </div>
//         </section>
//     );
// }



/////////// alll ///////////////////////////

// 'use client';

// import { motion, useInView, Variants } from 'framer-motion';
// import { useRef, FC, useMemo } from 'react';
// import TextFill from './TextFill';

// // --- Types ---
// type TextBlockProps = {
//     content: string;
//     bgColor: string;
//     index: number;
//     bgImage?: string;
//     textColor?: string;
// };

// // --- Framer Motion Variants ---
// const charVariants: Variants = {
//     hidden: { opacity: 0, transition: { duration: 0.01 } },
//     visible: {
//         opacity: 1,
//         transition: { duration: 0.01, delay: 0.75 },
//     },
// };

// const blockVariants: Variants = {
//     hidden: { x: '0%', transition: { duration: 0.01, delay: 0 } },
//     visible: {
//         x: ['-110%', '0%', '110%'],
//         transition: {
//             times: [0, 0.45, 1],
//             duration: 1,
//             ease: 'easeInOut',
//             delay: 0.25,
//         },
//     },
// };

// // --- TextBlock Component ---
// const TextBlock: FC<TextBlockProps> = ({ content, bgColor, bgImage, textColor = 'text-white' }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     const characters = useMemo(() => Array.from(content), [content]);
//     const animationState = isInView ? 'visible' : 'hidden';

//     const backgroundStyle = bgImage
//         ? {
//             backgroundImage: `url('${bgImage}')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             filter: 'grayscale(50%) brightness(0.8)',
//         }
//         : {};

//     return (
//         <div
//             ref={ref}
//             className={`
//                 flex items-center justify-center
//                 h-1/3 w-full md:h-full md:w-1/3
//                 ${textColor} text-5xl md:text-6xl cormorantGaramondSubheading lg:text-8xl font-black relative overflow-hidden
//                 ${!bgImage ? bgColor : 'bg-gray-900'}
//             `}
//             style={backgroundStyle}
//         >
//             <motion.div
//                 className="absolute inset-0"
//                 variants={blockVariants}
//                 initial="hidden"
//                 animate={animationState}
//                 style={{ zIndex: 10, backgroundColor: 'black' }}
//             />
//             <motion.div
//                 className="flex relative z-20"
//                 initial="hidden"
//                 animate={animationState}
//             >
//                 {characters.map((char, charIndex) => (
//                     <motion.span
//                         key={charIndex}
//                         className="inline-block"
//                         variants={charVariants}
//                         initial="hidden"
//                         animate={animationState}
//                     >
//                         {char === ' ' ? '\u00A0' : char}
//                     </motion.span>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// // --- Main Component ---
// export default function TextSection() {
//     const data: TextBlockProps[] = [
//         {
//             content: 'First',
//             bgImage:
//                 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//             bgColor: 'bg-[#7e05d7]',
//             textColor: 'text-white',
//             index: 1,
//         },
//         {
//             content: 'Look',
//             bgColor: 'bg-[#f21e56]',
//             bgImage:
//                 'https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png',
//             textColor: 'text-white',
//             index: 2,
//         },
//         {
//             content: 'Last',
//             bgImage:
//                 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//             bgColor: 'bg-[#bd04a9]',
//             textColor: 'text-white',
//             index: 3,
//         },
//     ];

//     return (
//         <section className="primaryBg text-white  pt-28 py-16 px-6 md:px-12 flex flex-col items-center justify-center">
//             {/* --- Heading & Description --- */}
//             <div className=" text-center mb-12">
//                 {/* <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-wide">
//                     An Invitation to Experience True Luxury
//                 </h2> */}
//                 <div className="text-center">
//                     <p className="text-gray-500"> About us </p>
//                     {/* Adjusted text size for responsiveness: text-6xl for mobile, text-9xl for md and up */}
//                     {/* <h2 className="text-6xl md:text-6xl font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80"> */}
//                     <h2 className="text-center text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80 font-extrabold tracking-tight leading-none  text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] uppercase">
//                         Fawaahatul
//                         <span className="block text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80 text-[1.5rem] sm:text-[2rem] md:text-[3rem] tracking-tight">
//                             Khaleej
//                         </span>
//                     </h2>
//                     {/* </h2> */}
//                 </div>

//             </div>

//             {/* --- Animated Text Blocks Section --- */}
//             <div className="flex flex-col md:flex-row relative templateContainer w-full max-w-7xl h-[60vh] min-h-[400px] max-h-[500px] overflow-x-hidden shadow-2xl rounded-2xl">
//                 {data.map((item, index) => (
//                     <TextBlock
//                         key={index}
//                         content={item.content}
//                         bgColor={item.bgColor}
//                         bgImage={item.bgImage}
//                         textColor={item.textColor}
//                         index={item.index}
//                     />
//                 ))}
//             </div>

//             <div className="text-center mt-12">

//                 <TextFill />
//             </div>
//         </section>
//     );
// }



'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, FC, useMemo } from 'react';
import TextFill from './TextFill';

// --- Types ---
type TextBlockProps = {
    content: string;
    bgColor: string;
    index: number;
    bgImage?: string;
    textColor?: string;
};

// --- Framer Motion Variants ---
const charVariants: Variants = {
    hidden: { opacity: 0, transition: { duration: 0.01 } },
    visible: {
        opacity: 1,
        transition: { duration: 0.01, delay: 0.75 },
    },
};

const blockVariants: Variants = {
    hidden: { x: '0%', transition: { duration: 0.01, delay: 0 } },
    visible: {
        x: ['-110%', '0%', '110%'],
        transition: {
            times: [0, 0.45, 1],
            duration: 1,
            ease: 'easeInOut',
            delay: 0.25,
        },
    },
};

// --- TextBlock Component ---
const TextBlock: FC<TextBlockProps> = ({ content, bgColor, bgImage, textColor = 'text-white' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const characters = useMemo(() => Array.from(content), [content]);
    const animationState = isInView ? 'visible' : 'hidden';

    const backgroundStyle = bgImage
        ? {
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(50%) brightness(0.8)',
        }
        : {};

    return (
        <div
            ref={ref}
            className={`
                flex items-center justify-center
                h-1/3 w-full md:h-full md:w-1/3
                ${textColor} text-5xl md:text-6xl cormorantGaramondSubheading lg:text-8xl font-black relative overflow-hidden
                ${!bgImage ? bgColor : 'bg-gray-900'}
            `}
            style={backgroundStyle}
        >
            <motion.div
                className="absolute inset-0"
                variants={blockVariants}
                initial="hidden"
                animate={animationState}
                style={{ zIndex: 10, backgroundColor: 'black' }}
            />
            <motion.div
                className="flex relative z-20"
                initial="hidden"
                animate={animationState}
            >
                {characters.map((char, charIndex) => (
                    <motion.span
                        key={charIndex}
                        className="inline-block"
                        variants={charVariants}
                        initial="hidden"
                        animate={animationState}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

// --- Main Component ---
export default function TextSection() {
    const data: TextBlockProps[] = [
        {
            content: 'First',
            bgImage:
                'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            bgColor: 'bg-[#7e05d7]',
            textColor: 'text-white',
            index: 1,
        },
        {
            content: 'Look',
            bgColor: 'bg-[#f21e56]',
            bgImage:
                'https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png',
            textColor: 'text-white',
            index: 2,
        },
        {
            content: 'Last',
            bgImage:
                'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            bgColor: 'bg-[#bd04a9]',
            textColor: 'text-white',
            index: 3,
        },
    ];

    return (
        <section className="primaryBg text-white  pt-28 py-16  flex flex-col items-center justify-center">
            {/* --- Heading & Description --- */}
            <div className=" text-center mb-12">
                {/* <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-wide">
                    An Invitation to Experience True Luxury
                </h2> */}
                <div className="text-center">
                    <p className="text-gray-500"> About us </p>
                    {/* Adjusted text size for responsiveness: text-6xl for mobile, text-9xl for md and up */}
                    {/* <h2 className="text-6xl md:text-6xl font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80"> */}
                    <h2 className="text-center loraParagraph text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4]/80 font-extrabold tracking-tight leading-none  text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] uppercase">
                        Fawaahatul
                        <span className="block text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4]/80 text-[1.5rem] sm:text-[2rem] md:text-[3rem] tracking-tight">
                            Khaleej
                        </span>
                    </h2>
                    {/* </h2> */}
                </div>

            </div>

            {/* --- Animated Text Blocks Section --- */}
            <div className="flex flex-col md:flex-row relative templateContainer w-full h-screen min-h-[400px] max-h-[500px] overflow-x-hidden shadow-2xl rounded-2xl">
                {data.map((item, index) => (
                    <TextBlock
                        key={index}
                        content={item.content}
                        bgColor={item.bgColor}
                        bgImage={item.bgImage}
                        textColor={item.textColor}
                        index={item.index}
                    />
                ))}
            </div>

            <div className="text-center mt-5 md:mt-12">

                <TextFill />
            </div>
        </section>
    );
}
