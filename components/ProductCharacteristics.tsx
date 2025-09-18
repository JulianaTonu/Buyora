import { Product } from '@/sanity.types';
import { getBrands } from '@/sanity/queries';
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger } from './ui/accordion';

const ProductCharacteristics = async ({
    product,

}: { product: Product | null | undefined }) => {
    const brand = await getBrands(product?.slug?.current as string)
    console.log("brand", brand)
    return (
        <div>
            <Accordion>
                <AccordionItem>
                    <AccordionTrigger>
                        {product?.name}:Characteristics
                    </AccordionTrigger>
                </AccordionItem>
            </Accordion>
            ProductCharacteristics
        </div>
    );
};

export default ProductCharacteristics;