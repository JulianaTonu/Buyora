import { Product } from '@/sanity.types';
import { ShoppingBag } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
interface Props{
    product:Product;
    className?:string
}

const AddToCartButton = ({product,className}:Props) => {
    const isOutOfStock = product?.stock === 0;
    return (
        <div className='w-full'>
            <Button 
            // onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={cn("w-full bg-lightColor text-white shadow-none hover:text-black border my-3 font-semibold tracking-wide hover-text-white  hover:bg-black  hoverEffect",className)}>
            <ShoppingBag/> {isOutOfStock ? "Out of Stock" : "Add to Cart "}
        </Button>
        </div>
    );
};

export default AddToCartButton;