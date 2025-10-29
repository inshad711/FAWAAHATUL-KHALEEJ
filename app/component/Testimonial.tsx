

// "use client";

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules'; // ✅ Added Autoplay
// import 'swiper/css';
// import 'swiper/css/navigation';

// const testimonials = [
//     {
//         id: 1,
//         quote: "Franklin turned our ideas into a sharp, clean brand. Fast, easy, and right on point.",
//         author: "Ethan Moore",
//         title: "Co-founder, NovaTech",
//         image: "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
//     },
//     {
//         id: 2,
//         quote: "Clear, thoughtful, and fast — Franklin made the whole process effortless.",
//         author: "Olivia Tran",
//         title: "Creative Director, Bloom Agency",
//         image: "https://framerusercontent.com/images/j4kitBgDVx6ElGDAGtpxlM7RoHg.png",
//     },
//     {
//         id: 3,
//         quote: "Smart design, smooth delivery. Franklin is great to work with.",
//         author: "Lucas Bennett",
//         title: "Product Manager, Hexa Studio",
//         image: "https://framerusercontent.com/images/4be4S5coR2QthuRAfsb7USMjRZ0.png",
//     },
// ];

// export default function Testimonials() {
//     return (
//         <section className="bg-[#1a0f0a]">
//             <div className="templateContainer pt-5 md:py-0">
//                 {/* Top */}
//                 <div className="text-center">
//                     {/* <p className="text-gray-500 mb-2">(Why clients love Agero)</p> */}
//                     <h2 className="text-4xl md:text-6xl  lg:text-9xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4]/80">
//                         Testimonials
//                     </h2>
//                 </div>

