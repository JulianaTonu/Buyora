import { Product } from '@/sanity.types';
import { Heart } from 'lucide-react';
import React from 'react';

const AddToWishListButton = ({
    product, className,
}: {
    product: Product;
    className: string;
}
) => {
    return (
        <div>
            <button className='absolute top-2 right-2 z-10 text-xs    p-2 rounded-full  hoverEffect '>
                <Heart size={15} fill='#ffff'
                    className='hoverEffect'
                />
            </button>
            
        </div>
    );
};

export default AddToWishListButton;