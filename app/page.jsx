"use client"
import { Check, FacebookIcon, Globe, Mail, MapPin, Monitor, Phone, Router, Twitter, Wifi, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoSlider from "./_components/LogoSlider";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      name,
      phone,
      email,
      service,
      message,
    };

    emailjs
      .send(
        "service_xa5igiu",
        "template_71vbjim",
        templateParams,
        "BwZoj4XUHnx6RCYkO"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setError(false);
        },
        (err) => {
          console.log("FAILED...", err);
          setError(true);
          setSuccess(false);
        }
      );

    setName("");
    setPhone("");
    setEmail("");
    setService("");
    setMessage("");

    toast.success("Submitted Successfully!");
  };


  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-0 mx-auto max-w-screen-xl px-4 pt-[6rem] md:pt-[4rem] lg:pt-[4rem] lg:pb-10 md:px-[4.4rem] lg:h-[840px] lg:items-center lg:px-[4.3rem]">
          <div>
            <h5 className="text-white font-bold text-[17px] md:text-[15px] mt-5 md:mt-10 lg:mt-0">Welcome to LISAM SOLUTIONS LLC</h5>
            <h1
              className="text-3xl font-bold text-white md:text-[20px] md:leading-[30px] lg:text-[44px] lg:leading-[55px] max-w-screen-xl lg:pr-0 py-7">
              Your Trusted Authorized Dealer for Major Telecom Brands
            </h1>
            <p className="max-w-lg text-[14px] text-white md:text-[13px] lg:text-[16px] mb-10 lg:mb-11"
            >
              Discover seamless connectivity and top-tier service with LISAM SOLUTIONS LLC. We proudly offer the best in telecom solutions from leading providers like Spectrum, HughesNet, AT&T, Xfinity, and more. Whether you need high-speed internet, reliable phone service, or premium TV entertainment, we’ve got you covered.
            </p>
            <Link href="tel:+1-(888)-845-0301" className="bg-primary py-3 lg:py-4 md:py-3 md:w-[180px] text-center justify-center rounded-md text-white font-bold lg:w-[210px] flex gap-2 items-center hover:animate-bounce-up-down">
              <Image src={'/phone.png'} alt="phone" width={18} height={18} /> (888)-845-0301
            </Link>
          </div>
          <div>
            <Image src={'/hero.png'} alt="hero" width={500} height={500} className='relative md:top-5 lg:top-20 ml-auto' />
            <div className="bg-white p-5 rounded-[20px] md:w-72 w-80 md:ml-auto lg:ml-auto relative z-50 bottom-24 lg:bottom-16 md:right-0 lg:right-12 cursor-pointer">
              <ul className='flex gap-3'>
                <li><img src="/star.png" alt="" /></li>
                <li><img src="/star.png" alt="" /></li>
                <li><img src="/star.png" alt="" /></li>
                <li><img src="/star.png" alt="" /></li>
                <li><img src="/star.png" alt="" /></li>
              </ul>
              <p className='pt-4 pb-2 text-[#506690] text-[17px] md:text-[15px]'>“I would like to personally thank you for your good product.”</p>
              <h4 className='text-[#161c2d] font-bold text-[20px]'>John Doe</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white lg:py-20" id="aboutUs">
        <div className="mx-auto max-w-screen-xl px-4 py-8 md:px-[4.4rem] lg:px-[4.4rem]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-5">
            <div>
              <Image src='./about.PNG' alt='about' width={600} height={600} />
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
                <Link href="tel:+1-(888)-845-0301" className="bg-primary text-white px-5 py-3 lg:py-4 md:py-3 rounded-md font-bold flex w-48 gap-2 items-center hover:animate-bounce-up-down"><Image src={'/phone.png'} alt="phone" width={18} height={18} /> (888)-845-0301</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 lg:pb-16">
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


      

      <section className="bg-purple-50" id="contactUs">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 mx-auto max-w-screen-xl px-5 md:px-[4.4rem] md:py-20 py-10 lg:px-16 lg:py-20">
          <div className="">
            <h5 className="text-primary font-bold">Contact Us</h5>
            <h2 className="text-[20px] lg:text-[43px] font-bold text-[#161c2d] py-7 leading-[1.2]">Connect with Us, Your Feedback Matters to Us.</h2>
            <p className="text-gray-800">We value your input and inquiries. Please feel free to reach out to us. We’re here to assist you anytime you need us.</p>
            <ul className="py-5 leading-[3]">
              <li className="flex gap-2 items-center"><Phone className="text-primary" /> <Link href="tel:+1-(888)-845-0301" className="text-gray-800">(888)-845-0301</Link></li>
              <li className="flex gap-2 items-center"><Mail className="text-primary" /> <Link href="mailto:support@internetcablecompanies.com" className="text-gray-800">support@internetcablecompanies.com</Link></li>
              <li className="flex gap-2 items-center"><MapPin className="text-primary" /> <p className="text-gray-800">14402 W Bellfort St apt 132 Sugarland TX 77498</p></li>
            </ul>
            <div className="flex gap-5">
              <FacebookIcon className="bg-primary rounded-md text-white p-1 w-8 h-8 cursor-pointer hover:scale-110 transition" />
              <Twitter className="bg-primary rounded-md text-white p-1 w-8 h-8 cursor-pointer hover:scale-110 transition" />
              <Youtube className="bg-primary rounded-md text-white p-1 w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
          <div className="">
            <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                  NAME
                </label>
                <input
                  type="text"
                  id="Name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  className="mt-1 w-full rounded-md border-gray-200 bg-[#E9E9E9] text-sm text-gray-700 shadow-xs p-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[A-Za-z\s]*$/.test(value)) {
                      setName(value);
                    }
                  }}
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
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[\d+\-()]*$/.test(value)) {
                      setPhone(value);
                    }
                  }}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Services" className="block text-sm font-medium text-gray-700">SERVICES</label>
                <select id="Services" className="bg-[#E9E9E9] w-full p-3 rounded-md mt-1 text-gray-700" value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="Choose Service">Choose Service</option>
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
                <textarea id="Message" placeholder="Message" rows={4} className="w-full bg-[#E9E9E9] p-3 rounded-md mt-1" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
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
                    By clicking the send message button and submitting this form, I acknowledge that I permit LISAM SOLUTIONS LLC. to use my information provided to search for their best current offers for telecom services. I also allow LISAM SOLUTIONS LLC. express consent to contact me at the number and/or email address I have provided above with automated technology in relation to this inquiry via phone or e-mail.
                  </span>
                </label>
              </div>
              <div className="col-span-6">
                <button
                  className="inline-block shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-lg font-bold text-white transition hover:bg-transparent hover:text-primary focus:ring-3 focus:outline-hidden w-full" type="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>


      <Footer />

    </>
  );
}
