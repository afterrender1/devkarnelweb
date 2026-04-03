import { Urbanist } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const Navbar = () => {
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10 ${urbanist.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
                
                {/* Logo Section */}
                <Link href={"/"} className="shrink-0">
                    <div className="relative w-28 h-10 sm:w-32 sm:h-12 md:w-40 md:h-12 transition-transform duration-300 hover:scale-105">
                        <Image
                            src="/dklogo.png"
                            alt="Devskarnel"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {['About', 'Services', 'Tesimonials', 'Portfolio', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm lg:text-base font-semibold text-slate-600 hover:text-[#23bcdf] transition-all relative group whitespace-nowrap"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#23bcdf] transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* CTA Button Section */}
                <div className="flex items-center shrink-0">
                    <div className="relative group">
                        <div className="relative min-w-25 sm:min-w-30 md:min-w-37.5 h-9 md:h-12 opacity-90 overflow-hidden rounded-lg bg-[#00ADB5] z-10 flex items-center justify-center">
                            
                            {/* Shine Effect */}
                            <div className="absolute z-10 -translate-x-full group-hover:translate-x-[200%] ease-in transition-all duration-1000 h-full w-24 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12"></div>

                            {/* Inner Button Content */}
                            <div className="absolute flex items-center justify-center text-white z-1 opacity-90 rounded-[7px] inset-[1.5px] bg-black overflow-hidden">
                                <button
                                    style={{
                                        background: "linear-gradient(110deg, #084948 0%, #0c7371 60%, #159e9b 100%)",
                                    }}
                                    name="text"
                                    className="cursor-pointer font-bold text-xs sm:text-sm md:text-base h-full w-full px-3 sm:px-6 md:px-8 rounded-lg hover:bg-[#0a5a59] transition-colors whitespace-nowrap"
                                >
                                    Book Now
                                </button>
                            </div>

                            {/* Border Animation */}
                            <div className="absolute duration-1000 group-hover:animate-spin w-[150%] h-[150%] bg-linear-to-r from-green-500 to-yellow-500 blur-[20px]"></div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;