import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
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
  );
};

export default Hero;
