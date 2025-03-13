import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#1f2124]">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 md:px-[4.4rem] lg:px-10 lg:pt-20">
                <div className="grid grid-cols-1 gap-1 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-start text-white font-extrabold text-2xl sm:justify-start">
                            <Link href="/">LISAM SOLUTIONS LLC</Link>
                        </div>
                        <p className="mt-6 max-w-md text-left leading-relaxed text-white sm:max-w-xs sm:text-left">
                            We are affiliate and retail partners of AT&T, Xfinity and Comcast Fiber Internet service providers in the United states.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                        <div className="text-left sm:text-left">
                            <p className="text-2xl font-bold text-white mt-8 lg:mt-0 md:mt-0">Company</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#Services">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#aboutUs">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#contactUs"> Contact Us </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="text-left sm:text-left gap-">
                            <p className="text-2xl font-bold text-white mt-8 lg:mt-0 md:mt-0">Service</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">
                                        Cable Internet
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">Fiber Internet </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#"> TV Service </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="/blogs"> Blogs </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-left sm:text-left">
                            <p className="text-2xl font-bold text-white mt-8 lg:mt-0 md:mt-0">Subscribe Our Newsletter</p>
                            <form className="mt-6 w-full">
                                <label htmlFor="UserEmail" className="sr-only"> Email </label>
                                <div
                                    className="rounded-md border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4"
                                >
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="Your email"
                                        className="w-full border-none bg-transparent focus:border-none focus:ring-none sm:text-sm outline-none text-white"
                                    />
                                    <button
                                        className="mt-1 w-full rounded-md bg-primary px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:text-left">
                        <p className="mt-4 text-sm text-white text-center sm:mt-0">2025 All right reserved by <Link href="/" className="text-white">LISAM SOLUTIONS LLC</Link>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer