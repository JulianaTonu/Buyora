import { cn } from '@/lib/utils';
import React from 'react';

const PriceFormatter = ({amount, className}:Props) => {
    const formattedPrice = new Number(amount).toLocaleString("en-US", {
        currency:"USD",
        style:"currency",
        minimumFractionDigits:2,
    })
    return (
        <span
        className={cn("text-sm font-semibold text-darkColor", className)}>
            {formattedPrice}
        </span>
    );
};

export default PriceFormatter;