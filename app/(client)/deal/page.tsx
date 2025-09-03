import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import { getDealProducts } from '@/sanity/queries';
import React from 'react';

const DealPage =async () => {
     const products =await getDealProducts()
     console.log("dealProducts", products)

    return (
        <div className='py-10 '>
            <Container>
                <h1 className='mb-5 underline underline-offset-6 tracking-wide hover:text-lightColor font-semibold'>Hot Deals of the Week</h1>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5'>
                    {products.map((product)=>(
                        <ProductCard key={product?._id} product={product}/>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default DealPage;