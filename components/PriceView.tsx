import React from 'react';
import PriceFormatter from './PriceFormatter';
interface Props {
    price:number | undefined;
    discount:number | undefined;
    className?:string;
}


const PriceView =({price,discount,className}: Props) => {

    return (
        <div>
            <div className='flex items-center gap-2'>
               <PriceFormatter amount={price} className="text-darkColor"/>
               {price && discount && <PriceFormatter amount= {price + (discount * price)/ 100}
               className="line-through text-xs font-normal text-lightColor"
             />}
            </div>
        </div>
    );
};

export default PriceView;