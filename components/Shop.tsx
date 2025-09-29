'use client'
import { Brand, Category } from '@/sanity.types';
import React from 'react';
import Container from './Container';

 interface Props{
    categories:Category[];
    brands:Brand;
 }

const Shop = ({categories, brand}: Props) => {
    return (
        <div className='border-t'>
            <Container className='mt-5'>
                <div className='sticky top-0 z-10 mb-5'>
                    <div className='flex items-center justify-between'>
                        <p className='text-lg uppercase tracking-wide'>Get the product as you need </p>
                        <button className='text-black underline text-sm mt-2 font-medium hover:text-darkColor hoverEffect'>Reset Filters</button>
                    </div>
                </div>
                <div>
                    <div>Filter value</div>
                    <div>Products</div>
                </div>
                
            </Container>
        </div>
    );
};

export default Shop;