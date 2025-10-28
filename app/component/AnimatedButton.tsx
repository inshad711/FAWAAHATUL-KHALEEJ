"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
    href: string;
    children: React.ReactNode;
    textColorRgb: string;     // e.g. "255 215 128"
    outlineColorRgb: string;  // e.g. "255 215 128"
    fillColorRgb: string;     // e.g. "255 255 255"
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    href,
    children,
    textColorRgb,
    outlineColorRgb,
    fillColorRgb,
}) => {
    const textRgb = `rgb(${textColorRgb})`;
    const outlineRgb = `rgb(${outlineColorRgb})`;
    const fillRgb = `rgb(${fillColorRgb})`;

    return (
        <motion.a
            href={href}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 font-bold tracking-widest uppercase cursor-pointer px-10 py-4"
            style={{
                borderColor: outlineRgb,
                color: textRgb,
            }}
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* Background Fill Animation */}
            <motion.span
                className="absolute inset-0 z-0"
                style={{ backgroundColor: fillRgb, transformOrigin: "left center" }}
                variants={{
                    rest: { scaleX: 0 },
                    hover: {
                        scaleX: 1,
                        transition: {
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1],
                        },
                    },
                }}
            />

            {/* Text Animation */}
            <motion.span
                className="relative z-10"
                variants={{
                    rest: { color: textRgb },
                    hover: {
                        color: outlineRgb,
                        transition: { duration: 0.3 },
                    },
                }}
            >
                {children}
            </motion.span>
        </motion.a>
    );
};

export default AnimatedButton;
