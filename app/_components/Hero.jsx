import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const subheadingRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 500 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 300 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 300 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }
    );

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 300 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="hero">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-0 mx-auto max-w-screen-xl px-4 pt-[6rem] md:pt-[4rem] lg:pt-[4rem] pb-10 md:px-[4.4rem] lg:h-[840px] lg:items-center lg:px-[4.3rem]">
        <div>
          <h5 ref={subheadingRef} className="text-white font-bold text-[17px] mt-10 lg:mt-0">Welcome to Jamal Prime Inc</h5>
          <h1
            ref={headingRef}
            className="text-3xl font-bold text-white lg:text-[44px] lg:leading-[55px] max-w-screen-xl lg:pr-0 py-7">
            Your Trusted Authorized Dealer for Major Telecom Brands
          </h1>
          <p
            ref={paragraphRef}
            className="max-w-lg text-white text-[16px] mb-10 lg:mb-11"
          >
            Discover seamless connectivity and top-notch service with Jamal Prime Inc. We proudly offer the best in telecom solutions from leading brands such as Spectrum, HughesNet, AT&T, Xfinity, and more. Whether you need reliable internet, phone, or TV services, we’ve got you covered.
          </p>
          <Link href="tel:+1-(888)-845-0301" ref={buttonRef} className="bg-primary px-8 py-4 rounded-md text-white font-bold w-[210px] flex gap-2 items-center hover:animate-bounce-up-down">
            <Image src={'/phone.png'} alt="phone" width={18} height={18} /> (855) 843-7329
          </Link>
        </div>
        <div>
          <Image src={'/hero.png'} alt="hero" width={500} height={500} className='relative top-20 ml-auto'/>
          <div ref={cardRef} className="bg-white p-5 rounded-[20px] w-80 ml-auto relative z-50 bottom-16 right-12 cursor-pointer">
            <ul className='flex gap-3'>
              <li><img src="/star.png" alt="" /></li>
              <li><img src="/star.png" alt="" /></li>
              <li><img src="/star.png" alt="" /></li>
              <li><img src="/star.png" alt="" /></li>
              <li><img src="/star.png" alt="" /></li>
            </ul>
            <p className='pt-4 pb-2 text-[#506690] text-[17px]'>“I would like to personally thank you for your good product.”</p>
            <h4 className='text-[#161c2d] font-bold text-[20px]'>John Doe</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
