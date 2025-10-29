

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
