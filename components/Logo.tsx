import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Logo = ({className} : {className?:string}) => {
    return (
        <Link href={"/"}>
            <h2 className={cn("text-2xl text-dark_purple font-black tracking-wider uppercase hover:text-light_purple",className)}>
                Buyor<span className='text-[#b444d0] hover:text-dark_purple hoverEffect'>a</span>
            </h2>
        </Link>
    );
};

export default Logo;