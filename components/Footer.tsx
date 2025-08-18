import React from 'react';
import Container from './Container';
import SocialMedia from './SocialMedia';
import FooterTop from './FooterTop';
import Logo from './Logo';
import Link from 'next/link';
import { categoriesData, quickLinks } from '@/constants/data';


const Footer = () => {
    return (
        <footer>
            <Container>
                <FooterTop />

                <div className='bg-white'>
                    <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                        <div className=' max-w-80'>
                            <Logo />
                            <p className='text-sm pt-2 pb-3'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text
                            </p>
                            <SocialMedia

                            />
                        </div>
                        {/* //Quick Links */}
                        <div>
                            <p className='text-lg font-semibold text-gray-800'>Quick Links</p>
                            <ul className='mt-3 flex flex-col gap-4 text-sm text-gray-500'>
                                {
                                    quickLinks.map((item) => (
                                        <li key={item?.title}>
                                            <Link href={`q-link/${item?.href}`}>{item?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* //Categories */}
                        <div>
                            <p className='text-lg font-semibold text-gray-800'>Categories</p>
                            <ul className='mt-3 flex flex-col gap-4 text-sm text-gray-500'>
                                {
                                    categoriesData.map((item) => (
                                        <li key={item?.title}>
                                            <Link href={`category/${item?.href}`}>{item?.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>

                        

                        <div className='max-w-80'>
                            <p className='text-lg font-semibold text-gray-800'>Newslater</p>
                            <p className='mt-3 text-sm text-gray-500'>
                                Subscribe to our newsletter for inspiration and special offers.
                            </p>
                            <div className='flex items-center mt-4'>
                                <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                                <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                                    {/* Arrow icon */}
                                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className='border-gray-300 mt-8' />
                    <div className='flex flex-col md:flex-row gap-2 items-center justify-center py-5'>
                        <p className='text-gray-500'>© {new Date().getFullYear()} <a href="https://prebuiltui.com" className='text-gray-800 font-bold capitalize'>BUYORA</a>. All rights reserved.</p>
                       
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;