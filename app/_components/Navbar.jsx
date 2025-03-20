"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full bg-[#1f2124] py-4">
            <div className="mx-auto max-w-screen-xl px-4 md:px-[4.4rem] lg:px-[4.4rem]">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-white font-extrabold text-[17px] md:text-[13px] lg:text-2xl" href="/">
                            LISAM SOLUTIONS LLC
                        </Link>
                    </div>
                    <nav className={`${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:gap-10 font-bold absolute top-16 left-0 w-full bg-[#1f2124] md:static md:w-auto md:bg-transparent`}>
                        <ul className="flex flex-col md:flex-row px-4 gap-5 md:gap-5 lg:gap-16 py-10 md:py-0">
                            <li><Link className="text-primary transition hover:text-primary text-lg" href="/"> Home </Link></li>
                            <li><Link className="text-white transition hover:text-primary text-lg" href="#aboutUs"> About Us </Link></li>
                            <li><Link className="text-white transition hover:text-primary text-lg" href="#Services"> Services </Link></li>
                            <li><Link className="text-white transition hover:text-primary text-lg" href="/blog"> Blog </Link></li>
                            <li><Link className="text-white transition hover:text-primary text-lg" href="#contactUs"> Contact Us </Link></li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                        <a className="hidden sm:flex rounded-md bg-primary md:px-2 md:py-2 lg:px-8 lg:py-4 font-bold text-white shadow-sm gap-2 items-center hover:animate-bounce-up-down md:text-sm" href="tel:+1-(888)-845-0301">
                            <Image src={'/phone.png'} alt="phone" width={18} height={18} /> (888)-845-0301
                        </a>
                        <button className="block md:hidden rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
