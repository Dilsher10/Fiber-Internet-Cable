"use client"
import { Check, FacebookIcon, Globe, Mail, MapPin, Monitor, Phone, Twitter, Wifi, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoSlider from "./_components/LogoSlider";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      {/* Navbar */}

      <header className="absolute z-10 w-full mt-5 lg:mt-5">
        <div className="mx-auto max-w-screen-xl px-4 md:px-[4.4rem] lg:px-[4.4rem]">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-white font-extrabold text-[17px] md:text-[13px] lg:text-2xl" href="/">
                {/* <Image src={'/logo.png'} alt='logo' width={190} height={185} /> */}
                LISAM SOLUTIONS LLC
              </Link>
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center md:gap-5 lg:gap-16 font-bold">
                  <li>
                    <a className="text-primary transition hover:text-primary md:text-sm" href="#"> Home </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-primary md:text-sm" href="#"> About Us </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-primary md:text-sm" href="#"> Services </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-primary md:text-sm" href="#"> Contact Us </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <a className="rounded-md bg-primary md:px-2 md:py-2 lg:px-8 lg:py-4 font-bold text-white shadow-sm flex gap-2 items-center hover:animate-bounce-up-down md:text-sm" href="tel:(888)-845-0301">
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

      <Hero />

      <section className="bg-white lg:mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-8 md:px-[4.4rem] lg:px-[4.4rem]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-5">
            <div>
              <Image src='./about.PNG' alt='about' width={600} height={600}/>
            </div>
            <div>
              <div className="max-w-lg md:max-w-none">
                <h5 className="text-primary font-bold">About Us</h5>
                <h2 className="text-2xl font-bold md:text-[20px] md:leading-[27px] lg:text-[37px] lg:leading-[45px] text-[#161c2d] py-3 lg:py-5 md:py-3">
                  We Provide Best Fiber Internet Service By Top Providers
                </h2>
                <p className="text-gray-700 md:text-sm">
                  We are affiliate and retail partners of AT&T, Xfinity and Comcast Fiber Internet service providers in the United states for:
                </p>
                <div className="flex md:gap-2 lg:gap-20">
                  <ul className="py-5 lg:py-8 md:py-5">
                    <li className="flex text-[#161c2d] lg:text-[16px] md:text-[13px] mb-4 lg:mb-5 md:mb-2 items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Fiber Internet</li>
                    <li className="flex text-[#161c2d] lg:text-[16px] md:text-[13px] mb-4 lg:mb-5 md:mb-2 items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Speed Up To 1Gbps</li>
                    <li className="flex text-[#161c2d] lg:text-[16px] md:text-[13px] items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Cable Internet</li>
                  </ul>
                  <ul className="py-5 lg:py-8 md:py-5">
                    <li className="flex text-[#161c2d] lg:text-[16px] md:text-[13px] mb-4 lg:mb-5 md:mb-2 items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Cable Internet</li>
                    <li className="flex text-[#161c2d] lg:text-[16px] md:text-[13px] mb-4 lg:mb-5 md:mb-2 items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Self Installation</li>
                    <li className="flex text-[#161c2d] lg:text-[16px] md:text-[13px] items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Great Customer Support</li>
                  </ul>
                </div>
                <Link href="tel:(888)-845-0301" className="bg-primary text-white px-5 py-3 lg:py-4 md:py-3 rounded-md font-bold flex w-48 gap-2 items-center hover:animate-bounce-up-down"><Image src={'/phone.png'} alt="phone" width={18} height={18} /> (888)-845-0301</Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-purple-50 lg:mt-16 lg:pb-16">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 md:px-[4.4rem] sm:pt-12 lg:px-8 lg:pt-20">
          <h5 className="text-center text-[#6c41ff] font-bold">Our Packages</h5>
          <h2 className="text-center py-10 text-[#161c2d] text-2xl lg:text-4xl font-extrabold">Xfinity Packages</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-2 lg:gap-8">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <a
                  className="block rounded-md border border-[#1f2124] bg-[#1f2124] px-3 py-1.5 lg:py-2.5 text-left text-lg font-bold text-white focus:ring-3 focus:outline-hidden sm:mt-2"
                  href="#"
                >
                  Connect More
                </a>
                <h2 className="text-lg md:text-sm font-extrabold text-gray-900 my-5">
                  Price: $35.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold md:text-[13px] lg:text-[18px]">Speed: Up to 200 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <ul className="mt-2 space-y-5 sm:mt-0">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700 md:text-sm"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> No term contract required. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-primary bg-primary px-3 py-1.5 lg:py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <a
                  className="block rounded-md border border-[#1f2124] bg-[#1f2124] px-3 py-1.5 lg:py-2.5 text-left text-lg font-bold text-white focus:ring-3 focus:outline-hidden sm:mt-2"
                  href="#"
                >
                  Superfast
                </a>
                <h2 className="text-lg md:text-sm font-extrabold text-gray-900 my-5">
                  Price: $60.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold md:text-[13px] lg:text-[18px]">Speed: Up to 800 Mbps download, 20 Mbps upload</p>
              </div>
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <ul className="mt-2 space-y-5 sm:mt-0">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700 md:text-sm"> Ideal for households with multiple devices, supporting 4K streaming and online gaming. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> 12-month agreement required. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-primary bg-primary px-3 py-1.5 lg:py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <a
                  className="block rounded-md border border-[#1f2124] bg-[#1f2124] px-3 py-1.5 lg:py-2.5 text-left text-lg font-bold text-white focus:ring-3 focus:outline-hidden sm:mt-2"
                  href="#"
                >
                  Gigabit Extra
                </a>
                <h2 className="text-lg md:text-sm font-extrabold text-gray-900 my-5">
                  Price: $80.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold md:text-[13px] lg:text-[18px]">Speed: Up to 1,200 Mbps download, 35 Mbps upload</p>
              </div>
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <ul className="mt-2 space-y-5 sm:mt-0">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700 md:text-sm"> Best for large households or heavy internet users who need ultra-fast speeds for activities like HD streaming and large file downloads. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> No term contract. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-primary bg-primary px-3 py-1.5 lg:py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 pt-8 md:px-[4.4rem] sm:pt-12 lg:px-8">
          <h2 className="text-center pb-10 text-[#161c2d] text-2xl lg:text-4xl font-extrabold">AT&T Packages</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-2 md:gap-8">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <a
                  className="block rounded-md border border-[#1f2124] bg-[#1f2124] px-3 py-2.5 text-left text-lg font-bold text-white focus:ring-3 focus:outline-hidden sm:mt-2"
                  href="#"
                >
                  Essential Plan
                </a>
                <h2 className="text-lg md:text-sm font-extrabold text-gray-900 my-5">
                  Price: $25.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold md:text-[13px] lg:text-[18px]">Speed: Up to 100 Mbps download, 5 Mbps upload</p>
              </div>
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <ul className="mt-2 space-y-5 sm:mt-0">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700 md:text-sm"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> No term contract required. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-primary bg-primary px-3 py-1.5 lg:py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <a
                  className="block rounded-md border border-[#1f2124] bg-[#1f2124] px-3 py-1.5 lg:py-2.5 text-left text-lg font-bold text-white focus:ring-3 focus:outline-hidden sm:mt-2"
                  href="#"
                >
                  Preferred Plan
                </a>
                <h2 className="text-lg md:text-sm font-extrabold text-gray-900 my-5">
                  Price: $50.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold md:text-[13px] lg:text-[18px]">Speed: Up to 500 Mbps download, 50 Mbps upload</p>
              </div>
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <ul className="mt-2 space-y-5 sm:mt-0">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700 md:text-sm"> Ideal for moderate usage such as HD streaming, online gaming, and remote working. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> No term contract required. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-primary bg-primary px-3 py-1.5 lg:py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <a
                  className="block rounded-md border border-[#1f2124] bg-[#1f2124] px-3 py-1.5 lg:py-2.5 text-left text-lg font-bold text-white focus:ring-3 focus:outline-hidden sm:mt-2"
                  href="#"
                >
                  Ultimate Plan
                </a>
                <h2 className="text-lg md:text-sm font-extrabold text-gray-900 my-5">
                  Price: $75.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold md:text-[13px] lg:text-[18px]">Speed: Up to 1 Gbps download, 100 Mbps upload</p>
              </div>
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <ul className="mt-2 space-y-5 sm:mt-0">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700 md:text-sm"> Perfect for heavy usage, including 4K streaming, large file transfers, and smart home devices. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> No term contract required. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-primary bg-primary px-3 py-1.5 lg:py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 md:px-[4.4rem] sm:py-12 lg:px-8">
          <h2 className="text-center pb-10 text-[#161c2d] text-2xl lg:text-4xl font-extrabold">Spectrum Packages</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-2 lg:gap-8">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <a
                  className="block rounded-md border border-[#1f2124] bg-[#1f2124] px-3 py-1.5 lg:py-2.5 text-left text-lg font-bold text-white focus:ring-3 focus:outline-hidden sm:mt-2"
                  href="#"
                >
                  Spectrum Basic
                </a>
                <h2 className="text-lg md:text-sm font-extrabold text-gray-900 my-5">
                  Price: $29.99/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold md:text-[13px] lg:text-[18px]">Speed: Up to 100 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <ul className="mt-2 space-y-5 sm:mt-0">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700 md:text-sm"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> No term contract required. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-primary bg-primary px-3 py-1.5 lg:py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <a
                  className="block rounded-md border border-[#1f2124] bg-[#1f2124] px-3 py-1.5 lg:py-2.5 text-left text-lg font-bold text-white focus:ring-3 focus:outline-hidden sm:mt-2"
                  href="#"
                >
                  Spectrum Plus
                </a>
                <h2 className="text-lg md:text-sm font-extrabold text-gray-900 my-5">
                  Price: $49.99.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold md:text-[13px] lg:text-[18px]">Speed: Up to 400 Mbps download, 20 Mbps upload</p>
              </div>
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <ul className="mt-2 space-y-5 sm:mt-0">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700 md:text-sm"> Ideal for moderate usage such as HD streaming, online gaming, and remote working. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> No term contract required. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-primary bg-primary px-3 py-1.5 lg:py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <a
                  className="block rounded-md border border-[#1f2124] bg-[#1f2124] px-3 py-1.5 lg:py-2.5 text-left text-lg font-bold text-white focus:ring-3 focus:outline-hidden sm:mt-2"
                  href="#"
                >
                  Spectrum Ultra
                </a>
                <h2 className="text-lg md:text-sm font-extrabold text-gray-900 my-5">
                  Price: $69.99/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold md:text-[13px] lg:text-[18px]">Speed: Up to 1 Gbps (1000 Mbps) download, 35 Mbps upload</p>
              </div>
              <div className="p-6 px-8 md:p-2 md:px-4 lg:p-6 lg:px-8">
                <ul className="mt-2 space-y-5 sm:mt-0">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-700 md:text-sm"> Perfect for heavy usage, including 4K streaming, large file transfers, and smart home devices. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> No term contract required. </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-11 text-indigo-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700 md:text-sm"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-primary bg-primary px-3 py-1.5 lg:py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-primary py-10 lg:py-20">
        <div className="mx-auto max-w-screen-xl">
          <h5 className="text-center text-white text-bold">Authorized Dealers</h5>
          <h2 className="text-center text-white text-2xl lg:text-4xl font-bold py-5 lg:py-10">Our Authorized Dealers</h2>
          <LogoSlider />
        </div>
      </section>



      <section className="bg-[#1f2124] py-10 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-3 lg:px-0">
          <h5 className="text-center text-white text-bold">Services</h5>
          <h2 className="text-center text-white text-2xl lg:text-4xl font-bold py-10">Your Gateway to Premium Fiber Internet Services</h2>
          <p className="text-white text-center md:w-[800px] lg:w-[800px] mx-auto">Discover our comprehensive range of top-notch fiber internet services designed to meet your needs and exceed your expectations. Explore now.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 mx-auto max-w-screen-xl mt-16 px-5 md:px-16 lg:px-16">
          <div className="rounded-lg bg-primary text-center p-7 md:p-3 lg:p-7">
            <Wifi className="text-primary bg-white rounded-md w-14 h-14 p-2 mx-auto" />
            <h3 className="font-bold text-white text-2xl md:text-[20px] lg:text-2xl py-5">Cable Internet</h3>
            <p className="text-white text-sm md:text-sm lg:text-[16px]">Fastest cable Internet services in your area, call us now</p>
          </div>
          <div className="rounded-lg bg-primary text-center p-7 md:p-3 lg:p-7">
            <Globe className="text-primary bg-white rounded-md w-14 h-14 p-2 mx-auto" />
            <h3 className="font-bold text-white text-2xl md:text-[20px] lg:text-2xl py-5">Fiber Internet</h3>
            <p className="text-white text-sm md:text-sm lg:text-[16px]">Get affordable pricing with amazing discounts.  </p>
          </div>
          <div className="rounded-lg bg-primary text-center p-7 md:p-3 lg:p-7">
            <Wifi className="text-primary bg-white rounded-md w-14 h-14 p-2 mx-auto" />
            <h3 className="font-bold text-white text-2xl md:text-[20px] lg:text-2xl py-5">Wireless</h3>
            <p className="text-white text-sm md:text-sm lg:text-[16px]">Fastest Wireless Services to change your world</p>
          </div>
          <div className="rounded-lg bg-primary text-center p-7 md:p-3 lg:p-7">
            <Monitor className="text-primary bg-white rounded-md w-14 h-14 p-2 mx-auto" />
            <h3 className="font-bold text-white text-2xl md:text-[20px] lg:text-2xl py-5">TV Service</h3>
            <p className="text-white text-sm md:text-sm lg:text-[16px]">Call now for fast ever TV services by top providers</p>
          </div>
        </div>
      </section>




      <section className="bg-purple-50">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 mx-auto max-w-screen-xl px-5 md:px-[4.4rem] md:py-20 py-10 lg:px-16 lg:py-20">
          <div className="">
            <h5 className="text-primary font-bold">Contact Us</h5>
            <h2 className="text-[20px] lg:text-[43px] font-bold text-[#161c2d] py-7 leading-[1.2]">Connect with Us, Your Feedback Matters to Us.</h2>
            <p className="text-[#161c2d]">We value your input and inquiries. Please feel free to reach out to us. We’re here to assist you anytime you need us.</p>
            <ul className="py-5 leading-[3]">
              <li className="flex gap-2 items-center"><Phone className="text-primary" /> (888)-845-0301</li>
              <li className="flex gap-2 items-center"><Mail className="text-primary" /> support@internetcablecompanies.com</li>
              <li className="flex gap-2 items-center"><MapPin className="text-primary" /> 14402 W Bellfort St apt 132 Sugarland TX 77498</li>
            </ul>
            <div className="flex gap-5">
              <FacebookIcon className="bg-primary rounded-md text-white p-1 w-8 h-8 cursor-pointer hover:scale-110 transition" />
              <Twitter className="bg-primary rounded-md text-white p-1 w-8 h-8 cursor-pointer hover:scale-110 transition" />
              <Youtube className="bg-primary rounded-md text-white p-1 w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
          <div className="">
            <form action="#" className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                  NAME
                </label>
                <input
                  type="text"
                  id="Name"
                  name="name"
                  placeholder="Name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-[#E9E9E9] text-sm text-gray-700 shadow-xs p-3"
                  required
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
                  PHONE
                </label>
                <input
                  type="text"
                  id="Phone"
                  name="phone"
                  placeholder="Phone"
                  className="mt-1 w-full rounded-md border-gray-200 bg-[#E9E9E9] text-sm text-gray-700 shadow-xs p-3"
                  required
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">EMAIL</label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="Email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-[#E9E9E9] text-sm text-gray-700 shadow-xs p-3"
                  required
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Services" className="block text-sm font-medium text-gray-700">SERVICES</label>
                <select name="" id="Services" className="bg-[#E9E9E9] w-full p-3 rounded-md mt-1">
                  <option value="Cable Internet">Cable Internet</option>
                  <option value="Fiber Internet">Fiber Internet</option>
                  <option value="Wireless">Wireless</option>
                  <option value="TV Service">TV Service</option>
                </select>
              </div>
              <div className="col-span-6">
                <label htmlFor="Message" className="block text-sm font-medium text-gray-700">
                  MESSAGE
                </label>
                <textarea name="" id="Message" placeholder="Message" rows={4} className="w-full bg-[#E9E9E9] p-3 rounded-md mt-1" required></textarea>
              </div>
              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-xs"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    By clicking the send message button and submitting this form, I acknowledge that I permit JAMAL PRIME, INC. to use my information provided to search for their best current offers for telecom services. I also allow JAMAL PRIME, INC. express consent to contact me at the number and/or email address I have provided above with automated technology in relation to this inquiry via phone or e-mail.
                  </span>
                </label>
              </div>
              <div className="col-span-6">
                <button
                  className="inline-block shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-lg font-bold text-white transition hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden w-full"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>



      {/* Footer */}


      <footer className="bg-[#1f2124]">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 md:px-[4.4rem] lg:px-10 lg:pt-20">
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-3">
            <div>
              <div className="flex justify-start text-white font-extrabold text-2xl sm:justify-start">
                {/* <Image src={'/logo.png'} alt="logo" width={190} height={55} /> */}
                LISAM SOLUTIONS LLC
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
                    <a className="text-white text-[17px] transition" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-[17px] transition" href="#">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-[17px] transition" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-[17px] transition" href="#"> Contact Us </a>
                  </li>
                </ul>
              </div>

              <div className="text-left sm:text-left">
                <p className="text-2xl font-bold text-white mt-8 lg:mt-0 md:mt-0">Service</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-white text-[17px] transition" href="#">
                      Cable Internet
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-[17px] transition" href="#">Fiber Internet </a>
                  </li>
                  <li>
                    <a className="text-white text-[17px] transition" href="#"> TV Service </a>
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
              <p className="mt-4 text-sm text-white text-center sm:mt-0">2025 All right reserved by LISAM SOLUTIONS LLC.</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
