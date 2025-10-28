

// "use client";
// // ImageRevealComponent.tsx

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// // The source for the image shown in your media.
// // Replace with the actual path to your image in the 'public' directory
// const IMAGE_SRC = "/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg";

// const ImageRevealComponent: React.FC = () => {
//     // Framer Motion variants for the animation
//     const containerVariants = {
//         // Initial state where the image itself is hidden
//         hidden: { opacity: 0 },
//         // State when it's in view
//         visible: {
//             opacity: 1,
//             transition: {
//                 // Delay the start of the entire animation slightly
//                 delay: 0.2,
//                 // Stagger the child animations (the cover div)
//                 staggerChildren: 0.2,
//             },
//         },
//     };

//     const coverVariants = {
//         hidden: { y: '0%' }, // Start position (cover is fully down)
//         visible: {
//             y: '100%', // End position (cover is fully up, revealing the image)
//             transition: {
//                 duration: 1.2, // Duration of the reveal
//                 ease: [0.6, 0.01, -0.05, 0.9], // Custom easing for a smooth effect
//             },
//         },
//     };

//     return (

//         <div className="flex justify-center items-center py-20 bg-black">

//             {/* Motion container to manage the initial setup and animation sequence */}
//             <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 // 💡 CHANGE HERE: Use 'whileInView' to trigger the animation
//                 // when the user scrolls the component into view.
//                 whileInView="visible"
//                 // Option: 'viewport' to configure how the element is considered "in view"
//                 viewport={{ once: true, amount: 0.8 }}
//                 className="relative w-full max-w-lg h-96 overflow-hidden shadow-2xl"
//             >

//                 {/*
//                 1. The Image: The content to be revealed.
//                 We use the opacity transition on the container to prevent a "flash" of the image
//                 before the cover loads and starts its animation.
//                 */}
//                 <div className="absolute inset-0">
//                     <Image
//                         src={IMAGE_SRC}
//                         alt="Close-up of a hand wearing a sparkling ring"
//                         layout="fill"
//                         objectFit="cover" // Ensures the image covers the area
//                         priority // Load the image with high priority
//                     />
//                 </div>


//                 <motion.div
//                     variants={coverVariants}
//                     className="absolute inset-0 bg-gray-900 z-10" // The covering element
//                 />

//             </motion.div>
//         </div>
//     );
// };

// export default ImageRevealComponent;