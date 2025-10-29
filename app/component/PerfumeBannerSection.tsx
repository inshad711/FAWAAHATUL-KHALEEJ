

import React from 'react';
import Image from 'next/image';

const CTA: React.FC = () => {
    return (
        <div className=' primaryBg'>
            <div className=" templateContainer py-20">
                <div className="w-full  primaryBg/50 border border-gray-200 px-8 lg:px-8 rounded-3xl">
                    <div className="grid lg:grid-cols-5 relative items-center">
                        {/* Left Text Section - give it an order of 2 on small screens */}
                        <div data-aos="fade-up"
                            className="order-2 lg:order-none lg:col-span-2 w-full pb-4 md:pb-8  lg:py-2 text-center lg:text-left">
                            <h2 className=" text-[#E0C6A5] loraParagraph capitalize text-2xl md:text-4xl font-gotu leading-tight">
                                Experience the Luxury of Authentic Perfumes
                            </h2>
                            <p className="capitalize montserratCTA text-white text-lg leading-relaxed mt-4">
                                Welcome to the world of real Oudh.
                                Welcome to everlasting prestige.
                            </p>
                            <div className="flex flex-row justify-center lg:justify-start pb-8 md:pb-0 gap-x-4 mt-6">
                                <a
                                    href="/contact"
                                    className="mt-8 inline-flex items-center justify-center 
                      border border-transparent 
                          font-medium 
                         shadow-sm text-white bg-white/40 
                         hover:bg-gray-700  ease-in-out 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 montserratCTA focus:ring-gray-900    px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300"
                                >
                                    Contact Now
                                    {/* SVG Arrow icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="11"
                                        viewBox="0 0 12 11"
                                        fill="none"
                                        className="ml-3 w-3 h-3"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11.4605 6.00095C11.7371 5.72433 11.7371 5.27584 11.4605 4.99921L7.2105 0.749214C6.93388 0.472592 6.48539 0.472592 6.20877 0.749214C5.93215 1.02584 5.93215 1.47433 6.20877 1.75095L9.9579 5.50008L6.20877 9.24921C5.93215 9.52584 5.93215 9.97433 6.20877 10.2509C6.48539 10.5276 6.93388 10.5276 7.2105 10.2509L11.4605 6.00095ZM1.54384 10.2509L5.79384 6.00095C6.07046 5.72433 6.07046 5.27584 5.79384 4.99921L1.54384 0.749214C1.26721 0.472592 0.818723 0.472592 0.542102 0.749214C0.26548 1.02583 0.26548 1.47433 0.542102 1.75095L4.29123 5.50008L0.542101 9.24921C0.26548 9.52584 0.26548 9.97433 0.542101 10.2509C0.818722 10.5276 1.26721 10.5276 1.54384 10.2509Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>


                            </div>
                        </div>

                        {/* Right side for image - give it an order of 1 on small screens */}
                        <div className="order-1 lg:order-none lg:col-span-3 flex items-center justify-center pt-8 md:pt-0">
                            <div data-aos="fade-up"
                                data-aos-delay="100" className="relative  w-full h-[250px] lg:h-[350px]">

                                <Image
                                    src="https://aroma-workdo.myshopify.com/cdn/shop/files/product.png?v=1697523457"
                                    alt="Mobile App Preview Left"
                                    width={400}
                                    height={400}
                                    className="
        absolute 
        left-1/2 -translate-x-1/2 
        top-1/2 -translate-y-1/2 
        object-contain 
       
        w-[250px] sm:w-[240px] md:w-[280px] lg:w-[450px] primaryBg"
                                    style={{ zIndex: 1, top: '25%' }}
                                />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;