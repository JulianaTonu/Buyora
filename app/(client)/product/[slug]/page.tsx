import Container from '@/components/Container';
import ImageView from '@/components/ImageView';
import PriceView from '@/components/PriceView';
import { getProductBySlug } from '@/sanity/queries';
import { StarIcon } from 'lucide-react';
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
                <ImageView  product={product} isStock={isStock} />
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
                    <p className='font-semibold'>{`(120)`}</p>
                </div>

            </div>
        </Container>
    );
};

export default SingleProductPage