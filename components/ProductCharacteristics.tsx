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
                        {product?.name}:Characteristics
                        <AccordionContent>
                            <p>Brand:{brand && <span>{brand[0]?.brandName}</span>}</p>
                        </AccordionContent>
                    </AccordionTrigger>
                </AccordionItem>
            </Accordion>
            ProductCharacteristics
        </div>
    );
};

export default ProductCharacteristics;