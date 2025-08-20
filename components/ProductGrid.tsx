"use client"

import React, { useEffect, useState } from 'react';
import HomeTabBar from './HomeTabBar';
import { productType } from '@/constants/data';
import { client } from '@/sanity/lib/client';
import { Loader2 } from 'lucide-react';
import LoadingDots from './LoadingDots';

const ProductGrid = () => {
    const [products, setProducts] =useState([])
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
             {!loading ? (
                <div className='flex flex-col items-center justify-center py-10 min-h-80 bg-gray-100 w-full mt-10'>
                   <LoadingDots/>   
                    <span>Product is Loading...</span>
                </div>
             ) :(
                 <>products</>
             )}
             
        </div>
    );
};

export default ProductGrid;