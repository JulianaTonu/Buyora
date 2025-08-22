import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Flame } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AddToWishListButton from './AddToWishListButton';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className='text-sm border-[1px] border-blue-950/20 rounded-md bg-white group'>
            <div className='relative group overflow-hidden bg-gray-50'>
                {/* {product?.name} */}
                {product?.images && (
                    <Image
                        src={urlFor(product?.images[0]).url()}
                        alt="pImage"
                        loading="lazy"
                        width={700}
                        height={700}
                    />
                )}  
                <AddToWishListButton product={product}/>     
                {product?.status === "sale" && (
                    <p className='absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-lightColor hoverEffect group-hover:text-lightColor'>Sale!</p>
                )}
                {product?.status === "new" && (
                    <p className='absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-lightColor text-white/80 bg-lightColor hoverEffect group-hover:text-white'>New!</p>
                )}

                {product?.status === "hot" && <Link
                href={"/deal"}
                className='absolute top-2 left-2 z-10 text-xs border border-orange/50 px-1 py-1 rounded-full group-hover:border-lightColor hoverEffect group-hover:text-lightColor'
                > 
                <Flame size={18} fill='#fb6c08'
                className='text-orange/50 group-hover:text-orange hoverEffect'
                />
                </Link>}
                 </div>
                 <div className='p-3'>
                   {
                    product?.categories && <p>{product?.categories}</p>
                   }
                    </div>
        </div>
    );
};

export default ProductCard;