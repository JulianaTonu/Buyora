import { Product } from '@/sanity.types';
import { getBrands } from '@/sanity/queries';
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger } from './ui/accordion';
import { AccordionContent } from '@radix-ui/react-accordion';


const ProductCharacteristics = async ({
    product,

}: { product: Product | null | undefined }) => {
    const brand = await getBrands(product?.slug?.current as string)
    console.log("brand", brand)
    return (
        <div>
            <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                    <AccordionTrigger>
                        {product?.name}:Characteristics </AccordionTrigger>
                        <AccordionContent>
                            <p className='flex items-center justify-between'>
                                Brand:{""}
                                {brand && (
                                    
                                    <span className='font-semibold tracking-wide'>
                                        {brand[0]?.brandName}
                                        </span>
                                        )}
                                        </p>
                            <p className='flex items-center justify-between'>
                                Collection{""}
                                <span className='font-semibold tracking-wide'>2025</span>
                            </p>
                           
                            <p className='flex items-center justify-between'>
                                Type{""}
                                <span className='font-semibold tracking-wide'>
                                    {product?.variant}
                                </span>
                            </p>
                            <p className='flex items-center justify-between'>
                                Stock{""}
                                <span className='font-semibold tracking-wide'>
                                 {product?.stock ? "Available" : "Out of Stock"}
                                </span>
                            </p>
                        </AccordionContent>
                    
                </AccordionItem>
            </Accordion>
            ProductCharacteristics
        </div>
    );
};

export default ProductCharacteristics;