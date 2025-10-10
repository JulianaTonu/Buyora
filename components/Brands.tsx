import { urlFor } from '@/sanity/lib/image';
import { getAllBrands } from '@/sanity/queries';
import { Headphones, RefreshCcw, ShieldCheck, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const extraData = [
    {
        title: "Free Delivery",
        description: "Free shipping over $100",
        icon: <Truck size={45} />
    },
    {
        title: "Free Return",
        description: "Free Shipping over $100",
        icon: <RefreshCcw size={45} />
    },
    {
        title: "Customer Support",
        description: "Friendly 27/7 customer support",
        icon: <Headphones size={45} />
    },
    {
        title: "Money Back Guarantee",
        description: "Quality checked by our team",
        icon: <ShieldCheck size={45} />
    }
]

const Brands = async () => {
    const brands = await getAllBrands()

    return (
        <div className='p-10  bg-gray-50 mb-10'>
            <div className='flex justify-between '>
                <h3 className="text-gray-700 text-start pb-3 text-xl font-semibold">Shop By Brands</h3>
                <Link
                    href={'/shop'}
                    className='text-sm font-semibold tracking-wide text-white p-2.5 rounded-md bg-darkColor hover:bg-dark_red hoverEffect'
                >
                    View All
                </Link>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-10 mt-14 max-md:px-2 '>
                {brands?.slice(0, 6).map((brand) => (
                    <Link key={brand._id} className='bg-white p-4 rounded-md hover:shadow-2xl' 
                   href={{ pathname: "/shop", query: { brand: brand?.slug?.current } }}>
                        {brand?.image && (
                            <Image
                                src={urlFor(brand?.image).url()}
                                alt='brandImage'
                                width={250}
                                height={250}
                                className='w-32 h-20 object-contain'
                            />
                        )}
                    </Link>
                ))}

                 {/* // extra  */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-12 md:justify-between mt-2'>
                    {extraData?.map((data) => (
                        <div key={data.title} className='flex md:items-center gap-3 group '>
                            <p className='w-12 h-12 text-gray-600 group-hover:text-lightColor'>{data.icon}</p>
                            {/* <Truck className='w-12 h-12 text-gray-600 group-hover:text-lightColor' /> */}
                            <div className=''>
                                <p className='text-gray-700 font-semibold'>{data?.title}</p>
                                <p className='text-gray-500'>{data.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        </div>
    );
};

export default Brands;