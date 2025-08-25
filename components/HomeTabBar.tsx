import { productType } from '@/constants/data';
import Link from 'next/link';
import React from 'react';

interface Props {
    selectedTab:string;
    onTabSelect:(tab:string)=>void
}
const HomeTabBar = ({selectedTab, onTabSelect}) => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3 font-semibold text-sm'>
                {productType?.map((item)=>(
                    <button
                    onClick={()=>onTabSelect(item?.title)}
                     key={item.title}
                     className={`border border-dark_red/30 px-4 py-1.5 hover:bg-lightColor hover:text-white md:px-6 md:py-2 rounded-full  hoverEffect ${selectedTab === item?.title? "bg-lightColor text-white border-lightColor" : "bg-lightColor/20"}`}
                     >
                        {item?.title}
                     </button>
                ))}
            </div>
            <Link href={"/shop"}
            className="border border-dark_red/30 px-4 py-1.5 hover:bg-lightColor hover:text-white md:px-6 md:py-2 rounded-full  hoverEffect"
            >See all</Link>
        </div>
    );
};

export default HomeTabBar;