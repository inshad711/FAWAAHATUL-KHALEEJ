'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TextAlignEnd, X, PhoneCall } from 'lucide-react';
import ContactModal from './ContactModal';
import { usePathname } from 'next/navigation';

interface NavItem {
    title: string;
    href: string;
}

// Existing main navigation items
const mainNavItems: NavItem[] = [
    { title: 'Home', href: '/' },
    { title: 'About us', href: '/about' },
    { title: 'Contact us', href: '/contact' },
];

// New navigation items for the second row, based on the image
const secondaryNavItems: NavItem[] = [
    { title: 'PERFUMES', href: '/perfumes' },
    { title: 'COLLECTIONS', href: '/collections' },
    { title: 'BODY', href: '/body' },
    { title: 'DISCOVERY', href: '/discovery' },
    { title: 'GIFT IDEAS', href: '/gift-ideas' },
    { title: 'HOUSE OF FAWAAHATUL', href: '/house' },
];

const HeaderTwo: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    // --- Scroll Logic ---
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- Prevent background scroll when modal or menu open ---
    useEffect(() => {
        if (isModalOpen || isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen, isMobileMenuOpen]);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Colors based on scroll
    const iconColor = isScrolled ? 'text-gray-800' : 'text-white';
    const textColor = isScrolled ? 'text-gray-800' : 'text-white';

    // New: Color logic for the secondary row links
    const secondaryTextColor = isScrolled ? 'text-gray-600' : 'text-white';


    const buttonBg = isScrolled
        ? 'bg-gray-800 text-white hover:bg-gray-700'
        : 'ctaBg text-white hover:bg-yellow-600';
    const logoColor = isScrolled ? 'text-gray-800' : 'text-white';

    // --- Mobile Menu Animation ---
    const mobileMenuClasses = isMobileMenuOpen
        ? 'translate-x-0 opacity-100 visible'
        : '-translate-x-full opacity-0 invisible pointer-events-none';

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            {/* --- TOP ROW (Logo, Main Nav, Buttons) --- */}
            <div className="templateContainer px-4 py-4 h-20 flex items-center justify-between">
                {/* Left: Nav Items (hidden on mobile) */}
                <nav className="hidden md:flex items-center space-x-8 flex-1">
                    {mainNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`text-md font-bold montserratCTA transition-colors duration-200 ${textColor} ${isActive ? 'text-yellow-600' : ''} hover:text-yellow-600`}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>

                {/* Center: Logo */}
                <div className="flex-none">
                    <Link href="/" className="flex flex-col items-center leading-none">
                        <span
                            className={`text-xl font-serif tracking-widest transition-all duration-300 ${logoColor}`}
                        >
                            FAWAAHATUL
                        </span>
                        <span
                            className={`text-xs font-serif tracking-widest mt-1 transition-all duration-300 ${logoColor} opacity-80`}
                        >
                            KHALEEJ
                        </span>
                    </Link>
                </div>

                {/* Right: Call Button + Mobile Toggle */}
                <div className="flex-1 flex justify-end items-center">
                    <button
                        className={`px-4 py-3 cursor-pointer text-sm montserratCTA font-medium rounded-md transition-colors duration-200 shadow-xl ${buttonBg} lg:px-5 lg:py-2 lg:text-base`}
                        onClick={() => setIsModalOpen(true)}
                    >
                        <PhoneCall className="w-4 h-4 inline-block mr-2" />
                        Call Now
                    </button>

                    <button
                        className="md:hidden ml-2 p-1"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className={`w-6 h-6 ${iconColor}`} />
                        ) : (
                            <TextAlignEnd className={`w-6 h-6 ${iconColor}`} />
                        )}
                    </button>
                </div>
            </div>

            {/* --- SECONDARY NAVIGATION ROW (Desktop Only) --- */}
            <div className="hidden md:block border-t border-gray-100/30">
                <nav className="templateContainer px-4 py-3 flex items-center justify-center space-x-10">
                    {secondaryNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`text-sm tracking-widest montserratCTA font-medium transition-colors duration-200 ${secondaryTextColor} ${isActive ? 'text-yellow-600' : ''} hover:text-yellow-600`}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>
            </div>


            {/* --- Overlay (Dim Background) --- */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            {/* --- Mobile Menu (Slide from Left with Logo) --- */}
            <div
                className={`md:hidden fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-xl transition-all duration-300 ease-out transform z-50 ${mobileMenuClasses}`}
            >
                {/* Mobile Menu Header (Logo + Close Button) */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <Link
                        href="/"
                        className="flex flex-col items-start leading-none"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <span className="text-xl font-serif tracking-widest text-gray-800">
                            FAWAAHATUL
                        </span>
                        <span className="text-xs font-serif tracking-widest mt-1 text-gray-800 opacity-80">
                            KHALEEJ
                        </span>
                    </Link>

                    <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
                        <X className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Mobile Nav Links (Including secondary items) */}
                <ul className="flex flex-col space-y-2 p-6">
                    {/* Main Items */}
                    {mainNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`text-gray-800 montserratCTA font-semibold py-2 px-3 rounded hover:bg-gray-100 transition-colors ${isActive ? ' text-yellow-600' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                    {/* Separator for secondary items */}
                    <hr className="my-2 border-gray-200" />
                    {/* Secondary Items added to mobile menu */}
                    {secondaryNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`text-gray-800 montserratCTA font-normal text-sm py-2 px-3 rounded hover:bg-gray-100 transition-colors ${isActive ? ' text-yellow-600' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        );
                    })}


                    <button
                        className={`w-full mt-4 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 shadow-xl ${buttonBg}`}
                        onClick={() => {
                            setIsModalOpen(true);
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        <PhoneCall className="w-4 h-4 inline-block mr-2" />
                        Call Now
                    </button>
                </ul>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header>
    );
};

export default HeaderTwo;