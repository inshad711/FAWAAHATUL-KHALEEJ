

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react'; // A common icon library for React projects

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 md:p-4" // Added p-4 for mobile spacing
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative bg-[#d6c3a4] rounded-lg shadow-lg w-full max-w-4xl overflow-hidden flex flex-col md:flex-row"
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {/* Close Button - Positioned absolutely inside the main modal content */}
                        <button
                            onClick={onClose}
                            className="absolute cursor-pointer top-0 right-0 m-2 p-2 text-white md:text-[#8b5e3c] md:hover:text-[#5e3b26] transition-colors z-10 rounded-full"
                            aria-label="Close contact form"
                        >
                            {/* Using 'X' from lucide-react, a simple text '×' would also work */}
                            {/* If you don't have lucide-react, you can use: <span className="text-2xl font-light">×</span> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>

                        {/* Left Side - Image */}
                        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                            <Image
                                // Note: The original image src is likely a placeholder or local path not accessible here.
                                // I'm keeping the original src for completeness.
                                src="/imageTemp2/WhatsApp Image 2025-10-24 at 12.26.24_64c05214.jpg"
                                alt="A bottle of luxury perfume surrounded by flowers"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Right Side - Form */}
                        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                            <h2 className="text-2xl text-[#8b5e3c] loraParagraph font-semibold mb-4">Contact us</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-[#8b5e3c]/70 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8b5e3c]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full border border-[#8b5e3c]/70 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8b5e3c]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full border border-[#8b5e3c]/70 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#8b5e3c]"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}