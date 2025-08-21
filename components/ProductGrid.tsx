"use client"

import React, { useEffect, useState } from 'react';
import HomeTabBar from './HomeTabBar';
import { productType } from '@/constants/data';
import { client } from '@/sanity/lib/client';
import LoadingDots from './LoadingDots';
import NoProductAvailable from './NoProductAvailable';
import { Product } from '@/sanity.types';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const [products, setProducts] =useState<Product[]>([])
    const [loading, setLoading] =useState(false)
    const [selectedTab, setSelectedTab] =useState(productType[0]?.title || "")

const query =`*[_type == "product" && variant==$variant]| order(name desc) {
  ...,"categories":categories[]->title
 
}`;

const params ={variant:selectedTab.toLowerCase()}
useEffect(()=>{
const fetchData =async ()=>{
setLoading(true);
try {
    const response =await client.fetch(query,params)
    setProducts(response)
    console.log(response)
} catch (error) {
    console.error("Product fetching error",error)
}finally{
    setLoading(false);
}}
fetchData()
},[selectedTab])
    return (
        <div>
            <HomeTabBar
             selectedTab={selectedTab} 
             onTabSelect={setSelectedTab}
             />
             {loading ? (
                <div className='flex flex-col items-center justify-center py-10 min-h-80 bg-gray-100 w-full mt-10'>
                   <LoadingDots/>   
                    <span>Product is Loading...</span>
                </div>
             ) :
                 products?.length ?(
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10'>
                    {products.map((product)=>(
                        <div key={product?._id}>
                           <div>
                           <ProductCard product={product}/>
                           </div>
                        </div>
                    ))}
                    
                    </div>
                 ) : (
                    <NoProductAvailable />
                 
             )}
             
        </div>
    );
};

export default ProductGrid;