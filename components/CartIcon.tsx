import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CartIcon = () => {
    return (
        <Link href={"/cart"} className='group relative'>
            <ShoppingBag className='w-5 h-5  hover:text-light_purple hoverEffect'/>
          <span className='absolute -top-2 -right-1 flex justify-center items-center h-3.5 rounded-full text-white w-3.5 p-2 font-semibold bg-dark_red'>0</span>  
        </Link>
    );
};

export default CartIcon;