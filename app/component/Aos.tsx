"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the styles

interface AosProps {
    children: React.ReactNode;
    animation?: string; // e.g., 'fade-up', 'slide-left'
    duration?: number; // duration in ms
    delay?: number; // delay in ms
    offset?: number; // offset in px
}

const Aos: React.FC<AosProps> = ({
    children,
    animation = "fade-up",
    duration = 800,
    delay = 0,
    offset = 120,
}) => {
    // Initialize AOS only once on component mount
    useEffect(() => {
        AOS.init({
            offset: 120,
            delay: 0,
            duration: 800,
            easing: "ease",
            once: true,
            mirror: false,
            anchorPlacement: "top-bottom",
        });

        AOS.refresh();

        const timeoutId = setTimeout(() => {
            AOS.refresh();
        }, 500);

        return () => clearTimeout(timeoutId);
    }, []);

    // 1. Check if children is a single, valid element.
    if (!React.isValidElement(children)) {
        return children;
    }

    // 2. Define the dynamic props object with an index signature to satisfy TypeScript.
    const aosProps: { [key: string]: string | number | boolean | null | undefined } = {
        "data-aos": animation,
        "data-aos-duration": duration.toString(),
        "data-aos-delay": delay.toString(),
        "data-aos-offset": offset.toString(),
    };

    // 3. Use the defined object in React.cloneElement.
    // The error should now be resolved.
    return React.cloneElement(children, aosProps);
};

export default Aos;