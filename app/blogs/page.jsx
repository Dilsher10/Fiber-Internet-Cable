import React from 'react'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'

const page = () => {
    return (
        <>
            <Navbar />

            <section className="hero">
                <div className="grid px-4 pt-[6rem] md:pt-[4rem] lg:pt-[4rem] lg:pb-10 md:px-[4.4rem] lg:h-[400px] lg:items-center lg:px-[4.3rem]">
                    <div>
                        <h1
                            className="text-3xl font-bold text-white text-center md:text-[20px] lg:text-[40px] py-7">
                            Blog Archives
                        </h1>
                        <p className="text-[14px] text-white text-center md:text-[13px] lg:text-[16px]"
                        >
                            <span className='text-primary'>Home</span> / Blog Archives
                        </p>
                    </div>
                </div>
            </section>


            <section className='mx-auto max-w-screen-xl px-4 md:px-[4.4rem] lg:px-[3rem] py-10'>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    <article className="overflow-hidden rounded-3xl border border-gray-100 bg-[#1f2124] shadow-xs cursor-pointer">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p className="mt-6 line-clamp-3 text-sm/relaxed text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                dignissimos. Molestias explicabo corporis voluptatem?
                            </p>

                            <a href="#" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-white border border-primary py-3 px-4 rounded-full">
                                Read More

                                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                    <article className="overflow-hidden rounded-3xl border border-gray-100 bg-[#1f2124] shadow-xs cursor-pointer">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p className="mt-6 line-clamp-3 text-sm/relaxed text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                dignissimos. Molestias explicabo corporis voluptatem?
                            </p>

                            <a href="#" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-white border border-primary py-3 px-4 rounded-full">
                                Read More

                                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                    <article className="overflow-hidden rounded-3xl border border-gray-100 bg-[#1f2124] shadow-xs cursor-pointer">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p className="mt-6 line-clamp-3 text-sm/relaxed text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                dignissimos. Molestias explicabo corporis voluptatem?
                            </p>

                            <a href="#" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-white border border-primary py-3 px-4 rounded-full">
                                Read More

                                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                    <article className="overflow-hidden rounded-3xl border border-gray-100 bg-[#1f2124] shadow-xs cursor-pointer">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p className="mt-6 line-clamp-3 text-sm/relaxed text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                dignissimos. Molestias explicabo corporis voluptatem?
                            </p>

                            <a href="#" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-white border border-primary py-3 px-4 rounded-full">
                                Read More

                                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                    <article className="overflow-hidden rounded-3xl border border-gray-100 bg-[#1f2124] shadow-xs cursor-pointer">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p className="mt-6 line-clamp-3 text-sm/relaxed text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                dignissimos. Molestias explicabo corporis voluptatem?
                            </p>

                            <a href="#" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-white border border-primary py-3 px-4 rounded-full">
                                Read More

                                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                    <article className="overflow-hidden rounded-3xl border border-gray-100 bg-[#1f2124] shadow-xs cursor-pointer">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-56 w-full object-cover"
                        />

                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p className="mt-6 line-clamp-3 text-sm/relaxed text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                                mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                                dignissimos. Molestias explicabo corporis voluptatem?
                            </p>

                            <a href="#" className="group mt-6 inline-flex items-center gap-1 text-sm font-medium text-white border border-primary py-3 px-4 rounded-full">
                                Read More

                                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default page