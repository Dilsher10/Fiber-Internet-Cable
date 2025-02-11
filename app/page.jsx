import { Check, CheckCheck, CheckCheckIcon, CheckCircle, CheckCircle2, CheckCircle2Icon, CheckCircleIcon, CheckSquare, Phone, PhoneCall, PhoneIcon, TicketCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}

      <header className="absolute z-10 w-full mt-5 lg:mt-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-white font-extrabold text-[17px] lg:text-2xl" href="/">
                <Image src={'/logo.png'} alt='logo' width={180} height={180} />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-10 font-bold">
                  <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Home </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> About Us </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Services </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-gray-500/75" href="#"> Contact Us </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-primary px-8 py-4 font-bold text-white shadow-sm"
                  href="#"
                >

                  (855) 843-7329
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



      <section className="hero">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8  mx-auto max-w-screen-xl px-4 pt-32 pb-10 sm:px-6 lg:h-[800px] lg:items-center lg:px-4">
          <div className="">
            <h5 className="text-white font-bold text-[17px] mt-10">Welcome to Jamal Prime Inc</h5>
            <h1 className="text-3xl font-bold text-white lg:text-[44px] leading-[55px] max-w-screen-xl lg:pr-10 py-10">
              Your Trusted Authorized Dealer for Major Telecom Brands
            </h1>
            <p className="max-w-lg text-white text-[17px] mb-16">
              Discover seamless connectivity and top-notch service with Jamal Prime Inc. We proudly offer the best in telecom solutions from leading brands such as Spectrum, HughesNet, AT&T, Xfinity, and more. Whether you need reliable internet, phone, or TV services, we’ve got you covered.
            </p>
            <Link href="tel:+1-(888)-845-0301" className="bg-primary px-8 py-5 rounded-md text-white font-bold">(855) 843-7329</Link>
          </div>
          <div className="">
            <Image src={'/hero.png'} alt="hero" width={500} height={500} />
          </div>
        </div>
      </section>



      <section className="mt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-36">
            <div>
              <img
                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded"
                alt=""
              />
            </div>
            <div>
              <div className="max-w-lg md:max-w-none">
                <h5 className="text-primary font-bold">About Us</h5>
                <h2 className="text-2xl font-bold sm:text-[36px] leading-tight text-[#161c2d] py-5">
                  We Provide Best Fiber Internet Service By Top Providers
                </h2>
                <p className="text-gray-700">
                  We are affiliate and retail partners of AT&T, Xfinity and Comcast Fiber Internet service providers in the United states for:
                </p>
                <div className="flex gap-20">
                  <ul className="py-8">
                    <li className="flex text-[#161c2d] text-[16px] mb-5 items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Fiber Internet</li>
                    <li className="flex text-[#161c2d] text-[16px] mb-5 items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Speed Up To 1Gbps</li>
                    <li className="flex text-[#161c2d] text-[16px] items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Cable Internet</li>
                  </ul>
                  <ul className="py-8">
                    <li className="flex text-[#161c2d] text-[16px] mb-5 items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Cable Internet</li>
                    <li className="flex text-[#161c2d] text-[16px] mb-5 items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Self Installation</li>
                    <li className="flex text-[#161c2d] text-[16px] items-center"><Check className="text-primary bg-purple-100 rounded-full mr-3 w-5 h-5" /> Great Customer Support</li>
                  </ul>
                </div>
                <Link href={'/'} className="bg-primary text-white px-5 py-4 rounded-md flex w-48 items-center"><Phone className="mr-3" /> (855) 843-7329</Link>
              </div>
            </div>
          </div>
        </div>
      </section>






      <section className="bg-purple-50 mt-16">
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-20">
          <h5 className="text-center text-[#6c41ff] font-bold">Our Packages</h5>
          <h2 className="text-center py-10 text-[#161c2d] text-4xl font-extrabold">Xfinity Packages</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 sm:px-8">
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-[#271446] px-3 py-2.5 text-left text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Connect More
                </a>
                <h2 className="text-lg font-extrabold text-gray-900 my-5">
                  Price: $35.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold">Speed: Up to 200 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 sm:px-8">
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
                    <span className="text-gray-700"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
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

                    <span className="text-gray-700"> No term contract required. </span>
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

                    <span className="text-gray-700"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-primary px-3 py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 sm:px-8">
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-[#271446] px-3 py-2.5 text-left text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Connect More
                </a>
                <h2 className="text-lg font-extrabold text-gray-900 my-5">
                  Price: $35.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold">Speed: Up to 200 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 sm:px-8">
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
                    <span className="text-gray-700"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
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

                    <span className="text-gray-700"> No term contract required. </span>
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

                    <span className="text-gray-700"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-primary px-3 py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 sm:px-8">
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-[#271446] px-3 py-2.5 text-left text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Connect More
                </a>
                <h2 className="text-lg font-extrabold text-gray-900 my-5">
                  Price: $35.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold">Speed: Up to 200 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 sm:px-8">
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
                    <span className="text-gray-700"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
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

                    <span className="text-gray-700"> No term contract required. </span>
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

                    <span className="text-gray-700"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-primary px-3 py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
          <h2 className="text-center pb-10 text-[#161c2d] text-4xl font-extrabold">Xfinity Packages</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 sm:px-8">
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-[#271446] px-3 py-2.5 text-left text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Connect More
                </a>
                <h2 className="text-lg font-extrabold text-gray-900 my-5">
                  Price: $35.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold">Speed: Up to 200 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 sm:px-8">
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
                    <span className="text-gray-700"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
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

                    <span className="text-gray-700"> No term contract required. </span>
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

                    <span className="text-gray-700"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-primary px-3 py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 sm:px-8">
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-[#271446] px-3 py-2.5 text-left text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Connect More
                </a>
                <h2 className="text-lg font-extrabold text-gray-900 my-5">
                  Price: $35.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold">Speed: Up to 200 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 sm:px-8">
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
                    <span className="text-gray-700"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
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

                    <span className="text-gray-700"> No term contract required. </span>
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

                    <span className="text-gray-700"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-primary px-3 py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 sm:px-8">
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-[#271446] px-3 py-2.5 text-left text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Connect More
                </a>
                <h2 className="text-lg font-extrabold text-gray-900 my-5">
                  Price: $35.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold">Speed: Up to 200 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 sm:px-8">
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
                    <span className="text-gray-700"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
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

                    <span className="text-gray-700"> No term contract required. </span>
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

                    <span className="text-gray-700"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-primary px-3 py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <h2 className="text-center pb-10 text-[#161c2d] text-4xl font-extrabold">Xfinity Packages</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 sm:px-8">
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-[#271446] px-3 py-2.5 text-left text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Connect More
                </a>
                <h2 className="text-lg font-extrabold text-gray-900 my-5">
                  Price: $35.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold">Speed: Up to 200 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 sm:px-8">
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
                    <span className="text-gray-700"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
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

                    <span className="text-gray-700"> No term contract required. </span>
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

                    <span className="text-gray-700"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-primary px-3 py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 sm:px-8">
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-[#271446] px-3 py-2.5 text-left text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Connect More
                </a>
                <h2 className="text-lg font-extrabold text-gray-900 my-5">
                  Price: $35.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold">Speed: Up to 200 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 sm:px-8">
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
                    <span className="text-gray-700"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
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

                    <span className="text-gray-700"> No term contract required. </span>
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

                    <span className="text-gray-700"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-primary px-3 py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs bg-white">
              <div className="p-6 sm:px-8">
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-[#271446] px-3 py-2.5 text-left text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Connect More
                </a>
                <h2 className="text-lg font-extrabold text-gray-900 my-5">
                  Price: $35.00/month
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="text-gray-800 font-bold">Speed: Up to 200 Mbps download, 10 Mbps upload</p>
              </div>
              <div className="p-6 sm:px-8">
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
                    <span className="text-gray-700"> Suitable for everyday activities like browsing, streaming, and video conferencing. </span>
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

                    <span className="text-gray-700"> No term contract required. </span>
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

                    <span className="text-gray-700"> Includes a $10/month discount for automatic payments and paperless billing. </span>
                  </li>
                </ul>
                <a
                  className="mt-4 block rounded-md border border-indigo-600 bg-primary px-3 py-2.5 text-center text-lg font-bold text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>





      

    </>
  );
}
