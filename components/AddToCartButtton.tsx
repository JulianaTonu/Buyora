import { Product } from '@/sanity.types';
import { ShoppingBag } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
interface Props{
    product:Product;
    className?:string
}

const AddToCartButtton = ({product,className}:Props) => {
    const isOutOfStock = product?.stock === 0;
    return (
        <div>
            <Button 
            // onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={cn("w-full bg-black text-light_bg shadow-none border my-3 font-semibold tracking-wide hover:text-white hover:bg-dark_red hover:border-dark_red hoverEffect",className)}>
            <ShoppingBag/> {isOutOfStock ? "Out of Stock" : "Add to Cart "}
        </Button>
        </div>
    );
};

export default AddToCartButtton;