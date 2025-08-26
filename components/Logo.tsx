import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Logo = ({className} : {className?:string}) => {
    return (
        <Link href={"/"}>
            <h2 className={cn("text-2xl text-dark_red font-black tracking-wider uppercase hover:text-light_red",className)}>
                Buyor<span className='text-light_red hover:text-dark_red hoverEffect'>a</span>
            </h2>
        </Link>
    );
};

export default Logo;