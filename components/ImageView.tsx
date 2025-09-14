"use client";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type Props = {
    product: {
        isStock:boolean;     
        images: { asset: any }[]; // Sanity image objects
       
    };
};

const ImageView = ({ product }: Props) => {
    const [thumbnail, setThumbnail] = useState<string>("");

    useEffect(() => {
        if (product.images.length > 0) {
            setThumbnail(urlFor(product.images[0]).url());
        }
    }, [product.images]);

    return (
        <div className="max-w-6xl md:w-1/2 px-6">
            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className=" gap-3">

                    {/* Main image */}
                    <div className="max-w-100 rounded overflow-hidden">
                        {thumbnail && (
                            <Image
                                src={thumbnail}
                                alt="Selected product"
                                width={400}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        )}
                    </div>

                    {/* Thumbnails */}
                    <div className="flex flex-row gap-3 ">
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setThumbnail(urlFor(image).url())}
                                className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={urlFor(image).url()}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ImageView;
