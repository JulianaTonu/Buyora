import { productType } from '@/constants/data';
import Link from 'next/link';
import React from 'react';

const HomeTabBar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3 font-semibold text-sm'>
                {productType?.map((item)=>(
                    <button
                     key={item.title}
                     className={`border border-dark_purple/30 px-4 py-1.5 hover:bg-lightColor hover:text-white md:px-6 md:py-2 rounded-full  hoverEffect `}
                     >{item?.title}</button>
                ))}
            </div>
            <Link href={"/shop"}
            className="border border-dark_purple/30 px-4 py-1.5 hover:bg-lightColor hover:text-white md:px-6 md:py-2 rounded-full  hoverEffect"
            >See all</Link>
        </div>
    );
};

export default HomeTabBar;