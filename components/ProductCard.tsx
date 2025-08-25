import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Flame, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AddToWishListButton from './AddToWishListButton';
import PriceView from './PriceView';
import AddToCartButtton from './AddToCartButtton';

const ProductCard = ({ product }: { product: Product }) => {
    console.log("product", product)
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
                <AddToWishListButton product={product} />
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
            <div className='p-3 h-48'>
                {
                    product?.categories && (
                        <p className='uppercase line-clamp-1 text-xs text-gray-600'>
                            {product?.categories.map((cat) => cat).join(", ")}</p>
                    )
                }
                <h3 className='text-sm line-clamp-1 font-semibold my-2'>{product?.name}</h3>
                <div className='flex items-center gap-2 my-2'>
                    <div className='flex items-center'>
                        {[...Array(5)].map((_, index) => (
                            <StarIcon size={16}
                                key={index}
                                className={
                                    index < 4 ? "text-lightColor" : "text-gray-500"
                                }
                                fill={index < 4 ? "#b444d0" : "#ababab"} />
                        ))}
                    </div>
                    <p className='text-lightColor text-xs tracking-wide Laun'>5 Reviews</p>
                </div>
                <div className='flex items-center gap-2.5 mb-2'>
                    <p className=' text-sm '>In Stock</p>
                    <p className={`text-lightColor font-semibold ${product?. stock === 0? "text-red-600" : ""}`}>
                    {(product?.stock as number)>0? product?.stock : "unavailable"}
                    </p>
                </div>
                <PriceView
                price={product?.price}
                discount={product?.discount}
                className="text-sm"
                />
                <AddToCartButtton product={product} className="w-36 rounded-full"/>
            </div>
        </div>
    );
};

export default ProductCard;