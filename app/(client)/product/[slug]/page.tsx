import AddToCartButton from '@/components/AddToCartButton';
import Container from '@/components/Container';
import FavoriteButton from '@/components/FavoriteButton';
import ImageView from '@/components/ImageView';
import PriceView from '@/components/PriceView';
import ProductCharacteristics from '@/components/ProductCharacteristics';
import { getProductBySlug } from '@/sanity/queries';
import { StarIcon, CircleHelp, LayoutPanelLeft, Truck, Share, Share2, TruckIcon, CornerDownLeft } from 'lucide-react';
import React from 'react';

const SingleProductPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    const isStock = product?.stock > 0;
    console.log("product", product)
    return (
        <Container className='flex flex-col md:flex-row gap-1 pb-10'>
            {product?.images && (
                <ImageView product={product} isStock={isStock} />
            )}
            <div className='w-full md:w-1/2 flex flex-col gap-5'>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-bold mt-10 mb-3'>{product?.name}</h2>
                    <p className='text-sm text-gray-600 tracking-wide m'>
                        {product?.description}
                    </p>
                    <div className='flex items-center gap-0.5 text-xs'>
                        {[...Array(5)].map((_, index) => (
                            <StarIcon
                                key={index}
                                size={16}
                                className='text-yellow-500 '
                                fill={'#FFF176'}
                            />
                        ))}
                    </div>
                    <div>
                        <PriceView
                            price={product?.price}
                            discount={product?.discount}
                            className='text-lg font-bold'
                        />
                    </div>
                    <p className={`px-4 py-1.5 text-center inline-block font-semibold rounded-lg ${product?.stock === 0 ? "text-red-600" : "text-green-600 bg-green-100"}`}>
                        {(product?.stock as number) < 0 ? "In Stock" : "Out of Stock"}
                    </p>
                </div>
                <div className='flex items-center gap-2.5 lg:gap-4'>
                    <AddToCartButton product={product} />
                    <FavoriteButton showProduct={true} product={product} />
                </div>
                <ProductCharacteristics product={product} />


                <div className='flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2'>
                    <div className='flex items-center gap-2 text-sm text-black hoverEffect'>
                        <LayoutPanelLeft className="text-lg" />
                        <p>Compare Color</p>
                    </div>

                    <div className='flex items-center gap-2 text-sm text-black hoverEffect'>
                        <CircleHelp className="text-lg" />
                        <p>Ask a question</p>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-black hoverEffect'>
                        <Truck className='text-lg' />
                        <p className=''>
                            Delivery and Return
                        </p>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-black hoverEffect'>
                        <Share2 className='text-lg' />
                        <p>
                            Share
                        </p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='border border-lightColor/40 border-b-0 flex items-center gap-2.5 p-2'>
                        <TruckIcon size={30} className='text-lightColor'/>
                        <div>
                            <p className='text-base font-semibold text-black'>
                                Free delivery
                            </p>
                            <p className='text-gray-600 underline underline-offset-2'>
                                Enter your Postal code for delivery Availability
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='border border-lightColor/40 border-b flex items-center gap-2.5 p-2'>
                            <CornerDownLeft size={30} className='text-lightColor'/>
                            <div>
                                <p className='text-base font-semibold text-black'>Return delivery</p>
                                <p className='text-gray-600'>
                                    Free 30 days Delivery Returns.{" "}
                                    <span className='underline underline-offset-2'>Details</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default SingleProductPage