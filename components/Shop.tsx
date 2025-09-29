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
                <div>
                </div>
            </Container>
        </div>
    );
};

export default Shop;