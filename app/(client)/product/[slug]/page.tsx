import Container from '@/components/Container';
import ImageView from '@/components/ImageView';
import { getProductBySlug } from '@/sanity/queries';
import React from 'react';

const SingleProductPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    const isStock = product?.stock > 0;
    return (
        <Container className='flex flex-col md:flex-row gap-10 pb-10'>
            {product?.images && (
                <ImageView images={product?.images} isStock={isStock} />
            )}
            <div className='w-full md:w-1/2 flex flex-col gap-5'>
                <div className='space-y-1'>
                    <h2 className=''>{product?.name}</h2>
                    <p className='text-sm text-gray-600 tracking-wide'>
                        {product?.description}
                    </p>
                    <div className='flex items-center gap-0.5 text-xs'>

                    </div>
                    <p>{`(120)`}</p>
                </div>

            </div>
        </Container>
    );
};

export default SingleProductPage