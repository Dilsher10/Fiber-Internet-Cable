import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header className="absolute z-10 w-full mt-5 lg:mt-5">
            <div className="mx-auto max-w-screen-xl px-4 md:px-[4.4rem] lg:px-[4.4rem]">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-white font-extrabold text-[17px] md:text-[13px] lg:text-2xl" href="/">
                            LISAM SOLUTIONS LLC
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center md:gap-5 lg:gap-16 font-bold">
                                <li>
                                    <Link className="text-primary transition hover:text-primary md:text-1xl" href="/"> Home </Link>
                                </li>
                                <li>
                                    <Link className="text-white transition hover:text-primary md:text-1xl" href="#aboutUs"> About Us </Link>
                                </li>
                                <li>
                                    <Link className="text-white transition hover:text-primary md:text-1xl" href="#Services"> Services </Link>
                                </li>
                                <li>
                                    <Link className="text-white transition hover:text-primary md:text-1xl" href="#contactUs"> Contact Us </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex sm:gap-4">
                            <a className="rounded-md bg-primary md:px-2 md:py-2 lg:px-8 lg:py-4 font-bold text-white shadow-sm flex gap-2 items-center hover:animate-bounce-up-down md:text-sm" href="tel:+1-(888)-845-0301">
                                <Image src={'/phone.png'} alt="phone" width={18} height={18} /> (888)-845-0301
                            </a>
                        </div>
                        <div className="block md:hidden">
                            <button
                                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar