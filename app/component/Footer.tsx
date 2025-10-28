

// "use client";

// import React from "react";

// // Footer link data
// const footerLinks = [
//     {
//         title: "Resources",
//         links: ["Privacy Policy", "Terms of use", "Sitemap", "User Guide", "Feedback Form"],
//     },
// ];

// // Type for footer link section
// interface LinkSectionProps {
//     title: string;
//     links: string[];
// }

// // Memoized subcomponent
// const LinkSection: React.FC<LinkSectionProps> = React.memo(({ links }) => (
//     <div>

//         <div>
//             <ul className="grid grid-cols-3 sm:flex sm:flex-row sm:gap-8 gap-5">
//                 {links.map((link) => (
//                     <li key={link}>
//                         <a
//                             href="#"
//                             className="text-gray-400 hover:text-white transition duration-200 text-sm block"
//                         >
//                             {link}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>

//     </div>
// ));

// LinkSection.displayName = "LinkSection";

// // Main Footer Component
// const Footer: React.FC = () => {
//     return (
//         <footer className="bg-black text-white font-sans">
//             <div className="templateContainer px-4 pt-12 lg:pt-16">
//                 {/* Top Section */}
//                 <div className="flex flex-col gap-10 border-b border-gray-800 pb-10">
//                     {/* News/Report Column */}
//                     <div className="max-w-xl mx-auto text-center sm:text-left">
//                         <p className="text-sm text-gray-300 leading-relaxed">
//                             Scrutinizer Report and Voting Results of Abst AGM held on 18.09.2023.
//                             Proceedings of AGM held on 18.09.2023. The Company confirms order placed
//                             for RVNL Rishikesh Karan Prayag Rail Infrastructure Project. Responsive
//                             Industries surges 20% to hit a new all-time high — here why. Responsive
//                             Industries Shares Surge 18% On Garib Rath Contract From Railways.
//                         </p>
//                     </div>

//                     {/* Footer Links */}
//                     <div className="max-w-2xl mx-auto">
//                         {footerLinks.map((section) => (
//                             <LinkSection
//                                 key={section.title}
//                                 title={section.title}
//                                 links={section.links}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Bigger Text */}
//                 <div className="py-4 overflow-hidden">
//                     <h2 className="text-center font-extrabold tracking-tight leading-none text-gray-200 text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] uppercase">
//                         Fawaahatul
//                         <span className="block text-[1.5rem] sm:text-[2rem] md:text-[3rem] tracking-tight">
//                             Khaleej
//                         </span>
//                     </h2>
//                 </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="border-t border-gray-800 py-6">
//                 <div className="container mx-auto px-4">
//                     <p className="text-center text-gray-400 text-sm">
//                         &copy; 2025 Industries. All rights reserved.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// // Exported Wrapper Component
// export default function FooterMain() {
//     return <Footer />;
// }


"use client";

import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Footer link data with individual hrefs
const footerLinks = [
    {
        links: [
            { name: "About Us", href: "/about" },
            { name: "Contact Us", href: "/contact" },
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of use", href: "#" },


        ],
    },
];

// Type for footer link section
interface LinkSectionProps {
    links: { name: string; href: string }[];
}

// Memoized subcomponent
const LinkSection: React.FC<LinkSectionProps> = React.memo(({ links }) => (
    <div>
        <ul className="grid grid-cols-3 sm:flex sm:flex-row sm:gap-8 gap-5">
            {links.map((link) => (
                <li key={link.name}>
                    <a
                        href={link.href}
                        className="text-gray-400 montserratCTA hover:text-white transition duration-200 text-sm block"
                    >
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
));

LinkSection.displayName = "LinkSection";
// Social Media Links Data
const socialLinks = [
    { icon: <Youtube size={20} />, href: "https://www.youtube.com" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com" },
    { icon: <FaXTwitter size={20} />, href: "https://www.x.com" }, // X is formerly Twitter
    { icon: <Instagram size={20} />, href: "https://www.instagram.com" },
    { icon: <FaWhatsapp size={20} />, href: "https://www.whatsapp.com" }, // Using MessageSquare as WhatsApp placeholder
];

// Main Footer Component
const Footer: React.FC = () => {
    return (
        <footer className="primaryBg text-white">
            <div className="templateContainer px-4 pt-12 lg:pt-16">
                {/* Bigger Text */}
                <div className="py-4 overflow-hidden">
                    <Link href="/">
                        <h2 className="text-center text-black/10 bg-clip-text loraParagraph text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4] font-extrabold tracking-tight leading-none  text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] uppercase">
                            Fawaahatul
                            <span className="block text-black/10 bg-clip-text loraParagraph text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4] text-[1.5rem] sm:text-[2rem] md:text-[3rem] tracking-tight">
                                Khaleej
                            </span>
                        </h2>
                    </Link>
                </div>
                {/* Top Section */}
                <div className="flex flex-col gap-10 border-b border-gray-800 pb-10">
                    {/* News/Report Column */}
                    <div className="max-w-2xl mx-auto text-center ">
                        <p className="text-sm montserratCTA text-gray-300 leading-relaxed">
                            In a world where true luxury has become
                            rare, Fawaahatul Khaleej stands as a
                            guardian of tradition - preserving the
                            noble legacy of pure Oudh and authentic
                            Dahn Al Oudh in its most royal and
                            untouched form.
                            Born from a passion that spans
                            generations, our journey began with a
                            single belief: Oudh is not merely a
                            fragrance - it is a heritage, a memory, a
                            silent poetry carried in the air.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="max-w-2xl mx-auto">
                        {footerLinks.map((section, idx) => (
                            <LinkSection
                                key={idx}
                                links={section.links}
                            />
                        ))}

                        {/* Social Media Icons */}
                        <div className="flex justify-center gap-6 mt-6">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition duration-200"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>


            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#ede3d2]/80 py-6">
                {/* <div className="container mx-auto px-4">
                    <p className="text-center montserratCTA text-gray-400 text-sm">
                        &copy; 2025 Fawaahatul. All rights reserved.
                    </p>
                </div> */}
                <div className="container mx-auto px-4">
                    <p className="text-center montserratCTA text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Fawaahatul. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

// Exported Wrapper Component
export default function FooterMain() {
    return <Footer />;
}