//                 {/* Bottom */}
//                 <div className="flex flex-col md:flex-row gap-6 mt-5 md:mt-0">
//                     {/* Left Stats */}
//                     <div className="w-full md:w-1/3 relative border-2 border-[#d6c3a4]/80 overflow-hidden rounded-2xl h-[400px] md:h-auto">
//                         <Image
//                             src="https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png"
//                             alt="Stats Background"
//                             fill
//                             className="object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black/50" />
//                         <div className="relative z-10 p-8 text-[#E0C6A5] flex flex-col justify-center h-full gap-8">
//                             <div>
//                                 <h3 className="text-5xl md:text-7xl font-bold">26+</h3>
//                                 <p className="text-base md:text-lg">Finalized Projects</p>
//                             </div>
//                             <div>
//                                 <h3 className="text-5xl md:text-7xl font-bold">98%</h3>
//                                 <p className="text-base md:text-lg">Client satisfaction rate</p>
//                             </div>
//                             <div>
//                                 <h3 className="text-5xl md:text-7xl font-bold">10M</h3>
//                                 <p className="text-base md:text-lg">Gross Revenue</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Carousel */}
//                     <div className="w-full border-2 border-[#d6c3a4]/80 rounded-2xl md:w-2/3 relative h-[500px] md:h-auto">
//                         <Swiper
//                             modules={[Navigation, Autoplay]} // ✅ Added Autoplay here
//                             spaceBetween={10}
//                             slidesPerView={1}
//                             loop={true}
//                             autoplay={{
//                                 delay: 3000, // ✅ 3-second autoplay
//                                 disableOnInteraction: false,
//                             }}
//                             navigation={{
//                                 prevEl: '.swiper-prev',
//                                 nextEl: '.swiper-next',
//                             }}
//                             className="h-full rounded-2xl bg-black/50"
//                         >
//                             {testimonials.map((testimonial, index) => (
//                                 <SwiperSlide key={testimonial.id}>
//                                     <div className="relative h-full rounded-2xl overflow-hidden">
//                                         <Image
//                                             src={testimonial.image}
//                                             alt={`Testimonial ${testimonial.id}`}
//                                             fill
//                                             className="object-cover"
//                                         />
//                                         <div className="absolute inset-0 bg-black/50" />
//                                         <div className="relative z-10 p-8 text-[#E0C6A5] h-full flex flex-col justify-between">
//                                             <div className="flex justify-start border-b border-white/20 pb-4 text-sm">
//                                                 <span>{String(index + 1).padStart(2, '0')}</span>
//                                                 <span>/ 03</span>
//                                             </div>
//                                             <div className="flex flex-col justify-center flex-grow">
//                                                 <p className="text-xl md:text-2xl font-medium mb-4">{testimonial.quote}</p>
//                                                 <div>
//                                                     <p className="font-semibold">{testimonial.author}</p>
//                                                     <p className="text-white/60">{testimonial.title}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                         {/* Custom Navigation */}
//                         <div className="absolute  bottom-6 right-6 flex gap-2 z-20">
//                             <button className="swiper-prev cursor-pointer w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
//                                 <Image
//                                     src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"
//                                     alt="Previous"
//                                     width={24}
//                                     height={24}
//                                 />
//                             </button>
//                             <button className="swiper-next cursor-pointer w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
//                                 <Image
//                                     src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
//                                     alt="Next"
//                                     width={24}
//                                     height={24}
//                                 />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
    {
        id: 1,
        quote: "The fragrance captured the essence of our brand perfectly — elegant, lasting, and unforgettable.",
        author: "Isabella Laurent",
        title: "Founder, Maison de Fleur",
        image: "https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png",
    },
    {
        id: 2,
        quote: "Every scent tells a story — working with Franklin felt like crafting a masterpiece of aroma and design.",
        author: "Noah Devereux",
        title: "Creative Director, Lueur Parfums",
        image: "https://framerusercontent.com/images/j4kitBgDVx6ElGDAGtpxlM7RoHg.png",
    },
    {
        id: 3,
        quote: "From bottle to brand, everything smelled of luxury. Franklin’s design made our fragrance irresistible.",
        author: "Amara Chen",
        title: "Product Manager, Velisse Fragrance Co.",
        image: "https://framerusercontent.com/images/4be4S5coR2QthuRAfsb7USMjRZ0.png",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[#1a0f0a]">
            <div className="templateContainer pt-5 md:py-0">
                {/* Top */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl lg:text-9xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-[#d6c3a4]/80">
                        Testimonials
                    </h2>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row gap-6 mt-5 md:mt-0">
                    {/* Left Stats */}
                    <div className="w-full md:w-1/3 relative border-2 border-[#d6c3a4]/80 overflow-hidden rounded-2xl h-[400px] md:h-auto">
                        <Image
                            src="https://framerusercontent.com/images/nURHcgFo9S6zVF3j0ly85sSmvE.png"
                            alt="Stats Background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="relative z-10 p-8 text-[#E0C6A5] flex flex-col justify-center h-full gap-8">
                            <div>
                                <h3 className="text-5xl md:text-7xl font-bold">26+</h3>
                                <p className="text-base md:text-lg">Perfume Collections Designed</p>
                            </div>
                            <div>
                                <h3 className="text-5xl md:text-7xl font-bold">98%</h3>
                                <p className="text-base md:text-lg">Client satisfaction rate</p>
                            </div>
                            <div>
                                <h3 className="text-5xl md:text-7xl font-bold">10M</h3>
                                <p className="text-base md:text-lg">Bottles Sold Worldwide</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Carousel */}
                    <div className="w-full border-2 border-[#d6c3a4]/80 rounded-2xl md:w-2/3 relative h-[500px] md:h-auto">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: '.swiper-prev',
                                nextEl: '.swiper-next',
                            }}
                            className="h-full rounded-2xl bg-black/50"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="relative h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={`Testimonial ${testimonial.id}`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50" />
                                        <div className="relative z-10 p-8 text-[#E0C6A5] h-full flex flex-col justify-between">
                                            <div className="flex justify-start border-b border-white/20 pb-4 text-sm">
                                                <span>{String(index + 1).padStart(2, '0')}</span>
                                                <span>/ 03</span>
                                            </div>
                                            <div className="flex flex-col justify-center flex-grow">
                                                <p className="text-xl md:text-2xl font-medium mb-4">{testimonial.quote}</p>
                                                <div>
                                                    <p className="font-semibold">{testimonial.author}</p>
                                                    <p className="text-white/60">{testimonial.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation */}
                        <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                            <button className="swiper-prev cursor-pointer w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <Image
                                    src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"
                                    alt="Previous"
                                    width={24}
                                    height={24}
                                />
                            </button>
                            <button className="swiper-next cursor-pointer w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                <Image
                                    src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
                                    alt="Next"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
