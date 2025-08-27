import { Headphones, RefreshCcw, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Brands = () => {
    return (
        <div className='p-10  bg-gray-50 mb-10'>
            <div>
                <h3 className="text-gray-700 text-start pb-3 text-xl font-semibold">Shop by Brands</h3>
                <Link
                    href={'/shop'}
                    className='text-sm font-semibold tracking-wide hover:text-dark_red hoverEffect'
                >
                    View All
                </Link>
            </div>

           

        </div>
    );
};

export default Brands;