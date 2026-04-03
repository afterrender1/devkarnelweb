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
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

                <Link href={"/"}>
                    <div className="relative w-32 h-12 md:w-42 md:h-12 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/dklogo.png"
                            alt="Devskarnel"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {['About', 'Services', 'Tesimonials', 'Portfolio', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm lg:text-base font-semibold text-slate-600 hover:text-[#23bcdf] transition-all relative group "
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#23bcdf] transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <div className="relative min-w-30 md:min-w-37.5 h-10 md:h-12 opacity-90 overflow-hidden rounded-lg bg-[#00ADB5] z-10 flex items-center justify-center">

                            <div className="absolute z-10 -translate-x-full group-hover:translate-x-[200%] ease-in transition-all duration-1000 h-full w-24 bg-linear-to-r from-transparent via-white/30 to-transparent -skew-x-12"></div>

                            <div className="absolute flex items-center justify-center text-white z-1 opacity-90 rounded-[7px] inset-[1.5px] bg-black">
                                <button
                                    style={{
                                        background: "linear-gradient(110deg, #084948 0%, #0c7371 60%, #159e9b 100%)",

                                    }}

                                    name="text"
                                    className="cursor-pointer font-bold text-sm md:text-base h-full w-full px-4 md:px-8 rounded-lg  hover:bg-[#0a5a59] transition-colors whitespace-nowrap"
                                >
                                    Book Now
                                </button>
                            </div>

                            <div className="absolute duration-1000 group-hover:animate-spin w-[150%] h-[150%] bg-linear-to-r from-green-500 to-yellow-500 blur-[20px]"></div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;